import {
    Modal as RBModal
} from 'react-bootstrap'

const Modal = () => {

    return (
        <RBModal show={show} onHide={handleClose}>
            <RBModal.Header closeButton>
                <RBModal.Title>Modal heading</RBModal.Title>
            </RBModal.Header>
            <RBModal.Body>Woohoo, you are reading this text in a modal!</RBModal.Body>
            <RBModal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
            </RBModal.Footer>
        </RBModal>
    )
}

export default Modal