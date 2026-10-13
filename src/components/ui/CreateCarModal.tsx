import { useCarMutations } from "@/hooks/useCarMutations";
import { Car } from "@/types/carTypes";
import { Alert, Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import { RefObject, useImperativeHandle, useState } from "react";

interface CreateCarModalRef {
  open: () => void;
  close: () => void;
}

interface CreateCarModalProps {
  ref: RefObject<CreateCarModalRef>,
  onSubmit: () => void
}

export const defaultCarModalRef: CreateCarModalRef = {
  open: () => { },
  close: () => { },
}

export function CreateCarModal({ ref, onSubmit }: CreateCarModalProps) {
  const [active, setActive] = useState(false);
  const { create, loading, error } = useCarMutations();

  const open = () => setActive(true);
  const close = () => setActive(false);

  useImperativeHandle(ref, () => ({ open, close }));

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries((formData as any).entries());

    const carPayload: Car = {
      make: formJson.make,
      model: formJson.model,
      year: Number(formJson.year),
      color: formJson.color
    }

    try {
      await create(carPayload);
      onSubmit();
      close();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Dialog onClose={close} open={active}>
      <DialogTitle>Add New Car</DialogTitle>
      <DialogContent>
        <Box marginBottom={2}>
          {error
            ? (<Alert icon={false} severity="error">
              {`${error}`}
            </Alert>)
            : (<Alert icon={false} severity="info">
              Fields with * are required.
            </Alert>)}
        </Box>
        <form onSubmit={handleSubmit} id="add-car-form" style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <TextField
            autoFocus
            fullWidth
            required
            size="small"
            name="make"
            label="Make"
            type="text"
          />
          <TextField
            fullWidth
            required
            size="small"
            name="model"
            label="Model"
            type="text"
          />
          <TextField
            fullWidth
            label="Year"
            name="year"
            size="small"
            type="number"
            slotProps={{
              htmlInput: {
                min: 1900,
                max: 2999,
                step: 1
              }
            }}
          />
          <TextField
            fullWidth
            size="small"
            name="color"
            label="Color"
            type="text"
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={close}>Cancel</Button>
        <Button type="submit" form="add-car-form" variant="outlined" disabled={loading}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}
