import React, { useState } from "react";
import PrivateRoute from "../components/auth/PrivateRoute";
import SidebarDirectivo from "@/components/Sidebars/SidebarDirectivo";
import Header from "@/components/template/Header";
import { ProfesorProvider } from "@/components/context/ProfesorProvider";
import { GrupoProvider } from "@/components/context/GruposProvides";

interface LayoutProps {
  children: React.ReactNode;
}

const TutorLayout = ({ children }: LayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <PrivateRoute allowedRoles={["SUPERUSER", "DIRECTIVO"]}>
        <ProfesorProvider>
          <GrupoProvider>
          <div className="dark:bg-boxdark-2 dark:text-bodydark">
            <div className="flex h-screen overflow-hidden">
              <SidebarDirectivo
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
              />
              <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden w-full ">
                <Header
                  sidebarOpen={sidebarOpen}
                  setSidebarOpen={setSidebarOpen}
                />
                <main>
                  <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                    {children}
                  </div>
                </main>
              </div>
            </div>
          </div>
          </GrupoProvider>
        </ProfesorProvider>
      </PrivateRoute>
    </>
  );
};

export default TutorLayout;
