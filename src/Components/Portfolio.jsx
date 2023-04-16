import React, { Component } from 'react'
import randomiser from '../Components/public/image/randomiser.png';
import JavaScript_Technical_Documentation_Page from '../Components/public/image/JavaScript_Technical_Documentation_Page.png';
import Blonded from '../Components/public/image/Blonded.png';


class Portfolio extends Component {
    render() {
        return (
            <section className="projects">
                  <h1 id='Portfolio'>Portfolio</h1>
                  <p>Here are some of the projects I've managed to complete.</p>


                <div className="container">
                        <a href="https://github.com/Mokgase/RandomiserProgram"><img src={randomiser} width="200" height="200" alt="Randomiser"/><p>Randomiser</p></a>
                        <a href="https://github.com/Mokgase/JavaScript_Technical_Documentation_Page"><img src={JavaScript_Technical_Documentation_Page} width="200" height="200" alt="JavaScript Technical Documentation Page"/><p>JavaScript-Technical-Documentation</p></a>
                        <a href="https://github.com/Mokgase/Blonded_Survey_From"><img src={Blonded} width="200" height="200" alt="Blonded"/><p>Frank Ocean Blonded survey form</p></a>
                </div>
            </section>
        )
    }
}

export default Portfolio


