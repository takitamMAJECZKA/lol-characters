import {useContext} from 'react'
import { characterContext } from './Card'

import Akali1 from './assets/Akali1.jpg'
import Akali2 from './assets/Akali2.jpg'
import Kennen1 from './assets/Kennen1.jpg'
import Kennen2 from './assets/Kennen2.jpg'
import Neeko1 from './assets/Neeko1.jpg'
import Neeko2 from './assets/Neeko2.jpg'

export default function Gallery( {sendChoosedImage} ){
    let character = useContext(characterContext)
    
    let character1 =character+'1';
    let character2 = character+2;
return(<div className='galleryContainer'>
    <img src={eval(character+1)} className='galleryImg' onClick={() => {sendChoosedImage(1)}}/>
    <img src={eval(character+2)} className='galleryImg' onClick={() =>{sendChoosedImage(2)}}/>
</div>)
}