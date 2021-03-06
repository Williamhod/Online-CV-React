import React from "react";
import "./Contact.scss";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { GoLocation } from "react-icons/go";
import { BsPhone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import {FiGithub, FiLinkedin} from "react-icons/fi"

function Contact() {
  return (
    <div className="contact">
      <div className="contactContent">
        <div className="header"></div>
        <div className="contactBox">
          <h1>Contactez-moi</h1>
          <ul>
           
            <li>
              <BsPhone size={23} />
              <CopyToClipboard text="0617156130">
                <span
                  className="clickInput"
                  onClick={() => {
                    alert("Téléphone copié !");
                  }}
                >
                  06.17.15.61.30
                </span>
              </CopyToClipboard>
            </li>
            <li>
              <AiOutlineMail size={23} />
              <CopyToClipboard text="hodicq.william@gmail.com">
                <span
                  className="clickInput"
                  onClick={() => {
                    alert("E-mail copié !");
                  }}
                >
                  hodicq.william@gmail.com
                </span>
              </CopyToClipboard>
            </li>
             <li>
              <GoLocation size={23} />
              <span>
                <a
                  href="https://goo.gl/maps/UNubS1qYVirLmHmg9"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="location"
                >
                   Carcans
                </a>
              </span>
            </li>
          </ul>
        </div>
        <div className="socialNetwork">
          <ul>
            <a
              href="https://www.linkedin.com/in/william-hodicq/"
              target="blank"
              rel="noopener noreferrer"
            >
              <FiLinkedin size={75} />
            </a>
            <a
              href="https://github.com/Williamhod"
              target="blank"
              rel="noopener noreferrer"
            >
              <FiGithub size={75}/>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;

