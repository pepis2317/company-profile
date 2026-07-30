
import Image from 'next/image';
import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
interface GalleryImage {
    image: string
    title: string
}
const Gallery: React.FC = () => {
    const [image, setImage] = useState<string | undefined>()
    const [open, setOpen] = useState<boolean>(false)
    const handleImagePress = (image: string) => {
        setImage(image)
        setOpen(true)
    }
    const images: GalleryImage[] = [
        {
            image: '/location.jpeg',
            title: 'Toko Tikil Motor New',
        },
        {
            image: '/m2tc.jpeg',
            title: 'Toko Tikil Motor Imam Bonjol',
        },
        {
            image: '/warehouse.jpeg',
            title: 'Gudang',
        },
        {
            image: '/fleet.jpeg',
            title: 'Transport',
        },
    ]
    return (
        <div className='p-10 px-10 pb-0 xl:px-20 z-10 relative overflow-x-clip w-full '>
            {image != undefined ?
                <Lightbox
                    open={open}
                    render={{
                        buttonPrev: () => null,
                        buttonNext: () => null,
                    }}
                    close={() => setOpen(false)}
                    slides={[{ src: image }]}
                    carousel={{ finite: true }}
                />
                : <></>}
            <div className='z-20 relative w-full'>
                <div className="text-white flex flex-col">
                    <div>
                        <div className="font-sans flex gap-2 mb-3">
                            <div className="w-2 rounded-full bg-linear-to-b from-cyan-500/80 via-indigo-500/60 to-blue-500/10" />
                            <h2 className='font-light text-lg'>Gallery</h2>
                        </div>
                        <h3 className="font-sans font-black text-3xl md:text-4xl mb-5">Perusahaan Kami</h3>
                    </div>
                </div>
                <div className='text-white font-sans flex flex-col lg:flex-row gap-3 w-full z-10 mb-20 transition-all'>
                    <div className="w-full">
                        <div className="w-full h-72 lg:h-full p-3 bg-gray-800/50 border border-gray-700 duration-200 rounded-lg hover:cursor-pointer hover:bg-gray-700/50 hover:-translate-y-1"
                            onClick={() => handleImagePress("/awards.jpeg")}>
                            <Image
                                className='w-full rounded-lg h-[90%] mb-3 object-cover'
                                src="/awards.jpeg"
                                alt="awards.jpeg"
                                width={500}
                                height={500}
                            />
                            <p className='font-bold text-xs lg:text-sm'>Awards</p>
                        </div>
                    </div>
                    <div className='w-full grid grid-rows-4 grid-cols-1 md:grid-rows-2 md:grid-cols-2 gap-3'>
                        {images.map((image, idx) => (
                            <div key={idx} className="w-full h-72 p-3 bg-gray-800/50 border border-gray-700 rounded-lg hover:cursor-pointer hover:bg-gray-700/50 duration-200 hover:-translate-y-1"
                                onClick={() => handleImagePress(image.image)}>
                                <Image
                                    className='w-full rounded-lg h-[90%] mb-3 object-cover'
                                    src={image.image}
                                    alt={image.image}
                                    width={500}
                                    height={500}
                                />
                                <p className='font-bold text-xs lg:text-sm'>{image.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery;  
