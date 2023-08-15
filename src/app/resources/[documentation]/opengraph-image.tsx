import { ImageResponse } from 'next/server';

export const runtime = 'edge';
export const alt = 'John Hodge';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <svg
        width='1200'
        height='630'
        viewBox='0 0 1200 630'
        style={{
          backgroundColor: '#ffffff',
        }}
        xmlns='https://www.w3.org/2000/svg'>
        <path
          d='M520.495 36H659.316L659.386 254.107H663.446C672.3 227.521 687.028 206.813 707.631 191.983C728.234 176.972 753.008 169.466 781.954 169.466C809.709 169.466 833.802 176.158 854.234 189.541C874.837 202.925 890.759 221.372 901.997 244.884C913.403 268.395 919.022 295.343 918.854 325.727V594H777.868V357.197C778.038 336.578 773.186 320.391 763.31 308.636C753.604 296.88 739.727 291.002 721.679 291.002C710.27 291.002 700.224 293.715 691.541 299.141C683.027 304.386 675.959 311.626 670.494 321.02C665.028 330.413 659.591 345.996 659.42 359.743L659.438 413.672C659.271 449.45 650.733 480.936 633.829 508.131C617.095 535.143 593.938 556.254 564.358 571.459C534.947 586.487 501.056 594 462.686 594C429.387 594 398.961 587.92 371.409 575.754C343.856 563.408 321.882 544.088 305.486 517.791C289.09 491.314 280.977 456.965 281.146 414.745H422.118C422.625 428.521 424.823 440.149 428.71 449.629C432.767 459.11 438.345 466.266 445.444 471.096C452.713 475.75 461.503 478.074 471.814 478.074C482.293 478.074 491.083 475.659 498.182 470.829C505.451 465.999 510.944 458.842 514.663 449.361C518.382 439.701 520.326 427.803 520.495 413.672V36Z'
          style={{ fill: '#020617' }}
        />
      </svg>
    ),
    {
      ...size,
    }
  );
}
