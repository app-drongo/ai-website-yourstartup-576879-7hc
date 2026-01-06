'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, MapPin, Send, Clock, Globe } from 'lucide-react';
import { useFormSubmit } from '@/hooks/useFormSubmit';

const DEFAULT_CONTACT = {
  badge: 'Get In Touch',
  title: 'Ready to Transform Your Business?',
  subtitle:
    "Join forward-thinking companies already using our cutting-edge solutions. Let's discuss how we can streamline your operations and accelerate your growth.",
  email: 'hello@innovatetech.com',
  phone: '+1 (555) 123-4567',
  address: '123 Innovation Drive, Suite 500, San Francisco, CA 94105',
  hours: 'Mon-Fri 9AM-6PM PST',
  timezone: 'Pacific Standard Time',
  formTitle: 'Start Your Innovation Journey',
  namePlaceholder: 'Your full name',
  emailPlaceholder: 'your.email@company.com',
  subjectPlaceholder: 'What challenge can we solve?',
  messagePlaceholder:
    'Tell us about your current tech stack, pain points, and goals. The more details you share, the better we can tailor our solution for you...',
  submitText: 'Send Message',
} as const;

type ContactProps = Partial<typeof DEFAULT_CONTACT>;

export default function Contact(props: ContactProps) {
  const config = { ...DEFAULT_CONTACT, ...props };
  const { handleSubmit, isSubmitting, isSuccess, message } = useFormSubmit();

  return (
    <section id="contact" className="bg-background py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left: Contact Information */}
          <div className="space-y-8">
            <div>
              <span
                data-editable="badge"
                className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
              >
                {config.badge}
              </span>
              <h2
                data-editable="title"
                className="mt-4 text-4xl font-bold tracking-tight text-foreground lg:text-5xl"
              >
                {config.title}
              </h2>
              <p
                data-editable="subtitle"
                className="mt-6 text-lg leading-relaxed text-muted-foreground"
              >
                {config.subtitle}
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <Mail className="h-6 w-6" />
                </div>
                <div className="space-y-1">
                  <p className="font-semibold text-foreground">Email Us</p>
                  <a
                    href={`mailto:${config.email}`}
                    data-editable="email"
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {config.email}
                  </a>
                  <p className="text-sm text-muted-foreground">We respond within 2 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <Phone className="h-6 w-6" />
                </div>
                <div className="space-y-1">
                  <p className="font-semibold text-foreground">Call Us</p>
                  <a
                    href={`tel:${config.phone}`}
                    data-editable="phone"
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {config.phone}
                  </a>
                  <p className="text-sm text-muted-foreground">Direct line to our tech team</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <MapPin className="h-6 w-6" />
                </div>
                <div className="space-y-1">
                  <p className="font-semibold text-foreground">Visit Our Office</p>
                  <p data-editable="address" className="text-muted-foreground">
                    {config.address}
                  </p>
                  <p className="text-sm text-muted-foreground">Open for scheduled meetings</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <Clock className="h-6 w-6" />
                </div>
                <div className="space-y-1">
                  <p className="font-semibold text-foreground">Business Hours</p>
                  <p data-editable="hours" className="text-muted-foreground">
                    {config.hours}
                  </p>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Globe className="h-3 w-3" />
                    <span data-editable="timezone">{config.timezone}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-muted/50 p-6">
              <h3 className="font-semibold text-foreground">Why Choose Us?</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                  Next-generation technology stack
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                  Proven results with 500+ companies
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                  Agile implementation process
                </li>
              </ul>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div>
            <Card className="border-border/50 shadow-2xl">
              <CardContent className="p-8">
                <div className="mb-8">
                  <h3 data-editable="formTitle" className="text-2xl font-bold text-foreground">
                    {config.formTitle}
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  data-form-id="695d0bb094da37975db934d7"
                >
                  {message && (
                    <div
                      className={`rounded-lg p-4 text-sm ${isSuccess ? 'bg-green-500/10 text-green-600 border border-green-500/20' : 'bg-red-500/10 text-red-600 border border-red-500/20'}`}
                    >
                      {message}
                    </div>
                  )}

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium text-foreground">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder={config.namePlaceholder}
                        required
                        disabled={isSubmitting}
                        className="h-11"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium text-foreground">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder={config.emailPlaceholder}
                        required
                        disabled={isSubmitting}
                        className="h-11"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-sm font-medium text-foreground">
                      Subject *
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder={config.subjectPlaceholder}
                      required
                      disabled={isSubmitting}
                      className="h-11"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium text-foreground">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder={config.messagePlaceholder}
                      rows={6}
                      required
                      disabled={isSubmitting}
                      className="resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-12 text-base font-medium"
                    disabled={isSubmitting}
                  >
                    <Send className="mr-2 h-5 w-5" />
                    {isSubmitting ? (
                      'Sending Message...'
                    ) : (
                      <span data-editable="submitText">{config.submitText}</span>
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting this form, you agree to our privacy policy and terms of service.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
