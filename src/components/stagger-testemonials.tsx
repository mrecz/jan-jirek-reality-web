import { useState, useEffect } from 'react';
import { cn } from '@/components/lib/utils';
import type { Testemonial } from '@/utils/types';
import TestemonialBadge from '@/assets/images/testemonial-badge.png';

const SQRT_5000 = Math.sqrt(5000);

interface TestimonialCardProps {
  position: number;
  testimonial: Testemonial;
  handleMove: (steps: number) => void;
  cardSize: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  position,
  testimonial,
  handleMove,
  cardSize,
}) => {
  const isCenter = position === 0;

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        'absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out',
        isCenter
          ? 'z-10 bg-primary text-primary-foreground border-primary'
          : 'z-0 bg-card text-card-foreground border-border hover:border-primary/50'
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%) 
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter ? '0px 8px 0px 4px hsl(var(--border))' : '0px 0px 0px 0px transparent',
      }}
    >
      <span
        className="absolute block origin-top-right rotate-45 bg-border"
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2,
        }}
      />
      <img
        src={TestemonialBadge.src}
        alt="Jan Jirek Reality"
        className="mb-4 h-16 w-12 bg-muted object-cover object-top"
        style={{
          boxShadow: '3px 3px 0px hsl(var(--background))',
        }}
      />
      <h3
        className={cn(
          'text-base sm:text-xl font-mono',
          isCenter ? 'text-primary-foreground' : 'text-foreground'
        )}
      >
        "{testimonial.data.content}"
      </h3>
      <p
        className={cn(
          'absolute bottom-6 left-8 right-8 mt-2 text-sm italic',
          isCenter ? 'text-primary-foreground/80' : 'text-muted-foreground'
        )}
      >
        - {testimonial.data.fullname}
      </p>
    </div>
  );
};

interface StaggerTestimonialsProps {
  testimonials: Testemonial[];
}

export const StaggerTestimonials: React.FC<StaggerTestimonialsProps> = ({ testimonials }) => {
  const [cardSize, setCardSize] = useState(450);
  const [testimonialsList, setTestimonialsList] = useState(testimonials);

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item });
      }
    }
    setTestimonialsList(newList);
  };

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia('(min-width: 640px)');
      setCardSize(matches ? 450 : 290);
      setTestimonialsList(
        matches
          ? testimonials.map(testimonial => ({
              ...testimonial,
              data: {
                ...testimonial.data,
                content: testimonial.data.content.slice(0, 280) + '...',
              },
            }))
          : testimonials.map(testimonial => ({
              ...testimonial,
              data: {
                ...testimonial.data,
                content: testimonial.data.content.slice(0, 90) + '...',
              },
            }))
      );
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-muted/30" style={{ height: 600 }}>
      {testimonialsList.map((testimonial, index) => {
        const position =
          testimonialsList.length % 2
            ? index - (testimonialsList.length + 1) / 2
            : index - testimonialsList.length / 2;
        return (
          <TestimonialCard
            key={testimonial.id}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        );
      })}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        <button
          onClick={() => handleMove(-1)}
          className={cn(
            'flex h-14 w-14 items-center justify-center text-2xl transition-colors',
            'bg-background border-2 border-border hover:bg-primary hover:text-primary-foreground',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'
          )}
          aria-label="Previous testimonial"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>
        <button
          onClick={() => handleMove(1)}
          className={cn(
            'flex h-14 w-14 items-center justify-center text-2xl transition-colors',
            'bg-background border-2 border-border hover:bg-primary hover:text-primary-foreground',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'
          )}
          aria-label="Next testimonial"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>
  );
};
