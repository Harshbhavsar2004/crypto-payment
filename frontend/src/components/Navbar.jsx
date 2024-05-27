import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBitcoin, FaYoutube } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <nav className={show ? "navbar show_navbar" : "navbar"}>
        <div className="logo">
          <img src="/logo.png" alt="logo" />
        </div>
        <div className="links">
          <ul>
            <li>
              <Link to={"/home"}>HOME</Link>
            </li>
            <li>
              <Link to={"/donate"}>DONATE US</Link>
            </li>
            <li>
              <Link to={"/about"}>ABOUT</Link>
            </li>
            <li>
              <Link to={"/contact"}>CONTACT</Link>
            </li>
          </ul>
          <ul>
            <li>
              <FaBitcoin />
            </li>
            <li>
              <FaYoutube />
            </li>
            <li>
              <FaGithubSquare />
            </li>
            <li>
              <BsInstagram />
            </li>
          </ul>
        </div>
        <GiHamburgerMenu className="hamburger" onClick={() => setShow(!show)} />

          <div style={{
            marginLeft:"10px",
            height:"50px",
            marginTop:"10px",
            
          }}>
          <SignedOut>
            <button style={{
              marginLeft:"10px",
              outline:"none",
              border:"none",
              background:"black",
              cursor:"pointer",
              color:"#fff",
              padding:"10px 20px",
            }}><SignInButton/></button>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          </div>
      </nav>
    </>
  );
};

export default Navbar;
