import React from "react";
import Image from "next/image";
import { UserCardProps } from "@/interfaces/components/card/cardProfile";
import { imagesUserProfile } from "@/global/global";

export const CardProfile: React.FC<UserCardProps> = ({ name }) => {
  const imgSrc = imagesUserProfile[Math.floor(Math.random() * 4)];

  return (
    <div className="group flex-row w-44 mx-auto">
      <div className="w-44 h-44 rounded-md flex items-center justify-center border-2 border-transparent group-hover:cursor-pointer group-hover:border-white overflow-hidden">
        <Image
          loading="lazy"
          width={300}
          height={300}
          draggable={false}
          src={imgSrc}
          alt="profile_user"
        />
      </div>
      <div className="mt-4 text-gray-400 text-2xl text-center group-hover:text-white">
        {name}
      </div>
    </div>
  );
};
