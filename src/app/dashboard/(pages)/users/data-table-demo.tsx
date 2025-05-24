'use client';

import { DataTable } from '@/components/data-table/data-table';
import { DataTableColumnHeader } from '@/components/data-table/data-table-column-header';
import { DataTableToolbar } from '@/components/data-table/data-table-toolbar';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useDataTable } from '@/hooks/use-data-table';

import type { Column, ColumnDef } from '@tanstack/react-table';
import {
  CheckCircle,
  CheckCircle2,
  DollarSign,
  MoreHorizontal,
  Text,
  XCircle,
} from 'lucide-react';
import { parseAsArrayOf, parseAsString, useQueryState } from 'nuqs';
import * as React from 'react';

type User = {
  id: string;
  firstName: string;
  lastName: string;
  status: 'active' | 'inactive';
  position: 'employee' | 'customer';
  avatar: string;
};

const data: User[] = [
  {
    id: '1',
    firstName: 'علی',
    lastName: 'محمدی',
    status: 'active',
    position: 'employee',
    avatar: 'https://i[fallback].pravatar.cc/150?img=1',
  },
  {
    id: '2',
    firstName: 'زهرا',
    lastName: 'احمدی',
    status: 'inactive',
    position: 'customer',
    avatar: 'https://i.pravatar.cc/150?img=2',
  },
  {
    id: '3',
    firstName: 'حسین',
    lastName: 'رضایی',
    status: 'active',
    position: 'employee',
    avatar: 'https://i.pravatar.cc/150?img=3',
  },
  {
    id: '4',
    firstName: 'فاطمه',
    lastName: 'کریمی',
    status: 'inactive',
    position: 'customer',
    avatar: 'https://i.pravatar.cc/150?img=4',
  },
  {
    id: '5',
    firstName: 'محمد',
    lastName: 'جعفری',
    status: 'active',
    position: 'employee',
    avatar: 'https://i.pravatar.cc/150?img=5',
  },
  {
    id: '6',
    firstName: 'سارا',
    lastName: 'نوری',
    status: 'inactive',
    position: 'customer',
    avatar: 'https://i.pravatar.cc/150?img=6',
  },
  {
    id: '7',
    firstName: 'رضا',
    lastName: 'کاظمی',
    status: 'active',
    position: 'employee',
    avatar: 'https://i.pravatar.cc/150?img=7',
  },
  {
    id: '8',
    firstName: 'مریم',
    lastName: 'حسینی',
    status: 'inactive',
    position: 'customer',
    avatar: 'https://i.pravatar.cc/150?img=8',
  },
  {
    id: '9',
    firstName: 'امیر',
    lastName: 'صادقی',
    status: 'active',
    position: 'employee',
    avatar: 'https://i.pravatar.cc/150?img=9',
  },
  {
    id: '10',
    firstName: 'نرگس',
    lastName: 'شریفی',
    status: 'inactive',
    position: 'customer',
    avatar: 'https://i.pravatar.cc/150?img=10',
  },
];

// interface Project {
//   id: string;
//   title: string;
//   status: 'active' | 'inactive';
//   budget: number;
// }

// const data: Project[] = [
//   {
//     id: '1',
//     title: 'Project Alpha',
//     status: 'active',
//     budget: 50000,
//   },
//   {
//     id: '2',
//     title: 'Project Beta',
//     status: 'inactive',
//     budget: 75000,
//   },
//   {
//     id: '3',
//     title: 'Project Gamma',
//     status: 'active',
//     budget: 25000,
//   }
// ];

export function DataTableDemo() {
  const [title] = useQueryState('title', parseAsString.withDefault(''));
  const [status] = useQueryState(
    'status',
    parseAsArrayOf(parseAsString).withDefault([])
  );

  // Ideally we would filter the data server-side, but for the sake of this example, we'll filter the data client-side
  const filteredData = React.useMemo(() => {
    return data.filter(user => {
      const matchesTitle =
        title === '' ||
        user.firstName.toLowerCase().includes(title.toLowerCase());
      const matchesStatus = status.length === 0 || status.includes(user.status);

      return matchesTitle && matchesStatus;
    });
  }, [title, status]);

  const columns = React.useMemo<ColumnDef<User>[]>(
    () => [
      {
        id: 'select',
        header: ({ table }) => (
          <Checkbox
            className="mx-2 flex justify-start"
            checked={
              table.getIsAllPageRowsSelected() ||
              (table.getIsSomePageRowsSelected() && 'indeterminate')
            }
            onCheckedChange={value => table.toggleAllPageRowsSelected(!!value)}
            aria-label="Select all"
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            className="mx-2 flex justify-start"
            checked={row.getIsSelected()}
            onCheckedChange={value => row.toggleSelected(!!value)}
            aria-label="Select row"
          />
        ),
        size: 32,
        enableSorting: false,
        enableHiding: false,
      },
      {
        id: 'firstName',
        accessorKey: 'firstName',
        header: ({ column }: { column: Column<User, unknown> }) => (
          <DataTableColumnHeader column={column} title="نام" />
        ),
        cell: ({ cell }) => {
          // const avatar = cell.getValue<User['avatar']>();
          const avatar = cell.row.original.avatar;
          const avatarFallback = cell.row.original.firstName[0];

          return (
            <div className="flex items-center gap-x-2">
              <Avatar>
                <AvatarImage src={avatar} alt={`پروفایلِ ${cell.getValue<User['firstName']>()}`} />
                <AvatarFallback>{avatarFallback}</AvatarFallback>
              </Avatar>
              {cell.getValue<User['firstName']>()}
            </div>
          );
        },
        meta: {
          label: 'نام',
          placeholder: 'Search titles...',
          variant: 'text',
          icon: Text,
        },
        enableColumnFilter: true,
      },
      {
        id: 'lastName',
        accessorKey: 'lastName',
        header: ({ column }: { column: Column<User, unknown> }) => (
          <DataTableColumnHeader column={column} title="نام خانوادگی" />
        ),
        cell: ({ cell }) => <div>{cell.getValue<User['lastName']>()}</div>,
        meta: {
          label: 'نام خانوادگی',
          placeholder: 'Search titles...',
          variant: 'text',
          icon: Text,
        },
        enableColumnFilter: false,
      },
      {
        id: 'status',
        accessorKey: 'status',
        header: ({ column }: { column: Column<User, unknown> }) => (
          <DataTableColumnHeader column={column} title="Status" />
        ),
        cell: ({ cell }) => {
          const status = cell.getValue<User['status']>();
          const Icon = status === 'active' ? CheckCircle2 : XCircle;
          // console.log(status)
          return (
            <Badge variant="outline" className="capitalize">
              <Icon />
              {status}
            </Badge>
          );
        },
        meta: {
          label: 'Status',
          variant: 'multiSelect',
          options: [
            { label: 'Active', value: 'active', icon: CheckCircle },
            { label: 'Inactive', value: 'inactive', icon: XCircle },
          ],
        },
        enableColumnFilter: true,
      },
      // {
      //   id: 'budget',
      //   accessorKey: 'budget',
      //   header: ({ column }: { column: Column<User, unknown> }) => (
      //     <DataTableColumnHeader column={column} title="Budget" />
      //   ),
      //   cell: ({ cell }) => {
      //     const budget = cell.getValue<User['budget']>();

      //     return (
      //       <div className="flex items-center gap-1">
      //         <DollarSign className="size-4" />
      //         {budget.toLocaleString()}
      //       </div>
      //     );
      //   },
      // },
      {
        id: 'actions',
        cell: function Cell() {
          return (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MoreHorizontal className="h-4 w-4" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuItem variant="destructive">
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          );
        },
        size: 32,
      },
    ],
    []
  );

  const { table } = useDataTable({
    data: filteredData,
    columns,
    pageCount: 1,
    initialState: {
      sorting: [{ id: 'id', desc: true }],
      columnPinning: { right: ['actions'] },
    },
    getRowId: row => row.id,
  });

  return (
    <div className="data-table-container">
      <DataTable table={table}>
        <DataTableToolbar table={table} />
      </DataTable>
    </div>
  );
}
