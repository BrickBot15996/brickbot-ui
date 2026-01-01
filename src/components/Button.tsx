import { CSSProperties } from "react";

type ButtonProps = {
  primaryColor?: string;
  secondaryColor?: string;
  className?: string;
  style?: CSSProperties;
};

export function Button({
  primaryColor = "var(--primary)",
  secondaryColor = "var(--secondary)",
  className = "",
  style = {},
}: ButtonProps) {
  return <div className="bg-blue-500 text-white p-4">Tailwind is working!</div>;
}
