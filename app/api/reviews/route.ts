// app/api/reviews/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  const placeId = 'ChIJa2anIlV_9i0RPgNwuEdfKkI';
  const res = await fetch(
    `https://places.googleapis.com/v1/places/${placeId}?fields=reviews`,
    {
      headers: {
        'X-Goog-Api-Key': process.env.GOOGLE_PLACES_API_KEY!,
        'X-Goog-FieldMask': 'reviews',
      },
      next: { revalidate: 3600 }, // cache for an hour
    }
  );
  const data = await res.json();
  return NextResponse.json(data.reviews ?? []);
}
