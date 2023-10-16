import Image from "next/image";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant: "btn_dark_green";
};

const Button = ({ type, title, icon, variant }: ButtonProps) => {
  const id = title.toLowerCase().replaceAll(/\W+/g, "-");

  return (
    <button
      type={type}
      className={`flexCenter gap-3 rounded-full border ${variant}`}
      title={title}
      id={id}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <label className="bold-16 whitespace-nowrap" htmlFor={id}>
        {title}
      </label>
    </button>
  );
};

export default Button;
