'use client';

import * as React from 'react';

import { cn } from '../../utils';
// import { Icons } from '@/components/icons';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from './Menu';
import NavbarItem from '@theme/NavbarItem';
import { ChevronDown } from 'lucide-react';
import {
  docsLinkItems,
  guidesLinkItems,
  jupLinkItems,
} from '../../../static/data/megaMenu';

const CustomTrigger = React.forwardRef((props, ref) => (
  <span ref={ref} {...props} style={{ cursor: 'pointer', color: 'blue' }}>
    {props.children}
  </span>
));

export function MegaMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger asChild>
            <div className="p-0 mt-2 -mb-1">
              <a className="navbar__item navbar__link mega_menu px-1 cursor-pointer text-[16px]">
                JUP
              </a>
              <ChevronDown
                className="text-white relative top-[1px] h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
                aria-hidden="true"
              />
            </div>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex flex-col flex-wrap w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-3 lg:w-[600px] max-h-[300px]">
              {jupLinkItems.map((linkGroup) => (
                <div className="flex flex-col gap-3">
                  <div className="grid gap-3">
                    <span className="text-white text-lg font-bold -mb-2">
                      {linkGroup.heading}
                    </span>
                    <span className="w-full border-b-[0.5px] border-[#00BCF090] border-solid border-t-transparent border-x-transparent" />
                  </div>
                  {linkGroup.children.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    />
                  ))}
                </div>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger asChild>
            <div className="p-0 mt-2 -mb-1">
              <a className="navbar__item navbar__link mega_menu px-1 cursor-pointer text-[16px]">
                Guides
              </a>
              <ChevronDown
                className="text-white relative top-[1px] h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
                aria-hidden="true"
              />
            </div>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex flex-col flex-wrap w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-3 lg:w-[600px] max-h-[500px]">
              {guidesLinkItems.map((linkGroup) => (
                <div className="flex flex-col gap-3">
                  <div className="grid gap-3">
                    <span className="text-white text-lg font-bold -mb-2">
                      {linkGroup.heading}
                    </span>
                    <span className="w-full border-b-[0.5px] border-[#00BCF090] border-solid border-t-transparent border-x-transparent" />
                  </div>
                  {linkGroup.children.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    />
                  ))}
                </div>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger asChild>
            <div className="p-0 mt-2 -mb-1">
              <a className="navbar__item navbar__link mega_menu px-1 cursor-pointer text-[16px]">
                Docs
              </a>
              <ChevronDown
                className="text-white relative top-[1px] h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
                aria-hidden="true"
              />
            </div>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex flex-col flex-wrap w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-3 lg:w-[800px] max-h-[600px]">
              {docsLinkItems.map((linkGroup) => (
                <div className="flex flex-col gap-3">
                  <div className="grid gap-3">
                    <span className="text-white text-lg font-bold -mb-2">
                      {linkGroup.heading}
                    </span>
                    <span className="w-full border-b-[0.5px] border-[#00BCF090] border-solid border-t-transparent border-x-transparent" />
                  </div>
                  {linkGroup.children.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    />
                  ))}
                </div>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li className="list-none">
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-[#D9F99D] focus:bg-accent focus:text-accent-foreground text-[#56BBEB] font-bold',
            className
          )}
          {...props}
        >
          <div className="leading-none">{title}</div>
          <p className="line-clamp-2 leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';
