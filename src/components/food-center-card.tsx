import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { UtensilsCrossed, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

type FoodCenterCardProps = React.ComponentProps<typeof Card>;

const foodCenters = [
  { name: 'Maxwell Food Centre', grade: 'A', distance: '0.5 km' },
  { name: 'Lau Pa Sat', grade: 'A', distance: '1.2 km' },
  { name: 'Amoy Street Food Centre', grade: 'B', distance: '1.5 km' },
  { name: 'Chinatown Complex Food Centre', grade: 'A', distance: '2.1 km' },
  { name: 'Tiong Bahru Market', grade: 'C', distance: '3.0 km' },
];

export function FoodCenterCard({ className, ...props }: FoodCenterCardProps) {
  const getGradeVariant = (grade: string) => {
    if (grade === 'A') return 'default';
    if (grade === 'B') return 'secondary';
    return 'destructive';
  };

  return (
    <Card className={cn("flex flex-col", className)} {...props}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <UtensilsCrossed className="h-6 w-6 text-primary" />
          <span>Food Centers</span>
        </CardTitle>
        <CardDescription>Nearby hawker centers & hygiene grades.</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <ScrollArea className="h-48">
          <div className="space-y-4">
            {foodCenters.map((center) => (
              <div key={center.name} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">{center.name}</p>
                    <p className="text-sm text-muted-foreground">{center.distance}</p>
                  </div>
                </div>
                <Badge variant={getGradeVariant(center.grade) as any}>{center.grade}</Badge>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
