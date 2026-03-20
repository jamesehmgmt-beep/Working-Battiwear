import { Link } from "react-router-dom";
import braImage from "@/assets/bra.png";
import bodysuitImage from "@/assets/bodysuit.png";
import shortsImage from "@/assets/shorts.png";

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
            src="https://cdn.shopify.com/s/files/1/0650/1629/9579/files/a0aca61a-af25-400e-b88e-2295e6bcea10_0.jpg?v=1766718341" 
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
            src={braImage} 
            alt="Heels"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
          <div className="absolute inset-0 z-10 flex items-end justify-center pb-8">
            <span className="font-serif text-sm md:text-lg tracking-widest uppercase text-background drop-shadow-lg transform group-hover:translate-y-[-4px] transition-transform duration-300">
              Heels
            </span>
          </div>
        </Link>

        {/* Activewear */}
        <Link
          to="/category/activewear"
          className="category-card group aspect-[3/4] relative"
        >
          <img 
            src={bodysuitImage} 
            alt="Activewear"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
          <div className="absolute inset-0 z-10 flex items-end justify-center pb-8">
            <span className="font-serif text-sm md:text-lg tracking-widest uppercase text-background drop-shadow-lg transform group-hover:translate-y-[-4px] transition-transform duration-300">
              Activewear
            </span>
          </div>
        </Link>

        {/* Yoga Sets */}
        <Link
          to="/category/yoga-sets"
          className="category-card group aspect-[3/4] relative"
        >
          <img 
            src={shortsImage} 
            alt="Yoga Sets"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
          <div className="absolute inset-0 z-10 flex items-end justify-center pb-8">
            <span className="font-serif text-sm md:text-lg tracking-widest uppercase text-background drop-shadow-lg transform group-hover:translate-y-[-4px] transition-transform duration-300">
              Yoga Sets
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
};
