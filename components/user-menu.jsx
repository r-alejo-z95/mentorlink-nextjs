"use client";

import { UserButton } from "@clerk/nextjs";
import { CalendarRange } from "lucide-react";

export function UserMenu() {
  return (
    <UserButton
      appearance={{
        elements: {
          avatarBox: "!size-10",
        },
      }}
    >
      <UserButton.MenuItems>
        <UserButton.Link
          label="My Events"
          labelIcon={<CalendarRange size={15} />}
          href="/events"
        />
        <UserButton.Action label="manageAccount" />
      </UserButton.MenuItems>
    </UserButton>
  );
}
