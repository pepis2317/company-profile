import StickyNavPage from "@/components/StickyNavPage";
import { Metadata } from "next";
export const metadata:Metadata = {
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
            <StickyNavPage />
        </>
    );
}
