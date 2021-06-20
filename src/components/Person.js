import React from 'react';

export default function Person({person}){
   const {id, name, city, country, employer, title, favoriteMovies} = person;
   return(
      <div className="InfoContainer">
         <h1 className="id">{id}/25</h1>
         <h1 className="name">{`${name.first} ${name.last}`}</h1>
         <ul className="descriptor-list">
         <li><b>From: </b>{city}, {country}</li>
         <li><b>Job Title: </b>{title}</li>
         <li><b>Employer: </b>{employer}</li>
         </ul>
         <p><b>Favorite Movies: </b></p>
            <ol className="movie-list">
               <li>{favoriteMovies[0]}</li>
               <li>{favoriteMovies[1]}</li>
               <li>{favoriteMovies[2]}</li>
            </ol>
      </div>
   )
}