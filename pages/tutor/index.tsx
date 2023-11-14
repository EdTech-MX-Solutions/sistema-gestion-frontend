import PrivateRoute from "@/components/auth/PrivateRoute";

function GetGreetings() {
    var today = new Date();
    var curHr = today.getHours();
    if (curHr < 12) {
        return "Buenos días";
    } else if (curHr < 18) {
        return "Buenas tardes";
    } else {
        return "Buenas noches";
    }
}

export default function Index() {
    let greeting = GetGreetings();
    let name = "test";

    return (
        <>
            <PrivateRoute allowedRoles={["SUPERUSER", "TUTOR"]}>
                <div className="m-10 p-10">
                    <div className="text-4xl font-semibold">
                        <h1>Menu Principal del Alumno</h1>
                    </div>
                    <div className="text-2xl font-semibold">
                        <h1>
                            {greeting}, {name}
                        </h1>
                    </div>
                </div>
            </PrivateRoute>
        </>
    );
}
