import React, { useState } from 'react';

const FetchProduct = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
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
            .then(res => console.log("Product Added: ", res))
            .catch(err => console.error("Error:", err));
    };
    

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input className='rounded shadow-md m-5 p-3'
                        placeholder='Enter'
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea className='rounded shadow-md'
                        placeholder='Enter'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Price:</label>
                    <input className='rounded shadow-md m-5 p-3'
                        placeholder='Enter'
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Add Product</button>
            </form>
        </div>
    );
};

export default FetchProduct;

