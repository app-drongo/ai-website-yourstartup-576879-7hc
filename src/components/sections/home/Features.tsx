'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Zap, Shield, BarChart3, Users, Globe, Sparkles, Cpu, Rocket } from 'lucide-react';

const DEFAULT_FEATURES = {
  badge: 'Innovation Hub',
  title: 'Next-Generation Technology Stack',
  subtitle:
    'Cutting-edge solutions engineered for forward-thinking businesses ready to transform their operations and scale beyond limits.',
  mainFeature: {
    title: 'AI-Powered Business Intelligence',
    description:
      'Revolutionary analytics platform that transforms raw data into actionable insights, featuring predictive modeling, automated reporting, and real-time decision support systems.',
  },
  features: [
    {
      title: 'Lightning Performance',
      description: 'Breakthrough optimization delivering 10x faster processing speeds.',
    },
    {
      title: 'Enterprise Security',
      description: 'Military-grade encryption with zero-trust architecture.',
    },
    {
      title: 'Seamless Integration',
      description: 'Connect with 500+ platforms through intelligent APIs.',
    },
    {
      title: 'Global Infrastructure',
      description: 'Deploy instantly across 50+ regions worldwide.',
    },
    {
      title: 'Smart Automation',
      description: 'AI that learns and adapts to your workflow patterns.',
    },
    {
      title: 'Scalable Architecture',
      description: 'Built to handle growth from startup to enterprise scale.',
    },
  ],
} as const;

type FeaturesProps = Partial<typeof DEFAULT_FEATURES>;

export default function Features(props: FeaturesProps) {
  const config = { ...DEFAULT_FEATURES, ...props };

  return (
    <section id="features" className="bg-background py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="outline" className="mb-4 border-primary/20 bg-primary/5 text-primary">
            <span data-editable="badge">{config.badge}</span>
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            <span data-editable="title">{config.title}</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            <span data-editable="subtitle">{config.subtitle}</span>
          </p>
        </div>

        {/* Bento Grid */}
        <div className="mx-auto mt-16 grid max-w-7xl gap-4 md:grid-cols-4 lg:gap-6">
          {/* Large featured card - spans 2x2 */}
          <Card className="group md:col-span-2 md:row-span-2 overflow-hidden border-border/50 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 transition-all duration-300 hover:border-primary/30 hover:shadow-xl">
            <CardContent className="flex h-full flex-col justify-between p-8 lg:p-10">
              <div>
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                  <BarChart3 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground lg:text-3xl">
                  <span data-editable="mainFeature.title">{config.mainFeature.title}</span>
                </h3>
                <p className="mt-4 text-lg leading-7 text-muted-foreground">
                  <span data-editable="mainFeature.description">
                    {config.mainFeature.description}
                  </span>
                </p>
              </div>
              <div className="mt-8 h-48 rounded-xl bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 transition-all duration-300 group-hover:from-primary/20 group-hover:via-accent/20 group-hover:to-secondary/20" />
            </CardContent>
          </Card>

          {/* Medium feature cards - span 2 columns each */}
          <Card className="group md:col-span-2 border-border/50 transition-all duration-300 hover:border-primary/30 hover:shadow-lg">
            <CardContent className="p-6 lg:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground">
                    <span data-editable="features[0].title">{config.features[0].title}</span>
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    <span data-editable="features[0].description">
                      {config.features[0].description}
                    </span>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="group md:col-span-2 border-border/50 transition-all duration-300 hover:border-primary/30 hover:shadow-lg">
            <CardContent className="p-6 lg:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground">
                    <span data-editable="features[1].title">{config.features[1].title}</span>
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    <span data-editable="features[1].description">
                      {config.features[1].description}
                    </span>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Smaller feature cards */}
          {config.features.slice(2).map((feature, idx) => (
            <Card
              key={idx + 2}
              className="group border-border/50 transition-all duration-300 hover:border-primary/30 hover:shadow-lg"
            >
              <CardContent className="p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                  {idx === 0 && <Users className="h-5 w-5 text-primary" />}
                  {idx === 1 && <Globe className="h-5 w-5 text-primary" />}
                  {idx === 2 && <Sparkles className="h-5 w-5 text-primary" />}
                  {idx === 3 && <Rocket className="h-5 w-5 text-primary" />}
                </div>
                <h3 className="font-semibold text-foreground">
                  <span data-editable={`features[${idx + 2}].title`}>{feature.title}</span>
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  <span data-editable={`features[${idx + 2}].description`}>
                    {feature.description}
                  </span>
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
