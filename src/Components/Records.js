import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Records = () => {
  return (
    <div className="w-full lg:min-w-[220px]">
      <table>
        <thead className="bg-[#5344C7]">
          <div className="flex  items-center justify-between m-2">
            <th className="mx-4 py-5 text-white text-2xl">Song</th>
            <GiHamburgerMenu
              size={35}
              color={"white"}
              cursor={"pointer"}
            ></GiHamburgerMenu>
          </div>
        </thead>
        <tbody className="border-2 border-gray-400">
          <tr>
            <td className="border border-slate-300 p-3">
              1. Lorem ipsum dolor sit amet.
            </td>
          </tr>
          <tr>
            <td className="border border-slate-300 p-3">
              2. Lorem ipsum dolor sit amet.
            </td>
          </tr>
          <tr>
            <td className="border border-slate-300 p-3">
              3. Lorem ipsum dolor sit amet.
            </td>
          </tr>
          <tr>
            <td className="border border-slate-300 p-3">
              4. Lorem ipsum dolor sit amet.
            </td>
          </tr>
          <tr>
            <td className="border border-slate-300 p-3">
              5. Lorem ipsum dolor sit amet.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Records;
