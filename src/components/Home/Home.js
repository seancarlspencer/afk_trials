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
        additionalLineups: {},
        activeStatue: null,
        heroPools: {},
        activeInfo: {
            statues: null
        },
        additionalShown: false
    }

    setTrial(trial, pools, info, index){
        let temp = {
            herolist : null,
            checklist : null
        }
        this.setState({active: trial});
        this.setState({heroPools: pools});
        this.setState({activeInfo: info});
        this.setState({activeHeroes: temp});
        this.setState({activeLineup: null});
        this.setState({activeStatue: null});
        let currentHighlight = document.querySelector(".activeNum");
        if (currentHighlight){
            currentHighlight.classList.remove("activeNum");
        }
        currentHighlight = document.querySelector(".activeTrial");
        if (currentHighlight){
            currentHighlight.classList.remove("activeTrial");
        }
        let highlighted = document.querySelector(".list-item-"+index+" .list-item");
        if(highlighted){
            highlighted.classList.add("activeTrial");
        }
    }

    statueClicked(trial, pool, check, lineup, additional, statueNum){
        let temp = {
            herolist : pool,
            checklist : check
        }
        this.setState({active: trial});
        this.setState({activeHeroes: temp});
        this.setState({activeLineup: lineup});
        this.setState({additionalLineups: (additional ? additional : {})});
        this.setState({activeStatue: statueNum});
        let currentHighlight = document.querySelector(".activeNum");
        if (currentHighlight){
            currentHighlight.classList.remove("activeNum");
        }
        let highlighted = document.querySelector(".number-"+statueNum);
        if(highlighted){
            highlighted.classList.add("activeNum");
        }
        this.hideAdditional();
    }

    showAdditional(){
        this.setState({additionalShown : true});
    }

    hideAdditional(){
        this.setState({additionalShown : false});
    }
    
    componentDidMount(){
        let temp = trialsInfo["Mortas"];
        let pools = {
            pool1 : temp.pool1,
            pool2 : temp.pool2,
            pool3 : temp.pool3,
        }
        this.setTrial("Mortas", pools, temp, 0);
    }

    render(){
        return <div className="trial-outlet">
                    <div className="list_menu">
                        <div className="list-title"><span className="list-title-first">T</span>RIALS</div>
                        <List 
                            trialInfo = {trialsInfo["Mortas"]}
                            setTrial = {this.setTrial.bind(this)}
                            index = {0}/>
                        <List 
                            trialInfo = {trialsInfo["Silas"]}
                            setTrial = {this.setTrial.bind(this)}
                            index = {1}/>
                    </div>
                    {this.state.active == "None" ?
                        <div></div>
                            :
                        <div className="map">
                            <Trial 
                                statueClicked = {this.statueClicked.bind(this)}
                                showAdditional = {this.showAdditional.bind(this)}
                                hideAdditional = {this.hideAdditional.bind(this)}
                                additionalShown = {this.state.additionalShown}
                                activeInfo = {this.state.activeInfo}
                                activeHeroes = {this.state.activeHeroes}
                                activeStatue = {this.state.activeStatue}
                                activeLineup = {this.state.activeLineup}
                                additionalLineups = {this.state.additionalLineups}
                                active = {this.state.active}/>
                        </div>}
                </div>;
    }
}

export default Home;