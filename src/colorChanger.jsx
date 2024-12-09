// src/ColorChanger.jsx
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const ColorChanger = () => {
    const [backgroundColor, setBackgroundColor] = useState('#ffffff'); // Initial color

    // Function to change background color based on the button clicked
    const changeColor = (color) => {
        setBackgroundColor(color);
    };

    return (
       <div style={{backgroundColor: backgroundColor,transition: 'background-color 0.5s ease-in-out'}} className="main text-center">
            <h2 className='p-3'>Change Background Color</h2>
         <div style={{
            height: '100vh',
            backgroundColor: backgroundColor,
            transition: 'background-color 0.5s ease-in-out'
        }}>
            <div className="d-flex justify-content-center align-items-center h-50">
                
                <Button 
                    variant="primary" 
                    style={{ backgroundColor: '#BB2649', border: 'none' }} // Viva Magenta
                    className="mx-2" // Add horizontal margin
                    onClick={() => changeColor('#BB2649')}
                >
                    Viva Magenta
                </Button>
                <Button 
                    variant="primary" 
                    style={{ backgroundColor: '#6667AB', border: 'none' }} // Very Peri
                    className="mx-2" // Add horizontal margin
                    onClick={() => changeColor('#6667AB')}
                >
                    Very Peri
                </Button>
                <Button 
                    variant="primary" 
                    style={{ backgroundColor: '#F5DF4D', border: 'none' }} // Illuminating
                    className="mx-2" // Add horizontal margin
                    onClick={() => changeColor('#F5DF4D')}
                >
                    Illuminating
                </Button>
                <Button 
                    variant="primary" 
                    style={{ backgroundColor: '#939597', border: 'none' }} // Ultimate Gray
                    className="mx-2" // Add horizontal margin
                    onClick={() => changeColor('#939597')}
                >
                    Ultimate Gray
                </Button>
            </div>
        </div>
       </div>
    );
};

export default ColorChanger;