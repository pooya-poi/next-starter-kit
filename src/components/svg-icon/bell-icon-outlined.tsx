import React from 'react';

interface BellIconOutlinedProps {
  color?: string; // Optional color prop
  className?: string; // Optional additional classes
}

const BellIconOutlined: React.FC<BellIconOutlinedProps> = ({
  color,
  className = '',
}) => {
  const defaultColor = 'white'; // You can change this to any default color you prefer
  const fillColor = color || defaultColor;
  return (
    <svg
      width="19"
      height="20"
      viewBox="0 0 19 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`fill-${fillColor} ${className}`}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.1066 13.48C17.6623 13.1 17.4065 12.5446 17.4066 11.96V7.14C17.4066 3.19 13.8266 0 9.40657 0C4.98657 0 1.40657 3.19 1.40657 7.14V11.96C1.40661 12.5446 1.15084 13.1 0.706568 13.48C-0.803432 14.83 0.266568 17.13 2.40657 17.13H6.20657C6.69141 18.4804 7.97177 19.3811 9.40657 19.3811C10.8414 19.3811 12.1217 18.4804 12.6066 17.13H16.4066C18.5466 17.13 19.6166 14.83 18.1066 13.48ZM9.40657 17.88C8.81136 17.8778 8.25048 17.601 7.88657 17.13H10.8866C10.5342 17.5936 9.98876 17.87 9.40657 17.88ZM16.4166 15.63C16.7801 15.6629 17.1263 15.468 17.2866 15.14C17.3644 14.9424 17.2935 14.7173 17.1166 14.6C16.3631 13.9279 15.9275 12.9696 15.9166 11.96V7.14C15.9166 4.03 12.9966 1.5 9.41657 1.5C5.83657 1.5 2.91657 4.03 2.91657 7.14V11.96C2.9056 12.9696 2.47001 13.9279 1.71657 14.6C1.53589 14.7144 1.46065 14.9401 1.53657 15.14C1.69686 15.468 2.04301 15.6629 2.40657 15.63H16.4166Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default BellIconOutlined;
