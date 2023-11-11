import React from "react";

import Sidebar from "./Sidebar";
import SidebarContTutor from "./Content/SidebarContTutor";

interface SidebarProps {
    sidebarOpen: boolean;
    setSidebarOpen: (arg: boolean) => void;
}

const SidebarTutor = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
    

    return (
        <>
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} >
            <SidebarContTutor/>
        </Sidebar>
        </>
    );
};

export default SidebarTutor;
