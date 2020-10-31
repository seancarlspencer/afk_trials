import React from 'react';
import List from '../List/List'
import Trial from '../Trial/Trial'
import trialsInfo from '../data/trials.json'

class Home extends React.Component {

    state = {
        active: "None",
        // activeHeroes: null
        activeHeroes: {
            herolist: null,
            checklist: null
        },
        activeLineup: null,
        activeStatue: null,
        heroPools: {},
        activeInfo: {
            statues: null
        }
    }

    setTrial(trial, pools, info){
        let temp = {
            herolist : null,
            checklist : null
        }
        this.setState({active: trial});
        this.setState({heroPools: pools});
        this.setState({activeInfo: info});
        this.setState({activeHeroes: temp});
    }

    statueClicked(trial, pool, check, lineup, statueNum){
        let temp = {
            herolist : pool,
            checklist : check
        }
        this.setState({active: trial});
        this.setState({activeHeroes: temp});
        this.setState({activeLineup: lineup});
        this.setState({activeStatue: statueNum});
        let currentHighlight = document.querySelector(".activeNum");
        if (currentHighlight){
            currentHighlight.classList.remove("activeNum");
        }
        let highlighted = document.querySelector(".number-"+statueNum);
        if(highlighted){
            highlighted.classList.add("activeNum");
        }
    }

    render(){
        return <div className="trial-outlet">
                    <div className="list_menu">
                        <div className="list-title"><span className="list-title-first">T</span>RIALS</div>
                        <List 
                            trialInfo = {trialsInfo["Ainz Ooal Gown"]}
                            setTrial = {this.setTrial.bind(this)}/>
                        {/* <List 
                            trialInfo = {trialsInfo["Raine"]}
                            setTrial = {this.setTrial.bind(this)}/> */}
                    </div>
                    {this.state.active == "None" ?
                        <div></div>
                            :
                        <div className="map">
                            <Trial 
                                statueClicked = {this.statueClicked.bind(this)}
                                activeInfo = {this.state.activeInfo}
                                activeHeroes = {this.state.activeHeroes}
                                activeStatue = {this.state.activeStatue}
                                activeLineup = {this.state.activeLineup}
                                active = {this.state.active}/>
                        </div>}
                </div>;
    }
}

export default Home;