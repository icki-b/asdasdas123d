import { useEffect, useState } from "react";

/**
 * Animated Hero Background - Fluid Neon Effect with Parallax
 */

const HeroBackground = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Parallax multipliers
  const parallaxSlow = scrollY * 0.1;
  const parallaxMedium = scrollY * 0.2;

  return (
    <div className="absolute inset-0 overflow-hidden bg-background">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background" />
      
      {/* Animated gradient orbs */}
      <div className="absolute inset-0">
        {/* Primary large orb - cyan/blue */}
        <div 
          className="absolute top-[10%] right-[5%] w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full bg-primary/40 blur-[80px] md:blur-[100px]"
          style={{
            transform: `translateY(${parallaxSlow}px)`,
          }}
        />
        
        {/* Secondary orb */}
        <div 
          className="absolute bottom-[15%] right-[20%] w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full bg-primary/30 blur-[70px] md:blur-[90px]"
          style={{
            transform: `translateY(${parallaxMedium}px)`,
          }}
        />
        
        {/* Accent orb - brighter, smaller */}
        <div 
          className="absolute top-[35%] right-[15%] w-[200px] h-[200px] md:w-[280px] md:h-[280px] rounded-full bg-primary/50 blur-[50px] md:blur-[70px]"
          style={{
            transform: `translateY(${parallaxMedium}px)`,
          }}
        />
        
        {/* Extra small glow */}
        <div 
          className="absolute top-[20%] right-[30%] w-[120px] h-[120px] md:w-[180px] md:h-[180px] rounded-full bg-neon/60 blur-[40px]"
          style={{
            transform: `translateY(${parallaxSlow}px)`,
          }}
        />
      </div>
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(14, 165, 233, 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(14, 165, 233, 0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />
      
      {/* Gradient overlays for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-background/60" />
      
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
};

export default HeroBackground;
