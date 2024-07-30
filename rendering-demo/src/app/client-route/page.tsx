"use client";
import React from "react";
import { useTheme } from "@/components/theme-provider";
import { clientSideFunction } from "@/utils/client-utils";

// import { serverSideFunction } from "@/utils/server-utils";

export default function ClientRoutePage() {
  const theme = useTheme();

  const result = clientSideFunction();

  const settings = {
    dots: true,
  };
  return <h1>Client route {result}</h1>;
}
