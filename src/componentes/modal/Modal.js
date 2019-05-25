import React, { PureComponent } from 'react';
import ReactModal from 'react-modal';

ReactModal.defaultStyles.overlay.backgroundColor = 'cornsilk';

class Modal extends PureComponent {
    constructor(props) {
        super(props);

    }

    render() {
        const {
            isOpen,
            onRequestClose,
            contentLabel
        } = this.props;

        return (
            <ReactModal
                isOpen={isOpen}
                onRequestClose={onRequestClose}
                contentLabel={contentLabel}
            />
        )
    }
}

export default Modal;