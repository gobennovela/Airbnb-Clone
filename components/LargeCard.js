import Image from "next/image";

function LargeCard({img, title, description, buttonText}) {
    return (
        <section className="cursor-pointer relative py-16">
            <div className="relative h-96 min-w-[300px]">
                <Image src={img} layout="fill" objectFit="cover" className="rounded-2xl"/>
            </div>
            <div className="absolute top-32 left-12">
                <h3 className="text-4xl mb-3 w-64 font-semibold">{title}</h3>
                <p>{description}</p>
                <button className="bg-gray-900 text-sm text-white px-4 py-2 rounded-lg mt-4">{buttonText}</button>
            </div>
        </section>
    )
}

export default LargeCard
