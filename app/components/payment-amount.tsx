type Props = {
  amount: number;
  type: string;
};

export default function PaymentAmount({ amount, type }: Props) {
  return (
    <div className="mb-4 flex w-full flex-col items-center">
      <div className="mr-2 flex flex-row items-end">
        <span className="mr-2 text-4xl font-bold text-indigo-500">${amount}</span>

        <span className="text-2xl font-medium text-indigo-400">{type}</span>
      </div>
    </div>
  );
}
