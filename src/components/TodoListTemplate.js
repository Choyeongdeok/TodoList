import React from 'react'
import './TodoListTemplate.css'

const TodoListTemplate = ({form, children}) => { //App 컴포넌트에서 form, children 받아옴
    return (
        <main className = "todo-list-template">
            <div className = "title">
                오늘 할 일
            </div>
            <section className = "form-wrapper">
                {form}
            </section>
            <section className = "todo-wrapper">
                {children}
            </section>
        </main>
    )
}

export default TodoListTemplate