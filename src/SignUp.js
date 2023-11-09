import { 
    Form 
} from "react-bootstrap"

import Button from './Button'

import { useState } from "react"

import { useNavigate } from "react-router-dom"

import {
    signUp
} from './redux/dispatch'

const SignUp = () => {

    const navigate = useNavigate()

    const [userInfo, setUserInfo] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        age: ""
    })

    const setUserInput = (key, value) => {

        setUserInfo({
            ...userInfo,
            [key]: value
        })
    }

    return (
        <div style={{
            margin: 50
        }}>
            <Form.Control placeholder="E-Mail" value={userInfo.email} onChange={(e) => {
                setUserInput('email', e.target.value)
            }} />
            <Form.Control placeholder="Şifre" value={userInfo.password} onChange={(e) => {
                setUserInput('password', e.target.value)
            }} />
            <Form.Control placeholder="Ad" value={userInfo.firstName} onChange={(e) => {
                setUserInput('firstName', e.target.value)
            }} />
            <Form.Control placeholder="Soyad" value={userInfo.lastName} onChange={(e) => {
                setUserInput('lastName', e.target.value)
            }} />
            <Form.Control placeholder="Yaş" value={userInfo.age} onChange={(e) => {
                setUserInput('age', e.target.value)
            }} />
            <Button variant="primary" title="Kaydet" onClick={() => {

                signUp({
                    callback: () => {
                        navigate("/signin")
                    },
                    userInfo
                })                
            }} />
        </div>
    )
}

export default SignUp