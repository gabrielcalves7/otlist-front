// components/QuestionForm.js
import React, { useState } from 'react';
import Image from "next/image";
import myPicture from "../../../public/images/welcome.png";
import myOtherPicture from "../../../public/images/img.png";

const QuestionForm = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [nome,setNome] = useState('')
  const [quando,setQuando] = useState('')
  const [location,setLocation] = useState('')
  const [otherLocation,setOtherLocation] = useState('')
  const [tel,setTel] = useState('')
  const [success,setSuccess] = useState(false)
  
  const handleOptionChange = (event: any) => {
    setSelectedOption(event.target.value);
  };
  
  const handleOtherLocationChange = (event: any) => {
    setOtherLocation(event.target.value);
  };
  
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    
    const body = [
      {
        origin: nome,
        question: 'quando',
        answer: quando
      },
      {
        origin: nome,
        question: 'location',
        answer: selectedOption + location
      },
      {
        origin: nome,
        question: 'otherLocation',
        answer: otherLocation
      },
      {
        origin: nome,
        question: 'tel',
        answer: tel
      }
    ]
    console.log(body)
    const baseURL = process.env.NEXT_PUBLIC_API_URL || "localhost:3000";
    
    for(let i = 0; i < body.length; i++){
      const response = await fetch(baseURL+'/api/questions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body[i]),
      });
    }
    setSuccess(true);
  };
  
  return (
    <div className="bg-main p-10 max-sm:p-2 h-scren h-full">
      <form action="http://localhost:3333/login" method="POST" className="flex p-6 max-sm:p-3 min-h-screen bg-white h-full max-sm:rounded rounded-3xl text-main flex-wrap flex-col">
        {!success ?
         <>
          <div className="flex justify-center">
          <Image
            src={myPicture}
            alt="Celebration Gif"
            style={{ display: "block" }}
            id="img"
          />
        </div>
        <h2>CONVITE PARA TOMAR UMA E CONVERSAR FIADO</h2>
        <div className="flex flex-col justify-center items-center w-full pt-3 ">
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            id="nome"
            name="nome"
            required
            className="border-2 w-1/3 max-sm:w-full ps-1"
            onChange={e => setNome(e.target.value)}
          />
        </div>
        <div className="flex flex-col justify-center items-center w-full pt-3">
          <label htmlFor="quando">Dia e Hora</label>
          <input
            type="text"
            id="quando"
            name="quando"
            required
            className="border-2 w-1/3 max-sm:w-full ps-1"
            onChange={e => setQuando(e.target.value)}
          
          />
        </div>
        <div className="flex flex-col justify-center items-center w-full pt-3">
          <label htmlFor="location">Local</label>
          <div className="flex flex-col items-start w-full">
            <div className="flex items-center mb-2 w-full">
              <input
                type="radio"
                id="mysteriousPlace"
                name="location"
                value="mysteriousPlace"
                checked={selectedOption === 'mysteriousPlace'}
                onChange={handleOptionChange}
                className="mr-2"
              />
              <label htmlFor="mysteriousPlace">2 real ou um lugar misterioso</label>
            </div>
            <div className="flex items-center mb-2">
              <input
                type="radio"
                id="other"
                name="location"
                value="other"
                checked={selectedOption === 'other'}
                onChange={handleOptionChange}
                className="mr-2"
              />
              <label htmlFor="other">Outro</label>
            </div>
            {selectedOption === 'other' && (
              <input
                type="text"
                id="otherLocation"
                name="otherLocation"
                value={otherLocation}
                onChange={handleOtherLocationChange}
                placeholder="Digite o local"
                className="border-2 w-full ps-1"
              />
            )}
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-full pt-3">
          <label htmlFor="quando">Qual seria seu saldo bancário se ele fosse seu numero de telefone: </label>
          <input
            type="tel"
            id="tel"
            name="tel"
            required
            className="border-2 w-1/3 max-sm:w-full ps-1"
            onChange={e => setTel(e.target.value)}
          
          />
        </div>
        <div className="flex flex-col justify-center items-center w-full pt-4">
          <button type="button"
                  className="bg-main text-white p-2 w-1/3 hover:text-main hover:bg-white border-main border transition duration-300 ease-in-out"
                  onClick={e => handleSubmit(e)}
          >Submit</button>
        </div>
          </>
        :
          <Image
            src={myOtherPicture}
            alt="Celebration Gif"
            style={{ display: "block" }}
            id="img"
          />
        }
      </form>
    </div>
  );
};

export default QuestionForm;
