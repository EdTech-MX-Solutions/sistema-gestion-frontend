import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import { getProviders, signIn } from "next-auth/react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]";
import { FormEvent, useState } from "react";

export default function SignIn({
  providers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [loading, setLoading] = useState(false);
  const [enviado, setEnviado] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    console.log("onSubmit");
    setLoading(true);
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const base_rute = "https://sige-octavio-paz.azurewebsites.net";
    // const base_rute = "https://sige-octavio-paz.azurewebsites.net/v1/auth/code?email=chavo0022009@gmail.com";
    const version = "v1";
    const route = "auth/code";
    const redirectUrl = "http://localhost:3000";
    const redirectUrlAzure = "https://sistema-gestion-frontend.vercel.app";
    const email = formData.get("email");
    await fetch(`${base_rute}/${version}/${route}?email=${email}&redirectUrl=http://localhost:3000`, {
      method: "GET",
    });
    setLoading(false);
    setEnviado(true);
  }

  return (
    <>
      <div className="h-screen w-screen bg-green-100 justify-center dark:bg-teal-700">
        <div className="flex h-full pt-5 sm:pt-10 md:pt-20 flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="md:m-20 sm:m-10 m-5">
            <div className="block rounded-lg bg-white shadow-lg dark:bg-teal-700">
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
                      <form onSubmit={onSubmit}>
                        <input
                          name="email"
                          required
                          className="w-full px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                          type="email"
                          placeholder="Correo Electrónico"
                        />

                        {enviado ? (
                          <div className="mt-5 flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-green-700 shadow-sm selection:bg-green-600 selection:text-white">
                            Si el correo existe, se ha enviado un código de
                            verificación
                            <br />
                            Aún no ha llegado? Recarga la página e intenta de
                            nuevo
                          </div>
                        ) : (
                          <button className="mt-5 flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">
                            {loading ? (
                              <svg
                                aria-hidden="true"
                                role="status"
                                className="inline mr-3 mt-1 w-4 h-4 text-white animate-spin"
                                viewBox="0 0 100 101"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                  fill="#E5E7EB"
                                ></path>
                                <path
                                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                  fill="currentColor"
                                ></path>
                              </svg>
                            ) : (
                              ""
                            )}
                            Enviar Código de Verificación
                          </button>
                        )}
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
