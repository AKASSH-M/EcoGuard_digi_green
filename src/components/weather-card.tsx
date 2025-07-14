import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { CloudSun, Droplets, MapPin, Thermometer, Wind } from 'lucide-react';
import { cn } from '@/lib/utils';

type WeatherCardProps = React.ComponentProps<typeof Card>;

export function WeatherCard({ className, ...props }: WeatherCardProps) {
  return (
    <Card className={cn(className)} {...props}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CloudSun className="h-6 w-6 text-primary" />
          <span>Current Weather</span>
        </CardTitle>
        <CardDescription className="flex items-center gap-1.5 pt-1">
          <MapPin className="h-4 w-4" />
          Singapore
        </CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-4">
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-primary/10 p-3">
            <Thermometer className="h-6 w-6 text-primary" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Temperature</p>
            <p className="text-2xl font-bold">28°C</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
           <div className="rounded-full bg-primary/10 p-3">
            <Wind className="h-6 w-6 text-primary" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Wind</p>
            <p className="text-2xl font-bold">12 km/h</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
           <div className="rounded-full bg-primary/10 p-3">
            <Droplets className="h-6 w-6 text-primary" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Humidity</p>
            <p className="text-2xl font-bold">75%</p>
          </div>
        </div>
         <div className="flex items-center gap-3">
          <div className="rounded-full bg-primary/10 p-3">
            <CloudSun className="h-6 w-6 text-primary" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Condition</p>
            <p className="text-xl font-bold">Partly Cloudy</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
