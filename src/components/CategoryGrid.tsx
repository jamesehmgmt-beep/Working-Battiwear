import { Link } from "react-router-dom";
import heroImage from "@/assets/herobatti.webp";

export const CategoryGrid = () => {
  return (
    <section className="w-full">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-[2px]">
        {/* New Arrivals */}
        <Link
          to="/category/new-arrivals"
          className="category-card group aspect-[3/4] relative"
        >
          <img 
            src={heroImage} 
            alt="New Arrivals"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
          <div className="absolute inset-0 z-10 flex items-end justify-center pb-8">
            <span className="font-serif text-sm md:text-lg tracking-widest uppercase text-background drop-shadow-lg transform group-hover:translate-y-[-4px] transition-transform duration-300">
              New Arrivals
            </span>
          </div>
        </Link>

        {/* Heels */}
        <Link
          to="/category/heels"
          className="category-card group aspect-[3/4] relative"
        >
          <img 
            src={heroImage} 
            alt="Heels"
            className="absolute inset-0 w-full h-full object-cover object-right"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
          <div className="absolute inset-0 z-10 flex items-end justify-center pb-8">
            <span className="font-serif text-sm md:text-lg tracking-widest uppercase text-background drop-shadow-lg transform group-hover:translate-y-[-4px] transition-transform duration-300">
              Heels
            </span>
          </div>
        </Link>

        {/* Collections */}
        <Link
          to="/category/collections"
          className="category-card group aspect-[3/4] relative"
        >
          <img 
            src={heroImage} 
            alt="Collections"
            className="absolute inset-0 w-full h-full object-cover object-left"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
          <div className="absolute inset-0 z-10 flex items-end justify-center pb-8">
            <span className="font-serif text-sm md:text-lg tracking-widest uppercase text-background drop-shadow-lg transform group-hover:translate-y-[-4px] transition-transform duration-300">
              Collections
            </span>
          </div>
        </Link>

        {/* Accessories */}
        <Link
          to="/category/accessories"
          className="category-card group aspect-[3/4] relative"
        >
          <img 
            src={heroImage} 
            alt="Accessories"
            className="absolute inset-0 w-full h-full object-cover object-center"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
          <div className="absolute inset-0 z-10 flex items-end justify-center pb-8">
            <span className="font-serif text-sm md:text-lg tracking-widest uppercase text-background drop-shadow-lg transform group-hover:translate-y-[-4px] transition-transform duration-300">
              Accessories
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
};
