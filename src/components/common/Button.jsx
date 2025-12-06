export default function Button({ children, className = "", ...props }) {
  return (
    <button
      {...props}
      className={`px-6 py-3 rounded font-semibold transition ${className}`}
    >
      {children}
    </button>
  );
}
