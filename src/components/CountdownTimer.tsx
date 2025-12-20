import { useState, useEffect } from "react";
import { Clock, Flame } from "lucide-react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 47,
    seconds: 33
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-destructive/90 to-destructive py-3 px-4 overflow-hidden">
      <div className="container">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-destructive-foreground">
          {/* Flash Sale Label */}
          <div className="flex items-center gap-2 animate-pulse">
            <Flame className="w-5 h-5" />
            <span className="font-bold uppercase tracking-wider text-sm">Flash Sale</span>
            <Flame className="w-5 h-5" />
          </div>

          {/* Timer */}
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span className="text-sm font-medium">Promocja kończy się za:</span>
            <div className="flex items-center gap-1">
              <div className="bg-background/20 backdrop-blur-sm rounded px-2 py-1 min-w-[36px] text-center">
                <span className="font-bold text-lg">{formatTime(timeLeft.hours)}</span>
              </div>
              <span className="font-bold">:</span>
              <div className="bg-background/20 backdrop-blur-sm rounded px-2 py-1 min-w-[36px] text-center">
                <span className="font-bold text-lg">{formatTime(timeLeft.minutes)}</span>
              </div>
              <span className="font-bold">:</span>
              <div className="bg-background/20 backdrop-blur-sm rounded px-2 py-1 min-w-[36px] text-center">
                <span className="font-bold text-lg">{formatTime(timeLeft.seconds)}</span>
              </div>
            </div>
          </div>

          {/* Discount */}
          <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-background/20 backdrop-blur-sm">
            <span className="text-sm font-bold">-44% TANIEJ</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
