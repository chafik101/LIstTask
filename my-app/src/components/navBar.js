import './cssFile/navBar.css'
import imgProfile from './imges/Ellipse 1.png'




function NavBar(){
    return(
        <div className='nav-bar'>
            <div>
                <h1 className='title' >Task<span className='title-color'>List</span></h1>
            </div>
            <div className='container-img-profile'>
                <img src={imgProfile} />
            </div>
        </div>
    )
}

export default NavBar;