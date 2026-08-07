import Image from "next/image";
import React from "react";

function page() {
  return (
    <div
      className="flex bg-black"
      style={{
        display: "flex",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
      }}
    >
      <Image src="/coming-soon.gif" alt="" height={300} width={250} />
    </div>
  );
}

export default page;
