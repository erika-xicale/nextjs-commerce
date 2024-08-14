import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';

export default function DesktopNavbar() {
  return (
    <>
      <nav className="bg-[#ffffff]">

        <div className="grid grid-cols-5 content-center items-center pb-3 uppercase">
          <div>
            <Link
              href="/"
              aria-label="Go back home"
              className="mr-2 flex w-auto items-center justify-center lg:mr-6"
            >
              <div className="relative h-[100px] w-full">
                <Image
                  className="object-contain"
                  src={'/Logo Karl Karla_Escritorio.png'}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </Link>
          </div>
          <div className="grid grid-cols-5 content-center items-center pb-3 uppercase">
            <Link
              href="/"
              aria-label="Go back home"
              className="mr-2 flex w-auto items-center justify-center lg:mr-6"
            >
              <div className="relative h-[100px] w-full">
                <Image
                  className="object-contain"
                  src={'/Menu.png'}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </Link>



          </div>


          <div className="md:col-span-2">
            <div className="flex flex-row items-center space-x-3">


              <div className="flex w-2/4 justify-end space-x-3 pr-10">
                <Link href="">
                  <div className="relative h-[25px] w-[25px]">
                    <Suspense>
                      <Image
                        className="object-cover"
                        src={'/Buscar.png'}
                        alt=""
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </Suspense>
                  </div>
                </Link>
                <Link href="">
                  <div className="relative h-[25px] w-[25px]">
                    <Suspense>
                      <Image
                        className="object-cover"
                        src={'/Perfil.png'}
                        alt=""
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </Suspense>
                  </div>
                </Link>
                <Link href="">
                  <div className="relative h-[25px] w-[25px]">
                    <Suspense>
                      <Image
                        className="object-cover"
                        src={'/Carrito.png'}
                        alt=""
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </Suspense>
                  </div>
                </Link>

              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
