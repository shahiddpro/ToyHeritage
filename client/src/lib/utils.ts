import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: string | number) {
  const numericPrice = typeof price === "string" ? parseFloat(price) : price;
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(numericPrice);
}

export function truncateText(text: string, maxLength: number) {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
}

export function getRandomId() {
  return Math.floor(Math.random() * 100000);
}

export const productCategories = [
  "All Categories",
  "Wooden Toys",
  "Clay Crafts",
  "Puppets & Dolls",
  "Cloth Toys",
  "Musical Toys",
  "Regional Specialties"
];

export const regionNames = [
  "North India",
  "South India",
  "East India",
  "West India"
];

export function getTruncatedImageUrl(url: string): string {
  // Return unmodified URL if it's a relative path (for local images)
  if (!url.startsWith('http')) {
    return url;
  }
  
  // Add file extension if missing and query parameters to get a smaller, optimized image
  const baseUrl = url.split('?')[0];
  
  // Unsplash images need a file extension and high-quality parameters
  if (baseUrl.includes('unsplash.com') && !baseUrl.endsWith('.jpg') && !baseUrl.endsWith('.jpeg') && !baseUrl.endsWith('.png')) {
    return `${baseUrl}.jpg?auto=format&fit=crop&w=600&q=80`;
  }
  
  // For other URLs, just add quality parameters
  return `${baseUrl}?w=600&q=80`;
}
