import React from 'react';
import Hero from './Hero';

class TrialHeroes extends React.Component {

    render(){

        if(this.props.activeHeroes.herolist == null){
            return <div className="heroes-container">
                <div className="heroes-select-statue">
                    Click on any of the statues above.
                </div>
            </div>;
        }
        return <div className="heroes-container">
            {/* <div className="statue-title">
                Statue #{this.props.activeStatue} Solution
            </div> */}
                <div className="hero-container">
                    {!this.props.additionalShown && Object.keys(this.props.additionalLineups).length > 0 ? 
                    <div onClick={()=>this.props.showAdditional()} className="hero-additional-trigger">
                        View Additional Lineups
                    </div>
                    :
                    Object.keys(this.props.additionalLineups).length > 0 ? 
                    <div className="nothing"></div>
                    :
                    <div className="hero-additional-trigger inactive">
                        No Additional Lineups
                    </div>
                    }
                    {this.props.additionalShown ? 
                    <div className="additional-container">
                        <hr />
                        {Object.keys(this.props.additionalLineups).map((lineup,index)=>{
                            let temp = this.props.additionalLineups[lineup];
                            return <div className="additional-heroes-container">
                            <div className="hero-formation-container">
                                <div className="backline">
                                    {temp.map((hero, index) =>{
                                        if(index < 2){
                                            return;
                                        }
                                        return <Hero 
                                                checked = {false}
                                                formation = {true}
                                                number = {temp.indexOf(hero) != -1 ? temp.indexOf(hero) + 1 : null}
                                                name = {this.props.activeHeroes.herolist[hero-1]}/>
                                    })}
                                </div>
                                <div className="frontline">
                                    {temp.map((hero, index) =>{
                                        if(index >= 2){
                                            return;
                                        }
                                        return <Hero 
                                                checked = {false}
                                                formation = {true}
                                                number = {temp.indexOf(hero) != -1 ? temp.indexOf(hero) + 1 : null}
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
                                        return <Hero 
                                                checked = {temp.indexOf(index+1) != -1}
                                                number = {temp.indexOf(index+1) != -1 ? temp.indexOf(index+1) + 1 : null}
                                                name = {hero}/>
                                    })}
                                </div>
                                <div className="hero-row">
                                    {this.props.activeHeroes.herolist.map((hero, index) =>{
                                        if(index < 5){
                                            return;
                                        }
                                        return <Hero 
                                                checked = {temp.indexOf(index+1) != -1}
                                                number = {temp.indexOf(index+1) != -1 ? temp.indexOf(index+1) + 1 : null}
                                                name = {hero}/>
                                    })}
                                </div>
                            </div>
                        </div>
                        })}
                    </div>:
                    <div className="nothing"></div>}
                    <div className="hero-formation-container">
                        <div className="backline">
                            {this.props.activeLineup.map((hero, index) =>{
                                if(index < 2){
                                    return;
                                }
                                return <Hero 
                                        checked = {false}
                                        formation = {true}
                                        number = {this.props.activeLineup.indexOf(hero) != -1 ? this.props.activeLineup.indexOf(hero) + 1 : null}
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
                                        formation = {true}
                                        number = {this.props.activeLineup.indexOf(hero) != -1 ? this.props.activeLineup.indexOf(hero) + 1 : null}
                                        name = {this.props.activeHeroes.herolist[hero-1]}/>
                            })}
                        </div>
                    </div>
                    <div className="hero-solution">
                        <div className="hero-solution-text">
                            Statue #{this.props.activeStatue} Solution
                        </div>
                        <div className="hero-solution-border">
                        </div>
                    </div>
                    <div className="hero-row-container">
                        <div className="hero-row">
                            {this.props.activeHeroes.herolist.map((hero, index) =>{
                                if(index > 4){
                                    return;
                                }
                                return <Hero 
                                        checked = {this.props.activeLineup.indexOf(index+1) != -1}
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
                                        checked = {this.props.activeLineup.indexOf(index+1) != -1}
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