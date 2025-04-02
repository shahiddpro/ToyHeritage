import { Link } from "wouter";
import { getTruncatedImageUrl } from "@/lib/utils";

interface RegionCardProps {
  region: {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
  };
}

const RegionCard = ({ region }: RegionCardProps) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md transition-transform hover:-translate-y-2 duration-300">
      <div className="h-48 overflow-hidden">
        <img 
          src={getTruncatedImageUrl(region.imageUrl)}
          alt={`Traditional crafts from ${region.name}`} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-5">
        <h3 className="font-medium text-xl mb-2">{region.name}</h3>
        <p className="text-sm text-gray-600 mb-4">{region.description}</p>
        <Link href={`/region/${region.id}`}>
          <a className="text-[#E64A19] hover:text-[#BF360C] font-medium text-sm inline-flex items-center">
            Explore Region 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default RegionCard;
