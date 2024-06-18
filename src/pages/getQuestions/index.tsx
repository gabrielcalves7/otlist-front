import React, { useEffect, useState } from 'react';
import Image from "next/image";
import myPicture from "../../../public/images/welcome.png";
import myOtherPicture from "../../../public/images/img.png";
import { httpRequest } from "@/services/api";

const QuestionForm = () => {
  const [data, setData] = useState<any>([]);
  
  useEffect(() => {
    async function fetchData() {
      try {
        const responseData = await httpRequest('/api/questions');
        console.log('Fetched data:', responseData);
        setData(responseData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);
  
  return (
    <div>
      {JSON.stringify(data)}
    </div>
  );
};

export default QuestionForm;
