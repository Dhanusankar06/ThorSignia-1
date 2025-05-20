import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

interface HoverEffectProps {
  items: {
    title: string;
    description: React.ReactNode;
    link: string;
  }[];
  className?: string;
}

export const HoverEffect = ({ items, className }: HoverEffectProps) => {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10", className)}>
      {items.map((item, idx) => (
        <div key={idx} className="group p-2 h-full w-full">
          <Link to={item.link} className="block h-full">
            <Card>
              <div className="relative z-10">
                {item.description}
              </div>
              {/* Hover effect */}
              <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-[#88bf42]/0 to-[#0F0326]/0 group-hover:from-[#88bf42]/10 group-hover:to-[#0F0326]/10 transition-all duration-300 rounded-3xl" />
            </Card>
          </Link>
        </div>
      ))}
    </div>
  );
};

export const Card = ({ className, children }: CardProps) => {
  return (
    <div
      className={cn(
        "relative rounded-2xl h-full w-full overflow-hidden bg-white border border-transparent group-hover:border-[#88bf42]/30 shadow-lg hover:shadow-xl hover:shadow-[#88bf42]/20 transition-all duration-300",
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardTitle = ({ className, children }: CardProps) => {
  return (
    <h4 className={cn("text-[#0f0326] text-xl font-bold tracking-tight mt-4 mb-2 group-hover:text-[#88bf42] transition-all duration-300 leading-tight", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({ className, children }: CardProps) => {
  return (
    <div className={cn("text-[#696869] tracking-wide leading-relaxed text-sm p-6", className)}>
      {children}
    </div>
  );
};
