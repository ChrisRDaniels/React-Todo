import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state= {
            item: ''
        };
    }

    handleChanges = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.addTodo(this.state.item);
    };

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text" 
                    value={this.item} 
                    name="item" 
                    placeholder="Add a new chore"
                    onChange={this.handleChanges} 
                />
                <button>Add Chore</button>
            </form>
        );
    }
}

export default TodoForm;