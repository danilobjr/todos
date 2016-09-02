import React from 'react'

class App extends React.Component {
    constructor() {
        super();

        this.todos = [
            {
                id: 1,
                description: 'talk to John',
                completed: false
            },
            { 
                id: 2,
                description: 'buy some fruits',
                completed: true
            }
        ]
    }

    render() {
        return (
            <ul>
                {this.renderTodos()}
            </ul>
        );
    }

    renderTodos() {
        return this.todos.map(todo =>
            <li key={todo.id}>
                <input type="checkbox" onClick={(e) => console.log(e.target.checked)}/>
                <label>{todo.description}</label>
            </li>
        );
    }
}

export {
    App
}
