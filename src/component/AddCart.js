import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";
import { addToCart, deleteFromCart } from "../Store/cartSlice"; // Adjust the import path as needed

const AddCart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartStore.cart);
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [count, setCount] = useState(0)

  const toggleCard = () => setIsCardOpen(!isCardOpen);

  const handleDelete = (index) => {
    dispatch(deleteFromCart(index));
  };

  return (
    <div className="relative">
      <div className="flex items-center">
        <div
          className="flex justify-between md:gap-2 items-center px-5 py-2 text-gray-900 bg-gray-200 hover:bg-gray-300 hover:text-black font-semibold rounded-lg shadow-sm transition duration-300 m-2"
          onClick={toggleCard}
        >
          <p>Items</p>
          <button className="flex items-center justify-center w-12 h-12 rounded-full transition-colors">
            <svg
              class="h-8 w-8 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </button>
          <p className=" text-black text-lg font-bold">{cart.length}</p>
        </div>
      </div>
      {isCardOpen && (
        <div className=" lg: absolute top-18 right-4 bg-white border border-gray-300 shadow-lg p-4 rounded-lg w-96">
          <h3 className="font-semibold text-lg mb-2">Cart Items</h3>
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <ul>
              {cart.map(
                (item, index) =>
                  item && (
                    <li
                      key={item.id && index}
                      className="mb-2 flex items-center justify-between"
                    >
                      <span className="flex">
                       {`$${item.price}`} / {item.title} {<img src={item.image} className="rounded ml-20 mr-[5px]  w-[60px] h-10" />}
                      </span>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => handleDelete(index)}
                          className="text-red-500 hover:text-red-700 focus:outline-none"
                        >
                          <FontAwesomeIcon icon={faTrash} />
                        </button>
                        <button
                          onClick={() => dispatch(addToCart(item))}
                          className="text-green-500 hover:text-green-700 focus:outline-none"
                        >
                          <FontAwesomeIcon icon={faPlus} />
                        </button>
                      </div>
                    </li>
                  )
              )}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default AddCart;
