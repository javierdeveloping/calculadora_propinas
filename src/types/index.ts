import { Dispatch, SetStateAction } from "react";

export type MenuItem = {
  id: number;
  name: string;
  price: number;
};

export type MenuItemProps = {
  item: MenuItem;
  addItem: (item: MenuItem) => void;
};

export type OrderItem = MenuItem & {
  quantity: number;
};

export type OrderContentsProps = {
  order: OrderItem[];
  removeItem: (id: MenuItem["id"]) => void;
};

export type OrderTotalsProp = {
  order: OrderItem[];
  tip: number;
  placeOrder: () => void;
};

export type TipPercentageFormProps = {
  tip: number;
  setTip: Dispatch<SetStateAction<number>>;
};
