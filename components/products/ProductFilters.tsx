'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";

interface ProductFiltersProps {
  onFilterChange: (filters: { priceRange: number[], category: string }) => void;
}

export default function ProductFilters({ onFilterChange }: ProductFiltersProps) {
  const [priceRange, setPriceRange] = useState([500, 20000]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handlePriceChange = (newPriceRange: number[]) => {
    setPriceRange(newPriceRange);
    onFilterChange({ priceRange: newPriceRange, category: selectedCategory });
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    onFilterChange({ priceRange, category });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Filters</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="font-medium">Price Range</h3>
          <Slider
            defaultValue={priceRange}
            max={20000}
            step={100}
            value={priceRange}
            onValueChange={handlePriceChange}
          />
          <div className="flex justify-between text-sm">
            <span>₹{priceRange[0]}</span>
            <span>₹{priceRange[1]}</span>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-medium">Category</h3>
          <RadioGroup 
            value={selectedCategory} 
            onValueChange={handleCategoryChange}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="all" id="all" />
              <Label htmlFor="all">All</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="mc" id="mc" />
              <Label htmlFor="mc">Motorcycles</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="lmv" id="lmv" />
              <Label htmlFor="lmv">Light Motor Vehicle</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="hmv" id="hmv" />
              <Label htmlFor="hmv">Heavy Motor Vehicle</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="rickshaw" id="rickshaw" />
              <Label htmlFor="rickshaw">Rickshaw</Label>
            </div>
          </RadioGroup>
        </div>
      </CardContent>
    </Card>
  );
}