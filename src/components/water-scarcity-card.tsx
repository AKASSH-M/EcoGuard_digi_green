// src/components/water-scarcity-card.tsx
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Droplet, TrendingDown, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

type WaterScarcityCardProps = React.ComponentProps<typeof Card> & {
  location: string;
};

export function WaterScarcityCard({ className, location, ...props }: WaterScarcityCardProps) {
  // Dummy data generation based on location
  const getDummyData = (loc: string) => {
    const hash = loc.split('').reduce((acc, char) => char.charCodeAt(0) + ((acc << 5) - acc), 0);
    const stressLevelNum = Math.abs(hash) % 4;
    const levels = ['Low', 'Medium', 'High', 'Critical'];
    const stressLevel = levels[stressLevelNum];
    const variants: ('default' | 'secondary' | 'destructive' | 'destructive')[] = ['default', 'secondary', 'destructive', 'destructive'];
    const badgeVariant = variants[stressLevelNum];

    return { stressLevel, badgeVariant };
  }
  const { stressLevel, badgeVariant } = getDummyData(location);

  return (
    <Card className={cn(className)} {...props}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Droplet className="h-6 w-6 text-primary" />
          <span>Water Scarcity</span>
        </CardTitle>
         <CardDescription className="flex items-center gap-1.5 pt-1">
          <MapPin className="h-4 w-4" />
          {location}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
                 <div className={`rounded-full p-3 ${badgeVariant === 'destructive' ? 'bg-destructive/10' : 'bg-primary/10'}`}>
                    <TrendingDown className={`h-6 w-6 ${badgeVariant === 'destructive' ? 'text-destructive' : 'text-primary'}`} />
                </div>
                <div>
                    <p className="text-sm text-muted-foreground">Water Stress Level</p>
                    <p className="text-2xl font-bold">{stressLevel}</p>
                </div>
            </div>
             <Badge variant={badgeVariant}>{stressLevel}</Badge>
        </div>
        <div className="text-sm text-muted-foreground space-y-1">
            <p>• 2 billion people lack access to safely managed drinking water globally.</p>
            <p>• Water demand is projected to increase by 55% by 2050.</p>
        </div>
      </CardContent>
    </Card>
  );
}
