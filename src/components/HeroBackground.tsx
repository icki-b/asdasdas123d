/**
 * Animated Hero Background - Fluid Neon Effect
 * 
 * Creates a dynamic, flowing background with neon glow effects
 * matching the dark premium automotive theme.
 * 
 * SHOPIFY LIQUID NOTE:
 * For Shopify, this can be replaced with:
 * - A Lottie animation
 * - CSS-only animation in theme.css
 * - Or kept as inline styles in the section template
 */

const HeroBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden bg-background">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-surface-dark to-background" />
      
      {/* Animated gradient orbs */}
      <div className="absolute inset-0">
        {/* Primary large orb */}
        <div 
          className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full opacity-30 blur-3xl animate-float animate-morph"
          style={{
            background: 'radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)',
          }}
        />
        
        {/* Secondary orb */}
        <div 
          className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] rounded-full opacity-20 blur-3xl animate-float-delayed animate-morph"
          style={{
            background: 'radial-gradient(circle, hsl(var(--neon-blue-glow)) 0%, transparent 70%)',
            animationDelay: '-2s',
          }}
        />
        
        {/* Accent orb */}
        <div 
          className="absolute top-1/2 right-1/6 w-[300px] h-[300px] rounded-full opacity-25 blur-2xl animate-pulse-glow"
          style={{
            background: 'radial-gradient(circle, hsl(var(--primary)) 0%, transparent 60%)',
            animationDelay: '-4s',
          }}
        />
        
        {/* Small floating particles */}
        <div 
          className="absolute top-1/3 right-1/2 w-[150px] h-[150px] rounded-full opacity-40 blur-xl animate-float"
          style={{
            background: 'radial-gradient(circle, hsl(var(--neon-blue)) 0%, transparent 70%)',
            animationDelay: '-1s',
          }}
        />
        
        <div 
          className="absolute bottom-1/3 right-1/4 w-[100px] h-[100px] rounded-full opacity-30 blur-lg animate-float-delayed"
          style={{
            background: 'radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)',
            animationDelay: '-3s',
          }}
        />
      </div>
      
      {/* Subtle grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />
      
      {/* Noise texture for depth */}
      <div 
        className="absolute inset-0 opacity-[0.02] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Gradient overlays for content readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
      
      {/* Vignette effect */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, hsl(var(--background)) 100%)',
          opacity: 0.4,
        }}
      />
    </div>
  );
};

export default HeroBackground;
