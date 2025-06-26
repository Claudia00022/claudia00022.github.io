
export default function FooterSmallDev(){
    const links = ["LinkedIn", "Instagram", "Behance", "Dribble"];
  return(
      <div className="absolute bottom-10 right-0 ps-5 pe-5 z-10 w-full text-[#A89C89] cursor-pointer  xs:block lg:hidden  ">
      <div className="flex flex-col items-end text-base font-bold gap-1">
      <a>klaudiaforysiak@gmail.com</a>
        {links.map((text, index) => (
            <a>{text}</a>
          
        ))}
           
      </div>
      
    </div>
  )
}