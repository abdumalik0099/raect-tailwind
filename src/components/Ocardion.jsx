import { useState } from "react";
import { PiPlusThin, PiMinusThin } from "react-icons/pi";

const txt = "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.";
const baza = [
  { id: 1, number: "01", title: "Consultation" },
  { id: 2, number: "02", title: "Research and Strategy Development" },
  { id: 3, number: "03", title: "Implementation" },
  { id: 4, number: "04", title: "Monitoring and Optimization" },
  { id: 5, number: "05", title: "Reporting and Communication" },
  { id: 6, number: "06", title: "Continual Improvement" },
];

const Ocardion = () => {
  const [openId, setOpenId] = useState(1);

  return (
    <div className="max-w-[1350px] w-full mx-auto px-4 py-10 flex flex-col gap-6">
      {baza.map(({ id, number, title }) => {
        const isOpen = openId === id;
        return (
          <div key={id} className={`p-8 rounded-[45px] border border-black shadow-[0px_5px_0px_#000] transition-all duration-300 ${isOpen ? "bg-[#B9FF66]" : "bg-[#F3F3F3]"}`}>
            <div className="flex justify-between items-center cursor-pointer select-none" onClick={() => setOpenId(isOpen ? null : id)}>
              <div className="flex items-center gap-6">
                <span className="text-4xl md:text-5xl font-bold">{number}</span>
                <h2 className="text-xl md:text-2xl font-medium">{title}</h2>
              </div>
              <div className="w-10 h-10 rounded-full border border-black bg-white flex items-center justify-center text-xl font-bold">
                {isOpen ? <PiMinusThin /> : <PiPlusThin />}
              </div>
            </div>
            <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100 mt-6 pt-6 border-t border-black" : "grid-rows-[0fr] opacity-0"}`}>
              <div className="overflow-hidden"><p className="text-base md:text-lg text-black leading-relaxed">{txt}</p></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Ocardion;