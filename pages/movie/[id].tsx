import React from "react";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import { useMovie } from "@/hooks/useMovie";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import { Layout } from "@/components/layouts/Layout";

const Watch = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data } = useMovie(id as string);

  return (
    <Layout>
      <div className="h-screen w-screen bg-black">
        <nav className="fixed w-full p-4 z-10 flex flex-row items-center gap-8 bg-black bg-opacity-70">
          <ArrowLeftIcon
            onClick={() => {
              router.back()
            }}
            className="w-4 md:w-10 text-white cursor-pointer hover:opacity-80 transition"
          />
          <p className="text-white text-1xl md:text-3xl font-bold">
            <span className="font-light">Watching:</span> {data?.title}
          </p>
        </nav>
        <video
          className="h-full w-full"
          autoPlay
          controls
          src={data?.videoUrl}
        ></video>
      </div>

    </Layout>
  );
};

export default Watch;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
};