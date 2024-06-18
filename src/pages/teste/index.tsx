"use client";

import React, { useState, useRef } from 'react';
import Button from '@/components/button';
import Image from "next/image";
import myPicture from "../../../public/images/celebration.webp"; // Adjust the path according to your file structure

const MainComponent: React.FC = () => {
  const [positions, setPositions] = useState<{ left: string, top: string }[]>([
    { left: '0px', top: '0px' },
    { left: '0px', top: '0px' },
  ]);
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef1 = useRef<HTMLButtonElement>(null);
  const buttonRef2 = useRef<HTMLButtonElement>(null);
  
  const handleButtonClick = (message: string) => {
    const oiElement = document.querySelector('#oi');
    if (oiElement) {
      oiElement.textContent = message;
      if (message === 'Acertoooooou!!') {
        const imgElement = document.querySelector('#img') as HTMLElement;
        if (imgElement) {
          imgElement.style.display = 'block';
        }
      }
      else {
        handleMouseOver(1)
        alert(message)
      }
    }
    
  };
  
  const handleMouseOver = (index: number) => {
    if (containerRef.current) {
      const container = containerRef.current;
      const containerWidth = container.clientWidth;
      const containerHeight = container.clientHeight;
      
      const newLeft = Math.random() * (containerWidth - 200); // Adjust button width if necessary
      const newTop = Math.random() * (containerHeight - 200);  // Adjust button height if necessary
      
      const newPositions = [...positions];
      newPositions[index] = {
        left: `${newLeft}px`,
        top: `${newTop}px`,
      };
      setPositions(newPositions);
    }
  };
  
  return (
    <div className="bg-main p-10 max-sm:p-2">
      <div ref={containerRef} className="relative p-6 max-sm:p-3 min-h-screen bg-white h-full max-sm:rounded-s rounded-3xl text-main">
        <div className="flex justify-center">
          <Image
            src={myPicture}
            alt="Celebration Gif"
            className="w-1/4 max-xl:w-1/4 max-md:w-1/2"
            style={{ display: "none" }}
            id="img"
          />
        </div>
        <div className="flex justify-center content-center"><h2>Tomar uma hj?</h2></div>
        <div className="flex justify-center content-center"><h2 id="oi">.</h2></div>
        <div className="relative w-full h-full flex justify-center">
          <Button
            onClick={() => handleButtonClick("Acertoooooou!!")}
            text={"Sim"}
          />
          <Button
            ref={buttonRef2}
            onClick={() => handleButtonClick("Resposta errada")}
            text={"Não"}
            onMouseOver={() => handleMouseOver(1)}
            style={{
              position: positions[1].left === '0px' && positions[1].top === '0px' ? 'relative' : 'absolute',
              left: positions[1].left,
              top: positions[1].top,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
