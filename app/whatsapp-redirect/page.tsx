'use client'
import { useEffect } from 'react'
export default function WhatsappRedirect() {

    useEffect(() => {
        window.location.href = 'https://wa.me/628164512317';
    }, []);
    return (
        <p className="text-xl text-white font-bold">Redirecting to Whatsapp...</p>
    )

}
