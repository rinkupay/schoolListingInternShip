import React from "react";

const Loader = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-black/20 z-[9999]">
    <div className="w-12 h-12 border-8 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
  </div>
);

export default Loader;
