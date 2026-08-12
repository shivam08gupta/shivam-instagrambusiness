import { useState } from "react";
import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import { MaterialIcon } from "@/components/MaterialIcon";

export const Route = createFileRoute("/onboarding/product")({
  head: () => ({
    meta: [
      { title: "Add First Product | Merchant Onboarding" },
      { name: "description", content: "Add your first product to your shop." },
      { property: "og:title", content: "Add First Product | Merchant Onboarding" },
      { property: "og:description", content: "Add your first product to your shop." },
    ],
  }),
  component: ProductPage,
});

function ProductPage() {
  const router = useRouter();
  const [name, setName] = useState("Kundal Gold Earrings");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("2500");
  const [stock, setStock] = useState("10");
  const [visible, setVisible] = useState(true);

  return (
    <div className="bg-surface text-on-surface antialiased min-h-screen flex flex-col items-center">
      <header className="sticky top-0 w-full z-50 flex justify-between items-center px-margin-mobile h-14 bg-surface border-b border-surface-variant dark:border-outline-variant max-w-[1200px] mx-auto">
        <div className="flex items-center gap-2">
          <button
            onClick={() => router.history.back()}
            className="p-2 -ml-2 rounded-full hover:bg-surface-container-low transition-colors active:opacity-70 text-on-surface-variant"
          >
            <MaterialIcon name="arrow_back" />
          </button>
          <h1 className="font-headline-sm-mobile text-headline-sm-mobile md:font-headline-sm md:text-headline-sm font-bold text-on-surface">
            New Product
          </h1>
        </div>
        <div>
          <button className="font-label-md text-label-md text-primary-container hover:opacity-80 transition-opacity">Save</button>
        </div>
      </header>
      <main className="w-full max-w-[600px] flex-grow p-margin-mobile flex flex-col gap-lg pb-xl">
        <section className="w-full flex flex-col gap-sm">
          <label className="font-label-md text-label-md text-on-surface">Product Image</label>
          <div className="w-full aspect-[4/5] bg-surface-container-low border border-surface-variant border-dashed rounded-lg flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-surface-container transition-colors relative overflow-hidden group">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#bfc7d4_1px,transparent_1px)] [background-size:16px_16px]" />
            <MaterialIcon name="add_photo_alternate" className="text-outline text-4xl group-hover:scale-110 transition-transform" />
            <span className="font-body-md text-body-md text-on-surface-variant">Tap to upload</span>
            <input accept="image/*" className="absolute inset-0 opacity-0 cursor-pointer" type="file" />
          </div>
        </section>
        <form className="flex flex-col gap-md">
          <div className="flex flex-col gap-xs relative">
            <label className="font-label-md text-label-md text-on-surface" htmlFor="product-name">
              Name
            </label>
            <input
              className="w-full bg-surface border-0 border-b border-surface-variant focus:border-primary-container focus:ring-0 px-0 py-2 font-body-lg text-body-lg text-on-surface placeholder-outline transition-colors"
              id="product-name"
              placeholder="e.g. Kundal Gold Earrings"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-xs relative">
            <label className="font-label-md text-label-md text-on-surface" htmlFor="product-desc">
              Description
            </label>
            <textarea
              className="w-full bg-surface border-0 border-b border-surface-variant focus:border-primary-container focus:ring-0 px-0 py-2 font-body-md text-body-md text-on-surface placeholder-outline transition-colors resize-none"
              id="product-desc"
              placeholder="Describe your product..."
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="flex gap-md">
            <div className="flex flex-col gap-xs relative flex-1">
              <label className="font-label-md text-label-md text-on-surface" htmlFor="product-price">
                Price
              </label>
              <div className="relative flex items-center">
                <span className="absolute left-0 font-body-lg text-body-lg text-on-surface-variant">₹</span>
                <input
                  className="w-full bg-surface border-0 border-b border-surface-variant focus:border-primary-container focus:ring-0 pl-6 py-2 font-body-lg text-body-lg text-on-surface placeholder-outline transition-colors"
                  id="product-price"
                  placeholder="0.00"
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-col gap-xs relative flex-1">
              <label className="font-label-md text-label-md text-on-surface" htmlFor="product-stock">
                Stock
              </label>
              <input
                className="w-full bg-surface border-0 border-b border-surface-variant focus:border-primary-container focus:ring-0 px-0 py-2 font-body-lg text-body-lg text-on-surface placeholder-outline transition-colors"
                id="product-stock"
                placeholder="0"
                type="number"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
              />
            </div>
          </div>
          <div className="pt-md flex items-center justify-between border-t border-surface-variant mt-sm">
            <div className="flex flex-col">
              <span className="font-label-md text-label-md text-on-surface">Visibility</span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">Show this product on your shop</span>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                checked={visible}
                onChange={(e) => setVisible(e.target.checked)}
                className="sr-only peer"
                type="checkbox"
              />
              <div className="w-11 h-6 bg-surface-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-container" />
            </label>
          </div>
        </form>
        <div className="mt-lg">
          <Link
            to="/dashboard"
            className="w-full bg-primary-container text-on-primary h-[44px] rounded-lg font-label-md text-label-md flex items-center justify-center gap-2 hover:bg-opacity-90 active:scale-95 transition-all"
          >
            Add Product
          </Link>
        </div>
      </main>
    </div>
  );
}
