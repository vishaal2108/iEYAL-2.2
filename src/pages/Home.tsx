import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, CheckCircle2, Zap, ShieldCheck, TrendingUp, Cpu } from 'lucide-react';
import { SEO } from '@/components/common/SEO';
import { HeroSection } from '@/components/sections/HeroSection';
import { CTASection } from '@/components/sections/CTASection';
import { StatisticsSection } from '@/components/sections/StatisticsSection';
import { CustomerLogoMarquee } from '@/components/branding/CustomerLogoMarquee';
import { ProductShowcase } from '@/components/branding/ProductShowcase';
import { TeamSection } from '@/components/branding/TeamSection';
import { KiboMascot } from '@/components/branding/KiboMascot';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { PRODUCTS_CONFIG } from '@/config/products';

export const Home: React.FC = () => {
  return (
    <>
      <SEO
        title="iEYAL Solutions — WhatsApp-First SaaS for Small & Medium Businesses"
        description="Ownchat, Owncart, OwnRewards & OwnTask — one WhatsApp-native, AI-driven ecosystem to run and grow your small business. Built in India, for the world."
      />

      {/* Hero Section */}
      <HeroSection
        badge="One WhatsApp-Native Ecosystem"
        badgeVariant="live"
        heading="Run Your Entire Business on WhatsApp."
        subheading="Chat, Commerce, Loyalty, and Operations — unified into one AI-driven platform purpose-built for growing small and medium businesses."
        supportingText="Stop losing 30% to aggregators or toggling between 10 fragmented software tools. Turn your WhatsApp Business number into an automated 24/7 revenue engine."
        ctaGroup={
          <>
            <Link to="/products">
              <Button variant="glow" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                Explore the 4-Product Ecosystem
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="secondary" size="lg">
                Book a Live Demo
              </Button>
            </Link>
          </>
        }
        trustStrip={
          <div className="flex flex-wrap items-center gap-6 text-xs text-text-dim">
            <span className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Zero Setup Fees during Beta
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <ShieldCheck className="w-4 h-4 text-indigo-2 shrink-0" /> Official Meta Business Partner API
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <TrendingUp className="w-4 h-4 text-cyan shrink-0" /> 95%+ WhatsApp Open Rates
            </span>
          </div>
        }
        visual={
          <div className="relative w-full max-w-md lg:max-w-none flex justify-center items-center">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo/30 via-violet/20 to-cyan/20 rounded-3xl blur-2xl -z-10 transform rotate-3" />
            
            <div className="bg-ink-2/90 border border-white/[0.12] rounded-l p-6 sm:p-8 shadow-2xl w-full relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <Badge variant="wa" size="sm">WhatsApp Business API</Badge>
              </div>

              <div className="space-y-4">
                <div className="flex gap-3 items-start">
                  <div className="w-8 h-8 rounded-full bg-indigo/20 text-indigo-2 flex items-center justify-center font-bold text-xs shrink-0 mt-1">
                    AI
                  </div>
                  <div className="bg-white/[0.05] border border-white/[0.08] rounded-2xl rounded-tl-none p-3.5 text-xs sm:text-sm text-paper max-w-[85%]">
                    👋 Welcome to Kurinji Retails! Your loyalty wallet balance is <strong className="text-emerald-400">₹240</strong>. Would you like to view today's festive catalog?
                  </div>
                </div>

                <div className="flex gap-3 items-start justify-end">
                  <div className="bg-indigo text-white rounded-2xl rounded-tr-none p-3.5 text-xs sm:text-sm max-w-[85%] shadow-md">
                    Yes, show catalog! I also want to use my cashback.
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <div className="w-8 h-8 rounded-full bg-indigo/20 text-indigo-2 flex items-center justify-center font-bold text-xs shrink-0 mt-1">
                    AI
                  </div>
                  <div className="bg-white/[0.05] border border-white/[0.08] rounded-2xl rounded-tl-none p-3.5 text-xs sm:text-sm text-paper max-w-[85%] space-y-2">
                    <p>🛍️ Here is our interactive WhatsApp store! You can check out directly with UPI without leaving this chat.</p>
                    <div className="p-2 rounded bg-ink border border-white/[0.08] flex items-center justify-between text-xs">
                      <span>Festive Combo Pack</span>
                      <span className="text-emerald-400 font-semibold">₹999</span>
                    </div>
                    <Button variant="wa" size="sm" className="w-full mt-1">
                      1-Click UPI Checkout (Save ₹240)
                    </Button>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs text-text-faint">
                <span className="flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5 text-amber-400" /> Instant response (0.3s)
                </span>
                <span>Powered by iEYAL Ownchat & Owncart</span>
              </div>
            </div>
          </div>
        }
      />

      {/* Client Logo Marquee */}
      <CustomerLogoMarquee />

      {/* Connected Ecosystem Stepper */}
      <ProductShowcase />

      {/* Product Summary Grid */}
      <section className="py-16 md:py-24 bg-ink-2/30 relative border-t border-white/[0.06]">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <Badge variant="violet" className="mb-4">The 4 Pillars</Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-paper mb-6">
              Everything You Need to Scale
            </h2>
            <p className="text-base sm:text-lg text-text-dim">
              Explore how our four core products transform every touchpoint of your customer lifecycle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PRODUCTS_CONFIG.map((prod) => (
              <Card key={prod.id} variant="glass" className="flex flex-col justify-between h-full group border-white/[0.08] hover:border-indigo/40">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="text-2xl font-display font-bold text-paper group-hover:text-indigo-2 transition-colors">
                      {prod.name}
                    </span>
                    <Badge variant={prod.status === 'Live' ? 'live' : 'outline'} size="sm">
                      {prod.badge}
                    </Badge>
                  </div>

                  <p className="text-sm sm:text-base text-text-dim mb-6 leading-relaxed">
                    {prod.description}
                  </p>

                  <div className="space-y-2.5 mb-8">
                    {prod.features.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-text">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{feat.title}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <Link to={prod.href} className="w-full">
                    <Button variant="secondary" className="w-full justify-between group/btn">
                      <span>Explore {prod.name} Details</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics & Traction */}
      <StatisticsSection />

      {/* Why iEYAL Advantage */}
      <section className="py-16 md:py-24 relative overflow-hidden border-t border-white/[0.06]">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <Badge variant="cyan">Why Choose iEYAL</Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-paper leading-tight">
                Built in India. Engineered for High Growth.
              </h2>
              <p className="text-base sm:text-lg text-text-dim leading-relaxed">
                Most global SaaS platforms are priced in dollars and designed for Western workflows. iEYAL was born in Thiruvarur, Tamil Nadu, with a relentless focus on high-speed mobile commerce, zero-latency WhatsApp messaging, and affordable scalability.
              </p>

              <div className="space-y-4 pt-2">
                <div className="p-4 rounded-m bg-white/[0.03] border border-white/[0.08] flex gap-4 items-start">
                  <div className="p-2.5 rounded-full bg-indigo/20 text-indigo-2 shrink-0 mt-0.5">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-paper text-base mb-1">
                      Eliminate 30% Aggregator Commissions
                    </h3>
                    <p className="text-sm text-text-dim">
                      Own your customer data and stop paying third-party delivery apps or marketplaces a cut of every single transaction.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-m bg-white/[0.03] border border-white/[0.08] flex gap-4 items-start">
                  <div className="p-2.5 rounded-full bg-cyan/20 text-cyan shrink-0 mt-0.5">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-paper text-base mb-1">
                      100% In-House Engineering & UI/UX
                    </h3>
                    <p className="text-sm text-text-dim">
                      We never outsource code or support. Our 22+ specialist team ships updates rapidly based on real feedback from 200+ paying businesses.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Link to="/company/about">
                  <Button variant="outline" icon={<ArrowRight className="w-4 h-4" />}>
                    Read Our Tier-3 Town Founder Story
                  </Button>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 flex justify-center">
              <Card variant="glow" className="w-full max-w-lg p-8 text-center space-y-6">
                <KiboMascot variant="growth" size="xl" caption="Kibo: Scaling SMBs 24/7" />
                <h3 className="text-2xl font-display font-bold text-paper">
                  Meet Kibo, Your AI Growth Mascot
                </h3>
                <p className="text-sm text-text-dim">
                  Whether automating midnight customer replies, routing kitchen tickets, or sending festive cashback alerts, Kibo ensures your business never sleeps.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Leadership preview */}
      <TeamSection condensed={true} />

      {/* Sitewide CTA Banner */}
      <CTASection
        heading="Ready to Transform Your WhatsApp Business Number?"
        subheading="Join 200+ businesses across India, Southeast Asia, and MENA running daily chat, commerce, loyalty, and operations on iEYAL."
        primaryBtnText="Book a Live Walkthrough"
        primaryBtnHref="/contact"
        showWaButton={true}
      />
    </>
  );
};
