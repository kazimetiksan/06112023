import { 
    Form 
} from "react-bootstrap"

import Button from './Button'

import { useState, useEffect } from "react"

import { signUp } from "./redux/dispatch"

const SignUp = () => {

    const [signupInfo, setSignupInfo] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        age: ""
    })

    useEffect(() => {

        console.log('signup Info', signupInfo)
    }, [signupInfo])

    const setUserInput = (key, value) => {

        setSignupInfo({
            ...signupInfo,
            [key]: value
        })
    }

    return (
        <div style={{
            margin: 50
        }}>
            <Form.Control placeholder="E-Mail" value={signupInfo.email} onChange={(e) => {
                setUserInput('email', e.target.value)
            }} />
            <Form.Control placeholder="Şifre" value={signupInfo.password} onChange={(e) => {
                setUserInput('password', e.target.value)
            }} />
            <Form.Control placeholder="Ad" value={signupInfo.firstName} onChange={(e) => {
                setUserInput('firstName', e.target.value)
            }} />
            <Form.Control placeholder="Soyad" value={signupInfo.lastName} onChange={(e) => {
                setUserInput('lastName', e.target.value)
            }} />
            <Form.Control placeholder="Yaş" value={signupInfo.age} onChange={(e) => {
                setUserInput('age', e.target.value)
            }} />
            <Button variant="primary" title="Kaydet" onClick={() => {

                signUp({
                    callback: () => {

                    },
                    signupInfo
                })
            }} />
        </div>
    )
}

export default SignUp