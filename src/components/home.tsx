// CenteredImage.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import overlayImage from './image.png';
import imageMain from'./mainpage.jpg';
import makroplus from'./Bright_Colorful_Playful_Funny_Donuts_Food_Circle_Logo_1.png';
import takra from './ตะกร้า.png'
const home: React.FC = () => {
    return (
        <div style={containerStyle}>
            <div style={imageContainerStyle}>
                <img 
                    src={imageMain}
                    alt="Centered Image" 
                    style={imageStyle} 
                />
                  <div style={whiteSquareStyle}></div> {/* White Square */}
                <Link to="/choosing" style={iconOverlayStyle}>
                    <img 
                        src={makroplus} 
                        alt="makroplus"
                        style={overlayImageStyle2}
                    />
                     <span style={textStyle}>แม็คโคร โปร พลัส</span> {/*Makro Pro Plus*/}
                </Link>
                <Link to="/myitem" style={iconListOverlayStyle}>
                    <img 
                        src={overlayImage} // Replace with your overlay image URL
                        alt="Overlay Image"
                        style={overlayImageStyle}
                    />
                </Link>
                <Link to="/mybill" style={iconListOverlayStyletakra}>
                    <img 
                        src={takra} // Replace with your overlay image URL
                        alt="Overlay Image"
                        style={overlayImageStyletakra}
                    />
                </Link>
            </div>
        </div>
    );
};

// Inline styles
const containerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
    margin: 0,
    padding: 0,
    overflow: 'hidden',
    backgroundColor: 'black'
};

const imageContainerStyle: React.CSSProperties = {
    position: 'relative',
  
    
};
const iconListOverlayStyletakra: React.CSSProperties = {
    position: 'absolute',
    top: '97%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '150px',  // Set the width of the overlay container
    textAlign: 'center', // Center text under the icon
};
const imageStyle: React.CSSProperties = {
    width: '430px',  /* Fixed width */
    height: '932px',  /* Fixed height */
    objectFit: 'cover',
};
const overlayImageStyletakra: React.CSSProperties = {
    width: '70px',     // Adjust size as needed
    height: '50px',    // Maintain aspect ratio
};
const iconListOverlayStyle: React.CSSProperties = {
    position: 'absolute',
    top: '97.1%',
    left: '30%',
    transform: 'translate(-50%, -50%)',
    width: '150px',  // Set the width of the overlay container
    textAlign: 'center', // Center text under the icon
};
const iconOverlayStyle: React.CSSProperties = {
    position: 'absolute',
    top: '42.6%',
    left: '14%',
    transform: 'translate(-50%, -45%)',
    width: '140px',  // Set the width of the overlay container
    textAlign: 'center', // Center text under the icon
};
const overlayImageStyle: React.CSSProperties = {
    width: '74px',     // Adjust size as needed
    height: 'auto',    // Maintain aspect ratio
};
const overlayImageStyle2: React.CSSProperties = {
    width: '75px',     // Adjust size as needed
    height: 'auto',    // Maintain aspect ratio
};
const textStyle: React.CSSProperties = {
    display: 'block',
    color: 'black',     // Text color
    fontSize: '13px',  // Text size
    transform: 'translate(25%, -25%)',
    fontWeight:'lighter',
    textAlign: 'center', // Center text under the icon
    height:'auto',
    width:'89px'
};
const whiteSquareStyle: React.CSSProperties = {
    position: 'absolute',
    bottom: '51.4%',
    left: '13%',
    transform: 'translateX(-50%)',
    width: '100px',   // Width of the white square
    height: '105px',  // Height of the white square
    backgroundColor: 'white',  // Color of the white square
};
export default home;
