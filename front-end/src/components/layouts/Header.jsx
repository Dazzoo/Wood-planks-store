import React from "react";
import Image from 'next/image'
import {Navbar, NavbarBrand, NavbarContent, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, NavbarItem, Link, Button} from "@nextui-org/react";
import BasicButton from '@/components/shared/buttons/BasicButton'


export default function Header() {

  const menuItems = [
    {
      name: 'Products',
      path: '/'   
    },
    {
      name: 'Reviews',
      path: 'reviews'
    }
  ];

  return (
    <header className="flex min-w-full" >
      <Navbar disableAnimation isBordered className=" py-6 px-12 max-md:px-4 text-2xl bg-stone-200">
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle />
        </NavbarContent>

        <NavbarContent className="sm:hidden pr-3" justify="center">
          <NavbarBrand>
            <p className="text-2xl">Bits Orchestra</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarBrand>
            <p className="text-2xl">Bits Orchestra</p>
          </NavbarBrand>
          {menuItems.map((item, index) => (
            <NavbarItem 
            className={`${index === 0 ? 'ml-12' : 'ml-2'}`}
            key={`${item.name}-${index}`} >
              <Link color="foreground" href={item.path}>
                {item.name}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem className="">
            <BasicButton
                  name={'Login'}
                  onClickMessage='REDIRECT TO LOGIN'
            />
          </NavbarItem>
          <NavbarItem>
            <BasicButton
                  name={'Sign up'}
                  onClickMessage='REDIRECT TO SIGH UP'
              />
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem 
              className={`${index === 0 ? 'pt-12' : ' '}`}
              key={`${item.name}-${index}`}>
              <Link
                className="w-full"
                color={"foreground"}
                href={item.path}
                size="lg"
              >
                {item.name}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </header>
  );






  // return (
    //   <header className="flex min-w-full" >
    //        <Navbar className=" py-6 px-12 max-md:px-4 text-2xl bg-stone-200"
    //         shouldHideOnScroll>
    //         <NavbarBrand>
    //           <p className="text-2xl">Bits Orchestra</p>
    //         </NavbarBrand>
    //         <NavbarContent className="hidden sm:flex gap-4" justify="center">
    //           <NavbarItem>
    //             <Link color="foreground" href="#">
    //               Features
    //             </Link>
    //           </NavbarItem>
    //           <NavbarItem isActive>
    //             <Link href="#" aria-current="page">
    //               Customers
    //             </Link>
    //           </NavbarItem>
    //           <NavbarItem>
    //             <Link color="foreground" href="#">
    //               Integrations
    //             </Link>
    //           </NavbarItem>
    //         </NavbarContent>
    //         <NavbarContent justify="end">
    //           <NavbarItem className=" lg:flex">
    //             <BasicButton
    //               name={'Login'}
    //               onClickMessage='REDIRECT TO LOGIN'
    //             />
    //           </NavbarItem>
    //           <NavbarItem>
    //             <BasicButton
    //               name={'Sign up'}
    //               onClickMessage='REDIRECT TO SIGN UP'
    //             />
    //           </NavbarItem>
    //         </NavbarContent>
    //       </Navbar>
    //   </header>
    // );
  }
  
  function BigNavbar() {
    
  }