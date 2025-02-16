import {use, useContext, useEffect, useState} from 'react'
import { characterContext } from './Card'

import Akali1 from './assets/Akali1.jpg'
import Akali2 from './assets/Akali2.jpg'
import Kennen1 from './assets/Kennen1.jpg'
import Kennen2 from './assets/Kennen2.jpg'
import Neeko1 from './assets/Neeko1.jpg'
import Neeko2 from './assets/Neeko2.jpg'

export default function Gallery( {sendChoosedImage} ){
    let character = useContext(characterContext)
    let [image1 , setImage1] = useState();
    let [image2 , setImage2] = useState();
    useEffect(()=>{
        if (character == "Akali"){
            setImage1(Akali1)
            setImage2(Akali2)
        }
        else if (character == "Neeko"){
            setImage1(Neeko1)
            setImage2(Neeko2)
        }
        else if (character == "Kennen"){
            setImage1(Kennen1)
            setImage2(Kennen2)
        }
    }, [])

return(<div className='galleryContainer'>
    <img src={image1} className='galleryImg' onClick={() => {sendChoosedImage(1)}}/>
    <img src={image2} className='galleryImg' onClick={() =>{sendChoosedImage(2)}}/>
</div>)
}