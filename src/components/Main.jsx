import mikrofon from '../assets/imgs/mikrofon.png'
import amazon from '../assets/imgs/amazon.png'
import dribbble from '../assets/imgs/dribble.png'
import hubspot from '../assets/imgs/hubSpot.png'
import notion from '../assets/imgs/notion.png'
import netflix from '../assets/imgs/netflix.png'
import zoom from '../assets/imgs/zoom.png'


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



export const Logotips = () => {
  return (
    <div className="max-w-[1350px] w-full mx-auto flex justify-between mt-[80px] cursor-pointer">
      <img src={amazon} alt="Amazon" />
      <img src={dribbble} alt="Dribbble" />
      <img src={hubspot} alt="HubSpot" />
      <img src={notion} alt="Notion" />
      <img src={netflix} alt="Netflix" />
      <img src={zoom} alt="Zoom" />
    </div>
  )
}



export const Services = () => {
  return (
    <div className="max-w-[1350px] w-full mx-auto mt-[150px] flex gap-[50px] items-center" >
        <button className="p-[10px] bg-[#B9FF66] text-[#191A23] font-bold text-4xl rounded-[8px]">Services</button>
        <p className="text-[20px]">At our digital marketing agency, we offer a range of services to <br /> help businesses grow and succeed online. These services include:</p>
    </div>
  )
}

export const Case = () =>{
  return(
    <div className="max-w-[1350px] w-full mx-auto mt-[150px] flex gap-[50px] items-center">
      <button className="p-[10px] bg-[#B9FF66] text-[#191A23] font-bold text-4xl rounded-[8px]">Case Studies</button>
      <p className="text-[20px]">Explore Real-Life Examples of Our Proven Digital Marketing <br /> Success through Our Case Studies</p>
    </div>
  )
}