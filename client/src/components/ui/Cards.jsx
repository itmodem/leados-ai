function Card({ children, className = "" }) {
  return (
    <div
      className={`bg-surface rounded-lg shadow-md p-6 ${className}`}
    >
      {children}
    </div>
  );
}

export default Card;