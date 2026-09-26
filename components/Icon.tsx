import { UtensilsCrossed, Soup, Salad, ChefHat, Leaf, Flame, Coffee, CakeSlice, Star, Sun, ShieldCheck, Clock, Users, BadgeCheck, Sparkles, Award, LucideIcon } from "lucide-react";

const map: Record<string, LucideIcon> = { UtensilsCrossed, Soup, Salad, ChefHat, Leaf, Flame, Coffee, CakeSlice, Star, Sun, ShieldCheck, Clock, Users, BadgeCheck, Sparkles, Award };

export default function Icon({ name, className }: { name: string; className?: string }) {
  const C = map[name] ?? UtensilsCrossed;
  return <C className={className} />;
}
