import { GrTransaction } from "react-icons/gr";

const TransactionCard = ({ 
    classes = "", 
    name = "Mark Smith", 
    type = "Transaction", 
    amount = "-$69.50" 
}) => {
    const isNegative = amount.startsWith('-');
    return (
        <div className={`${classes} w-full bg-white dark:bg-grey-900 px-4 py-3 items-center justify-between border border-grey-200 dark:border-grey-700 flex rounded-xl transition-all duration-300 shadow-sm dark:shadow-none`}>
            <span className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-limegreen-950/20 dark:bg-limegreen-950/10 text-lime-600 dark:text-limegreen-950 flex justify-center items-center flex-shrink-0">
                    <GrTransaction size={16} />
                </span>
                <span className="flex flex-col text-left">
                    <p className="text-xs text-grey-500 dark:text-grey-400">{type}</p>
                    <p className="text-sm font-semibold text-grey-900 dark:text-white">{name}</p>
                </span>
            </span>
            <span className={`text-sm font-bold ${isNegative ? 'text-red-500 dark:text-red-400' : 'text-green-500 dark:text-green-400'}`}>
                {amount}
            </span>
        </div>
    )
}

export default TransactionCard