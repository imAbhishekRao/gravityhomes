import React, { useState  } from 'react';
import Modal from 'react-bootstrap/Modal';
import EnquireForm from '../Projects/EnquireForm';

const Enquire = () => {
	// Modal
	const [modalShow, setModalShow] = useState(false);

	const handleClose = () => setModalShow(false);
	const handleShow = () => setModalShow(true);
	return (
		<>
			<div className='Enquire-btn-home-fixed'>
				{/* <button type='button' className='enquire-now-btn'>Enquire Now</button> */}
				<button type='button' className='enquire-now-btn' onClick={handleShow}>Enquire Now</button>
			</div>
			<Modal
				show={modalShow}
				onHide={handleClose}
				size="md"
				aria-labelledby="contained-modal-title-vcenter"
				className='enquire-modal'
				centered
			>
				<EnquireForm handleClose={handleClose} />
			</Modal>
		</>
	)
}


export default Enquire