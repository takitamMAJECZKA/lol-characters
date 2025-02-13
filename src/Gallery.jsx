import {useContext} from 'react'
import { characterContext } from './Card'


export default function Gallery( {sendChoosedImage} ){
    let character = useContext(characterContext)
    

return(<div className='galleryContainer'>
    <img src={`/src/assets/${character+1}.jpg`} className='galleryImg' onClick={() => {sendChoosedImage(1)}}/>
    <img src={`/src/assets/${character+2}.jpg`} className='galleryImg' onClick={() =>{sendChoosedImage(2)}}/>
</div>)
}