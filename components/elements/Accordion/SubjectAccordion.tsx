import React, { useState, ReactNode } from "react";
import { AccordionCustomIcon } from "./Accordion";

export function SubjectAccordion() {
    return (
        <>
            <AccordionCustomIcon
                items={[
                    {
                        AccordionHeaderTitle: "What is Material Tailwind?",
                        AccordionChild: (
                            <p>
                                We're not always in the position that we want to
                                be at. We're constantly growing. We're
                                constantly making mistakes. We're constantly
                                trying to express ourselves and actualize our
                                dreams.
                            </p>
                        ),
                    },
                    {
                        AccordionHeaderTitle: "How to use Material Tailwind?",
                        AccordionChild: (
                            <div>
                                <p>Instructions:</p>
                                <ul>
                                    <li>Step 1</li>
                                    <li>Step 2</li>
                                </ul>
                            </div>
                        ),
                    },
                    {
                        AccordionHeaderTitle:
                            "What can I do with Material Tailwind?",
                        AccordionChild: (
                            <span>
                                You can do many things with Material Tailwind!
                            </span>
                        ),
                    },
                ]}
            />
        </>
    );
}
