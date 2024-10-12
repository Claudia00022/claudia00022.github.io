import contactsData from '../contactsData'

export default function MediaIcons(){
    return(
    <div className="fixed bottom-10 left-10">
    {contactsData.map((contact) => (
        <div className="w-10 h-10 m-10" key={contact.id}><a href={contact.link}><img src={contact.img_src} alt='mail icon' /></a></div>
    ))}
    </div>
    )
    
}