import './style.css'

export function Suggestion () {
    
    return(
        <div className='container-suggestion'>

            <div className='header-suggestion'>

                <img src="https://avatars.githubusercontent.com/u/109175794?s=96&v=4" alt="" />

                <div className='user-infos-suggestions'>

                    <div className='infos'>
                        <span>juniorperonof</span>
                        <p>Junior Peron</p>
                    </div>

                    <button className='switch'>Mudar</button>

                </div>

            </div>

            <div className='header-main-suggestion'>

                <p>Sugestões para você</p>

                <span>Ver tudo</span>

            </div>

            <div className='user-suggestion'>

                <div className='infos-suggestion'>
                    <img src="https://avatars.githubusercontent.com/u/109175794?s=96&v=4" alt="" />

                    <div className='info-suggestion'>
                        <span>juniorperonof</span>
                        <p>Seguido por Junior Peron</p>
                    </div>

                    <button className='follow'>Seguir</button>
                </div>

                <div className='infos-suggestion'>
                    <img src="https://avatars.githubusercontent.com/u/109175794?s=96&v=4" alt="" />

                    <div className='info-suggestion'>
                        <span>juniorperonof</span>
                        <p>Seguido por Junior Peron</p>
                    </div>

                    <button className='follow'>Seguir</button>
                </div>

                <div className='infos-suggestion'>
                    <img src="https://avatars.githubusercontent.com/u/109175794?s=96&v=4" alt="" />

                    <div className='info-suggestion'>
                        <span>juniorperonof</span>
                        <p>Seguido por Junior Peron</p>
                    </div>

                    <button className='follow'>Seguir</button>
                </div>

                <div className='infos-suggestion'>
                    <img src="https://avatars.githubusercontent.com/u/109175794?s=96&v=4" alt="" />

                    <div className='info-suggestion'>
                        <span>juniorperonof</span>
                        <p>Seguido por Junior Peron</p>
                    </div>

                    <button className='follow'>Seguir</button>
                </div>

            </div>

            <footer className="footer-suggestion" >

                <p>Sobre &bull; Ajuda &bull; Imprensa &bull; API &bull; Carreiras &bull; Privacidade &bull; Termos &bull; Localizações &bull; Principais contas &bull; Hashtags &bull; idioma</p>

                <p>&copy; 2021 INSTAGRAM FROM META</p>

            </footer>


        </div>    
    );

}