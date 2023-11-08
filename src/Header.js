import { useRedux } from "./redux/hooks"

const Header = () => {

    const { profile } = useRedux()

    return (
        <div>
            Hello {profile.firstName} {profile.lastName}
        </div>
    )
}

export default Header