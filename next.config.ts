import type { NextConfig } from "next";
/** @type {import('next').NextConfig} */

const nextConfig: NextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["suihackerhouse.semicolon.africa"], // Add the allowed image domain
    },
  /* config options here */
};

export default nextConfig;
