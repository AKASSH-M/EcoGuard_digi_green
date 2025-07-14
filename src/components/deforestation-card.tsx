import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Axe, Trees } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Progress } from '@/components/ui/progress';

type DeforestationCardProps = React.ComponentProps<typeof Card>;

export function DeforestationCard({ className, ...props }: DeforestationCardProps) {
  const forestCover = 28; // Percentage
  const annualLoss = "10M ha";

  return (
    <Card className={cn(className)} {...props}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Axe className="h-6 w-6 text-primary" />
          <span>Deforestation</span>
        </CardTitle>
        <CardDescription>Global Annual Forest Loss</CardDescription>
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
        <p className="text-center text-xs text-muted-foreground">Source: World Wildlife Fund</p>
      </CardContent>
    </Card>
  );
}
