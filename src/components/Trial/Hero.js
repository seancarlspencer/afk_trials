import React from 'react';
import check from "../../assets/checked.png"
import border from "../../assets/heroborder.png"

class Hero extends React.Component {

    render(){
        return <div className="hero-slot">
                    {this.props.name}
                    <div className="hero-icon-container">
                        <img className="hero-border" src={border}></img>
                        {/* {this.props.checked === 1 ? <div><img className="hero-check" src={check}></img></div> : <div></div>} */}
                        <img className="hero-icon" src={`/assets/champs/${this.props.name}.jpg`}></img>
                        {this.props.formation ? <div className="hero-position-formation">{this.props.number}</div>
                        : <div></div>
                        }
                        {!this.props.formation && this.props.number >=1 ? <div className="hero-position">{this.props.number}</div> : ""}
                    </div>
                </div>;
    }
}

export default Hero;