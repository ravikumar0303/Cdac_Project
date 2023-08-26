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

        {/* <div style={{ marginTop: "6rem" }}>
          <div
            style={{
              margin: "auto",
              display: "block",
              textAlign: "center",
              marginBottom: "2rem",
              fontSize: "2rem",
              fontWeight:"bolder"
            }}
          >
            Our Partners
          </div>

          <div className="row">
            <div className="col"></div>
            <div className="col-sm-12 col-md-8">
              <div className="row">
                <div className="col-md-3">
                  <div>
                    <img
                      src="https://image.flaticon.com/icons/png/512/888/888863.png"
                      height="100px"
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <div>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFHOanPSHlprYvJ759BVQhI2KZINJCmP98a5Arlezf9s0kY_EJkKMQW7U2mpjtfM1DTnY&usqp=CAU"
                      height="100px"
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <div>
                    <img
                      src="https://cerebral-overload.com/wp-content/uploads/2019/04/rm0zqapy_400x400.jpg"
                      height="100px"
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <div>
                    <img
                      src="https://www.eimesc.co.il/wp-content/uploads/2015/05/ASUS-Logo.png"
                      height="100px"
                    />
                  </div>                  
                </div>
                <div className="col-md-3">
                <div>
                    <img
                      src="https://static.wixstatic.com/media/179655_7eb0593a2f064500989d33bf57fd5877~mv2.jpg"
                      height="100px"
                    />
                  </div>
                  
                </div>
                <div className="col-md-3">
                <div>
                    <img
                      src="https://www.galax.com/media/wysiwyg/corpsite/page/download/galax_logo_guideline/galax_logo.png"
                      height="100px"
                    />
                  </div>                 
                </div>
                <div className="col-md-3">
                <div>
                    <img
                      src="https://cdn.iconscout.com/icon/free/png-256/lg-3-283092.png"
                      height="100px"
                    />
                  </div>                 
                </div>
                <div className="col-md-3">
                <div>
                    <img
                      src="https://img.flaticon.com/icons/png/512/882/882836.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF"
                      height="100px"
                    />
                  </div>                 
                </div>
              </div>
            </div>

            <div className="col"></div>
          </div>
        </div> */}
      </React.Fragment>
    );
  }
}

export default Scrolling;
