import { Supplier } from "~/domain/payments/entities/supplier";

export type VendorHeaderProps = Pick<
  Supplier,
  "homepage" | "logo_url" | "name" | "tag"
>;

export function VendorHeader({
  name,
  logo_url,
  tag,
  homepage,
}: VendorHeaderProps) {
  return (
    <div className="mb-4 flex flex-col">
      <a
        href={homepage}
        target="_blank"
        rel="noreferrer"
        className="w-fit pb-1"
      >
        <img src={logo_url} alt={`${name} logo`} className="mb-1 h-auto w-36" />
      </a>

      <span className="text-[10px] font-medium text-gray-600">{tag}</span>
    </div>
  );
}
