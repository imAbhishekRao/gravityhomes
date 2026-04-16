import Image from 'next/image'
import React,  { useState  } from 'react'
import chatIcon from '@/public/images/chat-icon.png';
import Modal from 'react-bootstrap/Modal';
import EnquireForm from '../Projects/EnquireForm';

const ChatButton = () => {

    const [modalShow, setModalShow] = useState(false);

	const handleClose = () => setModalShow(false);
	const handleShow = () => setModalShow(true);

    return (
        <>
            <div id="messageButton" onClick={()=>handleShow()}>
                <Image width="50" height="50" alt="chat-icon" src={chatIcon} />
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

export default ChatButton