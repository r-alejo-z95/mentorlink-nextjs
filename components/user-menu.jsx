"use client";

import { UserButton } from "@clerk/nextjs";
import { CalendarRange } from "lucide-react";

export function UserMenu() {
  return (
    <UserButton
      appearance={{
        elements: {
          avatarBox: "!w-10 !h-10",
        },
      }}
    >
      <UserButton.MenuItems>
        <UserButton.Link
          label="My Events"
          labelIcon={<CalendarRange size={15} />}
          href="/events"
        />
      </UserButton.MenuItems>
    </UserButton>
  );
}
