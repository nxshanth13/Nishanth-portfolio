import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"



export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Ready to get started on your project? </p>
        <p>Contact me now for a Free consultation.</p>
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:nxshanth13@gmail.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:nxshanth13@gmail.com">nxshanth13@gmail.com</a>
        </div>
        <div>
        <a href="tel:+919952090732"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+919952090732">(+91) 9952090732</a>
        </div>  
      </div>
    </Container>
  )
}