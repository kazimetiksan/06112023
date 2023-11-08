import { useRedux } from "./redux/hooks"

import Button from "./Button"

import { signOut } from "./redux/dispatch"

const Header = () => {

    const { profile } = useRedux()

    return (
        <div style={{
            margin: 20
        }}>
            Hello {profile.firstName} {profile.lastName}
            <Button variant="danger" title="Çıkış Yap" onClick={() => {
                signOut()
            }} />
        </div>
    )
}

export default Header