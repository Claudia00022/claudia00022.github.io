import { links } from "../../links_data";
export default function FooterSmallDev(){
  
  return(
      <div className="absolute bottom-10 right-0 ps-5 pe-5 z-10 w-full text-[#A89C89] cursor-pointer  xs:block lg:hidden  ">
      <div className="flex flex-col items-end text-base font-bold gap-1">
      <a href='mailto:klaudiaforysiak@gmail.com'>klaudiaforysiak@gmail.com</a>
        {links.map((link, index) => (
            <a key={index} href={link.link}  target="_blank" rel="noopener noreferrer">{link.title}</a>
          
        ))}
           
      </div>
      
    </div>
  )
}