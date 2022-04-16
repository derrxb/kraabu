type Props = {
  name: string;
  logo: string;
  description: string;
  url: string;
};

export default function VendorHeader({ name, logo, description, url }: Props) {
  return (
    <div className="flex flex-col pt-4 mb-4">
      <a href={url} target="_blank" rel="noreferrer" className="w-fit">
        <img src={logo} alt={`${name} logo`} className="w-36 h-auto mb-1" />
      </a>

      <span className="text-gray-600 font-medium text-[10px]">
        {description}
      </span>
    </div>
  );
}
