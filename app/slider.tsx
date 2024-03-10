'use client';

import Image from 'next/image';
import { Suspense } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function Slider() {
  return (
    <>
      <div className="hidden md:block">
        <Suspense
          fallback={
            <div className="flex h-36 w-full animate-pulse bg-gray-200 md:h-64 lg:h-96"></div>
          }
        >
          <Carousel
            showDots={true}
            responsive={responsive}
            infinite={true}
            removeArrowOnDeviceType={['desktop', 'tablet', 'mobile']}
            transitionDuration={2000}
            ssr={true}
            autoPlay={true}
          >
            <div className="md:h-64 lg:h-96">
              <Image src={'/banner.png'} alt="" fill={true} />
            </div>
            <div className="md:h-64 lg:h-96">
              <Image src={'/envioGratis.png'} alt="" fill={true} />
            </div>
          </Carousel>
        </Suspense>
      </div>
      <div className="md:hidden">
        <Suspense
          fallback={
            <div className="flex h-36 w-full animate-pulse bg-gray-200 md:h-64 lg:h-96"></div>
          }
        >
          <Carousel
            showDots={true}
            responsive={responsive}
            infinite={true}
            removeArrowOnDeviceType={['desktop', 'tablet', 'mobile']}
            transitionDuration={2000}
            ssr={true}
            autoPlay={true}
          >
            <div className="h-40 md:hidden">
              <Image src={'/bannerMovil.png'} alt="" fill={true} />
            </div>
            <div className="h-40 md:hidden">
              <Image src={'/envioGratisMovil.png'} alt="" fill={true} />
            </div>
          </Carousel>
        </Suspense>
      </div>
    </>
  );
}
