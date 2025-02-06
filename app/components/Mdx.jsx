// app/components/Mdx.jsx
"use client";

import { useMDXComponent } from "next-contentlayer/hooks";

export default function Mdx({ code }) {
  const Component = useMDXComponent(code);
  return <Component />;
}
