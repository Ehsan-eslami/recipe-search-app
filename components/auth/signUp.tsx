'use client'

import {Input} from '../ui/input'
import { useState } from 'react'
import { supabase } from '@/utils/supabaseClient'
import { redirect, useRouter } from 'next/navigation'
export const SignUp = () => {
  const router = useRouter()
  const [email,  setEmail] = useState<string>('')
  const [password,  setPassword] = useState<string>('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password
    });
    if (error) {
      console.error('Error signing in with password:', error);
      return;
    } else {
      console.log('User signed in successfully:', data);
      router.push('/')  
    }

  }

  return (
    <form className="flex flex-col justify-around items-center gap-y-5" onSubmit={handleSubmit}>
      <div className='flex flex-col gap-y-1'>
        <Input label="Email" placeHolder="example@example.com" value={email} onChange={(e)=> setEmail(e.target.value)}/>
        <Input label="Password" placeHolder="Password" value={password} onChange={(e)=> setPassword(e.target.value)} />
      </div>
      <button type="submit" className=" bg-primary text-pink-900 px-4 py-2 rounded-xl">
        Sign Up
      </button>
    </form>
  )
}