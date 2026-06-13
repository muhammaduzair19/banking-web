import Image from "next/image";
import Badge from "./badge";

const BadgeSection = ({ items = [] }) => {
    return (
        <div className="w-full md:w-1/2 relative bg-white dark:bg-grey-900 border border-grey-200 dark:border-grey-800 grid grid-cols-2 gap-4 p-6 rounded-2xl shadow-sm dark:shadow-none overflow-hidden transition-colors duration-300">
            <Image src={'/pattern/dotted2.png'} width={200} height={100} alt='pattern' className='absolute top-0 left-0 opacity-40 dark:opacity-100' />
            {items.map((item, idx) => (
                <Badge key={idx} icon={item.icon} title={item.title} />
            ))}
            {items.length === 0 && (
                <>
                    <Badge />
                    <Badge />
                    <Badge />
                    <Badge />
                </>
            )}
        </div>
    );
}

export default BadgeSection;