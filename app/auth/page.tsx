"use client"
import { Login } from "@/components/auth/login";
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
      {isProcessing ? <Lunch /> :
       (
        <div>
          <Login />
        </div>
      )}  
    </div>
  )
}

export default page