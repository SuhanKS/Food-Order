import { useState } from "react";
import SvgMinus from "../Svg/SvgMinus";
import SvgPlus from "../Svg/SvgPlus";
import Chicken from "../assets/chicken.svg";
import Hamburger from "../assets/hamburger.svg";
import Pizza from "../assets/pizza.svg";
import Submarine from "../assets/submarine.svg";
const items = [
  {
    id: 1,
    name: "Hamburger",
    price: 300,
    img: Hamburger,
    alt: "Hamburger",
    button: <SvgPlus />,
  },
  {
    id: 2,
    name: "Chicken Nuggets",
    price: 200,
    img: Chicken,
    alt: "Chicken Nuggets",
    button: <SvgPlus />,
  },
  {
    id: 3,
    name: "Submarine Sandwich",
    price: 50,
    img: Submarine,
    alt: "Submarine Sandwich",
    button: <SvgMinus />,
  },
  {
    id: 4,
    name: "Pizza slices",
    price: 150,
    img: Pizza,
    alt: "Pizza slices",
    button: <SvgPlus />,
  },
];

export default function Order({ setOrders }) {
  const [customerName, setCustomerName] = useState("");

  const [itemUpdate, setItemUpdate] = useState({ price: 0, count: 0 });

  function handleNameInput(e) {
    setCustomerName(e.target.value);
  }

  function handleUpdate(item) {
    setItemUpdate((prevItem) => {
      if (item.id === 3) {
        return {
          price: prevItem.price - item.price,
          count: prevItem.count + 1,
        };
      } else {
        return {
          price: prevItem.price + item.price,
          count: prevItem.count + 1,
        };
      }
    });
  }
  function handleAdd() {
    if (customerName === "") {
      alert("enter the customer name");
      return 0;
    }
    if (itemUpdate.price === 0 && itemUpdate.count === 0) {
      alert("select a product");
      return 0;
    }
    setOrders((prevData) => [
      {
        id: crypto.randomUUID(),
        name: customerName,
        items: itemUpdate.count,
        amount: itemUpdate.price,
        status: "PENDING",
      },
      ...prevData,
    ]);
    setItemUpdate({ price: 0, count: 0 });
    setCustomerName("");
  }

  return (
    <div className="bg-cardbg rounded-lg p-6 h-[calc(100vh_-_130px)]">
      <h2 className="text-xl font-bold mb-1">CREATE ORDER</h2>
      <p className="text-gray-400 text-sm mb-4">
        Accurately fulfill customer orders based on a precise understanding of
        their requirements.
      </p>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Customer Name</label>
        <input
          value={customerName}
          type="text"
          className="w-full bg-gray-700 bg-opacity-50 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
          onChange={handleNameInput}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Choose Items</label>
        <div className="items-container">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-gray-700 bg-opacity-30 rounded-md p-3 mb-3 flex justify-between items-center hover:bg-opacity-40 transition-all duration-300"
            >
              <div className="flex items-center">
                <div
                  className={"w-12 h-12 flex items-center justify-center mr-3"}
                >
                  <img src={item.img} alt={item.alt} className="w-10 h-10" />
                </div>
                <div>
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-xs text-gray-400">BDT {item.price}</p>
                </div>
              </div>
              <button
                className="w-8 h-8 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-300 cursor-pointer"
                onClick={() => handleUpdate(item)}
              >
                {item.button}
              </button>
            </div>
          ))}
        </div>
        <button
          className="w-full bg-primary hover:bg-opacity-90 text-white font-medium py-3 rounded-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 cursor-pointer"
          onClick={handleAdd}
        >
          Place Order (BDT {itemUpdate.price})
        </button>
      </div>{" "}
      F
    </div>
  );
}
