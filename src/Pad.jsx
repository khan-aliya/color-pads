export default function Pad(props) {
  return (
    <button
      style={{ backgroundColor: props.color }}
      className={`aspect-square w-full border-4 border-gray-100 rounded-md ${props.on ? "opacity-100" : "opacity-25"}`}
      onClick={props.toggle}
    ></button>
  );
}
