// src/components/deforestation-card.tsx
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Axe, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Progress } from '@/components/ui/progress';

type DeforestationCardProps = React.ComponentProps<typeof Card> & {
  location: string;
};

export function DeforestationCard({ className, location, ...props }: DeforestationCardProps) {
  // Dummy data generation based on location
  const getDummyData = (loc: string) => {
    const hash = loc.split('').reduce((acc, char) => char.charCodeAt(0) + ((acc << 5) - acc), 0);
    const forestCover = Math.abs(hash) % 90;
    const annualLoss = `${(Math.abs(hash) % 20).toFixed(1)}M ha`;
    return { forestCover, annualLoss };
  }
  const { forestCover, annualLoss } = getDummyData(location);

  return (
    <Card className={cn(className)} {...props}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Axe className="h-6 w-6 text-primary" />
          <span>Deforestation</span>
        </CardTitle>
        <CardDescription className="flex items-center gap-1.5 pt-1">
          <MapPin className="h-4 w-4" />
          {location} - Annual Forest Loss
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex items-baseline justify-center gap-2">
          <span className="text-5xl font-bold">{annualLoss}</span>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Remaining Forest Cover</span>
            <span className="font-medium text-primary">{forestCover}%</span>
          </div>
          <Progress value={forestCover} className="h-3" />
        </div>
        <p className="text-center text-xs text-muted-foreground">Source: Simulated Data</p>
      </CardContent>
    </Card>
  );
}
