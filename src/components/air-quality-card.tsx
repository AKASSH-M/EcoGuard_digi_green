import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Wind } from 'lucide-react';
import { cn } from '@/lib/utils';

type AirQualityCardProps = React.ComponentProps<typeof Card>;

export function AirQualityCard({ className, ...props }: AirQualityCardProps) {
  const psi = 45;
  const quality = 'Good';

  return (
    <Card className={cn(className)} {...props}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Wind className="h-6 w-6 text-primary" />
          <span>Air Quality</span>
        </CardTitle>
        <CardDescription>24-hr PSI Reading</CardDescription>
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
        <p className="text-center text-xs text-muted-foreground">PM2.5: 11 µg/m³ (Normal)</p>
      </CardContent>
    </Card>
  );
}
