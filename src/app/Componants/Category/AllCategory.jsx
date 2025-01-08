
'use client'
import { useContext } from "react";
import SubCategory from "./subCategory/SubCategory";
import { my_context } from "@/app/ContextProvider";
const AllCategory = ({ data}) => {

const {categoryId,setCategoryId }=useContext(my_context)

  return (
    <div>
      {data?.map((item, index) => (
        <div
          className="cursor-pointer"
          key={index}
          onClick={() => setCategoryId(item?.id)}
        >
          <div
            className={`${
              categoryId == item?.id ? "bg-blue-50" : ""
            } rounded-lg mt-5 mx-2 p-3 flex items-center`}
          >
            {/* Icon */}
            <div className="w-16 h-12 rounded-lg bg-white flex items-center justify-center shadow-sm mr-4">
              <img
                src={`/${item?.icon}.svg`} // Replace with the correct path for your icon
                alt="Icon"
                className="w-10 h-10"
              />
            </div>

            {/* Content */}
            <div className="flex w-full justify-between">
              <div className="text-left">
                <h2 className="text-lg font-semibold text-gray-800">
                  {item?.name}
                </h2>
                <p className="text-sm text-gray-400">
                  Subcategory: {item?.no_of_subcat}
                </p>
              </div>

              {/* Count */}
              <div className="text-center">
                <span className="text-lg font-semibold text-gray-800">
                  {item?.no_of_dua}
                </span>
                <p className="text-sm text-gray-400">Duas</p>
              </div>
            </div>
          </div>
          <div>

            {
              categoryId==item.id &&<div>
                {
                  item?.subcategories.map((subitem, subindex) => (
                    <SubCategory  key={subindex} data={subitem} />
                  ))
                }
              </div>

            }
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllCategory;
