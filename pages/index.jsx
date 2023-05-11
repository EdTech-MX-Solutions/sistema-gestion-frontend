import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react"

function getGreetings() {
    var today = new Date();
    var curHr = today.getHours();
    if (curHr < 12) {
        return 'Buenos días';
    } else if (curHr < 18) {
        return 'Buenas tardes';
    } else {
        return 'Buenas noches';
    }
}

export default function Login() {
    const { data: session } = useSession()
    const greeting = getGreetings();
    // const name = session?.user?.name;
    const name = "{nombre tutor}";
    return (

        <>
            <div className="m-10 p-10">
                <div className="text-4xl font-semibold">
                    <h1>
                        Menu Principal del Alumno
                    </h1>
                </div>
                <div className="text-2xl font-semibold">
                    <h1>
                        {greeting}, {name}
                    </h1>
                </div>
                {/* <div className="grid grid-cols-1 gap-4 text-4xl font-semibold md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
                    This is an example
                </div>
                <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
                    <h1></h1>
                </div> */}

            </div>

        </>



        // <main className="flex min-h-screen flex-col items-center justify-between p-24">
        //     <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        //         <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none"></div>
        //     </div>
        //     <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">

        //         {/* conditional rendering: */}
        //         {session ? (
        //             <>
        //                 <button
        //                     className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        //                     onClick={() => signOut()}
        //                 >
        //                     <h2 className={`mb-3 text-2xl font-semibold`}>
        //                         Sign Out{" "}
        //                         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
        //                             -&gt;
        //                         </span>
        //                     </h2>
        //                     <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
        //                         Cerrar Sesión.
        //                     </p>
        //                 </button>
        //             </>
        //         ) : (
        //             <>
        //                 <button
        //                     className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        //                     onClick={() => signIn()}
        //                 >
        //                     <h2 className={`mb-3 text-2xl font-semibold`}>
        //                         Sign In{" "}
        //                         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
        //                             -&gt;
        //                         </span>
        //                     </h2>
        //                     <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
        //                         Iniciar Sesión con Google.
        //                     </p>
        //                 </button>
        //             </>
        //         )}
        //     </div>
        // </main>
    );
}
