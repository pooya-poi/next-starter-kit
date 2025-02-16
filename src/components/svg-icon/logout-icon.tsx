import React from 'react';

interface LogoutIconProps {
  color?: string; // Optional color prop
  className?: string; // Optional additional classes
  variants?: 'fill' | 'outline'; // Optional variants prop
}

const LogoutIcon: React.FC<LogoutIconProps> = ({
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
            d="M13.11 16.1214V17.3314C13.0553 19.8476 10.9764 21.846 8.46 21.8014H4.65001C2.13357 21.846 0.0546779 19.8476 0 17.3314L0.0800024 4.47135C0.13468 1.95511 2.21357 -0.0433012 4.73001 0.00135127L8.54001 0.00135144C9.75384 -0.028157 10.9295 0.426592 11.8076 1.26523C12.6856 2.10387 13.1938 3.25744 13.22 4.47135V5.68135C13.22 6.14527 12.8439 6.52135 12.38 6.52135C11.9161 6.52135 11.54 6.14527 11.54 5.68135V4.47135C11.5166 3.70201 11.1863 2.97403 10.6226 2.44985C10.059 1.92568 9.30902 1.64893 8.54001 1.68135L4.76 1.68135C3.99099 1.64893 3.24099 1.92568 2.67736 2.44985C2.11373 2.97403 1.78337 3.70201 1.76 4.47135L1.62 17.3314C1.64337 18.1007 1.97373 18.8287 2.53736 19.3528C3.10099 19.877 3.85099 20.1538 4.62 20.1214H8.43C9.19902 20.1538 9.94902 19.877 10.5126 19.3528C11.0763 18.8287 11.4066 18.1007 11.43 17.3314V16.1214C11.43 15.6574 11.8061 15.2814 12.27 15.2814C12.7339 15.2814 13.11 15.6574 13.11 16.1214Z"
            fill="currentColor"
          />
          <path
            d="M19.2499 11.3047L15.5299 15.0347C15.3723 15.1928 15.1582 15.2817 14.9349 15.2817C14.7116 15.2817 14.4975 15.1928 14.3399 15.0347C14.0212 14.702 14.0212 14.1773 14.3399 13.8447L16.6399 11.5547H6.54989C6.08597 11.5547 5.70989 11.1786 5.70989 10.7147C5.70989 10.2508 6.08597 9.87468 6.54989 9.87468H16.6399L14.3399 7.58468C14.0212 7.25204 14.0212 6.72731 14.3399 6.39468C14.4975 6.23651 14.7116 6.14761 14.9349 6.14761C15.1582 6.14761 15.3723 6.23651 15.5299 6.39468L19.2499 10.1247C19.4108 10.2786 19.5012 10.492 19.4999 10.7147C19.5036 10.9378 19.4128 11.1522 19.2499 11.3047Z"
            fill="currentColor"
          />
        </>
      ) : (
        <>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4 0C1.79086 0 0 1.79086 0 4V17C0 19.2091 1.79086 21 4 21H8C10.2091 21 12 19.2091 12 17V11.4071H15.93C15.93 11.4071 13.926 13.1394 13.63 13.6971C13.334 14.2547 13.5067 14.7228 13.63 14.8871C13.7876 15.0452 14.0017 15.1341 14.225 15.1341C14.4483 15.1341 14.5474 15.1341 14.82 14.8871C15.0926 14.64 18.54 11.1571 18.54 11.1571C18.7029 11.0045 18.7937 10.7902 18.79 10.5671C18.7909 10.4193 18.7513 10.2755 18.6776 10.1506L14.82 6.24706C14.6624 6.0889 14.4483 6 14.225 6C14.0017 6 13.7876 6.0889 13.63 6.24706C13.3113 6.5797 13.3113 7.10442 13.63 7.43706L15.93 9.72706H12V4C12 1.79086 10.2091 0 8 0H4ZM12 9.72706H5.84C5.37608 9.72706 5 10.1031 5 10.5671C5 11.031 5.37608 11.4071 5.84 11.4071H12V9.72706Z"
            fill="currentColor"
          />
        </>
      )}
    </svg>
  );
};

export default LogoutIcon;
