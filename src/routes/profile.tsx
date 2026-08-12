import { createFileRoute, Link } from "@tanstack/react-router";
import { MaterialIcon } from "@/components/MaterialIcon";

export const Route = createFileRoute("/profile")({
  component: ProfilePage,
  head: () => ({
    meta: [
      { title: "Amara's Boutique - Profile" },
      { name: "description", content: "Amara's Boutique profile - Handmade Jewelry from Jaipur." },
      { property: "og:title", content: "Amara's Boutique - Profile" },
      { property: "og:description", content: "Amara's Boutique profile - Handmade Jewelry from Jaipur." },
    ],
  }),
});

const highlights = [
  {
    label: "Rings",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCmkCnlZTlvcE_RBrod5pnZLYpU_BNP5_9RNVypdtCl1rEEyxpdQBDEbGBRjyyF2czqk8e9-WtPZwDXlHKvaIFIFuM54C6v-bsiy4AXuK2s7r4PDtx8u6IoNfoTnyOq_NPjmAqfM9Yaz5XjzqHr85ZEcq8UTjrfEkEcazlz2N_vU7faPWnqWsvkMBioNgLTTWxMsErVUH982rSZ3KuwqkYetpIhqVmVVYbd6XHwuFRynit3iQ2ft8S2",
    alt: "A brightly lit, minimalist flat lay photo of several silver rings with turquoise stones arranged neatly on a pristine white marble surface. The lighting is soft and natural, emphasizing the modern, professional aesthetic.",
  },
  {
    label: "Necklaces",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDEp4j2SJq7XVLRC1AuB0iF7aJlNEYQ96QUX6IadeO3bKKsz3J3H9dqjNZG1ay8jNS5ynpNEZmipBoawXoo6KGGV76Ee7xfi9w44hcfHmMMMqmkFuW03VDr0RQ1KdjQb26V6rmwMTNHgDky1DDW8kBGa0NZdTHIx0A5mKiQXSzJmYor6HtZypXvzN4RoFn2dvQvjf3-wHQy4NzMg1lGdm5tnGqeDkB5ZP_8EMQCMFAqa0Sz4l75-7ej",
    alt: "A detailed shot of a layered gold necklace featuring intricate filigree work, displayed on a smooth, neutral-toned linen display stand. The lighting is bright and modern, creating a clean, high-end commercial feel.",
  },
  {
    label: "Studio",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDG0SHbGtsUrS_rJ-sn2n8RxPqtycrKX3S51vWudRX6HxDtEdJQaLcCQGV9Z9pXcXTzpEXBQiP7p03GIOF3vkAkonoZIn5T59F0u6AtoaT1tkGtPy9lU4kxwMKYB6g-0ga8xlWJ-SL6NKtSER4EnQr4tLQviRNkxESjYowsPhKiWkkEAxH2rNM4QxNSQae_qgadiZa5quhwYpV_q1FZxDZ5xvDauirKov33RnDZ_hseNd95SbvEF58p",
    alt: "A modern, crisp photo of an artisan's workbench, showing tools and raw semi-precious stones scattered neatly. The setting is a clean, well-lit studio, conveying professionalism and craftsmanship.",
  },
];

const gridImages = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAWlyAQ4s3EQqAriVgPburbEsCoH6PdGAYp_AttbBhQsJv2exdpOH-h45uUz2Q53DGjBcGgQBdlEFRWcn4wEKX8CZ6Mktlu3oVhbWe9reQq96pJN-LOy-t8z2SAPKHRg2kHZFfL17TmArrEYzyanzVdcJf3JCnDCHiHsA4FCtDHSo4afuvlL8i6vR6XKYls8vYgT8oHeW5_KrdoMgY32pYz3LBuYk8Bo1cO2yA4pVpHVd3ewK16LmRh",
    alt: "A striking close-up of a vibrant ruby pendant resting on a stark white textured background. The lighting is high-key and modern, creating strong contrasts and a clean, professional aesthetic suitable for an online boutique.",
    layers: false,
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCDOu7HwDs488frgkNW_SrAibGEeITQlr9WQVHNmGgV2QiZBA2Xu5hF7TAnT_4dOLWWrmYhRW1cq2rFeDoGG49ifHS7LNtS-IYVxsVTRweZ4HQOJWtmvLaJdsbVw01ZMdqchYK4Gnii161Rf1jVnjH6NFNHXUuFO6YYREjd8b3ftg4uV-lO977JlSNceN75u1kDZigVhtQJCz8G1sBkE__x8G3UH8yhQ9BCRXo5NJ-cLEM_RT_up0Dv",
    alt: "A model wearing multiple stacked silver bracelets against a soft, blurred background. The focus is sharp on the jewelry, with bright, natural lighting emphasizing the modern, professional product photography style.",
    layers: false,
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBibkhiojLwS_fSEnxFfGasGqOPQYj3qwCsB8_sSFpZv7gr2XGEU5Nvu6q1kxO6p8f1bR4MfeYm3Tr7TBKul5ElTrBnzghnlkPZzsQYXoacZTPh0csEHdxHToh3Wl7cmy71vhLtHlTlQ_QruchkuCacmwZ1_x9dfZ3vEcDNIOyxkV4gSiFIJF30E-DOMxUj3NadsCKOoX5yeHK6pkkdoxRLclKzarIra7G5soXv7WkZlsGJFTF4qrYz",
    alt: "A beautifully arranged collection of handmade earrings, featuring various gemstones, displayed in a minimalist wooden tray. The scene is brightly lit with modern, clean lighting, reflecting a professional storefront quality.",
    layers: true,
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBqiJ5l-OfVX3CHF1JfzBvjsK7g66xAQ5Q4U8KZEEoJUrCkutfx-kYNqGK371F63eN6WdHArnfbLTal_erDFjNe97gZzpE9_qsv_Rki2bbU85OQbaxeUWvtNL9UwLOc0LEV-WB4IcV46rA9N3GBNWY9X5HBptlgQLA-IpyZG7FcouEiyxpzfMn0qQt64Zc9eB_1re8Vg0qmsG3HsSx_fJV6K_au67_pECGIXB4Epj4eaTMfy4PW5aJs",
    alt: "A detailed macro shot of intricate gold filigree work on a traditional Jaipur ring. The background is a clean, modern white, highlighting the craftsmanship with bright, even studio lighting.",
    layers: false,
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuApVCEu63fjJ7ilWYWwVZWMePDVSzhOmgtWaPvLIpt0ISLItz44UyUcy-kiHf--xMokwEtZMFN8UDwmbZxHsWAKI_TZ8-viB2rBpvcdTj2xMISdBJHXMQMsAiZp8bjkkEKshbuSyKKR19loczezfHRcKIkGY64v4rqK2T0ZczG06BXHwb3to9LTUV2YQzdRYxQ6B9Y1cyDt1ACIW9q-MQ6CB0yIVBnCW7Ycv4ir4VFBpafezEFz85t5",
    alt: "A lifestyle photo of a woman in a modern, light-filled cafe wearing a statement necklace from Amara's Boutique. The overall tone is bright, airy, and professional, blending cultural richness with modern aesthetics.",
    layers: false,
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDXtEDli3r0WVGcDvgznKRPMqjvMxleXOaQWdH1iTReyJ2N_s5O9nxQ-Pfxr23TTjXytwwbbG-4fxib3vTfgCdvWEX15hGDP3naHW_ZPYPRX5D3NXKuT7tVUkwfVnfBaOtbRtBfQQyz0GbVDneRcPIYX65cGBJ0o4Jolsn_Z9SG8fOlAJ89Iryd0Vvm6dXfhWvTLR032tsBM0wk8FNje-2FWvYpFcsXRUQIqKL0X_XC1lXrhCQ-AYuI",
    alt: "A clean, modern product shot of a silver anklet displayed over a smooth, white ceramic prop. The lighting is soft and diffuse, creating a high-end, minimalist presentation.",
    layers: false,
  },
];

function ProfilePage() {
  return (
    <div className="bg-background text-on-background antialiased flex flex-col min-h-screen">
      {/* TopAppBar */}
      <header className="sticky top-0 w-full z-50 flex justify-between items-center px-margin-mobile h-14 bg-surface border-b border-surface-variant dark:border-outline-variant">
        <button className="w-11 h-11 flex items-center justify-center text-on-surface hover:bg-surface-container-low transition-colors rounded-full">
          <MaterialIcon name="lock" />
        </button>
        <div className="flex items-center gap-1">
          <h1 className="font-headline-sm-mobile text-headline-sm-mobile md:font-headline-sm md:text-headline-sm font-bold text-on-surface">
            amaras_boutique
          </h1>
          <MaterialIcon name="expand_more" className="text-sm text-on-surface-variant" />
        </div>
        <div className="flex items-center gap-2">
          <button className="w-11 h-11 flex items-center justify-center text-on-surface hover:bg-surface-container-low transition-colors rounded-full">
            <MaterialIcon name="alternate_email" />
          </button>
          <button className="w-11 h-11 flex items-center justify-center text-on-surface hover:bg-surface-container-low transition-colors rounded-full">
            <MaterialIcon name="menu" />
          </button>
        </div>
      </header>

      <main className="flex-grow w-full max-w-lg mx-auto pb-24">
        {/* Profile Info */}
        <section className="px-margin-mobile py-4">
          <div className="flex items-center justify-between mb-4">
            <div className="w-20 h-20 rounded-full border border-surface-variant overflow-hidden shrink-0 relative p-1 bg-gradient-to-tr from-yellow-400 to-fuchsia-600">
              <img
                className="w-full h-full object-cover rounded-full border-2 border-surface"
                alt="A close-up portrait of a woman wearing traditional handmade Jaipur jewelry, featuring intricate gold designs and vibrant gemstones, set against a soft, bright, and modern light-mode background. The mood is elegant and culturally rich."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAdfROLYjwU5Omi-wwvdaM4Y7KI7kMjAAJE-T6IsWEDW-R_9uvATAP6SxCh15RZRrSFNhp98srQumOZ2-Mdyu5IVvq1uiWy99Rh5KCdG7G-iVYmzHYDTx_VoBc1JulJh3nVq_KlDuKBaxGRTIUccyW90SyFr_pUOl-RI5aafDmkRz9jVusbdPudMGodmyxcYM7zjudglmmljMBJlhofu_qyC-BO9kOZSEDUNMf4ODV0WzLt_P91Kmo"
              />
            </div>
            <div className="flex gap-6 text-center flex-grow justify-center">
              <div className="flex flex-col">
                <span className="font-label-md text-label-md text-on-surface">124</span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">posts</span>
              </div>
              <div className="flex flex-col">
                <span className="font-label-md text-label-md text-on-surface">12.5K</span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">followers</span>
              </div>
              <div className="flex flex-col">
                <span className="font-label-md text-label-md text-on-surface">850</span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">following</span>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <h2 className="font-label-md text-label-md text-on-surface">Amara's Boutique</h2>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-1">
              Handmade Jewelry from Jaipur ✨
            </p>
            <p className="font-body-sm text-body-sm text-on-surface">
              Crafting stories through precious stones &amp; silver.
            </p>
            <a className="font-body-sm text-body-sm text-primary-container" href="#">
              amarasboutique.in
            </a>
          </div>
          {/* Merchant Entry Point */}
          <div className="bg-surface-container-low border border-surface-variant rounded-lg p-4 mb-4 text-center">
            <h3 className="font-label-md text-label-md text-on-surface mb-2">Ready to sell your crafts?</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-4">
              Turn your passion into a business with a professional storefront.
            </p>
            <button className="w-full bg-primary-container text-on-primary font-label-md text-label-md py-2 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
              <MaterialIcon name="storefront" />
              Create Your Store
            </button>
          </div>
          <div className="flex gap-2">
            <button className="flex-1 bg-surface-variant text-on-surface font-label-md text-label-md py-1.5 rounded-lg hover:bg-surface-dim transition-colors">
              Edit profile
            </button>
            <button className="flex-1 bg-surface-variant text-on-surface font-label-md text-label-md py-1.5 rounded-lg hover:bg-surface-dim transition-colors">
              Share profile
            </button>
            <button className="w-10 bg-surface-variant text-on-surface font-label-md text-label-md py-1.5 rounded-lg hover:bg-surface-dim transition-colors flex items-center justify-center">
              <MaterialIcon name="person_add" className="text-[18px]" />
            </button>
          </div>
        </section>

        {/* Highlights */}
        <section className="px-margin-mobile py-2 flex gap-4 overflow-x-auto snap-x scrollbar-hide pb-4">
          {highlights.map((h) => (
            <div key={h.label} className="flex flex-col items-center gap-1 min-w-[64px] snap-start">
              <div className="w-16 h-16 rounded-full border border-surface-variant p-0.5 relative">
                <img className="w-full h-full object-cover rounded-full border border-surface" alt={h.alt} src={h.src} />
              </div>
              <span className="font-body-sm text-body-sm text-on-surface">{h.label}</span>
            </div>
          ))}
        </section>

        {/* Grid Tabs */}
        <section className="flex border-t border-surface-variant">
          <button className="flex-1 py-3 flex items-center justify-center border-b-2 border-on-surface text-on-surface">
            <MaterialIcon name="grid_on" />
          </button>
          <button className="flex-1 py-3 flex items-center justify-center text-on-surface-variant hover:text-on-surface">
            <MaterialIcon name="movie" />
          </button>
          <button className="flex-1 py-3 flex items-center justify-center text-on-surface-variant hover:text-on-surface">
            <MaterialIcon name="person_pin" />
          </button>
        </section>

        {/* Image Grid */}
        <section className="grid grid-cols-3 gap-[1px]">
          {gridImages.map((img, i) => (
            <div key={i} className="aspect-square bg-surface-variant relative">
              {img.layers && (
                <MaterialIcon
                  name="layers"
                  className="absolute top-2 right-2 text-white drop-shadow-md"
                />
              )}
              <img className="w-full h-full object-cover" alt={img.alt} src={img.src} />
            </div>
          ))}
        </section>
      </main>

      {/* BottomNavBar */}
      <nav className="fixed bottom-0 w-full z-50 flex justify-around items-center bg-surface border-t border-surface-variant dark:border-outline-variant px-4 py-2 pb-safe md:hidden">
        <Link
          to="/dashboard"
          className="flex flex-col items-center justify-center text-on-surface-variant hover:opacity-80 active:scale-95 transition-transform duration-100 p-2"
        >
          <MaterialIcon name="home" className="text-[28px]" />
          <span className="font-label-sm text-label-sm sr-only">Home</span>
        </Link>
        <a
          className="flex flex-col items-center justify-center text-on-surface-variant hover:opacity-80 active:scale-95 transition-transform duration-100 p-2"
          href="#"
        >
          <MaterialIcon name="search" className="text-[28px]" />
          <span className="font-label-sm text-label-sm sr-only">Explore</span>
        </a>
        <a
          className="flex flex-col items-center justify-center text-on-surface-variant hover:opacity-80 active:scale-95 transition-transform duration-100 p-2"
          href="#"
        >
          <MaterialIcon name="add_box" className="text-[28px]" />
          <span className="font-label-sm text-label-sm sr-only">Create</span>
        </a>
        <a
          className="flex flex-col items-center justify-center text-on-surface-variant hover:opacity-80 active:scale-95 transition-transform duration-100 p-2"
          href="#"
        >
          <MaterialIcon name="movie" className="text-[28px]" />
          <span className="font-label-sm text-label-sm sr-only">Reels</span>
        </a>
        <Link
          to="/profile"
          className="flex flex-col items-center justify-center text-on-surface hover:opacity-80 active:scale-95 transition-transform duration-100 p-2"
        >
          <div className="w-7 h-7 rounded-full border-2 border-on-surface overflow-hidden">
            <img
              className="w-full h-full object-cover"
              alt="A small avatar image of the merchant, similar to the main profile picture, showing a woman with intricate jewelry in a bright, modern setting."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbv1J8nihm2MAVv0VjyL9l3QKzYJN_M-1ix4DizYNoewgscaSYYHMfRg76CahqDJSFItz0mInkqMfKWiYfauME-Uu1YEk1SY-9kinrel7spXf17U6nx6-eXyjw-JpT7HwdRmAjcDL3Ek112rRhwc-ihIWQjFPLLhV-A-V0Rby_cTPWkqCHNm1Dql4Ug6lC8LhcKZ4q436kZAvhme9j3iMDpN1-1laG-7R8sLZ_EnjQ9Csgq4LuSeLa"
            />
          </div>
          <span className="font-label-sm text-label-sm sr-only">Profile</span>
        </Link>
      </nav>
    </div>
  );
}
