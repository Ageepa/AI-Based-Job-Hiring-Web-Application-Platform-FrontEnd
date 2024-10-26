import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function AdminLayout() {
  const { isLoaded, isSignedIn, user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoaded) {
      return;
    }

    if (!isSignedIn) {
      navigate("/sign-in");
      return;
    }

    if (user?.publicMetadata?.role !== "admin") {
      navigate("/");
    }
  }, [isLoaded, isSignedIn, navigate, user]);
  
  return (
    <div>
     <div className="flex items-center gap-x-4">
      <Button asChild variant="outline">
        <Link to="admin/jobs">View Current Job Posts</Link>
      </Button>
      <Button>
        <Link to="admin/jobs/create">Create New Job Post</Link>
      </Button>
     </div>
     <div className="mt-4">
      <Outlet />
     </div>
    </div>
  );
}

export default AdminLayout;