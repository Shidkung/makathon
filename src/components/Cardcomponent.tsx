import React from 'react';
import './Cardcomponent.css';

interface CardComponentProps {
    text: string;
}

const CardComponent: React.FC<CardComponentProps> = ({ text }) => {
    return (
        <div className="card-component">
            <p>{text}</p>
        </div>
    );
};

export default CardComponent;