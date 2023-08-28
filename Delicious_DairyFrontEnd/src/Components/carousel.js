/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img1 from '../Images/About.png';
import img2 from '../Images/Cow.jpeg';
import img3 from '../Images/cowpic.jpeg';
import img4 from '../Images/home4.png';
import img5 from '../Images/home5.jpeg';
import img6 from '../Images/home6.jpeg';
import img7 from '../Images/home7.jpeg';
import img8 from '../Images/home8.jpeg';
import img9 from '../Images/home9.jpeg';
import img10 from '../Images/home10.jpeg';
import img11 from '../Images/milk.jpg';
import img12 from '../Images/home3.jpg';

class Scrolling extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Carousel
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={2000}
          showStatus={false}
        >
          <div >
            <img
              src={img1}
              height="600px"
            />
          </div>
          <div>
            <img
              src={img2}
              height="600px"
            />
          </div>
          <div>
            <img
              src={img3}
              height="600px"
            />
          </div>
          <div>
            <img
              src={img4}
              height="600px"
            />
          </div>
          <div>
            <img
              src={img5}
              height="600px"
            />
          </div>
          <div>
            <img
              src={img6}
              height="600px"
            />
          </div>
          <div>
            <img
              src={img7}
              height="600px"
            />
          </div>
          <div>
            <img
              src={img8}
              height="600px"
            />
          </div>
          <div>
            <img
              src={img9}
              height="600px"
            />
          </div>
          <div>
            <img
              src={img10}
              height="600px"
            />
          </div>
          <div>
            <img
              src={img11}
              height="600px"
            />
          </div>
          <div>
            <img
              src={img12}
              height="600px"
            />
          </div>
        </Carousel>

        {

        }
      </React.Fragment>
    );
  }
}

export default Scrolling;
