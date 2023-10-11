import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <main className="main relative">
    <section className="innerPage grid grid--col80 vertical__padding">
        <div className="block__inner flex_">
            <div className="innerPage__left">
                <h3>Company</h3>
                <h2>Overview</h2>
                <p><i>Being a leading software house in Pakistan we aim at helping organizations start their journey to business and technological transformation to fast track their way to success.</i></p>
                <p>As being Software house in Pakistan Dusky Considering the fact that we are all challenged in the business world, we all want to be part of a team that leaves a legacy and is remembered for years on what we have accomplished. We help our clients across diverse industries through rapidly navigating digital innovation and drive technological transformation. With an industry experience that spans several decades, we offer a plethora of client-centric services by enabling enterprises achieve competitive advantage through flexible and next generation global delivery models.</p>
            </div>
            <div className="innerPage__right">
                <Image src={require('../dist/webImages/a.jpg')} alt="" />
            </div>
        </div>
    </section>
     <section className="section4 grid grid--col80 vertical__padding">
         <div className="block__inner flex_" >
             <div className="section4box">
                 <h4>Get a Quote</h4>
                  <form id="sendconact">     
                     <div className="input_box flex_">
                         <div className="left">
                                 <Image src={require('../dist/webImages/quote/1.png')} alt="" />
                         </div>
                         <div className="right">
                             <input type="text" name="name" id="Name" placeholder="a" />
                             <label htmlFor="Name">Full Name*</label>
                         </div>
                     </div>
                     <div className="input_box flex_">
                         <div className="left">
                                 <Image src={require('../dist/webImages/quote/2.png')} alt="" />
                         </div>
                         <div className="right">
                             <input type="text" name="email" id="Email" placeholder="a" />
                             <label htmlFor="Email">Email*</label>
                         </div>
                     </div>
                     <div className="input_box flex_">
                         <div className="left">
                                 <Image src={require('../dist/webImages/quote/4.png')} alt="" />
                         </div>
                         <div className="right">
                             <input type="text" name="cellnumber" id="Cell" placeholder="ad" />
                             <label htmlFor="Cell">Cell Number*</label>
                         </div>
                     </div>
                     <div className="input_box flex_">
                         <div className="left">
                                 <Image src={require('../dist/webImages/quote/3.png')} alt="" />
                         </div>
                         <div className="right">
                             <input type="text" name="phonenumber" id="Phone" placeholder="a" />
                             <label htmlFor="Phone">Phone Number*</label>
                         </div>
                     </div>
                     <div className="input_box input_boxselect flex_">
                         <div className="left">
                             <Image src={require('../dist/webImages/quote/6.png')} alt="" />
                         </div>
                         <div className="right">
                             <select id="service_list" name="services">
                                 <option value=""> Select Any One </option>
                                 <optgroup label="Services">
                                     <option value="web Designing">Web Designing</option>
                                     <option value="Web Development">Web Development</option>
                                     <option value="Software Development">Software Development</option>
                                     <option value="Web Hosting">Web Hosting</option>
                                 </optgroup>
                                 <optgroup label="Hosting Basic">
                                     <option value="Hosting Basic DH 250">DH 250</option>
                                     <option value="Hosting Basic DH 500">DH 500</option>
                                     <option value="Hosting Basic DH 1000">DH 1000</option>
                                     <option value="Hosting Basic DH 2000">DH 2000</option>
                                 </optgroup>
                                 <optgroup label="Hosting Advanced">
                                     <option value="Hosting Advanced DH $50">DH $50</option>
                                     <option value="Hosting Advanced DH $100">DH $100</option>
                                     <option value="Hosting Advanced DH $200">DH $200</option>
                                 </optgroup>
                                 <optgroup label="Hosting Reseller">
                                     <option value="Hosting Reseller DH Reseller Hosting-$80">DH Reseller Hosting-$80</option>
                                     <option value="Hosting Reseller DH Reseller Hosting-$120">DH Reseller Hosting-$120</option>
                                     <option value="Hosting Reseller DH Reseller Hosting-$160">DH Reseller Hosting-$160</option>
                                 </optgroup>

                                 <optgroup label="Services">
                                     <option value="Logo Designing">Logo Designing</option>
                                     <option value="App Development">App Development</option>
                                     <option value="Graphic Designing">Graphic Designing</option>
                                     <option value="Security System">Security System</option>
                                     <option value="Domain Registration">Domain Registration</option>
                                 </optgroup>
                                 <optgroup label="Marketing 360">
                                     <option value="SEO">SEO</option>
                                     <option value="Digital Marketing">Digital Marketing</option>
                                 </optgroup>

                                 <optgroup label="Services">
                                     <option value="Promotions 360">Promotions 360</option>
                                     <option value="video animation">Video Animation</option>
                                    
                                 </optgroup>
                             </select>
                             <label htmlFor="service_list">Services List*</label>
                         </div>
                     </div>
                    
                     <div className="input_box input_boxarea flex_">
                         <div className="left">
                             <Image src={require('../dist/webImages/quote/7.png')} alt="" />
                         </div>
                         <div className="right">
                             <textarea id="message" name="message"></textarea>
                             <label htmlFor="message">Message</label>
                         </div>
                     </div>
                     
                     
                     
                      <button className="btn btn-primary w-100" id="submit-form" type="button" name="submit-form">Contact Us</button>
                      
                      
                      
                 </form>
             </div>
             <div className="section4__right">
                <Image src={require('../dist/webImages/1.jpg')} alt="" />
             </div>
         </div>
      </section>
     
 </main>
  )
}

export default page