'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Zap, Shield, Globe, Rocket } from 'lucide-react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';
import { useState, useEffect } from 'react';

const DEFAULT_HERO = {
  badge: 'Trusted by 500+ forward-thinking companies',
  title: 'Transform your business with',
  titleHighlight: 'next-generation tech',
  subtitle:
    'Cutting-edge solutions that streamline operations, optimize performance, and scale with your ambitions. Built for innovators who refuse to settle for ordinary.',
  primaryCTA: 'Start Your Transformation',
  secondaryCTA: 'See How It Works',
  primaryCTAHref: '/get-started',
  secondaryCTAHref: '/demo',
  feature1Text: 'Lightning deployment',
  feature2Text: 'Enterprise security',
  feature3Text: 'Global scalability',
  trustedByText: 'Powering breakthrough innovations at',
  showTrustedLogos: true,
  showAnimatedBadge: true,
} as const;

type HeroProps = Partial<typeof DEFAULT_HERO>;

export default function Hero(props: HeroProps) {
  const config = { ...DEFAULT_HERO, ...props };
  const navigate = useSmartNavigation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="hero" className="relative min-h-[95vh] overflow-hidden bg-background">
      {/* Dynamic background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,var(--primary)_0.8px,transparent_0.8px)] [background-size:24px_24px] opacity-[0.04]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,var(--accent)_0.6px,transparent_0.6px)] [background-size:32px_32px] opacity-[0.03]" />

      {/* Floating gradient orbs with animation */}
      <div className="absolute left-1/4 top-1/3 h-80 w-80 rounded-full bg-gradient-to-r from-primary/[0.04] to-transparent blur-3xl animate-pulse" />
      <div
        className="absolute right-1/3 bottom-1/3 h-96 w-96 rounded-full bg-gradient-to-l from-accent/[0.04] to-transparent blur-3xl animate-pulse"
        style={{ animationDelay: '1s' }}
      />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-[95vh] flex-col items-center justify-center py-20 text-center">
          {/* Animated Badge */}
          {config.showAnimatedBadge && (
            <div
              className={`mb-8 inline-flex transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              <div className="group flex items-center gap-2 rounded-full border border-border/50 bg-background/60 backdrop-blur-md px-5 py-2.5 text-sm hover:border-primary/20 transition-all duration-300">
                <Rocket
                  className="h-4 w-4 text-primary animate-bounce"
                  style={{ animationDuration: '2s' }}
                />
                <span
                  data-editable="badge"
                  className="text-muted-foreground group-hover:text-foreground transition-colors"
                >
                  {config.badge}
                </span>
              </div>
            </div>
          )}

          {/* Main Title with staggered animation */}
          <h1 className="max-w-5xl text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
            <div
              className={`transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <span data-editable="title" className="text-foreground block mb-2">
                {config.title}
              </span>
            </div>
            <div
              className={`relative transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <span
                data-editable="titleHighlight"
                className="bg-gradient-to-r from-primary via-primary/90 to-accent bg-clip-text text-transparent relative"
              >
                {config.titleHighlight}
              </span>
              {/* Animated accent */}
              <div className="absolute -right-4 -top-4 h-8 w-8 rounded-full bg-gradient-to-r from-primary to-accent opacity-20 animate-ping" />
              <Sparkles className="absolute -right-2 -top-2 h-6 w-6 text-primary/70 animate-pulse" />
            </div>
          </h1>

          {/* Enhanced Subtitle */}
          <p
            data-editable="subtitle"
            className={`mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground sm:text-xl lg:text-2xl transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            {config.subtitle}
          </p>

          {/* Feature Pills with enhanced styling */}
          <div
            className={`mt-10 flex flex-wrap items-center justify-center gap-4 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="group flex items-center gap-2 rounded-full border border-border/50 bg-background/60 backdrop-blur-md px-5 py-3 text-sm hover:border-primary/30 hover:bg-background/80 transition-all duration-300">
              <Zap className="h-4 w-4 text-primary group-hover:scale-110 transition-transform" />
              <span
                data-editable="feature1Text"
                className="text-muted-foreground group-hover:text-foreground transition-colors font-medium"
              >
                {config.feature1Text}
              </span>
            </div>
            <div className="group flex items-center gap-2 rounded-full border border-border/50 bg-background/60 backdrop-blur-md px-5 py-3 text-sm hover:border-primary/30 hover:bg-background/80 transition-all duration-300">
              <Shield className="h-4 w-4 text-primary group-hover:scale-110 transition-transform" />
              <span
                data-editable="feature2Text"
                className="text-muted-foreground group-hover:text-foreground transition-colors font-medium"
              >
                {config.feature2Text}
              </span>
            </div>
            <div className="group flex items-center gap-2 rounded-full border border-border/50 bg-background/60 backdrop-blur-md px-5 py-3 text-sm hover:border-primary/30 hover:bg-background/80 transition-all duration-300">
              <Globe className="h-4 w-4 text-primary group-hover:scale-110 transition-transform" />
              <span
                data-editable="feature3Text"
                className="text-muted-foreground group-hover:text-foreground transition-colors font-medium"
              >
                {config.feature3Text}
              </span>
            </div>
          </div>

          {/* Enhanced CTA Buttons */}
          <div
            className={`mt-12 flex flex-col gap-4 sm:flex-row transition-all duration-700 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <Button
              size="lg"
              className="group relative px-10 py-4 text-base font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 transition-all duration-300 hover:scale-105"
              onClick={() => navigate(config.primaryCTAHref)}
              data-editable-href="primaryCTAHref"
              data-href={config.primaryCTAHref}
            >
              <span data-editable="primaryCTA">{config.primaryCTA}</span>
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              <div className="absolute inset-0 rounded-md bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="group border-border/50 backdrop-blur-md text-base font-semibold hover:bg-background/80 hover:border-primary/30 transition-all duration-300 px-10 py-4"
              onClick={() => navigate(config.secondaryCTAHref)}
              data-editable-href="secondaryCTAHref"
              data-href={config.secondaryCTAHref}
            >
              <span data-editable="secondaryCTA">{config.secondaryCTA}</span>
            </Button>
          </div>

          {/* Enhanced Trusted By Section */}
          {config.showTrustedLogos && (
            <div
              className={`mt-24 w-full max-w-5xl transition-all duration-700 delay-1100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <p
                data-editable="trustedByText"
                className="mb-8 text-sm text-muted-foreground font-medium"
              >
                {config.trustedByText}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-12 opacity-60 grayscale hover:opacity-80 hover:grayscale-0 transition-all duration-500">
                {/* Enhanced placeholder logos with varied sizes */}
                <div className="h-8 w-28 rounded bg-gradient-to-r from-muted-foreground/10 to-muted-foreground/5" />
                <div className="h-10 w-24 rounded bg-gradient-to-r from-muted-foreground/10 to-muted-foreground/5" />
                <div className="h-8 w-32 rounded bg-gradient-to-r from-muted-foreground/10 to-muted-foreground/5" />
                <div className="h-9 w-26 rounded bg-gradient-to-r from-muted-foreground/10 to-muted-foreground/5" />
                <div className="h-8 w-30 rounded bg-gradient-to-r from-muted-foreground/10 to-muted-foreground/5" />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="h-6 w-4 rounded-full border-2 border-muted-foreground/30">
          <div className="mx-auto mt-1 h-2 w-1 rounded-full bg-muted-foreground/50 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
