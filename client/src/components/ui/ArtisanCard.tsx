import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import { getTruncatedImageUrl } from "@/lib/utils";

interface ArtisanCardProps {
  artisan: {
    id: number;
    name: string;
    region: string;
    bio: string;
    isArtisan: boolean;
  };
  imageUrl?: string;
  specialty?: string;
  experience?: string;
}

const ArtisanCard = ({ 
  artisan, 
  imageUrl = "/images/artisans/artisan-south.svg", 
  specialty = "Wooden Toys",
  experience = "Master Craftsman" 
}: ArtisanCardProps) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="relative h-64">
        <img 
          src={imageUrl}
          alt={`Artisan ${artisan.name}`} 
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
          <h3 className="font-medium text-xl text-white">{artisan.name}</h3>
          <p className="text-white text-opacity-90 text-sm">{artisan.region}</p>
        </div>
      </div>
      <div className="p-5">
        <div className="mb-4">
          <div className="flex items-center mb-2 flex-wrap gap-2">
            <Badge variant="outline" className="text-xs font-medium px-2 py-1 bg-[#E64A19] bg-opacity-10 rounded-full text-[#E64A19]">
              {experience}
            </Badge>
            <Badge variant="outline" className="text-xs font-medium px-2 py-1 bg-[#E64A19] bg-opacity-10 rounded-full text-[#E64A19]">
              {specialty}
            </Badge>
          </div>
          <p className="text-gray-600">{artisan.bio}</p>
        </div>
        <Link href={`/artisan/${artisan.id}`}>
          <a className="text-[#E64A19] hover:text-[#BF360C] font-medium text-sm inline-flex items-center">
            View Artisan Profile 
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

export default ArtisanCard;
