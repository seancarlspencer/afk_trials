import React from 'react';
import Hero from './Hero';

class TrialHeroes extends React.Component {

    render(){

        if(this.props.activeHeroes.herolist == null){
            return <div></div>;
        }
        return <div className="heroes-container">
            {/* <div className="statue-title">
                Statue #{this.props.activeStatue} Solution
            </div> */}
                <div className="hero-container">
                    <div className="hero-formation-container">
                        <div className="backline">
                            {this.props.activeLineup.map((hero, index) =>{
                                if(index < 2){
                                    return;
                                }
                                return <Hero 
                                        checked = {false}
                                        name = {this.props.activeHeroes.herolist[hero-1]}/>
                            })}
                        </div>
                        <div className="frontline">
                            {this.props.activeLineup.map((hero, index) =>{
                                if(index >= 2){
                                    return;
                                }
                                return <Hero 
                                        checked = {false}
                                        name = {this.props.activeHeroes.herolist[hero-1]}/>
                            })}
                        </div>
                    </div>
                    <div className="hero-row-container">
                        <div className="hero-row">
                            {this.props.activeHeroes.herolist.map((hero, index) =>{
                                if(index > 4){
                                    return;
                                }
                                console.log(this.props.activeLineup.indexOf(index+1));
                                return <Hero 
                                        checked = {this.props.activeHeroes.checklist[index]}
                                        number = {this.props.activeLineup.indexOf(index+1) != -1 ? this.props.activeLineup.indexOf(index+1) + 1 : null}
                                        name = {hero}/>
                            })}
                        </div>
                        <div className="hero-row">
                            {this.props.activeHeroes.herolist.map((hero, index) =>{
                                if(index < 5){
                                    return;
                                }
                                return <Hero 
                                        checked = {this.props.activeHeroes.checklist[index]}
                                        number = {this.props.activeLineup.indexOf(index+1) != -1 ? this.props.activeLineup.indexOf(index+1) + 1 : null}
                                        name = {hero}/>
                            })}
                        </div>
                    </div>
                    
                </div>
            </div>;
    }
}

export default TrialHeroes;