import React, { useState } from "react";
import { useCookies } from "react-cookie";
import CyclePanel from "@/components/directive/CyclePanel";

interface CardPeriodosProps {}

export const CardPeriodos = ({}: CardPeriodosProps) => {
    return (
        <>
            <div>
              <CyclePanel/>
            </div>
        </>
    );
};

export default CardPeriodos;
