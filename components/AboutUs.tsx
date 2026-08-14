import { BatteryCharging, Motorbike, Settings } from 'lucide-react';
import Image from 'next/image';
import dynamic from 'next/dynamic'
const icons = ['/fb.png', '/repsol.svg', '/maxxis.png', '/fim.png', '/dsk.png', '/yamaha.png', '/infinera.png', '/skf.png']
const CityReachMap = dynamic(() => import('@/components/CityReachMap'), {
    ssr: false,
    loading: () => <div className='h-[500px] bg-gray-800 rounded-2xl animate-pulse' />
})
const AboutUs: React.FC = () => {
    return (
        <div className='p-10 px-10 xl:px-20 z-10 relative overflow-x-clip w-full'>
            <div className="absolute top-40 -right-50 h-100 w-150 rounded-full bg-linear-to-br from-blue-500 via-indigo-500 to-cyan-500 opacity-5 blur-3xl animate-blob animation-delay-2000 lg:scale-150" />
            <div className="absolute top-0 -left-50 h-96 w-96 rounded-full bg-linear-to-br from-indigo-500 via-cyan-500 to-blue-500 opacity-5 blur-3xl animate-blob animation-delay-4000 " />
            <div className='z-20 relative'>
                <div className='text-white flex flex-col items-center gap-10 md:gap-20 lg:flex-row w-full z-10'>
                    <div className='w-full h-full'>
                        <div className="font-sans flex gap-2 mb-3">
                            <div className="w-2 rounded-full bg-linear-to-b from-cyan-500/80 via-indigo-500/60 to-blue-500/10" />
                            <h2 className='font-light text-lg'>About Us</h2>
                        </div>
                        <h3 className="font-sans font-black text-3xl md:text-4xl mb-5">Dealer, Distributor, & Grosir Sparepart Terpercaya.</h3>
                        <a
                            href="https://www.google.com/maps/place/?q=place_id:ChIJa2anIlV_9i0RPgNwuEdfKkI"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group mr-2 mb-2 inline-block rounded-full p-0.5 bg-linear-to-r from-blue-500 via-indigo-500 to-cyan-500 transition-transform hover:scale-105"
                        >
                            <span className="block rounded-full text-white bg-gray-900 hover:cursor-pointer px-6 py-2.5 text-sm font-sans font-light">
                                📍 Tikil Motor New
                            </span>
                        </a>
                        <a
                            href="https://www.google.com/maps/place/?q=place_id:ChIJPRx1iXN_9i0Ry7gCPcGY5w4"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group mr-2 mb-2 inline-block rounded-full p-0.5 bg-linear-to-r from-blue-500 via-indigo-500 to-cyan-500 transition-transform hover:scale-105"
                        >
                            <span className="block rounded-full text-white bg-gray-900 hover:cursor-pointer px-6 py-2.5 text-sm font-sans font-light">
                                📍 Tikil Motor Imam Bonjol
                            </span>
                        </a>
                        <a
                            href="https://www.google.com/maps/place/?q=place_id:ChIJe9mGadNF8S0R0bUvntjrWJ4"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group mr-2 inline-block rounded-full p-0.5 bg-linear-to-r from-blue-500 via-indigo-500 to-cyan-500 transition-transform hover:scale-105"
                        >
                            <span className="block rounded-full text-white bg-gray-900 hover:cursor-pointer px-6 py-2.5 text-sm font-sans font-light">
                                📍 Kantor Balikpapan
                            </span>
                        </a>
                        <p className='font-sans text-lg font-light mt-8'>
                            Tikil Motor & CV.Mitra Kaltim merupakan perusahaan grosir dan distribusi sparepart yang berbasis di Samarinda, Kalimantan Timur.
                            Berpengalaman sejak 2012, kami berkomitmen untuk menyediakan layanan distribusi yang profesional dan unggul.
                        </p>
                    </div>
                    <div className='w-full'>
                        <div className="flex flex-col w-full text-black mb-5">
                            <div className="w-full flex gap-2">
                                <div className="bg-gray-800/50 border border-gray-700 rounded-lg w-1/3 relative">
                                    <div className='flex flex-col items-center text-white p-2'>
                                        <div className='aspect-square w-15 mb-3 bg-gray-700 border border-gray-600 rounded-full flex items-center justify-center'>
                                            <Motorbike size={32} />
                                        </div>
                                        <h1 className="font-sans text-center">Sparepart motor</h1>
                                    </div>
                                </div>
                                <div className="bg-gray-800/50 border border-gray-700 rounded-lg w-1/3 relative">
                                    <div className='flex flex-col items-center text-white p-2'>
                                        <div className='aspect-square w-15 mb-3 bg-gray-700 border border-gray-600 rounded-full flex items-center justify-center'>
                                            <BatteryCharging size={32} />
                                        </div>
                                        <h1 className="font-sans text-center">Aki mobil & motor</h1>
                                    </div>
                                </div>
                                <div className="bg-gray-800/50 border border-gray-700 rounded-lg w-1/3 relative">
                                    <div className='flex flex-col items-center text-white p-2'>
                                        <div className='aspect-square w-15 mb-3 bg-gray-700 border border-gray-600 rounded-full flex items-center justify-center'>
                                            <Settings size={32} />
                                        </div>
                                        <h1 className="font-sans text-center">Oli & lubricant</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='bg-gray-800/50 p-5 rounded-lg border border-gray-600'>
                            <p className='font-sans font-light mb-5'>Dipercayai Brand Terkemuka</p>
                            <div className="w-full place-items-center grid gap-5 rounded-lg overflow-hidden grid-rows-4 grid-cols-2 md:grid-rows-2 md:grid-cols-4">
                                {icons.map((icon, index) => (
                                    <div key={index} className='overflow-hidden max-w-md aspect-square flex flex-col items-center justify-center'>
                                        <Image
                                            className='w-40 h-40 object-cover'
                                            src={icon}
                                            alt={icon}
                                            width={150}
                                            height={150}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;  
