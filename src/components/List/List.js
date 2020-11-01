import React from 'react';

class List extends React.Component {
    constructor(props){
        super(props);
        this.pools = {
            pool1 : this.props.trialInfo.pool1,
            pool2 : this.props.trialInfo.pool2,
            pool3 : this.props.trialInfo.pool3,
        }
    }
    render(){
        return <div className={`list-item-container list-item-${this.props.index}`}
                    onClick={()=>this.props.setTrial(this.props.trialInfo.name,this.pools, this.props.trialInfo, this.props.index)}>
                    <p className="list-item">
                        <a>{this.props.trialInfo.name}</a>
                    </p>
                </div>;
    }
}

export default List;