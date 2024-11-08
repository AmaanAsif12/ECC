import { useState } from "react";
import { signUp } from "../config/firebase";
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
import Modal from 'react-modal';

Modal.setAppElement('#root');

function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    const handleProductClick = () => {
        setIsModalOpen(true);
    };

    const handleConfirm = async () => {
        setIsSubmitting(true);
        try {
            await signUp({ email, password, age, name });
            toast.success('Successfully Signed Up');
            navigate('/signin');
        } catch (e) {
            toast.error(e.message);
        } finally {
            setIsSubmitting(false);
            setIsModalOpen(false);
        }
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-200">
            <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
                <h1 className="text-3xl font-bold text-center text-gray-900">Create Account</h1>
                <div className="space-y-4">
                    <input
                        className="w-full p-3 text-gray-900 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                        type="text"
                        placeholder="Name"
                        onChange={e => setName(e.target.value)}
                    />
                    <input
                        className="w-full p-3 text-gray-900 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                        type="number"
                        placeholder="Age"
                        onChange={e => setAge(e.target.value)}
                    />
                    <input
                        className="w-full p-3 text-gray-900 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                        onChange={e => setEmail(e.target.value)}
                        type="email"
                        placeholder="Email Address"
                    />
                    <input
                        className="w-full p-3 text-gray-900 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                        placeholder="Password"
                    />
                    <button
                        className="w-full py-3 mt-4 font-semibold text-white transition duration-300 bg-black/90 rounded-lg hover:bg-blackfocus:outline-none focus:ring-2 focus:ring-black"
                        onClick={handleProductClick}
                        disabled={isSubmitting}>
                        {isSubmitting ? 'Submitting...' : 'Sign Up'}
                    </button>
                </div>
            </div>
            <Modal
                isOpen={isModalOpen}
                onRequestClose={handleCancel}
                contentLabel="Confirm Signup"
                className="modal"
                overlayClassName="overlay"
            >
                <h2 className="text-xl font-bold mb-4">Confirm Signup</h2>
                <p>Are you sure you want to sign up?</p>
                <div className="flex justify-end gap-4 mt-4">
                    <button
                        className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-500"
                        onClick={handleCancel}
                    >
                        Cancel
                    </button>
                    <button
                        className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-500"
                        onClick={handleConfirm}
                    >
                        Confirm
                    </button>
                </div>
            </Modal>
            <ToastContainer />
        </div>
    );
}

export default Signup;
