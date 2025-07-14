// src/components/air-quality-card.tsx
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Wind, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

type AirQualityCardProps = React.ComponentProps<typeof Card> & {
  location: string;
};

export function AirQualityCard({ className, location, ...props }: AirQualityCardProps) {
  // Dummy data generation based on location
  const getDummyData = (loc: string) => {
    const hash = loc.split('').reduce((acc, char) => char.charCodeAt(0) + ((acc << 5) - acc), 0);
    const psi = Math.abs(hash) % 250;
    let quality = 'Good';
    if (psi > 200) quality = 'Hazardous';
    else if (psi > 150) quality = 'Unhealthy';
    else if (psi > 100) quality = 'Moderate';
    return { psi, quality };
  }
  const { psi, quality } = getDummyData(location);

  return (
    <Card className={cn(className)} {...props}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Wind className="h-6 w-6 text-primary" />
          <span>Air Quality</span>
        </CardTitle>
        <CardDescription className="flex items-center gap-1.5 pt-1">
          <MapPin className="h-4 w-4" />
          {location} - 24-hr PSI Reading
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex items-baseline justify-center gap-2">
          <span className="text-5xl font-bold">{psi}</span>
          <span className={`text-xl font-medium text-primary`}>{quality}</span>
        </div>
        <div className="space-y-1">
          <Progress value={(psi / 300) * 100} className="h-3" />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>0</span>
            <span>50</span>
            <span>100</span>
            <span>200</span>
            <span>300+</span>
          </div>
        </div>
        <p className="text-center text-xs text-muted-foreground">PM2.5: {(psi / 5).toFixed(1)} µg/m³</p>
      </CardContent>
    </Card>
  );
}
