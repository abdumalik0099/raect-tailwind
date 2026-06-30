import { GoArrowUpRight } from "react-icons/go";
import six1 from "../assets/imgs/six1.png";
import six2 from "../assets/imgs/six2.png"; 
import six3 from "../assets/imgs/six3.png"; 
import six4 from "../assets/imgs/six4.png"; 
import six5 from "../assets/imgs/six5.png"; 
import six6 from "../assets/imgs/six6.png";  

const servicesData = [
  {
    id: 1,
    title1: "Search engine",
    title2: "optimization",
    img: six1,
    bgColor: "bg-white border border-black",
    titleBg: "bg-[#B9FF66]",
    btnBg: "bg-[#191A23] text-[#B9FF66]",
  },
  {
    id: 2,
    title1: "Pay-per-click",
    title2: "advertising",
    img: six2, 
    bgColor: "bg-[#B9FF66]",
    titleBg: "bg-white",
    btnBg: "bg-[#191A23] text-[#B9FF66]",
  },
  {
    id: 3,
    title1: "Social Media",
    title2: "Marketing",
    img: six3,
    bgColor: "bg-[#191A23]",
    titleBg: "bg-white",
    btnBg: "bg-white text-[#191A23]",
  },
  {
    id: 4,
    title1: "Email",
    title2: "Marketing",
    img: six4,
    bgColor: "bg-white border border-black",
    titleBg: "bg-[#B9FF66]",
    btnBg: "bg-[#191A23] text-[#B9FF66]",
  },
  {
    id: 5,
    title1: "Content",
    title2: "Creation",
    img: six5,
    bgColor: "bg-[#B9FF66]",
    titleBg: "bg-white",
    btnBg: "bg-[#191A23] text-[#B9FF66]",
  },
  {
    id: 6,
    title1: "Analytics and",
    title2: "Tracking",
    img: six6,
    bgColor: "bg-[#191A23]",
    titleBg: "bg-[#B9FF66]",
    btnBg: "bg-white text-[#191A23]",
  },
];

const ServiceCard = ({ item }) => {
  const { title1, title2, img, bgColor, titleBg, btnBg } = item;

  return (
    <div className={`p-12 rounded-[45px] shadow-[0px_5px_0px_#000] flex justify-between items-center ${bgColor}`}>
      <div className="flex flex-col justify-between h-full min-h-[160px]">
        <div>
          <span className={`text-3xl font-medium px-2 py-1 rounded-md block w-fit ${titleBg}`}>
            {title1}
          </span>
          <span className={`text-3xl font-medium px-2 py-1 rounded-md block w-fit mt-1 ${titleBg}`}>
            {title2}
          </span>
        </div>
        
        <div className="flex items-center gap-4 mt-8 cursor-pointer group">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center text-2xl transition-transform group-hover:rotate-45 ${btnBg}`}>
            <GoArrowUpRight />
          </div>
          <span className={`font-medium ${bgColor.includes('bg-[#191A23]') ? 'text-white' : 'text-black'}`}>
            Learn more
          </span>
        </div>
      </div>

      <div className="w-[210px] h-[170px] flex items-center justify-center">
        <img src={img} alt={title1} className="max-w-full max-h-full object-contain" />
      </div>
    </div>
  );
};

const SixBlock = () => {
  return (
    <div className="max-w-[1350px] w-full mx-auto py-10">
      {}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {servicesData.map((service) => (
          <ServiceCard key={service.id} item={service} />
        ))}
      </div>
    </div>
  );
};

export default SixBlock;