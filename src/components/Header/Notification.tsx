import { Link } from 'react-router-dom';
import { PiBellSimpleThin } from "react-icons/pi";


const Notification = () => {
  return (
    <li className="relative bg-[#f7f7f7] rounded-full p-1">
      <Link
        to="#"
        className="relative flex h-8 w-8 items-center justify-center rounded-full border-[0.5px] border-stroke bg-white hover:text-primary dark:border-strokedark dark:bg-meta-4 dark:text-white">
        <PiBellSimpleThin className="w-[18px] h-[18px]" />
      </Link>
    </li>
  );
};

export default Notification;

