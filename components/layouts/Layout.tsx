import React from "react";
import Head from "next/head";
import { Navbar } from "../navbar/Navbar";


const origin = typeof window === "undefined" ? "" : window.location.origin;

export const Layout = ({ children, title }: any) => {
    return (
        <>
            <Head>
                <title>{title || "Netflix"}</title>
                <meta name="author" content="Jorge mestre" />
                <meta name="description" content="Informacion sobre la pelicula XXX" />
                <meta name="keywords" content="XXX, Netflix, series" />

                <meta
                    property="og:title"
                    content={`Informacion sobre la pelicula ${title}`}
                />
                <meta
                    property="og:description"
                    content={`Esta es la pagina sobre ${title}`}
                />
                {/* <meta
                    property="og:image"
                    content={`${origin}/_next/image?url=%2Fassets%2Fimg%2Fbanner.png&w=384&q=75`}
                /> */}
            </Head>


            <main className="h-full w-full">{children}</main>
        </>
    );
};
