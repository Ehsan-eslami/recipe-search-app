import { Input } from "../ui/input"

export const Login = () => {
  return (
    <div className="bg-[#fffdf9] w-screen h-screen">
      <div className="container">
        <div className="w-[300px]">
          <h1>Login</h1>
          <form>
            <Input label="Email" placeHolder="example@example.com"/>
            <Input label="Password" placeHolder="Password" />
          </form>
        </div>
      </div>
    </div>
  )
}