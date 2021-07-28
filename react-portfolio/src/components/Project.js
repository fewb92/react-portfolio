import React from 'react'
import headshot from '../assets/images/headshot.png'

export default function Project() {
    return (
        <div>
            <main>
                <section id="#about" class="about-section">
                    <h2 class="about-title">A B O U T </h2>
                    
                    <figure class="headshot-container">
                        <img class="headshot" src={headshot} alt="A photo of Josh"></img>
                    </figure>  
                    <h2>Joshua Soto</h2><h3>Operations Manager, Photographer, Crypto Trader</h3> 
                    
                    <p>Joshua Soto is a New York City born, Bronx raised Latino who attended Baruch College. Throughout his career he has worked in a number of projects and roles which have earned him experience in logistics, finance/accounting, sales, client relations and more. In his previous role he served as Operations & Accounts Manager for a Berlin based fashion textile company beginning to emerge in the US market. In just under two years Joshua helped generate roughly $3M in revenue while servicing distributors, large key accounts, and all wholesale and end-consumer business in North & South America. Joshua joined Hopeland as Operations Manager to enrich and help the lives of those in need. The faces of children he's never met who wish and hope for a better life are the faces that motivate him every day to build a better future for children without families.
                    Joshua plans to give back to the Bronx community one day, when he is capable.</p>
                </section>
                <section id="work" class="work-section">
                    <h2 class="work-title"> W O R K </h2>
                    <div class="past-work">
                        <a href="https://fewb92.github.io/css-cheat-sheet/" target="_blank" class="most-recent-project">
                            <div class="project-title">
                                <span class="project-link">CSS Cheat Sheet</span>
                            </div>
                        </a>
                        <div id="placeholder-image" class="project">
                            <div class="mini-project-title">
                                <a href="https://fewb92.github.io/css-cheat-sheet/" class="project-link">CSS Cheat Sheet</a>
                            </div>
                        </div>
                        <div id="placeholder-image" class="project">
                            <div class="mini-project-title">
                                <a href="https://fewb92.github.io/css-cheat-sheet/" class="project-link">CSS Cheat Sheet</a>
                            </div>
                        </div>
                        <div id="placeholder-image" class="project">
                            <div class="mini-project-title">
                                <a href="https://fewb92.github.io/css-cheat-sheet/" class="project-link">CSS Cheat Sheet</a>
                            </div>
                        </div>
                        <div id="placeholder-image" class="project">
                            <div class="mini-project-title">
                                <a href="https://fewb92.github.io/css-cheat-sheet/" class="project-link">CSS Cheat Sheet</a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}
