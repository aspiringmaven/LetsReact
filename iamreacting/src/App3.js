import React from 'react';

/**
 * This Component will have PROPS declaration and define value
 */

class Project extends React.Component {

    render () {
        return (
            <div>
                <div>Project Name : {this.props.name}</div>
                <div>Project Code : {this.props.code}</div>
                <div>Project Team : {this.props.team}</div>
                <div>Team Size    : {this.props.teamSize("what to do")} </div>
                <div>Technology Stack: {this.props.printStack(this.props.stack)} </div>


            </div>
        );
    }

}

/**
 * To declare the properties in React Component
 */

Project.propTypes  = {
   code : React.PropTypes.number,
   name : React.PropTypes.string,
   team : React.PropTypes.array.isRequired,
   teamSize : React.PropTypes.func,
   stack : React.PropTypes.object,
   printStack : React.PropTypes.func
}

/**
 * Defining default values for properties
 */
Project.defaultProps = {
    code : 11111,
    name : "Empower USA",
    team : ["Surendar ", "Deepak ", "Sumit " ],
    teamSize : function (dummy) {
        return "I do not know " + dummy;
    },
    stack : {
        frontend : "React Java",
        service : "Spring Boot",
        architecture : "Microservices",
        infra : "AWS",
        db : "Oracle"
    },
    printStack : function (stack) {
        return JSON.stringify(stack);
    }
}

export default Project;