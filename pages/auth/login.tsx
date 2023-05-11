import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import { getProviders, signIn } from "next-auth/react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]";

export default function SignIn({
  providers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <div className="container h-full p-10 dark:bg-black">
        <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full">
            <div className="block rounded-lg bg-white shadow-lg dark:bg-black">
              <div className="g-0 lg:flex lg:flex-wrap">
                <div className="px-4 md:px-0 lg:w-6/12">
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

                <div className="flex items-center rounded-b-lg lg:rounded-r-lg lg:rounded-bl-none">
                  <div className="px-4 py-6 text-white md:mx-12 md:p-12 text-center">
                    <div>
                      <div>
                        <span className="text-3xl font-bold text-neutral-800 dark:text-neutral-200">
                          Inicio se Sesión
                        </span>
                      </div>
                      <div>
                        <span className="text-neutral-800 dark:text-neutral-200">
                          Selecciona una opción para iniciar sesión
                        </span>
                      </div>
                    </div>
                    <div className="pt-10">
                      {Object.values(providers).map((provider) => (
                        <div key={provider.name}>
                          <button
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            onClick={() => {signIn(provider.id)}}
                          >
                            Continuar con {provider.name}
                          </button>
                        </div>
                      ))}
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
