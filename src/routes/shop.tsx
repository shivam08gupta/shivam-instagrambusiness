import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { MaterialIcon } from "@/components/MaterialIcon";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Amara's Boutique - Shop" },
      { name: "description", content: "Handcrafted, sustainable jewelry for the modern minimalist from Amara's Boutique." },
      { property: "og:title", content: "Amara's Boutique - Shop" },
      { property: "og:description", content: "Handcrafted, sustainable jewelry for the modern minimalist from Amara's Boutique." },
    ],
  }),
  component: Shop,
});

const categories = ["All", "Rings", "Earrings", "Necklaces", "Bracelets", "New Arrivals"];

const products = [
  {
    name: "Luna Gold Ring",
    subtitle: "14k Solid Gold",
    price: "$125",
    isNew: false,
    alt: "A close-up, high-fashion photograph of a delicate, minimalist gold ring featuring a small, ethical diamond. The ring rests on a smooth, white marble surface bathed in soft, diffused natural daylight. The aesthetic is clean, luxurious, and modern, highlighting the craftsmanship.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAaUwr1gsK-KobM_-tsfS0vF4CIGkHGcM1NokqqUx8vLl0KMB65D9d7Ygax4cl9MmAYv7RR2EiV-X4V9NHEJNpWJ19I-SzN6Q_WX8suuYMjCJ4KTVH3KwQVbpk1OmObeideX24mMNuIvfM9COYN6mTqKXhqm2Eyj0k5yNj8BOc46OgvPbDnKiZg1xLhOZHW1TrOk4oK5xcZWBVY4ULf4lYE5OhzZa0cx2nhlOBIKwI6BXfFm7dBisex",
  },
  {
    name: "Pearl Drop Earrings",
    subtitle: "Freshwater Pearl",
    price: "$85",
    isNew: false,
    alt: "A stylized, editorial photograph of elegant pearl drop earrings lying on a piece of textured, cream-colored linen fabric. The lighting creates gentle, low-contrast shadows that emphasize the organic shape of the pearls and the thin gold wire. The mood is serene, feminine, and sophisticated.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBfnm1lTByJ9tZDIr6XXA82pnoBnfSuz4IVNwswmhLXlBYIIC6zhATfmsmRhpv9eIi7k3gB0Q6mLEg5qVqZduoGeNxJQNfQ7bUH77Qz_Y00A_kgj9ekBxFL-m7hktTASbnZyy7JtlMHt0XH75ZaLlmMHPBmH4wDQ8A49Eq1ZJVqvOJ2oT8iEx-RYIhHCm8pRMT7neAz4uRDj-vezTDaAvkgxXCuFdov2iafBh7-eFsMw4g9-ftoG0EQ",
  },
  {
    name: "Geo Chain Necklace",
    subtitle: "18k Gold Plated",
    price: "$110",
    isNew: true,
    alt: "A minimalist, high-end product photograph of a thin, delicate gold chain necklace with a tiny, geometric pendant. It is displayed flat against a pristine white background. The lighting is crisp and bright, characteristic of modern luxury e-commerce, ensuring every detail is sharp.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCdiKi_0J14xTs9AjYaz8KOsA_6usiyvJalME1MG8DyoaXEfaIbsVbefvxSZ2wziO8RLrWr8VH5KLgGLrMJmhPld4xjcI1xGaXc02cpbBU_RCY8oM_SlzsG-3bBrDYaJXI8WsE40OgOSerNkKNGEq4q5f4Mmekm5nBoMylYz47G-GkjX9rxaEv_7UNuQkUGPX70lSh3H8y1l8B7-UKc_zhxFC-pf-sSumkGczg-2FS5N7ST8fGqh8W0",
  },
  {
    name: "Hammered Cuff",
    subtitle: "Sterling Silver",
    price: "$150",
    isNew: false,
    alt: "A detailed, macro photograph of a textured silver cuff bracelet resting on a dark, matte slate surface to create strong contrast. The lighting highlights the hammered texture of the metal, creating a contemporary, bold, yet refined aesthetic suitable for modern jewelry branding.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCKSD4yA5QK1sc2iB-rqlhMfFnRF-k7h1COcQo2ZnVD8UQ-qbl_ac20gspDZTo8gN6SJcHqLbL8MG7H4lc8rBc6akIc0xNfkcXpTP6IrsD2Advf1SeiQC_WPyqanJOHisf5TKuwdEPNi0gTFgWZQXo0SwjU8xHMThg3ocpfqbBuvJ6Dx_j_Vcx-np7Qg9ZH8GO-KEnEOsFV6Uq5VZR5f0iQY3-Wkm7Pxn1kX9PatQCNVPzcEcPYLEWt",
  },
];

function Shop() {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className="bg-surface text-on-surface antialiased min-h-screen flex flex-col font-body-md">
      {/* TopAppBar */}
      <header className="sticky top-0 w-full z-50 flex justify-between items-center px-margin-mobile h-14 bg-surface border-b border-surface-variant">
        <button
          aria-label="Go back"
          className="flex items-center justify-center w-11 h-11 active:opacity-70 transition-opacity hover:bg-surface-container-low transition-colors rounded-full text-primary"
        >
          <MaterialIcon name="arrow_back" />
        </button>
        <h1 className="font-headline-sm-mobile text-headline-sm-mobile md:font-headline-sm md:text-headline-sm text-on-surface font-bold text-center flex-1 mx-4 truncate">
          Amara's Boutique
        </h1>
        <button
          aria-label="More options"
          className="flex items-center justify-center w-11 h-11 active:opacity-70 transition-opacity hover:bg-surface-container-low transition-colors rounded-full text-primary"
        >
          <MaterialIcon name="more_horiz" />
        </button>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 pb-24 md:pb-8 flex flex-col w-full max-w-[1200px] mx-auto md:px-margin-desktop">
        {/* Store Info & Actions */}
        <section className="px-margin-mobile md:px-0 py-lg flex flex-col md:flex-row items-center gap-md md:gap-xl border-b border-surface-variant">
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-surface-variant flex-shrink-0">
            <img
              alt="Store logo"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCe1c0-mxUCDqjum-vFckCZcOENe8o381bFNmcnZl3ApZHTN1oQXZGjhzrHSxdYxV_Yf8oIZl5GGcWnuBE3umlwSNcoJxN9--Fov89K_UkKlOGH1T43T1As0Ql1dKO7EdxdIAPSnEQ0_vfqP1_krQDFHqhvD8F7FYhWuefLOTynQoGOci53PGm84NfZq1HuHX8AL435YavESIydq6gTqTne32phT0v9Y60NJpMv0utPJnGAVgWevCnB"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="font-display-lg text-display-lg text-on-surface mb-unit">Amara's Boutique</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-md max-w-2xl">
              Handcrafted, sustainable jewelry for the modern minimalist. Ethically sourced materials designed in London.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-sm">
              <button className="bg-primary-container text-on-primary font-label-md text-label-md py-2 px-6 rounded-lg hover:opacity-90 active:scale-95 transition-all">
                Shop All
              </button>
              <button className="bg-transparent border border-outline text-on-surface font-label-md text-label-md py-2 px-6 rounded-lg hover:bg-surface-container-low active:scale-95 transition-all">
                Contact
              </button>
            </div>
          </div>
        </section>

        {/* Categories Scrollable Row */}
        <section className="py-md px-margin-mobile md:px-0">
          <div className="flex overflow-x-auto scrollbar-hide gap-sm snap-x">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`snap-start flex-shrink-0 font-label-md text-label-md py-2 px-4 rounded-full transition-colors ${
                  activeCategory === category
                    ? "bg-on-surface text-surface"
                    : "bg-surface-container-high text-on-surface border border-surface-variant hover:bg-surface-variant"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Product Grid */}
        <section className="px-margin-mobile md:px-0 py-sm">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-md">
            {products.map((product) => (
              <Link to="/product" key={product.name} className="flex flex-col group cursor-pointer">
                <div className="aspect-[4/5] w-full rounded-lg overflow-hidden bg-surface-container-low mb-sm relative border border-surface-variant">
                  <img
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={product.src}
                  />
                  {product.isNew && (
                    <div className="absolute top-2 left-2 bg-on-surface text-surface px-2 py-1 rounded-full font-label-sm text-[10px] uppercase tracking-wider">
                      New
                    </div>
                  )}
                  <button className="absolute bottom-2 right-2 w-8 h-8 bg-surface rounded-full flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    <MaterialIcon name="shopping_bag" className="text-primary text-[20px]" />
                  </button>
                </div>
                <div className="flex justify-between items-start gap-sm">
                  <div>
                    <h3 className="font-label-md text-label-md text-on-surface truncate">{product.name}</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">{product.subtitle}</p>
                  </div>
                  <span className="font-label-md text-label-md text-on-surface">{product.price}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      {/* BottomNavBar (Mobile Only) */}
      <nav className="md:hidden fixed bottom-0 w-full z-50 flex justify-around items-center bg-surface px-4 py-2 pb-safe border-t border-surface-variant">
        <a className="flex flex-col items-center justify-center text-on-surface-variant w-16 h-12 hover:opacity-80 active:scale-95 transition-transform duration-100" href="#">
          <MaterialIcon name="home" className="mb-1" />
          <span className="font-label-sm text-[10px]">Home</span>
        </a>
        <Link to="/shop" className="flex flex-col items-center justify-center text-on-surface w-16 h-12 hover:opacity-80 active:scale-95 transition-transform duration-100">
          <MaterialIcon name="shopping_bag" filled className="mb-1" />
          <span className="font-label-sm text-[10px] font-bold">Shop</span>
        </Link>
        <a className="flex flex-col items-center justify-center text-on-surface-variant w-16 h-12 hover:opacity-80 active:scale-95 transition-transform duration-100" href="#">
          <MaterialIcon name="favorite" className="mb-1" />
          <span className="font-label-sm text-[10px]">Activity</span>
        </a>
        <a className="flex flex-col items-center justify-center text-on-surface-variant w-16 h-12 hover:opacity-80 active:scale-95 transition-transform duration-100" href="#">
          <MaterialIcon name="person" className="mb-1" />
          <span className="font-label-sm text-[10px]">Profile</span>
        </a>
      </nav>
    </div>
  );
}
