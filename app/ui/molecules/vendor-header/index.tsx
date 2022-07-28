import type { UserDTO } from '~/domain/orders/entities/user';

export type VendorHeaderProps = UserDTO;

export function VendorHeader({ businessName, logoUrl, tag, website }: UserDTO) {
  return (
    <div className="mb-4 flex flex-col">
      <a href={website} target="_blank" rel="noreferrer" className="w-fit pb-1">
        <img src={logoUrl} alt={`${name} logo`} className="mb-1 h-auto w-36" />
      </a>

      <span className="text-[10px] font-medium text-gray-600">{tag}</span>
    </div>
  );
}
