import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Contact.css';
//import Navbar from './components/Navbar/Navbar';

function Contact() {
  return (
   <div className="contactForm">
    <Form >
      <Form.Label htmlFor="inputLable" style = {{fontSize: "2rem"}}>Contact Karokify</Form.Label>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Your Message</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Button type="submit" className="btn btn-secondary buttonSend">Send</Button>
    </Form>
    </div>
  );
}

export default Contact;