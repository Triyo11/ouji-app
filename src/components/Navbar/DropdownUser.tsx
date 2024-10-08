import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";
import Image from "next/image";

const DropdownUser = ({ 
  session 
}: { 
  setIsLoggedIn: (isLoggedIn: boolean) => void,
  session: Session
}) => {
  const imageUrl =
    "https://plus.unsplash.com/premium_photo-1672239496290-5061cfee7ebb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button>
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <Image
              src={session?.user?.image || imageUrl}
              alt="avatar"
              width={40}
              height={40}
              className="object-cover"
            />
          </div>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-32 mt-4" align="end">
        <DropdownMenuGroup>
          <DropdownMenuItem
            className="cursor-pointer text-lg"
            onClick={() => {
              alert("Profile");
            }}
          >
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem
            className="cursor-pointer text-lg"
            onClick={() => {
              signOut()
            }}
          >
            Log out
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownUser;
