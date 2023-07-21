import React from "react";
import DataQuestions from "./data/DataQuestions";
import { useState } from "react";
import Questions from "./components/Questions";

const AppPractice = () => {
  const [dataQues, setQues] = useState(DataQuestions);
  return (
    <div className="flex justify-center w-full h-screen m-auto bg-purple-800">
      <div className="flex flex-row justify-between w-8/12 px-5 py-4 mt-10 bg-white rounded-lg h-fit">
        <div className="flex w-1/4 mr-4">
          <h2>Question And Answer about Login.</h2>
        </div>
        <div className="flex flex-col w-3/4 h-fit rounded-2xl">
          {dataQues.map((item) => (
            <Questions {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppPractice;
