import React, { useState, useEffect } from 'react';  


export default function Guesscolor() {
    const [colors, setColors] = useState([]);  
    const [correctColor, setCorrectColor] = useState('');  
    const [message, setMessage] = useState('');  

    const getRandomColor = () => { 
        const r = Math.floor(Math.random() * 256); 
        const g = Math.floor(Math.random() * 256); 
        const b = Math.floor(Math.random() * 256); 
        return `rgb(${r}, ${g}, ${b})`; 
    };
    
    const generateColors  = ()=>{
        const tempColors = [];
        const correct = getRandomColor();
        setCorrectColor(correct);

        for (let i=0; i<5; i++){
            tempColors.push(getRandomColor());
        }

        const randomIndex = Math.floor(Math.random() * 6);
        tempColors.splice(randomIndex, 0, correct);
        setColors(tempColors);
        setMessage('');
    }

    useEffect(() => { 
        generateColors(); 
    }, []);

    const handleGuess = (selectedColors) =>{
        if(selectedColors === correctColor){
            setMessage('✅ Correct!'); 
        }
        else{
            setMessage('❌ Try again!'); 
        }
    }

  return (
    <>
     <div className="color-game"> 
     <h2>🎨 Guess the Color!</h2>
     <p>“A fun interactive game where users guess the correct color from a set of randomized RGB values.”</p>
     <h3>{correctColor}</h3> 
     <div className="color-grid"> 
            {colors.map((color, index) => ( 
                <div key={index} className="color-box" style={{ backgroundColor: color }} onClick={() => handleGuess(color)}></div> 
            ))} 
        </div> 

        <p className="message">{message}</p> 
        <button onClick={generateColors}>🔁 New Color</button> 
        
    </div>
 
    <footer className="footer-section">
  <p>
    &copy; {new Date().getFullYear()}. All Rights Reserved |
    Powered By -
    <a href="https://vannamma148.github.io/vannamma/" target="_blank" rel="noreferrer">  Vannamma N A</a>
  </p>
</footer>

    </>
  )
}
