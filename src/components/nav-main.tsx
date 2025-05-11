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

type NavItem = {
  title: string;
  url: string;
  icon?: LucideIcon;
  isActive?: boolean;
  items?: {
    title: string;
    url: string;
  }[];
};

export function NavMain({ items }: { items: NavItem[] }) {
  const pathname = usePathname();

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>
      <SidebarMenu>
        {items.map(item => {
          const isSubItemActive = item.items?.some(sub => pathname === sub.url);

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
                    className={navButtonVariants({ active: isSubItemActive })}
                  >
                    {item.icon && <item.icon />}
                    <span>{item.title}</span>
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
                                <DotIndicator />
                              </span>
                            ) : (
                              <Link href={subItem.url}>
                                <span
                                  className={navItemVariants({
                                    active: isActive,
                                  })}
                                >
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
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}
