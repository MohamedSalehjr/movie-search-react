import React from 'react';


export default function MovieCard(props){

    return(
        <div className="card p-6 flex items-center flex-col rounded border border-gray-200 shadow-md hover:bg-gray-100" key={props.id}>
        <img className="img" src={props.imgSrc}
        alt={props.title + ' poster'}
        />
        <div className="card--content">
            <h3 className="card--title mt-2 text-4xl">{props.title} </h3>
            <p ><small>RELEASE DATE: {props.release_date}</small></p>
            <p><small>RATING: {props.average_rating}</small></p>
            <p className="card--desc text-xl">{props.overview}</p>
        </div>
    </div>
    )
}