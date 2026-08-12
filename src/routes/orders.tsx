import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { MaterialIcon } from "@/components/MaterialIcon";
import { BottomNav } from "@/components/BottomNav";

export const Route = createFileRoute("/orders")({
  component: OrdersPage,
  head: () => ({
    meta: [
      { title: "Merchant Orders List" },
      { name: "description", content: "Manage and track your customer orders." },
      { property: "og:title", content: "Merchant Orders List" },
      { property: "og:description", content: "Manage and track your customer orders." },
    ],
  }),
});

const FILTERS = ["All", "Processing", "Shipped", "Delivered", "Payment Failed"] as const;

type Order = {
  id: string;
  time: string;
  customer: string;
  status: (typeof FILTERS)[number];
  itemsLabel: string;
  itemIcon?: string;
  total: string;
  variant: "default" | "error";
};

const orders: Order[] = [
  {
    id: "#ORD-2094",
    time: "Today, 10:42 AM",
    customer: "Priya S.",
    status: "Processing",
    itemsLabel: "x3",
    itemIcon: "shopping_bag",
    total: "₹2,500",
    variant: "default",
  },
  {
    id: "#ORD-2093",
    time: "Yesterday",
    customer: "Rahul M.",
    status: "Shipped",
    itemsLabel: "x1",
    itemIcon: "headphones",
    total: "₹8,999",
    variant: "default",
  },
  {
    id: "#ORD-2092",
    time: "Oct 12, 2023",
    customer: "Ananya K.",
    status: "Delivered",
    itemsLabel: "x2",
    total: "₹1,250",
    variant: "default",
  },
  {
    id: "#ORD-2091",
    time: "Oct 11, 2023",
    customer: "Vikram D.",
    status: "Payment Failed",
    itemsLabel: "x1",
    total: "₹4,500",
    variant: "error",
  },
];

function statusBadgeClasses(status: Order["status"]) {
  switch (status) {
    case "Processing":
      return "bg-primary-fixed border border-primary-fixed-dim text-on-primary-fixed";
    case "Shipped":
      return "bg-secondary-fixed border border-secondary-fixed-dim text-on-secondary-fixed";
    case "Delivered":
      return "bg-surface-container-highest border border-surface-variant text-on-surface-variant";
    case "Payment Failed":
      return "bg-error text-on-error";
    default:
      return "";
  }
}

function OrdersPage() {
  const [activeFilter, setActiveFilter] = useState<(typeof FILTERS)[number]>("All");

  const filteredOrders =
    activeFilter === "All" ? orders : orders.filter((o) => o.status === activeFilter);

  return (
    <div className="bg-background text-on-background min-h-screen font-body-md flex flex-col">
      {/* TopAppBar */}
      <header className="sticky top-0 w-full z-50 flex justify-between items-center px-margin-mobile h-14 bg-surface border-b border-surface-variant md:px-margin-desktop md:border-b-0 md:shadow-sm">
        <div className="flex items-center">
          <button className="p-2 -ml-2 text-primary hover:bg-surface-container-low transition-colors rounded-full md:hidden">
            <MaterialIcon name="arrow_back" />
          </button>
          <h1 className="ml-2 font-display-lg text-display-lg font-bold text-on-surface">Shop</h1>
        </div>
        <button className="p-2 -mr-2 text-primary hover:bg-surface-container-low transition-colors rounded-full">
          <MaterialIcon name="more_horiz" />
        </button>
      </header>

      {/* Main Content Canvas */}
      <main className="w-full max-w-[1200px] mx-auto pb-[80px] md:pb-lg md:pt-lg flex-grow">
        {/* Page Header */}
        <div className="px-margin-mobile md:px-margin-desktop py-lg">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-md">
            <div>
              <h2 className="font-headline-md-mobile text-headline-md-mobile md:font-headline-md md:text-headline-md text-on-background">
                Active Orders
              </h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-sm">
                Manage and track your customer orders.
              </p>
            </div>
            <div className="flex gap-sm">
              <div className="relative flex-1 md:w-64">
                <MaterialIcon
                  name="search"
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-outline"
                />
                <input
                  className="w-full h-[44px] pl-10 pr-4 bg-surface-container-lowest border border-surface-variant rounded-lg font-body-md text-body-md focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-colors"
                  placeholder="Search orders..."
                  type="text"
                />
              </div>
              <button className="h-[44px] px-md bg-surface-container-lowest border border-surface-variant rounded-lg flex items-center gap-xs hover:bg-surface-container-low transition-colors text-on-surface">
                <MaterialIcon name="filter_list" className="text-outline" />
                <span className="font-label-md text-label-md hidden md:inline">Filter</span>
              </button>
            </div>
          </div>

          {/* Status Filter Tabs */}
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide mt-md">
            {FILTERS.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`whitespace-nowrap px-4 h-9 rounded-full font-label-sm text-label-sm border transition-colors ${
                  activeFilter === filter
                    ? "bg-primary text-on-primary border-primary"
                    : "bg-surface-container-lowest text-on-surface border-surface-variant hover:bg-surface-container-low"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Orders List - Bento Grid Style on Desktop */}
        <div className="px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md">
          {filteredOrders.map((order) =>
            order.variant === "error" ? (
              <div
                key={order.id}
                className="bg-error-container border border-error rounded-xl p-md hover:border-error transition-colors group cursor-pointer relative overflow-hidden flex flex-col justify-between min-h-[160px]"
              >
                <div className="flex justify-between items-start mb-md">
                  <div>
                    <div className="flex items-center gap-xs mb-unit">
                      <span className="font-label-md text-label-md text-on-error-container">{order.id}</span>
                      <span className="w-1 h-1 rounded-full bg-on-error-container opacity-50"></span>
                      <span className="font-body-sm text-body-sm text-on-error-container opacity-80">{order.time}</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-error-container">{order.customer}</h3>
                  </div>
                  <span className="px-sm py-unit bg-error text-on-error rounded-full font-label-sm text-label-sm flex items-center gap-xs">
                    <MaterialIcon name="warning" className="text-[14px]" />
                    Payment Failed
                  </span>
                </div>
                <div className="flex justify-between items-end mt-auto pt-md border-t border-error border-opacity-20">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-surface-container-lowest border-2 border-error-container flex items-center justify-center text-on-error-container font-label-sm text-label-sm">
                      {order.itemsLabel}
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-body-sm text-body-sm text-on-error-container opacity-80">Total Amount</p>
                    <p className="font-headline-md-mobile text-headline-md-mobile text-on-error-container">{order.total}</p>
                  </div>
                </div>
              </div>
            ) : (
              <div
                key={order.id}
                className={`bg-surface-container-lowest border border-surface-variant rounded-xl p-md hover:border-outline-variant transition-colors group cursor-pointer relative overflow-hidden flex flex-col justify-between min-h-[160px] ${
                  order.status === "Delivered" ? "opacity-75" : ""
                }`}
              >
                <div className="flex justify-between items-start mb-md">
                  <div>
                    <div className="flex items-center gap-xs mb-unit">
                      <span className="font-label-md text-label-md text-on-surface">{order.id}</span>
                      <span className="w-1 h-1 rounded-full bg-outline"></span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">{order.time}</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-background">{order.customer}</h3>
                  </div>
                  <span className={`px-sm py-unit rounded-full font-label-sm text-label-sm ${statusBadgeClasses(order.status)}`}>
                    {order.status}
                  </span>
                </div>
                <div className="flex justify-between items-end mt-auto pt-md border-t border-surface-variant border-opacity-50">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-surface-container-high border-2 border-surface-container-lowest flex items-center justify-center text-on-surface-variant font-label-sm text-label-sm">
                      {order.itemsLabel}
                    </div>
                    {order.itemIcon && (
                      <div className="w-8 h-8 rounded-full bg-surface-container border-2 border-surface-container-lowest flex items-center justify-center">
                        <MaterialIcon name={order.itemIcon} className="text-[16px] text-outline" />
                      </div>
                    )}
                  </div>
                  <div className="text-right">
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Total Amount</p>
                    <p className="font-headline-md-mobile text-headline-md-mobile text-on-background">{order.total}</p>
                  </div>
                </div>
              </div>
            )
          )}
        </div>

        {/* Load More */}
        <div className="flex justify-center mt-lg px-margin-mobile pb-xl">
          <button className="h-[44px] px-xl bg-transparent border border-outline text-on-background rounded-lg font-label-md text-label-md hover:bg-surface-container-lowest transition-colors">
            Load More Orders
          </button>
        </div>
      </main>

      <BottomNav active="shop" />
    </div>
  );
}
