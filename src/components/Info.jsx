import { GoArrowUpRight } from "react-icons/go";
const Info = () => {
  return (
    <div className="max-w-[1350px] w-full mx-auto flex bg-[#191A23] p-[40px] rounded-[20px] gap-[25px] mt-[100px]">
        <div>
            <p className="text-white">For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.</p>
            <a className="flex items-center text-[#B9FF66] gap-1 mt-[20px]" href="#">Learn more <span className="hover:rotate-[45deg] transition-all duration-300 ease-in-out"><GoArrowUpRight /></span></a>
        </div>
        <div className="w-[1px] bg-white "></div>
        <div>
            <p className="text-white">For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.</p>
            <a className="flex items-center text-[#B9FF66] gap-1 mt-[20px]" href="#">Learn more <span className="hover:rotate-[45deg] transition-all duration-300 ease-in-out"><GoArrowUpRight /></span></a>
        </div>
        <div className="w-[1px] bg-white "></div>
        <div>
            <p className="text-white">For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.</p>
            <a className="flex items-center text-[#B9FF66] gap-1 mt-[20px]" href="#">Learn more <span className="hover:rotate-[45deg] transition-all duration-300 ease-in-out"><GoArrowUpRight /></span></a>
        </div>
    </div>
  )
}

export default Info


export const Our = () =>{
    return(
        <div className="max-w-[1350px] w-full mx-auto mt-[150px] flex gap-[50px] items-center">
        <button className="p-[10px] bg-[#B9FF66] text-[#191A23] font-bold text-4xl rounded-[8px]">Our Working Process </button>
        <p className="text-[20px]">Step-by-Step Guide to Achieving Your Business Goals</p>
    </div>
    )
}