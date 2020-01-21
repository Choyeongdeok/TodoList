import React from 'react'
import './Form.css'

const Form = ({value, onChange, onCreate, onKeyPress}) => {
    return (
        <div className = "form">
            <input value = {value} onChange = {onChange} onKeyPress = {onKeyPress} placeholder = {'여기에 할 일을 입력하세요'}/>
            <div className = "create-button" onClick = {onCreate}>
                추가
            </div>
        </div>
    )
}

export default Form