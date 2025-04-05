import React from 'react'
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
        <div className="footerr">
           
            <div className="apy">
            <h4>Follow us</h4>
               <div className="apps">
               <span><FaYoutube /></span>
                <span><FaFacebook /></span>
                <span><FaXTwitter /></span>
                <span><FaPinterest /></span>
                <span><FaInstagram /></span>
               </div>
            </div>
            <div className="downloads">
              <h3>Download our app</h3>
              <div className="img-all">
              <div className="imgge imgone">
              <img src="./apple2.png" alt="hshk" />
              
              </div>
              <div className="imgge imgtwo">
              <img src="./andriod.png
              " alt="dds" />
              </div>
              </div>
            </div>
            <p>Haliye plc ("Haliye") registered in England & Wales No.07105905. Currys Retail Limited registered in England & Wales No.2142673. Currys Group Limited registered in England & Wales No.504877.
Registered office: 1 Portal Way, London, W3 6RS. Exclusions apply. Credit subject to status. Haliye Group Limited is a credit broker and offers the flexpay account under exclusive arrangement with the lender Creation Consumer Finance Ltd. Authorised and regulated by the Financial Conduct Authority.
Currys Care & Repair and Instant Replacement products are not regulated by the Financial Conduct Authority.</p>
        </div>
    </div>
  )
}

export default Footer