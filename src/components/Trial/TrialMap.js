import React from 'react';
import Statue from './Statue';

class TrialMap extends React.Component {

    highlightStatue(index){
        let currentHighlight = document.querySelector(".activeImg");
        if (currentHighlight){
            currentHighlight.classList.remove("activeImg");
        }
        let highlighted = document.querySelector(".image-"+index);
        if(highlighted){
            highlighted.classList.add("activeImg");
        }
    }
    unHighlightStatue(index){
        let currentHighlight = document.querySelector(".activeImg");
        if (currentHighlight){
            currentHighlight.classList.remove("activeImg");
        }
    }

    render(){
        if(this.props.activeInfo.statues == null){
            return <div></div>;
        }
        return <div className="map-container">
                    <div className="trial-notification-mobile">Click on any <span className="highlight">statue</span> to reveal the winning formation below:</div>
                    <img src = {require(`../../assets/maps/${this.props.active}.png`)} className="map" />
                    {Object.keys(this.props.activeInfo.statues).map((statue, index) => {
                        return <div
                        className="statue-click-div"
                        onMouseEnter = {()=>this.highlightStatue(index)}
                        onMouseLeave = {()=>this.unHighlightStatue(index)}
                        onClick = {()=>this.props.statueClicked(this.props.activeInfo.name, this.props.activeInfo[this.props.activeInfo.statues[statue].pool], this.props.activeInfo.statues[statue].checked, this.props.activeInfo.statues[statue].lineup, this.props.activeInfo.statues[statue].additional, statue)}>
                            <img
                            src={require(`../../assets/tower basic.png`)}
                            className={`image image-${index}`}
                            style={{
                                top: `calc(calc(${this.props.activeInfo.statues[statue].top} / 901) * var(--trial-height))`,
                                left: `calc(calc(${this.props.activeInfo.statues[statue].left} / 1422) * var(--trial-width))`
                                // top: `calc(${this.props.activeInfo.statues[statue].top} * calc(var(--trial-w) / 1422))`,
                                // left: `calc(${this.props.activeInfo.statues[statue].left} * calc(var(--trial-w) / 1422))`
                            }} />
                            <span
                            className={`number-${index+1}`}
                            style={{
                                top: `calc(calc(${this.props.activeInfo.statues[statue].top} / 901) * var(--trial-height) + calc(calc(var(--trial-w) / 1422) * 50px))`,
                                left: `calc(calc(${this.props.activeInfo.statues[statue].left} / 1422) * var(--trial-width) - calc(calc(var(--trial-w) / 1422) * 25px))`
                                // top: `calc(calc(${this.props.activeInfo.statues[statue].top} * calc(var(--trial-w) / 1422)) + calc(calc(var(--trial-w) / 1422) * 50px))`,
                                // left: `calc(calc(${this.props.activeInfo.statues[statue].left} * calc(var(--trial-w) / 1422)) - calc(calc(var(--trial-w) / 1422) * 25px))`
                            }}>{statue}</span>
                        </div>
                        // return <img
                        // src={require(`../../assets/tower basic.png`)}
                        // onClick = {()=>this.props.statueClicked(this.props.activeInfo.name, this.props.activeInfo[this.props.activeInfo.statues[statue].pool], this.props.activeInfo.statues[statue].checked, this.props.activeInfo.statues[statue].lineup)}
                        // className="image"
                        // style={{
                        //     top: this.props.activeInfo.statues[statue].top,
                        //     left: this.props.activeInfo.statues[statue].left
                        // }} />
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