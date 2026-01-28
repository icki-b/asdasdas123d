import { useEffect, useState } from "react";

/**
 * Animated Hero Background - Fluid Neon Effect with Parallax
 * 
 * Creates a dynamic, flowing background with neon glow effects
 * matching the dark premium automotive theme.
 * 
 * Features:
 * - Reduced animation intensity for better performance
 * - Parallax effect on scroll
 * - Respects prefers-reduced-motion
 * 
 * SHOPIFY LIQUID NOTE:
 * For Shopify, this can be replaced with:
 * - A Lottie animation
 * - CSS-only animation in theme.css
 * - Or kept as inline styles in the section template
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
  const parallaxFast = scrollY * 0.3;

  return (
    <div className="absolute inset-0 overflow-hidden bg-background">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-[hsl(222_47%_8%)] to-background" />
      
      {/* Animated gradient orbs with parallax */}
      <div className="absolute inset-0">
        {/* Primary large orb - most visible */}
        <div 
          className="absolute w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full blur-[100px] md:blur-[120px]"
          style={{
            top: '10%',
            right: '5%',
            background: 'radial-gradient(circle, hsl(199 89% 48% / 0.5) 0%, hsl(199 89% 48% / 0.2) 40%, transparent 70%)',
            transform: `translateY(${parallaxSlow}px)`,
            animation: 'hero-float 12s ease-in-out infinite',
          }}
        />
        
        {/* Secondary orb */}
        <div 
          className="absolute w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full blur-[80px] md:blur-[100px]"
          style={{
            bottom: '20%',
            right: '25%',
            background: 'radial-gradient(circle, hsl(220 89% 55% / 0.4) 0%, hsl(220 89% 55% / 0.15) 40%, transparent 70%)',
            transform: `translateY(${parallaxMedium}px)`,
            animation: 'hero-float 15s ease-in-out infinite',
            animationDelay: '-3s',
          }}
        />
        
        {/* Accent orb - smaller, brighter */}
        <div 
          className="absolute w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-full blur-[60px] md:blur-[80px]"
          style={{
            top: '40%',
            right: '15%',
            background: 'radial-gradient(circle, hsl(199 89% 58% / 0.6) 0%, hsl(199 89% 48% / 0.2) 50%, transparent 70%)',
            transform: `translateY(${parallaxFast}px)`,
            animation: 'hero-pulse 8s ease-in-out infinite',
            animationDelay: '-2s',
          }}
        />
        
        {/* Extra glow spot */}
        <div 
          className="absolute w-[150px] h-[150px] md:w-[200px] md:h-[200px] rounded-full blur-[50px]"
          style={{
            top: '25%',
            right: '35%',
            background: 'radial-gradient(circle, hsl(199 89% 65% / 0.5) 0%, transparent 60%)',
            transform: `translateY(${parallaxMedium}px)`,
            animation: 'hero-pulse 10s ease-in-out infinite',
            animationDelay: '-5s',
          }}
        />
      </div>
      
      {/* Subtle grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(199 89% 48% / 0.4) 1px, transparent 1px),
            linear-gradient(90deg, hsl(199 89% 48% / 0.4) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          transform: `translateY(${parallaxSlow * 0.5}px)`,
        }}
      />
      
      {/* Gradient overlays for content readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/70" />
      
      {/* Bottom fade for seamless transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />

      {/* Inline keyframes */}
      <style>{`
        @keyframes hero-float {
          0%, 100% { 
            transform: translateY(0px) scale(1); 
            opacity: 1;
          }
          50% { 
            transform: translateY(-30px) scale(1.02); 
            opacity: 0.85;
          }
        }
        
        @keyframes hero-pulse {
          0%, 100% { 
            opacity: 0.6;
            transform: scale(1);
          }
          50% { 
            opacity: 1;
            transform: scale(1.1);
          }
        }
        
        @media (prefers-reduced-motion: reduce) {
          .absolute[style*="animation"] {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default HeroBackground;
