export function DialogBox({ children }: { children?: React.ReactElement }) {
  return (
    <div className="bg-(--bg) border-[2px] border-(--border-light) h-fit w-fit p-[2rem] inline-flex items-center justify-center">
      {children}
    </div>
  );
}
