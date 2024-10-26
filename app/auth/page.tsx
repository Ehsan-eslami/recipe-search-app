"use client"
import { Lunch } from "@/components/auth/lunch"
import { useEffect, useState } from "react";

const page = () => {

  const [isProcessing, setIsProcessing] = useState<boolean>(true);

  useEffect(() => {
    const process = async () => {
      await new Promise(resolve => setTimeout(resolve, 2000)); 
      setIsProcessing(false); 
    };
    process();
  }, []);

  return (
    <div>
      {isProcessing ? <Lunch /> : <div>Hello</div> }  
    </div>
  )
}

export default page