import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="flex py-12 justify-between items-center">
      <div>
        <Link to={"/"} className="text-4xl font-medium text-underlay-1">
          HirelyAI
        </Link>
      </div>
      <div className="flex justify-center gap-x-8 items-center">
        <Link to="/">Home</Link>
        <div className="flex gap-x-4 items-center">
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
          <Link to={"/sign-in"}>Sign In</Link>
          <Button asChild>
            <Link to={"/sign-up"}>Sign Up</Link>
          </Button>
          </SignedOut>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
