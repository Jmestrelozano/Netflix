import React, { ChangeEvent, useCallback, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import axios from "axios";
import { signIn } from "next-auth/react";


import { Input } from "@/components/inputs/Input";
import { useForm } from "@/hooks/useForm";
import { Layout } from "@/components/layouts/Layout";
import { LoaderTriangle } from "@/components/loaders/LoaderTriangle";
import { toast } from "react-toastify";
import { Github, Google } from "@/components/svgs";


const AuthPage = () => {
  const router = useRouter();
  const { onChange, form } = useForm({
    email: "",
    name: "",
    password: "",
  });
  const [variant, setVariant] = useState("login");

  const { email, name, password } = form;

  const [loading, setLoading] = useState<boolean>(false)

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login"
    );
  }, []);

  const login = useCallback(async () => {
    setLoading(true)
    try {

      const resp = await signIn("credentials", {
        email,
        password,
        redirect: false,
        callbackUrl: "/",
      });

      if (resp?.status === 200) {
        setLoading(false)
        router.replace("/profiles");
        return
      }
      console.log(resp)
      setLoading(false)
      toast.error(resp?.error, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,

      });
    } catch (error) {
      setLoading(false)
      toast.error('Hubo un problema', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,

      });
      console.log({ error });
    }
  }, [email, password, router]);

  const register = useCallback(async () => {
    try {
      await axios.post("/api/register", {
        email,
        name,
        password,
      });
      login();
    } catch (error) {
      console.log(error);
    }
  }, [email, name, password, login]);

  return (
    <Layout>
      {loading ? <LoaderTriangle /> : <></>}
      <div className="relative h-full w-full bg-[url('/assets/images/hero.webp')] bg-no-repeat bg-center bg-fixed bg-cover">
        <div className="bg-black w-full h-full lg:bg-opacity-50">
          <nav className="px-12 py-5">
            <Image
              loading="lazy"
              width={120}
              height={48}
              src="/assets/images/logo.webp"
              alt="Logo_Netflix"
            // priority={true}
            />
          </nav>
          <div className="flex justify-center">
            <div
              className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 
    lg:w-2/5 lg:max-w-md rounded-md w-full"
            >
              <h2 className="text-white text-4xl mb-8 font-semibold">Sign in</h2>
              <div className="flex flex-col gap-4">
                {variant === "register" && (
                  <Input
                    id={"name"}
                    onChange={({ target }: ChangeEvent<HTMLInputElement>) =>
                      onChange(target.value, "name")
                    }
                    value={name}
                    type="text"
                    label={"Username"}
                  />
                )}
                <Input
                  id={"email"}
                  onChange={({ target }: ChangeEvent<HTMLInputElement>) =>
                    onChange(target.value, "email")
                  }
                  value={email}
                  type="email"
                  label={"Email"}
                />

                <Input
                  id={"password"}
                  onChange={({ target }: ChangeEvent<HTMLInputElement>) =>
                    onChange(target.value, "password")
                  }
                  value={password}
                  type="password"
                  label={"Password"}
                />
              </div>
              <button
                onClick={variant === "login" ? login : register}
                className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition"
              >
                {variant === "login" ? "Login" : "Sign up"}
              </button>
              <div className="flex flex-row items-center gap-4 mt-8 justify-center">
                <div
                  onClick={() => signIn("google", { callbackUrl: "/profiles" })}
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition"
                >
                  <Google />
                </div>
                <div
                  onClick={() => signIn("github", { callbackUrl: "/profiles" })}
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition"
                >
                  <Github />
                </div>
              </div>
              <p className="text-neutral-500 mt-12">
                {variant === "login"
                  ? "First time using Netflix?"
                  : "Already have an account?"}
                <span
                  onClick={toggleVariant}
                  className="text-white ml-1 hover:underline cursor-pointer"
                >
                  {variant === "login" ? "Create an account" : "Login"}
                </span>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AuthPage;


