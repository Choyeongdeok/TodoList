import React, {Component} from 'react'
import './TodoItem.css'

class TodoItem extends Component { // TodoItem 컴포넌트
    //하나의 '할 일' 아이템 라고 생각
    render() {
        const {text, checked, id, onToggle, onRemove} = this.props //TodoItemList 컴포넌트로부터 받아옴
        return (
            //클릭시 체크되도록 전체영역을 onToggle로 감싸기
            <div className = "todo-item" onClick = {() => onToggle(id)}>
                <div className = "remove" onClick = {(e) => {
                    e.stopPropagation(); // 삭제 클릭 시에는 onToggle이 실행되지 않도록 함
                    //stopPropagation은 이벤트의 확산을 멈춰줌
                    //이게 없으면 삭제를 할 때 onRemove 후에 onToggle도 실행되어 삭제가 제대로 되지 않음                    
                    onRemove(id)}}>
                        &times; {/*삭제 클릭용 x버튼*/}
                </div>
                <div className = {`todo-text ${checked && 'checked'}`}>{/* checked = true 이면 css로 밑줄 생성
                'checked'를 추가한 이유는 css가 인식할 수 있도록
                */}
                    <div>{text}</div>
                </div>
                {
                    checked && (<div className = "check-mark">✓</div>) //checked = true 일 때 TodoItem 끝에 체크 표시 
                }
            </div>
        )
    }
}

export default TodoItem