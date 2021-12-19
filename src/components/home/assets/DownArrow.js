import React from "react";

const DownArrow = ({ onClick }) => {
  return (
    <div className="DownArrow" onClick={onClick}>
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M4 32C4 39.4261 6.94999 46.548 12.201 51.799C17.452 57.05 24.5739 60 32 60C39.4261 60 46.548 57.05 51.799 51.799C57.05 46.548 60 39.4261 60 32C60 24.5739 57.05 17.452 51.799 12.201C46.548 6.94999 39.4261 4 32 4C24.5739 4 17.452 6.94999 12.201 12.201C6.94999 17.452 4 24.5739 4 32ZM64 32C64 40.4869 60.6286 48.6263 54.6274 54.6274C48.6263 60.6286 40.4869 64 32 64C23.5131 64 15.3737 60.6286 9.37258 54.6274C3.37142 48.6263 0 40.4869 0 32C0 23.5131 3.37142 15.3737 9.37258 9.37258C15.3737 3.37142 23.5131 0 32 0C40.4869 0 48.6263 3.37142 54.6274 9.37258C60.6286 15.3737 64 23.5131 64 32ZM34 18C34 17.4696 33.7893 16.9609 33.4142 16.5858C33.0391 16.2107 32.5304 16 32 16C31.4696 16 30.9609 16.2107 30.5858 16.5858C30.2107 16.9609 30 17.4696 30 18V41.172L21.416 32.584C21.0405 32.2085 20.5311 31.9975 20 31.9975C19.4689 31.9975 18.9595 32.2085 18.584 32.584C18.2085 32.9595 17.9975 33.4689 17.9975 34C17.9975 34.5311 18.2085 35.0405 18.584 35.416L30.584 47.416C30.7698 47.6023 30.9905 47.75 31.2335 47.8508C31.4764 47.9517 31.7369 48.0036 32 48.0036C32.2631 48.0036 32.5236 47.9517 32.7665 47.8508C33.0095 47.75 33.2302 47.6023 33.416 47.416L45.416 35.416C45.7915 35.0405 46.0025 34.5311 46.0025 34C46.0025 33.4689 45.7915 32.9595 45.416 32.584C45.0405 32.2085 44.5311 31.9975 44 31.9975C43.4689 31.9975 42.9595 32.2085 42.584 32.584L34 41.172V18Z"
          fill="white"
        />
      </svg>
    </div>
  );
};

export default DownArrow;
