import { motion, AnimatePresence } from "framer-motion";
import { Bike, ArrowRight, DollarSign, Clock, MapPin, Shield, User, Phone, Mail, Upload, Check, Car } from "lucide-react";
import { useState, useRef } from "react";
import { uploadImage, registerRider } from "@/lib/api";
const perks = [
  { icon: DollarSign, text: "Earn up to ₦150K/month" },
  { icon: Clock, text: "Flexible hours, your schedule" },
  { icon: MapPin, text: "Work in your neighbourhood" },
  { icon: Shield, text: "Insurance & rider support" },
];

const BicycleIcon = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="5.5" cy="17.5" r="3.5"/><circle cx="18.5" cy="17.5" r="3.5"/><circle cx="15" cy="5" r="1"/><path d="M12 17.5V14l-3-3 4-3 2 3h2"/>
  </svg>
);

const vehicleTypes = [
  { value: "bicycle", label: "Bicycle", icon: BicycleIcon },
  { value: "bike", label: "Bike", icon: Bike },
  { value: "car", label: "Car", icon: Car },
];

const requiresLicense = (vehicleType: string) => vehicleType === "car";

const boxSizes = [
  { value: "small", label: "Small (3 orders)" },
  { value: "medium", label: "Medium (5 orders)" },
  { value: "large", label: "Large (10+ orders)" },
];

const RiderCTA = () => {
  const [formData, setFormData] = useState({
    name: "", phone: "", email: "", city: "abraka",
    vehicleType: "", boxSize: "", agreedToTerms: false,
  });
  const [licenseFile, setLicenseFile] = useState<File | null>(null);
  const [licensePreview, setLicensePreview] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [showEnvelope, setShowEnvelope] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setLicenseFile(file);
      const reader = new FileReader();
      reader.onloadend = () => setLicensePreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const needsLicense = requiresLicense(formData.vehicleType);
  const isFormValid = formData.name && formData.phone && formData.email && formData.city && formData.vehicleType && formData.boxSize && formData.agreedToTerms && (!needsLicense || licenseFile);

  

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  if (!isFormValid) return;
  setShowEnvelope(true);

  try {
    // Upload license if car was selected
    let licenseUrl = null;
    if (licenseFile) {
      const uploadRes = await uploadImage(licenseFile, "documents");
      licenseUrl = uploadRes.data.url;
    }

    await registerRider({
      fullName: formData.name,
      phone: formData.phone,
      email: formData.email,
      city: formData.city,
      vehicleType: formData.vehicleType,
      boxSize: formData.boxSize,
      licenseUrl,
    });

    setTimeout(() => {
      setSubmitted(true);
      setShowEnvelope(false);
    }, 3000);
  } catch (err: any) {
    setShowEnvelope(false);
    alert(err.message || "Application failed. Please try again.");
  }
};
  return (
    <section id="join-riders" className="py-24 md:py-36 relative overflow-hidden">
      {/* Animated road/path background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="absolute w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="none">
          <motion.path
            d="M-50 300 Q200 100 400 300 Q600 500 800 300 Q1000 100 1250 300"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            fill="none"
            strokeDasharray="12 8"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.15 }}
            viewport={{ once: true }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
          />
        </svg>
        <svg className="absolute w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="none">
          <circle r="6" fill="hsl(var(--primary))" opacity="0.8">
            <animateMotion dur="5s" repeatCount="indefinite" path="M-50 300 Q200 100 400 300 Q600 500 800 300 Q1000 100 1250 300" />
          </circle>
        </svg>
      </div>

      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px]" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4">
            Join the Fleet
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-5">
            Ride with Us,
            <br />
            <span className="text-gradient">Earn Your Way</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto">
            Turn your bike into a money machine. Sign up in 60 seconds.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-5xl mx-auto">
          {/* Left: animated visuals + perks */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative flex justify-center mb-12">
              <div className="relative w-56 h-56 md:w-72 md:h-72">
                {[0, 4, 8].map((inset, i) => (
                  <motion.div
                    key={i}
                    className="absolute rounded-full border-2 border-primary/20"
                    style={{ inset: `${inset * 4}px` }}
                    animate={{ scale: [1, 1.2 + i * 0.05, 1], opacity: [0.3 + i * 0.1, 0, 0.3 + i * 0.1] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4 }}
                  />
                ))}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="w-28 h-28 md:w-36 md:h-36 rounded-3xl bg-primary flex items-center justify-center shadow-2xl shadow-primary/40"
                    animate={{ y: [0, -10, 0], rotate: [0, 2, -2, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Bike size={56} className="text-primary-foreground" />
                  </motion.div>
                </div>
                <motion.div
                  className="absolute -top-2 -right-4 bg-card rounded-2xl px-4 py-3 shadow-xl border border-border"
                  animate={{ y: [0, -8, 0], rotate: [0, 3, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <span className="text-sm font-extrabold text-primary">₦5,200</span>
                  <p className="text-[10px] text-muted-foreground">Last delivery</p>
                </motion.div>
                <motion.div
                  className="absolute -bottom-2 -left-4 bg-card rounded-2xl px-4 py-3 shadow-xl border border-border"
                  animate={{ y: [0, 8, 0], rotate: [0, -3, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <span className="text-sm font-extrabold text-secondary">12 trips</span>
                  <p className="text-[10px] text-muted-foreground">Today 🔥</p>
                </motion.div>
                <motion.div
                  className="absolute top-1/2 -right-12 bg-primary text-primary-foreground rounded-full px-3 py-1.5 shadow-lg text-xs font-bold"
                  animate={{ x: [0, 4, 0], opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ₦150K/mo
                </motion.div>
              </div>
            </div>

            <div className="space-y-4">
              {perks.map((perk, i) => (
                <motion.div
                  key={perk.text}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <perk.icon size={20} className="text-primary" />
                  </div>
                  <span className="font-semibold text-sm">{perk.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Registration form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <AnimatePresence mode="wait">
              {showEnvelope ? (
                <EnvelopeAnimation key="envelope" />
              ) : submitted ? (
                <SuccessState key="success" name={formData.name} />
              ) : (
                <motion.div
                  key="form"
                  className="bg-card rounded-3xl p-8 md:p-10 border border-border shadow-2xl shadow-primary/5 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-[60px]" />
                  
                  <h3 className="text-2xl font-extrabold mb-2 relative z-10">
                    Register as a <span className="text-primary">Rider</span>
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6 relative z-10">
                    Fill in your details and start earning today.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                    {/* Name */}
                    <div>
                      <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider block mb-1.5">Full Name</label>
                      <div className="relative">
                        <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                        <input
                          type="text" required placeholder="Enter your full name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full pl-11 pr-4 py-3 rounded-xl bg-background border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider block mb-1.5">Phone Number</label>
                      <div className="relative">
                        <Phone size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                        <input
                          type="tel" required placeholder="+234 800 000 0000"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full pl-11 pr-4 py-3 rounded-xl bg-background border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider block mb-1.5">Email</label>
                      <div className="relative">
                        <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                        <input
                          type="email" required placeholder="you@email.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full pl-11 pr-4 py-3 rounded-xl bg-background border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                        />
                      </div>
                    </div>

                    {/* City - fixed to Abraka */}
                    <div>
                      <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider block mb-1.5">City</label>
                      <div className="relative">
                        <MapPin size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                        <select
                          required
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          className="w-full pl-11 pr-4 py-3 rounded-xl bg-background border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all appearance-none"
                        >
                          <option value="abraka">Abraka (Available Now)</option>
                        </select>
                      </div>
                    </div>

                    {/* Vehicle Type */}
                    <div>
                      <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider block mb-1.5">Vehicle Type</label>
                      <div className="grid grid-cols-3 gap-2">
                        {vehicleTypes.map((v) => (
                          <button
                            type="button"
                            key={v.value}
                            onClick={() => setFormData({ ...formData, vehicleType: v.value })}
                            className={`py-3 rounded-xl border text-sm font-semibold transition-all flex flex-col items-center gap-1.5 ${
                              formData.vehicleType === v.value
                                ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20"
                                : "bg-background border-border hover:border-primary/40"
                            }`}
                          >
                            <v.icon size={20} />
                            {v.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Box Size */}
                    <div>
                      <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider block mb-1.5">Delivery Box Size</label>
                      <div className="grid grid-cols-3 gap-2">
                        {boxSizes.map((b) => (
                          <button
                            type="button"
                            key={b.value}
                            onClick={() => setFormData({ ...formData, boxSize: b.value })}
                            className={`py-2.5 rounded-xl border text-xs font-semibold transition-all ${
                              formData.boxSize === b.value
                                ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20"
                                : "bg-background border-border hover:border-primary/40"
                            }`}
                          >
                            {b.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Driver's License Upload - required for car only */}
                    {formData.vehicleType === "car" && (
                    <div>
                      <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider block mb-1.5">
                        Driver's License <span className="text-destructive">*</span>
                      </label>
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        className="w-full py-3 rounded-xl border-2 border-dashed border-border hover:border-primary/40 bg-background text-sm text-muted-foreground flex items-center justify-center gap-2 transition-all"
                      >
                        {licensePreview ? (
                          <div className="flex items-center gap-2">
                            <img src={licensePreview} alt="License preview" className="w-8 h-8 rounded object-cover" />
                            <span className="text-foreground font-medium">{licenseFile?.name}</span>
                          </div>
                        ) : (
                          <>
                            <Upload size={16} /> Upload photo or scan
                          </>
                        )}
                      </button>
                    </div>
                    )}

                    {/* Terms checkbox */}
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <div
                        onClick={() => setFormData({ ...formData, agreedToTerms: !formData.agreedToTerms })}
                        className={`w-5 h-5 rounded-md border-2 flex items-center justify-center shrink-0 mt-0.5 transition-all ${
                          formData.agreedToTerms
                            ? "bg-primary border-primary"
                            : "border-border group-hover:border-primary/40"
                        }`}
                      >
                        {formData.agreedToTerms && <Check size={12} className="text-primary-foreground" />}
                      </div>
                      <span className="text-xs text-muted-foreground leading-relaxed">
                        I agree to the <a href="#" className="text-primary font-semibold underline">Terms & Conditions</a> and <a href="#" className="text-primary font-semibold underline">Privacy Policy</a>.
                      </span>
                    </label>

                    <motion.button
                      type="submit"
                      whileHover={isFormValid ? { scale: 1.02 } : {}}
                      whileTap={isFormValid ? { scale: 0.98 } : {}}
                      disabled={!isFormValid}
                      className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 shadow-xl mt-2 transition-all ${
                        isFormValid
                          ? "bg-primary text-primary-foreground shadow-primary/25 cursor-pointer"
                          : "bg-muted text-muted-foreground cursor-not-allowed shadow-none"
                      }`}
                    >
                      Join the Fleet <ArrowRight size={20} />
                    </motion.button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* Envelope send animation */
const EnvelopeAnimation = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="bg-card rounded-3xl p-12 border border-border shadow-2xl flex flex-col items-center justify-center min-h-[400px]"
  >
    {/* Form paper folding into envelope */}
    <motion.div className="relative">
      {/* Paper */}
      <motion.div
        className="w-48 h-60 bg-background rounded-lg border border-border shadow-md flex flex-col items-center justify-center gap-2 p-4"
        initial={{ y: 0, scale: 1, rotateX: 0 }}
        animate={{
          y: [0, -20, 60],
          scale: [1, 0.9, 0.7],
          rotateX: [0, 10, 0],
        }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <div className="w-full h-2 bg-muted rounded" />
        <div className="w-3/4 h-2 bg-muted rounded" />
        <div className="w-full h-2 bg-muted rounded" />
        <div className="w-1/2 h-2 bg-muted rounded" />
        <div className="w-full h-2 bg-primary/30 rounded mt-2" />
      </motion.div>

      {/* Envelope */}
      <motion.div
        className="absolute top-16 left-1/2 -translate-x-1/2 w-56 h-36 bg-primary/10 rounded-xl border-2 border-primary/30 flex items-end justify-center overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 20 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        {/* Envelope flap */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-16 bg-primary/20 origin-top"
          style={{ clipPath: "polygon(0 0, 50% 100%, 100% 0)" }}
          initial={{ rotateX: 180 }}
          animate={{ rotateX: 0 }}
          transition={{ delay: 1.8, duration: 0.4 }}
        />
        <Mail size={24} className="text-primary mb-3" />
      </motion.div>
    </motion.div>

    {/* Flying away */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.2 }}
      className="mt-20 text-center"
    >
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.4 }}
        className="text-sm font-bold text-primary"
      >
        Sending your application...
      </motion.p>
    </motion.div>
  </motion.div>
);

/* Success state */
const SuccessState = ({ name }: { name: string }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    className="bg-card rounded-3xl p-12 border border-border shadow-2xl text-center"
  >
    <motion.div
      animate={{ scale: [1, 1.2, 1] }}
      transition={{ duration: 0.6 }}
      className="text-6xl mb-6"
    >
      🎉
    </motion.div>
    <h3 className="text-2xl font-extrabold mb-3">Rider Application Submitted!</h3>
    <p className="text-muted-foreground mb-2">
      Welcome to the VenDoor fleet, {name.split(" ")[0]}!
    </p>
    <p className="text-sm text-muted-foreground mb-6">
      Check your email within the next <span className="text-primary font-bold">3 days</span> for next steps.
    </p>
    <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-5 py-2 text-sm font-bold">
      <Bike size={16} /> Rider Application Submitted
    </div>
  </motion.div>
);

export default RiderCTA;
