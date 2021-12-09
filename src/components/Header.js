import React from 'react'
import { Link } from 'react-router-dom'
import log from "../Assets/logo.png"
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { useStateValue } from '../StateProvider'


function Header(){

    const [{basket},dispatch]=useStateValue();
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container">
                <a class="navbar-brand" href="#">
                    <img src={log} alt="" width="200" height="120"></img>
                 </a>
            </div>
        <div className="container-fluid">
            
            <div className="collapse navbar-collapse ms-1" id="navbarNav">
            
            <form class="d-flex" style={{ marginLeft: '25%'}}>
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                <SearchIcon className=""/>
            </form>
            {/*First link */}
            <Link to="/Login" className="link-primary m-3">
                <span className="">Sign-In or Sign-Out</span>
            </Link>
            {/*checkout */}
            <Link to="/checkout" className="link-primary m-1">
                <ShoppingBasketIcon style={{display:'flex',alignItems:'center'}}/>
                {/*Item count */}
                {/*? is used to show no items in the cart */}
                <span style={{marginLeft:10,marginRight:10}}>{basket?.length}</span>
            </Link>
            </div>
        </div>
        </nav>
    )
}

export default Header