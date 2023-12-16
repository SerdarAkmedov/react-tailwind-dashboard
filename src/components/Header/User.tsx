import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import UserOne from '../../images/user/user-01.png';

const User = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const trigger = useRef<any>(null);



  return (
    <div className="relative">
      <Link
        ref={trigger}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-4"
        to="#"
      >
        <span className="h-12 w-12 rounded-full">
          <img src={UserOne} alt="User" />
        </span>
      </Link>

 
    </div>
  );
};

export default User;
