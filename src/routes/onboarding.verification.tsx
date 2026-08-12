import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import { MaterialIcon } from "@/components/MaterialIcon";

export const Route = createFileRoute("/onboarding/verification")({
  head: () => ({
    meta: [
      { title: "Business Verification | Merchant Onboarding" },
      { name: "description", content: "Upload your ID or GST certificate to establish trust with your customers." },
      { property: "og:title", content: "Business Verification | Merchant Onboarding" },
      { property: "og:description", content: "Upload your ID or GST certificate to establish trust with your customers." },
    ],
  }),
  component: VerificationPage,
});

function VerificationPage() {
  const router = useRouter();
  return (
    <div className="bg-background text-on-background min-h-screen font-body-md">
      <header className="sticky top-0 w-full z-50 flex justify-between items-center px-margin-mobile h-14 bg-surface border-b border-surface-variant dark:border-outline-variant md:px-margin-desktop">
        <div className="flex items-center gap-4">
          <button
            onClick={() => router.history.back()}
            className="hover:bg-surface-container-low transition-colors active:opacity-70 p-2 rounded-full text-on-surface-variant"
          >
            <MaterialIcon name="arrow_back" />
          </button>
          <h1 className="font-headline-sm-mobile text-headline-sm-mobile md:font-headline-sm md:text-headline-sm text-primary dark:text-primary-fixed font-bold">
            Shop
          </h1>
        </div>
        <button className="hover:bg-surface-container-low transition-colors active:opacity-70 p-2 rounded-full text-on-surface-variant">
          <MaterialIcon name="more_horiz" />
        </button>
      </header>
      <main className="max-w-screen-md mx-auto px-margin-mobile md:px-margin-desktop py-xl pb-32">
        <div className="mb-xl text-center md:text-left">
          <h2 className="font-display-lg text-display-lg text-on-surface mb-sm">Business Verification</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Upload your ID or GST certificate to establish trust with your customers. This helps us ensure a safe marketplace.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
          <div className="bg-surface border border-surface-variant rounded-xl p-lg flex flex-col items-center justify-center text-center gap-md">
            <div className="w-16 h-16 bg-surface-container-low rounded-full flex items-center justify-center text-primary mb-2">
              <MaterialIcon name="upload_file" filled style={{ fontSize: 32 }} />
            </div>
            <div>
              <h3 className="font-headline-sm-mobile text-headline-sm-mobile md:font-headline-sm md:text-headline-sm text-on-surface">
                Upload Documents
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Accepts PDF, JPG, or PNG (Max 5MB)</p>
            </div>
            <div className="w-full mt-4">
              <Link
                to="/onboarding/product"
                className="w-full bg-primary-container text-on-primary font-label-md text-label-md py-3 px-6 rounded-lg hover:opacity-90 active:scale-95 transition-all flex items-center justify-center"
              >
                Select File
              </Link>
            </div>
          </div>
          <div className="bg-surface border border-surface-variant rounded-xl p-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-sm mb-md">
                <MaterialIcon name="pending" filled className="text-secondary" />
                <h3 className="font-headline-sm-mobile text-headline-sm-mobile md:font-headline-sm md:text-headline-sm text-on-surface">
                  Verification Status
                </h3>
              </div>
              <div className="flex items-center gap-3 bg-surface-container-low p-4 rounded-lg">
                <span className="inline-block w-3 h-3 bg-secondary rounded-full animate-pulse" />
                <div>
                  <p className="font-label-md text-label-md text-on-surface">In Review</p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Usually takes 1-2 business days.</p>
                </div>
              </div>
            </div>
            <div className="mt-xl">
              <p className="font-body-sm text-body-sm text-on-surface-variant border-t border-surface-variant pt-4">
                Need help?{" "}
                <a className="text-primary-container hover:underline" href="#">
                  Contact Support
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
