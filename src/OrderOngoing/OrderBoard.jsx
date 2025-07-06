import OrderReports from "./OrderReports";
import OrderSummary from "./OrderSummary";
export default function OrderBoard({ orders, setOrders }) {
  return (
    <div className="md:col-span-2 h-[calc(100vh_-_130px)]">
      <OrderSummary orders={orders} />
      <OrderReports orders={orders} setOrders={setOrders} />
    </div>
  );
}
