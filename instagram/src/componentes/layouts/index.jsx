import { Post } from '../post';
import { Story } from '../storys';
import { Suggestion } from '../suggestion';
import './style.css'

export function Layout (){

    return (
        <>
            <div className="MainGrid" >

                <div className="first-column" style={{gridArea: "firstColumn"}}>
                    <div className="box" >
                        <Story />
                    </div>

                    <div className="box" style={{margin: "30px 0"}} >
                        <Post />
                    </div>
                </div>


                <div style={{ gridArea: "secondColumn" }} >
                    <div className="suggestionBox" >
                        <Suggestion />
                    </div>
                </div>

            </div>

        </>
    );

}