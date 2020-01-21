import React, {Component} from 'react'
import TodoItem from './TodoItem'
class TodoItemList extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        //컴포넌트가 리렌더링을 할지 말지 정함 디폴트값은 true
        return this.props.todo !== nextProps.todo;
    }
    render() {
        //비구조화 할당
        const {todo, onToggle, onRemove} = this.props

        const todoList = todo.map(
            ({id, text, checked}) => ( //todo 배열은 id, text, checked 객체로 구성
                <TodoItem
                    id = {id}
                    text = {text}
                    checked = {checked}
                    onToggle = {onToggle}
                    onRemove = {onRemove}
                    key = {id} //배열을 렌더링할 때는 key값이 필요하거나 map함수의 index 이용
                />
            )
        )
        /* const todoList = todo.map(
            (todo) => {
                <TodoItem
                    {...todo}
                    onToggle = {onToggle}
                    onRemove = {onRemove}
                    key = {todo.id}
                />
            }
        )*/

        return (
            <div>
                {todoList}
            </div>
        )
    }
}

export default TodoItemList