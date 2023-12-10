import React, { useState } from "react";
import PrivateRoute from "../components/auth/PrivateRoute";
import SidebarProfesor from "@/components/Sidebars/SidebarProfesor";
import Header from "@/components/template/Header";
import { ProfesorProvider } from "@/components/context/ProfesorProvider";
import { AlumnoProvider } from "@/components/context/AlumnoProvider";

interface LayoutProps {
  children: React.ReactNode;
}

const TutorLayout = ({ children }: LayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <PrivateRoute allowedRoles={["SUPERUSER", "PROFESOR"]}>
        <ProfesorProvider>
          <AlumnoProvider>
            <div className="dark:bg-boxdark-2 dark:text-bodydark">
              <div className="flex h-screen overflow-hidden">
                <SidebarProfesor
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
          </AlumnoProvider>
        </ProfesorProvider>
      </PrivateRoute>
    </>
  );
};

export default TutorLayout;
