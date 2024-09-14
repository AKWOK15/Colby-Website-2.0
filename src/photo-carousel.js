import './photo-carousel.css';
import { useState, useEffect, useRef, useReducer, useCallback } from 'react';
import carousel0 from './images/pete.jpg';
import carousel1 from './images/chipgoal.jpg';
import carousel2 from './images/scullygoal.jpg';
import temp from './images/ANW_4189.jpg'
function PhotoCarousel(){
    const [photos, setPhotos]=useState([temp, carousel1, carousel2]);
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
            <img className="image" src={currentPhoto} alt='Colby Club Hockey Action Shot'></img>
        </div>
    )
}
export default PhotoCarousel;