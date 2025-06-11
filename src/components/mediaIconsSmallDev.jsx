import contactsData from "../contactsData";

export default function MediaIconsSmallDev() {

  return (
    <div className=" xs:block lg:hidden absolute bottom-10 right-10 z-50 ">
      {contactsData.map((con, index) => (
        <div key={index} className="flex  items-center justify-between w-100 ">
          <div className="w-10 h-10 mt-10  ">
            <a href={con.link}>
              <img src={con.img_src} alt="contact photos" />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
