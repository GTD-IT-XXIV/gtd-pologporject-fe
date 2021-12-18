import React from "react";

const LeftArrowWhite = ({ onClick }) => {
  return (
    <div className="LeftArrowWhite" onClick={onClick}>
      <svg
        width="72"
        height="72"
        viewBox="0 0 72 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M36 4.5C27.6457 4.5 19.6335 7.81874 13.7261 13.7261C7.81874 19.6335 4.5 27.6457 4.5 36C4.5 44.3543 7.81874 52.3665 13.7261 58.2739C19.6335 64.1813 27.6457 67.5 36 67.5C44.3543 67.5 52.3665 64.1813 58.2739 58.2739C64.1813 52.3665 67.5 44.3543 67.5 36C67.5 27.6457 64.1813 19.6335 58.2739 13.7261C52.3665 7.81874 44.3543 4.5 36 4.5ZM36 72C26.4522 72 17.2955 68.2072 10.5442 61.4558C3.79285 54.7045 0 45.5478 0 36C0 26.4522 3.79285 17.2955 10.5442 10.5442C17.2955 3.79285 26.4522 0 36 0C45.5478 0 54.7045 3.79285 61.4558 10.5442C68.2072 17.2955 72 26.4522 72 36C72 45.5478 68.2072 54.7045 61.4558 61.4558C54.7045 68.2072 45.5478 72 36 72ZM51.75 38.25C52.3467 38.25 52.919 38.0129 53.341 37.591C53.7629 37.169 54 36.5967 54 36C54 35.4033 53.7629 34.831 53.341 34.409C52.919 33.9871 52.3467 33.75 51.75 33.75H25.6815L35.343 24.093C35.7655 23.6705 36.0028 23.0975 36.0028 22.5C36.0028 21.9025 35.7655 21.3295 35.343 20.907C34.9205 20.4845 34.3475 20.2472 33.75 20.2472C33.1525 20.2472 32.5795 20.4845 32.157 20.907L18.657 34.407C18.4475 34.616 18.2812 34.8643 18.1678 35.1376C18.0544 35.411 17.996 35.704 17.996 36C17.996 36.296 18.0544 36.589 18.1678 36.8624C18.2812 37.1357 18.4475 37.384 18.657 37.593L32.157 51.093C32.5795 51.5155 33.1525 51.7528 33.75 51.7528C34.3475 51.7528 34.9205 51.5155 35.343 51.093C35.7655 50.6705 36.0028 50.0975 36.0028 49.5C36.0028 48.9025 35.7655 48.3295 35.343 47.907L25.6815 38.25H51.75Z"
          fill="white"
        />
      </svg>
    </div>
  );
};

export default LeftArrowWhite;
