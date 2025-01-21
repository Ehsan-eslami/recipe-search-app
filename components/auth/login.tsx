import { Input } from "../ui/input"

export const Login = () => {
  return (
    <div className="bg-[#fffdf9] w-screen h-screen justify-center items-center flex">
      <div className="container h-screen">
        <div className="w-[300px] h-screen flex justify-between	 items-center flex-col">
          <h1 className="text-pink-900 text-xl">Login</h1>
          <form className="flex flex-col justify-around items-center">
            <Input label="Email" placeHolder="example@example.com"/>
            <Input label="Password" placeHolder="Password" />
            <button type="submit" className=" bg-red-300 text-pink-900 px-4 py-2 rounded-xl">
              Log In
            </button>
            <button type="button" className=" bg-red-300 text-pink-900 px-4 py-2 rounded-xl">
              Sign Up
            </button>
          </form>
          <p className="text-xs">
            Forget Password?
          </p>
        </div>
      </div>
    </div>
  )
}