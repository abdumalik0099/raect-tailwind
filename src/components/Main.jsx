import mikrofon from '../assets/imgs/mikrofon.png'

const Main = () => {
  return (
    <div className="max-w-[1350px] w-full mx-auto mt-[100px] px-4 flex justify-between items-center" >
        <div className="w-[450px]">
            <h1 className="text-5xl font-bold">Navigating the digital landscape for success</h1>
            <p className="text-lg text-gray-600 mt-[30px]">Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
            <button className="text-white bg-[#191A23] p-4 border-[2px] transition-all duration-300 ease-in-out rounded-[10px] mt-[30px] hover:bg-[#dedbdb] hover:text-black">Book a consultation</button>
        </div>
        <div>
            <img src={mikrofon} alt="Mikrofon" />
        </div>
    </div>
  )
}

export default Main