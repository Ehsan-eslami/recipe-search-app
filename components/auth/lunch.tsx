import Image from "next/image"

export const Lunch = () => {
  return (
    <div className="on-boarding-lunch">
      <Image 
        src="/onBoarding/lunch.png"
        alt="logo in the lunch."
        width={150}
        height={150}
      />
      <h2 className="font-bold text-2xl ">
        DishDash
      </h2>
    </div>
  )
}
