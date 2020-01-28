import React from 'react';

class Hello extends React.Component {
    render() {
        return (
            <div>
                <input type='checkbox' onChange={this.props.toggleCheck.bind(this, this.props.todo.title)} checked={this.props.todo.isCompleted} />
                <p className={this.props.todo.isCompleted ? 'strike' : ''}>{this.props.todo.title}</p>
            </div>
        );
    }
}

export default Hello;
