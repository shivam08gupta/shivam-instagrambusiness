import { createFileRoute, Link } from "@tanstack/react-router";
import { MaterialIcon } from "@/components/MaterialIcon";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sell directly on Instagram | Shop" },
      { name: "description", content: "Turn your audience into customers. Seamlessly integrate your shop and manage everything from one place." },
      { property: "og:title", content: "Sell directly on Instagram | Shop" },
      { property: "og:description", content: "Turn your audience into customers. Seamlessly integrate your shop and manage everything from one place." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-background text-on-background font-body-md antialiased min-h-screen flex flex-col items-center justify-center">
      <main className="w-full max-w-md px-margin-mobile flex flex-col items-center text-center">
        <div className="mb-xl relative w-full h-48 rounded-xl overflow-hidden shadow-sm">
          <img
            alt="Welcome Illustration"
            className="object-cover w-full h-full"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsmm0eaiziDPEc9KtVwqfXoibCPJ1mi9lvv6rooLOQmEc1Uc0QLmieKDAo4RLe4xbjyG4yhPpQD9Ij_JP1beVg93h8pw0mYvCjG1R4dDW27BFjlilnDHSVi9o7-C4MBHtTfGDGwxhedt1JB9WjSh-35IQhvkdOhyR85baH_jg0kOp-LsYFiDdDq9Zurw4FEo3wHbajHTBV0_My26Jlp8T5aVLzFadsVSVcaEwrCfLE_G7yLbYW_CuN"
          />
        </div>
        <h1 className="font-display-lg text-display-lg text-on-surface mb-md">Sell directly on Instagram</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-xl px-sm">
          Turn your audience into customers. Seamlessly integrate your shop and manage everything from one place.
        </p>
        <div className="flex flex-col gap-md w-full mb-xl text-left">
          <div className="flex items-center p-md bg-surface-container-lowest rounded-lg border border-surface-variant">
            <MaterialIcon name="shopping_cart" className="text-primary-container text-[24px] mr-md" />
            <div>
              <h3 className="font-label-md text-label-md text-on-surface">Native Checkout</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Fast, seamless in-app purchases.</p>
            </div>
          </div>
          <div className="flex items-center p-md bg-surface-container-lowest rounded-lg border border-surface-variant">
            <MaterialIcon name="inventory_2" className="text-primary-container text-[24px] mr-md" />
            <div>
              <h3 className="font-label-md text-label-md text-on-surface">Order Management</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Track inventory and fulfill easily.</p>
            </div>
          </div>
          <div className="flex items-center p-md bg-surface-container-lowest rounded-lg border border-surface-variant">
            <MaterialIcon name="payments" className="text-primary-container text-[24px] mr-md" />
            <div>
              <h3 className="font-label-md text-label-md text-on-surface">Secure Payments</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Accept UPI, Cards, and more.</p>
            </div>
          </div>
        </div>
        <Link
          to="/onboarding/category"
          className="w-full bg-primary-container text-on-primary h-[44px] rounded-lg font-label-md text-label-md flex items-center justify-center hover:opacity-90 active:scale-[0.98] transition-all"
        >
          Get Started
        </Link>
        <button className="w-full mt-sm h-[44px] rounded-lg font-label-md text-label-md text-primary flex items-center justify-center hover:bg-surface-container-low transition-colors">
          Log in to existing account
        </button>
      </main>
    </div>
  );
}
