import { DashboardHeader } from '@/components/dashboard-header';
import { WaterPollutionCard } from '@/components/water-pollution-card';
import { AirQualityCard } from '@/components/air-quality-card';
import { LandPollutionCard } from '@/components/land-pollution-card';
import { PersonalizedAlertCard } from '@/components/personalized-alert-card';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <DashboardHeader />
      <main className="p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <AirQualityCard className="lg:col-span-2" />
          <WaterPollutionCard />
          <LandPollutionCard className="md:col-span-2 lg:col-span-1" />
          <PersonalizedAlertCard className="md:col-span-2 lg:col-span-3 xl:col-span-4" />
        </div>
      </main>
    </div>
  );
}
