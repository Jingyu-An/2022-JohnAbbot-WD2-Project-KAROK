import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './About.css'

import image1 from '../../img/img1.png';
import image3 from '../../img/img3.png';

const About = () => {
  return (
    <>
    <div className ='team'>
    <div><h1>OUR AMAZING TEAM</h1></div>
    <h4>Some quick example text to build on the card title</h4>
    </div>
    <div className='about'>
       
    <Card style={{ width: '15rem' }}>
    
    <Card.Body>
    <img className='rounded' src={image3} alt="" />
    <br/>
    
      <Card.Title><b>Nupur Kesarwani</b><br/>
      Lead Developer
      </Card.Title>

      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Button variant="success">Contact</Button>
    </Card.Body>
  </Card>
  <Card style={{ width: '15rem' }}>
    
    <Card.Body>
    <img className='rounded' src={image3} alt="" />
      <Card.Title><b>Niloofar Keshavarz</b><br/>
      Lead Developer
      </Card.Title>
      <Card.Text>
        Some quick example text to build on the card title aand make up the
        bulk of the card's content.
      </Card.Text>
      <Button variant="success">Contact</Button>
    </Card.Body>
  </Card>
  <Card style={{ width: '15rem' }}>
   
    <Card.Body>
    <img className='rounded' src={image1} alt="" />
      <Card.Title><b>Jingyu An</b><br/>
      Lead Developer
      </Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Button variant="success">Contact</Button>
    </Card.Body>
  </Card>
  <Card style={{ width: '15rem' }}>
    
    <Card.Body>
    <img className='rounded' src={image3} alt="" />
      <Card.Title><b>Hyunju Roh</b><br/>
      Lead Developer
      </Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Button variant="success">Contact</Button>
    </Card.Body>
  </Card>
  </div>
 </>
  )
}

export default About;