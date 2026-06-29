import Logo from '../assets/icons/Logo.png'
const Navbar = () => {
  return (
    <div className="max-w-[1350px] w-full mx-auto px-4 flex justify-between items-center mt-4" >
      <img src={Logo} alt="Logo" />
     <div className="flex items-center gap-4">
      <ul className="flex gap-5 pr-6">
        <li><a href="#home">About us</a></li>
        <li><a href="#home">Services</a></li>
        <li><a href="#home">Portfolio</a></li>
        <li><a href="#home">Contact</a></li>
        <li><a href="#home">Blog</a></li>
      </ul>
      <button className="border-2 px-4 py-2 rounded">Get Started</button>
      </div>
    </div>
  )
}

export default Navbar