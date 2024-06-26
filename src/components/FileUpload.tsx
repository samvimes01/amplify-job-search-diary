import { Button, Heading, View } from "@aws-amplify/ui-react";
import { StorageManager } from "@aws-amplify/ui-react-storage";

import Modal from "@mui/material/Modal";
import { useState } from "react";
// import '@aws-amplify/ui-react/styles.css';
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 400,
  backgroundColor: "aliceblue",
  border: "2px solid #000",
  padding: "2px",
};

function FileUpload({ onUploadSuccess }: { onUploadSuccess?: () => void }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button onClick={handleOpen} variation="primary">
        Upload a CV file
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <View {...style}>
          <Heading level={5} margin="1rem auto" textAlign="center">
            Accepts .docx
          </Heading>
          <StorageManager
            acceptedFileTypes={[
              "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            ]}
            path={({ identityId }) => `profile/${identityId}/cvs/`}
            maxFileCount={1}
            autoUpload={false}
            isResumable
            onUploadSuccess={onUploadSuccess}
          />
          <Button margin="1rem auto" width="100%" onClick={handleClose}>
            Close modal
          </Button>
        </View>
      </Modal>
    </>
  );
}

export default FileUpload;
