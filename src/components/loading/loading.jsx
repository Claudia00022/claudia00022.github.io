
import { Smile } from "lucide-react";

export default function LoadingPage() {


  return (
    <div className="fixed inset-0 bg-[#EB5939] flex items-center justify-center z-50">
      <div className="text-center text-white max-w-md mx-auto ">
        {/* Logo/Ikona */}
        <div className=" mb-2 ">
          <div
            className="rounded-full flex items-center justify-center animate-spin "
            style={{ animationDuration: "4s" }}
          >
            <Smile className="text-[#0D0D0D] xs:w-20 xs:h-20 lg:w-40 lg:h-40" />
          </div>
        </div>
        <div className=" flex items-center justify-center">
          {/* Tytuł */}
          <h1 className=" xs: text-base lg:text-base font-bold mb-2 text text-[#0D0D0D]">
            loading
          </h1>

          <div className="flex justify-center space-x-1 ms-2">
            <div className="w-1 h-1 bg-[#19b9e6] rounded-full animate-pulse"></div>
            <div
              className="w-1 h-1 bg-[#19b9e6] rounded-full animate-pulse"
              style={{ animationDelay: "0.2s" }}
            ></div>
            <div
              className="w-1 h-1 bg-[#19b9e6] rounded-full animate-pulse"
              style={{ animationDelay: "0.4s" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
