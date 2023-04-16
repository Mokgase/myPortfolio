import React, { Component } from 'react'
import aboutMe from './public/image/aboutMe.png'

class About extends Component {
    render() {
        return (
            <section id="container-about" className="container-about">
                    <h1>About Me</h1> 

                    <img src={aboutMe} width="180" height="180" alt="aboutMe"/>
                    <p>I've recently completed my academic course studying Information Technology(System Development),
                         and awaiting graduation at WeThinkCode_.I also have completed a Higher Certificate in IT(Information Systems) 
                         through Eduvos, previously known as Pearson Institute of Higher Education which I completed in 2019.
                          I have experience in Java, Python, Dart, JavaScript, SQL, Html & CSS,and frameworks such as React, Thymeleaf, 
                          and I'm aspiring, and working towards becoming a fullstack developer. 
                          I'm passionate about learning more about any new technologies.<br/>
                    <br/>                       
                    </p>
                
            </section>
        )
    }
}

export default About
