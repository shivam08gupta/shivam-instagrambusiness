import { createFileRoute, Link } from "@tanstack/react-router";
import { MaterialIcon } from "@/components/MaterialIcon";

export const Route = createFileRoute("/order-confirmation")({
  component: OrderConfirmationPage,
  head: () => ({
    meta: [
      { title: "Order Confirmation" },
      { name: "description", content: "Your order has been confirmed and is being processed." },
      { property: "og:title", content: "Order Confirmation" },
      { property: "og:description", content: "Your order has been confirmed and is being processed." },
    ],
  }),
});

function OrderConfirmationPage() {
  return (
    <div className="bg-background text-on-background font-body-md min-h-screen flex flex-col items-center justify-center p-margin-mobile md:p-margin-desktop">
      <main className="w-full max-w-[600px] flex flex-col items-center bg-surface border border-surface-variant rounded-xl p-lg md:p-xl shadow-sm">
        <div className="flex flex-col items-center mb-xl text-center">
          <div className="relative w-24 h-24 mb-md flex items-center justify-center anim-float">
            <div className="absolute inset-0 bg-primary-fixed rounded-full opacity-20"></div>
            <div className="w-16 h-16 bg-primary-container rounded-full flex items-center justify-center relative anim-pulse-ring">
              <MaterialIcon name="check_circle" filled className="text-[32px] text-on-primary" />
            </div>
          </div>
          <h1 className="font-display-lg text-display-lg text-on-surface mb-xs">Order Confirmed!</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Thank you for your purchase. Your order is being processed.
          </p>
        </div>

        <div className="w-full bg-surface-container-low border border-surface-variant rounded-lg p-md mb-lg">
          <div className="flex justify-between items-center mb-sm">
            <span className="font-label-md text-label-md text-on-surface-variant">Order ID</span>
            <span className="font-label-md text-label-md text-on-surface">#ORD-984210-X</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-label-md text-label-md text-on-surface-variant">Estimated Delivery</span>
            <span className="font-label-md text-label-md text-primary font-bold">2-3 Days</span>
          </div>
        </div>

        <div className="w-full relative h-48 md:h-64 rounded-lg overflow-hidden border border-surface-variant mb-xl bg-surface-container-highest">
          <img
            className="w-full h-full object-cover"
            alt="A stylized, modern flat vector map graphic in light mode showing a delivery route. The map features subtle gray roads on an off-white background with a bright blue dashed line indicating a delivery path. A vibrant blue location pin marks the destination. Clean, professional corporate aesthetic with minimalistic details."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4fj-EflwLyKGkwTEcpknggz_LoGLjWHoVRfpL54kn50i0LE8RfksBlP_rEt_t5RA0ugTkmHbWoCkUqSMuacZlao9r76thYCVlygLK6zVtIfx_qgjgWlceKrhk95onVn4Ha8wXA49Iwk6Kqgb6qbDfwUBFKFkZ4L3US_wZjV8z1xWzESsJ2WuwbT3Dj_sXz6AfRiY2_mVCCFJZio15bjr-qHfcPl60Pi46RiafqKOnFxT6cs0-2jPG"
          />
          <div className="absolute bottom-md left-md right-md bg-surface/90 backdrop-blur-sm border border-surface-variant rounded-lg p-sm flex items-center shadow-sm">
            <div className="w-10 h-10 bg-primary-fixed rounded-full flex items-center justify-center mr-md flex-shrink-0">
              <MaterialIcon name="local_shipping" filled className="text-primary" />
            </div>
            <div className="flex-1">
              <p className="font-label-md text-label-md text-on-surface">Preparing for dispatch</p>
              <div className="w-full h-1 bg-surface-variant rounded-full mt-xs overflow-hidden">
                <div className="h-full bg-primary-container w-1/4 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col gap-sm">
          <button className="w-full h-12 bg-primary-container text-on-primary font-label-md text-label-md rounded-lg hover:bg-primary transition-colors flex items-center justify-center">
            Track Order
          </button>
          <Link
            to="/shop"
            className="w-full h-12 bg-transparent border border-surface-variant text-on-surface font-label-md text-label-md rounded-lg hover:bg-surface-container-low transition-colors flex items-center justify-center"
          >
            Continue Shopping
          </Link>
        </div>
      </main>
    </div>
  );
}
