import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { MaterialIcon } from "@/components/MaterialIcon";

export const Route = createFileRoute("/checkout")({
  component: CheckoutPage,
  head: () => ({
    meta: [
      { title: "Checkout" },
      { name: "description", content: "Review your order and complete checkout." },
      { property: "og:title", content: "Checkout" },
      { property: "og:description", content: "Review your order and complete checkout." },
    ],
  }),
});

function CheckoutPage() {
  const [shipping, setShipping] = useState("standard");
  const [payment, setPayment] = useState("upi");

  return (
    <div className="bg-background text-on-background min-h-screen pb-[120px]  font-body-md">
      <header className="sticky top-0 w-full z-50 flex justify-between items-center px-margin-mobile  h-14 bg-surface border-b border-surface-variant transition-colors">
        <Link
          to="/cart"
          aria-label="Go back"
          className="p-2 -ml-2 rounded-full hover:bg-surface-container-low transition-colors active:opacity-70 flex items-center justify-center text-on-surface-variant"
        >
          <MaterialIcon name="arrow_back" />
        </Link>
        <h1 className="font-headline-sm-mobile text-headline-sm-mobile   font-bold text-on-surface absolute left-1/2 -translate-x-1/2">
          Checkout
        </h1>
        <button
          aria-label="More options"
          className="p-2 -mr-2 rounded-full hover:bg-surface-container-low transition-colors active:opacity-70 flex items-center justify-center text-on-surface-variant"
        >
          <MaterialIcon name="more_horiz" />
        </button>
      </header>

      <main className="max-w-[800px] mx-auto pt-4 px-margin-mobile  space-y-6">
        {/* Order Summary Snippet */}
        <section className="bg-surface rounded-xl border border-surface-variant p-4 flex items-center gap-4">
          <img
            alt="A small, high-quality product thumbnail image of a minimalist, modern ceramic coffee mug in a light grey studio setting with soft, diffused lighting. Clean corporate modern aesthetic."
            className="w-16 h-16 rounded-lg object-cover bg-surface-container-high"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAb1ZTr_AnZzmRF1eHED8jVWNg1kq2ytmZETTA68SZ3Ude7y-MWC7I_D9B72xhKZhVzz32vtxgX2BoMa6fp-RaLXCdNaOHzwBx5du4vs4A80rBCIbwQVJyL1jfvqCsxpWz8MWTrg92om4X6ARTUMGy8qsU7sokxUVfWS1AR-lK6mdqkJBm7xguwFcwQHs5_Fl2v0orEfQMjDIH0n93AUxGQeQB5aC8Pdfsz18rtKQe-paupEW7hFY7-"
          />
          <div className="flex-1">
            <h2 className="font-label-md text-label-md text-on-surface">Minimalist Ceramic Mug</h2>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Qty: 1</p>
          </div>
          <div className="text-right">
            <span className="font-label-md text-label-md text-on-surface">₹499</span>
          </div>
        </section>

        {/* Delivery Address */}
        <section className="bg-surface rounded-xl border border-surface-variant overflow-hidden">
          <div className="p-4 border-b border-surface-variant flex justify-between items-center">
            <h2 className="font-headline-sm-mobile text-headline-sm-mobile   text-on-surface flex items-center gap-2">
              <MaterialIcon name="location_on" filled className="text-primary-container" />
              Delivery Address
            </h2>
            <button className="text-primary-container font-label-md text-label-md hover:opacity-80 active:opacity-60 transition-opacity">
              Edit
            </button>
          </div>
          <div className="p-4">
            <div className="flex gap-3">
              <MaterialIcon name="home" className="text-outline mt-1" />
              <div>
                <p className="font-label-md text-label-md text-on-surface">Jane Doe</p>
                <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                  123, Rose Villa, C-Scheme
                  <br />
                  Jaipur, Rajasthan 302001
                  <br />
                  India
                </p>
                <p className="font-body-md text-body-md text-on-surface-variant mt-2">+91 98765 43210</p>
              </div>
            </div>
          </div>
        </section>

        {/* Shipping Method */}
        <section className="bg-surface rounded-xl border border-surface-variant overflow-hidden">
          <div className="p-4 border-b border-surface-variant">
            <h2 className="font-headline-sm-mobile text-headline-sm-mobile   text-on-surface flex items-center gap-2">
              <MaterialIcon name="local_shipping" filled className="text-primary-container" />
              Shipping Method
            </h2>
          </div>
          <div className="p-2 flex flex-col gap-2">
            <label className="flex items-center justify-between p-3 rounded-lg hover:bg-surface-container-lowest transition-colors cursor-pointer border border-transparent hover:border-surface-variant">
              <div className="flex items-center gap-3">
                <input
                  checked={shipping === "standard"}
                  onChange={() => setShipping("standard")}
                  className="w-5 h-5 text-primary-container border-outline focus:ring-primary-container focus:ring-offset-surface"
                  name="shipping"
                  type="radio"
                  value="standard"
                />
                <div>
                  <p className="font-label-md text-label-md text-on-surface">Standard Delivery</p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Est. arrival: 3-5 Business Days</p>
                </div>
              </div>
              <span className="font-label-md text-label-md text-on-surface">Free</span>
            </label>
            <label className="flex items-center justify-between p-3 rounded-lg hover:bg-surface-container-lowest transition-colors cursor-pointer border border-transparent hover:border-surface-variant">
              <div className="flex items-center gap-3">
                <input
                  checked={shipping === "express"}
                  onChange={() => setShipping("express")}
                  className="w-5 h-5 text-primary-container border-outline focus:ring-primary-container focus:ring-offset-surface"
                  name="shipping"
                  type="radio"
                  value="express"
                />
                <div>
                  <p className="font-label-md text-label-md text-on-surface">Express Delivery</p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Est. arrival: Tomorrow</p>
                </div>
              </div>
              <span className="font-label-md text-label-md text-on-surface">₹99</span>
            </label>
          </div>
        </section>

        {/* Payment Options */}
        <section className="bg-surface rounded-xl border border-surface-variant overflow-hidden">
          <div className="p-4 border-b border-surface-variant">
            <h2 className="font-headline-sm-mobile text-headline-sm-mobile   text-on-surface flex items-center gap-2">
              <MaterialIcon name="account_balance_wallet" filled className="text-primary-container" />
              Payment Options
            </h2>
          </div>
          <div className="p-2 flex flex-col gap-2">
            <label className="flex flex-col p-3 rounded-lg hover:bg-surface-container-lowest transition-colors cursor-pointer border border-transparent hover:border-surface-variant group">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <input
                    checked={payment === "upi"}
                    onChange={() => setPayment("upi")}
                    className="w-5 h-5 text-primary-container border-outline focus:ring-primary-container focus:ring-offset-surface"
                    name="payment"
                    type="radio"
                    value="upi"
                  />
                  <div className="flex items-center gap-2">
                    <MaterialIcon name="qr_code_scanner" className="text-on-surface-variant" />
                    <p className="font-label-md text-label-md text-on-surface">UPI (Google Pay, PhonePe, Paytm)</p>
                  </div>
                </div>
              </div>
              {payment === "upi" && (
                <div className="pl-8 pt-3 pb-1">
                  <button className="font-label-sm text-label-sm text-primary-container hover:underline" type="button">
                    Add New UPI ID
                  </button>
                </div>
              )}
            </label>
            <label className="flex flex-col p-3 rounded-lg hover:bg-surface-container-lowest transition-colors cursor-pointer border border-transparent hover:border-surface-variant group">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <input
                    checked={payment === "card"}
                    onChange={() => setPayment("card")}
                    className="w-5 h-5 text-primary-container border-outline focus:ring-primary-container focus:ring-offset-surface"
                    name="payment"
                    type="radio"
                    value="card"
                  />
                  <div className="flex items-center gap-2">
                    <MaterialIcon name="credit_card" className="text-on-surface-variant" />
                    <p className="font-label-md text-label-md text-on-surface">Credit / Debit Card</p>
                  </div>
                </div>
              </div>
            </label>
            <label className="flex flex-col p-3 rounded-lg hover:bg-surface-container-lowest transition-colors cursor-pointer border border-transparent hover:border-surface-variant group">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <input
                    checked={payment === "cod"}
                    onChange={() => setPayment("cod")}
                    className="w-5 h-5 text-primary-container border-outline focus:ring-primary-container focus:ring-offset-surface"
                    name="payment"
                    type="radio"
                    value="cod"
                  />
                  <div className="flex items-center gap-2">
                    <MaterialIcon name="payments" className="text-on-surface-variant" />
                    <p className="font-label-md text-label-md text-on-surface">Cash on Delivery</p>
                  </div>
                </div>
              </div>
            </label>
          </div>
        </section>

        {/* Price Details */}
        <section className="bg-surface rounded-xl border border-surface-variant p-4">
          <h3 className="font-label-md text-label-md text-on-surface mb-3">Price Details</h3>
          <div className="space-y-2 font-body-md text-body-md text-on-surface-variant">
            <div className="flex justify-between">
              <span>Subtotal (1 item)</span>
              <span className="text-on-surface">₹499</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery</span>
              <span className="text-primary-container">Free</span>
            </div>
            <div className="flex justify-between">
              <span>Taxes</span>
              <span className="text-on-surface">₹25</span>
            </div>
          </div>
          <hr className="my-3 border-surface-variant" />
          <div className="flex justify-between font-label-md text-label-md text-on-surface">
            <span>Total Amount</span>
            <span>₹524</span>
          </div>
        </section>
      </main>

      <div className="fixed bottom-0 left-0 w-full bg-surface border-t border-surface-variant p-4 pb-safe flex items-center justify-between gap-4        z-40">
        <div className="hidden "></div>
        <div className="flex-1  ">
          <Link
            to="/order-confirmation"
            className="w-full bg-primary-container text-on-primary rounded-lg h-[44px] flex items-center justify-center font-label-md text-label-md hover:opacity-90 active:scale-[0.98] transition-all shadow-sm"
          >
            Place Order • ₹524
          </Link>
        </div>
      </div>
    </div>
  );
}
