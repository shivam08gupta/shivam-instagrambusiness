import { Link } from "@tanstack/react-router";
import { MaterialIcon } from "@/components/MaterialIcon";

type NavKey = "home" | "shop" | "activity" | "profile";

const items: { key: NavKey; label: string; icon: string; to: string }[] = [
  { key: "home", label: "Home", icon: "home", to: "/dashboard" },
  { key: "shop", label: "Shop", icon: "shopping_bag", to: "/orders" },
  { key: "activity", label: "Activity", icon: "favorite", to: "/orders" },
  { key: "profile", label: "Profile", icon: "person", to: "/profile" },
];

export function BottomNav({ active }: { active: NavKey }) {
  return (
    <nav className=" fixed bottom-0 w-full z-50 flex justify-around items-center bg-surface px-4 py-2 pb-safe border-t border-surface-variant dark:border-outline-variant">
      {items.map((item) => {
        const isActive = item.key === active;
        return (
          <Link
            key={item.key}
            to={item.to}
            className={`flex flex-col items-center justify-center w-16 hover:opacity-80 active:scale-95 transition-transform duration-100 ${
              isActive
                ? "text-primary font-bold"
                : "text-on-surface-variant dark:text-outline"
            }`}
          >
            <MaterialIcon name={item.icon} filled={isActive} />
            <span className="font-label-sm text-label-sm mt-1">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
