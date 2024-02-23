import './photo-carousel.css';
import { useState, useEffect, useRef, useReducer, useCallback } from 'react';
import carousel0 from './images/carousel0.jpg';
import carousel1 from './images/carousel1.jpg';
import carousel2 from './images/carousel2.jpg';
function PhotoCarousel(){
    const [photos, setPhotos]=useState([carousel0, carousel1, carousel2]);
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
    return(
        <div className = 'carousel'>
            <img className="image" src={currentPhoto}></img>
        </div>
    )
}
export default PhotoCarousel;