
export default function Loading () {
  return (
    <div className="light">
      <div className="light-tow">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          width="100"
          height="150"
        >
          <polygon points="32 0 18 32 28 32 16 64 48 28 36 28 48 0 32 0" />
        </svg>
        <p className="light-txt">Loading...</p>
      </div>
    </div>
  );
};