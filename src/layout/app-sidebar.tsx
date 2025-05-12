'use client';

import * as React from 'react';
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from 'lucide-react';
import { motion } from 'motion/react';

import { NavMain } from '@/components/nav-main';
import { NavProjects } from '@/components/nav-projects';
import { NavUser } from '@/components/nav-user';
import { TeamSwitcher } from '@/components/team-switcher';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarTrigger,
} from '@/components/sidebar';
import ToggleTheme from '@/components/toggle-theme';
import ToggleScreen from '@/components/toggle-screen';
import { data } from './sidebar-data';

// This is sample data.

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      collapsible="icon"
      variant="floating"
      {...props}
      side="right"
      className="sticky top-0"
    >
      <SidebarTrigger className="bg-background border-muted absolute top-16 -left-1.5 z-10 hidden border-4 shadow-none md:block" />
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent className="mt-6">
        <NavMain navMainData={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <div className="flex flex-col gap-y-2">
          <ToggleTheme className="flex md:hidden" />
          <ToggleScreen className="flex md:hidden" />
        </div>
        <NavUser user={data.user} />
      </SidebarFooter>
      {/* <SidebarRail /> */}
    </Sidebar>
  );
}
