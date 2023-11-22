import PrivateRoute from '../../components/auth/PrivateRoute';
import SystemInfo from '../../components/system/Info';


export default function Index() {

    return (
        <>
             <PrivateRoute allowedRoles={["SUPERUSER", "DIRECTIVO", "PROFESOR", "TUTOR"]}>
                <SystemInfo moduleName="Professor Module 1.0" />
            </PrivateRoute>
        </>
    );
}
