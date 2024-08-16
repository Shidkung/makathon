import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import home from './home.png';
import { FaTrash, FaMapMarkerAlt } from 'react-icons/fa'; // Importing the trash icon and map marker icon
import list from './list.png';
import takra from './ตะกร้า.png';
import bill from './my bill.png';
import account from './my account.png';
import { FaArrowLeft } from 'react-icons/fa'; // Import the back arrow icon
import mapImage from'./map_demo.png';
const Map: React.FC = () => {

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
                <Link to="/mapping" style={{ textDecoration: 'none', color: 'black' }}>
                    <span style={{ position: 'absolute', left: '15px', top: '15px', cursor: 'pointer', fontSize: '18px', color: 'black' }}>
                        &lt;
                    </span>
                </Link>
                <h1 style={{ margin: '0', fontSize: '18px', color: 'black' }}>แผนที่</h1>
            </nav>


            <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img
                    src={mapImage} 
                    alt="Center Image"
                    style={{ width: '91%', height: 'auto' }} // Adjust the width as needed
                />
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

        </div>
        </div>
      
    );
};

export default Map;
