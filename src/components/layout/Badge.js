import React from "react";

const Badge = ({ title, badge }) => {
  return (
    <>
      {badge && (
        <span className="absolute top-5 left-5 bg-primary py-2 px-8 font-dm text-sm font-bold text-white">
          {title}
        </span>
      )}
    </>
  );
};

export default Badge;
