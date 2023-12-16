import { Link } from 'react-router-dom';
import { FaPlus } from "react-icons/fa6";


const Add = () => {
  return (
    <li className="relative bg-[#f7f7f7] rounded-full p-1">
      <Link
        to="#"
        className="relative flex h-8 w-8 items-center justify-center rounded-full border-[0.5px] border-stroke bg-white hover:text-primary dark:border-strokedark dark:bg-meta-4 dark:text-white">
        <FaPlus className="w-[13px] h-[13px]" />
      </Link>
    </li>
  );
};

export default Add;
