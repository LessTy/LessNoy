import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface CategoryCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  count: string;
  badge?: {
    text: string;
    variant: "trending" | "featured";
  };
  iconColor?: string;
  href?: string;
}

const CategoryCard = ({
  icon: Icon,
  title,
  description,
  count,
  badge,
  iconColor = "text-primary",
  href = "/",
}: CategoryCardProps) => {
  return (
    <Link to={href} className="block group min-w-0 h-full">
      <Card className="h-full transition-all duration-300 overflow-hidden bg-black/20 backdrop-blur-sm border border-white/10 hover:shadow-lg hover:border-primary/30 flex flex-col">
        <CardContent className="p-5 sm:p-7 pb-10 sm:pb-14 flex flex-col flex-grow">
          <div className="flex items-start justify-between">
            <div className={cn("w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center", iconColor)}>
              <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
          </div>

          <div className="space-y-1 mb-2 flex-grow flex flex-col justify-center">
            <p className="text-xs sm:text-sm text-muted-foreground">{count}</p>
            <h3 className="text-lg sm:text-xl font-bold group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground">{description}</p>
          </div>

        </CardContent>
      </Card>
    </Link>
  );
};

export default CategoryCard;