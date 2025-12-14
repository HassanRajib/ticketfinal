
import { User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

import { Link } from "react-router-dom";

const UserDrop = () => {
  return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
        <button className="p-2 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700">
  <User className="h-5 w-5 text-gray-700 dark:text-white" />
</button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end" className="w-32">
        <DropdownMenuItem>
          <Link to="/signin" className="w-full block text-sm text-gray-700 dark:text-gray-100">
            Sign in
          </Link>
        </DropdownMenuItem>
        {/* <DropdownMenuItem>
          <Link to="/signup" className="w-full block text-sm text-gray-700 dark:text-gray-100">
            Sign up
          </Link>
        </DropdownMenuItem> */}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDrop;
