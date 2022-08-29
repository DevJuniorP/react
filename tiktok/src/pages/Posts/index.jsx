import './style.css'
import { BsMusicNoteBeamed } from 'react-icons/bs'
import { AiFillHeart, AiOutlineComment } from 'react-icons/ai'
import { TiArrowForward } from 'react-icons/ti'

export function Post () {
    return(
        <>
        
            <div className='post-container'>
                <div className='post-header'>
                    <div className="post-user">
                        <img src="https://avatars.githubusercontent.com/u/109175794?v=4" alt="" className='post-img'/>
                        <p>juniorperonof <span>juniorperon</span></p>
                        <p><a href="https://www.youtube.com/watch?v=RHnEVjd6eRg">VMZ - Última Chance (OneShot) | Prod. Jow Santh
                        </a></p>
                    </div>
                    <div className='post-btn'>
                        <button>Seguir</button>
                    </div>
                </div>
                <div className="post-single">

                </div>
            </div>

        </>
    )
}