import React, { Component } from "react";
import { Carousel } from 'react-bootstrap';
import ImageCard from "./ImageCard";

export class SlideShow extends Component {
  constructor(props, context) {
    super(props, context);

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


    this.state = {
      index: 0,
      direction: null,
      gallery: data.gallery
    };

    this.handleSelect = this.handleSelect.bind(this);
  }


  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }


  componentDidMount(){ this.setState({activeIndex:0}) }

  render() {
    const { index, direction } = this.state;
    const size = "250px";
    const imageInterval = 2000;

    return (
      <Carousel
        direction={direction}
        onSelect={this.handleSelect}
        interval={imageInterval}
        style={{marginTop: "300px"}}
      >

        {this.state.gallery.map((card,index) => 
            <Carousel.Item>
                  <ImageCard key={index+index} height={size} width={size} card={card} />
            </Carousel.Item>
                     )} 
      </Carousel>
    );
  }
}



export default SlideShow;