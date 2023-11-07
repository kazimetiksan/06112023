import {
    Modal as RBModal
} from 'react-bootstrap'

import Button from './Button'

const Modal = ({
    title,
    body,
    show,
    handleClose
}) => {

    return (
        <RBModal show={show} onHide={() => {
            handleClose(false)
        }}>
            <RBModal.Header closeButton>
                <RBModal.Title>{title}</RBModal.Title>
            </RBModal.Header>
            <RBModal.Body>{body}</RBModal.Body>
            <RBModal.Footer>
                <Button title="Close" variant="secondary" onClick={() => {
                    handleClose(false)
                }} />
                <Button title="Confirm" variant="danger" onClick={() => {
                    handleClose(true)
                }} />
            </RBModal.Footer>
        </RBModal>
    )
}

export default Modal