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

type ApexLineProps = {
  title?: string;
  description?: string;
  options?: ApexOptions;
  series: ApexAxisChartSeries;
  height?: number | string;
  type?: 'line' | 'area';
};

const defaultOptions: ApexOptions = {
  chart: {
    fontFamily: 'Outfit, sans-serif',
    type: 'line',
    toolbar: {
      show: true,
    },
  },
  theme: {
    palette: 'palette1',
  },
  stroke: {
    curve: 'smooth',
    width: 3,
  },
  colors: [
    'var(--color-chart-1)',
    'var(--color-chart-2)',
    'var(--color-chart-3)',
    'var(--color-chart-4)',
    'var(--color-chart-5)',
  ],
  markers: {
    size: 5,
    strokeWidth: 0,
    hover: {
      sizeOffset: 3,
    },
  },
  dataLabels: {
    enabled: false,
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
    type: 'gradient',
    colors: [
      '#e23670', '#2662d9'
    ],
    // colors: [function({ value, seriesIndex, w }) {
    //   if(value < 55) {
    //       return '#7E36AF'
    //   } else if (value >= 55 && value < 80) {
    //       return '#164666'
    //   } else {
    //       return '#D9534F'
    //   }
    // }],
    gradient: {
      // shadeIntensity: 1,
      // opacityFrom: 0.7,
      // opacityTo: 0.9,
      // stops: [0, 90, 100],
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
  tooltip: {
    x: {
      show: true,
      format: 'dd MMM',
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

export default function ApexLine({
  title = 'نمودار خطی',
  description,
  options = {},
  type = 'line',
  series,
  height = 480,
}: ApexLineProps) {
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
      <CardContent className="overflow-hidden">
        <ReactApexChart
          options={mergedOptions}
          series={series}
          type={type}
          width="100%"
          height={height}
        />
      </CardContent>
    </Card>
  );
}
