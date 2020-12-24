import React, { Component } from 'react'
import PropTypes from 'prop-types';


export class TodoItem extends Component {
    getStyle = () => {
        //longway
        // if(this.props.todo.completed){
        //     return {
        //         textDecoration: 'line-through'
        //     }
        // }else{
        //     return {
        //         textDecoration: 'none'
        //     }
        // }
        //shortway
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }


    // arrow function bind to this automatically

    
    render() {
        const { id, title } = this.props.todo;
        return (
            // <div style={{backgroundColor: '#f4f4f4'}}>
            //     <p>{this.props.todo.title}</p>
            // </div>
        // <div style={itemStyle}>
        //     <p>{this.props.todo.title}</p>
        // </div>
        <div style={this.getStyle()}>
            <p>
                <input type='checkbox' onChange={this.props.markComplete.bind(this, id) } />{' '}
                {title}</p>
                <button onClick={this.props.delTodo.bind(this, id)} style={bntStyle}>x</button>
        </div>
    )
    }
}
//PropTypes sections
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired  }

const bntStyle = {
    background: '#FF0000',
    color: '#FFF',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}
// const itemStyle={
//     backgroundColor: '#f4f4f4'
// }


export default TodoItem
