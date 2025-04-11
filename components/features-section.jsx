import {
  Cpu,
  Fingerprint,
  Pencil,
  Settings2,
  Sparkles,
  Zap,
} from "lucide-react";

export default function Features() {
  return (
    <section id="features" className="pb-24">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
          <h2 className="text-balance text-4xl font-medium lg:text-5xl">
            Your mentoring business – all in one platform!
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sequi,
            dignissimos sapiente veritatis consequatur nulla nihil nesciunt
            tempore eveniet dolores eaque reiciendis corrupti veniam. Odio quod
            voluptate at eius neque?
          </p>
        </div>

        <div className="relative mx-auto grid max-w-4xl divide-x divide-y border *:p-12 sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Zap className="size-4" />
              <h3 className="text-sm font-medium">Schedule</h3>
            </div>
            <p className="text-sm">Schedule</p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Cpu className="size-4" />
              <h3 className="text-sm font-medium">Payments</h3>
            </div>
            <p className="text-sm">Payments</p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Fingerprint className="size-4" />

              <h3 className="text-sm font-medium">Email notifications</h3>
            </div>
            <p className="text-sm">Email notifications </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Pencil className="size-4" />

              <h3 className="text-sm font-medium">Calendar sync</h3>
            </div>
            <p className="text-sm">Calendar sync </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Settings2 className="size-4" />

              <h3 className="text-sm font-medium">In-platform video meeting</h3>
            </div>
            <p className="text-sm">In-platform video meeting </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Sparkles className="size-4" />

              <h3 className="text-sm font-medium">Client management</h3>
            </div>
            <p className="text-sm">Client management </p>
          </div>
        </div>
      </div>
    </section>
  );
}
