
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { CrownIcon, LogIn, UserPlus } from "lucide-react";

export function MainNav() {
  const handlePremiumClick = () => {
    const dialog = document.getElementById('premium-dialog') as HTMLDialogElement;
    if (dialog) dialog.showModal();
  };

  return (
    <div className="flex items-center space-x-4">
      <nav className="flex items-center space-x-2">
        <Link to="/login">
          <Button variant="ghost" size="sm" className="text-sm font-medium">
            <LogIn className="mr-2 h-4 w-4" />
            Login
          </Button>
        </Link>
        <Link to="/sign-up">
          <Button variant="ghost" size="sm" className="text-sm font-medium">
            <UserPlus className="mr-2 h-4 w-4" />
            Sign Up
          </Button>
        </Link>
        <Button 
          variant="outline" 
          size="sm" 
          className="text-sm font-medium border-primary text-primary hover:bg-primary/10"
          onClick={handlePremiumClick}
        >
          <CrownIcon className="mr-2 h-4 w-4 text-yellow-500" />
          Unlock Premium
        </Button>
      </nav>
    </div>
  );
}
