import React, { useState } from "react";
import { useCookies } from "react-cookie";
import CyclePanel from "@/components/elements/Panels/CyclePanel";
import MateriasPanel from "@/components/elements/Panels/MateriasPanel";

interface CardPeriodosProps {}

export const CardPeriodos = ({}: CardPeriodosProps) => {
    return (
        <>
            <div>
              <MateriasPanel/>
            </div>
        </>
    );
};

export default CardPeriodos;
