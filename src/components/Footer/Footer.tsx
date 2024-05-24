import { Container } from './styles'
import reactIcon from '../../assets/react-icon.svg'
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import whatsapp from '../../assets/whatsapp.svg'
import instagramIcon from '../../assets/instagram.svg'

export function Footer() {
  return (
    <Container className="footer">
      <a href="https://bento.me/nishanthjanarthanan" className="logo">
        <span>Nishanth</span>
        <span> Janarthanan</span>
      </a>
      <div>
        <p>
          This Website was made with <img src={reactIcon} alt="React" />
          
        </p>
      </div>
      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/nishanthjanarthanan/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="Linkedin" />
        </a>
        <a
          href="https://github.com/nxshanth13"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a
          href="https://api.whatsapp.com/send/?phone=919952090732&text=hello%20nj"
          target="_blank"
          rel="noreferrer"
        >
          <img src={whatsapp} alt="Whatsapp" />
        </a>

        <a
          href="https://www.instagram.com/nisxhanth/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagramIcon} alt="Instagram" />
        </a>
      </div>
    </Container>
  )
}
