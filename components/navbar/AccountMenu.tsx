import React from "react";
import Image from "next/image";
import { signOut } from "next-auth/react";

import useCurrentUser from "@/hooks/useCurrentUser";

interface AccountMenuProps {
  visible?: boolean;
}

export const AccountMenu: React.FC<AccountMenuProps> = ({ visible }) => {
  const { data: currentUser } = useCurrentUser();

  if (!visible) {
    return null;
  }

  return (
    <div className="bg-black w-56 absolute top-14 right-0 py-5 flex-col border-2 border-gray-800 flex">
      <div className="flex flex-col gap-3">
        <div className="px-3 group/item flex flex-row gap-3 items-center w-full">
          <Image
            width={80}
            height={50}
            className="w-8 rounded-md"
            src="/assets/images/profiles/default-blue.png"
            alt="user_profile"
          />
          <p className="text-white text-sm group-hover/item:underline">
            {currentUser?.name}
          </p>
        </div>
      </div>
      <hr className="bg-gray-600 border-0 h-px my-4" />
      <div
        onClick={() => signOut()}
        className="px-3 text-center text-white text-sm hover:underline"
      >
        Sign out of Netflix
      </div>
    </div>
  );
};
