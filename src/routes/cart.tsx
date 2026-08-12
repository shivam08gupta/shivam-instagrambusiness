import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { MaterialIcon } from "@/components/MaterialIcon";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [
      { title: "Shopping Cart" },
      { name: "description", content: "Review your cart items and order summary before checkout." },
      { property: "og:title", content: "Shopping Cart" },
      { property: "og:description", content: "Review your cart items and order summary before checkout." },
    ],
  }),
  component: Cart,
});

type CartItem = {
  id: string;
  name: string;
  qty: number;
  price: number;
  alt: string;
  src: string;
};

const initialItems: CartItem[] = [
  {
    id: "hoop-earrings",
    name: "Gold Hoop Earrings",
    qty: 1,
    price: 120,
    alt: "A pair of elegant, minimalist gold hoop earrings resting on a pristine white marble block. The lighting is soft and high-key, creating a clean, modern aesthetic suitable for a high-end e-commerce product shot. The background is a stark white seamlessly blending with the marble, focusing entirely on the refined details and warm gold tones of the jewelry.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB32igs1b_tg63hrkJpFPTh3nAyGvvb4Qp2aPdHJo3QXkLlEPVI_B1Lb3ScJ3eCHTQcRIps4EwKK8yI8HMbqe87wO-O7iHSs0bOaBmHzMoUi2QKqawQ44g--heYa6L_pLA4ZxySplU7SNA-V-7KX6J8gnutBuY3m5AxA8dJXmU-A2VNEL8sko-le5GkaHE4o_sv86Dgydyx4iB3YH-D3zR02d5VGNOR_mYAPuvFU8PGp-VkKC547nS3",
  },
  {
    id: "silver-ring",
    name: "Minimalist Silver Ring",
    qty: 1,
    price: 85,
    alt: "A sleek, modern silver ring with a single small inset diamond, presented on a minimalist grey concrete texture. The lighting is bright and even, highlighting the polished silver finish. The composition is clean and centered, suitable for a sophisticated, modern light-mode digital storefront.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCcZ2h_WBPVHjaeW-ukPW2vSZYXdM_bB2_can89CE4BIcG14J99oNyO9MB5fz1pLtyoO5mZ81u26wndRz1wBJ4O1CS-1aYZM3D6GrWneIolu89w35DWl6-ipW4YgLKNK0K3jcKIBY5yM7ZDEldKIhEss1Yc1NGXKQ3RQUYRxWteNrEMrkjZR5H5uJADi8K57LbOKsD9bGP1Zs2voaCwK_h3JV3IgVQy8QWS98vkW2_IvHweFcyGBPyL",
  },
];

const SHIPPING = 15.0;
const GST_RATE = 0.1;

function Cart() {
  const [items, setItems] = useState<CartItem[]>(initialItems);

  const updateQty = (id: string, delta: number) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item))
    );
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = useMemo(() => items.reduce((sum, item) => sum + item.price * item.qty, 0), [items]);
  const gst = useMemo(() => subtotal * GST_RATE, [subtotal]);
  const shipping = items.length > 0 ? SHIPPING : 0;
  const total = subtotal + shipping + gst;

  return (
    <div className="bg-surface text-on-surface antialiased min-h-screen flex flex-col items-center font-body-md">
      <div className="w-full max-w-[480px] min-h-screen bg-surface-container-lowest relative pb-[80px]">
        {/* TopAppBar */}
        <header className="sticky top-0 w-full z-50 flex justify-between items-center px-margin-mobile h-14 bg-surface border-b border-surface-variant transition-colors">
          <button aria-label="Go back" className="w-11 h-11 flex items-center justify-center -ml-2 text-primary">
            <MaterialIcon name="arrow_back" />
          </button>
          <h1 className="font-headline-sm-mobile text-headline-sm-mobile md:font-headline-sm md:text-headline-sm font-bold text-on-surface text-center flex-1">
            Shop
          </h1>
          <button aria-label="More options" className="w-11 h-11 flex items-center justify-center -mr-2 text-primary">
            <MaterialIcon name="more_horiz" />
          </button>
        </header>

        {/* Main Content */}
        <main className="px-margin-mobile py-lg flex flex-col gap-xl">
          {/* Cart Items List */}
          <section className="flex flex-col gap-md">
            <h2 className="font-headline-sm-mobile text-headline-sm-mobile font-bold">Your Cart</h2>
            <div className="flex flex-col gap-sm">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex p-md bg-surface-container-lowest border border-surface-variant rounded-lg items-center gap-md"
                >
                  <div className="w-20 h-20 bg-surface-variant rounded-md overflow-hidden shrink-0">
                    <img className="w-full h-full object-cover" alt={item.alt} src={item.src} />
                  </div>
                  <div className="flex-1 flex flex-col justify-center">
                    <span className="font-label-md text-label-md text-on-surface">{item.name}</span>
                    <div className="flex items-center gap-sm mt-unit">
                      <button
                        aria-label="Decrease quantity"
                        onClick={() => updateQty(item.id, -1)}
                        className="w-6 h-6 flex items-center justify-center rounded-full border border-outline-variant text-on-surface-variant hover:bg-surface-container-low transition-colors"
                      >
                        <MaterialIcon name="remove" className="text-[16px]" />
                      </button>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">Qty: {item.qty}</span>
                      <button
                        aria-label="Increase quantity"
                        onClick={() => updateQty(item.id, 1)}
                        className="w-6 h-6 flex items-center justify-center rounded-full border border-outline-variant text-on-surface-variant hover:bg-surface-container-low transition-colors"
                      >
                        <MaterialIcon name="add" className="text-[16px]" />
                      </button>
                    </div>
                    <span className="font-label-md text-label-md text-on-surface mt-sm">
                      ${(item.price * item.qty).toFixed(2)}
                    </span>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-on-surface-variant p-sm hover:text-error transition-colors"
                  >
                    <MaterialIcon name="close" />
                  </button>
                </div>
              ))}
              {items.length === 0 && (
                <p className="font-body-md text-body-md text-on-surface-variant text-center py-lg">Your cart is empty.</p>
              )}
            </div>
          </section>

          {/* Order Summary */}
          <section className="flex flex-col gap-md">
            <h2 className="font-headline-sm-mobile text-headline-sm-mobile font-bold">Order Summary</h2>
            <div className="bg-surface-container-lowest border border-surface-variant rounded-lg p-md flex flex-col gap-sm">
              <div className="flex justify-between items-center">
                <span className="font-body-md text-body-md text-on-surface-variant">Subtotal</span>
                <span className="font-body-md text-body-md text-on-surface">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-body-md text-body-md text-on-surface-variant">Shipping</span>
                <span className="font-body-md text-body-md text-on-surface">${shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-body-md text-body-md text-on-surface-variant">GST (10%)</span>
                <span className="font-body-md text-body-md text-on-surface">${gst.toFixed(2)}</span>
              </div>
              <div className="border-t border-surface-variant my-xs"></div>
              <div className="flex justify-between items-center">
                <span className="font-label-md text-label-md font-bold text-on-surface">Total</span>
                <span className="font-headline-sm-mobile text-headline-sm-mobile font-bold text-on-surface">
                  ${total.toFixed(2)}
                </span>
              </div>
            </div>
          </section>
        </main>

        {/* Fixed Bottom Action */}
        <div className="fixed bottom-0 w-full max-w-[480px] bg-surface border-t border-surface-variant p-margin-mobile z-50">
          <Link
            to="/checkout"
            className="w-full bg-primary-container text-on-primary rounded-lg py-[14px] font-label-md text-label-md flex items-center justify-center gap-sm hover:opacity-90 active:scale-95 transition-all"
          >
            Proceed to Checkout
            <MaterialIcon name="arrow_forward" style={{ fontSize: "20px" }} />
          </Link>
        </div>
      </div>
    </div>
  );
}
