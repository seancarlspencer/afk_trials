import React from 'react';
import Statue from './Statue';

class TrialMap extends React.Component {

    render(){
        console.log(this.props.activeInfo);
        if(this.props.activeInfo.statues == null){
            return <div></div>;
        }
        return <div className="map-container">
                    <img src = {require(`../../assets/maps/${this.props.active}.png`)} className="map" />
                    {Object.keys(this.props.activeInfo.statues).map((statue, index) => {
                        console.log(this.props.activeInfo[this.props.activeInfo.statues[statue].pool]);
                        return <div><img
                        src={require(`../../assets/tower basic.png`)}
                        onClick = {()=>this.props.statueClicked(this.props.activeInfo.name, this.props.activeInfo[this.props.activeInfo.statues[statue].pool], this.props.activeInfo.statues[statue].checked, this.props.activeInfo.statues[statue].lineup, statue)}
                        className="image"
                        style={{
                            top: this.props.activeInfo.statues[statue].top,
                            left: this.props.activeInfo.statues[statue].left
                        }} /><span
                        className="number"
                        style={{
                            top: this.props.activeInfo.statues[statue].top,
                            left: `calc(${this.props.activeInfo.statues[statue].left} - 20px)`
                        }}>{statue}</span>
                        </div>
                        return <img
                        src={require(`../../assets/tower basic.png`)}
                        onClick = {()=>this.props.statueClicked(this.props.activeInfo.name, this.props.activeInfo[this.props.activeInfo.statues[statue].pool], this.props.activeInfo.statues[statue].checked, this.props.activeInfo.statues[statue].lineup)}
                        className="image"
                        style={{
                            top: this.props.activeInfo.statues[statue].top,
                            left: this.props.activeInfo.statues[statue].left
                        }} />
                        //     Statue #{index+1}
                        // </div>
                        // return <div onClick = {()=>this.props.statueClicked(this.props.activeInfo.name, this.props.activeInfo[this.props.activeInfo.statues[statue].pool], this.props.activeInfo.statues[statue].checked)}>
                        //     Statue #{index+1}
                        // </div>
                    })}
                </div>;
    }
}

export default TrialMap;