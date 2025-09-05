import { FC } from "react";
import Image from "next/image";

interface SchoolCardProps {
  image: string;   
  name: string;
  board: string;
  location: string;
  area: string;
  rating: number;
  onApply?: () => void;
}

const CollegeCard: FC<SchoolCardProps> = ({
  image,
  name,
  board,
  location,
  area,
  rating,
  onApply
}) => {
  return (
    <div className="max-w-xsm bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 flex flex-col group">
      {/* College Image */}
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-105"
        />
        {/* Save/Add Icon */}
        <button className="absolute top-2 right-2 w-11 cursor-pointer bg-white rounded-full p-2 shadow hover:bg-gray-100">
          <span className="text-lg font-bold text-gray-700">+</span>
        </button>
      </div>

      {/* College Info */}
      <div className="flex-1  flex flex-col justify-between">
        <div className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center mt-4 space-x-1">
            {[...Array(rating)].map((_, i) => (
              <svg
                key={i}
                className="w-4 h-4 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.562-.955L10 0l2.95 5.955 6.562.955-4.756 4.635 1.122 6.545z" />
              </svg>
            ))}
          </div>
            <p className="text-blue-400">ICSE</p>
          </div>
          <p className="text-sm text-gray-500 my-4">{location}</p>

          {/* Rating */}
          

          {/* Board Info */}
          {/* <div className="mt-2 text-sm text-gray-600">
            Board: <span className="font-medium">{board}</span>
          </div> */}
          <h3 className="text-lg font-semibold text-gray-800 my-6">{name}</h3>

          {/* Area */}
          <div className="mt-1 text-sm text-gray-600">
            Area: <span className="font-medium">{area}</span>
          </div>
        </div>

        {/* Apply Button */}
        <div className="mt-4">
          <button
            onClick={onApply}
            className="w-full bg-green-600 cursor-pointer text-white py-2 rounded-b hover:bg-green-700 transition"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CollegeCard;
