// import Image from "next/image";
 
import MainContent from '@/app/Componants/Main_Content/MainContent'
import CategoryHeder from "@/app/Componants/Category/CategoryHeder"
import LeftCategoryForSmallDevice from "@/app/Componants/Category/LeftCategoryForSmallDevice"
export default function Home() {
  return (
    <div className=' flex mb-10 '>

     <CategoryHeder/>
     <LeftCategoryForSmallDevice/>
      <MainContent />
    </div>
  );
}
