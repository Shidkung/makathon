import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import home from './home.png';
import { FaTrash, FaMapMarkerAlt } from 'react-icons/fa'; // Importing the trash icon and map marker icon
import list from './list.png';
import takra from './ตะกร้า.png';
import bill from './my bill.png';
import account from './my account.png';
import { FaArrowLeft } from 'react-icons/fa'; // Import the back arrow icon

const Mapping: React.FC = () => {
    const [items, setItems] = useState<string[]>(['นม','กล้วย']);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [newItem, setNewItem] = useState('');

    const handleAddItem = () => {
        if (newItem.trim()) {
            setItems([...items, newItem]);
            setNewItem('');
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
                <Link to="/myitem" style={{ textDecoration: 'none', color: 'black' }}>
                    <span style={{ position: 'absolute', left: '15px', top: '15px', cursor: 'pointer', fontSize: '18px', color: 'black' }}>
                        &lt;
                    </span>
                </Link>
                <h1 style={{ margin: '0', fontSize: '18px', color: 'black' }}>รายการของฉัน</h1>
            </nav>

            <div style={{ padding: '15px', borderBottom: '1px solid #ddd', display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => setIsPopupOpen(true)}>
                <span style={{ fontSize: '20px', marginRight: '10px', color: 'black' }}>+</span>
                <span style={{ fontSize: '16px', color: 'black', marginRight: '242px' }}>เพิ่มรายการใหม่</span>
                <Link to="/map">
                <FaMapMarkerAlt style={{ fontSize: '20px', color: 'red' }} />
                </Link>
            </div>

            <div style={{ padding: '15px', flexGrow: 1, overflowY: 'auto' }}>
                <ul style={{ listStyleType: 'none', padding: '0', margin: '0' }}>
                    {items.map((item, index) => (
                        <li key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid #ddd', color: 'black' }}>
                            <span>{item}</span>
                            <FaTrash
                                style={{ cursor: 'pointer', color: 'red' }}
                                onClick={() => handleRemoveItem(index)}
                            />
                        </li>
                    ))}
                </ul>
            </div>

            <nav style={{ backgroundColor: 'white', padding: '0.1px 0', borderTop: '1px solid #ddd', display: 'flex', justifyContent: 'space-around' }}>
                <div style={{ textAlign: 'center' }}>
                    <Link to="/">
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

            {isPopupOpen && (
                <>
                    <div className="modal-bg" onClick={closeModal}></div>
                    <div className="modal">
                        
                        <div className="modal-header">
                        <h2>สร้างรายการใหม่</h2>
                            <span onClick={closeModal}>&times;</span>
                        </div>
                        <div className="modal-body">
                            <input
                                type="text"
                                value={newItem}
                                onChange={(e) => setNewItem(e.target.value)}
                                placeholder="ชื่อรายการ"
                            />
                            <p>ระบุได้สูงสุดถจตัวอักษร</p>
                        </div>
                        <div className="modal-footer">
                            <button onClick={handleAddItem}>สร้างรายการ</button>
                        </div>
                    </div>
                </>
            )}

<style>
                {`
                    /* Modal Styles */
                    .modal {
                        display: flex;
                        flex-direction: column;
                        position: fixed;
                        top: 81%;
                        left: 31.1%;
                        transform: translate(-50%, -50%);
                        width: 430px;
                        background-color: white;
                        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                        border-radius: 15px;
                        z-index: 1000;
                    }

                    .modal-header {
                        display: flex;
                        justify-content: center;
                        border-bottom: 1px solid #ddd;
                        color:black;
                    }

                    .modal-header span {  
                        justify-content: flex-end;
                        font-size: 24px;
                        cursor: pointer;
                    }
                    .modal-body {
                        padding: 19px;
                        text-align: flex-start;
                       color:black;
                    }

                    .modal-body h2 {
                        font-size: 20px;
                        margin-bottom: 10px;
                    }

                    .modal-body input {
                        width: 100%;
                        padding: 6px;
                        margin-bottom: 5px;
                        font-size: 20px;
                        border: 1px solid #ccc;
                        border-radius: 15px;
                        background-color: white; /* Correct property for background color */
                        color: grey; /* Set text color to grey */
                    }   
                    .modal-body p {
                        font-size: 12px;
                        color: #888;
                        margin-bottom: 0px;
                        padding: 0px 5px;
                    }

                    .modal-footer {
                        padding: 10px;
                        text-align: center;
                    }

                    .modal-footer button {
                        background-color: red;
                        color: white;
                        padding: 15px 30px;
                        border: none;
                        border-radius: 5px;
                        font-size: 16px;
                        cursor: pointer;
                        width: 100%;
                    }

                    /* Darken background */
                    .modal-bg {
                        display: block;
                        position: fixed;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background-color: rgba(0, 0, 0, 0.5);
                        z-index: 999;
                    }
                `}
            </style>
        </div>
    </div>    
       
    );
};

export default Mapping;
