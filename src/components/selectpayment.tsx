import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaCreditCard,FaUniversity} from 'react-icons/fa'; // Import the credit card ico
import axios from 'axios'; // Import axios (optional)
const PaymentMethod: React.FC = () => {
    const [amount, setAmount] = useState<number | null>(null); 

    useEffect(() => {
        // Fetch data from the API
        const fetchAmount = async () => {
            try {
                // Replace with your actual API URL
                const response = await axios.get('https://api.example.com/amount'); 
                setAmount(response.data.amount);
            } catch (error) {
                console.error('Error fetching amount:', error);
            }
        };

        fetchAmount();
    }, []);

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            width: '100vw',
            backgroundColor: 'black', // Light gray background for the whole screen
        }}>

<div style={{ width: '430px', height: '932px', margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' ,backgroundColor:'white'}}>
            {/* Navbar */}
            <nav style={{ backgroundColor: 'white', padding: '15px 19px', display: 'flex', justifyContent: 'flex-end' }}>
                {/* Close Icon (Right) */}
                <Link to='/orders'> <span style={{ fontSize: '20px', cursor: 'pointer', color:'black' }}>&#10006;</span></Link>
            </nav>

            {/* Payment Method Sections */}
            <h1 style={{ marginLeft: '20px', fontSize: '18px', flex: 0, textAlign: 'start',color:'black' }}>เลือกช่องทางการชำระเงิน</h1>
            <div style={{ padding: '9px 10px', flexGrow: 1, overflowY: 'auto' }}>
                {/* Section 1: TrueMoney Wallet */}
                <div style={{ display: 'flex', alignItems: 'center', padding: '10px 10px', border: '1px solid #ddd', cursor: 'pointer',borderRadius:'10px' }}>
                    <div style={{ flex: '0 50px' }}>
                        <img src="https://play-lh.googleusercontent.com/6I2IYbIg4rhGUgs0UxP_5q6wmJmlBjBrlQ9f0_FAN94yOzwmrtEteifCdPPd1-chY_NX" alt="TrueMoney Wallet" style={{ width: '90%', height: 'auto',padding:'1px 9px',justifyContent:'center' }} />
                    </div>
                    <div style={{ flex: 1, paddingLeft: '10px' }}>
                        <div style={{ fontSize: '16px', fontWeight: 'bold',color:'black',padding:'0px 5px' }}>ทรูมันนี่ วอลเล็ท</div>
                        <div style={{ fontSize: '14px', color: '#555' }}>*เติทเงินกับทรูมันนี่ ให้เพียงพอต่อการใช้จ่าย</div>
                    </div>
                    <div style={{ flex: '0 0 20px', textAlign: 'right',color:'black' }}>
                        &#9654; {/* Right arrow icon */}
                    </div>
                </div>

                {/* Section 2: Big Image */}
                <div style={{ padding: '15px 0'}}>
                    <img src="https://cdn.shopify.com/s/files/1/0656/7664/0427/files/PNS_TrueX2_Jul_WebBannerTH_a90f16_480x480.png?v=1719804674" alt="Big Image 2" style={{ width: '100%', height: 'auto',borderRadius:'6px' }} />
                </div>

                {/* Section 3: Another Payment Method */}
                <div style={{ display: 'flex', alignItems: 'center',padding: '10px 10px', border: '1px solid #ddd', cursor: 'pointer',borderRadius:'10px'}}>
                    <div style={{ flex: '0 0 50px' }}>
                        <FaCreditCard size={30} color="red" style={{  padding:'3px 12px' }}/> {/* Use the credit card icon */}
                    </div>
                    <div style={{ flex: 1, paddingLeft: '10px' }}>
                        <div style={{ fontSize: '16px', fontWeight: 'bold', color:'black' }}>บัตรเครดิต / เดบิต</div>
                        <div style={{ fontSize: '14px', color: '#555' }}>บันทึกข้อมูลบัตรไว้ เพื่อเพิ่มความสะดวก</div>
                    </div>
                    <div style={{ flex: '0 0 20px', textAlign: 'right',color:'black' }}> &#9654;</div>
                </div>

                {/* Section 4: Big Image */}
                <div style={{ padding: '15px 0'}}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg7IyFvfj4I3FnqAW6Wrk2DfP5Y10L4iT9Ng&s" alt="Big Image 4" style={{ width: '100%', height: 'auto' }} />
                </div>

                {/* Section 5: Another Payment Method */}
                <div style={{ display: 'flex', alignItems: 'center', padding: '10px 10px', border: '1px solid #ddd', cursor: 'pointer' ,borderRadius:'10px'}}>
                    <div style={{ flex: '0 0 50px' }}>
                    <FaUniversity size={30} color="red"  style={{  padding:'3px 12px' }}/> {/* Use the bank icon */}
                    </div>
                    <div style={{ flex: 1, paddingLeft: '10px' }}>
                        <div style={{ fontSize: '16px', fontWeight: 'bold', color:'black' }}>โอนชำระเงินผ่านธนาคาร</div>
                        <div style={{ fontSize: '14px', color: '#555',width:"230px" }}>ชำระผ่านรหัสอ้างอิงที่เคาน์เตอร์ธนาคาร ตู้เอทีเอ็ม หรือแอปธนาคาร</div>
                    </div>
                    <div style={{ flex: '0 0 20px', textAlign: 'right',color:'black' }}>
                        &#9654; {/* Right arrow icon */}
                    </div>
                </div>
            </div>

            {/* Total Amount Section */}
            <div style={{ padding: '15px', display: 'flex', backgroundColor: '#f8f8f8', borderTop: '1px solid #ddd' }}>
                <div style={{ flex: 1, paddingLeft: '10px' }}>
                    <div style={{ fontSize: '15px',color:'black' }}>ยอด</div>
                    <div style={{ fontSize: '20px', color: 'black' }}>{amount !== null ? `${amount.toFixed(2)} ฿` : 'Loading...'}</div>
                </div>
            </div>
        </div>
        </div>
     
    );
};

export default PaymentMethod;
