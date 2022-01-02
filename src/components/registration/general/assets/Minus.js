export default function Minus({ onClick }) {
  return (
    <div onClick={onClick} style={{ cursor: "pointer" }}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M25 6.25C35.3125 6.25 43.75 14.6875 43.75 25C43.75 35.3125 35.3125 43.75 25 43.75C14.6875 43.75 6.25 35.3125 6.25 25C6.25 14.6875 14.6875 6.25 25 6.25ZM25 3.125C12.9688 3.125 3.125 12.9688 3.125 25C3.125 37.0312 12.9688 46.875 25 46.875C37.0312 46.875 46.875 37.0312 46.875 25C46.875 12.9688 37.0312 3.125 25 3.125Z"
          fill="#CC0000"
        />
        <path d="M12.5 23.4375H37.5V26.5625H12.5V23.4375Z" fill="#CC0000" />
      </svg>
    </div>
  );
}
