type LinkCardProps = {
  title?: string;
  displayLink?: string;
  icon?: React.ReactNode;
  highlighted?: boolean;
};

export function LinkCard({
  title = "Link Title",
  displayLink = "brickbot.ro",
  icon = null,
  highlighted = false,
}: LinkCardProps) {
  return (
    <div className="h-auto w-auto border-2 border-transparent bg-transparent">
      <button
        className={
          `h-auto w-auto border-2 ` +
          (highlighted ? "border-(--primary)" : "border-(--secondary)")
        }
      ></button>
    </div>
  );
}
