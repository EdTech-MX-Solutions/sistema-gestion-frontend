import React, { useState, ReactNode, use, useEffect } from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import Card from "@/components/Card";

interface IconProps {
    id: number;
    open: number;
}

interface AccordionItem {
    AccordionHeaderTitle: string;
    AccordionChild: ReactNode;
}

function Icon({ id, open }: IconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`${
                id === open ? "rotate-180" : ""
            } h-5 w-5 transition-transform`}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
        </svg>
    );
}

interface AccordionCustomIconProps {
    items: AccordionItem[];
}

export function AccordionCustomIcon({ items }: AccordionCustomIconProps) {
    const [open, setOpen] = useState<number>(0);

    const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

    useEffect(() => {
        // open the first accordion
        setOpen(1);
    }, []);

    return (
        <>
            {items.map((item, index) => (
                <Card key={index}>
                    <Accordion
                        open={open === index + 1}
                        icon={<Icon id={index + 1} open={open} />}
                    >
                        <AccordionHeader
                            className="pb-3 dark:text-gray-100 text-gray-700"
                            onClick={() => handleOpen(index + 1)}
                        >
                            <div>
                                {item.AccordionHeaderTitle}
                                <span className="text-xs mx-4">
                                    Haz click para ver las materias del nivel
                                </span>
                            </div>
                        </AccordionHeader>
                        <AccordionBody className="dark:text-gray-200 text-gray-600">
                            {item.AccordionChild}
                        </AccordionBody>
                    </Accordion>
                </Card>
            ))}
        </>
    );
}
