import React from 'react';
/**
 * Component with Prop
 */
class Developer extends React.Component {

    render () {
        return (
            <div>created by: {this.props.author}</div>
            );
    }
}

export default Developer; 