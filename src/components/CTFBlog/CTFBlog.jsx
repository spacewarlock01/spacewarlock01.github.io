import React from "react";
import { Container } from "react-bootstrap";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import CTFImage from "../Images/CTF.png";
import "./CTFBlog.css";

function CTFBlog() {
  return (
    <div className="blog">
      <Header />
      <Container>
        <div className="blog_content">
          <h1 className="ctf_heading">What is CTF?</h1>
          <p className="blog_content_paragraph">
            CTF stands for Capture the Flag, a game consisting of security and
            hacking related challenges where teams or individual players have to
            “capture flags” to score points. Flags can generally be captured by
            solving challenges or by hacking systems. The goals of playing CTFs
            are extending knowledge, training people, using and practicing
            skills and improve team work. CTFs can further be hosted for
            recruitment purposes and skill testing. Irrespectively of the
            purpose a good CTF should mostly be fun to play. CTFs are always
            held in controlled environments where the CTF organizer has full
            control and permission over the involved systems and challenges. The
            exercises in a CTF are never illegal or disrupting.
          </p>
          <img src={CTFImage} className="ctf_image" alt="" />
          <div className="blog_further_resources">
            <h2 className="blog_further">Other Websites</h2>
            <ul className="blog_list">
              <li>
                <a href="http://www.itsecgames.com/">bWAPP</a>
              </li>
              <li>
                <a href="https://cryptopals.com/">
                  Cryptopals - Cryptographic programming challenges
                </a>
              </li>
              <li>
                <a href="https://ctfchallenge.com/">CTF Challenge</a>
              </li>
              {/* <li>CTF365</li>
          <li>CTFlearn</li>
          <li>CTFTime</li>
          <li>Enigma Group</li>
          <li>Game of Hacks</li>
          <li>Google Gruyere - Vulnerable web app</li>
          <li>Google XSS Game - Cross-site scripting for beginners</li>
          <li>Hack This Site</li>
          <li>Hack.me</li>
          <li>Hacking-Lab</li>
          <li>HackThis!!</li>
          <li>Hellbound Hackers</li>
          <li>IO</li>
          <li>Juice shop - Vulnerable web app</li>
          <li>Microcorruption - ARM disassembling</li>
          <li>Over The Wire wargames</li>
          <li>OWASP WebGoat 1.2</li>
          <li>picoCTF</li>
          <li>Portswigger’s Web Security Academy</li>
          <li>pwn0</li>
          <li>pwnable.kr</li>
          <li>pwnable.tw</li>
          <li>Reversing.kr</li>
          <li>RingZer0 Team Online CTF</li>
          <li>Root Me</li>
          <li>SmashTheStack</li>
          <li>Try2Hack</li>
          <li>Typhoon vulnerable VM</li>
          <li>W3Challs</li>
          <li>XSS Challenge Wiki</li>
          <li>Google CTF</li> */}
            </ul>
          </div>

          <h2>For further Learning purposes</h2>
          <a href="https://medium.com/@shivamrawat_756/best-websites-for-getting-started-with-ctf-64307f9f8d02">
            <button className="aboutCTF_button">Read More</button>
          </a>
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default CTFBlog;
