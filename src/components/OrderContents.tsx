import { formatCurrency } from "../helpers";
import { OrderContentsProps } from "../types";

export default function OrderContents({
  order,
  removeItem,
}: OrderContentsProps) {
  return (
    <div>
      <h2 className="font-black text-4xl">Consumo</h2>
      <div className="space-y-3 mt-10">
        {order.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border-t border-gray-200 py-5 last-of-type: border-b"
          >
            <div>
              <p className="text-lg">
                {item.name}-{formatCurrency(item.price * item.quantity)}
              </p>
              <p className="font-black">Cantidad: {item.quantity}</p>
            </div>
            <div>
              <button
                onClick={() => removeItem(item.id)}
                className="bg-red-600 h-8 w-8 rounded-full text-white font-black"
              >
                X
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
