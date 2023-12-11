import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import { getProviders, signIn } from "next-auth/react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]";
import Link from "next/link";
import { useRouter } from "next/router";

export default function SignIn({
  providers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter()
      console.log(router.query);
  return (
    <>
      <div className="h-screen w-screen bg-green-100 justify-center dark:bg-black">
        <div className="flex h-full pt-20 flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full m-20">
            <div className="block rounded-lg bg-white shadow-lg dark:bg-black">
              <div className="g-0 lg:flex lg:flex-wrap">
                <div className="px-4 md:px-0 w-full lg:w-6/12">
                  <div className="md:mx-6 md:p-12">
                    <div className="text-center">
                      <img
                        className="mx-auto dark:invert"
                        src="/logo.png"
                        alt="SIGE Logo"
                      />
                    </div>
                  </div>
                </div>

                <div className="w-full lg:w-6/12 flex items-center rounded-b-lg lg:rounded-r-lg lg:rounded-bl-none">
                  <div className="mx-auto px-4 py-6 text-white lg:mx-12 md:p-12 text-center">
                    <div>
                      <div>
                        <span className="text-3xl font-bold text-neutral-800 dark:text-neutral-200">
                          Inicio de Sesión
                        </span>
                      </div>
                      <div>
                        <span className="text-neutral-800 dark:text-neutral-200">
                          Selecciona una opción para iniciar sesión
                        </span>
                      </div>
                    </div>
                    <div className="pt-10">
                      {/* {Object.values(providers).map((provider) => ( */}
                        {/* <div key={provider.name}> */}
                          <button
                            className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                            onClick={(e) => {
                              e.preventDefault();
                              signIn("google");
                            }}
                          >
                            Continuar con Google
                            {/* {provider.name} */}
                          </button>
                        </div>
                      {/* ))} */}
                      <Link
                        href="/auth/loginEmail"
                        className="mt-5 flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                      >
                        Continuar con correo electrónico
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/* </div> */}
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions);
  if (session) {
    // console.log(session);
    return { redirect: { destination: "/" } };
  } else {
    console.log("No session");
  }

  const providers = await getProviders();

  return {
    props: { providers: providers ?? [] },
  };
}
