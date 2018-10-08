import React, { Component } from "react";
import ImageCard from "./ImageCard";


export class RegularGallery extends Component {
	constructor(props) {

var data = {"gallery":[
   {
      "photo":"vase1.jpeg",
      "source":"instagram.png",
      "user_avatar":"https://picsum.photos/50/50/",
      "timestamp":"Sat Oct 06 2018 12:45:30",
      "likes":1804,
      "comments":14,
      "description":"Something"
   },
    {
      "photo":"vase2.jpeg",
      "source":"instagram.png",
      "user_avatar":"https://picsum.photos/50/50/",
      "timestamp":"Sat Oct 06 2018 12:45:30",
      "likes":1804,
      "comments":14,
      "description":"Something"
   },
    {
      "photo":"vase3.jpeg",
      "source":"instagram.png",
      "user_avatar":"https://picsum.photos/50/50/",
      "timestamp":"Sat Oct 06 2018 12:45:30",
      "likes":1804,
      "comments":14,
      "description":"Something"
   },
    {
      "photo":"vase4.jpeg",
      "source":"instagram.png",
      "user_avatar":"https://picsum.photos/50/50/",
      "timestamp":"Sat Oct 06 2018 12:45:30",
      "likes":1804,
      "comments":14,
      "description":"Something"
   },
    {
      "photo":"vase5.jpeg",
      "source":"instagram.png",
      "user_avatar":"https://picsum.photos/50/50/",
      "timestamp":"Sat Oct 06 2018 12:45:30",
      "likes":1804,
      "comments":14,
      "description":"Something"
   },
   {
      "photo":"vase6.jpeg",
      "source":"instagram.png",
      "user_avatar":"https://picsum.photos/50/50/",
      "timestamp":"Sat Oct 06 2018 12:45:30",
      "likes":1804,
      "comments":14,
      "description":"Something"
   },
    {
      "photo":"vase7.jpeg",
      "source":"instagram.png",
      "user_avatar":"https://picsum.photos/50/50/",
      "timestamp":"Sat Oct 06 2018 12:45:30",
      "likes":1804,
      "comments":14,
      "description":"Something"
   },
    {
      "photo":"vase8.jpeg",
      "source":"instagram.png",
      "user_avatar":"https://picsum.photos/50/50/",
      "timestamp":"Sat Oct 06 2018 12:45:30",
      "likes":1804,
      "comments":14,
      "description":"Something"
   },
    {
      "photo":"vase9.jpeg",
      "source":"instagram.png",
      "user_avatar":"https://picsum.photos/50/50/",
      "timestamp":"Sat Oct 06 2018 12:45:30",
      "likes":1804,
      "comments":14,
      "description":"Something"
   },
    {
      "photo":"vase10.jpeg",
      "source":"instagram.png",
      "user_avatar":"https://picsum.photos/50/50/",
      "timestamp":"Sat Oct 06 2018 12:45:30",
      "likes":1804,
      "comments":14,
      "description":"Something"
   },
   {
      "photo":"vase11.jpeg",
      "source":"instagram.png",
      "user_avatar":"https://picsum.photos/50/50/",
      "timestamp":"Sat Oct 06 2018 12:45:30",
      "likes":1804,
      "comments":14,
      "description":"Something"
   },
    {
      "photo":"vase12.jpeg",
      "source":"instagram.png",
      "user_avatar":"https://picsum.photos/50/50/",
      "timestamp":"Sat Oct 06 2018 12:45:30",
      "likes":1804,
      "comments":14,
      "description":"Something"
   },
    {
      "photo":"vase13.jpeg",
      "source":"instagram.png",
      "user_avatar":"https://picsum.photos/50/50/",
      "timestamp":"Sat Oct 06 2018 12:45:30",
      "likes":1804,
      "comments":14,
      "description":"Something"
   },
    {
      "photo":"vase14.jpeg",
      "source":"instagram.png",
      "user_avatar":"https://picsum.photos/50/50/",
      "timestamp":"Sat Oct 06 2018 12:45:30",
      "likes":1804,
      "comments":14,
      "description":"Something"
   },
    {
      "photo":"vase15.jpeg",
      "source":"instagram.png",
      "user_avatar":"https://picsum.photos/50/50/",
      "timestamp":"Sat Oct 06 2018 12:45:30",
      "likes":1804,
      "comments":14,
      "description":"Something"
   },
   {
      "photo":"vase16.jpeg",
      "source":"instagram.png",
      "user_avatar":"https://picsum.photos/50/50/",
      "timestamp":"Sat Oct 06 2018 12:45:30",
      "likes":1804,
      "comments":14,
      "description":"Something"
   },
    {
      "photo":"vase17.jpeg",
      "source":"instagram.png",
      "user_avatar":"https://picsum.photos/50/50/",
      "timestamp":"Sat Oct 06 2018 12:45:30",
      "likes":1804,
      "comments":14,
      "description":"Something"
   },
    {
      "photo":"vase18.jpeg",
      "source":"instagram.png",
      "user_avatar":"https://picsum.photos/50/50/",
      "timestamp":"Sat Oct 06 2018 12:45:30",
      "likes":1804,
      "comments":14,
      "description":"Something"
   },
    {
      "photo":"vase19.jpeg",
      "source":"instagram.png",
      "user_avatar":"https://picsum.photos/50/50/",
      "timestamp":"Sat Oct 06 2018 12:45:30",
      "likes":1804,
      "comments":14,
      "description":"Something"
   },
    {
      "photo":"vase20.jpeg",
      "source":"instagram.png",
      "user_avatar":"https://picsum.photos/50/50/",
      "timestamp":"Sat Oct 06 2018 12:45:30",
      "likes":1804,
      "comments":14,
      "description":"Something"
   },
   {
      "photo":"vase1.jpeg",
      "source":"instagram.png",
      "user_avatar":"https://picsum.photos/50/50/",
      "timestamp":"Sat Oct 06 2018 12:45:30",
      "likes":1804,
      "comments":14,
      "description":"Something"
   },
    {
      "photo":"vase2.jpeg",
      "source":"instagram.png",
      "user_avatar":"https://picsum.photos/50/50/",
      "timestamp":"Sat Oct 06 2018 12:45:30",
      "likes":1804,
      "comments":14,
      "description":"Something"
   },
    {
      "photo":"vase3.jpeg",
      "source":"instagram.png",
      "user_avatar":"https://picsum.photos/50/50/",
      "timestamp":"Sat Oct 06 2018 12:45:30",
      "likes":1804,
      "comments":14,
      "description":"Something"
   },
    {
      "photo":"vase4.jpeg",
      "source":"instagram.png",
      "user_avatar":"https://picsum.photos/50/50/",
      "timestamp":"Sat Oct 06 2018 12:45:30",
      "likes":1804,
      "comments":14,
      "description":"Something"
   },
    {
      "photo":"vase5.jpeg",
      "source":"instagram.png",
      "user_avatar":"https://picsum.photos/50/50/",
      "timestamp":"Sat Oct 06 2018 12:45:30",
      "likes":1804,
      "comments":14,
      "description":"Something"
   },
   {
      "photo":"vase6.jpeg",
      "source":"instagram.png",
      "user_avatar":"https://picsum.photos/50/50/",
      "timestamp":"Sat Oct 06 2018 12:45:30",
      "likes":1804,
      "comments":14,
      "description":"Something"
   },
    {
      "photo":"vase7.jpeg",
      "source":"instagram.png",
      "user_avatar":"https://picsum.photos/50/50/",
      "timestamp":"Sat Oct 06 2018 12:45:30",
      "likes":1804,
      "comments":14,
      "description":"Something"
   },
    {
      "photo":"vase8.jpeg",
      "source":"instagram.png",
      "user_avatar":"https://picsum.photos/50/50/",
      "timestamp":"Sat Oct 06 2018 12:45:30",
      "likes":1804,
      "comments":14,
      "description":"Something"
   },
    {
      "photo":"vase9.jpeg",
      "source":"instagram.png",
      "user_avatar":"https://picsum.photos/50/50/",
      "timestamp":"Sat Oct 06 2018 12:45:30",
      "likes":1804,
      "comments":14,
      "description":"Something"
   },
    {
      "photo":"vase10.jpeg",
      "source":"instagram.png",
      "user_avatar":"https://picsum.photos/50/50/",
      "timestamp":"Sat Oct 06 2018 12:45:30",
      "likes":1804,
      "comments":14,
      "description":"Something"
   },
   {
      "photo":"vase11.jpeg",
      "source":"instagram.png",
      "user_avatar":"https://picsum.photos/50/50/",
      "timestamp":"Sat Oct 06 2018 12:45:30",
      "likes":1804,
      "comments":14,
      "description":"Something"
   },
    {
      "photo":"vase12.jpeg",
      "source":"instagram.png",
      "user_avatar":"https://picsum.photos/50/50/",
      "timestamp":"Sat Oct 06 2018 12:45:30",
      "likes":1804,
      "comments":14,
      "description":"Something"
   },
    {
      "photo":"vase13.jpeg",
      "source":"instagram.png",
      "user_avatar":"https://picsum.photos/50/50/",
      "timestamp":"Sat Oct 06 2018 12:45:30",
      "likes":1804,
      "comments":14,
      "description":"Something"
   },
    {
      "photo":"vase14.jpeg",
      "source":"instagram.png",
      "user_avatar":"https://picsum.photos/50/50/",
      "timestamp":"Sat Oct 06 2018 12:45:30",
      "likes":1804,
      "comments":14,
      "description":"Something"
   },
    {
      "photo":"vase15.jpeg",
      "source":"instagram.png",
      "user_avatar":"https://picsum.photos/50/50/",
      "timestamp":"Sat Oct 06 2018 12:45:30",
      "likes":1804,
      "comments":14,
      "description":"Something"
   },
   {
      "photo":"vase16.jpeg",
      "source":"instagram.png",
      "user_avatar":"https://picsum.photos/50/50/",
      "timestamp":"Sat Oct 06 2018 12:45:30",
      "likes":1804,
      "comments":14,
      "description":"Something"
   },
    {
      "photo":"vase17.jpeg",
      "source":"instagram.png",
      "user_avatar":"https://picsum.photos/50/50/",
      "timestamp":"Sat Oct 06 2018 12:45:30",
      "likes":1804,
      "comments":14,
      "description":"Something"
   },
    {
      "photo":"vase18.jpeg",
      "source":"instagram.png",
      "user_avatar":"https://picsum.photos/50/50/",
      "timestamp":"Sat Oct 06 2018 12:45:30",
      "likes":1804,
      "comments":14,
      "description":"Something"
   },
    {
      "photo":"vase19.jpeg",
      "source":"instagram.png",
      "user_avatar":"https://picsum.photos/50/50/",
      "timestamp":"Sat Oct 06 2018 12:45:30",
      "likes":1804,
      "comments":14,
      "description":"Something"
   },
    {
      "photo":"vase20.jpeg",
      "source":"instagram.png",
      "user_avatar":"https://picsum.photos/50/50/",
      "timestamp":"Sat Oct 06 2018 12:45:30",
      "likes":1804,
      "comments":14,
      "description":"Something"
   },
   {
      "photo":"vase1.jpeg",
      "source":"instagram.png",
      "user_avatar":"https://picsum.photos/50/50/",
      "timestamp":"Sat Oct 06 2018 12:45:30",
      "likes":1804,
      "comments":14,
      "description":"Something"
   },
    {
      "photo":"vase2.jpeg",
      "source":"instagram.png",
      "user_avatar":"https://picsum.photos/50/50/",
      "timestamp":"Sat Oct 06 2018 12:45:30",
      "likes":1804,
      "comments":14,
      "description":"Something"
   },
    {
      "photo":"vase3.jpeg",
      "source":"instagram.png",
      "user_avatar":"https://picsum.photos/50/50/",
      "timestamp":"Sat Oct 06 2018 12:45:30",
      "likes":1804,
      "comments":14,
      "description":"Something"
   },
    {
      "photo":"vase4.jpeg",
      "source":"instagram.png",
      "user_avatar":"https://picsum.photos/50/50/",
      "timestamp":"Sat Oct 06 2018 12:45:30",
      "likes":1804,
      "comments":14,
      "description":"Something"
   },
    {
      "photo":"vase5.jpeg",
      "source":"instagram.png",
      "user_avatar":"https://picsum.photos/50/50/",
      "timestamp":"Sat Oct 06 2018 12:45:30",
      "likes":1804,
      "comments":14,
      "description":"Something"
   },
   {
      "photo":"vase6.jpeg",
      "source":"instagram.png",
      "user_avatar":"https://picsum.photos/50/50/",
      "timestamp":"Sat Oct 06 2018 12:45:30",
      "likes":1804,
      "comments":14,
      "description":"Something"
   },
    {
      "photo":"vase7.jpeg",
      "source":"instagram.png",
      "user_avatar":"https://picsum.photos/50/50/",
      "timestamp":"Sat Oct 06 2018 12:45:30",
      "likes":1804,
      "comments":14,
      "description":"Something"
   },
    {
      "photo":"vase8.jpeg",
      "source":"instagram.png",
      "user_avatar":"https://picsum.photos/50/50/",
      "timestamp":"Sat Oct 06 2018 12:45:30",
      "likes":1804,
      "comments":14,
      "description":"Something"
   },
    {
      "photo":"vase9.jpeg",
      "source":"instagram.png",
      "user_avatar":"https://picsum.photos/50/50/",
      "timestamp":"Sat Oct 06 2018 12:45:30",
      "likes":1804,
      "comments":14,
      "description":"Something"
   },
    {
      "photo":"vase10.jpeg",
      "source":"instagram.png",
      "user_avatar":"https://picsum.photos/50/50/",
      "timestamp":"Sat Oct 06 2018 12:45:30",
      "likes":1804,
      "comments":14,
      "description":"Something"
   }
]
}

		super(props);
		this.state = { gallery: data.gallery
		}
	}


	render() {
      let size = "400px"
      let styles = {
         gridTemplateColumns: `repeat(auto-fill, minmax(${size}, 1fr))`
      }


		return(
			<div className="galleryGrid" style={styles}>
                     {this.state.gallery.map((card,index) => 
                        <ImageCard key={index} height={size} width={size} card={card} />
                     )}
          	</div>
    	)
	}
}

export default RegularGallery;