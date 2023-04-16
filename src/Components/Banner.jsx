import React, { Component } from 'react'
import geekLogo from '../Components/public/image/geekLogo.png';




class Banner extends Component {
    render() {
        return (
            <section className="container-banner">

                    <a href="#home"><img id="profilepic" src={geekLogo}  width="170" height="170" alt="profilepic"/></a>
                    <h1>Hello I am Mokgase Thapelo Mmakola. </h1>
                    <h1>An aspiring full stack developer.</h1>
                    <p id="paragarph1">I'm a junior software developer aspiring to become a full stack developer</p> <br/> 
                    <br/>
            </section>
        )
    }
}

export default Banner


