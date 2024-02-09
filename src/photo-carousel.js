import './photo-carousel.css'
import { useState, useEffect, useRef, useReducer, useCallback } from 'react';
function PhotoCarousel(){
    const [photos, setPhotos]=useState(['ANW_4052.jpg', 'ANW_4401.jpg', 'ANW_4589.jpg']);
    const [currentPhoto, setCurrentPhoto] = useState(photos[0]);
    const [count, setCount] = useState(0);
    setTimeout(()=>{
        if (count+1>=photos.length){
            setCurrentPhoto(photos[0]);
            setCount(0);
        }
        else{
            setCurrentPhoto(photos[count+1]);
            setCount(count+1);
        }
    }, 5000);
    console.log("photos[0]: " + photos[0]);
    return(
        <div >
            <img className="carousel" src={currentPhoto}></img>
        </div>
    )
}
export default PhotoCarousel;