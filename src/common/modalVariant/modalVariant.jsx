import React, { useState } from "react";
import { Modal, Box, Button } from "@mui/material";
import { styled } from "@mui/system";
import { ButtonVariant } from "../buttonVariant/buttonVariant";

// Styled Box for Modal Content
const BottomUpModalContent = styled(Box)(({ theme }) => ({
    position: "fixed",
    bottom: 0,
    left: "49%",
    transform: "translateX(-49%)",
    backgroundColor: 'white',
    padding: "16px",
    borderRadius: "4px 4px 0 0",
    transition: "transform 0.3s ease-in-out",
    outline: "none",

}));
const CenteredModalContent = styled(Box)(({ theme }) => ({
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    padding: "16px",
    borderRadius: "16px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
    outline: "none",
}));
const BackdropStyle = styled(Box)({
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    border: '0px',
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: -1,
});

const ModalVariant = ({ open, setOpen, isCentered, children }) => {
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="bottom-up-modal"
                closeAfterTransition
                BackdropComponent={() => <BackdropStyle onClick={handleClose} />}
                className=""
            >

                {
                    isCentered ? <CenteredModalContent className="w-[90%] sm:w-[340px]">
                        {children}
                    </CenteredModalContent>
                        :
                        <BottomUpModalContent className="w-[100%] sm:w-[375px]">
                            {children}
                        </BottomUpModalContent>
                }

            </Modal>
        </div>
    );
};

export default ModalVariant;
