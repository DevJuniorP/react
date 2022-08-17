import './style.css'
import { FiMoreHorizontal } from 'react-icons/fi'
import { IoMdHeartEmpty } from 'react-icons/io'
import { BsChat, BsBookmark, BsEmojiSmile } from 'react-icons/bs'
import { FiSend } from'react-icons/fi'



export function Post () {
    
    return(
        <>

            <header className='header-post'>

                <div className='infos-post'>
                    <img className="img-header-post" src="https://github.com/maykbrito.png" />

                    <p>maykbrito</p>
                </div>

                <FiMoreHorizontal />
            </header>

            <div className='img-post'>
                <img src="https://github.com/maykbrito.png"/>
            </div>

            <div className='footer-post'>
                    <section className='engagements-post'>
                        
                                <div className='icons-1'>

                                        <div className='icon'><IoMdHeartEmpty /></div>
                                        <div className='icon'><BsChat /></div>
                                        <div className='icon'><FiSend /></div>

                                </div>

                         <div className='icon'><BsBookmark /></div>
                    </section>

                    <section className='like'>
                        <span>61 curtidas</span>
                    </section>

                    <div className='legend'>
                        <p>
                            <strong>maykbrito</strong> Desenvolvemos peças exclusivas para a Black Friday com descontos de até 50% OFF.
                        </p>
                    </div>

                    <div className='time-post'>
                        <time>Há 1 Hora</time>
                    </div>

                    <div className='coment'>

                        <div className='fake-coment'>

                                <div className="icon">
                                    <BsEmojiSmile />
                                </div>

                                <input type="text" placeholder='Adicione um comentário...'/>

                        </div>

                                <button>Publicar</button>

                    </div>
            </div>

        </>
    )
}