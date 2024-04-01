"use client";
import React, { PropsWithChildren } from "react";
import Image from "next/image";
import clsx from "clsx";

import Navbar from "./Navbar";
import Footer from "./Footer";

import Provider from "@/library/Provider";

import { clashDisplay } from "@/utils/font";
import AppBackground from "@/assets/BodyBackground.png";

import { useIsMounted } from "@/hooks/useIsMounted";

import "./style.css";

interface Props extends PropsWithChildren { }

const BaseLayout: React.FC<Props> = ({ children }) => {
  const isMounted = useIsMounted();

  return (
    <Provider>
      {isMounted && (
        <Navbar />
      )}
      <main className={clsx("base-main-container", clashDisplay.className)}>
        {isMounted && (
          <Image
            src={AppBackground}
            alt="roadmap"
            priority
            className="w-full h-full absolute top-0 left-0 bg-cover bg-center bg-no-repeat"
          />
        )}
        {children}
      </main>
      {isMounted && (
        <Footer />
      )}

    </Provider>
  );
};

export default BaseLayout;
