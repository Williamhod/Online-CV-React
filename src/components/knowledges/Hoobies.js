import React from 'react'
import { SiYourtraveldottv } from 'react-icons/si'
import { GiWaveSurfer,GiMaterialsScience } from 'react-icons/gi'
import { BsMusicNoteList } from 'react-icons/bs'
import {IoGameControllerOutline} from 'react-icons/io5'
import { BiMoviePlay } from 'react-icons/bi'

function Hoobies() {
    const Hoobie = ({ label,Icon }) => (
        <li>
          <Icon/>
          <span>{label}</span>
        </li>
    );
    
    return (
        <div className="hobbies">
            <h3>Intérêts</h3>
            <ul>
                <Hoobie label="Voyages" Icon={SiYourtraveldottv} />
                <Hoobie label="Sports aquatiques" Icon={GiWaveSurfer} />
                <Hoobie label="Musique" Icon={BsMusicNoteList} />
                <Hoobie label="Jeux" Icon={IoGameControllerOutline} />
                <Hoobie label="Cinéma" Icon={BiMoviePlay} />
                <Hoobie label ="Nouvelles technologies" Icon={GiMaterialsScience}/>
            </ul>
       </div>
    )
}

export default Hoobies
