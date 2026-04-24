import Image from "next/image";
import { format } from "date-fns";
import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <div className="text-center py-10 bg-gray-100">
      
      {/* Logo */}
      <div className="flex justify-center mb-4">
        <Image src={logo} alt="Logo" width={260} height={120} />
      </div>

     

     
      <p className="text-gray-500 mt-2 text-sm md:text-base">
        Journalism Without Fear or Favour
      </p>

  
      <p className="text-gray-600 mt-2 font-medium">
        {format(new Date(), "EEEE, MMMM dd, yyyy")}
      </p>

    </div>
  );
};

export default Header;