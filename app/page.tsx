import StickyNavPage from "@/components/StickyNavPage";
import { Metadata } from "next";
import Script from 'next/script'
export const metadata: Metadata = {
    title: "Sparepart Motor Samarinda | Distributor & Grosir Kaltim-Kaltara",
    description: "Distributor & grosir sparepart motor terpercaya di Samarinda sejak 2012. Melayani Balikpapan, Tenggarong, Bontang & seluruh Kaltim-Kaltara. Stok lengkap, kirim cepat.",
};
export default function Home() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        "name": "CV. Mitra Kaltim dan Tikil Motor",
                        "foundingDate": "2012",
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "Samarinda",
                            "addressRegion": "Kalimantan Timur"
                        },
                        "areaServed": ["Samarinda", "Balikpapan", "Bontang", "Tarakan", "Tenggarong", "Muara Wahau", "Sangatta", "Nunukan", "Tanahgrogot", "Sebulu", "Berau", "Malinau", "Melak", "Tanjung Selor", "Tanjung Redeb"]
                    })
                }}
            />
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
                strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
                `}
            </Script>
            <StickyNavPage />
        </>
    );
}
