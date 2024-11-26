import contactsData from '../contactsData'
import MagneticEffect from './MagneticEffect'

export default function MediaIcons(){
    return(
    <div className="fixed bottom-10 left-10 z-50 ">
    {contactsData.map((con)=>( 
        <MagneticEffect>
            <div className="w-10 h-10 mt-10 mb-10">
              <a href="#">
                <img src={con.img_src} alt="contact photos" />
              </a>
            </div>
          </MagneticEffect>

    ))}
     
    </div>
    )
    
}