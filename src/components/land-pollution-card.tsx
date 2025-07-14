// src/components/land-pollution-card.tsx
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Mountain, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

type LandPollutionCardProps = React.ComponentProps<typeof Card> & {
  location: string;
};

const pollutionSitesData: { [key: string]: { name: string; level: 'High' | 'Medium' | 'Low'; distance: string }[] } = {
  'default': [
    { name: 'Industrial Zone Alpha', level: 'High', distance: '2.5 km' },
    { name: 'Downtown Riverbank', level: 'Medium', distance: '5.1 km' },
    { name: 'Greenwood Park', level: 'Low', distance: '8.2 km' },
    { name: 'Old Landfill Site', level: 'High', distance: '12.4 km' },
    { name: 'Suburban Creek', level: 'Low', distance: '15.0 km' },
  ],
  'new york': [
    { name: 'Newtown Creek', level: 'High', distance: '3.1 km' },
    { name: 'Gowanus Canal', level: 'High', distance: '6.8 km' },
    { name: 'Liberty Industrial Finishers', level: 'Medium', distance: '10.2 km' },
  ],
   'amazon rainforest': [
    { name: 'Mining Operation Site', level: 'High', distance: '50.5 km' },
    { name: 'Illegal Logging Camp', level: 'Medium', distance: '75.1 km' },
  ],
};


export function LandPollutionCard({ className, location, ...props }: LandPollutionCardProps) {
  const getLevelVariant = (level: string) => {
    if (level === 'High') return 'destructive';
    if (level === 'Medium') return 'secondary';
    return 'default';
  };
  
  const sites = pollutionSitesData[location.toLowerCase()] || pollutionSitesData['default'];

  return (
    <Card className={cn("flex flex-col", className)} {...props}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Mountain className="h-6 w-6 text-primary" />
          <span>Land Pollution</span>
        </CardTitle>
        <CardDescription className="flex items-center gap-1.5 pt-1">
          <MapPin className="h-4 w-4" />
          {location}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <ScrollArea className="h-48">
          <div className="space-y-4">
            {sites.map((site) => (
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
