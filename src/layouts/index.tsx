"use client";
import React, { PropsWithChildren } from "react";
import Image from "next/image";
import clsx from "clsx";

import Navbar from "./Navbar";
import Footer from "./Footer";

import Provider from "@/library/Provider";

import { clashDisplay } from "@/utils/font";
import AppBackground from "@/assets/background.png";

import { useIsMounted } from "@/hooks/useIsMounted";

import "./style.css";

interface Props extends PropsWithChildren { }

const BaseLayout: React.FC<Props> = ({ children }) => {
  const isMounted = useIsMounted();

  return (
    <Provider>
      <Navbar />
      <main className={clsx("base-main-container", clashDisplay.className)}>
        {/* {isMounted && (
      55m
        )} */}
        {children}
      </main>
      <Footer />
    </Provider>
  );
};

export default BaseLayout;
