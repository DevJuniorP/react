import { BsFillPeopleFill, BsHouseDoorFill, BsFillPatchCheckFill, BsMusicNoteBeamed } from 'react-icons/bs'
import { BiCameraMovie } from 'react-icons/bi'
import { CgHashtag } from 'react-icons/cg'

import './style.css'

export function Suggestion () {
    return (
        <>
        
            <div className='suggestion-container'>
                <div className='suggestion-top'>
                    <div className='suggestion-top-toYou'>
                        <BsHouseDoorFill />
                        <p>Para você</p>
                    </div>
                    <div className='suggestion-top-follow'>
                        <BsFillPeopleFill />
                        <p>Seguindo</p>
                    </div>
                    <div className='suggestion-top-live'>
                        <BiCameraMovie />
                        <p>LIVE</p>
                    </div>
                    <hr className='divisor'/>
                </div>
                <div className='suggestion-logs'>
                    <p>Faça login para seguir criadores, curtir vídeos <br />e ver comentário</p>
                    <button className='suggestion-button'>Entrar</button>
                </div>
                <hr className='divisor'/>
                <div className='suggestion-suggestions'>
                    <div className='suggestion-suggestion-top'>
                        <p>Contas sugeridas</p>
                    </div>
                    <div className='suggestion-suggestions-mid'>
                        <div className='suggestion-single'>
                            <img src="https://avatars.githubusercontent.com/u/109175794?v=4" alt="" />
                            <div className="suggestion-single-texts">
                                <p>juniorperonof <BsFillPatchCheckFill /></p>
                                <span>Junior Peron</span>
                            </div>
                        </div>
                        <div className='suggestion-single'>
                            <img src="https://avatars.githubusercontent.com/u/109175794?v=4" alt="" />
                            <div className="suggestion-single-texts">
                                <p>juniorperonof <BsFillPatchCheckFill /></p>
                                <span>Junior Peron</span>
                            </div>
                        </div>
                        <div className='suggestion-single'>
                            <img src="https://avatars.githubusercontent.com/u/109175794?v=4" alt="" />
                            <div className="suggestion-single-texts">
                                <p>juniorperonof <BsFillPatchCheckFill /></p>
                                <span>Junior Peron</span>
                            </div>
                        </div>
                        <div className='suggestion-single'>
                            <img src="https://avatars.githubusercontent.com/u/109175794?v=4" alt="" />
                            <div className="suggestion-single-texts">
                                <p>juniorperonof <BsFillPatchCheckFill /></p>
                                <span>Junior Peron</span>
                            </div>
                        </div>
                    </div>
                    <div className='suggestion-suggestions-bot'>
                        <p>Ver tudo</p>
                    </div>
                </div>
                <div className='suggestion-discover'>
                     <p className='discover-p'>Descobrir</p>
                     <div className='tags'>
                        <div className='line1'>
                            <div className='sub-line1'>
                                <CgHashtag />
                                <p>festivaldecomedia</p>
                            </div>
                            <div className='sub-line1-2'>
                                <CgHashtag />
                                <p>diadospais</p>
                            </div>
                            <div className='line2'>
                                <div className='sub-line2'>
                                    
                                </div>
                            </div>
                        </div>
                     </div>
                </div>
                <div className='suggestion-footer'>

                </div>
            </div>

        </>
    )
}