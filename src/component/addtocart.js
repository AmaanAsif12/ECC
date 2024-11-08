// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTrash, faPlus } from '@fortawesome/free-solid-svg-icons'; 
// import { addToCart, deleteFromCart } from '../Store/cartSlice';
// import { useDispatch, useSelector } from 'react-redux';
// import { useState } from 'react';

// function AddCart() {
//     const dispatch = useDispatch();
//     const cart = useSelector(state => state.cartStore.cart);
//     const [isCardOpen, setIsCardOpen] = useState(false);

//     const toggleCard = () => setIsCardOpen(!isCardOpen);

//     const handleDelete = (index) => {
//         dispatch(deleteFromCart(index));
//     };

//     return (
//         <div className="fixed top-2 right-20 md:right-4">
//             <div className="flex items-center">
//                 <img
//                     src="https://cdn-icons-png.flaticon.com/128/6573/6573844.png"
//                     width={50}
//                     onClick={toggleCard}
//                     className="cursor-pointer"
//                     alt="Cart Icon"
//                 />
//                 <p className='m-2 text-blue-900 text-lg font-bold'>{cart.length}</p>
//             </div>
//             {isCardOpen && (
//                 <div className="absolute top-12 right-0 bg-white border border-gray-300 shadow-lg p-4 rounded-lg w-64">
//                     <h3 className="font-semibold text-lg mb-2">Cart Items</h3>
//                     {cart.length === 0 ? (
//                         <p>Your cart is empty</p>
//                     ) : (
//                         <ul>
//                             {cart.map((item, index) => (
//                                 item && (
//                                     <li key={item.id || index} className="mb-2 flex items-center justify-between">
//                                         <span>{`$${item.price}`} - {item.title}</span>
//                                         <div className="flex items-center space-x-2">
//                                             <button
//                                                 onClick={() => handleDelete(index)}
//                                                 className="text-red-500 hover:text-red-700 focus:outline-none"
//                                             >
//                                                 <FontAwesomeIcon icon={faTrash} />
//                                             </button>
//                                             <button
//                                                 onClick={() => dispatch(addToCart(item))}
//                                                 className="text-green-500 hover:text-green-700 focus:outline-none"
//                                             >
//                                                 <FontAwesomeIcon icon={faPlus} />
//                                             </button>
//                                         </div>
//                                     </li>
//                                 )
//                             ))}
//                         </ul>
//                     )}
//                 </div>
//             )}
//         </div>
//     );
// }

// export default AddCart;
