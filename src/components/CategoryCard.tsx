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
    <Link to={href} className="block group">
      <Card className="h-full hover:shadow-lg transition-all duration-300 hover:border-primary/30 overflow-hidden">
        <CardContent className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className={cn("w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center", iconColor)}>
              <Icon className="w-6 h-6" />
            </div>
            {badge && (
              <Badge
                className={cn(
                  "font-semibold",
                  badge.variant === "trending" && "bg-warning text-foreground",
                  badge.variant === "featured" && "bg-accent text-foreground"
                )}
              >
                {badge.text}
              </Badge>
            )}
          </div>

          <div className="space-y-2 mb-4">
            <p className="text-sm text-muted-foreground">{count}</p>
            <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>

          <div className="flex items-center text-primary group-hover:translate-x-1 transition-transform">
            <span className="text-sm font-semibold mr-1">View {title}</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CategoryCard;
