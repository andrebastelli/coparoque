import { useState, useEffect } from "react";

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // June 11, 2026
    const targetDate = new Date("2026-06-11T00:00:00Z").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex gap-4 md:gap-8 text-center" data-testid="countdown-timer">
      <div className="flex flex-col items-center">
        <span className="text-4xl md:text-7xl font-bold font-display text-primary leading-none tracking-tighter">
          {timeLeft.days.toString().padStart(2, "0")}
        </span>
        <span className="text-sm md:text-lg text-muted-foreground font-medium uppercase tracking-widest mt-2">Dias</span>
      </div>
      <div className="text-4xl md:text-7xl font-bold font-display text-primary/50 leading-none">:</div>
      <div className="flex flex-col items-center">
        <span className="text-4xl md:text-7xl font-bold font-display text-primary leading-none tracking-tighter">
          {timeLeft.hours.toString().padStart(2, "0")}
        </span>
        <span className="text-sm md:text-lg text-muted-foreground font-medium uppercase tracking-widest mt-2">Horas</span>
      </div>
      <div className="text-4xl md:text-7xl font-bold font-display text-primary/50 leading-none">:</div>
      <div className="flex flex-col items-center">
        <span className="text-4xl md:text-7xl font-bold font-display text-primary leading-none tracking-tighter">
          {timeLeft.minutes.toString().padStart(2, "0")}
        </span>
        <span className="text-sm md:text-lg text-muted-foreground font-medium uppercase tracking-widest mt-2">Min</span>
      </div>
      <div className="text-4xl md:text-7xl font-bold font-display text-primary/50 leading-none hidden md:block">:</div>
      <div className="flex flex-col items-center hidden md:flex">
        <span className="text-4xl md:text-7xl font-bold font-display text-primary leading-none tracking-tighter">
          {timeLeft.seconds.toString().padStart(2, "0")}
        </span>
        <span className="text-sm md:text-lg text-muted-foreground font-medium uppercase tracking-widest mt-2">Seg</span>
      </div>
    </div>
  );
}
