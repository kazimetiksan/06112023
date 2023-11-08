import { 
    Form 
} from "react-bootstrap"

import Button from './Button'

import { useState, useEffect } from "react"

import { signIn } from "./redux/dispatch"

import { useNavigate } from "react-router-dom"

const SignIn = () => {

    const navigate = useNavigate()

    const [signinInfo, setSigninInfo] = useState({
        email: "",
        password: ""
    })

    const setUserInput = (key, value) => {

        setSigninInfo({
            ...signinInfo,
            [key]: value
        })
    }

    return (
        <div style={{
            margin: 50
        }}>
            <Form.Control placeholder="E-Mail" value={signinInfo.email} onChange={(e) => {
                setUserInput('email', e.target.value)
            }} />
            <Form.Control placeholder="Şifre" value={signinInfo.password} onChange={(e) => {
                setUserInput('password', e.target.value)
            }} />
            <Button variant="primary" title="Giriş Yap" onClick={() => {

                signIn({
                    callback: () => {
                        navigate("/")
                    },
                    signinInfo
                })
            }} />
        </div>
    )
}

export default SignIn