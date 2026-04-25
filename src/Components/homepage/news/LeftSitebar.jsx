import Link from "next/link";
import React from "react";

const LeftSitebar = ({ categories, activeId }) => {

  const allCategories = categories?.news_category || [];

  return (
  <div>
      <h2 className="font-bold text-xl mb-4">All Category</h2>

      <div className="flex flex-col gap-2">
        {allCategories.map((category) => (
          <Link 
            key={category.category_id} 
            href={`/category/${category.category_id}`}
          >
            <button
              className={`w-full p-4 rounded-md font-semibold text-left text-lg transition-all ${
                String(activeId) === String(category.category_id)
                  ? "bg-[#E7E7E7] text-black"
                  : "bg-white text-[#9F9F9F] hover:bg-slate-50 hover:text-black"
              }`}
            >
              {category.category_name}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LeftSitebar;