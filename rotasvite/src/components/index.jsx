import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './styles.css'
export function Header () {
    return(
        <header>
            <div className="content">
                <div className="container">
                    <h2><Link to='/'>LOGO</Link></h2>
                    <nav>
                        <ul>
                            <li><Link to='/vectors'>Vector</Link></li>
                            <li><Link to='/photos'>Photos</Link></li>
                            <li><Link to='/psd'>PSD</Link></li>
                            <li><Link to='/'>Home</Link></li>
                        </ul>
                    </nav>
                <button>Submit</button>
                </div>
            </div>
        </header>
    )
}