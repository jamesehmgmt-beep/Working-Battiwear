import { lazy, Suspense, useEffect, useState, useRef, ReactNode } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { Footer } from "@/components/Footer";

// Lazy load below-fold components
const SecondaryHeroSection = lazy(() => import("@/components/SecondaryHeroSection").then(m => ({ default: m.SecondaryHeroSection })));
const CategoryButtons = lazy(() => import("@/components/CategoryButtons").then(m => ({ default: m.CategoryButtons })));
const CategoryGrid = lazy(() => import("@/components/CategoryGrid").then(m => ({ default: m.CategoryGrid })));
const VideoHeroSection = lazy(() => import("@/components/VideoHeroSection").then(m => ({ default: m.VideoHeroSection })));
const ShopTheLook = lazy(() => import("@/components/ShopTheLook").then(m => ({ default: m.ShopTheLook })));

// Intersection Observer wrapper — only renders children when scrolled into view
const LazySection = ({ children, fallback, rootMargin = "200px" }: { children: ReactNode; fallback?: ReactNode; rootMargin?: string }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <div ref={ref} style={{ minHeight: isVisible ? undefined : "100px" }}>
      {isVisible ? (
        <Suspense fallback={fallback || <div className="h-64 bg-secondary animate-pulse" />}>
          {children}
        </Suspense>
      ) : null}
    </div>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Above the fold — loads immediately */}
      <Header />
      <HeroSection />

      {/* Below the fold — lazy loaded when scrolled near */}
      <LazySection>
        <SecondaryHeroSection />
      </LazySection>

      <LazySection>
        <CategoryButtons />
      </LazySection>

      <LazySection>
        <CategoryGrid />
      </LazySection>

      <LazySection>
        <VideoHeroSection />
      </LazySection>

      <LazySection>
        <ShopTheLook />
      </LazySection>

      <Footer />
    </div>
  );
};

export default Index;