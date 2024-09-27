import ThemeSwitcher from "./ThemeSwitcher";
import { AuthDialog } from "./AuthDialog";
import { User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="container mx-auto flex items-center justify-between px-4 py-6">
      <div></div>
      <div className="flex items-center space-x-4">
        <ThemeSwitcher />
        <AuthDialog>
          <Button variant="ghost" size="icon">
            <User />
          </Button>
        </AuthDialog>
      </div>
    </header>
  );
};

export default Header;
