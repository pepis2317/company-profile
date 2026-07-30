import { Mail, MapPin, Phone } from "lucide-react";

const Contacts: React.FC = () => {
    return (
        <div className='p-10 px-10 xl:px-20 z-10 relative overflow-x-clip w-full'>
            {/* <div className="absolute top-40 -right-50 h-100 w-150 rounded-full bg-linear-to-br from-blue-500 via-indigo-500 to-cyan-500 opacity-10 blur-3xl animate-blob animation-delay-2000 lg:scale-150" /> */}
            {/* <div className="absolute top-0 -left-20 h-96 w-96 rounded-full bg-linear-to-br from-indigo-500 via-cyan-500 to-blue-500 opacity-10 blur-3xl animate-blob animation-delay-4000 " /> */}
            {/* <div className="absolute top-150 -left-32 h-96 w-150 rounded-full bg-linear-to-br from-cyan-500 via-indigo-500 to-blue-500 opacity-10 blur-3xl animate-blob animation-delay-2000 lg:scale-150" /> */}
            <div className='z-20 relative w-full'>
                <div className="text-white flex flex-col">
                    <div>
                        <div className="font-sans flex gap-2 mb-3">
                            <div className="w-2 rounded-full bg-linear-to-b from-cyan-500/80 via-indigo-500/60 to-blue-500/10" />
                            <h2 className='font-light text-lg'>Contacts</h2>
                        </div>
                        <h3 className="font-sans font-black text-3xl md:text-4xl mb-5">Hubungi Kami</h3>
                    </div>
                </div>
                <div className='text-white flex flex-col lg:flex-row gap-5 w-full z-10 mb-20'>
                    <div className="w-full">
                        <div className="flex flex-col gap-3">
                            <div className="bg-gray-800/50 border border-gray-700 rounded-lg w-full relative">
                                <div className='flex gap-5 items-center text-white p-5'>
                                    <div className='aspect-square w-12 bg-gray-700 border border-gray-600 rounded-full flex items-center justify-center'>
                                        <MapPin size={24} />
                                    </div>
                                    <div className="flex flex-col gap-1 font-sans">
                                        <h1 className="font-bold">Alamat Head Office</h1>
                                        <p className="font-light">Jl. D.I. Panjaitan No.3, Temindung Permai, Kec. Sungai Pinang, Kota Samarinda, Kalimantan Timur 75117</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-800/50 border border-gray-700 rounded-lg w-full relative">
                                <div className='flex gap-5 items-center text-white p-5'>
                                    <div className='aspect-square w-12 bg-gray-700 border border-gray-600 rounded-full flex items-center justify-center'>
                                        <Phone size={24} />
                                    </div>
                                    <div className="flex flex-col gap-1 font-sans">
                                        <h1 className="font-bold">Telepon</h1>
                                        <p className="font-light">+628164512317</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-800/50 border border-gray-700 rounded-lg w-full relative">
                                <div className='flex gap-5 items-center text-white p-5'>
                                    <div className='aspect-square w-12 bg-gray-700 border border-gray-600 rounded-full flex items-center justify-center'>
                                        <Mail size={24} />
                                    </div>
                                    <div className="flex flex-col gap-1 font-sans">
                                        <h1 className="font-bold">Email</h1>
                                        <p className="font-light">candradenis2317@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full'>
                        <div className="flex h-full flex-col p-5 gap-3 bg-gray-800/50 border border-gray-700 rounded-lg w-full relative">
                            <h1 className="font-bold">Jam Operasional</h1>
                            <div className="flex justify-between font-sans">
                                <p className="text-nowrap">Senin - Sabtu</p>
                                <p className="text-nowrap">08.30 - 17.00</p>
                            </div>
                            <div className="flex justify-between font-sans">
                                <p>Minggu</p>
                                <p>Tutup</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacts;  
