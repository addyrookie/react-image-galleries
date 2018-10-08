import React, { Component } from "react";
import {Link} from "react-router-dom";


export class Header extends Component {

	render() {
		return(
		<div className="headerLinks">
      		<Link to="/slideshow">Slide Show</Link>
      		<Link to="/regulargallery">Regular Gallery</Link>
        	<Link to="/randomizedgallery">Randomized Gallery</Link>
      	</div>
    	)
	}
}

export default Header;

    