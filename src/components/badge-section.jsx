import Image from "next/image";
import Badge from "./badge";


const BadgeSection = () => {
    return (
        <div className="w-full md:min-w-[50%] h-full relative bg-grey-900 grid grid-cols-2 gap-3 p-5 rounded-xl">
            <Image src={'/pattern/dotted2.png'} width={200} height={100} alt='pattern' className='absolute top-0 left-0' />
            <Badge />
            <Badge />
            <Badge />
            <Badge />
        </div>
    );
}

export default BadgeSection;;