import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { productCategories } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { regionNames } from "@/lib/utils";

interface CategoryFilterProps {
  onFilterChange: (filters: FilterState) => void;
  initialFilters?: Partial<FilterState>;
}

export interface FilterState {
  category: string;
  region: string;
  priceRange: [number, number];
  material: string;
}

const PRICE_MIN = 0;
const PRICE_MAX = 5000;

const materialOptions = [
  "All Materials",
  "Wood",
  "Clay",
  "Cloth",
  "Bamboo",
  "Metal",
  "Paper",
];

const CategoryFilter = ({ onFilterChange, initialFilters }: CategoryFilterProps) => {
  const [filters, setFilters] = useState<FilterState>({
    category: initialFilters?.category || "All Categories",
    region: initialFilters?.region || "All Regions",
    priceRange: initialFilters?.priceRange || [PRICE_MIN, PRICE_MAX],
    material: initialFilters?.material || "All Materials",
  });

  const [expanded, setExpanded] = useState(false);

  const handleCategoryClick = (category: string) => {
    const newFilters = { ...filters, category };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleRegionChange = (region: string) => {
    const newFilters = { ...filters, region };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handlePriceChange = (values: number[]) => {
    const newFilters = { ...filters, priceRange: [values[0], values[1]] as [number, number] };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleMaterialChange = (material: string) => {
    const newFilters = { ...filters, material };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const resetFilters = () => {
    const defaultFilters = {
      category: "All Categories",
      region: "All Regions",
      priceRange: [PRICE_MIN, PRICE_MAX] as [number, number],
      material: "All Materials",
    };
    setFilters(defaultFilters);
    onFilterChange(defaultFilters);
  };

  // For mobile view
  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="bg-white rounded-lg shadow p-5">
      <div className="md:hidden mb-4">
        <Button 
          variant="outline" 
          onClick={toggleExpanded}
          className="w-full justify-between"
        >
          Filter Products
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`transition-transform ${expanded ? 'rotate-180' : ''}`}
          >
            <path d="m6 9 6 6 6-6"></path>
          </svg>
        </Button>
      </div>

      <div className={`space-y-6 ${expanded ? 'block' : 'hidden md:block'}`}>
        <div>
          <h3 className="font-medium text-lg mb-3">Categories</h3>
          <div className="flex flex-wrap gap-2">
            {productCategories.map((category) => (
              <Badge
                key={category}
                variant={filters.category === category ? "default" : "outline"}
                className={`cursor-pointer text-sm py-1 px-3 ${
                  filters.category === category
                    ? "bg-[#E64A19] hover:bg-[#BF360C]"
                    : "hover:bg-gray-100"
                }`}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="region">
            <AccordionTrigger className="font-medium text-lg">Region</AccordionTrigger>
            <AccordionContent>
              <Select value={filters.region} onValueChange={handleRegionChange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Region" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All Regions">All Regions</SelectItem>
                  {regionNames.map((region) => (
                    <SelectItem key={region} value={region}>
                      {region}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="price">
            <AccordionTrigger className="font-medium text-lg">Price Range</AccordionTrigger>
            <AccordionContent>
              <div className="pt-4 px-2">
                <Slider
                  defaultValue={[filters.priceRange[0], filters.priceRange[1]]}
                  max={PRICE_MAX}
                  step={100}
                  onValueChange={handlePriceChange}
                />
                <div className="flex justify-between mt-2 text-sm text-gray-600">
                  <span>₹{filters.priceRange[0]}</span>
                  <span>₹{filters.priceRange[1]}</span>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="material">
            <AccordionTrigger className="font-medium text-lg">Material</AccordionTrigger>
            <AccordionContent>
              <Select value={filters.material} onValueChange={handleMaterialChange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Material" />
                </SelectTrigger>
                <SelectContent>
                  {materialOptions.map((material) => (
                    <SelectItem key={material} value={material}>
                      {material}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="pt-4">
          <Button variant="outline" onClick={resetFilters} className="w-full">
            Reset Filters
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;
