'use client'
import Bike from '../public/bike.svg'
export interface SellingPoint {
    amount: string
    text: string
}
interface HeaderProps {
    onLearnMore: () => void
    onContact: () => void
};
const sellingPoints: SellingPoint[] = [
    {
        amount: '150+',
        text: 'Pelanggan'
    },
    {
        amount: '10+',
        text: 'Kota'
    },
    {
        amount: '3',
        text: 'Cabang'
    },
    {
        amount: '7',
        text: 'Transport'
    },
    {
        amount: '5+',
        text: 'Awards'
    },
    {
        amount: '4',
        text: 'Gudang'
    },
]
const Header: React.FC<HeaderProps> = ({ onLearnMore, onContact }) => {
    return (
        <div className="text-white">
            <h1 className="sr-only">
                Solusi sparepart otomotif terpercaya area Kaltim - Kaltara. Jangkauan
            </h1>
            <div className="relative bg-gray-900 h-screen overflow-x-clip">
                <div className="absolute -top-40 -left-50 h-100 w-150 rounded-full bg-linear-to-br from-blue-500 via-indigo-500 to-cyan-500 opacity-25 blur-3xl animate-blob animation-delay-2000 lg:scale-150" />
                <div className="absolute top-16 -right-32 h-96 w-150 rounded-full bg-linear-to-br from-cyan-500 via-indigo-500 to-blue-500 opacity-25 blur-3xl animate-blob animation-delay-2000 lg:scale-150" />
                <div className="absolute top-64 -left-20 h-96 w-96 rounded-full bg-linear-to-br from-indigo-500 via-cyan-500 to-blue-500 opacity-25 blur-3xl animate-blob animation-delay-4000 " />

                <Bike className="w-450 aspect-square absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-270 opacity-50" />
                <div className='z-10'>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-sans" >
                        <div className="flex">
                            <h1 className="text-5xl sm:text-7xl xl:text-8xl font-black mb-5">
                                <span className="block">SOLUSI</span>
                                <span className="block font-extrabold bg-clip-text text-transparent bg-linear-to-r from-blue-500 via-indigo-500 to-cyan-500">
                                    SPAREPART
                                </span>
                                <span className="block">ANDA.</span>
                            </h1>
                        </div>

                        <div className='flex gap-5 flex-wrap w-full'>
                            {sellingPoints.map((point, index) => (
                                <div key={index} className='hover:scale-105 duration-200 flex flex-col items-center justify-center'>
                                    <h3 className="md:text-3xl text-2xl font-sans font-black">{point.amount}</h3>
                                    <h3 className="md:text-lg font-sans">{point.text}</h3>
                                </div>
                            ))}
                        </div>

                        <div className="flex gap-4 my-5">
                            <div className="w-1 bg-white" />
                            <h3 className="font-light max-w-sm">10+ tahun dalam bisnis distribusi sparepart area Kaltim - Kaltara</h3>
                        </div>

                        <button
                            onClick={onLearnMore}
                            className="group inline-block rounded-full p-0.5 bg-linear-to-r hover:cursor-pointer from-blue-500 via-indigo-500 to-cyan-500 transition-transform hover:scale-105"
                        >
                            <span className="block rounded-full text-white bg-gray-900 px-6 py-2.5 text-sm font-sans font-black">
                                Learn More
                            </span>
                        </button>
                        <button
                            onClick={onContact}
                            className="group inline-block rounded-full p-0.5 ml-2 bg-white hover:cursor-pointer transition-transform hover:scale-105"
                        >
                            <span className="block rounded-full text-black bg-white px-6 py-2.5 text-sm font-sans font-black">
                                Contact
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;
