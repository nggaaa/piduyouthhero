export default function Card({ ...props }) {
  return (
    <div
      className={
        (props.className ? props.className : "") +
        " shadow-[5px_5px_0px_-1px_rgba(0,0,0,1)] bg-white py-3 border-black select-none border-solid border-2 lg:py-4 px-6 lg:px-16 text-white-500 font-semibold rounded-lg mt-4"
      }
    >
      {props.children}
    </div>
  );
}
