import React, { useEffect } from "react";
import { ConfirmElement } from "./Confirm";

interface DialogDefaultProps {
    open: boolean;
    text: string;
    handler: () => void;
}
export function SignoutConfirm({ open, text, handler }: DialogDefaultProps) {
    const [isopen, setOpen] = React.useState(open);

    useEffect(() => {
        setOpen(open);
    });


    return (
        <>
            <ConfirmElement open={isopen} text={text} handler={handler} />
        </>
    );
}