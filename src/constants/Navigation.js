import {
  IconBucket,
  IconHome,
  IconLivePhoto,
  IconMapPin,
} from "@tabler/icons-react";

export const NavList = [
  {
    href: "/",
    title: "feed",
    icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    href: "/destination",
    title: "destination",
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
