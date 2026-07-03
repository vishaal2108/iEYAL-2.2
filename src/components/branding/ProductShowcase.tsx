import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MessageSquare, ShoppingCart, Gift, CheckSquare, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { cn } from '@/utils/cn';

export interface EcosystemStep {
  step: number;
  product: string;
  href: string;
  badge: string;
  tagline: string;
  whatHappens: string;
  businessOutcome: string;
  iconName: 'chat' | 'cart' | 'rewards' | 'task';
}

const STEPS: EcosystemStep[] = [
  {
    step: 1,
    product: "Ownchat",
    href: "/products/ownchat",
    badge: "Live",
    tagline: "First Contact & Routing",
    whatHappens: "A customer messages your business on WhatsApp. Ownchat routes it, auto-replies with AI, or hands it to your team inbox.",
    businessOutcome: "No missed conversations, no manual triage.",
    iconName: 'chat',
  },
  {
    step: 2,
    product: "Owncart",
    href: "/products/owncart",
    badge: "Beta",
    tagline: "In-Chat Order & Checkout",
    whatHappens: "That conversation becomes an order — menu selection, catalog browsing, and UPI checkout happen right inside WhatsApp.",
    businessOutcome: "Sales close where the conversation already is.",
    iconName: 'cart',
  },
  {
    step: 3,
    product: "OwnRewards",
    href: "/products/ownrewards",
    badge: "Beta",
    tagline: "Loyalty & Feedback Loop",
    whatHappens: "After purchase, the customer is automatically enrolled in digital cashback, 1-click feedback, and referral journeys.",
    businessOutcome: "Repeat customers, without extra staff effort.",
    iconName: 'rewards',
  },
  {
    step: 4,
    product: "OwnTask",
    href: "/products/owntask",
    badge: "Beta",
    tagline: "Fulfillment & SLA Tracking",
    whatHappens: "Behind the scenes, your team manages fulfillment, SLA timers, and field follow-ups on a shared Kanban workflow board.",
    businessOutcome: "Nothing falls through the cracks.",
    iconName: 'task',
  },
];

export const ProductShowcase: React.FC<{ className?: string }> = ({ className }) => {
  const [activeStep, setActiveStep] = useState<number>(0); // 0-indexed step

  const getIcon = (name: string, isActive: boolean) => {
    const cls = cn("w-6 h-6 transition-colors", isActive ? "text-white" : "text-indigo-2");
    switch (name) {
      case 'chat': return <MessageSquare className={cls} />;
      case 'cart': return <ShoppingCart className={cls} />;
      case 'rewards': return <Gift className={cls} />;
      case 'task': return <CheckSquare className={cls} />;
      default: return <CheckCircle2 className={cls} />;
    }
  };

  return (
    <section className={cn("py-16 md:py-24 relative overflow-hidden", className)}>
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <Badge variant="indigo" className="mb-4">One Connected Flow</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-paper mb-6">
            One Ecosystem. Every Step of Your Customer Journey.
          </h2>
          <p className="text-base sm:text-lg text-text-dim leading-relaxed">
            Most SMB tools solve one problem and leave you to stitch the rest together yourself. iEYAL is built differently: every product shares the same WhatsApp-native foundation, so your customer's journey never breaks — it just flows.
          </p>
        </div>

        {/* Stepper Navigation */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8 lg:mb-12 relative z-10">
          {STEPS.map((s, index) => {
            const isActive = activeStep === index;
            return (
              <button
                key={s.product}
                onClick={() => setActiveStep(index)}
                className={cn(
                  "p-5 rounded-m border text-left transition-all duration-300 relative overflow-hidden cursor-pointer flex flex-col justify-between h-full group",
                  isActive
                    ? "bg-gradient-to-br from-indigo/30 via-violet/40 to-ink-2 border-indigo shadow-glow-indigo"
                    : "bg-white/[0.03] hover:bg-white/[0.07] border-white/[0.08]"
                )}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={cn(
                    "w-12 h-12 rounded-full flex items-center justify-center transition-colors",
                    isActive ? "bg-indigo text-white shadow-lg shadow-indigo/40" : "bg-white/[0.06] group-hover:bg-indigo/20"
                  )}>
                    {getIcon(s.iconName, isActive)}
                  </div>
                  <span className="text-xs font-display font-bold text-text-faint">
                    STEP 0{s.step}
                  </span>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg font-display font-semibold text-paper group-hover:text-white">
                      {s.product}
                    </h3>
                    <Badge variant={s.badge === 'Live' ? 'live' : 'outline'} size="sm">
                      {s.badge}
                    </Badge>
                  </div>
                  <p className="text-xs text-text-dim line-clamp-1">{s.tagline}</p>
                </div>

                {/* Active indicator bar */}
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan via-indigo to-violet"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Active Step Content Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, translateY: 15 }}
            animate={{ opacity: 1, translateY: 0 }}
            exit={{ opacity: 0, translateY: -15 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-white/[0.05] backdrop-blur-lg border border-white/[0.12] rounded-l p-6 sm:p-8 lg:p-12 shadow-card relative overflow-hidden"
          >
            {/* Background decorative glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo/15 rounded-full blur-3xl -z-10 pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo/20 border border-indigo/40 text-xs text-indigo-2 font-medium">
                  Step {STEPS[activeStep].step}: {STEPS[activeStep].tagline}
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-paper">
                  {STEPS[activeStep].product}: How It Works
                </h3>

                <p className="text-base sm:text-lg text-text leading-relaxed">
                  {STEPS[activeStep].whatHappens}
                </p>

                <div className="p-4 rounded-m bg-ink-2/80 border border-white/[0.08] flex items-start gap-3">
                  <div className="p-2 rounded-full bg-emerald-500/15 text-emerald-400 shrink-0 mt-0.5">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-display font-semibold uppercase tracking-wider text-text-dim mb-1">
                      Business Outcome
                    </h4>
                    <p className="text-sm sm:text-base font-medium text-emerald-300">
                      {STEPS[activeStep].businessOutcome}
                    </p>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <Link to={STEPS[activeStep].href}>
                    <Button variant="glow" icon={<ArrowRight className="w-4 h-4" />}>
                      Explore {STEPS[activeStep].product}
                    </Button>
                  </Link>
                  <Link to="/products">
                    <Button variant="secondary">View Complete Suite</Button>
                  </Link>
                </div>
              </div>

              {/* Visual flow stepper diagram */}
              <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 rounded-l bg-ink-2/90 border border-white/[0.08]">
                <div className="w-full space-y-4">
                  <div className="text-center pb-2 border-b border-white/[0.06]">
                    <span className="text-xs font-display font-semibold uppercase tracking-widest text-text-faint">
                      Connected WhatsApp Journey
                    </span>
                  </div>

                  {STEPS.map((stepItem, idx) => {
                    const isCurrent = idx === activeStep;
                    const isPast = idx < activeStep;
                    return (
                      <div
                        key={stepItem.product}
                        onClick={() => setActiveStep(idx)}
                        className={cn(
                          "p-3.5 rounded-m flex items-center justify-between transition-all cursor-pointer",
                          isCurrent
                            ? "bg-indigo/20 border border-indigo/50 text-white shadow-md"
                            : isPast
                            ? "bg-white/[0.04] text-text-dim opacity-70"
                            : "bg-white/[0.02] text-text-faint opacity-50"
                        )}
                      >
                        <div className="flex items-center gap-3">
                          <span className={cn(
                            "w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0",
                            isCurrent ? "bg-indigo text-white" : isPast ? "bg-emerald-500/20 text-emerald-400" : "bg-white/10 text-text-faint"
                          )}>
                            {isPast ? "✓" : stepItem.step}
                          </span>
                          <span className="font-display font-medium text-sm sm:text-base">
                            {stepItem.product}
                          </span>
                        </div>
                        {isCurrent && (
                          <span className="text-xs font-semibold px-2 py-0.5 rounded bg-indigo text-white">
                            Active Stage
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
