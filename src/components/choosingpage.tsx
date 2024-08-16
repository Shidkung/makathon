import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import home from './home.png';
import { FaMapMarkerAlt } from 'react-icons/fa'; // Import the icon
import list from './list.png';
import takra from './ตะกร้า.png';
import bill from './my bill.png';
import account from './my account.png';
import { MdOutlineAddHomeWork } from "react-icons/md";

interface Item {
    name: string;
    price: string; // Changed price to string
}

const ChoosingPage: React.FC = () => {
    const [items, setItems] = useState<Item[]>([
        { name: 'แม็คโคร ฟูดเซอร์วิส สาขาลาดกระบัง', price: '583 แขวงลาดกระบัง เขตลาดกระบัง กรุงเทพมหานคร 10520' },
        { name: 'แม็คโคร สาขาบางพลี', price: 'ซอยกิ่งแก้ว 2 กิ่งแก้ว ต.ราชาเทวะ อ.บางพลี จ.สมุทรปราการ 10540' },
        { name: 'แม็คโคร สาขาศรีนครินทร์', price: 'สาขาศรีนครินทร์ 422 หมู่ 5 ถนนศรีนครินทร์ ตำบลสำโรงเหนือ อำเภอเมืองสมุทรปราการ จังหวัดสมุทรปราการ 10270' }
    ]);

    const navigate = useNavigate(); // Initialize useNavigate

    const handleCardClick = (item: Item) => {
        navigate('/welcome', { state: { selectedItem: item } }); // Navigate to next page with item data
    };

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            width: '100vw',
            backgroundColor: 'black',
        }}>
            <div style={{ 
                border: '1px solid #ddd', 
                backgroundColor: 'white',
                width: '430px', 
                height: '932px',
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'space-between',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
            }}>
                <nav style={{ backgroundColor: 'white', padding: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
                        <span
                            style={{ position: 'absolute', left: '29%', top: '1.1%', cursor: 'pointer', fontSize: '24px', color: 'black', padding: '0px 10px'}}
                        >
                            &lt;
                        </span>
                    </Link>
                    <input 
                        type="text" 
                        placeholder="เลือกสาขา" 
                        style={{ 
                            margin: '0', 
                            padding: '10px 10px', 
                            fontSize: '16px', 
                            borderRadius: '10px', 
                            border: '1px solid #ddd', 
                            width: '100%', 
                            maxWidth: '300px',
                            backgroundColor: 'white',
                            color: 'black'
                        }} 
                    />
                </nav>
                <div style={{ padding: '1px 37px', display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                    <span style={{ fontSize: '15px', marginRight: '10px', color: 'black' }}>
                        <MdOutlineAddHomeWork
                            style={{ cursor: 'pointer', color: 'black' }}
                        />
                    </span>
                    <span style={{ fontSize: '16px', color: 'Red' }}>ร้านค้าใกล้คุณ</span>
                </div>

                <div style={{ padding: '0px 15px', flexGrow: 1, overflowY: 'auto' }}>
                    <ul style={{ listStyleType: 'none', padding: '0', margin: '0' }}>
                        {items.length > 0 ? (
                            items.map((item, index) => (
                                <li key={index} style={{ display: 'flex', alignItems: 'center', borderRadius: '20px', margin: '15px', padding: '10px 15px', border: '1px solid #ddd', color: 'black', position: 'relative' }}
                                    onClick={() => handleCardClick(item)} // Handle card click
                                >
                                    <FaMapMarkerAlt 
                                        style={{ position: 'absolute', left: '10px', fontSize: '20px', color: 'black' }}
                                    />
                                    <div style={{ marginLeft: '30px', display: 'flex', flexDirection: 'column' }}>
                                        <span>{item.name}</span>
                                        <span>{item.price}</span>
                                    </div>
                                </li>
                            ))
                        ) : (
                            <p style={{ color: 'black' }}>No items available.</p>
                        )}
                    </ul>
                </div>
                <nav style={{ backgroundColor: 'white', padding: '0.1px 0', borderTop: '1px solid #ddd', display: 'flex', justifyContent: 'space-around' }}>
                    <div style={{ textAlign: 'center' }}>
                        <Link to="/" >
                            <img
                                src={home}
                                alt="Home Icon"
                                style={{ width: '60px', height: 'auto' }}
                            />
                        </Link>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <Link to="/myitem" style={{ textDecoration: 'none', color: 'black' }}>
                            <img
                                src={list}
                                alt="List Icon"
                                style={{ width: '80px', height: 'auto' }}
                            />
                        </Link>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <Link to="/mybill" style={{ textDecoration: 'none', color: 'black' }}>
                            <img
                                src={takra}
                                alt="Bill Icon"
                                style={{ width: '70px', height: 'auto' }}
                            />
                        </Link>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <Link to="/orders" style={{ textDecoration: 'none', color: 'black' }}>
                            <img
                                src={bill}
                                alt="Orders Icon"
                                style={{ width: '90px', height: 'auto' }}
                            />
                        </Link>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <Link to="/account" style={{ textDecoration: 'none', color: 'black' }}>
                            <img
                                src={account}
                                alt="Account Icon"
                                style={{ width: '70px', height: 'auto' }}
                            />
                        </Link>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default ChoosingPage;
