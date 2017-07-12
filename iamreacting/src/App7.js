import React from 'react';

class Parent extends React.Component {

    constructor() {
        super();
        this.state = {
            msg : 'This is state of parent component'
        };

        this.update = this.update.bind(this);
    }

    update(e) {
        this.setState( {
            msg : e.target.value
        });
    }

    render() {
        return (
            <div>
                <Child data = {this.state.msg} fun = {this.update}/>
            </div>
        );

    }
}

class Child extends React.Component {

    render() {
       return( <div>
            <p>{this.props.data}</p>
            <input type="text" onChange={this.props.fun}/>
       </div> );
    }


}


export default Parent;