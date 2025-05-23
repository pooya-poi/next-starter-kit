import React from 'react';

interface BellIconProps {
  color?: string; // Optional color prop
  className?: string; // Optional additional classes
  variants?: 'fill' | 'outline'; // Optional variants prop
}

const BellIcon: React.FC<BellIconProps> = ({
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
            d="M21.1066 15.48C20.6623 15.1 20.4065 14.5446 20.4066 13.96V9.14C20.4066 5.19 16.8266 2 12.4066 2C7.98657 2 4.40657 5.19 4.40657 9.14V13.96C4.40661 14.5446 4.15084 15.1 3.70657 15.48C2.19657 16.83 3.26657 19.13 5.40657 19.13H9.20657C9.69141 20.4804 10.9718 21.3811 12.4066 21.3811C13.8414 21.3811 15.1217 20.4804 15.6066 19.13H19.4066C21.5466 19.13 22.6166 16.83 21.1066 15.48ZM12.4066 19.88C11.8114 19.8778 11.2505 19.601 10.8866 19.13H13.8866C13.5342 19.5936 12.9888 19.87 12.4066 19.88ZM19.4166 17.63C19.7801 17.6629 20.1263 17.468 20.2866 17.14C20.3644 16.9424 20.2935 16.7173 20.1166 16.6C19.3631 15.9279 18.9275 14.9696 18.9166 13.96V9.14C18.9166 6.03 15.9966 3.5 12.4166 3.5C8.83657 3.5 5.91657 6.03 5.91657 9.14V13.96C5.9056 14.9696 5.47001 15.9279 4.71657 16.6C4.53589 16.7144 4.46065 16.9401 4.53657 17.14C4.69686 17.468 5.04301 17.6629 5.40657 17.63H19.4166Z"
            fill="currentColor"
          />
        </>
      ) : (
        <>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.4066 13.97C20.4094 14.5511 20.6649 15.1023 21.1066 15.48C22.6166 16.83 21.5466 19.14 19.4066 19.14H15.6066C15.114 20.4844 13.8383 21.3814 12.4066 21.39C10.9702 21.3962 9.68678 20.4938 9.20657 19.14H5.40657C3.26657 19.14 2.19657 16.83 3.70657 15.48C4.1482 15.1023 4.40369 14.5511 4.40657 13.97V9.14C4.40657 5.2 7.98657 2 12.4066 2C16.8266 2 20.4066 5.2 20.4066 9.14V13.97ZM10.8866 19.14C11.2505 19.611 11.8114 19.8878 12.4066 19.89C12.9877 19.8756 13.5314 19.6001 13.8866 19.14H10.8866Z"
            fill="currentColor"
          />
        </>
      )}
    </svg>
  );
};

export default BellIcon;
