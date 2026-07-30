'use client'
import { Image, Modal } from "antd";
import { useState } from "react";
const icons = ['/fb.png', '/repsol.png', '/maxxis.png', '/fim.png', '/dsk.png', '/yamaha.png', '/infinera.png', '/skf.png']
const Achievements: React.FC = () => {
    const [selectedItem, setSelectedItem] = useState<string|null>(null)
    return (
        <div className="flex flex-col items-center mb-5">
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
                            src={selectedItem}
                            alt={selectedItem}
                            preview={false}
                        />
                    </div>
                )}
            </Modal>
            <h1 className='font-sans font-black px-5 my-10 text-3xl md:text-5xl bg-black text-white'>
                ACHIEVEMENTS
            </h1>
            <div className='flex flex-col items-center'>
                <div className="max-w-4xl grid grid-cols-3 gap-0">
                    {icons.map((icon, index) => (
                        <div key={index} 
                            onClick={() => setSelectedItem(icon)}
                            className='hover:cursor-pointer border border-gray-200 overflow-hidden max-w-2xl bg-white aspect-square flex flex-col items-center justify-center'>
                            <Image
                                className="w-full h-full object-cover"
                                src={icon}
                                alt={icon}
                                preview={false}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Achievements;
