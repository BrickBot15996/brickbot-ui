import { CSSProperties } from "react";

type ButtonProps = {
  type?: ButtonType;
  text?: string;
  className?: string;
  style?: CSSProperties;
};

type ButtonType = "primary" | "secondary";

export function Button({
  type = "primary",
  text = "button",
  className = "",
  style = {},
}: ButtonProps) {
  return (
    <div
      className={`w-auto h-auto rounded-full border-[0.125rem] border-transparent bg-transparent ${className}`}
      style={{ ...style }}
    >
      <button
        className={
          `w-auto h-auto rounded-full border-[0.25rem] border-(--primary) px-[3rem] py-[0.4rem] text-[2rem] font-bold items-center justify-center cursor-pointer select-none ` +
          (type == "primary"
            ? "bg-(--primary) text-(--bg)"
            : "bg-(--bg) text-(--primary) hover:bg-(--bg-light) active:bg-(--primary) active:text-(--bg) transition-colors duration-200")
        }
      >
        {text.toUpperCase()}
      </button>
    </div>
  );
}
