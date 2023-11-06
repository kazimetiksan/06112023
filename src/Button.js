import {
    Button as RBButton
} from 'react-bootstrap'

const Button = ({
    onClick,
    title,
    variant='secondary'
}) => {

    return (
        <RBButton variant={variant} onClick={onClick}>{title}</RBButton>
    )
}

export default Button