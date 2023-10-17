import Image from "next/image";

// button props
type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant:
    | "btn_dark_green"
    | "btn_green"
    | "btn_white_text"
    | "btn_white"
    | "btn_dark_green_outline";
  full?: boolean;
};

// button
const Button = ({ type, title, icon, variant, full }: ButtonProps) => {
  // button id
  const id = title.toLowerCase().replaceAll(/\W+/g, "-");

  return (
    <button
      type={type}
      className={`flexCenter gap-3 rounded-full border cursor-pointer ${variant} ${
        full && "w-full"
      }`}
      title={title}
      id={id}
    >
      {/* button icon */}
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      {/* button text */}
      <label className="bold-16 whitespace-nowrap cursor-pointer" htmlFor={id}>
        {title}
      </label>
    </button>
  );
};

export default Button;
