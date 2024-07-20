import { Trash } from "@carbon/pictograms-react";
import {
  ComposedModal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "@carbon/react";

function DeleteModal(props: { modalopen: boolean; modalClose: () => void }) {
  return (
    <ComposedModal open={props.modalopen} onClose={props.modalClose} size="sm">
      <ModalHeader label="delete email configration." />
      <ModalBody hasScrollingContent>
        <Trash />
        <p className=".cds--modal-content__text">
          are you sure you want to delete this email configration. ?
        </p>
      </ModalBody>
      <ModalFooter
        danger
        primaryButtonText="OK"
        secondaryButtonText="Cancel"
        children={undefined}
      />
    </ComposedModal>
  );
}

export default DeleteModal;
