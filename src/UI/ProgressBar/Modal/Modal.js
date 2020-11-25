import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Button, Typography } from '@material-ui/core';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import './Modal.css';

const ResultModal = ({
	open,
	onFinishQuiz,
	wrongAnswers,
	rightAnswers
    }) => {

	const results = `You had  ${ rightAnswers } right  and  ${ wrongAnswers } wrong answers`;

    return (
		<div>
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={onFinishQuiz}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
            >
            <Fade in={open}>
                <div className="ModalPanel" >
                <Typography className="modal_title" variant="h5" component="h5">
                    Your results
                </Typography>
                <Typography variant="h6" component="h6">
                            {results}
                </Typography>
                  <ButtonGroup className="button" disableElevation variant="contained" >
                    <Button color="primary" onClick={onFinishQuiz}>Finish</Button>
                </ButtonGroup>
                </div>
              </Fade>
            </Modal>
          </div>
	);

}

export default ResultModal;
