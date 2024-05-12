import './Landing.css';
import { Outlet, NavLink, Link } from 'react-router-dom';

function Landing() {
    return (
        <>
            <div className="landing_main">
                <div className="landing_side-nav">
                    <div className='landing_nav-btns'>
                        <Link className='landing_logo'>React.<span className='landing_highlight'>js</span></Link>
                        <NavLink to="password-generator" className='landing_nav-card'>Password Generator</NavLink>
                        <NavLink to="currency-converter" className='landing_nav-card'>Currency Converter</NavLink>
                        <NavLink to="bg-changer" className='landing_nav-card'>Background Changer</NavLink>
                        <NavLink to="to-do" className='landing_nav-card'>Todo</NavLink>
                    </div>
                </div>
                <div className="landing_content">
                     <Outlet/>
                     <p className='landing_copyrigt'>&copy; 2024 Shaishav kumar. All rights reserved.</p>
                </div>
            </div>
        </>
    )
}

export default Landing;