import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./About.css";
import "../../App.css";

import image1 from "../../img/img1.png";
import image3 from "../../img/img3.png";

const About = () => {
  return (
    <>
<<<<<<< HEAD
      <div className="team">
        <div>
          <h1 className="pageTitle">OUR AMAZING TEAM</h1>
        </div>
      </div>
      <div className="about">
        <Card style={{ width: "15rem" }}>
          <Card.Body className="cardBody">
            <img className="rounded image" src={image3} alt="" />
            <br />

            <Card.Title className="title">
              <b>Nupur Kesarwani</b>
              <br />
              Lead Developer
            </Card.Title>
=======
    <div className ='team'>
    <div><h1 className='pageTitle'>OUR AMAZING TEAM</h1></div>
    
    </div>
  <div className='about'>
       
    <Card  style={{ width: '15rem' }}>
    
    <Card.Body className ="cardBody">
    <img className='rounded image' src={image3} alt="" />
    <br/>
    
      <Card.Title className='title'><b>Nupur Kesarwani</b><br/>
      Software Developer
      </Card.Title>

      <Card.Text className='textCard'>
        John Abbott College Student in Montreal. Right Now we all work on Karokify application.
      </Card.Text>
      <Button variant="info" className="button">Contact</Button>
    </Card.Body>
  </Card>
>>>>>>> e788759016f3894b6b59ea401f927fda1b963763

            <Card.Text>John Abbott College Student in Montreal.</Card.Text>
            <Button variant="info" className="button">
              Contact
            </Button>
          </Card.Body>
        </Card>

<<<<<<< HEAD
        <Card style={{ width: "15rem" }}>
          <Card.Body>
            <img className="rounded image" src={image3} alt="" />
            <Card.Title className="title">
              <b>Niloofar Keshavarz</b>
              <br />
              Lead Developer
            </Card.Title>
            <Card.Text>John Abbott College Student in Montreal.</Card.Text>
            <Button variant="info" className="button">
              Contact
            </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "15rem" }}>
          <Card.Body>
            <img className="rounded image" src={image1} alt="" />
            <Card.Title className="title">
              <b>Jingyu An</b>
              <br />
              Lead Developer
            </Card.Title>
            <Card.Text>John Abbott College Student in Montreal.</Card.Text>
            <Button variant="info" className="button">
              Contact
            </Button>
          </Card.Body>
        </Card>
=======
  <Card style={{ width: '15rem' }}>
    
    <Card.Body>
    <img className='rounded image' src={image3} alt="" />
      <Card.Title className='title'><b>Niloofar Keshavarz</b><br/>
      Software Developer
      </Card.Title>
      <Card.Text className='textCard'>
      John Abbott College Student in Montreal. Right Now we all work on Karokify application.
      </Card.Text>
      <Button variant="info" className="button">Contact</Button>
    </Card.Body>
  </Card>

  <Card style={{ width: '15rem' }}>
   
    <Card.Body>
    <img className='rounded image' src={image1} alt="" />
      <Card.Title className='title'><b>Jingyu An</b><br/>
      Software Developer
      </Card.Title>
      <Card.Text className='textCard'>
      John Abbott College Student in Montreal. Right Now we all work on Karokify application.
      </Card.Text>
      <Button  variant="info" className="button">Contact</Button>
    </Card.Body>
  </Card>
  
  <Card style={{ width: '15rem' }}>
    
    <Card.Body>
    <img className='rounded image' src={image3} alt="" />
      <Card.Title className='title'><b>Hyunju Roh</b><br/>
      Software Developer
      </Card.Title>
      <Card.Text className='textCard'>
      John Abbott College Student in Montreal. Right Now we all work on Karokify application.
      </Card.Text>
      <Button variant="info" className="button">Contact</Button>
    </Card.Body>
  </Card>
  </div>
 </>
  )
}
>>>>>>> e788759016f3894b6b59ea401f927fda1b963763

        <Card style={{ width: "15rem" }}>
          <Card.Body>
            <img className="rounded image" src={image3} alt="" />
            <Card.Title className="title">
              <b>Hyunju Roh</b>
              <br />
              Lead Developer
            </Card.Title>
            <Card.Text>John Abbott College Student in Montreal.</Card.Text>
            <Button variant="info" className="button">
              Contact
            </Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default About;
