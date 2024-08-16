import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Welcome: React.FC = () => {
    const location = useLocation();
    const { selectedItem } = location.state || { selectedItem: null };

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            width: '100vw',
            backgroundColor: 'black',
        }}>
            <Link to='/scanbarcode'>
            <div style={{ 
                width: '430px', 
                height: '932px', 
                border: '1px solid #ddd', 
                margin: '0 auto', 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'center', 
                backgroundColor: 'black',
                padding: '20px',
            }}>
                <img
                    src='https://s3-alpha-sig.figma.com/img/4930/d505/4bc503c31a9f9b13a137e58e600a7e17?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fc4oWfGexxoxbOti1MvGvYi~eugEFMUwyGJPZB5VfcukqhEcAfOMo2XKBnHFcVPb8uXi7jrm-Xn9g9VlxN2ZiUrgChvz-Ilm0BgqB1Gz4qrZphNEnQHWp~EOatkTRgyErk0rymzLCqMvvg2hwbsDMqdc3CxRax8HuCIguj2y9GMVEM6wLLkPM4qdlCAxy4aE8wgi1tTZs-yftqWN9wnnnOwHO4T~z~~MZgJHr5KIif5viwg-M0Yrh0aMiHujVF1uZVCH2Qf1HRllS5UqCbngTBJ~0QZLlxNOBhlqJeFzEkVy-oa1MZd~I40N72Wq8n05Xe~lSRjcGZGFM-YO3jd40Q__'
                    alt="Center Image"
                    style={{ width: '70%', height: 'auto',padding:'0px 45px' }}
                />
                {selectedItem ? (
                    <div>
                        <p style={{
                            width:'500px',
                            color: 'white',
                            textAlign: 'start',
                            padding:'0px 69px',
                            fontSize: '15px', // Adjusted for visibility
                        }}>
                            {selectedItem.name} ยินดีต้อนรับ
                        </p>
                    </div>
                ) : (
                    <p style={{
                        color: 'white',
                        textAlign: 'center',
                        margin: '0',
                        fontSize: '5px', // Adjusted for visibility
                    }}>
                        No item selected.
                    </p>
                )}
            </div>
            </Link>
          
        </div>
    );
};

export default Welcome;
