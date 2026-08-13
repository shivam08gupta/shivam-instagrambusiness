import { useState } from "react";
import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import { MaterialIcon } from "@/components/MaterialIcon";

export const Route = createFileRoute("/onboarding/business")({
  head: () => ({
    meta: [
      { title: "Business Information | Merchant Onboarding" },
      { name: "description", content: "Tell us about your business to help customers find you." },
      { property: "og:title", content: "Business Information | Merchant Onboarding" },
      { property: "og:description", content: "Tell us about your business to help customers find you." },
    ],
  }),
  component: BusinessPage,
});

function BusinessPage() {
  const router = useRouter();
  const [businessName, setBusinessName] = useState("Amara's Boutique");
  const [description, setDescription] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [city, setCity] = useState("Jaipur");
  const [state, setState] = useState("Rajasthan");

  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col  font-body-md">
      <header className=" sticky top-0 w-full z-50 flex justify-between items-center px-margin-mobile h-14 bg-surface border-b border-surface-variant">
        <button
          onClick={() => router.history.back()}
          className="w-11 h-11 flex items-center justify-center text-on-surface hover:bg-surface-container-low rounded-full transition-colors active:opacity-70"
        >
          <MaterialIcon name="arrow_back" />
        </button>
        <h1 className="font-headline-sm-mobile text-headline-sm-mobile font-bold text-on-surface">Setup</h1>
        <div className="w-11" />
      </header>
      <main className="flex-1 w-full max-w-[1200px] mx-auto p-margin-mobile  flex items-center justify-center">
        <div className="w-full max-w-full bg-surface-container-lowest border border-surface-variant rounded-lg p-lg shadow-sm">
          <div className="mb-xl text-center ">
            <h2 className="font-headline-md-mobile text-headline-md-mobile   text-on-surface mb-sm">
              Business Information
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Tell us about Amara's Boutique to help customers find you.
            </p>
          </div>
          <form className="space-y-lg flex flex-col h-full">
            <div className="space-y-sm">
              <label className="block font-label-sm text-label-sm text-on-surface" htmlFor="businessName">
                Business Name
              </label>
              <input
                className="w-full h-11 px-md bg-surface-container-lowest border border-surface-variant rounded focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none transition-colors font-body-md text-on-surface"
                id="businessName"
                placeholder="e.g., The Daily Grind"
                type="text"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
              />
            </div>
            <div className="space-y-sm">
              <label className="block font-label-sm text-label-sm text-on-surface" htmlFor="description">
                Description
              </label>
              <textarea
                className="w-full px-md py-sm bg-surface-container-lowest border border-surface-variant rounded focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none transition-colors font-body-md text-on-surface resize-none"
                id="description"
                placeholder="Describe your products or services..."
                rows={4}
                maxLength={250}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <p className="font-body-sm text-body-sm text-on-surface-variant text-right">{description.length} / 250</p>
            </div>
            <div className="space-y-md p-md bg-surface-container-low rounded-lg border border-surface-variant">
              <h3 className="font-label-md text-label-md text-on-surface flex items-center gap-sm">
                <MaterialIcon name="location_on" className="text-outline" />
                Location
              </h3>
              <div className="space-y-sm">
                <label className="block font-label-sm text-label-sm text-on-surface" htmlFor="addressLine1">
                  Address Line 1
                </label>
                <input
                  className="w-full h-11 px-md bg-surface-container-lowest border border-surface-variant rounded focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none transition-colors font-body-md text-on-surface"
                  id="addressLine1"
                  placeholder="Street address"
                  type="text"
                  value={addressLine1}
                  onChange={(e) => setAddressLine1(e.target.value)}
                />
              </div>
              <div className="grid grid-cols-2 gap-md">
                <div className="space-y-sm">
                  <label className="block font-label-sm text-label-sm text-on-surface" htmlFor="city">
                    City
                  </label>
                  <input
                    className="w-full h-11 px-md bg-surface-container-lowest border border-surface-variant rounded focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none transition-colors font-body-md text-on-surface"
                    id="city"
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>
                <div className="space-y-sm">
                  <label className="block font-label-sm text-label-sm text-on-surface" htmlFor="state">
                    State/Region
                  </label>
                  <input
                    className="w-full h-11 px-md bg-surface-container-lowest border border-surface-variant rounded focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none transition-colors font-body-md text-on-surface"
                    id="state"
                    type="text"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="mt-xl pt-lg border-t border-surface-variant flex justify-end">
              <Link
                to="/onboarding/verification"
                className="w-full  min-w-[120px] h-11 bg-primary-container text-on-primary rounded-lg font-label-md text-label-md px-lg flex items-center justify-center gap-sm hover:opacity-90 active:scale-[0.98] transition-all"
              >
                Next
                <MaterialIcon name="arrow_forward" className="text-[18px]" />
              </Link>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
