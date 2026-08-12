import { createFileRoute, Link } from "@tanstack/react-router";
import { MaterialIcon } from "@/components/MaterialIcon";

export const Route = createFileRoute("/product")({
  head: () => ({
    meta: [
      { title: "Kundal Gold Earrings - Product Details" },
      { name: "description", content: "Handcrafted Kundal Gold Earrings from the Heritage Collection, inspired by Jaipur's royal architecture." },
      { property: "og:title", content: "Kundal Gold Earrings - Product Details" },
      { property: "og:description", content: "Handcrafted Kundal Gold Earrings from the Heritage Collection, inspired by Jaipur's royal architecture." },
    ],
  }),
  component: Product,
});

const relatedProducts = [
  {
    name: "Meenakari Choker",
    price: "₹4,100",
    alt: "A studio shot of a delicate gold necklace with a small floral pendant on a white background. Bright minimalist lighting, high-key setting. Modern luxury jewelry aesthetic.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB4-d5MBJ5vEUIjhvj7nSakrPmp9-pIP-ea1YPdO7eeFVqSBE2X22-ypwTS8nZryNLf33WbNJNAAgMG5T0jF-giZxQmg59PfUkxLw_5Z-1qUa4aj2Q2DOpUSe19OleDa7bBeg9GkJIGHTqzZIQy0aeke14cOF0CWULZRy8S8K0Qr6FtLAG5AXvrUFFkBjUOdib_Tl9zC0lBiymnMGpXvANer2TYMTLvziB9Iuc5Ez4rwbBfJErgVlUm",
    isNew: false,
  },
  {
    name: "Rajputana Bangles",
    price: "₹8,500",
    alt: "A studio shot of ornate gold bangles stacked on a white cylindrical prop. High-key bright studio lighting, soft shadows. Clean, minimalist, and luxurious jewelry photography.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDnSgZ1kKLZfS3mzGFJX-mlbUiAPq6fvScmGx9_4L3-ByWI2JTOYkJ1eiFS7syqLrj2CklJdQSxg_I2QaFBuwgDU5iIpdDvb4yFw-CYJmAyxttKK83Yv93s62NlhNWBysbYG9YVy3m6JWPVbplu_NcgWSlqI4XgBSOWN70I-3aNgHcbicHTzVKXQ4BrwdArQZCMtvlYF6SO5yhwH984YZCgLgOnvrqHKSSo7FVLeyzcO-6v8wYzwt0O",
    isNew: false,
  },
  {
    name: "Vintage Ruby Ring",
    price: "₹3,800",
    alt: "A close-up studio shot of a vintage-style gold ring featuring a large ruby center stone. Placed on a white minimalist surface with bright, high-key lighting. Luxury, modern aesthetic.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBWPB50NU2I9NMRedaktdm7h9eQTHo2Af2oUQ8mfDal9pLqaLK99FiEqSKHIeWOCgAiIwlPtw4abTGnvMsZB-yG643xPYLp0D1Nbmwzqxe78AeERpbfqfC9eHae4j4CiWOnqwpXoG-Lva5PdvdaYZ03CYZPOfFffuF-Av3ovlyldkwT0oucYZzMM1gglfa5X-x3jr3enL924etdUbPdKB3Y3hlccZ3Pn4eB6bMdcMnx2C_gW1LfQjNC",
    isNew: true,
  },
  {
    name: "Silver Payal Set",
    price: "₹1,200",
    alt: "A pair of delicate silver anklets draped elegantly over a pristine white block. Studio lighting, bright, high-contrast, minimalist and clean aesthetic. Premium e-commerce style.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDdKtYK-qHs4mO5_fwuGLjBTCk5WI92feeYidbVlxHOQeCER9dkRJnPTapJClBcrSkJVjWJp7Jyq50qV9OQ_j3WysUKeiGwSS7qTgHT3viD1JOdP_BjjLdR3dKMM9WBzBHsKGKWBE2DvOlU1CxfbsG17-Tx2cAkwa5xp3DesEF3EENl6LyGJNH4buq1GdkO8i8mcgkwPMgVunvQv-8bL_GegUepDDcnef1H4qmI5g8wgT8ykID4H0Ff",
    isNew: false,
  },
];

const thumbnails = [
  {
    alt: "A close-up studio shot of a Kundal gold earring focusing on the delicate hanging pearls at the bottom. High-key bright lighting, white background, luxurious modern aesthetic, sharp focus on the jewelry details.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDwkv6iugtdtMTuf3ayP-pN4YEmRb1t4sn32r9PBdWJzKV06qcmhxI91AY787ilw1G10GzJGIf4duKF8-CVtu-IWwy5T6bBu-o9Nv8PL_BVR6rdMLe7DBKLjQuT6x69ekJ8va5VLSlh6SizJyalk_yRF3PCvPlBZBVSMgw0ojNBSDg3fk_q_BvcavRzXr0fMM6YmYAd_yD6LJoa94KUS8rt5BlWGegdLhFhInDbK34pYsL2QOpwqfIM",
    active: true,
  },
  {
    alt: "A flat lay photograph of a pair of Kundal gold earrings arranged symmetrically on a smooth off-white silk fabric. Soft diffused lighting creating elegant shadows. Premium modern luxury jewelry aesthetic.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAx7EzqP2AGKKD0BAeKABC7STeqfE7J_3svoH9eWaTeKDJmOb4CQFQ4BCdPmQuuXJKuAt_H7ju0f5XdwScXc_kqGC776bmEXYLNJi-wCBjwFUYj_l49XqBitn5JmX8EEs2rKMB_-38t3U93xAXOnueypWn6O1RVwUGTjmSps2nwepQhAhxrtUpBlzp2b5kn7zJp3j83Ip7oYOZRNFUKpeNdOl8_HcLpFBA0K9hHhQwHua3Ib0LbhWEw",
    active: false,
  },
  {
    alt: "An elegant model's side profile wearing the Kundal gold earring. The model has warm skin tones and minimalistic styling. The background is a bright, soft white studio setting. High-fashion, modern, clean editorial aesthetic.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC3oZlJEQP8CR6yGkaePxCKbUOC5WUZ2luBZbHk6Wzmwa-1O2JW7r9Y-YMTRx5kQe_vJWiB79n8yg-x9DsDGtagBeJ_1rLwNU0bJLRgIVthu9I7vC9PRDwZ-k4_fq76l9DzsFM25EpGbBZcwBvShtlqRxAW583gDa73s8pDjYY0xalkLqPdz5xg2rHTopzw45RPSFtho4rg2bqb1Eo56ygHJA-PTuvhTwRyFaHvZWAxqOfBka1IvS7u",
    active: false,
  },
  {
    alt: "A macro shot detailing the intricate clasp mechanism of the Kundal gold earring. Bright lighting, clean white minimalist background. The gold texture is rich and reflective, conveying high quality and traditional craftsmanship.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDCl2xMkE0BYVtzly_EQzQnNbJblEax5PlxlcaEiYcgwEssmGeQ8WhP38fKjtxNSpAvz4O_Qtk7c1fGf1xhty2ebuSYZ7g6g20rc-Ea874ol4EVBSh9r_BkzjBhJuY6Own1Pv6opezltDOEMh0xUAXnusVOlaL8Hcs8aLx30UTG0gqhl8F7MWOp9gvH7LQnD5Az_SwlL_sta6M19WHdOrA3WZlYkLJmbECD7POG420zEGWp4pLm1cEn",
    active: false,
  },
];

function Product() {
  return (
    <div className="bg-background text-on-background min-h-screen pb-24 md:pb-0 font-body-md">
      {/* TopAppBar */}
      <header className="sticky top-0 w-full z-50 flex justify-between items-center px-margin-mobile h-14 bg-surface border-b border-surface-variant transition-colors">
        <button className="text-on-surface-variant hover:bg-surface-container-low transition-colors rounded-full p-2 active:opacity-70 flex items-center justify-center">
          <MaterialIcon name="arrow_back" />
        </button>
        <h1 className="font-headline-sm-mobile text-headline-sm-mobile md:font-headline-sm md:text-headline-sm text-on-surface font-bold">Shop</h1>
        <button className="text-on-surface-variant hover:bg-surface-container-low transition-colors rounded-full p-2 active:opacity-70 flex items-center justify-center">
          <MaterialIcon name="more_horiz" />
        </button>
      </header>

      <main className="max-w-[1200px] mx-auto w-full">
        {/* Desktop Layout Wrapper */}
        <div className="md:grid md:grid-cols-12 md:gap-lg md:pt-lg md:px-margin-desktop">
          {/* Gallery Section */}
          <section className="md:col-span-7 lg:col-span-8 flex flex-col gap-sm">
            {/* Main Image */}
            <div className="relative w-full aspect-[4/5] md:aspect-auto md:h-[600px] bg-surface-container-low md:rounded-xl overflow-hidden group">
              <img
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                alt="A macro studio photograph of an exquisite handcrafted Kundal gold earring resting on a pristine white marble block. The lighting is high-key and soft, highlighting the intricate filigree work and traditional Jaipur heritage craftsmanship. The background is a clean, bright minimalist studio setting with subtle warm tones. The aesthetic is luxurious, modern, and highly detailed, perfect for a premium e-commerce product page."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkn8jbB0wIe1Q2aagr_lcH0VAruw8u_O-mz8uFyL-YBDk1bV6jJGSWy_OkTplaJ0kHpvBPU9vY2T9BvZ2yYLmgbr_t6J5jchQ98LHzLMkzboQKlzZF7oIbfYgGVFviDIDs1SOjQLaHgLJ5GLP9qVSrkkxrfwvoEYMMd6ub2BxLf1eRHYTs6qZX1JOgspCX-ZlKkB5hdbKES0ejfWv8WZEM6sDIs5CBQgf3-47LolL_SBgqaXjkjcxg"
              />
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 md:hidden z-10">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <div className="w-2 h-2 rounded-full bg-outline-variant"></div>
                <div className="w-2 h-2 rounded-full bg-outline-variant"></div>
                <div className="w-2 h-2 rounded-full bg-outline-variant"></div>
              </div>
            </div>
            {/* Thumbnails (Desktop) */}
            <div className="hidden md:grid grid-cols-4 gap-sm h-32">
              {thumbnails.map((thumb, i) => (
                <div
                  key={i}
                  className={`rounded-lg overflow-hidden bg-surface-container-low cursor-pointer border-2 transition-colors ${
                    thumb.active ? "border-primary" : "border-transparent hover:border-outline-variant"
                  }`}
                >
                  <img className="w-full h-full object-cover" alt={thumb.alt} src={thumb.src} />
                </div>
              ))}
            </div>
          </section>

          {/* Product Details Section */}
          <section className="md:col-span-5 lg:col-span-4 px-margin-mobile py-lg md:px-0 md:py-0 flex flex-col gap-md">
            <div className="flex flex-col gap-xs">
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2 py-1 bg-surface-container-high rounded-full font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                  Heritage Collection
                </span>
              </div>
              <h2 className="font-display-lg text-display-lg text-on-surface">Kundal Gold Earrings</h2>
              <div className="flex items-end gap-2 mt-2">
                <span className="font-headline-md text-headline-md text-primary">₹2,500</span>
                <span className="font-body-sm text-body-sm text-outline line-through mb-1">₹3,200</span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Inclusive of all taxes</p>
            </div>
            <hr className="border-surface-variant my-2" />
            {/* Description */}
            <div className="flex flex-col gap-sm">
              <h3 className="font-headline-sm text-headline-sm text-on-surface">About the Craft</h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Handcrafted in the heart of Rajasthan, these Kundal Gold Earrings embody the rich architectural
                heritage of Jaipur. Each piece is meticulously forged using traditional filigree techniques passed
                down through generations of master artisans. The intricate geometric patterns are inspired by the
                ornate jharokhas of Hawa Mahal, offering a seamless blend of royal antiquity and modern minimalism.
              </p>
              <ul className="flex flex-col gap-2 mt-2 font-body-sm text-body-sm text-on-surface-variant">
                <li className="flex items-center gap-2">
                  <MaterialIcon name="verified" className="text-[18px]" />
                  <span>22K Gold Plated Brass</span>
                </li>
                <li className="flex items-center gap-2">
                  <MaterialIcon name="weight" className="text-[18px]" />
                  <span>Lightweight design (12g per pair)</span>
                </li>
                <li className="flex items-center gap-2">
                  <MaterialIcon name="local_shipping" className="text-[18px]" />
                  <span>Free express shipping on this item</span>
                </li>
              </ul>
            </div>
            {/* Desktop CTA */}
            <div className="hidden md:flex flex-col gap-sm mt-6">
              <button className="w-full h-[48px] bg-primary text-on-primary font-label-md text-label-md rounded-lg hover:bg-primary-container transition-colors shadow-sm active:scale-[0.98]">
                Buy Now
              </button>
              <Link
                to="/cart"
                className="w-full h-[48px] bg-transparent border border-outline text-on-surface font-label-md text-label-md rounded-lg hover:bg-surface-container-low transition-colors active:scale-[0.98] flex items-center justify-center"
              >
                Add to Cart
              </Link>
            </div>
          </section>
        </div>

        {/* Related Products */}
        <section className="mt-xl px-margin-mobile md:px-margin-desktop mb-lg">
          <div className="flex justify-between items-center mb-md">
            <h3 className="font-headline-sm text-headline-sm text-on-surface">You might also like</h3>
            <button className="text-primary font-label-md text-label-md hover:underline">View All</button>
          </div>
          <div className="flex overflow-x-auto gap-md pb-4 scrollbar-hide md:grid md:grid-cols-4 snap-x">
            {relatedProducts.map((product) => (
              <div key={product.name} className="min-w-[200px] md:min-w-0 flex flex-col gap-2 snap-start group cursor-pointer">
                <div className="w-full aspect-square bg-surface-container-low rounded-lg overflow-hidden relative border border-surface-variant">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt={product.alt}
                    src={product.src}
                  />
                  {product.isNew && (
                    <span className="absolute top-2 left-2 px-2 py-0.5 bg-secondary text-on-secondary text-[10px] font-bold rounded-sm uppercase tracking-wide">
                      New
                    </span>
                  )}
                  <button className="absolute top-2 right-2 p-1.5 bg-surface/80 rounded-full text-on-surface backdrop-blur-sm hover:text-tertiary transition-colors">
                    <MaterialIcon name="favorite" className="text-[18px]" />
                  </button>
                </div>
                <div>
                  <h4 className="font-label-md text-label-md text-on-surface line-clamp-1">{product.name}</h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Mobile Sticky CTA Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-surface/85 backdrop-blur-md border-t border-surface-variant px-margin-mobile py-3 flex gap-sm z-40 pb-safe">
        <Link
          to="/cart"
          className="flex-1 h-[44px] bg-transparent border border-outline text-on-surface font-label-md text-label-md rounded-lg flex items-center justify-center gap-2 active:bg-surface-container-low transition-colors"
        >
          <MaterialIcon name="shopping_bag" className="text-[20px]" />
          Add
        </Link>
        <button className="flex-[2] h-[44px] bg-primary text-on-primary font-label-md text-label-md rounded-lg flex items-center justify-center active:bg-primary-container transition-colors shadow-sm">
          Buy Now
        </button>
      </div>
    </div>
  );
}
