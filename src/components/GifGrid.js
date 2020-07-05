
import React from 'react';
import { GifGridItem } from './GifGridItem';
import { useFechGifs } from '../hooks/useFechGifs';

export const GifGrid = ({category}) => {
   
   
    const {data:images,loading} = useFechGifs(category);//cada vez el componente cambie va volver a disparar 


    return (
        <>
        <h3>{category}</h3>  

        {loading && <p>Loading</p>}
            
              <div className="card-grid">
                
                {
                  images.map(img =>(

                    <GifGridItem 
                    key={img.id}
                    {...img}//mandas cada propiedad  de forma independiente
                    // img={img}
                    />

                  ))

                } 
    
            
        </div>
       
        </>
    )
}
