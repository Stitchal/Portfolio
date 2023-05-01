import React from "react";
import Title from "./Title";
import Competences from "./Competences";
import Etudes from "./Etudes";

const APropos = () => {
  return (
    <div
      name="À propos"
      className="flex items-center min-h-screen w-full flex-col bg-gradient-to-r from-gray-900 to-blue-950 px-5 pt-20"
    >
      <div className="flex flex-col w-full lg:w-2/3 items-center">
        <Title title="À propos" level="4" margin="8" />
        <div className="flex flex-col gap-12 w-full">
          <Competences />
          <Etudes />
        </div>
      </div>
    </div>
  );
};

export default APropos;
