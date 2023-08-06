import { useCallback, useState } from "react";
import { useRouter } from "next/router";

import { CardProfile } from "@/components/card/CardProfile";
import useCurrentUser from "@/hooks/useCurrentUser";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import { AnimationComponentNetflix } from "@/components/animations/IntroNetflix";
import { Layout } from "@/components/layouts/Layout";

const ProfilesPage = () => {
  const [animationCompleted, setAnimationCompleted] = useState(false);

  const router = useRouter();
  const { data: currentUser } = useCurrentUser();

  const selectProfile = useCallback(() => {
    router.replace("/");
  }, [router]);

  const onAnimationEnd = () => {
    setAnimationCompleted(true);
  };

  return (
    <Layout>

      {animationCompleted ? (
        <div className="flex items-center h-full justify-center">
          <div className="flex flex-col">
            <h1 className="text-3xl md:text-6xl text-white text-center">
              Who&#39;s watching?
            </h1>
            <div className="flex items-center justify-center gap-8 mt-10">
              <div onClick={() => selectProfile()}>
                <CardProfile name={currentUser?.name} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <AnimationComponentNetflix key="animation" onAnimationEnd={onAnimationEnd} />
      )}
    </Layout>

  );
};

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



export default ProfilesPage;
