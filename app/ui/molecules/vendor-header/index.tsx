import type { SupplierDTO } from '~/domain/payments/entities/supplier';

export type VendorHeaderProps = SupplierDTO;

export function VendorHeader({ name, logoUrl, tag, homepage }: VendorHeaderProps) {
  return (
    <div className="mb-4 flex flex-col">
      <a href={homepage} target="_blank" rel="noreferrer" className="w-fit pb-1">
        <img src={logoUrl} alt={`${name} logo`} className="mb-1 h-auto w-36" />
      </a>

      <span className="text-[10px] font-medium text-gray-600">{tag}</span>
    </div>
  );
}
