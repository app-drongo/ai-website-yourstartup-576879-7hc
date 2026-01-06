'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Heart,
  Zap,
} from 'lucide-react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_FOOTER = {
  logoText: 'TechFlow',
  companyDescription:
    'Building the future of web development with modern tools and beautiful designs. Join thousands of developers and businesses who trust our platform.',
  contactEmail: 'hello@techflow.com',
  contactPhone: '+1 (555) 123-4567',
  contactAddress: '123 Innovation Drive, Tech Valley',
  newsletterTitle: 'Stay in the Loop',
  newsletterPlaceholder: 'Enter your email',
  newsletterDisclaimer: 'Get the latest updates and offers. No spam, unsubscribe anytime.',
  section1Title: 'Product',
  section2Title: 'Company',
  section3Title: 'Resources',
  section4Title: 'Legal',
  copyrightText: '© 2024 TechFlow. All rights reserved.',
  madeWithText: 'by our amazing team',
  socialText: 'Connect with us:',
  social1Href: 'https://twitter.com',
  social2Href: 'https://facebook.com',
  social3Href: 'https://instagram.com',
  social4Href: 'https://linkedin.com',
  social5Href: 'https://github.com',
  // Product Links
  linkFeatures: 'Features',
  linkFeaturesHref: '#features',
  linkPricing: 'Pricing',
  linkPricingHref: '#pricing',
  linkTemplates: 'Templates',
  linkTemplatesHref: '/templates',
  linkIntegrations: 'Integrations',
  linkIntegrationsHref: '/integrations',
  linkApi: 'API',
  linkApiHref: '/api',
  linkDocumentation: 'Documentation',
  linkDocumentationHref: '/docs',
  // Company Links
  linkAbout: 'About Us',
  linkAboutHref: '#about',
  linkBlog: 'Blog',
  linkBlogHref: '/blog',
  linkCareers: 'Careers',
  linkCareersHref: '/careers',
  linkPress: 'Press',
  linkPressHref: '/press',
  linkPartners: 'Partners',
  linkPartnersHref: '/partners',
  linkContact: 'Contact',
  linkContactHref: '#contact',
  // Resources Links
  linkHelp: 'Help Center',
  linkHelpHref: '/help',
  linkCommunity: 'Community',
  linkCommunityHref: '/community',
  linkTutorials: 'Tutorials',
  linkTutorialsHref: '/tutorials',
  linkWebinars: 'Webinars',
  linkWebinarsHref: '/webinars',
  linkCaseStudies: 'Case Studies',
  linkCaseStudiesHref: '/case-studies',
  linkStatus: 'Status',
  linkStatusHref: '/status',
  // Legal Links
  linkPrivacy: 'Privacy Policy',
  linkPrivacyHref: '/privacy',
  linkTerms: 'Terms of Service',
  linkTermsHref: '/terms',
  linkCookies: 'Cookie Policy',
  linkCookiesHref: '/cookies',
  linkGdpr: 'GDPR',
  linkGdprHref: '/gdpr',
  linkSecurity: 'Security',
  linkSecurityHref: '/security',
  linkCompliance: 'Compliance',
  linkComplianceHref: '/compliance',
  // Bottom Links
  linkSitemap: 'Sitemap',
  linkSitemapHref: '/sitemap',
  linkAccessibility: 'Accessibility',
  linkAccessibilityHref: '/accessibility',
  linkCookieSettings: 'Cookie Settings',
  linkCookieSettingsHref: '/cookies',
  linkSupport: 'Support',
  linkSupportHref: '/support',
} as const;

type FooterProps = Partial<typeof DEFAULT_FOOTER>;

export default function Footer(props: FooterProps) {
  const config = { ...DEFAULT_FOOTER, ...props };
  const navigate = useSmartNavigation();

  const footerSections = [
    {
      title: config.section1Title,
      titleKey: 'section1Title',
      links: [
        {
          name: config.linkFeatures,
          href: config.linkFeaturesHref,
          nameKey: 'linkFeatures',
          hrefKey: 'linkFeaturesHref',
        },
        {
          name: config.linkPricing,
          href: config.linkPricingHref,
          nameKey: 'linkPricing',
          hrefKey: 'linkPricingHref',
        },
        {
          name: config.linkTemplates,
          href: config.linkTemplatesHref,
          nameKey: 'linkTemplates',
          hrefKey: 'linkTemplatesHref',
        },
        {
          name: config.linkIntegrations,
          href: config.linkIntegrationsHref,
          nameKey: 'linkIntegrations',
          hrefKey: 'linkIntegrationsHref',
        },
        {
          name: config.linkApi,
          href: config.linkApiHref,
          nameKey: 'linkApi',
          hrefKey: 'linkApiHref',
        },
        {
          name: config.linkDocumentation,
          href: config.linkDocumentationHref,
          nameKey: 'linkDocumentation',
          hrefKey: 'linkDocumentationHref',
        },
      ],
    },
    {
      title: config.section2Title,
      titleKey: 'section2Title',
      links: [
        {
          name: config.linkAbout,
          href: config.linkAboutHref,
          nameKey: 'linkAbout',
          hrefKey: 'linkAboutHref',
        },
        {
          name: config.linkBlog,
          href: config.linkBlogHref,
          nameKey: 'linkBlog',
          hrefKey: 'linkBlogHref',
        },
        {
          name: config.linkCareers,
          href: config.linkCareersHref,
          nameKey: 'linkCareers',
          hrefKey: 'linkCareersHref',
        },
        {
          name: config.linkPress,
          href: config.linkPressHref,
          nameKey: 'linkPress',
          hrefKey: 'linkPressHref',
        },
        {
          name: config.linkPartners,
          href: config.linkPartnersHref,
          nameKey: 'linkPartners',
          hrefKey: 'linkPartnersHref',
        },
        {
          name: config.linkContact,
          href: config.linkContactHref,
          nameKey: 'linkContact',
          hrefKey: 'linkContactHref',
        },
      ],
    },
    {
      title: config.section3Title,
      titleKey: 'section3Title',
      links: [
        {
          name: config.linkHelp,
          href: config.linkHelpHref,
          nameKey: 'linkHelp',
          hrefKey: 'linkHelpHref',
        },
        {
          name: config.linkCommunity,
          href: config.linkCommunityHref,
          nameKey: 'linkCommunity',
          hrefKey: 'linkCommunityHref',
        },
        {
          name: config.linkTutorials,
          href: config.linkTutorialsHref,
          nameKey: 'linkTutorials',
          hrefKey: 'linkTutorialsHref',
        },
        {
          name: config.linkWebinars,
          href: config.linkWebinarsHref,
          nameKey: 'linkWebinars',
          hrefKey: 'linkWebinarsHref',
        },
        {
          name: config.linkCaseStudies,
          href: config.linkCaseStudiesHref,
          nameKey: 'linkCaseStudies',
          hrefKey: 'linkCaseStudiesHref',
        },
        {
          name: config.linkStatus,
          href: config.linkStatusHref,
          nameKey: 'linkStatus',
          hrefKey: 'linkStatusHref',
        },
      ],
    },
    {
      title: config.section4Title,
      titleKey: 'section4Title',
      links: [
        {
          name: config.linkPrivacy,
          href: config.linkPrivacyHref,
          nameKey: 'linkPrivacy',
          hrefKey: 'linkPrivacyHref',
        },
        {
          name: config.linkTerms,
          href: config.linkTermsHref,
          nameKey: 'linkTerms',
          hrefKey: 'linkTermsHref',
        },
        {
          name: config.linkCookies,
          href: config.linkCookiesHref,
          nameKey: 'linkCookies',
          hrefKey: 'linkCookiesHref',
        },
        {
          name: config.linkGdpr,
          href: config.linkGdprHref,
          nameKey: 'linkGdpr',
          hrefKey: 'linkGdprHref',
        },
        {
          name: config.linkSecurity,
          href: config.linkSecurityHref,
          nameKey: 'linkSecurity',
          hrefKey: 'linkSecurityHref',
        },
        {
          name: config.linkCompliance,
          href: config.linkComplianceHref,
          nameKey: 'linkCompliance',
          hrefKey: 'linkComplianceHref',
        },
      ],
    },
  ];

  const bottomLinks = [
    {
      name: config.linkSitemap,
      href: config.linkSitemapHref,
      nameKey: 'linkSitemap',
      hrefKey: 'linkSitemapHref',
    },
    {
      name: config.linkAccessibility,
      href: config.linkAccessibilityHref,
      nameKey: 'linkAccessibility',
      hrefKey: 'linkAccessibilityHref',
    },
    {
      name: config.linkCookieSettings,
      href: config.linkCookieSettingsHref,
      nameKey: 'linkCookieSettings',
      hrefKey: 'linkCookieSettingsHref',
    },
    {
      name: config.linkSupport,
      href: config.linkSupportHref,
      nameKey: 'linkSupport',
      hrefKey: 'linkSupportHref',
    },
  ];

  return (
    <footer id="footer" className="bg-background border-t border-border/50">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Logo */}
            <div>
              <Link href="/" className="flex items-center gap-3 mb-6 group">
                <div className="size-12 rounded-xl bg-gradient-to-br from-primary via-primary/90 to-primary/70 flex items-center justify-center shadow-lg group-hover:shadow-primary/25 transition-all duration-300">
                  <Zap className="size-6 text-primary-foreground" />
                </div>
                <span className="font-bold text-2xl tracking-tight" data-editable="logoText">
                  {config.logoText}
                </span>
              </Link>
              <p className="text-muted-foreground leading-relaxed mb-8">
                <span data-editable="companyDescription">{config.companyDescription}</span>
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Mail className="size-4 text-primary" />
                </div>
                <span className="text-foreground font-medium" data-editable="contactEmail">
                  {config.contactEmail}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Phone className="size-4 text-primary" />
                </div>
                <span className="text-foreground font-medium" data-editable="contactPhone">
                  {config.contactPhone}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="size-4 text-primary" />
                </div>
                <span className="text-foreground font-medium" data-editable="contactAddress">
                  {config.contactAddress}
                </span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="space-y-4">
              <h4 className="font-bold text-lg" data-editable="newsletterTitle">
                {config.newsletterTitle}
              </h4>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder={config.newsletterPlaceholder}
                  className="flex-1 bg-muted/50 border-border/50 focus:border-primary"
                />
                <Button className="px-4 bg-primary hover:bg-primary/90">
                  <ArrowRight className="size-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                <span data-editable="newsletterDisclaimer">{config.newsletterDisclaimer}</span>
              </p>
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-6">
                <h4 className="font-bold text-foreground" data-editable={section.titleKey}>
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        data-editable-href={link.hrefKey}
                        data-href={link.href}
                        className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                      >
                        <span data-editable={link.nameKey}>{link.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Separator className="opacity-50" />

      {/* Bottom Bar */}
      <div className="bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="flex flex-col sm:flex-row items-center gap-2 text-sm text-muted-foreground">
              <span data-editable="copyrightText">{config.copyrightText}</span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center gap-1">
                Made with <Heart className="size-3 text-red-500 fill-current animate-pulse" />
                <span data-editable="madeWithText">{config.madeWithText}</span>
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6">
              <span className="text-sm text-muted-foreground" data-editable="socialText">
                {config.socialText}
              </span>
              <div className="flex gap-3">
                <Link
                  href={config.social1Href}
                  aria-label="Twitter"
                  className="size-10 rounded-lg bg-muted hover:bg-primary/20 flex items-center justify-center transition-all duration-200 group"
                  data-editable-href="social1Href"
                  data-href={config.social1Href}
                >
                  <Twitter className="size-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </Link>
                <Link
                  href={config.social2Href}
                  aria-label="Facebook"
                  className="size-10 rounded-lg bg-muted hover:bg-primary/20 flex items-center justify-center transition-all duration-200 group"
                  data-editable-href="social2Href"
                  data-href={config.social2Href}
                >
                  <Facebook className="size-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </Link>
                <Link
                  href={config.social3Href}
                  aria-label="Instagram"
                  className="size-10 rounded-lg bg-muted hover:bg-primary/20 flex items-center justify-center transition-all duration-200 group"
                  data-editable-href="social3Href"
                  data-href={config.social3Href}
                >
                  <Instagram className="size-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </Link>
                <Link
                  href={config.social4Href}
                  aria-label="LinkedIn"
                  className="size-10 rounded-lg bg-muted hover:bg-primary/20 flex items-center justify-center transition-all duration-200 group"
                  data-editable-href="social4Href"
                  data-href={config.social4Href}
                >
                  <Linkedin className="size-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </Link>
                <Link
                  href={config.social5Href}
                  aria-label="GitHub"
                  className="size-10 rounded-lg bg-muted hover:bg-primary/20 flex items-center justify-center transition-all duration-200 group"
                  data-editable-href="social5Href"
                  data-href={config.social5Href}
                >
                  <Github className="size-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </Link>
              </div>
            </div>
          </div>

          {/* Additional Links */}
          <Separator className="my-6 opacity-30" />
          <div className="flex flex-wrap justify-center lg:justify-start gap-6">
            {bottomLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                data-editable-href={link.hrefKey}
                data-href={link.href}
                className="text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                <span data-editable={link.nameKey}>{link.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
