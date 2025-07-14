import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Mountain, MapPin, Recycle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

type LandPollutionCardProps = React.ComponentProps<typeof Card>;

const pollutionSites = [
  { name: 'Industrial Zone Alpha', level: 'High', distance: '2.5 km' },
  { name: 'Downtown Riverbank', level: 'Medium', distance: '5.1 km' },
  { name: 'Greenwood Park', level: 'Low', distance: '8.2 km' },
  { name: 'Old Landfill Site', level: 'High', distance: '12.4 km' },
  { name: 'Suburban Creek', level: 'Low', distance: '15.0 km' },
];

export function LandPollutionCard({ className, ...props }: LandPollutionCardProps) {
  const getLevelVariant = (level: string) => {
    if (level === 'High') return 'destructive';
    if (level === 'Medium') return 'secondary';
    return 'default';
  };

  return (
    <Card className={cn("flex flex-col", className)} {...props}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Mountain className="h-6 w-6 text-primary" />
          <span>Land Pollution</span>
        </CardTitle>
        <CardDescription>Nearby soil contamination sites.</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <ScrollArea className="h-48">
          <div className="space-y-4">
            {pollutionSites.map((site) => (
              <div key={site.name} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">{site.name}</p>
                    <p className="text-sm text-muted-foreground">{site.distance}</p>
                  </div>
                </div>
                <Badge variant={getLevelVariant(site.level) as any}>{site.level}</Badge>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
