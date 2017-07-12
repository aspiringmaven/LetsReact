import React from 'react';
import ReactDOM from 'react-dom';


class Counter extends React.Component {

    constructor() {
        super();
        this.state = {count:0};
    }

    update(e) {
        this.setState({'count' : this.state.count + 1});

    }

    render() {
        return (
            <div>
                <p>{this.state.count}</p>
                <button onClick={this.update.bind(this)} >
                    Click here!
                </button>
            </div>
            );
    }

}

export default Counter;