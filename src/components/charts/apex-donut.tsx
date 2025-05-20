'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const ReactApexChart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});

type ApexDonutChartProps = {
  title?: string;
  description?: string;
  options?: ApexOptions;
  series: number[];
  height?: number | string;
};

const defaultOptions: ApexOptions = {
  chart: {
    type: 'donut',
    fontFamily: 'Outfit, sans-serif',
    toolbar: { show: true },
  },
  labels: ['دیجیتال', 'پوشاک', 'خانه و آشپزخانه', 'سرگرمی'],
  theme: {
    palette: 'palette2',
  },
  dataLabels: {
    enabled: true,
    style: {
      fontFamily: 'inherit',
    },
  },
  tooltip: {
    theme: 'dark',
    y: {
      formatter: (val: number) => `${val.toLocaleString()} تومان`,
    },
    style: {
      fontSize: '14px',
    },
  },
  legend: {
    position: 'bottom',
    fontFamily: 'var(--font-vazir)',
    fontSize: '14px',
    labels: {
      colors: 'var(--text-primary)',
    },
  },
  stroke: {
    show: false,
  },
  fill: {
    opacity: 0.9,
  },
  colors: ['#0EA5E9', '#10B981', '#F59E0B', '#EF4444'],
};

export default function ApexDonutChart({
  title = 'نمودار دونات',
  description,
  options = {},
  series,
  height = 400,
}: ApexDonutChartProps) {
  const mergedOptions: ApexOptions = {
    ...defaultOptions,
    ...options,
  };

  return (
    <Card className="bg-background/70 col-span-1">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>
        <ReactApexChart
          options={mergedOptions}
          series={series}
          type="donut"
          width="100%"
          height={height}
        />
      </CardContent>
    </Card>
  );
}
