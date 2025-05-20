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

type ApexBarProps = {
  title?: string;
  description?: string;
  options?: ApexOptions;
  series: ApexAxisChartSeries;
  height?: number | string;
};

const defaultOptions: ApexOptions = {
  colors: [
    'var(--color-chart-1)',
    'var(--color-chart-2)',
    'var(--color-chart-3)',
    'var(--color-chart-4)',
    'var(--color-chart-5)',
  ],
  chart: {
    fontFamily: 'Outfit, sans-serif',
    type: 'bar',
    toolbar: {
      show: true,
    },
  },
  theme: {
    palette: 'palette1',
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '100%',
      borderRadius: 5,
      borderRadiusApplication: 'end',
    },
  },
  dataLabels: {
    enabled: false,
    textAnchor: 'middle',
    distributed: false,
  },
  stroke: {
    show: true,
    width: 4,
    colors: ['transparent'],
  },
  xaxis: {
    categories: ['فروردین', 'اردیبهشت'],
    axisBorder: {
      show: true,
    },
    axisTicks: {
      show: false,
    },
  },
  legend: {
    show: true,
    position: 'top',
    horizontalAlign: 'left',
    fontFamily: 'var(--font-vazir)',
    fontSize: '14px',
    fontWeight: 400,
    labels: {
      colors: 'var(--text-primary)',
    },
  },
  yaxis: {
    title: {
      text: undefined,
    },
  },
  grid: {
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
  fill: {
    opacity: 1,
  },
  tooltip: {
    x: {
      show: true,
      format: 'dd MMM',
      formatter: undefined,
    },
    theme: 'dark',
    style: {
      fontSize: '14px',
    },
    onDatasetHover: {
      highlightDataSeries: true,
    },
  },
};

export default function ApexBar({
  title = 'نمودار نوار',
  description,
  options = {},
  series,
  height = 480,
}: ApexBarProps) {
  const mergedOptions = { ...defaultOptions, ...options };

  return (
    <Card className="bg-background/70 col-span-1">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent className="overflow-hidden">
        <ReactApexChart
          options={mergedOptions}
          series={series}
          type="bar"
          width="100%"
          height={height}
        />
      </CardContent>
    </Card>
  );
}
