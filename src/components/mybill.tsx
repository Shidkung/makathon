import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import home from './home.png';
import { FaTrash } from 'react-icons/fa';
import list from './list.png';
import takra from './ตะกร้า.png';
import bill from './my bill.png';
import account from './my account.png';
import { MdOutlineAddHomeWork } from "react-icons/md";

interface Item {
    name: string;
    price: number;
}

const Mybill: React.FC = () => {
    const [items, setItems] = useState<Item[]>([]);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [newItemName, setNewItemName] = useState('');
    const [newItemPrice, setNewItemPrice] = useState<number | ''>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    // Fetch data from the API when the component mounts
    useEffect(() => {
        const fetchItems = async () => {
            setIsLoading(true);
            setError(null);

            try {
                const response = await fetch('https://api.example.com/items'); // Replace with your API endpoint
                if (!response.ok) {
                    throw new Error('Failed to fetch items');
                }
                const data: Item[] = await response.json();
                setItems(data);
            } catch (error) {
                // Typecast error to any to safely access the message property
                setError((error as any).message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchItems();
    }, []);

    const handleAddItem = () => {
        if (newItemName.trim() && newItemPrice !== '') {
            const newItem: Item = { name: newItemName, price: Number(newItemPrice) };
            setItems([...items, newItem]);
            setNewItemName('');
            setNewItemPrice('');
            setIsPopupOpen(false);
        }
    };

    const handleRemoveItem = (index: number) => {
        const updatedItems = items.filter((_, i) => i !== index);
        setItems(updatedItems);
    };

    const closeModal = () => {
        setIsPopupOpen(false);
    };

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            width: '100vw',
            backgroundColor: 'black', // Light gray background for the whole screen
        }}>
             <div style={{ width: '430px', height: '932px', border: '1px solid #ddd', margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', backgroundColor: 'white' }}>
            <nav style={{ backgroundColor: '#f8f8f8', padding: '15px', borderBottom: '1px solid #ddd', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Link to="/choosingpage" style={{ textDecoration: 'none', color: 'black' }}>
                    <span
                        style={{ position: 'absolute', left: '15px', top: '15px', cursor: 'pointer', fontSize: '18px', color: 'black', }}
                    >
                        &lt;
                    </span>
                </Link>
                <h1 style={{ margin: '0', fontSize: '18px', color: 'black' }}>ตะกร้า</h1>
            </nav>

            <div style={{ padding: '15px', borderBottom: '1px solid #ddd', display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => setIsPopupOpen(true)}>
                <span style={{ fontSize: '15px', marginRight: '10px', color: 'black' }}>
                    <MdOutlineAddHomeWork
                        style={{ cursor: 'pointer', color: 'black' }}
                    />
                </span>
                <span style={{ fontSize: '16px', color: 'Red' }}>Makro pro +</span>
            </div>

            <div style={{ padding: '15px', flexGrow: 1, overflowY: 'auto' }}>
                {isLoading ? (
                    <p style={{ color: 'black' }}>Loading items...</p>
                ) : error ? (
                    <p style={{ color: 'red' }}>{error}</p>
                ) : (
                    <ul style={{ listStyleType: 'none', padding: '0', margin: '0' }}>
                        {items.map((item, index) => (
                            <li key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid #ddd', color: 'black' }}>
                                <span>{item.name} - ${item.price.toFixed(2)}</span>
                                <FaTrash
                                    style={{ cursor: 'pointer', color: 'red' }}
                                    onClick={() => handleRemoveItem(index)}
                                />
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '15px',
                    borderTop: '1px solid #ddd',
                    backgroundColor: '#f8f8f8',
                }}
            >
                {/* Left Component: Pay Button */}
                <Link to="/orders" style={{ textDecoration: 'none', color: 'black' }}>
                <button
                    style={{
                        backgroundColor: 'red',
                        color: 'white',
                        border: 'none',
                        padding: '10px 20px',
                        fontSize: '18px',
                        cursor: 'pointer',
                    }}
                >
                    ชำระเงิน
                </button>
                </Link>
                {/* Right Component: Total Amount */}
                <span style={{ fontSize: '18px', fontWeight: 'bold', color: 'black' }}>
                    Total: ${items.reduce((total, item) => total + item.price, 0).toFixed(2)}
                </span>
            </div>

            <nav style={{ backgroundColor: 'white', padding: '0.1px 0', borderTop: '1px solid #ddd', display: 'flex', justifyContent: 'space-around' }}>
                <div style={{ textAlign: 'center' }}>
                    <Link to="/" >
                        <img
                            src={home}
                            alt="Home Icon"
                            style={{ width: '60px', height: 'auto' }} // Adjust the width and height as needed
                        />
                    </Link>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <Link to="/myitem" style={{ textDecoration: 'none', color: 'black' }}>
                        <img
                            src={list}
                            alt="Home Icon"
                            style={{ width: '80px', height: 'auto' }} // Adjust the width and height as needed
                        />
                    </Link>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <Link to="/mybill" style={{ textDecoration: 'none', color: 'black' }}>
                        <img
                            src={takra}
                            alt="Home Icon"
                            style={{ width: '70px', height: 'auto' }} // Adjust the width and height as needed
                        />
                    </Link>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <Link to="/orders" style={{ textDecoration: 'none', color: 'black' }}>
                        <img
                            src={bill}
                            alt="Home Icon"
                            style={{ width: '90px', height: 'auto' }} // Adjust the width and height as needed
                        />
                    </Link>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <Link to="/account" style={{ textDecoration: 'none', color: 'black' }}>
                        <img
                            src={account}
                            alt="Home Icon"
                            style={{ width: '70px', height: 'auto' }} // Adjust the width and height as needed
                        />
                    </Link>
                </div>
            </nav>
        </div>
        </div>
       
    );
};

export default Mybill;
