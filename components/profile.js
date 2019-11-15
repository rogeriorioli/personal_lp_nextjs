import React from 'react';
import { FaLinkedin, FaGithubSquare, FaTwitterSquare, FaWhatsappSquare } from "react-icons/fa";
// import { Container } from './styles';
import { string } from 'prop-types'

const Profile = props => (
    <div className="profile"> 
        <h2>{props.title}</h2>
        <p className="subtitle">{props.subtitle}</p>
        <div className="content-box">
          <p>{props.content}</p>
        </div>
        <div className="social-link">
          <ul>
              <li>
                <a href={props.github} target="_blank"><FaGithubSquare size={32}/></a>
              </li>
            <li>
              <a href={props.linkedin} target="_blank" >
                <FaLinkedin size={32}/>
              </a>
            </li>
            <li>
              <a href={props.twitter} target="_blank" >
                <FaTwitterSquare size={32}/>
              </a>
            </li>
            <li>
              <a href={props.whatsapp} target="_blank" >
                <FaWhatsappSquare size={32}/>
              </a>
            </li>
          </ul>
        </div>
    </div>
)
Profile.propTypes = {
  title: string,
  subtitle : string,
  content: string,
  linkedin :  string,
  github : string,
  twitter : string,
  whatsapp : string
}

export default Profile