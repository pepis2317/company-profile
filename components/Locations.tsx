'use client'
import { Button, Image, Modal } from "antd";
import { useState } from "react";
const icons = [
    { src: "/fb.png", lat: -6.2, lng: 106.8 },
];
interface Item {
    src: string
    lat: number
    lng: number
}
const Locations: React.FC = () => {
    const [selectedItem, setSelectedItem] = useState<Item | null>(null)
    return (
        <div className='flex flex-col items-center mb-5'>
            <Modal
                open={!!selectedItem}
                footer={null}
                onCancel={() => setSelectedItem(null)}
                centered
            >
                {selectedItem && (
                    <div className="flex flex-col gap-4">
                        <Image
                            className="w-full max-h-[70vh] object-contain"
                            src={selectedItem.src}
                            alt={selectedItem.src}
                            preview={false}
                        />

                        <Button
                            type="primary"
                            className="p-5"
                            href={`https://www.google.com/maps?q=${selectedItem.lat},${selectedItem.lng}`}
                            target="_blank"
                        >
                            View in Google Maps
                        </Button>
                    </div>
                )}
            </Modal>
            <h1 className='font-sans font-black px-5 my-10 text-3xl md:text-5xl bg-black text-white'>
                LOCATIONS
            </h1>
            <div className="max-w-4xl grid grid-cols-3 gap-0">
                {icons.map((item, index) => (
                    <div key={index}
                        onClick={() => setSelectedItem(item)}
                        className='cursor-pointer border border-gray-200 overflow-hidden max-w-2xl bg-white aspect-square flex flex-col items-center justify-center relative'>
                        <Image
                            className="w-full h-full object-cover transition duration-300"
                            src={item.src}
                            alt={item.src}
                            preview={false}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Locations;
