'use client';

import { Zap, Shield, Target, Rocket } from 'lucide-react';
import Image from 'next/image';

const DEFAULT_ABOUT = {
  badge: 'Our Mission',
  title: 'Transforming businesses through cutting-edge innovation',
  mission:
    "We're building the next generation of tech solutions that empower forward-thinking companies to scale beyond traditional limitations. Our breakthrough technology turns complex challenges into streamlined opportunities.",
  vision:
    'A future where every business can harness the power of innovative technology to achieve unprecedented growth and efficiency.',
  image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&q=80',
  imageAlt: 'Innovative team collaborating on breakthrough solutions',
  values: [
    {
      title: 'Innovation First',
      description: "We pioneer solutions that don't exist yet, staying ahead of the curve.",
    },
    {
      title: 'Scalable Impact',
      description: 'Every solution we build is designed to grow with your ambitions.',
    },
    {
      title: 'Agile Excellence',
      description: 'We move fast without compromising on quality or reliability.',
    },
    {
      title: 'Future-Ready',
      description: "We anticipate tomorrow's challenges and build solutions today.",
    },
  ],
} as const;

type AboutProps = Partial<typeof DEFAULT_ABOUT>;

export default function About(props: AboutProps) {
  const config = { ...DEFAULT_ABOUT, ...props };

  return (
    <section id="about" className="bg-background py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <Image
              src={config.image}
              alt={config.imageAlt}
              width={800}
              height={600}
              className="h-auto w-full object-cover transition-transform duration-500 hover:scale-105"
              data-editable-src="image"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
          </div>

          {/* Content */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              <span data-editable="badge">{config.badge}</span>
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              <span data-editable="title">{config.title}</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              <span data-editable="mission">{config.mission}</span>
            </p>
            <div className="mt-8 border-l-4 border-primary pl-6 bg-primary/5 py-4 rounded-r-lg">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-2">
                Our Vision
              </p>
              <p className="text-foreground font-medium">
                <span data-editable="vision">{config.vision}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-foreground mb-4">What Drives Us Forward</h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our core values shape every breakthrough we create and every partnership we build.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {config.values.map((value, idx) => (
              <div
                key={idx}
                className="group text-center p-6 rounded-xl bg-card hover:bg-accent/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                  {idx === 0 && <Zap className="h-8 w-8 text-primary" />}
                  {idx === 1 && <Target className="h-8 w-8 text-primary" />}
                  {idx === 2 && <Shield className="h-8 w-8 text-primary" />}
                  {idx === 3 && <Rocket className="h-8 w-8 text-primary" />}
                </div>
                <h4 className="font-bold text-lg text-foreground mb-3">
                  <span data-editable={`values[${idx}].title`}>{value.title}</span>
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  <span data-editable={`values[${idx}].description`}>{value.description}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
