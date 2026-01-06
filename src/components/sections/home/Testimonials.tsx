'use client';

import { Star, Quote, TrendingUp, Users, Zap } from 'lucide-react';
import Image from 'next/image';

const DEFAULT_TESTIMONIALS = {
  quote:
    'This revolutionary platform has completely transformed our development workflow. The cutting-edge technology and intuitive interface have enabled our team to scale operations by 300% while maintaining exceptional quality standards.',
  author: 'Marcus Rodriguez',
  title: 'CTO & Co-Founder',
  company: 'InnovateLabs',
  avatar:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
  rating: 5,
  metrics: [
    { value: '300%', label: 'Faster Development' },
    { value: '99.9%', label: 'Uptime Achieved' },
    { value: '50+', label: 'Teams Onboarded' },
  ],
} as const;

type TestimonialsProps = Partial<typeof DEFAULT_TESTIMONIALS>;

export default function Testimonials(props: TestimonialsProps) {
  const config = { ...DEFAULT_TESTIMONIALS, ...props };

  return (
    <section
      id="testimonials"
      className="bg-gradient-to-br from-muted/30 via-background to-muted/20 py-20 lg:py-28"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Users className="h-4 w-4" />
              Trusted by Forward-Thinking Leaders
            </div>
            <h2 className="text-3xl font-bold text-foreground lg:text-4xl mb-4">
              What Industry Pioneers Say
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Join the early adopters who are already transforming their businesses with our
              breakthrough technology
            </p>
          </div>

          {/* Main Testimonial Card */}
          <div className="bg-card border border-border rounded-2xl p-8 lg:p-12 shadow-lg relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/10 rounded-full translate-y-12 -translate-x-12"></div>

            {/* Quote Icon */}
            <Quote className="h-16 w-16 text-primary/20 mb-8" />

            {/* Rating */}
            <div className="flex gap-1 mb-8">
              {[...Array(config.rating)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-xl font-medium leading-relaxed text-foreground lg:text-2xl xl:text-3xl mb-10 relative z-10">
              "<span data-editable="quote">{config.quote}</span>"
            </blockquote>

            {/* Author Section */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              {/* Author Info */}
              <div className="flex items-center gap-4">
                <Image
                  src={config.avatar}
                  alt={config.author}
                  width={80}
                  height={80}
                  className="h-20 w-20 rounded-full object-cover ring-4 ring-primary/10 shadow-lg"
                  data-editable-src="avatar"
                />
                <div>
                  <p className="text-lg font-semibold text-foreground">
                    <span data-editable="author">{config.author}</span>
                  </p>
                  <p className="text-muted-foreground">
                    <span data-editable="title">{config.title}</span>
                  </p>
                  <p className="text-sm font-medium text-primary">
                    <span data-editable="company">{config.company}</span>
                  </p>
                </div>
              </div>

              {/* Metrics */}
              <div className="flex gap-6 lg:gap-8">
                {config.metrics.map((metric, idx) => (
                  <div key={idx} className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      {idx === 0 && <TrendingUp className="h-5 w-5 text-primary mr-1" />}
                      {idx === 1 && <Zap className="h-5 w-5 text-primary mr-1" />}
                      {idx === 2 && <Users className="h-5 w-5 text-primary mr-1" />}
                      <span className="text-2xl font-bold text-foreground">
                        <span data-editable={`metrics[${idx}].value`}>{metric.value}</span>
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground font-medium">
                      <span data-editable={`metrics[${idx}].label`}>{metric.label}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Trusted by innovative startups and forward-thinking enterprises
            </p>
            <div className="flex justify-center items-center gap-8 opacity-60">
              <div className="text-xs font-medium text-muted-foreground">TECHCRUNCH</div>
              <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
              <div className="text-xs font-medium text-muted-foreground">PRODUCT HUNT</div>
              <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
              <div className="text-xs font-medium text-muted-foreground">Y COMBINATOR</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
