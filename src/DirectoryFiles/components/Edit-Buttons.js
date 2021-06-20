import React from 'react';

export default function EditButtons({handleClick, buttonTitle}){
   return(
      <section >
         <button className="edit" onClick={handleClick}>{buttonTitle}</button>
      </section>
   )
}