'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router';
const Header = () => {
    const router = useRouter()
    console.log(router)
  return (
    <header className="header grid grid--col80">
    <div className="block__inner flex_ flex_space">
        <div className="header__logo">
           <Link href="/">
                <Image src={require('../dist/webImages/logo.png')} alt="" />
            </Link>
        </div>

        <div className="header__right flex_ flex_space">
            <Link href="" className="nav_toggle">
                <i className="fa-solid fa-bars"></i>
            </Link>
            <nav className="header__right--menu">
                <a className="closeNav"> <i className="fa-solid fa-xmark"></i></a>
                <ul className="header__right--menu-m list list-inline">
                    <li className="list__item">
                        <div className="sideMenuinner flex_ flex_space">
                            <Link  href="/"  className={router.pathname == "/" ? "active" : ""}>Home</Link>
                            <Link href="" className="dropdown"><i className="fa-solid fa-chevron-down"></i></Link>
                        </div>
                    </li>
                    <li className="list__item">
                        <div className="sideMenuinner flex_ flex_space">
                            <Link href="/about"  className={router.pathname == "/about" ? "active" : ""}>About</Link>
                            <Link href="" className="dropdown"><i className="fa-solid fa-chevron-down"></i></Link>
                        </div>
                    </li>
                    <li className="list__item">

                        <div className="sideMenuinner flex_ flex_space">
                            <Link href="">Services</Link>
                            <Link href="" className="dropdown"><i className="fa-solid fa-chevron-down"></i></Link>
                        </div>
                        <ul>
                            <li> <Link href="webDesigning.html">Web Designing</Link> </li>
                            <li> <Link href="WebDevelopment.html">Web Development</Link> </li>
                            <li> <Link href="WebHosting.html">Web Hosting</Link> </li>
                            <li> <Link href="LogoDesigning.html">Logo Designing</Link> </li>
                            <li> <Link href="GraphicDesigning.html">Graphic Designing</Link> </li>
                            <li> <Link href="SecuritySystem.html">Security System</Link> </li>
                            <li> <Link href="DomainRegistration.html">Domain Registration</Link> </li>
                            <li> <Link href="Marketing360.html">Marketing 360</Link> </li>
                            <li> <Link href="videoanimation.html">Video Animation</Link> </li>
                        </ul>
                    </li>
                    <li className="list__item">

                        <div className="sideMenuinner flex_ flex_space">
                            <Link href="contact.html"  className={router.pathname == "/contact" ? "active" : ""}>Contact Us</Link>
                            <Link href="" className="dropdown"><i className="fa-solid fa-chevron-down"></i></Link>
                        </div>
                    </li>
                    <li className="list__item">
                        <div className="sideMenuinner flex_ flex_space">
                            <Link href="" className={router.pathname == "/portfolio" ? "active" : ""}>Portfolio</Link>
                            <Link  href=""  className="dropdown"><i className="fa-solid fa-chevron-down"></i></Link>
                        </div>
                    </li>
                    <li className="list__item">

                        <div className="sideMenuinner flex_ flex_space">
                            <Link href="" className={router.pathname == "/rating" ? "active" : ""}>RATING & REVIEWS</Link>
                            <Link href="" className="dropdown"><i className="fa-solid fa-chevron-down"></i></Link>
                        </div>
                    </li>
                </ul>
            </nav>
            <Link href="packages.html"  className="btn btn-secondary"><b>Packages</b>
                <span style={{transitionDelay: ".3s"}}></span>
                <span style={{transitionDelay: ".4s"}}></span>
                <span style={{transitionDelay: ".5s"}}></span>
                <span style={{transitionDelay: ".6s"}}></span></Link>
        </div>
    </div>
    <div className="header__side flex_ align_center flex_center">
        <div className="flex_ align_center flex_center">
            <Link href="/" className="company__name">
                Fast Buddys
            </Link>
            <Link href="" className="company__scroll flex_ align_center flex_center">
                <Image src={require('../dist/webImages/1.png')} alt="" />
                <span>Scroll</span>
                <span className="company__scroll--line"></span>
            </Link>
        </div>
    </div>
</header>
  )
}

export default Header