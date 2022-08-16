export default function Button({
  text,
  backgroundColor,
  color,
  border,
  type,
  width,
  fontSize,
  margin,
  href,
  form,
  onClick
}) {
  return (
    <button
    onClick={onClick}
      form={form}
      type={type}
      className=" capitalize mx-5 py-2 px-4 whitespace-nowrap rounded-2xl w-28 hover:font-bold"
      style={{ backgroundColor, color, border, width, fontSize, margin }}
    >
      {" "}
      <a href={href}>{text}</a>
    </button>
  );
}
