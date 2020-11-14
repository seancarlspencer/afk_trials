import React from 'react';
import List from '../List/List'
import Trial from '../Trial/Trial'
import trialsInfo from '../data/trials.json'

class Navbar extends React.Component {
    render(){
        return <div className="list_menu">
                    <div className="list-title"><span className="list-title-first">T</span>RIALS</div>
                    <List 
                        trialInfo = {trialsInfo["Pippa"]}
                        setTrial = {this.setTrial.bind(this)}
                        index = {0}/>
                    <List 
                        trialInfo = {trialsInfo["Ainz Ooal Gown"]}
                        setTrial = {this.setTrial.bind(this)}
                        index = {1}/>
                    <List 
                        trialInfo = {trialsInfo["Albedo"]}
                        setTrial = {this.setTrial.bind(this)}
                        index = {2}/>
                    {/* <List 
                        trialInfo = {trialsInfo["Raine"]}
                        setTrial = {this.setTrial.bind(this)}/> */}
            </div>;
    }
}

export default Navbar;