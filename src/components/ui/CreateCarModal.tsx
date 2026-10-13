import { Dialog, DialogTitle } from "@mui/material";
import { RefObject, useImperativeHandle, useState } from "react";

interface CreateCarModalRef {
  open: () => void;
  close: () => void;
}

interface CreateCarModalProps {
  ref: RefObject<CreateCarModalRef>,
}

export const defaultCarModalRef: CreateCarModalRef = {
  open: () => { },
  close: () => { },
}

export function CreateCarModal({ ref }: CreateCarModalProps) {
  const [active, setActive] = useState(false);

  const open = () => setActive(true);
  const close = () => setActive(false);

  useImperativeHandle(ref, () => ({ open, close }));

  return (
    <Dialog onClose={close} open={active}>
      <DialogTitle>Add a new car</DialogTitle>

    </Dialog>
  );
}
