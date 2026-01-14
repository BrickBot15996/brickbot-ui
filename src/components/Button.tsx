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
    <button
      className={
        `w-auto h-auto rounded-full border-[0.25rem] px-[3rem] py-[0.4rem] text-[2rem] font-bold items-center justify-center cursor-pointer select-none` + " " +
        (type == "primary"
          ? "bg-(--bg) text-(--primary) border-(--primary) hover:bg-(--bg-light) active:bg-(--primary) active:text-(--bg) transition-colors duration-200"
          : "bg-(--bg) text-(--border) border-(--border-light) text-(--border-light) hover:bg-(--bg-light) active:bg-(--border-light) active:text-(--bg) active:border-(--border-light) transition-colors duration-200")
      }
    >
      {text.toUpperCase()}
    </button>
  );
}
