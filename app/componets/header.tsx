'use client'
import React, { Suspense, useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import axios from 'axios';

  
  interface MenuItem {
    label: string;
    link: string;
    childrens?: MenuItem[];
  }
  
  interface ApiResponse {
    header: MenuItem[];
  }
const Header = () => {
   const  pathname = usePathname()
   const [data, setData] = useState<ApiResponse | null>(null);

   useEffect(() => {
     axios
       .get<ApiResponse>('https://fastbuddynextjs.vercel.app/api/main')
       .then(response => {
         setData(response.data);
       })
       .catch(error => {
         console.error('Error fetching data:', error);
       });
   }, []);
 
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
                <Suspense fallback={<p>...loading</p>}>
                {data &&
    data.header.map(item => (
      <li className="list__item" key={item.label}>
        <div className="sideMenuinner flex_ flex_space">
          <Link href={item.link} className={pathname === item.link ? 'active' : ''}>
            {item.label}
          </Link>
          {item.childrens && (
            <ul>
              {item.childrens.map(childItem => (
                <li key={childItem.label}>
                  <Link href={childItem.link} >
                    {childItem.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </li>
    ))}
    </Suspense>
              
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