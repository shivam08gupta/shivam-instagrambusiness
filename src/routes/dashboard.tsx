import { createFileRoute, Link } from "@tanstack/react-router";
import { MaterialIcon } from "@/components/MaterialIcon";
import { BottomNav } from "@/components/BottomNav";

export const Route = createFileRoute("/dashboard")({
  component: DashboardPage,
  head: () => ({
    meta: [
      { title: "Amara's Boutique - Merchant Dashboard" },
      { name: "description", content: "Overview of your store's sales, orders, and customers." },
      { property: "og:title", content: "Amara's Boutique - Merchant Dashboard" },
      { property: "og:description", content: "Overview of your store's sales, orders, and customers." },
    ],
  }),
});

function DashboardPage() {
  return (
    <div className="bg-background text-on-surface antialiased flex flex-col min-h-screen">
      {/* TopAppBar */}
      <header className="sticky top-0 w-full z-50 flex justify-between items-center px-margin-mobile  h-14 bg-surface border-b border-surface-variant dark:border-outline-variant">
        <div className="flex items-center gap-4">
          <button className="active:opacity-70 transition-opacity p-2 -ml-2 rounded-full hover:bg-surface-container-low">
            <MaterialIcon name="arrow_back" className="text-primary dark:text-primary-fixed" />
          </button>
          <h1 className="font-headline-sm-mobile text-headline-sm-mobile   font-bold text-on-surface dark:text-inverse-on-surface">
            Amara's Boutique
          </h1>
        </div>
        <button className="active:opacity-70 transition-opacity p-2 -mr-2 rounded-full hover:bg-surface-container-low text-primary dark:text-primary-fixed">
          <MaterialIcon name="more_horiz" />
        </button>
      </header>

      {/* Main Content Canvas */}
      <main className="flex-grow p-margin-mobile  pb-24  max-w-7xl mx-auto w-full space-y-6">
        {/* Welcome Section */}
        <section className="flex flex-col    gap-4">
          <div>
            <h2 className="font-headline-md text-headline-md">Overview</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Here's what's happening with your store today.
            </p>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            <Link
              to="/onboarding/product"
              className="whitespace-nowrap bg-primary-container text-on-primary flex items-center justify-center rounded-lg px-4 py-2 h-11 font-label-md text-label-md active:scale-95 transition-transform duration-100 min-w-max"
            >
              <MaterialIcon name="add" className="mr-2 text-[18px]" />
              Add Product
            </Link>
            <Link
              to="/orders"
              className="whitespace-nowrap bg-transparent border border-surface-variant text-on-surface flex items-center justify-center rounded-lg px-4 py-2 h-11 font-label-md text-label-md active:scale-95 transition-transform duration-100 min-w-max hover:bg-surface-container-low"
            >
              <MaterialIcon name="list_alt" className="mr-2 text-[18px]" />
              View Orders
            </Link>
            <button className="whitespace-nowrap bg-transparent border border-surface-variant text-on-surface flex items-center justify-center rounded-lg px-4 py-2 h-11 font-label-md text-label-md active:scale-95 transition-transform duration-100 min-w-max hover:bg-surface-container-low">
              <MaterialIcon name="bar_chart" className="mr-2 text-[18px]" />
              Analytics
            </button>
          </div>
        </section>

        {/* Bento Grid for Stats */}
        <section className="grid grid-cols-1  gap-4">
          {/* Today's Sales Card */}
          <div className="bg-surface-container-lowest border border-surface-variant rounded-xl p-md flex flex-col justify-between h-32 relative overflow-hidden group">
            <div className="flex justify-between items-start">
              <h3 className="font-label-md text-label-md text-on-surface-variant">Today's Sales</h3>
              <div className="bg-surface-container-low p-2 rounded-full">
                <MaterialIcon name="currency_rupee" className="text-primary text-[20px]" />
              </div>
            </div>
            <div className="flex items-end justify-between">
              <p className="font-display-lg text-display-lg text-on-surface">₹15,400</p>
              <span className="font-body-sm text-body-sm text-primary flex items-center gap-1 mb-2">
                <MaterialIcon name="trending_up" className="text-[14px]" /> +12%
              </span>
            </div>
            <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-primary-fixed rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity"></div>
          </div>

          {/* Pending Orders Card */}
          <div className="bg-surface-container-lowest border border-surface-variant rounded-xl p-md flex flex-col justify-between h-32 relative overflow-hidden group">
            <div className="flex justify-between items-start">
              <h3 className="font-label-md text-label-md text-on-surface-variant">Pending Orders</h3>
              <div className="bg-tertiary-fixed p-2 rounded-full">
                <MaterialIcon name="pending_actions" className="text-tertiary text-[20px]" />
              </div>
            </div>
            <div className="flex items-end justify-between">
              <p className="font-display-lg text-display-lg text-on-surface">8</p>
              <span className="font-body-sm text-body-sm text-on-surface-variant mb-2">To fulfill</span>
            </div>
            <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-tertiary-fixed rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
          </div>

          {/* New Customers Card */}
          <div className="bg-surface-container-lowest border border-surface-variant rounded-xl p-md flex flex-col justify-between h-32 relative overflow-hidden group">
            <div className="flex justify-between items-start">
              <h3 className="font-label-md text-label-md text-on-surface-variant">New Customers</h3>
              <div className="bg-secondary-fixed p-2 rounded-full">
                <MaterialIcon name="group_add" className="text-secondary text-[20px]" />
              </div>
            </div>
            <div className="flex items-end justify-between">
              <p className="font-display-lg text-display-lg text-on-surface">12</p>
              <span className="font-body-sm text-body-sm text-secondary flex items-center gap-1 mb-2">
                <MaterialIcon name="arrow_upward" className="text-[14px]" /> 3 new
              </span>
            </div>
            <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-secondary-fixed rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
          </div>
        </section>

        {/* Main Chart Section */}
        <section className="bg-surface-container-lowest border border-surface-variant rounded-xl p-md  flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h3 className="font-headline-sm text-headline-sm">Weekly Revenue</h3>
            <button className="font-label-sm text-label-sm text-primary flex items-center gap-1">
              Last 7 Days <MaterialIcon name="expand_more" className="text-[16px]" />
            </button>
          </div>
          {/* Faux Mini Graph */}
          <div className="h-48 w-full flex items-end justify-between gap-2 pt-8 relative">
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
              <div className="border-t border-surface-variant w-full h-0"></div>
              <div className="border-t border-surface-variant w-full h-0"></div>
              <div className="border-t border-surface-variant w-full h-0"></div>
              <div className="border-t border-surface-variant w-full h-0"></div>
            </div>
            {[
              { h: "30%", v: "₹4.2k", primary: false },
              { h: "50%", v: "₹7.1k", primary: false },
              { h: "20%", v: "₹2.8k", primary: false },
              { h: "80%", v: "₹11.5k", primary: false },
              { h: "60%", v: "₹8.9k", primary: "primary" },
              { h: "90%", v: "₹13.2k", primary: false },
              { h: "100%", v: "₹15.4k", primary: "primary-container" },
            ].map((bar, i) => (
              <div
                key={i}
                className={`w-full ${
                  bar.primary === "primary"
                    ? "bg-primary"
                    : bar.primary === "primary-container"
                    ? "bg-primary-container"
                    : "bg-surface-container-high"
                } rounded-t-sm relative group cursor-pointer`}
                style={{ height: bar.h }}
              >
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-inverse-surface text-inverse-on-surface font-label-sm text-label-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                  {bar.v}
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between w-full font-label-sm text-label-sm text-on-surface-variant pt-2">
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
            <span>Sat</span>
            <span>Sun</span>
          </div>
        </section>
      </main>

      <BottomNav active="home" />
    </div>
  );
}
