import { GrTransaction } from "react-icons/gr";


const TransactionCard = ({ classes }) => (
    <div className={`${classes} w-full bg-grey-900 px-2 py-2 items-end justify-between border border-grey-700  flex rounded-md`}>
        <span className="flex  items-center gap-2">
            <span className="w-10 h-10 rounded-full bg-limegreen-950 text-grey-800 flex justify-center items-center">
                <GrTransaction />
            </span>
            <span className="flex flex-col">
                <p className="text-xs font-light">Transaction</p>
                <p className="text-sm font-semibold">Mark Smith</p>
            </span>
        </span>
        <span className="text-sm font-semibold">
            -$69.5
        </span>
    </div>
)

export default TransactionCard