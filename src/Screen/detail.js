import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fireSingleProduct } from "../config/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Store/cartSlice";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import './style.css';

function Detail() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true); // New state for loading
  const params = useParams();
  const dispatch = useDispatch();
  const colors = useSelector(state => state.themeStore.color);
  console.log('colors :', colors);

  useEffect(() => {
    const fetchProduct = async () => {
      if (params.adId) {
        try {
          console.log("Fetching product with ID:", params.adId);
          const productData = await fireSingleProduct(params.adId);
          console.log("Product Data:", productData);
          if (productData) {
            setProduct(productData);
          } else {
            console.warn("Product data is null");
          }
        } catch (error) {
          console.error("Error fetching product:", error);
        } finally {
          setLoading(false); // Set loading to false after fetching
        }
      } else {
        console.warn("No adId provided");
        setLoading(false); // Set loading to false if no adId is provided
      }
    };

    fetchProduct();
  }, [params.adId]);

  if (loading) {
    return (
      <div className="p-4" style={{ backgroundColor: colors }}>
        <div className="max-w-sm mx-auto mt-[105px] mb-[30px] bg-white transition-transform duration-300 ease-in-out shadow-2xl rounded-lg overflow-hidden border border-gray-300">
          <Skeleton height={256} width="100%" />
          <div className="p-6">
            <Skeleton height={32} width="80%" />
            <Skeleton height={16} width="100%" style={{ marginTop: 12 }} />
            <Skeleton height={16} width="60%" style={{ marginTop: 12 }} />
            <Skeleton height={40} width="100%" style={{ marginTop: 24 }} />
          </div>
        </div>
      </div>
    );
  }

  if (!product || !product.title || !product.description || !product.price) {
    return <p>No product found</p>;
  }

  return (
    <div className="p-4" style={{ backgroundColor: colors }}>
      <div className="max-w-sm mx-auto mt-[105px] mb-[30px] bg-white transition-transform duration-300 ease-in-out shadow-2xl rounded-lg overflow-hidden border border-gray-300">
        <img
          src={product.image}
          className="w-full h-64 object-cover"
          alt="Product"
        />
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-3">{product.title}</h2>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="text-gray-900 text-lg font-semibold">${product.price}</p>
          <button
            onClick={() => dispatch(addToCart(product))}
            className="mt-4 w-full py-2 bg-black text-white font-semibold rounded-lg hover:bg-black transition-colors duration-300"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
