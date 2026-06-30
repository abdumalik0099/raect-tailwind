import cta from "../assets/imgs/cta.png"

const Cta = () => {
  return (
    <div className="max-w-[1350px] w-full mx-auto flex p-[50px] items-center bg-[#bab8b8] rounded-[25px] justify-between">
        <div>
            <h1 className="text-3xl font-[600] py-[20px]">Let’s make things happen</h1>
            <p className="w-[380px]">Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p>
            <button className="p-[20px] bg-[#191A23] text-white rounded-[10px] mt-[20px] hover:bg-[#dedbdb] hover:text-black transition-all duration-300 ease-in-out cursor-pointer">Get your free proposal</button>        
        </div>
        <div><img src={cta} alt="undefine" /></div>
    </div>
  )
}

export default Cta