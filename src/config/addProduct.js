import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import Modal from 'react-modal';
import './style.css';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from '../Dashboard';

Modal.setAppElement('#root');

function AddProduct() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [rating, setRating] = useState('');
    const [image, setImage] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsModalOpen(true); // Open confirmation modal
    };

    const handleConfirm = () => {
        setIsModalOpen(false);
        setIsSubmitting(true);
        const parsedPrice = parseFloat(price);

        fetch('https://bakend-api.vercel.app/product/post', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: title,
                description: description,
                price: parsedPrice
            })
        })
            .then(res => res.json())
            .then(res => Dashboard("Product Added: ", res))
            .catch(err => console.error("Error:", err));
    };

    const handleCancel = () => {
        setIsModalOpen(false); // Close confirmation modal
    };

    return (
        <>
            <div className="flex items-center justify-center h-screen p-4 bg-gray-200">
                <div className="w-full max-w-md p-6 bg-white border rounded-lg shadow-lg">
                    <h1 className="mb-6 text-3xl font-bold text-center text-black">Add Product</h1>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <input
                            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
                            onChange={e => setTitle(e.target.value)}
                            type="text"
                            placeholder="Enter Title"
                            value={title}
                            required
                        />
                        <input
                            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
                            onChange={e => setDescription(e.target.value)}
                            type="text"
                            placeholder="Description"
                            value={description}
                            required
                        />
                        <input
                            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
                            onChange={e => setRating(e.target.value)}
                            type="number"
                            placeholder="Rating"
                            value={rating}
                            required
                        />
                        <input
                            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
                            onChange={e => setPrice(e.target.value)}
                            type="number"
                            placeholder="Enter Price"
                            value={price}
                            required
                        />
                        <input
                            className="w-full p-3 border border-gray-300 rounded-lg file:border-none file:bg-gray-200 file:text-gray-700 file:py-2 file:px-4 file:rounded-lg file:cursor-pointer file:font-medium"
                            onChange={e => setImage(e.target.files[0])}
                            type="file"
                        />
                        <button
                            className="w-full px-4 py-2 text-white transition-colors duration-200 bg-black rounded-lg shadow-md hover:bg-gray-800"
                            type="submit"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Submitting...' : 'Add Product'}
                        </button>
                    </form>
                </div>
            </div>

            {/* Confirmation Modal */}
            <Modal
                isOpen={isModalOpen}
                onRequestClose={handleCancel}
                contentLabel="Confirm Product Upload"
                className="modal"
                overlayClassName="overlay"
            >
                <h2 className="mb-4 text-xl font-bold">Confirm Product Upload</h2>
                <p>Are you sure you want to add this product?</p>
                <div className="flex justify-end gap-4 mt-4">
                    <button
                        className="px-4 py-2 text-white bg-red-600 rounded-lg hover:bg-red-500"
                        onClick={handleCancel}
                    >
                        Cancel
                    </button>
                    <button
                        className="px-4 py-2 text-white bg-green-600 rounded-lg hover:bg-green-500"
                        onClick={handleConfirm}
                    >
                        Confirm
                    </button>
                </div>
            </Modal>

            <ToastContainer />
        </>
    );
}

export default AddProduct;
