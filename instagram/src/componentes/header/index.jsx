import { AiOutlineSearch, AiOutlineHome } from 'react-icons/ai'
import { RiMessengerLine } from 'react-icons/ri'
import { BsPlusSquare } from 'react-icons/bs'
import { MdOutlineExplore } from 'react-icons/md'
import { FiHeart } from 'react-icons/fi'

import './style.css'
import { IconContext } from 'react-icons'

export function Header () {

    return(

        <header className="header">
            <div className="container">
            
                <img className="logo" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" />
                
                <div className="input-fake">
                    <IconContext.Provider value={{ color: '#8e8e8e' }}>
                        <AiOutlineSearch />
                    </IconContext.Provider>
                    <input placeholder='Pesquisar' />
                </div>

                <div className='menu-icons'>
                    <IconContext.Provider value={{ size: '26px' }}>
                        
                        <div className='menu-icon-single'>
                            <AiOutlineHome />    
                        </div>
                        
                        <div className='menu-icon-single'>
                            <RiMessengerLine />
                        </div>

                        <div className='menu-icon-single'>
                            <BsPlusSquare />
                        </div>

                        <div className='menu-icon-single'>
                             <MdOutlineExplore />
                        </div>

                        <div className='menu-icon-single'>
                            <FiHeart />
                        </div>    

                    </IconContext.Provider>
                    <img src="https://avatars.githubusercontent.com/u/109175794?s=96&v=4" alt="Github.com/DevJuniorP" className='img-user'/>
                </div>

            </div>
        </header>

    )
};
