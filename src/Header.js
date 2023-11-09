import Button from "./Button"

import { useRedux } from "./redux/hooks"

import { signOut } from "./redux/dispatch"

import { useNavigate } from "react-router-dom"

const Header = () => {

    const navigate = useNavigate()

    const {
        isLoggedIn,
        profile
    } = useRedux()

    return (
        <div style={{
            margin: 20
        }}>
            {
                isLoggedIn() ? (
                    <div>
                        Hoşgeldin {profile?.firstName} {profile?.lastName}
                        {!profile?.isVerified && "Henüz Doğrulanmadı"}
                        <Button title="Çıkış Yap" variant="danger" onClick={() => {
                            // signOut
                            signOut()
                        }} />
                    </div>
                ) : (
                    <div>
                        <Button title="Giriş Yap" variant="success" onClick={() => {
                            // signIn
                            navigate("/signin")
                        }} />
                    </div>
                )
            }

        </div>
    )
}

export default Header