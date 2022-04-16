type Props = {
  amount: number;
  type: string;
};

export default function PaymentAmount({ amount, type }: Props) {
  return (
    <div className="w-full flex flex-col items-center mb-4">
      <div className="flex flex-row items-end mr-2">
        <span className="text-4xl font-bold text-indigo-500 mr-2">
          ${amount}
        </span>

        <span className="text-2xl font-medium text-indigo-400">{type}</span>
      </div>
    </div>
  );
}
