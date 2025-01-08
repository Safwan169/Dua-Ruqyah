"use client";
import { useContext } from "react";
import CategorySearchBar from "./CategorySearchBar";
import HeaderText from "./HeaderText";

import AllCategory from "./AllCategory";
import { my_context } from "@/app/ContextProvider";
// export async function getStaticProps() {
//   try {
//     // Fetch data from your Node.js API
//     const res = await axios("https://islamic-server.vercel.app/api/categories")

//     // Check if the fetch was successful
//     if (!res.ok) {
//       throw new Error("Failed to fetch categories");
//     }

//     const categories = await res.data;

//     return {
//       props: { categories }, // Pass categories to the page
//       revalidate: 10, // Revalidate every 10 seconds (Incremental Static Regeneration)
//     };
//   } catch (error) {
//     console.error("Error fetching categories:", error);
//     return {
//       props: { categories: [] }, // Fallback in case of an error
//     };
//   }
// }

const CategoryHeder = () => {
  const {cartData}=useContext(my_context)

  return (
    <div className="mb-10 mt-2 hidden xl:block rounded-2xl">
      <div className="w-[350px] mt-4  bg-white mx-10">
        <HeaderText />
        {/* Search Input */}
        <CategorySearchBar  />
      </div>

      <div className="w-[350px] h-[90%] overflow-hidden mb-20   overflow-y-scroll bg-white rounded-b-lg mx-10 ">
        {/* Header */}
        <AllCategory  data={cartData} />

      </div>
    </div>
  );
};

export default CategoryHeder;
