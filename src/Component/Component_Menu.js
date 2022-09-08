import React from 'react';
import "./menu.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHamburger } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import "./App";

const Component_Menu = (
  
) => {
  return (
    <div className='menu'  id="myMenu">
        <ul>
            <li><a href='/'><FontAwesomeIcon icon={faHome} /></a></li>
            <li><a href='/'>Thời Sự </a></li>
            <li> <a href='/'>Góc Nhìn </a></li> 
            <li> <a href='/'>Thế Giới </a>  </li>
            <li> <a href='/'>Video </a>  </li>
            <li><a href='/'>Podcasts </a>  </li>
            <li><a href='/'>Kinh Doanh </a>  </li>
            <li><a href='/'>Khoa Học </a>  </li>
            <li><a href='/'>Giải Trí  </a>  </li>
            <li><a href='/'>Thể Thao </a>  </li>
            <li><a href='/'>Pháp Luật  </a>  </li>
            <li><a href='/'>Giáo Dục </a>  </li>
            <li><a href='/'>Sức Khỏe </a>  </li>
            <li><a href='/'>Đời Sống </a>  </li>
            <li><a href='/'>Du Lịch </a>  </li>
            <li><a href='/'>Số Hóa </a>  </li>
            <li><a href='/'>Xe  </a>  </li>
            <li><a href='/'>Ý kiến </a>  </li>
            <li><a href='/'>Tâm Sự </a>  </li>
            <li><a href='/'>Hài </a>  </li>
            <li ><a className='menu_inlinetext'  href='/'>Tất Cả </a>  </li>
            <li><a href='/'> <FontAwesomeIcon icon={faHamburger} /> </a>  </li>
        </ul>
    </div>

  )


}

export default Component_Menu