import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Annotations = () => {
  return (
    <div>
      <table className="w-full lg:min-w-[220px]">
        <thead className="bg-[#5344C7]">
          <div className="flex  items-center justify-between m-2">
            <th className="mx-4 py-5 text-white text-2xl">Annotations</th>
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
              The Sliding Mr. Bones
            </td>
          </tr>
          <tr>
            <td className="border border-slate-300 p-3">Witchy Woman</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Annotations;
