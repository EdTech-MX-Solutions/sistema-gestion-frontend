import React from "react";

import Sidebar from "./Sidebar";
import SidebarContProfesor from "./Content/SidebarContProfesor";

interface SidebarProps {
    sidebarOpen: boolean;
    setSidebarOpen: (arg: boolean) => void;
}

const SidebarProfesor = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
    

    return (
        <>
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} >
            <SidebarContProfesor/>
        </Sidebar>
        </>
    );
};

export default SidebarProfesor;
