import LeftSitebar from "@/Components/homepage/news/LeftSitebar";
import Image from "next/image";

async function getCategories() {
  const res = await fetch('https://openapi.programming-hero.com/api/news/categories');
  const data = await res.json();
  return data.data;
}

export default async function Home() {
  const categories = await getCategories();

  return (
    <div className="container mx-auto grid grid-cols-12 gap-4 py-4 my-[60px]">
      
      <div className="  col-span-3">
       <LeftSitebar categories={categories} activeId=""></LeftSitebar>
      </div>

      <div className="font-bold text-3xl bg-red-50 col-span-6">
        all n
      </div>

      <div className="font-bold text-3xl bg-blue-50 col-span-3">
        social
      </div>

    </div>
  );
}