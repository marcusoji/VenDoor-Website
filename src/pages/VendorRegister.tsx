import { useState, useRef, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft, ArrowRight, Upload, MapPin, Clock, Check,
  Store, Phone, Mail, FileText, Building2, Loader2, X
} from "lucide-react";
import { uploadImage, registerVendor } from "@/lib/api";
const STEPS = ["Business Info", "Location & Contact", "Operating Details", "Legal & Verification"];

const CATEGORIES = ["Restaurant", "Fast Food", "Bakery", "Drinks", "Groceries", "Others"];
const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const PREP_TIMES = ["10 mins", "15 mins", "20 mins", "25 mins", "30 mins", "45 mins", "60 mins"];
const BANKS = [
  "Access Bank", "Citibank", "Ecobank", "Fidelity Bank", "First Bank", "FirstMonie",
  "FCMB", "GTBank", "Heritage Bank", "Jaiz Bank", "Keystone Bank", "Kuda Bank",
  "Opay", "Palmpay", "Polaris Bank", "Providus Bank", "Stanbic IBTC", "Sterling Bank",
  "Union Bank", "UBA", "Unity Bank", "Wema Bank", "Zenith Bank"
];
const STATES_CITIES: Record<string, string[]> = {
  "Delta": ["Abraka", "Warri", "Asaba", "Sapele", "Ughelli"],
  "Lagos": ["Ikeja", "Lekki", "Victoria Island", "Surulere", "Yaba"],
  "Abuja FCT": ["Garki", "Wuse", "Maitama", "Asokoro"],
  "Rivers": ["Port Harcourt", "Obio-Akpor"],
  "Edo": ["Benin City", "Auchi"],
};

const STORAGE_KEY = "vendoor_vendor_draft";

const loadDraft = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch { return null; }
};

const VendorRegister = () => {
  const navigate = useNavigate();
  const draft = loadDraft();

  const [step, setStep] = useState(draft?.step || 0);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Step 1
  const [businessName, setBusinessName] = useState(draft?.businessName || "");
  const [categories, setCategories] = useState<string[]>(draft?.categories || []);
  const [description, setDescription] = useState(draft?.description || "");
  const [logo, setLogo] = useState<string | null>(draft?.logo || null);
  const [logoName, setLogoName] = useState(draft?.logoName || "");

  // Step 2
  const [address, setAddress] = useState(draft?.address || "");
  const [phone, setPhone] = useState(draft?.phone || "");
  const [email, setEmail] = useState(draft?.email || "");
  const [state, setState] = useState(draft?.state || "");
  const [city, setCity] = useState(draft?.city || "");
  const [locating, setLocating] = useState(false);

  // Step 3
  const [operatingDays, setOperatingDays] = useState<string[]>(draft?.operatingDays || []);
  const [openTime, setOpenTime] = useState(draft?.openTime || "08:00");
  const [closeTime, setCloseTime] = useState(draft?.closeTime || "20:00");
  const [deliveryRadius, setDeliveryRadius] = useState(draft?.deliveryRadius || 5);
  const [prepTime, setPrepTime] = useState(draft?.prepTime || "20 mins");
  const [offersPickup, setOffersPickup] = useState(draft?.offersPickup || false);
  const [offersScheduled, setOffersScheduled] = useState(draft?.offersScheduled || false);

  // Step 4
  const [govId, setGovId] = useState<string | null>(draft?.govId || null);
  const [govIdName, setGovIdName] = useState(draft?.govIdName || "");
  const [bizRegNo, setBizRegNo] = useState(draft?.bizRegNo || "");
  const [accountName, setAccountName] = useState(draft?.accountName || "");
  const [accountNumber, setAccountNumber] = useState(draft?.accountNumber || "");
  const [bankName, setBankName] = useState(draft?.bankName || "");
  const [agreedTerms, setAgreedTerms] = useState(false);

  const logoRef = useRef<HTMLInputElement>(null);
  const govIdRef = useRef<HTMLInputElement>(null);

  // Save draft on change
  useEffect(() => {
    const data = {
      step, businessName, categories, description, logo, logoName,
      address, phone, email, state, city,
      operatingDays, openTime, closeTime, deliveryRadius, prepTime, offersPickup, offersScheduled,
      govId, govIdName, bizRegNo, accountName, accountNumber, bankName,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }, [step, businessName, categories, description, logo, logoName, address, phone, email, state, city, operatingDays, openTime, closeTime, deliveryRadius, prepTime, offersPickup, offersScheduled, govId, govIdName, bizRegNo, accountName, accountNumber, bankName]);

  const handleFileUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>, setter: (v: string | null) => void, nameSetter: (v: string) => void) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) return;
    nameSetter(file.name);
    const reader = new FileReader();
    reader.onload = () => setter(reader.result as string);
    reader.readAsDataURL(file);
  }, []);

  const toggleCategory = (cat: string) => {
    setCategories(prev => prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]);
  };

  const toggleDay = (day: string) => {
    setOperatingDays(prev => prev.includes(day) ? prev.filter(d => d !== day) : [...prev, day]);
  };

  const useCurrentLocation = () => {
    if (!navigator.geolocation) return;
    setLocating(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setAddress(`Lat: ${pos.coords.latitude.toFixed(4)}, Lng: ${pos.coords.longitude.toFixed(4)}`);
        setLocating(false);
      },
      () => setLocating(false),
      { enableHighAccuracy: true }
    );
  };

  const isStep1Valid = businessName.trim().length >= 3 && categories.length > 0;
  const isStep2Valid = address.trim().length > 0 && phone.trim().length >= 10 && email.includes("@") && state && city;
  const isStep3Valid = operatingDays.length > 0;
  const isStep4Valid = !!govId && accountName.trim().length > 0 && accountNumber.trim().length >= 10 && !!bankName && agreedTerms;

  const stepValid = [isStep1Valid, isStep2Valid, isStep3Valid, isStep4Valid];


const handleSubmit = async () => {
  if (!isStep4Valid || submitting) return;
  setSubmitting(true);

  try {
    // Upload logo if selected
    let logoUrl = null;
    if (logoRef.current?.files?.[0]) {
      const res = await uploadImage(logoRef.current.files[0], "logos");
      logoUrl = res.data.url;
    }

    // Upload government ID if selected
    let govIdUrl = null;
    if (govIdRef.current?.files?.[0]) {
      const res = await uploadImage(govIdRef.current.files[0], "documents");
      govIdUrl = res.data.url;
    }

    await registerVendor({
      businessName,
      categories,
      description,
      logoUrl,
      address,
      phone,
      email,
      state,
      city,
      operatingDays,
      openTime,
      closeTime,
      deliveryRadius,
      prepTime,
      offersPickup,
      offersScheduled,
      bizRegNo,
      bankName,
      accountName,
      accountNumber,
    });

    localStorage.removeItem(STORAGE_KEY);
    setSubmitted(true);
  } catch (err: any) {
    alert(err.message || "Registration failed. Please try again.");
  } finally {
    setSubmitting(false);
  }
};
  if (submitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-6">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="text-center max-w-md"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
            className="w-24 h-24 rounded-full bg-secondary flex items-center justify-center mx-auto mb-8"
          >
            <motion.div
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <Check size={48} className="text-secondary-foreground" />
            </motion.div>
          </motion.div>
          <h2 className="text-3xl font-extrabold text-foreground mb-3">Application Submitted</h2>
          <p className="text-muted-foreground text-lg mb-8">
            Our team will review your application within <span className="font-bold text-foreground">24–48 hours</span>. You'll receive an email notification once your account is approved.
          </p>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate("/")}
            className="bg-primary text-primary-foreground px-8 py-4 rounded-2xl text-sm font-bold shadow-xl shadow-primary/30"
          >
            Return to Home
          </motion.button>
        </motion.div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "100%" }}
      transition={{ type: "spring", damping: 30, stiffness: 300 }}
      className="min-h-screen bg-background"
    >
      {/* Header */}
      <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container flex items-center gap-4 h-16">
          <button onClick={() => step > 0 ? setStep(step - 1) : navigate("/")} className="text-foreground hover:text-primary transition-colors">
            <ArrowLeft size={22} />
          </button>
          <div className="flex-1">
            <h1 className="text-lg font-bold text-foreground">Register as a Vendor</h1>
            <p className="text-xs text-muted-foreground">Start selling food on VenDoor</p>
          </div>
          <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1.5 rounded-full">
            Step {step + 1} of 4
          </span>
        </div>

        {/* Progress bar */}
        <div className="h-1 bg-muted">
          <motion.div
            className="h-full bg-primary"
            initial={false}
            animate={{ width: `${((step + 1) / 4) * 100}%` }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        </div>
      </div>

      {/* Step labels */}
      <div className="container pt-6 pb-2">
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {STEPS.map((label, i) => (
            <button
              key={label}
              onClick={() => { if (i < step) setStep(i); }}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-xs font-bold transition-all ${
                i === step
                  ? "bg-primary text-primary-foreground"
                  : i < step
                  ? "bg-secondary text-secondary-foreground cursor-pointer"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Form content */}
      <div className="container pb-32">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.3 }}
          >
            {step === 0 && (
              <div className="space-y-6 max-w-lg mx-auto">
                <FormCard title="Business Name" icon={<Store size={18} />} required>
                  <input
                    value={businessName}
                    onChange={e => setBusinessName(e.target.value)}
                    placeholder="e.g. Mama's Kitchen"
                    className="form-input"
                  />
                  {businessName.length > 0 && businessName.length < 3 && (
                    <p className="text-xs text-destructive mt-1">Minimum 3 characters</p>
                  )}
                </FormCard>

                <FormCard title="Business Category" icon={<Store size={18} />} required>
                  <div className="flex flex-wrap gap-2">
                    {CATEGORIES.map(cat => (
                      <button
                        key={cat}
                        onClick={() => toggleCategory(cat)}
                        className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                          categories.includes(cat)
                            ? "bg-primary text-primary-foreground shadow-md"
                            : "bg-muted text-muted-foreground hover:bg-muted/80"
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </FormCard>

                <FormCard title="Business Description" icon={<FileText size={18} />}>
                  <textarea
                    value={description}
                    onChange={e => setDescription(e.target.value.slice(0, 250))}
                    placeholder="Tell customers what makes you special..."
                    rows={3}
                    className="form-input resize-none"
                  />
                  <p className="text-xs text-muted-foreground text-right mt-1">{description.length}/250</p>
                </FormCard>

                <FormCard title="Business Logo" icon={<Upload size={18} />}>
                  <input ref={logoRef} type="file" accept="image/png,image/jpeg,image/jpg" className="hidden" onChange={e => handleFileUpload(e, setLogo, setLogoName)} />
                  {logo ? (
                    <div className="flex items-center gap-4">
                      <img src={logo} alt="Logo" className="w-20 h-20 rounded-2xl object-cover border-2 border-border" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground truncate">{logoName}</p>
                        <button onClick={() => { setLogo(null); setLogoName(""); }} className="text-xs text-destructive mt-1">Remove</button>
                      </div>
                    </div>
                  ) : (
                    <button onClick={() => logoRef.current?.click()} className="w-full border-2 border-dashed border-border rounded-2xl p-8 text-center hover:border-primary/50 transition-colors">
                      <Upload size={24} className="mx-auto text-muted-foreground mb-2" />
                      <p className="text-sm text-muted-foreground">Click to upload (JPG/PNG)</p>
                    </button>
                  )}
                </FormCard>
              </div>
            )}

            {step === 1 && (
              <div className="space-y-6 max-w-lg mx-auto">
                <FormCard title="Business Address" icon={<MapPin size={18} />} required>
                  <input value={address} onChange={e => setAddress(e.target.value)} placeholder="Enter your business address" className="form-input" />
                  <button
                    onClick={useCurrentLocation}
                    disabled={locating}
                    className="mt-3 flex items-center gap-2 text-xs font-bold text-primary hover:text-primary/80 transition-colors"
                  >
                    {locating ? <Loader2 size={14} className="animate-spin" /> : <MapPin size={14} />}
                    {locating ? "Detecting..." : "Use Current Location"}
                  </button>
                </FormCard>

                <FormCard title="State / City" icon={<Building2 size={18} />} required>
                  <div className="grid grid-cols-2 gap-3">
                    <select value={state} onChange={e => { setState(e.target.value); setCity(""); }} className="form-input">
                      <option value="">Select State</option>
                      {Object.keys(STATES_CITIES).map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                    <select value={city} onChange={e => setCity(e.target.value)} className="form-input" disabled={!state}>
                      <option value="">Select City</option>
                      {state && STATES_CITIES[state]?.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>
                </FormCard>

                <FormCard title="Phone Number" icon={<Phone size={18} />} required>
                  <input value={phone} onChange={e => setPhone(e.target.value)} placeholder="+234 800 000 0000" type="tel" className="form-input" />
                </FormCard>

                <FormCard title="Email Address" icon={<Mail size={18} />} required>
                  <input value={email} onChange={e => setEmail(e.target.value)} placeholder="you@business.com" type="email" className="form-input" />
                </FormCard>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6 max-w-lg mx-auto">
                <FormCard title="Operating Days" icon={<Clock size={18} />} required>
                  <div className="flex flex-wrap gap-2">
                    {DAYS.map(day => (
                      <button
                        key={day}
                        onClick={() => toggleDay(day)}
                        className={`w-12 h-12 rounded-xl text-xs font-bold transition-all ${
                          operatingDays.includes(day)
                            ? "bg-primary text-primary-foreground shadow-md"
                            : "bg-muted text-muted-foreground hover:bg-muted/80"
                        }`}
                      >
                        {day}
                      </button>
                    ))}
                  </div>
                </FormCard>

                <FormCard title="Business Hours" icon={<Clock size={18} />}>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs text-muted-foreground mb-1 block">Opening</label>
                      <input type="time" value={openTime} onChange={e => setOpenTime(e.target.value)} className="form-input" />
                    </div>
                    <div>
                      <label className="text-xs text-muted-foreground mb-1 block">Closing</label>
                      <input type="time" value={closeTime} onChange={e => setCloseTime(e.target.value)} className="form-input" />
                    </div>
                  </div>
                </FormCard>

                <FormCard title={`Delivery Radius: ${deliveryRadius} km`} icon={<MapPin size={18} />}>
                  <input
                    type="range"
                    min={1}
                    max={30}
                    value={deliveryRadius}
                    onChange={e => setDeliveryRadius(Number(e.target.value))}
                    className="w-full accent-primary"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>1 km</span><span>30 km</span>
                  </div>
                </FormCard>

                <FormCard title="Average Preparation Time" icon={<Clock size={18} />}>
                  <select value={prepTime} onChange={e => setPrepTime(e.target.value)} className="form-input">
                    {PREP_TIMES.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </FormCard>

                <div className="space-y-3">
                  <ToggleField label="Offers Pickup" checked={offersPickup} onChange={setOffersPickup} />
                  <ToggleField label="Offers Scheduled Orders" checked={offersScheduled} onChange={setOffersScheduled} />
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6 max-w-lg mx-auto">
                <FormCard title="Government ID Upload" icon={<FileText size={18} />} required>
                  <input ref={govIdRef} type="file" accept="image/png,image/jpeg,image/jpg" className="hidden" onChange={e => handleFileUpload(e, setGovId, setGovIdName)} />
                  {govId ? (
                    <div className="flex items-center gap-4">
                      <img src={govId} alt="ID" className="w-20 h-16 rounded-xl object-cover border-2 border-border" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground truncate">{govIdName}</p>
                        <button onClick={() => { setGovId(null); setGovIdName(""); }} className="text-xs text-destructive mt-1">Remove</button>
                      </div>
                    </div>
                  ) : (
                    <button onClick={() => govIdRef.current?.click()} className="w-full border-2 border-dashed border-border rounded-2xl p-8 text-center hover:border-primary/50 transition-colors">
                      <Upload size={24} className="mx-auto text-muted-foreground mb-2" />
                      <p className="text-sm text-muted-foreground">Upload Government-issued ID (JPG/PNG)</p>
                    </button>
                  )}
                </FormCard>

                <FormCard title="Business Registration Number" icon={<Building2 size={18} />}>
                  <input value={bizRegNo} onChange={e => setBizRegNo(e.target.value)} placeholder="Optional but recommended" className="form-input" />
                </FormCard>

                <FormCard title="Bank Account Details" icon={<Building2 size={18} />} required>
                  <div className="space-y-3">
                    <input value={accountName} onChange={e => setAccountName(e.target.value)} placeholder="Account Name" className="form-input" />
                    <input value={accountNumber} onChange={e => setAccountNumber(e.target.value)} placeholder="Account Number" type="text" className="form-input" />
                    <select value={bankName} onChange={e => setBankName(e.target.value)} className="form-input">
                      <option value="">Select Bank</option>
                      {BANKS.map(b => <option key={b} value={b}>{b}</option>)}
                    </select>
                  </div>
                </FormCard>

                <div className="bg-card rounded-2xl border border-border p-4">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={agreedTerms}
                      onChange={e => setAgreedTerms(e.target.checked)}
                      className="mt-1 w-5 h-5 rounded accent-primary"
                    />
                    <span className="text-sm text-muted-foreground">
                      I agree to VenDoor's{" "}
                      <span className="text-primary font-semibold underline cursor-pointer">Vendor Terms</span>{" "}
                      &{" "}
                      <span className="text-primary font-semibold underline cursor-pointer">Commission Structure</span>
                    </span>
                  </label>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Nav */}
      <div className="fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-xl border-t border-border p-4 z-50">
        <div className="container flex gap-3 max-w-lg mx-auto">
          {step > 0 && (
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setStep(step - 1)}
              className="flex-1 bg-muted text-foreground py-4 rounded-2xl text-sm font-bold flex items-center justify-center gap-2"
            >
              <ArrowLeft size={16} /> Back
            </motion.button>
          )}
          {step < 3 ? (
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setStep(step + 1)}
              disabled={!stepValid[step]}
              className={`flex-1 py-4 rounded-2xl text-sm font-bold flex items-center justify-center gap-2 transition-all ${
                stepValid[step]
                  ? "bg-primary text-primary-foreground shadow-xl shadow-primary/30"
                  : "bg-muted text-muted-foreground cursor-not-allowed"
              }`}
            >
              Next <ArrowRight size={16} />
            </motion.button>
          ) : (
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleSubmit}
              disabled={!isStep4Valid || submitting}
              className={`flex-1 py-4 rounded-2xl text-sm font-bold flex items-center justify-center gap-2 transition-all ${
                isStep4Valid && !submitting
                  ? "bg-primary text-primary-foreground shadow-xl shadow-primary/30"
                  : "bg-muted text-muted-foreground cursor-not-allowed"
              }`}
            >
              {submitting ? (
                <><Loader2 size={16} className="animate-spin" /> Submitting...</>
              ) : (
                <>Submit for Review <Check size={16} /></>
              )}
            </motion.button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

// Sub-components
const FormCard = ({ title, icon, required, children }: { title: string; icon: React.ReactNode; required?: boolean; children: React.ReactNode }) => (
  <div className="bg-card rounded-2xl border border-border p-5">
    <div className="flex items-center gap-2 mb-3">
      <span className="text-primary">{icon}</span>
      <h3 className="text-sm font-bold text-foreground">{title}</h3>
      {required && <span className="text-xs text-destructive">*</span>}
    </div>
    {children}
  </div>
);

const ToggleField = ({ label, checked, onChange }: { label: string; checked: boolean; onChange: (v: boolean) => void }) => (
  <div className="bg-card rounded-2xl border border-border p-4 flex items-center justify-between">
    <span className="text-sm font-medium text-foreground">{label}</span>
    <button
      onClick={() => onChange(!checked)}
      className={`w-12 h-7 rounded-full transition-all relative ${checked ? "bg-primary" : "bg-muted"}`}
    >
      <motion.div
        className="w-5 h-5 rounded-full bg-white absolute top-1 shadow-md"
        animate={{ left: checked ? 26 : 4 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
    </button>
  </div>
);

export default VendorRegister;
