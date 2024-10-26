import { Outlet } from "react-router-dom";
import Navigation from "@/components/shared/Navigation";

function RootLayout() {
  return (
    <main className="container px-4">
      <Navigation />
      <Outlet />
    </main>
  );
}

export default RootLayout;