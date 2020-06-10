import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";

export function ConfirmWindow(
    isOpen,
    closeWindow,
    alertTitle,
    alertText,
    onAcceptMethod
) {

    return (
        <div>

            <Dialog
                open={isOpen}
                onClose={closeWindow}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{alertTitle}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {alertText}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={closeWindow} color="primary">
                        Відхилити
                    </Button>
                    <Button onClick={onAcceptMethod} color="primary" autoFocus>
                        Прийняти
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
};

