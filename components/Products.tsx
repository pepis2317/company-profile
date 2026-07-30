import Image from 'next/image';
const icons = ['/fb.png', '/repsol.png', '/maxxis.png', '/fim.png', '/dsk.png', '/yamaha.png', '/infinera.png', '/skf.png']
const Products: React.FC = () => {
    return (
        <div className='flex flex-col items-center'>
            <div className="w-full place-items-center grid md:grid-rows-3 md:grid-cols-3 lg:grid-rows-2 lg:grid-cols-4">
                {icons.map((icon, index) => (
                    <div key={index} className='overflow-hidden border border-gray-200 w-full bg-white aspect-square flex flex-col items-center justify-center'>
                        <Image
                            className='w-52 h-52 bg-white p-5 md:w-64 md:h-64 object-cover'
                            src={icon}
                            alt={icon}
                            width={150}
                            height={150}
                        />
                    </div>
                ))}
            </div>
            <p className='p-10 font-mono text-blue-950 font-bold text-lg'>dan masih banyak lagi</p>

        </div>
    )
}
export default Products
