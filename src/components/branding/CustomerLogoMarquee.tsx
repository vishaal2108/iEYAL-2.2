import React from 'react';
import { CUSTOMER_LOGOS } from '@/utils/assets';
import { cn } from '@/utils/cn';

export interface CustomerLogoMarqueeProps {
  className?: string;
  title?: string;
}

export const CustomerLogoMarquee: React.FC<CustomerLogoMarqueeProps> = ({
  className,
  title = "Trusted by 200+ businesses across the globe",
}) => {
  // If no logos loaded for any reason, return clean fallback
  if (!CUSTOMER_LOGOS || CUSTOMER_LOGOS.length === 0) return null;

  // Double the array for seamless infinite looping
  const loopedLogos = [...CUSTOMER_LOGOS, ...CUSTOMER_LOGOS];

  return (
    <section aria-label="Customer logos" className={cn("py-12 md:py-16 bg-ink-2/50 border-y border-white/[0.06] overflow-hidden relative", className)}>
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-transparent to-ink z-10 pointer-events-none" />

      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center relative z-20">
        <p className="text-xs sm:text-sm font-display font-medium tracking-widest text-text-faint uppercase">
          {title}
        </p>
      </div>

      <div className="flex overflow-x-hidden relative z-0">
        <div className="flex items-center gap-10 md:gap-16 animate-marquee whitespace-nowrap hover:[animation-play-state:paused]">
          {loopedLogos.map((logoUrl, index) => {
            // Extract clean name from file path for alt text
            const cleanName = logoUrl
              .split('/')
              .pop()
              ?.replace(/^imgi_\d+_/, '')
              ?.replace(/\.(png|jpe?g)$/i, '') || 'Client Logo';

            return (
              <div
                key={`${index}-${logoUrl}`}
                className="inline-flex items-center justify-center shrink-0 w-36 sm:w-44 h-16 px-4 bg-white/[0.03] hover:bg-white/[0.08] rounded-m border border-white/[0.06] transition-all duration-300 group"
              >
                <img
                  src={logoUrl}
                  alt={`iEYAL Customer - ${cleanName}`}
                  className="max-h-10 max-w-full object-contain filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                  loading="lazy"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
