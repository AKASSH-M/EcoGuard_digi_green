// src/app/page.tsx
'use client';

import { useState } from 'react';
import { DashboardHeader } from '@/components/dashboard-header';
import { WaterPollutionCard } from '@/components/water-pollution-card';
import { AirQualityCard } from '@/components/air-quality-card';
import { LandPollutionCard } from '@/components/land-pollution-card';
import { PersonalizedAlertCard } from '@/components/personalized-alert-card';
import { DeforestationCard } from '@/components/deforestation-card';
import { WaterScarcityCard } from '@/components/water-scarcity-card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

export default function Home() {
  const [location, setLocation] = useState('Global');
  const [inputValue, setInputValue] = useState('');

  const handleLocationChange = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setLocation(inputValue.trim());
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <DashboardHeader />
      <main className="p-4 sm:p-6 lg:p-8">
        <div className="mb-6 rounded-lg border bg-card p-4 shadow-sm">
          <form
            onSubmit={handleLocationChange}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Enter a location (e.g., New York, Amazon Rainforest)"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="pl-10 text-base"
              />
            </div>
            <Button type="submit" className="w-full sm:w-auto">
              Search Location
            </Button>
          </form>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <AirQualityCard location={location} className="lg:col-span-2" />
          <WaterPollutionCard location={location} />
          <LandPollutionCard location={location} />
          <DeforestationCard location={location} />
          <WaterScarcityCard location={location} />
          <PersonalizedAlertCard className="md:col-span-2 lg:col-span-3 xl:col-span-4" />
        </div>
      </main>
    </div>
  );
}
