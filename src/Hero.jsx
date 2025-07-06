import { useState } from "react";
import Order from "./OrderContent/Order";
import OrderBoard from "./OrderOngoing/OrderBoard";

export default function Hero() {
  const [orders, setOrders] = useState([]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 flex-grow">
      <Order setOrders={setOrders} />
      <OrderBoard orders={orders} setOrders={setOrders} />
    </div>
  );
}
