import { Link } from "react-router-dom";
import heroImage from "@/assets/herobatti.webp";

interface HeroSectionProps {
  ctaLink?: string;
}

export const HeroSection = ({ 
  ctaLink = "/category/new-arrivals"
}: HeroSectionProps) => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-secondary">
      {/* Hero Image */}
      <img
        src={heroImage}
        alt="BATTI© - Luxury Fashion & Footwear"
        className="absolute inset-0 w-full h-full object-cover"
        fetchPriority="high"
        decoding="sync"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-end pb-24 section-padding">
        <div className="text-center animate-slide-up">
          <h1 className="text-4xl md:text-6xl font-serif text-background mb-4 drop-shadow-lg tracking-wider">
            BATTI©
          </h1>
          <p className="text-sm md:text-base text-background/90 tracking-[0.3em] uppercase mb-8 drop-shadow-md">
            Luxury Fashion & Footwear
          </p>
          {/* Shop Now Button */}
          <Link
            to={ctaLink}
            className="inline-block px-8 py-3 bg-background text-foreground text-xs tracking-[0.2em] uppercase hover:opacity-90 transition-opacity"
          >
            SHOP NOW
          </Link>
        </div>
      </div>
    </section>
  );
};