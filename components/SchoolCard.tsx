// components/SchoolCard.tsx
import { FC } from "react";
import { Star } from "lucide-react";
import Image from "next/image";

interface SchoolCardProps {
  image: string;   // e.g., "/schoolImages/front.jpeg"
  name: string;
  board: string;
  location: string;
  area: string;
  rating: number;
}

const SchoolCard: FC<SchoolCardProps> = ({ image, name, area, rating }) => {
  return (
    <div className="group w-full max-w-[260px] sm:max-w-[280px] md:max-w-[300px] lg:max-w-[280px] bg-white rounded-2xl shadow-md overflow-hidden border hover:shadow-lg transition">
      {/* Image Section */}
      <div className="relative overflow-hidden">
        <Image
          src={image}
          alt={name}
          width={400}
          height={250}
          className="w-full h-36 sm:h-40 md:h-44 object-cover transform transition-transform duration-300 group-hover:scale-105"
        />
        <button className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-white rounded-full w-11 shadow-md p-2 hover:bg-gray-100 transition cursor-pointer flex items-center justify-center">
          <span className="text-pink-500 text-lg">+</span>
        </button>
      </div>

      {/* Info Section */}
      <div className="p-3 sm:p-4">
        {/* Rating + Board */}
        <div className="flex justify-between items-center text-xs sm:text-sm mb-1">
          <div className="flex items-center space-x-1">
            {Array.from({ length: 5 }, (_, i) => (
              <Star
                key={i}
                size={14}
                className={i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
              />
            ))}
          </div>
          {/* <span className="text-cyan-600 font-medium">{board}</span> */}
        </div>

        {/* Location */}
        {/* <p className="text-blue-500 text-xs sm:text-sm">{location}</p> */}

        {/* Name */}
        <h2 className="text-base sm:text-lg font-bold">{name}</h2>

        {/* Area */}
        <p className="text-gray-600 text-xs sm:text-sm">{area}</p>
      </div>

      {/* Button */}
      <div className="p-2 sm:p-3">
        <button className="w-full cursor-pointer bg-green-500 text-white text-sm sm:text-base font-semibold py-2 rounded-xl hover:bg-green-600 transition">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default SchoolCard;
