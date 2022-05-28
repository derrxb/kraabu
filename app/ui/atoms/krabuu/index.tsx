export type KrabuuProps = {
  size: 'small' | 'medium' | 'large';
};

export const Krabuu = ({ size }: KrabuuProps) => {
  const sizeClass = size === 'small' ? 'text-xs !font-bold' : size === 'medium' ? 'text-md' : 'text-2xl';

  return <span className={`font-extrabold tracking-tight text-primary-3 ${sizeClass}`}>krabuu.</span>;
};
