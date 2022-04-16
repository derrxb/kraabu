type Props = {
  name: string;
  logo: string;
  description: string;
  url: string;
};

export default function VendorHeader({ name, logo, description, url }: Props) {
  return (
    <div className="mb-4 flex flex-col pt-4">
      <a href={url} target="_blank" rel="noreferrer" className="w-fit">
        <img src={logo} alt={`${name} logo`} className="mb-1 h-auto w-36" />
      </a>

      <span className="text-[10px] font-medium text-gray-600">
        {description}
      </span>
    </div>
  );
}
