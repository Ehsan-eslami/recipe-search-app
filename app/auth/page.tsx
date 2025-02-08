"use client"

import { Login } from "@/components/auth/login";
import { Lunch } from "@/components/auth/lunch"
import { SignUp } from "@/components/auth/signUp";
import { Image } from "@/components/ui/image";
import { useEffect, useState } from "react";

const page = () => {

  const [isProcessing, setIsProcessing] = useState<boolean>(true);
  const [login, setLogin] = useState<boolean>(false)
  const [title ,  setTitle] = useState<string>("Login")

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
        <div className="bg-[#fffdf9] w-screen h-screen">
          <div className="h-screen w-screen flex justify-between">
            <div className="hidden lg:block w-fit ">
              <Image src='/thumbnail/login-image.png' alt='thumbnail image' className='h-screen w-auto' />
            </div>
            <div className="w-full h-screen flex justify-between items-center flex-col">
              <h1 className="text-pink-900 text-xl mt-5">{title}</h1>
              {login ? <Login /> : <SignUp /> }
              <div className='flex flex-col gap-y-1'>
                <p>
                  Do you have an account? {login ? ( 
                    <span onClick={() => {setLogin(false), setTitle("Signup")}} className="text-pink-900 py-2 rounded-xl">
                      Sign Up
                    </span>
                  ): 
                  (
                    <span onClick={() => {setLogin(true), setTitle("Login")}} className="text-pink-900 py-2 rounded-xl">
                      Log In
                    </span>
                  )}
                </p>
              </div>
              <p className="text-xs mb-5">
                Forget Password?
              </p>
            </div>
          </div>
        </div>
      )}  
    </div>
  )
}

export default page