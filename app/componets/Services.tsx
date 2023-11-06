import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Services = () => {
  return (
    <section className="section1">
    <div className="section1__box relative">
        <div className="section1__box--main">
            <div className="section1__box--main-">
                <div className="section1__box--main-1 grid grid--col80">
                    <div className="grid grid_2 block__inner">
                        <div className="left">
                            <Link href="#">
                                <Image src={require("../dist/webImages/1.jpg")} alt="" />
                            </Link>
                        </div>
                        <div className="right">
                            <h2>E Products</h2>
                            <p>Royex Technologies is a leading website design and E-Commerce site development
                                company based in Dubai. Our portfolio demonstrates our quality and flexibility.
                                We provide high-quality development and services at </p>
                          

                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    <div className="section1__box relative">
        <div className="section1__box--main">
            <div className="section1__box--main-">
                <div className="section1__box--main-1 grid grid--col80">
                    <div className="grid grid_2 block__inner">

                        <div className="right">
                            <h2>E Services</h2>
                            <p>Royex Technologies is a leading website design and E-Commerce site development
                                company based in Dubai. Our portfolio demonstrates our quality and flexibility.
                                We provide high-quality development and services at </p>
                          

                        </div>
                        <div className="left">
                            <Link href="#">
                                <Image src={require("../dist/webImages/2.jpg")} alt="" />
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    <div className="section1__box relative">
        <div className="section1__box--main">
            <div className="section1__box--main-">
                <div className="section1__box--main-1 grid grid--col80">
                    <div className="grid grid_2 block__inner">
                        <div className="left">
                            <Link href="#">
                                <Image src={require("../dist/webImages/3.jpg")} alt="" />
                            </Link>
                        </div>
                        <div className="right">
                            <h2>E Business</h2>
                            <p>Royex Technologies is a leading website design and E-Commerce site development
                                company based in Dubai. Our portfolio demonstrates our quality and flexibility.
                                We provide high-quality development and services at </p>
                          

                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</section>
  )
}

export default Services