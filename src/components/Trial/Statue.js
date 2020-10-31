import React from 'react';

class Statue extends React.Component {

    render(){
        return <div>
                    Statue #{this.props.index}
                </div>;
    }
}

export default Statue;