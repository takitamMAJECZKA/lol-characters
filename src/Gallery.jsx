import akali1 from './assets/Akali1.jpg'
import akali2 from './assets/Akali2.jpg'
import kennen1 from './assets/Kennen1.jpg'
import kennen2 from './assets/Kennen2.jpg'
import neeko1 from './assets/Neeko1.jpg'
import neeko2 from './assets/Neeko2.jpg'
import {useContext} from 'react'
import { characterContext } from './Card'


export default function Gallery( {sendChoosedImage} ){
    let character = useContext(characterContext)
    

return(<div className='galleryContainer'>
    <img src={`./src/assets/${character+1}.jpg`} className='galleryImg' onClick={() => {sendChoosedImage(1)}}/>
    <img src={`./src/assets/${character+2}.jpg`} className='galleryImg' onClick={() =>{sendChoosedImage(2)}}/>
</div>)
}