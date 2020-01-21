import React, {Component} from 'react'
import './TodoItem.css'

class TodoItem extends Component {
    render() {
        const {text, checked, id, onToggle, onRemove} = this.props
        return (
            <div className = "todo-item" onClick = {() => onToggle(id)}>
                <div className = "remove" onClick = {(e) => {
                    e.stopPropagation(); //onToggle이 실행되지 않도록 함
                    //stopPropagation은 이벤트의 확산을 멈춰줌
                    //이게 없으면 삭제를 할 때 onRemove 후에 onToggle도 실행되어 삭제가 제대로 되지 않음                    
                    onRemove(id)}}>
                        &times;
                </div>
                <div className = {`todo-text ${checked && 'checked'}`}>
                    <div>{text}</div>
                </div>
                {
                    checked && (<div className = "check-mark">✓</div>)
                }
            </div>
        )
    }
}

export default TodoItem