export default function Spinner({ size }) {
  return (
    <div className="flex justify-center items-center absolute top-0 bottom-0 left-0 right-0">
      <div
        className={`spinner-border bg-blue-400 animate-spin inline-block border-4 ${size} rounded-full`}
        role="status"
      >
        <span className="visually-hidden"></span>
      </div>
    </div>
  );
}
