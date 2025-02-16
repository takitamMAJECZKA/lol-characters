import Gallery from "./Gallery";
import { useState, createContext, useEffect} from 'react';

import Akali1 from './assets/Akali1.jpg'
import Akali2 from './assets/Akali2.jpg'
import Kennen1 from './assets/Kennen1.jpg'
import Kennen2 from './assets/Kennen2.jpg'
import Neeko1 from './assets/Neeko1.jpg'
import Neeko2 from './assets/Neeko2.jpg'

export let characterContext = createContext();


export default function Card( {character} ){
    const paragraphStyles = {WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', display: '-webkit-box'}


    let [image, setImage] = useState()
    let [description, setDescription] = useState('');

    let [pOpened, setPOpened] = useState(false)

    useEffect(() => {initialize()}, [])
    function initialize(){
        getImageFromChild(1)        
        switch (character){
            case "Akali":
                setDescription("Opuściwszy Zakon Kinkou i wyzbywszy się tytułu Pięści Cienia, Akali działa w pojedynkę, gotowa stać się śmiercionośną bronią, której jej lud tak bardzo potrzebował. Choć nie wyrzekła się wiedzy, którą przekazał jej mistrz Shen, poprzysięgła zabijać wrogów Ionii jednego po drugim. Akali uderza wprawdzie w niczym niezmąconej ciszy, ale jej przesłanie rozbrzmiewa z wielką mocą: bój się zabójczyni bez mistrza.");
                break;
            case "Neeko":
                setDescription("Neeko, pochodząca z dawno utraconego plemienia Vastajów, potrafi wtopić się w każdy tłum, pożyczając wygląd innych, a nawet wchłaniając coś pokroju ich stanu emocjonalnego, by w mgnieniu oka odróżnić wroga od przyjaciela. Nikt nie może być nigdy pewien, gdzie — ani kim — jest Neeko, ale ci, którzy chcą ją skrzywdzić, szybko poznają jej prawdziwą naturę i poczują na sobie całą potęgę jej pierwotnego ducha.");
                break;
            case "Kennen":
                setDescription("Kennen jest kimś więcej niż błyskawicznie szybkim stróżem ioniańskiej równowagi, jest jedynym yordlowym członkiem zakonu Kinkou. Mimo że jest małym i włochatym stworzeniem, chętnie stawi czoła wszystkim zagrożeniom za pomocą wirującej burzy shurikenów i dzięki niekończącemu się entuzjazmowi. U boku swojego mistrza Shena, Kennen patroluje duchowy wymiar, używając niszczącej elektrycznej energii, by zabijać wrogów.");
                break;
        }
    }

    function getImageFromChild(choosedImageNum){
        if (character == "Akali"){
            if(choosedImageNum == 1){
                setImage(Akali1)
            }else if(choosedImageNum == 2){
                setImage(Akali2)
            }
        }else if(character == "Neeko"){
            if(choosedImageNum == 1){
                setImage(Neeko1)
            }else if(choosedImageNum == 2){
                setImage(Neeko2)
            }
        }else if(character == "Kennen"){
            if(choosedImageNum == 1){
                setImage(Kennen1)
            }else if(choosedImageNum == 2){
                setImage(Kennen2)
            }
        }
    }
    return(<div className="card">
        <img className="profileImg" src={image} />
        <h2>{character}</h2>
        <p style={pOpened ? null : paragraphStyles}>{description}</p>
        <button className="moreLessBtn" onClick={() => {setPOpened(!pOpened)}}>{pOpened ? "Read less..." : "Read more..."}</button><br/>
        <characterContext.Provider value={character}>
            <Gallery sendChoosedImage={getImageFromChild}/>
        </characterContext.Provider>
    </div>)
}