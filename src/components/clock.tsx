'use client'
import React, { useEffect, useRef, useState } from 'react';

type ClockType = 'analog' | 'digital' | 'both';

type ClockProps = {
  type?: ClockType;
  showNumbers?: boolean;
  showDate?: boolean;
  datePosition?: 'top' | 'bottom';
};

const Clock: React.FC<ClockProps> = ({
  type = 'both',
  showNumbers = true,
  showDate = false,
  datePosition = 'bottom',
}) => {
  const [time, setTime] = useState<Date>(new Date());
  const [hasMounted, setHasMounted] = useState(false);
  const requestRef = useRef<number>(null);

  useEffect(() => {
    setHasMounted(true);
    requestRef.current = requestAnimationFrame(updateClock);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  const updateClock = () => {
    setTime(new Date());
    requestRef.current = requestAnimationFrame(updateClock);
  };

  if (!hasMounted) return null;

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const milliseconds = time.getMilliseconds();

  const smoothSeconds = seconds + milliseconds / 1000;
  const smoothMinutes = minutes + smoothSeconds / 60;
  const smoothHours = (hours % 12) + smoothMinutes / 60;

  const hourDeg = smoothHours * 30;
  const minuteDeg = smoothMinutes * 6;
  const secondDeg = smoothSeconds * 6;

  const renderDate = () => (
    <div className="text-sm text-muted-foreground">
      {time.toLocaleDateString('fa-IR', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })}
    </div>
  );

  const renderDigital = () => {
    const isDayTime = hours >= 6 && hours < 18;
    const timeEmoji = isDayTime ? '☀️' : '🌙';
  
    return (
      <div className="flex flex-col items-center gap-1 font-vazir-fd text-xl font-bold">
        <div>
          {String(hours).padStart(2, '0')}:{String(minutes).padStart(2, '0')}:
          {String(seconds).padStart(2, '0')} <span>{timeEmoji}</span>
        </div>
        {showDate && datePosition === 'bottom' && (
          <div className="text-base font-medium text-gray-600">
            {time.toLocaleDateString('fa-IR', {
              dateStyle: 'medium',
            })}
          </div>
        )}
      </div>
    );
  };
  

  const renderClockNumbers = () => {
    const radius = 40;
    const cx = 50;
    const cy = 50;
    const numbers = [];

    for (let i = 1; i <= 12; i++) {
      const angle = ((i - 3) * 30 * Math.PI) / 180;
      const x = cx + radius * Math.cos(angle);
      const y = cy + radius * Math.sin(angle);
      numbers.push(
        <text
          key={i}
          x={x}
          y={y}
          textAnchor="middle"
          dominantBaseline="central"
          fontSize="6"
          fill="#333"
        >
          {i}
        </text>
      );
    }

    return numbers;
  };

  return (
    <div className="flex flex-col items-center gap-6">
      {showDate && datePosition === 'top' && renderDate()}

      {(type === 'analog' || type === 'both') && (
        <div className="relative flex h-30 w-30 items-center justify-center rounded-full backdrop-blur-2xl">
          <svg viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="48"
              fill="#ffffffcc"
              stroke="#333"
              strokeWidth="2"
            />
            {showNumbers && renderClockNumbers()}
            <line
              x1="50"
              y1="50"
              x2="50"
              y2="30"
              stroke="#000"
              strokeWidth="4"
              strokeLinecap="round"
              transform={`rotate(${hourDeg} 50 50)`}
            />
            <line
              x1="50"
              y1="50"
              x2="50"
              y2="20"
              stroke="#000"
              strokeWidth="3"
              strokeLinecap="round"
              transform={`rotate(${minuteDeg} 50 50)`}
            />
            <line
              x1="50"
              y1="50"
              x2="50"
              y2="15"
              stroke="var(--color-primary)"
              strokeWidth="1"
              strokeLinecap="round"
              transform={`rotate(${secondDeg} 50 50)`}
            />
            <circle cx="50" cy="50" r="2" fill="var(--color-primary)" />
          </svg>
        </div>
      )}

      {(type === 'digital' || type === 'both') && renderDigital()}

      {showDate && datePosition === 'bottom' && type === 'analog' && (
        <div className="text-sm text-muted-foreground">
          {time.toLocaleDateString('fa-IR', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </div>
      )}
    </div>
  );
};

export default Clock;
