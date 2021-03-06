import React, { useEffect } from "react";

export default function Page({ title, children }) {
  useEffect(() => {
    document.title = `${title} | Product catalog`;
    window.scrollTo(0, 0);
  }, [title]);

  return <main>{children}</main>;
}
