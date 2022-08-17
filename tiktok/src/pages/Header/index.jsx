import './style.css'
import Logo from '../img/logo.png';
import { BsSearch } from 'react-icons/bs'
import { GrAdd } from 'react-icons/gr'
import { IoEllipsisVertical } from 'react-icons/io5'

export function Header () {
    return(
        <>

            <header className='container'> 
                <div className="container-items">
                    <div className='logo'>
                        <img src={Logo} alt="logo"  className='logo'/>
                    </div>{/* logo  */}
                    <div className='search'>
                        <input type="text" className='searchInput' placeholder='Pesquisar contas e vídeos'/>
                        <BsSearch />
                    </div>{/* search */}
                    <div className='loadlogin'>
                        <div className='btns'>
                            <div className="load">
                                <GrAdd />
                                <button className='btn-load'>Carregar</button>
                            </div>
                            <div className="login">
                                <button className='btn-login'>Entrar</button>
                            </div>
                        </div>{/* btns */}
                        <div className="ellipse">
                            <IoEllipsisVertical />
                        </div>
                    </div>{/* LoadLogin  */}
                </div>  
            </header>{/* container */}

        </>
    )
}