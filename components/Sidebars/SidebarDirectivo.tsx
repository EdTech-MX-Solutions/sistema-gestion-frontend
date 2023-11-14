import React from "react";

import SidebarContDirectivo from "./Content/SidebarContDirectivo";
import Sidebar from "./Sidebar";

interface SidebarProps {
    sidebarOpen: boolean;
    setSidebarOpen: (arg: boolean) => void;
}

const SidebarDirectivo = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
    

    return (
        <>
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} >
            <SidebarContDirectivo/>
        </Sidebar>
        </>
    );
};

export default SidebarDirectivo;
