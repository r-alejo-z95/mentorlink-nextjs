import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";

export default function Pricing() {
  return (
    <div id="pricing" className="relative pb-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">
            Start your online mentoring business today
          </h2>
        </div>
        <div className="mt-8 md:mt-20">
          <div className="bg-card relative rounded-3xl border shadow-2xl shadow-zinc-950/5">
            <div className="grid items-center gap-12 divide-y p-12 md:grid-cols-2 md:divide-x md:divide-y-0">
              <div className="pb-12 text-center md:pb-0 md:pr-12">
                <h3 className="text-2xl font-semibold">Monthly Subscription</h3>
                <p className="mt-2 text-lg">Placeholder text</p>
                <span className="mb-6 mt-12 inline-block text-6xl font-bold">
                  <span className="text-4xl">$</span>15
                </span>

                <div className="flex justify-center">
                  <Button asChild size="lg">
                    <Link href="#">Get started</Link>
                  </Button>
                </div>

                <p className="text-muted-foreground mt-12 text-sm">
                  7-day free trial
                </p>
              </div>
              <div className="relative">
                <ul role="list" className="space-y-4">
                  {[
                    "First premium advantage",
                    "Second advantage weekly",
                    "Third advantage donate to project",
                    "Fourth, access to all components weekly",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="size-3" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-muted-foreground mt-6 text-sm">
                  30-day money back guarantee.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
