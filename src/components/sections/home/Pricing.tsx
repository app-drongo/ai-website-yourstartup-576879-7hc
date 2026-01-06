'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Check, X, Zap, Rocket, Building } from 'lucide-react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_PRICING = {
  badge: 'Flexible Pricing',
  title: 'Scale with confidence',
  subtitle:
    'Choose the perfect plan to accelerate your business transformation with cutting-edge technology.',
  plans: [
    {
      name: 'Startup',
      price: '$49',
      period: '/month',
      href: '/signup?plan=startup',
      description: 'Perfect for early-stage companies ready to innovate',
      highlight: false,
    },
    {
      name: 'Growth',
      price: '$149',
      period: '/month',
      href: '/signup?plan=growth',
      description: 'Built for scaling businesses that demand more',
      highlight: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      href: '/contact',
      description: 'Tailored solutions for industry leaders',
      highlight: false,
    },
  ],
  categories: [
    {
      name: 'Core Platform',
      features: [
        { name: 'Active Projects', startup: '10', growth: 'Unlimited', enterprise: 'Unlimited' },
        { name: 'Data Storage', startup: '10 GB', growth: '500 GB', enterprise: 'Unlimited' },
        { name: 'Team Members', startup: '5', growth: '25', enterprise: 'Unlimited' },
        {
          name: 'API Requests',
          startup: '10K/month',
          growth: '100K/month',
          enterprise: 'Unlimited',
        },
      ],
    },
    {
      name: 'Advanced Features',
      features: [
        { name: 'Real-time Analytics', startup: true, growth: true, enterprise: true },
        { name: 'Custom Integrations', startup: false, growth: true, enterprise: true },
        { name: 'Advanced Security', startup: false, growth: true, enterprise: true },
        { name: 'Priority Support', startup: false, growth: true, enterprise: true },
        { name: 'Dedicated Success Manager', startup: false, growth: false, enterprise: true },
        { name: 'SLA Guarantee', startup: false, growth: false, enterprise: true },
      ],
    },
  ],
} as const;

type PricingProps = Partial<typeof DEFAULT_PRICING>;

export default function Pricing(props: PricingProps) {
  const config = { ...DEFAULT_PRICING, ...props };
  const navigate = useSmartNavigation();

  const renderValue = (value: string | boolean) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Check className="mx-auto h-5 w-5 text-primary" />
      ) : (
        <X className="mx-auto h-5 w-5 text-muted-foreground/30" />
      );
    }
    return <span className="text-foreground font-medium">{value}</span>;
  };

  const getPlanIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Zap className="h-6 w-6" />;
      case 1:
        return <Rocket className="h-6 w-6" />;
      case 2:
        return <Building className="h-6 w-6" />;
      default:
        return <Zap className="h-6 w-6" />;
    }
  };

  return (
    <section id="pricing" className="bg-background py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="outline" className="mb-4 text-primary border-primary/20">
            <span data-editable="badge">{config.badge}</span>
          </Badge>
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            <span data-editable="title">{config.title}</span>
          </h2>
          <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
            <span data-editable="subtitle">{config.subtitle}</span>
          </p>
        </div>

        {/* Plan Cards */}
        <div className="mx-auto mt-16 grid max-w-5xl gap-8 lg:grid-cols-3">
          {config.plans.map((plan, idx) => (
            <Card
              key={idx}
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl ${
                plan.highlight
                  ? 'border-primary shadow-lg scale-105 bg-primary/5'
                  : 'border-border hover:border-primary/50'
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-0 right-0 bg-primary text-primary-foreground text-center py-2 text-sm font-semibold">
                  Most Popular
                </div>
              )}
              <CardHeader className={`text-center ${plan.highlight ? 'pt-12' : 'pt-8'}`}>
                <div
                  className={`mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${
                    plan.highlight
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground'
                  }`}
                >
                  {getPlanIcon(idx)}
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  <span data-editable={`plans[${idx}].name`}>{plan.name}</span>
                </h3>
                <p className="text-muted-foreground">
                  <span data-editable={`plans[${idx}].description`}>{plan.description}</span>
                </p>
                <div className="mt-6">
                  <span className="text-4xl font-bold text-foreground">
                    <span data-editable={`plans[${idx}].price`}>{plan.price}</span>
                  </span>
                  {plan.period && (
                    <span className="text-muted-foreground">
                      <span data-editable={`plans[${idx}].period`}>{plan.period}</span>
                    </span>
                  )}
                </div>
              </CardHeader>
              <CardContent className="pb-8">
                <Button
                  className={`w-full ${plan.highlight ? 'bg-primary hover:bg-primary/90' : ''}`}
                  variant={plan.highlight ? 'default' : 'outline'}
                  onClick={() => navigate(plan.href)}
                  data-editable-href={`plans[${idx}].href`}
                  data-href={plan.href}
                >
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="mx-auto mt-20 max-w-6xl">
          <div className="overflow-x-auto rounded-xl border border-border bg-card">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="p-6 text-left text-lg font-semibold text-foreground">Features</th>
                  {config.plans.map((plan, idx) => (
                    <th
                      key={idx}
                      className={`p-6 text-center text-lg font-semibold ${
                        plan.highlight ? 'text-primary' : 'text-foreground'
                      }`}
                    >
                      <span data-editable={`plans[${idx}].name`}>{plan.name}</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {config.categories.map((category, catIdx) => (
                  <>
                    <tr key={`cat-${catIdx}`}>
                      <td
                        colSpan={4}
                        className="bg-muted/30 p-4 font-semibold text-foreground border-b border-border"
                      >
                        <span data-editable={`categories[${catIdx}].name`}>{category.name}</span>
                      </td>
                    </tr>
                    {category.features.map((feature, featIdx) => (
                      <tr
                        key={`feat-${catIdx}-${featIdx}`}
                        className="border-b border-border hover:bg-muted/20 transition-colors"
                      >
                        <td className="p-4 text-muted-foreground">
                          <span data-editable={`categories[${catIdx}].features[${featIdx}].name`}>
                            {feature.name}
                          </span>
                        </td>
                        <td className="p-4 text-center">{renderValue(feature.startup)}</td>
                        <td className="p-4 text-center bg-primary/5">
                          {renderValue(feature.growth)}
                        </td>
                        <td className="p-4 text-center">{renderValue(feature.enterprise)}</td>
                      </tr>
                    ))}
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mx-auto mt-16 max-w-2xl text-center">
          <p className="text-muted-foreground mb-6">
            Need a custom solution? Our team can build something tailored to your specific
            requirements.
          </p>
          <Button
            variant="outline"
            size="lg"
            onClick={() => navigate('/contact')}
            className="hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Talk to Sales
          </Button>
        </div>
      </div>
    </section>
  );
}
