import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Droplet, TrendingDown, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

type WaterScarcityCardProps = React.ComponentProps<typeof Card>;

export function WaterScarcityCard({ className, ...props }: WaterScarcityCardProps) {
  return (
    <Card className={cn(className)} {...props}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Droplet className="h-6 w-6 text-primary" />
          <span>Water Scarcity</span>
        </CardTitle>
         <CardDescription className="flex items-center gap-1.5 pt-1">
          <MapPin className="h-4 w-4" />
          Global Outlook
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
                 <div className="rounded-full bg-destructive/10 p-3">
                    <TrendingDown className="h-6 w-6 text-destructive" />
                </div>
                <div>
                    <p className="text-sm text-muted-foreground">Water Stress Level</p>
                    <p className="text-2xl font-bold">High</p>
                </div>
            </div>
             <Badge variant="destructive">Critical</Badge>
        </div>
        <div className="text-sm text-muted-foreground space-y-1">
            <p>• 2 billion people lack access to safely managed drinking water.</p>
            <p>• Water demand is projected to increase by 55% by 2050.</p>
        </div>
      </CardContent>
    </Card>
  );
}
