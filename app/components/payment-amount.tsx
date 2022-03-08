type Props = {
  amount: number;
  type: string;
  invoice: string;
};

export default function PaymentAmount({ amount, type, invoice }: Props) {
  return (
    <div className="w-full flex flex-col items-center mb-4">
      <div className="flex flex-row items-end mr-2">
        <span className="text-7xl font-bold text-indigo-500">${amount}</span>
        <span className="text-2xl font-medium text-indigo-400">{type}</span>
      </div>
      <span className="text-gray-900">{invoice}</span>
    </div>
  );
}
