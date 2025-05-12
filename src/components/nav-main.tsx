'use client';

import { ChevronRight, type LucideIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cva } from 'class-variance-authority';

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from '@/components/sidebar';
import DotIndicator from './dot-indicator';
import React from 'react';

// Variant for nav subitems
const navItemVariants = cva('transition-colors', {
  variants: {
    active: {
      true: 'text-sidebar-accent-foreground',
      false: 'text-muted-foreground',
    },
  },
});

// Variant for menu button wrapper (main nav item)
const navButtonVariants = cva('', {
  variants: {
    active: {
      true: 'bg-sidebar-accent rounded-md',
      false: '',
    },
  },
});

// Chevron rotation
const chevronVariants = cva(
  'ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90'
);

type NavCategory = {
  categoryLabel?: string;
  subItems: SubItem[];
};

type IconComponent = {
  variants?: string | React.FC;
};

type SubItem = {
  title: string;
  url: string;
  iconName?: React.FunctionComponent | React.FunctionComponent<IconComponent>;
  iconVariants?: string;
  activeIconVariant?: string;
  notActiveIconVariant?: string;
  isActive?: boolean;
  items?: Items[];
};
type Items = {
  title: string;
  url: string;
};

interface NavMainDataProps {
  navMainData: NavCategory[];
}

const renderIcon = (item: SubItem, isActive: boolean) => {
  if (!item.iconName) return null;

  // If iconName is a React component
  if (typeof item.iconName !== 'string') {
    const IconComponent = item.iconName;
    return (
      <IconComponent
        variants={isActive ? item.activeIconVariant : item.notActiveIconVariant}
      />
    );
  }
  return null;
};

export function NavMain({ navMainData }: NavMainDataProps) {
  const pathname = usePathname();

  return (
    <>
      {navMainData.map(category => (
        <SidebarGroup key={category.categoryLabel}>
          {category.categoryLabel && (
            <SidebarGroupLabel className="text-foreground/50 text-xs font-light">
              {category.categoryLabel}
            </SidebarGroupLabel>
          )}
          <SidebarMenu>
            {category.subItems.map(item => {
              const isSubItemActive = item.items?.some(
                sub => pathname === sub.url
              );
              const hasSubItems = item.items && item.items.length > 0;
              if (hasSubItems) {
                return (
                  <Collapsible
                    key={item.title}
                    asChild
                    defaultOpen={isSubItemActive || item.isActive}
                    className="group/collapsible"
                  >
                    <SidebarMenuItem>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton
                          tooltip={item.title}
                          className={navButtonVariants({
                            active: isSubItemActive,
                          })}
                        >
                          {/* {item.icon && <item.icon  />} */}

                          {renderIcon(item, isSubItemActive ?? false)}

                          <span
                            className={navButtonVariants({
                              active: isSubItemActive,
                            })}
                          >
                            {item.title}
                          </span>
                          <ChevronRight className={chevronVariants()} />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>

                      <CollapsibleContent className="CollapsibleContent">
                        <SidebarMenuSub>
                          {item.items?.map(subItem => {
                            const isActive = pathname === subItem.url;

                            return (
                              <SidebarMenuSubItem key={subItem.title}>
                                <SidebarMenuSubButton
                                  asChild
                                  className="overflow-visible"
                                >
                                  {isActive ? (
                                    <span className="text-sidebar-accent-foreground relative">
                                      {subItem.title}
                                      <DotIndicator active/>
                                    </span>
                                  ) : (
                                    <Link href={subItem.url}>
                                      <span
                                        className={navItemVariants({
                                          active: isActive,
                                        })}
                                      >
                                        <DotIndicator active={false}/>
                                        {subItem.title}
                                      </span>
                                    </Link>
                                  )}
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            );
                          })}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </SidebarMenuItem>
                  </Collapsible>
                );
              }

              // Simple link item when there are no sub-items
              const isActive = pathname === item.url;
              return (
                <SidebarMenuItem key={item.title}>
                  <Link href={item.url}>
                    <SidebarMenuButton
                      tooltip={item.title}
                      className={navButtonVariants({ active: isActive })}
                    >
                      {renderIcon(item, isActive)}
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarGroup>
      ))}
    </>
  );
}
