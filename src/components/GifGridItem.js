
import React from 'react';


export const GifGridItem = ({title,url}) => {// get las propiedades especificasa


    return (
        <div className="card">
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}
