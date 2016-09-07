import React, { PropTypes } from 'react'
import classNames from 'classnames'
import { IncompleteTodosCount, Filters, ClearCompletedButton } from 'components'
import { propTypes } from 'utils'

const getCssClasses = props =>
    classNames(
        'footer', 
        { hidden: props.todos.length === 0 }
    )

const Footer = props => 
    <footer className={getCssClasses(props)}>
        <IncompleteTodosCount todos={props.todos} />
        <Filters />
        <ClearCompletedButton
            hidden={isClearCompletedButtonHidden(props)}
            onClick={props.onClickClearCompletedButton} 
        />
    </footer>   

const isClearCompletedButtonHidden = props =>
    props.todos.every(todo => !todo.completed)

Footer.propTypes = {
    todos: propTypes.todosRequired,
    onClickClearCompletedButton: PropTypes.func.isRequired
};

export {
    Footer
}
