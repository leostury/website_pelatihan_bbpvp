import React from "react";

const Title = ({ title, desc }) => {
  return (
    <div className="text-center max-w-3xl">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
        {title}
      </h2>
      <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400">
        {desc}
      </p>
    </div>
  );
};

export default Title;
