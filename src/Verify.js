import { useParams } from "react-router-dom"

import { useEffect } from "react"

import { useNavigate } from "react-router-dom"

import axios from "axios"

import {
    Spinner
} from 'react-bootstrap'

const Verify = () => {

    const navigate = useNavigate()

    const {xauth} = useParams()
    console.log('verification auth', xauth)

    const checkVerification = () => {

        const url = '/api/checkVerification'
        axios.get(url, {
            headers: {
                xauth
            }
        })
        .then((response) => {
            console.log('verification status', response.status)

            if (response.status === 200) {
                navigate("/signin")
            }
        })
        .catch((error) => {
            console.log('verification error', error)

            // verify user
            setTimeout(() => {
                verifyUser()
            }, 3000)
            
        })
    }

    const verifyUser = () => {

        const url = '/api/verify'
        axios.get(url, {
            headers: {
                xauth
            }
        })
        .then((response) => {
            console.log('verify status', response.status)

            if (response.status === 202) {
                navigate("/signin")
            }
        })
        .catch((error) => {
            console.log('verify error', error)

            // verify user
        })
    }

    useEffect(() => {
        checkVerification()
    }, [])

    return (
        <div style={{
            margin: 50
        }}>
            <div>Verifying User</div>
            <div>
                <Spinner animation="border" variant="primary" />
            </div>
        </div>
    )
}

export default Verify