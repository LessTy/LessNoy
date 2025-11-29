import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe } from "lucide-react";

const DiasporaWelcome = () => {
  return (
    <div className="container mx-auto px-4 -mt-16 relative z-20">
      <Card className="bg-card/95 backdrop-blur-sm border-2 border-primary/20 p-6">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Globe className="w-5 h-5 text-primary" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-lg font-semibold">
                Вам знакомо это чувство?
              </h3>
              <Badge className="bg-warning text-foreground">
                Экзистенциальный кризис
              </Badge>
            </div>
            <p className="text-muted-foreground">
              Вы чувствуете, что жизнь идёт по инерции, без смысла и глубины?
              Пришло время перестроить отношение к существованию. Мы предлагаем
              путь трансформации через философию тороидальности и принципы
              пермакультуры.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default DiasporaWelcome;
