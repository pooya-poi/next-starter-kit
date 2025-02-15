import React from 'react';

interface MoonIconProps {
  color?: string; // Optional color prop
  className?: string; // Optional additional classes
  variants?: 'fill' | 'outline'; // Optional variants prop
}

const MoonIcon: React.FC<MoonIconProps> = ({
  color,
  className = '',
  variants = 'fill',
}) => {
  const defaultColor = 'white'; // You can change this to any default color you prefer
  const fillColor = color || defaultColor;
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`fill-${fillColor} ${className}`}
    >
      {variants === 'outline' ? (
        <>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2 12.0802C2 6.51321 6.51297 2.00024 12.08 2.00024C12.8206 1.99652 13.5591 2.08044 14.28 2.25024C11.4268 3.06715 9.55951 5.7996 9.83498 8.75459C10.1104 11.7096 12.4507 14.0498 15.4057 14.3253C18.3606 14.6007 21.0931 12.7334 21.91 9.88024C22.0798 10.6011 22.1637 11.3396 22.16 12.0802C22.16 17.6473 17.647 22.1602 12.08 22.1602C6.51297 22.1602 2 17.6473 2 12.0802ZM10.543 13.6164C7.92799 11.0039 7.54836 6.89792 9.64 3.85024C5.70314 5.01949 3.14688 8.81453 3.54276 12.9022C3.93865 16.9899 7.17565 20.2239 11.2637 20.616C15.3518 21.008 19.1444 18.4482 20.31 14.5102C17.2643 16.6047 13.1579 16.229 10.543 13.6164Z"
            fill="currentColor"
          />
        </>
      ) : (
        <>
          <path
            d="M22.16 12.0801C22.16 17.6471 17.647 22.1601 12.08 22.1601C6.51297 22.1601 2 17.6471 2 12.0801C2 6.51309 6.51297 2.00012 12.08 2.00012C12.8206 1.9964 13.5591 2.08031 14.28 2.25012C11.4268 3.06703 9.55951 5.79948 9.83498 8.75447C10.1104 11.7095 12.4507 14.0497 15.4057 14.3251C18.3606 14.6006 21.0931 12.7333 21.91 9.88012C22.0798 10.601 22.1637 11.3395 22.16 12.0801Z"
            fill="currentColor"
          />
        </>
      )}
    </svg>
  );
};

export default MoonIcon;
