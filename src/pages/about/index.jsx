import React, { useState } from 'react';

function About() {

  // Initialize state with an empty array
  const [toggledLinks, setToggledLinks] = useState("home");
  const [toggledAbout, setToggledAbout] = useState("about");
  const [toggledContact, setToggledContact] = useState("contact")

  function handleClick(){
    setToggledLinks(
     <div 

          style={{width: '5px', height: '5px', backgroundColor: 'black', display: 'inline-block'}}
           className= 'me-2' >
          </div>
    );
    setToggledAbout("about");
    setToggledContact("contact");
  }

  function handleAbout(){
    setToggledAbout(<div 

      style={{width: '5px', height: '5px', backgroundColor: 'black', display: 'inline-block'}}
       className= 'me-2' >
      </div>);
      setToggledLinks("home");
      setToggledContact("contact");
  }

  function handleContact(){
    setToggledContact(<div 

      style={{width: '5px', height: '5px', backgroundColor: 'black', display: 'inline-block'}}
       className= 'me-2' >
      </div>);
      setToggledAbout("about");
      setToggledLinks("home");
  }


  return (
<ul className='ms-12'>
  <li onClick={handleClick}>
    {toggledLinks}
  </li>
  <li onClick={handleAbout}>
    {toggledAbout}
  </li>
  <li onClick={handleContact}>
    {toggledContact}
  </li>
</ul>
  );
}


export default About;
