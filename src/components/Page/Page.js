import React, { useEffect } from "react";

function Page({ title, children }) {
  useEffect(() => {
    document.title = `${title}`;
    window.scrollTo(0, 0);
  }, [title]);

  return <main>{children}</main>;
}

export default Page;
