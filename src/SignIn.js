import {
    Form
} from "react-bootstrap"

import Button from './Button'

import { useState } from "react"

import { useNavigate } from "react-router-dom"

import {
    signIn
} from './redux/dispatch'

const SignIn = () => {

    const navigate = useNavigate()

    const [userInfo, setUserInfo] = useState({
        email: "",
        password: ""
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
            <Button variant="primary" title="Giriş Yap" onClick={() => {

                signIn({
                    callback: () => {
                        navigate("/")
                    },
                    userInfo
                })

            }} />
        </div>
    )
}

export default SignIn