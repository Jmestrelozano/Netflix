import React from "react";
import Head from "next/head";

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
                    content={`Informacion sobre la pelicula ${title}`}
                />
                <meta
                    property="og:description"
                    content={`Esta es la pagina sobre ${title}`}
                />

            </Head>


            <main className="h-full w-full">{children}</main>
        </>
    );
};
