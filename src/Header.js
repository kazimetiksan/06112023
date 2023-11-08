import { useRedux } from "./redux/hooks"

import Button from "./Button"

import { signOut } from "./redux/dispatch"

import { useNavigate } from "react-router-dom"

const Header = () => {

    const navigate = useNavigate()

    const { profile, isLoggedIn } = useRedux()

    return (
        <div style={{
            margin: 20
        }}>
        {
            isLoggedIn() ? (
                <div>
                    <div>Hello {profile?.firstName} {profile?.lastName}</div>
                    <Button variant="danger" title="Çıkış Yap" onClick={() => {
                        signOut()
                    }} />
                </div>
            ) : (
                <div>
                    <Button variant="success" title="Giriş Yap" onClick={() => {
                        navigate("/signin")
                    }} />
                </div>
            )
        }
        </div>
    )
}

export default Header