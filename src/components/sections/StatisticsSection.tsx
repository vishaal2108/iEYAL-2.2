import React from 'react';
import { motion } from 'framer-motion';
import { SITE_CONFIG } from '@/config/site';
import { cn } from '@/utils/cn';

export interface StatisticsSectionProps {
  className?: string;
  stats?: { label: string; value: string; description?: string }[];
  title?: string;
  subtitle?: string;
}

export const StatisticsSection: React.FC<StatisticsSectionProps> = ({
  className,
  stats = SITE_CONFIG.stats,
  title = "Market Validation & Momentum",
  subtitle = "Real businesses run on iEYAL every day. This isn't a pilot — it's a live, growing customer base.",
}) => {
  return (
    <section className={cn("py-16 sm:py-24 relative overflow-hidden", className)}>
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-paper mb-4">
              {title}
            </h2>
            {subtitle && (
              <p className="text-base sm:text-lg text-text-dim leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, translateY: 15 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-6 sm:p-8 rounded-l bg-white/[0.04] hover:bg-white/[0.07] border border-white/[0.08] transition-colors relative group overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-indigo via-cyan to-violet opacity-80" />
              
              <div className="text-4xl sm:text-5xl font-display font-bold text-gradient-indigo mb-2 tracking-tight">
                {stat.value}
              </div>
              
              <h3 className="text-lg font-display font-semibold text-paper mb-1">
                {stat.label}
              </h3>
              
              {stat.description && (
                <p className="text-xs sm:text-sm text-text-dim leading-relaxed">
                  {stat.description}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
