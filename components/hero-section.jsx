import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <>
      <main className="overflow-x-hidden">
        <section>
          <div className="pb-24 pt-32 lg:pt-44">
            <div className="relative mx-auto flex max-w-6xl flex-col px-6 lg:block">
              <div className="mx-auto max-w-lg text-center lg:ml-0 lg:w-1/2 lg:text-left">
                <h1 className="mt-8 max-w-2xl text-balance text-5xl font-medium md:text-6xl lg:mt-16 xl:text-7xl">
                  Book 10x Faster with ML
                </h1>
                <p className="mt-8 max-w-2xl text-pretty text-lg">
                  Turn your coaching into a business — schedule sessions,
                  receive payments, and share a branded booking page in minutes
                  with MentorLink.
                </p>

                <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                  <Button asChild size="lg" className="px-5 text-base">
                    <Link href="/sign-in">
                      <span className="text-nowrap">Start Now</span>
                    </Link>
                  </Button>
                </div>
              </div>
              <Image
                className="-z-10 order-first ml-auto h-full w-full object-cover sm:h-96 lg:absolute lg:inset-0 lg:-top-25 lg:order-last lg:h-max lg:w-2/3 lg:object-contain dark:mix-blend-lighten dark:invert-0 custom-gradient rounded-md"
                src="/hero-image.webp"
                alt="Online mentor"
                height="2250"
                width="1500"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
