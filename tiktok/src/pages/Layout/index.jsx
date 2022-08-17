import { Suggestion } from '../Suggestion'
import './style.css'


export function Layout () {
    return(
        <>
            <div className='MainFlex'>

                <div className='suggestion'>
                    <Suggestion />
                </div>

                <div className='posts'>
                    Posts
                </div>

            </div>

        </>
    )
}