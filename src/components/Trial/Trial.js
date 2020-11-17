import React from 'react';
import TrialMap from './TrialMap'
import TrialHeroes from './TrialHeroes';

class Trial extends React.Component {

    render(){
        return <div className="trial-container">
                    {/* <div className="trial-header">{this.props.active}'s Trial</div> */}
                    <div className="trial-notification">Click on any <span className="highlight">statue</span> to reveal the winning formation below:</div>
                    <TrialMap
                        statueClicked = {this.props.statueClicked.bind(this)}
                        activeInfo = {this.props.activeInfo}
                        active = {this.props.active}/>
                    <TrialHeroes 
                        activeLineup = {this.props.activeLineup}
                        additionalLineups = {this.props.additionalLineups}
                        activeStatue = {this.props.activeStatue}
                        activeHeroes = {this.props.activeHeroes}/>
                </div>;
    }
}

export default Trial;