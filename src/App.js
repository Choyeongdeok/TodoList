import React, {Component} from 'react';
import TodoListTemplate from './components/TodoListTemplate'
import Form from './components/Form'
import TodoItemList from './components/TodoItemList'

class App extends Component{

    id = 3

    state = {
        input : '',
        todo : [
            { id: 0, text: '리액트 소개', checked: false },
            { id: 1, text: 'JSX 사용해보기', checked: true },
            { id: 2, text: '라이프 사이클 이해하기', checked: false }
        ]
    }

    handleChange = (e) => { //event가 발생할 때 value를 input으로 setState
        this.setState({
            input : e.target.value
            //event가 발생한 컴포넌트의 value
            //handlechange는 Form 컴포넌트에서 호출되고 Form의 value를 input으로 setState
        })
    }

    handleCreate = () => { //todo 생성
        const {input, todo} = this.state;
        this.setState({
            input : '',
            todo : todo.concat({ //concat은 새 배열을 만들어주기 때문에 최적화에 유용
                id : this.id++,
                text : input,
                checked : false
            })
        })
    }

    handleKeyPress = (e) => { //event를 발생시킨 키가 enter일때 handleCreate 호출
        if(e.key === 'Enter') {
            this.handleCreate();
        }
    }

    handleToggle = (id) => { //체크를 하거나 푸는 함수
        const {todo} = this.state //현재 상태의 todo배열 가져옴
        const index = todo.findIndex(todo => todo.id === id) //몇번째인지 index를 찾음
        //조건에 맞는 index를 반환
        const selected = todo[index]
        const nextTodo = [...todo]

        nextTodo[index] = {
          ...selected,
          checked : !selected.checked
        }

        this.setState({
          todo : nextTodo
        })
    }

    handleRemove = (id) => {
        const {todo} = this.state
        this.setState({
          todo : todo.filter(todo => todo.id !== id)
        })
        //삭제하려는 id와 일치하지 않는 todo.id만 반환
    }

    render() {

      const {input, todo} = this.state;
      const {
        handleChange,
        handleCreate,
        handleKeyPress,
        handleToggle,
        handleRemove
      } = this //비구조화 할당을 통해 함수 호출 시에 this.를 붙일 수고를 덜어줌
      return (
        <TodoListTemplate form = {<Form
            value = {input} //input의 내용
            onChange = {handleChange} //input 내용이 변경될 때 실행되는 함수
            onCreate = {handleCreate} //버튼이 클릭될 때 실행될 함수
            onKeyPress = {handleKeyPress}//input에서 enter키를 눌렀을 때 onCreate(버튼을 클릭)와 같은 효과
        />}>
          <TodoItemList todo = {todo} onToggle = {handleToggle} onRemove = {handleRemove}/> {/*TodoListTemplate 의 children */}
        </TodoListTemplate>
      )
    }
}

export default App;
