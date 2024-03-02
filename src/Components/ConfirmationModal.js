import React, { useState } from 'react';

function ConfirmationModal({ isOpen, onCancel, onConfirm }) {
    const [showModal, setShowModal] = useState(isOpen);

    const handleClose = () => {
        setShowModal(false);
        onCancel();
    };

    const handleConfirm = () => {
        setShowModal(false);
        onConfirm();
    };

    return (
        <div className={`modal ${showModal ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: showModal ? 'block' : 'none' }}>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Confirm Cancellation</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={handleClose}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p>Are you sure you want to cancel this booking?</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={handleClose}>Close</button>
                        <button type="button" className="btn btn-danger" onClick={handleConfirm}>Confirm</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ConfirmationModal;
