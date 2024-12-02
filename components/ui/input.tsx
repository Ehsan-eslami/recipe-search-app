type InputType = {
  placeHolder: string;
  label: string;
}

export const Input = ({placeHolder, label}: InputType) => {
  return (
    <div className="flex flex-col">
      <label
        className="text-pink-900"
      >{label}</label>
      {
        label === "Password" ? 
          <input 
            className="px-4 py-2 text-center bg-red-300 text-pink-900 placeholder:text-pink-900 rounded-xl"
            title={label} 
            type="text" 
            placeholder={placeHolder}
          />
          :
          <input 
            className="px-4 py-2 text-center bg-red-300 text-pink-900 placeholder:text-pink-900 rounded-xl"
            title={label} 
            type="text" 
            placeholder={placeHolder}
          /> 
      }
    </div>
  )
}