
export default function FooterSmallDev(){
    const links = ["LinkedIn", "Instagram", "Behance", "Dribble"];
  return(
      <div className="absolute bottom-5 right-0 ps-5 pe-5 z-10 w-full text-[#A89C89] cursor-pointer  xs:block lg:hidden  ">
      <div className="flex flex-col items-end text-base font-bold">
        {links.map((text, index) => (
            <a>{text}</a>
          
        ))}
           <a>klaudiaforysiak@gmail.com</a>
      </div>
      
    </div>
  )
}