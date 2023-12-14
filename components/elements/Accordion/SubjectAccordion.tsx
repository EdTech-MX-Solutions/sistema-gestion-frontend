import React, { useState, ReactNode } from "react";
import { AccordionCustomIcon } from "./Accordion";
import SIGEAPICollection from "@/data/calls/apiHandler";
import { useCookies } from "react-cookie";
import InterfaceMateria from "@/data/interfaces/materia";
import {
    Button,
    IconButton,
    List,
    ListItem,
    ListItemSuffix,
} from "@material-tailwind/react";
import { TrashIcon } from "../icons/Trash";
import ButtonComponent from "@/components/ButtonComponent";
import { useRouter } from "next/router";

export function SubjectAccordion({
    subjects,
}: {
    subjects: InterfaceMateria[];
}) {
    const nivelel1 = subjects.filter((subject) => subject.nivel == "Primero");
    const nivelel2 = subjects.filter((subject) => subject.nivel == "Segundo");
    const nivelel3 = subjects.filter((subject) => subject.nivel == "Tercero");
    const nivelel4 = subjects.filter((subject) => subject.nivel == "Cuarto");
    const nivelel5 = subjects.filter((subject) => subject.nivel == "Quinto");
    const nivelel6 = subjects.filter((subject) => subject.nivel == "Sexto");

    const router = useRouter();

    const viewSubject = (index: string) => () => {
        router.push({"pathname": "/directive/cicloEscolar/modifySubject", "query": {"clave": index}});
    }

    return (
        <>
            <AccordionCustomIcon
                items={[
                    {
                        AccordionHeaderTitle: "NIVEL 1",
                        AccordionChild: (
                            <p>
                                <List>
                                    {nivelel1.map((subject, index) => (
                                        <ListItem onClick={viewSubject(subject.clave)} key={index} className="rounded-none mr-10 border-b border-b-blue-gray-100">
                                            <p>
                                                <span className="font-semibold">
                                                    {subject.clave} - Nombre:
                                                </span>{" "}
                                                {subject.nombre}
                                            </p>
                                        </ListItem>
                                    ))}
                                </List>
                            </p>
                        ),
                    },
                    {
                        AccordionHeaderTitle: "NIVEL 2",
                        AccordionChild: (
                            <p>
                                {nivelel2.map((subject, index) => (
                                    <ListItem onClick={viewSubject(subject.clave)} key={index} className="rounded-none mr-10 border-b border-b-blue-gray-100">
                                        <p>
                                            <span className="font-semibold">
                                                {subject.clave} - Nombre:
                                            </span>{" "}
                                            {subject.nombre}
                                        </p>
                                    </ListItem>
                                ))}
                            </p>
                        ),
                    },
                    {
                        AccordionHeaderTitle: "NIVEL 3",
                        AccordionChild: (
                            <p>
                                {nivelel3.map((subject, index) => (
                                    <ListItem onClick={viewSubject(subject.clave)} key={index} className="rounded-none mr-10 border-b border-b-blue-gray-100">
                                        <p>
                                            <span className="font-semibold">
                                                {subject.clave} - Nombre:
                                            </span>{" "}
                                            {subject.nombre}
                                        </p>
                                    </ListItem>
                                ))}
                            </p>
                        ),
                    },
                    {
                        AccordionHeaderTitle: "NIVEL 4",
                        AccordionChild: (
                            <p>
                                {nivelel4.map((subject, index) => (
                                    <ListItem onClick={viewSubject(subject.clave)} key={index} className="rounded-none mr-10 border-b border-b-blue-gray-100">
                                        <p>
                                            <span className="font-semibold">
                                                {subject.clave} - Nombre:
                                            </span>{" "}
                                            {subject.nombre}
                                        </p>
                                    </ListItem>
                                ))}
                            </p>
                        ),
                    },
                    {
                        AccordionHeaderTitle: "NIVEL 5",
                        AccordionChild: (
                            <p>
                                {nivelel5.map((subject, index) => (
                                    <ListItem onClick={viewSubject(subject.clave)} key={index} className="rounded-none mr-10 border-b border-b-blue-gray-100">
                                        <p>
                                            <span className="font-semibold">
                                                {subject.clave} - Nombre:
                                            </span>{" "}
                                            {subject.nombre}
                                        </p>
                                    </ListItem>
                                ))}
                            </p>
                        ),
                    },
                    {
                        AccordionHeaderTitle: "NIVEL 6",
                        AccordionChild: (
                            <p>
                                {nivelel6.map((subject, index) => (
                                    <ListItem onClick={viewSubject(subject.clave)} key={index} className="rounded-none mr-10 border-b border-b-blue-gray-100">
                                        <p>
                                            <span className="font-semibold">
                                                {subject.clave} - Nombre:
                                            </span>{" "}
                                            {subject.nombre}
                                        </p>
                                    </ListItem>
                                ))}
                            </p>
                        ),
                    },
                ]}
            />
        </>
    );
}
