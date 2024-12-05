import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
// import DownloadApp from '../../assets/download.png'
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/nxshanth13/StaffallocServer" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
                <a href="https://staffalloc-server.vercel.app" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a> </div>
            </header>
            <div className="body">
              <h3>Staff Allocation Automator</h3>
              <p> Designed and implemented an efficient solution to streamline staff allocation based on user requirements, particularly during examination periods. The goal was to automate and optimize the assignment of duties, ensuring a fair and effective distribution of responsibilities among the staff. </p>
            </div>
            <footer> <ul className="tech-list"> <li>Python</li> <li>PostgreSQL</li> <li>Django</li>  </ul> </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/nxshanth13/Object-detection" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /> </a>
                <a href="none" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" /></a>
              </div>
            </header>
            <div className="body">
              <h3>Real world object detection using Deeplearning</h3>
              <p>
                Developed a real-world object detection project using deep learning and implemented it on a Raspberry Pi for hardware processing.This system employs Convolutional Neural Networks (CNNs) trained on extensive datasets to automatically identify and localize objects within images or video streams in real-time.

              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Tensorflow</li>
                <li>Raspberry Pi</li>
                <li>CNN</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/CodeVinayak/Jupyter-Notebook/tree/main/Credit%20Risk%20Analysis" target="\_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a href="https://github.com/CodeVinayak/Jupyter-Notebook/blob/main/Credit%20Risk%20Analysis/Credit_Risk_Analysis.ipynb" target="\_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Spiderman</h3>
              <p>
                A Mini-figure Spiderman game with more villains to fight in HTML5, CSS3 and Javascript.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Javascript</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://github.com/nxshanth13/scanhub-QR" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a href="https://github.com/nxshanth13/scanhub-QR" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Scanhub QR generator</h3>
              <p>Generated an Info Services app offering an emergency QR code system to provide vital information quickly during emergencies.
                Info Services is an emergency information QR code system that  can be a helpful way to provide crucial information to first
                responders or anyone who needs it in case of an emergency. This QR code can be placed on a physical item like a wallet card,
                phone case, or even on your smartphone's lock screen.</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>MERN Stack</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Code</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
{/*                 <a href="https://github.com/CodeVinayak/Real-Time-Hand-Gesture-Driven-3D-Object-Manipulation" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a href="https://youtu.be/NOm-3MynPLE" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a> */}
              </div>
            </header>
            <div className="body">
              <h3>TechNex</h3>
              <p>Engineered a test portal for college placements, providing resources and enabling students to take mock tests interviews in the style of
                companies they're applying to and robust monitoring and security measures.Currently developing another version for
                GATE examination preparation, including mock tests and practice exams and Question bank resources.</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>Node</li>
                <li>Mysql</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
{/*                 <a href="https://velocityai.vinayaksingh.com/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a> */}
              </div>
            </header>
            <div className="body">
              <h3>Snapgram</h3>
              <p>
                Our dynamic chat application is a cutting-edge platform designed to provide seamless and efficient communication for
                individuals and teams. Built with modern web technologies, this application offers a user-friendly interface and robust
                features to enhance your chat experience.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>Socket.io</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

      </div>
    </Container>
  );
}
