import { useState } from "react";
import { MenuItem, OrderItem } from "../types";

export function useOrder() {
  const [order, setOrder] = useState<OrderItem[]>([]);
  const [tip, setTip] = useState(0);

  function addItem(item: MenuItem) {
    const itemExist = order.find((orderItem) => orderItem.id === item.id);

    if (itemExist) {
      const updatedOrder = order.map((orderItem) =>
        orderItem.id === item.id
          ? { ...orderItem, quantity: orderItem.quantity + 1 }
          : orderItem
      );
      setOrder(updatedOrder);
    } else {
      const newOrderItem = { ...item, quantity: 1 };
      setOrder((prevOrder) => [...prevOrder, newOrderItem]);
    }
  }

  function removeItem(id: MenuItem["id"]) {
    setOrder(order.filter((item) => item.id !== id));
  }

  function placeOrder() {
    setOrder([]);
    setTip(0);
  }
  return { order, addItem, removeItem, tip, setTip, placeOrder };
}
