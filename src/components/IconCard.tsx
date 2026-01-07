export function IconCard({ children }: { children: React.ReactElement }) {
  return (
    <div className="h-auto w-auto transition-colors duration-200 cursor-pointer group relative bg-(--border) hover:bg-(--border-light) p-[1rem]">
      <div className="h-auto w-auto absolute inset-[0.125rem] group-hover:inset-[0.205rem] bg-(--bg) group-hover:bg-(--bg-light) group-active:bg-(--border-light) transition-[inset, colors] duration-200 flex items-center justify-center" />
      <div className="relative">{children}</div>
    </div>
  );
}
