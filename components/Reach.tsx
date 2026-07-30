import dynamic from 'next/dynamic'
const CityReachMap = dynamic(() => import('@/components/CityReachMap'), {
    ssr: false,
    loading: () => <div className='h-[500px] bg-gray-800 rounded-2xl animate-pulse' />
})
const Reach: React.FC = () => {
    return (
        <div className='p-10 px-10 xl:px-20 z-10 relative overflow-x-clip w-full'>
            <div className='z-20 relative flex flex-col lg:flex-row gap-5 lg:items-center'>
                <div className="text-white flex flex-col w-full">
                    <div>
                        <div className="font-sans flex gap-2 mb-3">
                            <div className="w-2 rounded-full bg-linear-to-b from-cyan-500/80 via-indigo-500/60 to-blue-500/10" />
                            <h2 className='font-light text-lg'>Reach</h2>
                        </div>
                        <h3 className="font-sans font-black text-3xl md:text-4xl mb-4">Jangkauan Komprehensif</h3>
                        <p className='font-sans'>Kami melayani & mendistribusikan produk dari Tanahgrogot sampai Nunukan</p>
                    </div>
                </div>

                <div className='w-full'>
                    <CityReachMap />
                </div>
            </div>
        </div>
    )
}

export default Reach;  
