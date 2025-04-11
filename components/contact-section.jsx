import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";

export default function ContactSection() {
  return (
    <section id="contact" className="pb-24">
      <div className="mx-auto max-w-3xl px-8 lg:px-0">
        <h1 className="text-center text-4xl font-semibold lg:text-5xl">
          Contact us
        </h1>
        <p className="mt-4 text-center">Anything you'd like to tell us?</p>

        <Card className="mx-auto mt-12 max-w-lg p-8 shadow-md sm:p-16">
          <div>
            <h2 className="text-xl font-semibold">Let's get in touch!</h2>
            <p className="mt-4 text-sm">
              We’re eager to learn more about how you plan to use our
              application.
            </p>
          </div>

          <form
            action=""
            className="**:[&>label]:block mt-12 space-y-6 *:space-y-3"
          >
            <div>
              <Label htmlFor="name">Name</Label>
              <Input type="text" id="name" required />
            </div>

            <div>
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" required />
            </div>

            <div>
              <Label htmlFor="msg">Message</Label>
              <Textarea id="msg" rows={3} />
            </div>

            <Button>Submit</Button>
          </form>
        </Card>
      </div>
    </section>
  );
}
