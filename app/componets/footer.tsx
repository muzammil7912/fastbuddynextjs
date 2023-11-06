import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaChevronRight, FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer>
       <div className="footer">
            <div className="footer_box_main grid grid--col80">
                <div className="block__inner grid footer_m">
                    <div className="footer_box" style={{display: "inline-block"}}>
                        <h2>Fast Buddys</h2>
                        <ul className="list">
                            <li className="flex_"><b>Call & Whatsapp:</b> <Link href="tel:+16025004856">+1 (602) 500-4856</Link></li>
                            <li className=""><b>Email:</b> 
                                <div>
                                    <Link href="mailto:info@fastbuddys.com">info@fastbuddys.com</Link>
                                    <Link href="mailto:embroidery@fastbuddys.com">embroidery@fastbuddys.com</Link>
                                </div>
                            </li>
                            <li className=""><b>Sales Manager:</b> 
                                <div>
                                    <Link href="mailto:emily@fastbuddys.com">emily@fastbuddys.com</Link>
                                </div>
                            </li>
                        </ul>
                        <ul className="list list-inline social__icon">
                            <li className="list__item"><a href="https://www.facebook.com/profile.php?id=100088893656729" target="_blank"> <FaFacebookF /></a></li>
                            <li className="list__item"><a href="#" target="_blank"><FaInstagram /> </a></li>
                            <li className="list__item"><a href="#" target="_blank"><FaTwitter /></a></li>
                            <li className="list__item"><a href="#" target="_blank"><FaLinkedin /> </a></li>
                        </ul>

                    </div>
                    <div className="footer_box">
                        <h2>Company</h2>
                        <ul className="foterm">
                            <li><a href="about.html" className='flex items-center  gap-1'><FaChevronRight /> <span className='relative pt-2'>About</span></a></li>
                            <li><a href="packages.html" className='flex items-center  gap-1'><FaChevronRight /> <span className='relative pt-2'>Packages </span></a></li>
                            <li><a href="#" className='flex items-center  gap-1'><FaChevronRight /> <span className='relative pt-2'>RATING & REVIEWS </span></a></li>
                        </ul>

                    </div>
                    <div className="footer_box">
                        <h2>Services</h2>
                        <ul className="foterm">
                            <li> <Link href="webDesigning.html" className='flex items-center  gap-1'><FaChevronRight /> <span className='relative pt-2'>Web Designing</span></Link> </li>
                            <li> <Link href="WebDevelopment.html" className='flex items-center  gap-1'><FaChevronRight /> <span className='relative pt-2'>Web Development</span></Link> </li>
                            <li> <Link href="WebHosting.html" className='flex items-center  gap-1'><FaChevronRight /> <span className='relative pt-2'>Web Hosting</span></Link> </li>
                            <li> <Link href="LogoDesigning.html" className='flex items-center  gap-1'><FaChevronRight /> <span className='relative pt-2'>Logo Designing</span></Link> </li>
                            <li> <Link href="GraphicDesigning.html" className='flex items-center  gap-1'><FaChevronRight /> <span className='relative pt-2'>Graphic Designing</span></Link> </li>
                        </ul>

                    </div>

                    <div className="footer_box">
                        <h2>Subscribe Newsletter</h2>
                        <form id="sendsubscribed"> 
                            <input type="email" className="form-control" name="email" id="email" placeholder="Your Email"
                            />
                            <button id="submit-sendsubscribed"  type="button" name="submit-sendsubscribed"><i id="submit-sendsubscribed"  className="fa-solid fa-angles-right"></i></button>

                        </form>
                        <p>Subscribe weekly newsletter to stay upto date. We don’t send spam.</p>

                    </div>
                </div>
            </div> 
        </div>
    <div className="footer_bottom grid grid--col80">
            <div className="block__inner">
                <div className="footer_main flex_ flex_space">
                    <div className="footer_bottom_">
                        <div className="footer_bottom_txt">
                            <h3 className="flex_"><span>© 2022</span> <Link href="index.html">Fast Buddys</Link> <span>All Rights
                                    Reserved.</span></h3>
                        </div>
                       
                    </div>
                    <div className="payimg">
                        <Image src={require('../dist/webImages/payment.png')} alt="" />
                        </div>
                </div>
            </div> 
        </div>
    </footer>
  )
}

export default Footer