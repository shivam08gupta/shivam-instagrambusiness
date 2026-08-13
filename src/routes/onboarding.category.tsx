import { useState } from "react";
import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import { MaterialIcon } from "@/components/MaterialIcon";

export const Route = createFileRoute("/onboarding/category")({
  head: () => ({
    meta: [
      { title: "Select Category | Merchant Onboarding" },
      { name: "description", content: "Select a category that best describes your business to help customers find you." },
      { property: "og:title", content: "Select Category | Merchant Onboarding" },
      { property: "og:description", content: "Select a category that best describes your business to help customers find you." },
    ],
  }),
  component: CategoryPage,
});

const categories = [
  { value: "clothing", icon: "checkroom", title: "Clothing & Apparel", desc: "Men's, women's, and children's fashion" },
  { value: "jewelry", icon: "diamond", title: "Jewelry & Accessories", desc: "Fine jewelry, watches, and custom pieces" },
  { value: "home_decor", icon: "chair", title: "Home Decor", desc: "Furniture, textiles, and interior styling" },
  { value: "beauty", icon: "face_retouching_natural", title: "Beauty & Personal Care", desc: "Cosmetics, skincare, and fragrances" },
];

function CategoryPage() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState("jewelry");

  const filtered = categories.filter(
    (c) =>
      c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.desc.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="text-on-background font-body-md antialiased min-h-screen flex flex-col items-center bg-background">
      <header className="sticky top-0 w-full z-50 flex flex-col items-center justify-center px-margin-mobile pt-lg pb-sm bg-surface">
        <div className="w-full max-w-[600px] flex items-center justify-between">
          <button
            aria-label="Go back"
            onClick={() => router.history.back()}
            className="w-11 h-11 flex items-center justify-center rounded-full hover:bg-surface-container-low transition-colors"
          >
            <MaterialIcon name="arrow_back" className="text-on-surface" />
          </button>
          <h1 className="font-headline-sm-mobile text-headline-sm-mobile   text-on-surface">Category</h1>
          <div className="w-11 h-11" />
        </div>
        <div className="w-full max-w-[600px] px-sm mt-sm">
          <div className="h-1 bg-surface-variant rounded-full overflow-hidden w-full">
            <div className="h-full bg-primary w-1/3 rounded-full" />
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant text-center mt-xs">Step 1 of 3</p>
        </div>
      </header>
      <main className="w-full max-w-[600px] flex-1 flex flex-col px-margin-mobile py-lg">
        <div className="mb-lg">
          <h2 className="font-display-lg text-display-lg text-on-surface mb-sm">What does Amara's Boutique sell?</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-md">
            Select a category that best describes your business to help customers find you.
          </p>
          <div className="relative w-full group">
            <MaterialIcon
              name="search"
              className="absolute left-md top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors"
            />
            <input
              aria-label="Search categories"
              className="w-full h-[56px] pl-[48px] pr-md rounded-lg border border-surface-dim bg-surface-container-lowest focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all font-body-lg text-body-lg text-on-surface placeholder:text-outline"
              placeholder="Search categories..."
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        <div aria-label="Business categories" className="flex-1 flex flex-col gap-sm overflow-y-auto pb-[100px]" role="listbox">
          {filtered.map((c) => {
            const isSelected = selected === c.value;
            return (
              <label
                key={c.value}
                className={
                  isSelected
                    ? "relative flex items-center justify-between p-md bg-surface-container-lowest border-2 border-primary rounded-lg cursor-pointer transition-colors shadow-[0_4px_12px_rgba(0,97,163,0.1)] group"
                    : "relative flex items-center justify-between p-md bg-surface-container-lowest border border-surface-dim rounded-lg cursor-pointer hover:border-outline-variant transition-colors group"
                }
              >
                <input
                  className="peer sr-only"
                  name="category"
                  type="radio"
                  value={c.value}
                  checked={isSelected}
                  onChange={() => setSelected(c.value)}
                />
                <div className="flex items-center gap-md">
                  <div
                    className={
                      isSelected
                        ? "w-12 h-12 flex items-center justify-center rounded-lg bg-primary-fixed text-primary transition-colors"
                        : "w-12 h-12 flex items-center justify-center rounded-lg bg-surface-container-low text-on-surface-variant group-hover:text-on-surface transition-colors"
                    }
                  >
                    <MaterialIcon name={c.icon} />
                  </div>
                  <div>
                    <h3 className="font-label-md text-label-md text-on-surface">{c.title}</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">{c.desc}</p>
                  </div>
                </div>
                <div
                  className={
                    isSelected
                      ? "w-6 h-6 rounded-full border-2 border-primary bg-primary flex items-center justify-center transition-all"
                      : "w-6 h-6 rounded-full border-2 border-outline flex items-center justify-center transition-all"
                  }
                >
                  <MaterialIcon
                    name="check"
                    filled
                    className={isSelected ? "text-[16px] text-on-primary transition-opacity" : "text-[16px] text-on-primary opacity-0 transition-opacity"}
                  />
                </div>
              </label>
            );
          })}
        </div>
      </main>
      <div className="fixed bottom-0 inset-x-0 mx-auto w-full max-w-[440px] p-margin-mobile bg-surface/90 backdrop-blur-md border-t border-surface-variant pb-safe z-50">
        <Link
          to="/onboarding/business"
          className="w-full h-12 bg-primary-container text-on-primary flex items-center justify-center rounded-lg font-label-md text-label-md hover:bg-surface-tint active:scale-[0.98] transition-all shadow-sm"
        >
          Next
        </Link>
      </div>
    </div>
  );
}
