import {
  IconBell,
  IconBucket,
  IconBuildingCommunity,
  IconDots,
  IconHome,
  IconLivePhoto,
  IconMapPin,
  IconMessage,
  IconUser,
} from "@tabler/icons-react";

export const NavList = [
  {
    href: "/feed",
    title: "feed",
    icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    href: "/destinations",
    title: "destinations",
    icon: <IconMapPin className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    href: "/bucketList",
    title: "my bucketlist",
    icon: <IconBucket className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    href: "/visited",
    title: "Voyage Vault",
    icon: (
      <IconLivePhoto className="h-4 w-4 text-neutral-500 dark:text-white" />
    ),
  },
];

export const FeedNavList = [
  {
    href: "/feed",
    title: "feed",
    icon: <IconHome size={28} className=" text-neutral-500 dark:text-white" />,
  },
  {
    href: "/notifications",
    title: "Notifications",
    icon: <IconBell size={28} className=" text-neutral-500 dark:text-white" />,
  },
  {
    href: "/messages",
    title: "Messages",
    icon: <IconMessage size={28} className=" text-neutral-500 dark:text-white" />,
  },
  {
    href: "/communities",
    title: "Communities",
    icon: (
      <IconBuildingCommunity size={28} className=" text-neutral-500 dark:text-white" />
    ),
  },
  {
    href: "/profile",
    title: "profile",
    icon: <IconUser size={28} className=" text-neutral-500 dark:text-white" />,
  },
  {
    href: "/more",
    title: "more",
    icon: <IconDots size={28} className=" text-neutral-500 dark:text-white" />,
  },
];
