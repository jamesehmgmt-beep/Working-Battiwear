import { Link } from "react-router-dom";
export const CategoryButtons = () => {
  return <section className="py-16 px-8 bg-background">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 text-center">
        {/* Left Column */}
        <div className="flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-4">Step into luxury.</h2>
          <p className="text-muted-foreground mb-6 max-w-md">Statement heels crafted for confidence — from red-sole stilettos to crystal-embellished pumps.</p>
          <Link to="/category/heels" className="inline-block px-6 py-3 bg-foreground text-background text-sm font-medium rounded-full hover:opacity-90 transition-opacity">Shop Heels</Link>
        </div>

        {/* Right Column */}
        <div className="flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-4">Move with power.</h2>
          <p className="text-muted-foreground mb-6 max-w-md">Performance-ready activewear designed to sculpt, support, and move with you — studio to street.</p>
          <Link to="/category/activewear" className="inline-block px-6 py-3 bg-foreground text-background text-sm font-medium rounded-full hover:opacity-90 transition-opacity">Shop Activewear</Link>
        </div>
      </div>
    </section>;
};