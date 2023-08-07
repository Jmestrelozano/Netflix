import React from "react";
import Head from "next/head";

const origin = typeof window === "undefined" ? "" : window.location.origin;

export const Layout = ({ children, title }: any) => {
    return (
        <>
            <Head>
                <title>{title || "Netflix"}</title>
                <meta name="theme-color" content="#27272A" />
                <meta name="author" content="Jorge mestre" />
                <meta name="description" content="Informacion sobre la pelicula XXX" />
                <meta name="keywords" content="XXX, Netflix, series" />

                <meta
                    property="og:title"
                    content={`Netflix`}
                />
                <meta
                    property="og:description"
                    content={`peliculas y series de todo tipo de genero`}
                />

                <meta
                    property="og:image"
                    content={`${origin}/_next/image?url=%2Fassets%2Fimages%2Fbanner.png&w=384&q=75`}
                />

            </Head>


            <main className="h-full w-full">{children}</main>
        </>
    );
};
