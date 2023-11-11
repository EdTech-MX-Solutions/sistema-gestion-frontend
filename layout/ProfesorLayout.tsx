import React from "react";
import PrivateRoute from "../components/auth/PrivateRoute";

interface LayoutProps {
    children: React.ReactNode;
}

const TutorLayout = ({ children }: LayoutProps) => {
    return (
        <>
            <PrivateRoute allowedRoles={["SUPERUSER", "PROFESOR"]}>
                {children}
            </PrivateRoute>
        </>
    );
};

export default TutorLayout;
