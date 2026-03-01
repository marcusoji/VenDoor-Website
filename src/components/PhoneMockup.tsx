import { cn } from "@/lib/utils";

interface PhoneMockupProps {
  screenshot: string;
  alt: string;
  className?: string;
  glowColor?: string;
}

const PhoneMockup = ({ screenshot, alt, className, glowColor = "primary" }: PhoneMockupProps) => {
  return (
    <div className={cn("relative group", className)}>
      {/* Glow effect */}
      <div
        className={cn(
          "absolute -inset-4 rounded-[3.5rem] blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-700",
          glowColor === "primary" ? "bg-primary" : "bg-secondary"
        )}
      />
      
      {/* Phone frame - Samsung Galaxy S25 Ultra style */}
      <div className="relative bg-foreground rounded-[2.8rem] p-[3px] shadow-2xl shadow-foreground/20">
        {/* Inner bezel */}
        <div className="bg-foreground/90 rounded-[2.6rem] p-[6px] relative">
          {/* Top notch / Dynamic Island */}
          <div className="absolute top-[10px] left-1/2 -translate-x-1/2 z-20 w-[80px] h-[22px] bg-foreground rounded-full flex items-center justify-center gap-2">
            <div className="w-2 h-2 rounded-full bg-muted-foreground/30" />
            <div className="w-[6px] h-[6px] rounded-full bg-muted-foreground/20" />
          </div>
          
          {/* Screen */}
          <div className="rounded-[2.2rem] overflow-hidden relative bg-background">
            <img
              src={screenshot}
              alt={alt}
              className="w-full h-full object-cover object-top"
              loading="lazy"
            />
          </div>
          
          {/* Side button accents */}
          <div className="absolute right-[-3px] top-[25%] w-[3px] h-[35px] bg-muted-foreground/30 rounded-l-sm" />
          <div className="absolute left-[-3px] top-[20%] w-[3px] h-[25px] bg-muted-foreground/30 rounded-r-sm" />
          <div className="absolute left-[-3px] top-[32%] w-[3px] h-[45px] bg-muted-foreground/30 rounded-r-sm" />
        </div>
      </div>
    </div>
  );
};

export default PhoneMockup;
