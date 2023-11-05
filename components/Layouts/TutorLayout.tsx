import PrivateRoute from "../auth/PrivateRoute";

interface LayoutProps {
    children: React.ReactNode;
}

const TutorLayout = ({ children }: LayoutProps) => {
    return (
        <>
            <PrivateRoute>
                {children}
            </PrivateRoute>
        </>
    );
};

export default TutorLayout;
