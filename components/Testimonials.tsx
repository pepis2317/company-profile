import { useEffect, useState } from 'react';
import Image from 'next/image';

interface Review {
    authorAttribution?: {
        displayName?: string;
        photoUri?: string;
    };
    rating?: number;
    relativePublishTimeDescription?: string;
    text?: { text?: string };
}

const Testimonials: React.FC = () => {
    const [reviews, setReviews] = useState<Review[]>([]);
    const [loading, setLoading] = useState(true);

    async function getTopReviews(placeId: string, apiKey: string|undefined) {
        if(!apiKey)return
        const res = await fetch(
            `https://places.googleapis.com/v1/places/${placeId}`,
            {
                headers: {
                    "X-Goog-Api-Key": apiKey,
                    "X-Goog-FieldMask": "reviews"
                }
            }
        );
        const data = await res.json();
        if (data.error) {
            console.error(data.error);
            return [];
        }
        return (data.reviews || []).slice(0, 4);
    }

    useEffect(() => {
        getTopReviews('ChIJa2anIlV_9i0RPgNwuEdfKkI', process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY)
            .then(setReviews)
            .finally(() => setLoading(false));
    }, []);

    return (
        <div className='p-10 px-10 xl:px-20 z-10 relative overflow-x-clip w-full'>
            <div className='z-20 relative'>
                <div className="text-white flex flex-col w-full">
                    <div>
                        <div className="font-sans flex gap-2 mb-3">
                            <div className="w-2 rounded-full bg-linear-to-b from-cyan-500/80 via-indigo-500/60 to-blue-500/10" />
                            <h2 className='font-light text-lg'>Testimonials</h2>
                        </div>
                        <h3 className="font-sans font-black text-3xl md:text-4xl mb-10">Testimoni Pelanggan</h3>
                    </div>
                </div>

                <div className='flex flex-wrap gap-5'>
                    {loading && (
                        <p className="text-white/40 font-sans text-sm">Memuat ulasan...</p>
                    )}

                    {!loading && reviews.length === 0 && (
                        <p className="text-white/40 font-sans text-sm">Belum ada ulasan.</p>
                    )}

                    {reviews.map((review, i) => (
                        <div
                            key={i}
                            className="flex flex-col transition-all duration-200 gap-4 w-full sm:w-[calc(50%-10px)] lg:w-[calc(25%-15px)] rounded-2xl p-6 bg-gray-800/50 border border-gray-700 backdrop-blur-sm hover:bg-gray-700/50 hover:-translate-y-1"
                        >
                            <div className="flex gap-0.5">
                                {Array.from({ length: 5 }).map((_, s) => (
                                    <svg
                                        key={s}
                                        viewBox="0 0 20 20"
                                        className="w-3.5 h-3.5"
                                        fill={s < Math.round(review.rating ?? 0) ? '#22d3ee' : '#ffffff1a'}
                                    >
                                        <path d="M10 1.5l2.6 5.5 6 .7-4.4 4.1 1.2 6-5.4-3-5.4 3 1.2-6L1.4 7.7l6-.7z" />
                                    </svg>
                                ))}
                            </div>

                            <p className="font-sans text-sm text-white/80 leading-relaxed line-clamp-5">
                                {review.text?.text}
                            </p>

                            <div className="flex items-center gap-3 mt-auto pt-2">
                                {review.authorAttribution?.photoUri ? (
                                    <Image
                                        className="w-9 h-9 rounded-full object-cover"
                                        src={review.authorAttribution.photoUri}
                                        alt={review.authorAttribution.displayName ?? "pfp.jpg"}
                                        width={150}
                                        height={150}
                                    />
                                ) : (
                                    <div className="w-9 h-9 rounded-full bg-linear-to-br from-cyan-500/40 to-indigo-500/40 flex items-center justify-center font-sans text-xs font-bold text-white">
                                        {review.authorAttribution?.displayName?.[0] ?? '?'}
                                    </div>
                                )}
                                <div>
                                    <p className="font-sans text-sm font-semibold text-white">
                                        {review.authorAttribution?.displayName}
                                    </p>
                                    <p className="font-sans text-xs text-white/40">
                                        {review.relativePublishTimeDescription}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Testimonials;
