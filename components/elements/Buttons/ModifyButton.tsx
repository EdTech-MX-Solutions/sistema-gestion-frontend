import { title } from "process";
import ButtonComponent from "./ButtonComponent";

interface ButtonInterface {
    children?: React.ReactNode;
    className?: string;
    color?: string;
    onClick?: () => void;
    title?: string;
}

export default function ModifyButton({ onClick, color, title }: ButtonInterface) {
    return (
        <ButtonComponent title={"Modificar"} color={"cyan"} onClick={onClick}>
            <div className="bg-cyan-700 dark:bg-cyan-800 hidden" />
            <div className="flex gap-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    data-slot="icon"
                    className="w-4 h-4 group-hover:w-5 group-hover:h-5 transition ease-in-out duration-150 my-auto"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                    />
                </svg>
                { title ? title : "Modificar" }
            </div>
        </ButtonComponent>
    );
}
