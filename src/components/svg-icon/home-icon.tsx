import React from 'react';

interface HomeIconProps {
  color?: string; // Optional color prop
  className?: string; // Optional additional classes
  variants?: 'fill' | 'outline'; // Optional variants prop
}

const HomeIcon: React.FC<HomeIconProps> = ({
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
            d="M20.29 7.00048L14.73 2.89048C13.1036 1.70317 10.8964 1.70317 9.27 2.89048L3.72 7.00048C2.64544 7.77462 2.0061 9.01612 2 10.3405V17.7705C2.06002 20.1637 4.04665 22.0564 6.44 22.0005H17.56C19.9534 22.0564 21.94 20.1637 22 17.7705V10.3305C21.9914 9.01185 21.3567 7.77576 20.29 7.00048ZM20.5 17.7705C20.4404 19.3354 19.1251 20.5568 17.56 20.5005H6.44C4.87698 20.5512 3.56502 19.333 3.5 17.7705V10.3405C3.50534 9.4904 3.91817 8.69448 4.61 8.20048L10.16 4.10048C11.2561 3.30006 12.7439 3.30006 13.84 4.10048L19.39 8.21048C20.0812 8.6959 20.4948 9.48583 20.5 10.3305V17.7705ZM7.5 15.7505H16.5C16.9142 15.7505 17.25 16.0863 17.25 16.5005C17.25 16.9147 16.9142 17.2505 16.5 17.2505H7.5C7.08579 17.2505 6.75 16.9147 6.75 16.5005C6.75 16.0863 7.08579 15.7505 7.5 15.7505Z"
            fill="currentColor"
          />
        </>
      ) : (
        <>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.4537 3.8032L19.4558 7.49793C20.4198 8.1956 20.9934 9.31112 21 10.5011V17.1895C20.938 19.3342 19.1566 21.0268 17.0116 20.979H6.99789C4.8492 21.032 3.06195 19.338 3 17.1895V10.5011C3.00659 9.31112 3.58019 8.1956 4.54421 7.49793L9.54632 3.8032C11.0068 2.73227 12.9932 2.73227 14.4537 3.8032ZM7.73684 16.9716H16.2632C16.6556 16.9716 16.9737 16.6535 16.9737 16.2611C16.9737 15.8687 16.6556 15.5506 16.2632 15.5506H7.73684C7.34443 15.5506 7.02632 15.8687 7.02632 16.2611C7.02632 16.6535 7.34443 16.9716 7.73684 16.9716Z"
            fill="currentColor"
          />
        </>
      )}
    </svg>
  );
};

export default HomeIcon;
