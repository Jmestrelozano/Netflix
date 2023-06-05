import React from "react";
import Image from "next/image";

const images = [
  "/assets/images/profiles/default-blue.png",
  "/assets/images/profiles/default-red.png",
  "/assets/images/profiles/default-slate.png",
  "/assets/images/profiles/default-green.png",
];
interface UserCardProps {
  name: string;
}

export const CardProfile: React.FC<UserCardProps> = ({ name }) => {
  const imgSrc = images[Math.floor(Math.random() * 4)];

  return (
    <div className="group flex-row w-44 mx-auto">
      <div className="w-44 h-44 rounded-md flex items-center justify-center border-2 border-transparent group-hover:cursor-pointer group-hover:border-white overflow-hidden">
        <Image
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
