import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaInfoCircle } from 'react-icons/fa';
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { productImage } from "../config/firebase";
import { IoIosStarOutline, IoMdStar } from "react-icons/io";


function Dashboard() {

    const generateRating = (rating) => {
        return (
            <div className='flex gap-1 text-[20px] text-[#FF9529]'>
                {[...Array(5)].map((_, index) => (
                    index < rating ? <IoMdStar key={index} /> : <IoIosStarOutline key={index} />
                ))}
            </div>
        )
    };

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const goToDetail = (item) => {
        navigate(`/detail/${item.id}`);
    };

    useEffect(() => {
        const fetchProductsAndUser = async () => {
            try {
                const fetchedProducts = await productImage();
                // Ensure fetchedProducts is an array
                if (Array.isArray(fetchedProducts)) {
                    setProducts(fetchedProducts);
                } else {
                    console.error("Fetched products is not an array:", fetchedProducts);
                    setProducts([]); // Set to empty array if data is not as expected
                }
            } catch (error) {
                console.error("Failed to fetch products", error);
                setProducts([]); // Set to empty array on error
            } finally {
                setLoading(false);
            }
        };

        fetchProductsAndUser();
    }, []);

    return (
        <div className="mt-20 min-h-screen py-6 bg-gray-200">
            <div className="container mx-auto px-4">
                <h3 className="text-5xl font-extrabold text-center text-black tracking-tight mb-8">
                    Welcome
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {loading ? (
                        Array(8).fill(0).map((_, index) => (
                            <div
                                key={index}
                                className="relative bg-white rounded-lg shadow-lg overflow-hidden border border-gray-300"
                            >
                                <Skeleton height={192} width="100%" />
                                <div className="p-4">
                                    <Skeleton height={24} width="60%" />
                                    <Skeleton height={16} width="100%" style={{ marginTop: 12 }} />
                                    <Skeleton height={40} width="100%" style={{ marginTop: 24 }} />
                                </div>
                            </div>
                        ))
                    ) : (
                        products.length > 0 ? (
                            products.map(item => (
                                <div
                                    key={item.id}
                                    className="relative bg-white rounded-lg shadow-lg overflow-hidden border border-gray-300 transform transition-transform duration-300 hover:scale-105"
                                    style={{ zIndex: 10 }}
                                >
                                    <div className="relative rounded-t-lg h-48">
                                        <img
                                            src={item.image}
                                            className="w-full h-full object-cover"
                                            alt={item.title}
                                        />
                                    </div>
                                    <div className="p-4">
                                        <h2 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h2>
                                        <p className="text-gray-700 mb-4">{item.description}</p>
                                        <div className="mb-5">{generateRating(item.rating)}</div>
                                        <button
                                            onClick={() => goToDetail(item)}
                                            className="py-2 px-4 flex items-center rounded-full justify-center text-white bg-black/90 hover:bg-black transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-black"
                                        >
                                            <FaInfoCircle className="mr-2" /> More Info
                                        </button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-center text-gray-600">No products available</p>
                        )
                    )}
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
