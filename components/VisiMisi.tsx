import Image from 'next/image';
const VisiMisi: React.FC = () => {
    return (
        <div>
            <div className='flex flex-col md:flex-row'>
                <Image
                    className='w-full md:w-1/2 h-100 md:h-170 bg-white object-cover'
                    src={'/guy-on-bike.png'}
                    alt={'guy on bike.png'}
                    width={1920}
                    height={1080}
                />
                <div className='flex md:w-1/2 h-170  w-full'>
                    <div className='font-sans font-black p-5 w-fit h-full bg-black border-b-2 border-b-black text-white'>
                        <p className='-mb-3'>M</p>
                        <p className='-mb-3'>K</p>
                        <p className='-mb-3'>M</p>
                    </div>
                    <div className='bg-white h-full w-full border-b-2 border-b-gray-200'>
                        <div className='p-5'>
                            <h1 className='font-sans font-black text-2xl mb-2'>Visi</h1>
                            <p className='font-mono lg:max-w-3/4 xl:max-w-1/2'>Menjadi distributor profesional dan terpercaya serta berkomitmen untuk berkembang dan memberikan pelayanan prima</p>
                        </div>
                        <div className='p-5'>
                            <h1 className='font-sans font-black text-2xl mb-2'>Misi</h1>
                            <ul className='font-mono list-decimal ml-8 lg:max-w-3/4 xl:max-w-1/2'>
                                <li className='mb-3'>Membangun dan menjaga kerjasama yang professional, unggul, dan kompeten</li>
                                <li className='mb-3'>Melakukan pengembangan terus menerus untuk mengoptimalkan kerjasama dan nilai pelayanan dalam pemasaran dan pendistribusian</li>
                                <li>Mengutamakan pencapaian kualitas kerja yang sesuai harapan dan kebutuhan mitra kami</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="
                    flex font-mono justify-evenly text-white
                    px-10 py-2 bg-black text-sm flex-wrap
                    ">
                <p>0811552317 (Dorie/Owner)</p>
                <p>wiyanto_dorie@yahoo.com</p>
                <p>mitrakaltimotor@gmail.com</p>
            </div>
        </div>
    )
}

export default VisiMisi;
