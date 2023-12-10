import React, { use, useEffect } from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import { signOut } from "next-auth/react";
import { useCookies } from "react-cookie";

export function ConfirmElement({
    open,
    text,
    handler,
}: {
    open: boolean;
    text: string;
    handler: () => void;
}) {
    const [cookies, setCookie, removeCookie] = useCookies([
        "token",
        "user",
        "childs",
        "boleta",
    ]);

    const [isopen, setOpen] = React.useState(false);

    function handlerCloseSession() {
        removeCookie("token", { path: "/" });
        setCookie("user", "", { path: "/" });
        setCookie("childs", "", { path: "/" });
        setCookie("boleta", "", { path: "/" });
        signOut();
    }

    useEffect(() => {
        setOpen(open);
    });

    return (
        <>
            <Dialog
                size="md"
                open={isopen}
                handler={handler}
                animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0.9, y: -100 },
                }}
                className="text-center p-10 md:p-52 bg-white dark:bg-slate-500 text-black dark:text-white"
            >
                <div
                    className="absolute right-5 top-5 text-4xl font-bold cursor-pointer"
                    onClick={handler}
                >
                    X
                </div>
                <DialogHeader className="text-center justify-center text-gray-700 dark:text-gray-200 text-5xl">
                    Alerta:
                </DialogHeader>
                <DialogBody className="text-3xl font-semibold text-gray-700 dark:text-gray-200">{text}</DialogBody>
                <DialogFooter className="items-center justify-center">
                    <Button
                        variant="text"
                        onClick={handler}
                        className="mr-1 bg-red-500 text-white hover:bg-red-600"
                        autoFocus
                    >
                        <span>Cancelar</span>
                    </Button>
                    <Button
                        variant="text"
                        className="mr-1 bg-green-700 text-white hover:bg-green-600"
                        onClick={handlerCloseSession}
                    >
                        <span>Confirmar</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
    );
}
