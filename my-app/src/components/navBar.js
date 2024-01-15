import './cssFile/navBar.css'
import imgProfile from './imges/Ellipse 1.png'




function NavBar(){
    return(
        <div class='nav-bar'>
            <div>
                <h1 class='title' >Task<span class='title-color'>List</span></h1>
            </div>
            <div class='container-img-profile'>
                <img src={imgProfile} />
            </div>
        </div>
    )
}

export default NavBar;