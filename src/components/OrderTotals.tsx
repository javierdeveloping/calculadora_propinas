import { useMemo } from "react";
import { formatCurrency } from "../helpers";
import { OrderTotalsProp } from "../types";

export default function OrderTotals({
  order,
  tip,
  placeOrder,
}: OrderTotalsProp) {
  const subTotalAmount = useMemo(
    () =>
      order.reduce(
        (total, orderItem) => total + orderItem.quantity * orderItem.price,
        0
      ),
    [order]
  );

  const tipAmount = useMemo(() => {
    return subTotalAmount * tip;
  }, [subTotalAmount, tip]);

  const totalAmount = useMemo(
    () => subTotalAmount + tipAmount,
    [subTotalAmount, tipAmount]
  );

  return (
    <>
      <div className="space-y-3">
        <h2 className="font-black text-2xl">Totales y propina</h2>
        <p>
          Subtotal a pagar:{" "}
          <span className="font-bold">${formatCurrency(subTotalAmount)}</span>
        </p>
        <p>
          Propina:{" "}
          <span className="font-bold">${formatCurrency(tipAmount)}</span>
        </p>
        <p>
          Total a pagar:{" "}
          <span className="font-bold">${formatCurrency(totalAmount)}</span>
        </p>
      </div>
      <button
        className="w-full bg-black p-3 uppercase text-white font-bold mt-18 disabled:opacity-10"
        disabled={totalAmount === 0}
        onClick={() => placeOrder()}
      >
        Guardar orden
      </button>
    </>
  );
}
