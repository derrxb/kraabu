export type VendorHeaderProps = {
  name: string;
  logo: string;
  tag: string;
  url: string;
};

export function VendorHeader({ name, logo, tag, url }: VendorHeaderProps) {
  return (
    <div className="mb-4 flex flex-col">
      <a href={url} target="_blank" rel="noreferrer" className="w-fit pb-1">
        <img src={logo} alt={`${name} logo`} className="mb-1 h-auto w-36" />
      </a>

      <span className="text-[10px] font-medium text-gray-600">{tag}</span>
    </div>
  );
}
