// src/components/water-pollution-card.tsx
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Droplets, MapPin, TestTube, Factory } from 'lucide-react';
import { cn } from '@/lib/utils';

type WaterPollutionCardProps = React.ComponentProps<typeof Card> & {
  location: string;
};

export function WaterPollutionCard({ className, location, ...props }: WaterPollutionCardProps) {
   // Dummy data generation based on location
  const getDummyData = (loc: string) => {
    const hash = loc.split('').reduce((acc, char) => char.charCodeAt(0) + ((acc << 5) - acc), 0);
    const turbidity = (Math.abs(hash) % 150) / 10;
    const chemicals = Math.abs(hash) % 3 === 0 ? 'High' : Math.abs(hash) % 2 === 0 ? 'Medium' : 'Low';
    return { turbidity, chemicals };
  }
  const { turbidity, chemicals } = getDummyData(location);

  return (
    <Card className={cn(className)} {...props}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Droplets className="h-6 w-6 text-primary" />
          <span>Water Pollution</span>
        </CardTitle>
        <CardDescription className="flex items-center gap-1.5 pt-1">
          <MapPin className="h-4 w-4" />
          {location}
        </CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-4">
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-primary/10 p-3">
            <TestTube className="h-6 w-6 text-primary" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Turbidity</p>
            <p className="text-2xl font-bold">{turbidity.toFixed(1)} NTU</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
           <div className="rounded-full bg-primary/10 p-3">
            <Factory className="h-6 w-6 text-primary" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Chemicals</p>
            <p className="text-2xl font-bold">{chemicals}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
