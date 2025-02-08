type InputType = {
  placeHolder?: string;
  label?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input = ({placeHolder, label, value, onChange}: InputType) => {
  return (
    <div className="flex flex-col">
      <label
        className="text-pink-900 text-sm"
      >{label}</label>
      {
        label === "Password" ? 
          <input 
            className="px-4 py-2 text-center bg-primary text-primary-textColor placeholder:text-pink-900 rounded-xl"
            title={label} 
            type="text" 
            value={value}
            onChange={onChange}
            placeholder={placeHolder}
          />
          :
          <input 
            className="px-4 py-2 text-center bg-primary text-pink-900 placeholder:text-pink-900 rounded-xl"
            title={label} 
            type="text" 
            value={value}
            onChange={onChange}
            placeholder={placeHolder}
          /> 
      }
    </div>
  )
}