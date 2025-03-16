import React from "react";

const ListContainer = () => {
  return (
    <ul className="flex justify-around space-x-32">
      <li className="flex flex-col space-y-3 text-white">
        <ul>
          <li className="hover:text-Bright-Red">
            <a href="#">Home</a>
          </li>
          <li className="hover:text-Bright-Red">
            <a href="#">Pricing</a>
          </li>
          <li className="hover:text-Bright-Red">
            <a href="#">Product</a>
          </li>
          <li className="hover:text-Bright-Red">
            <a href="# ">About</a>
          </li>
        </ul>
      </li>
      <li className="flex flex-col space-y-3 text-white">
        <ul>
          <li className="hover:text-Bright-Red">
            <a href="#">Carees</a>
          </li>
          <li className=" hover:text-Bright-Red">
            <a href="#">Community</a>
          </li>
          <li className="hover:text-Bright-Red">
            <a href="#">Privacy Policy</a>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default ListContainer;
