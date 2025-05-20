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

type ApexPolarAreaProps = {
  title?: string;
  description?: string;
  options?: ApexOptions;
  series: number[];
  height?: number | string;
};

const defaultOptions: ApexOptions = {
  chart: {
    fontFamily: 'Outfit, sans-serif',
    type: 'polarArea',
    toolbar: {
      show: true,
    },
  },
  labels: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد'],
  theme: {
    palette: 'palette2',
  },
  fill: {
    opacity: 0.85,
  },
  stroke: {
    width: 1,
    colors: ['#fff'],
  },
  yaxis: {
    show: false,
  },
  legend: {
    show: true,
    position: 'bottom',
    fontFamily: 'var(--font-vazir)',
    fontSize: '14px',
    labels: {
      colors: 'var(--text-primary)',
    },
  },
  plotOptions: {
    polarArea: {
      rings: {
        strokeWidth: 0,
      },
      spokes: {
        strokeWidth: 1,
      },
    },
  },
  tooltip: {
    theme: 'dark',
    style: {
      fontSize: '14px',
    },
  },
};

export default function ApexPolarArea({
  title = 'نمودار قطبی',
  description,
  options = {},
  series,
  height = 480,
}: ApexPolarAreaProps) {
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
          type="polarArea"
          width="100%"
          height={height}
        />
      </CardContent>
    </Card>
  );
}
