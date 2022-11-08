import React from "react";

const SubmitScores = () => {
  const url = "https://docs.google.com/forms/d/e/1FAIpQLSdM4rAcpKGAgYECffYpgkIyN1XNkAWBou36W2HWMuPOKtZM-w/viewform?usp=sf_link";
  return (
    <div className="w-screen h-screen">
      <iframe width={"100%"} height={"100%"} src={url} className="w-full h-full" />
    </div>
  );
};

export default SubmitScores;
