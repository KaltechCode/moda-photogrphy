"use client";
import { icons } from "@/utils/icon";
import { IconBaseProps, IconType } from "react-icons/lib";
import { IconsName } from "@/types";

interface Prop extends IconBaseProps {
  name: IconsName;
}
export function Icon({ name, ...props }: Prop) {
  const Component: IconType = icons[name];

  return <Component {...props} />;
}
