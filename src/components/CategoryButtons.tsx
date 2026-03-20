import { Link } from "react-router-dom";

export const CategoryButtons = () => {
  return (
    <section className="py-16 px-8 bg-background">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 text-center">
        {/* Left Column */}
        <div className="flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-4">Step into luxury.</h2>
          <p className="text-muted-foreground mb-6 max-w-md">Curated designs crafted for confidence — from statement heels to everyday essentials.</p>
          <Link to="/category/new-arrivals" className="inline-block px-6 py-3 bg-foreground text-background text-sm font-medium rounded-full hover:opacity-90 transition-opacity">Shop New Arrivals</Link>
        </div>

        {/* Right Column */}
        <div className="flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-4">Elevated style, on repeat.</h2>
          <p className="text-muted-foreground mb-6 max-w-md">Premium pieces designed to turn heads and wear beautifully — day to night.</p>
          <Link to="/category/collections" className="inline-block px-6 py-3 bg-foreground text-background text-sm font-medium rounded-full hover:opacity-90 transition-opacity">Shop Collections</Link>
        </div>
      </div>
    </section>
  );
};