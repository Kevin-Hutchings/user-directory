import React from 'react';

export default function Button({handleClick, buttonTitle}){
   return(
      <section >
         <button className="nav" onClick={handleClick}>{buttonTitle}</button>
      </section>
   )
}