'use client';
import React, { useState } from 'react';
import Button from '../Button';
import { Avatar } from '@nextui-org/react';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, DropdownSection } from '@nextui-org/react';
import { CopyIcon, LogoutIcon, MenuIcon } from '../constants/Icons';

import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Image } from '@nextui-org/react';
import Link from 'next/link';
import { navbarClass, NavBtnSvg1, NavBtnSvg2 } from './const';
import { isPathName } from '@/utils/utils';
import { usePathname } from 'next/navigation';
import { PRIVATE_ROUTES } from '@/constants/routes';

const Header = () => {
  const [isBoxVisible, setBoxVisibility] = useState(false);
  const pathname = usePathname();

  const handleButtonClick = () => {
    setBoxVisibility(!isBoxVisible);
  };
  return (
    <>
      <div className='w-ful justify-between flex items-center'>
        <button className={'block xl:hidden'} onClick={handleButtonClick}>
          <MenuIcon />
        </button>
      </div>

      <Navbar
        position='sticky'
        isBlurred={false}
        isBordered={false}
        height={'full'}
        className={`${
          isBoxVisible ? 'translate-x-[0px] !max-w-[300px] p-4' : '-translate-x-[200px]'
        } w-full transition-transform bg-primary xl:hidden duration-100 max-w-[200px] xl:max-w-[200px] fixed left-0 top-0 bottom-0 xl:relative xl:ml-0`}
        classNames={navbarClass}
      >
        {isBoxVisible ? <div onClick={handleButtonClick}>X</div> : ''}
        <NavbarBrand className={isBoxVisible ? 'grow-0 mb-4 mt-8' : 'grow-0 mb-4'}>
          <p className='font-bold text-inherit '>Brain Chains</p>
        </NavbarBrand>
        <NavbarContent className={'overflow-y-auto'} justify='start'>
          <NavbarItem>
            <Button as={Link} color='primary' href='#' variant='flat'>
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </>
  );
};

export default Header;
