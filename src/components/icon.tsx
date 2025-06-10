import { Icon } from "@iconify/react";
import { IconType } from "@/app/lib/definitions";


export function Icons({ name, width = 24, height = 24 }: IconType) {
  // const name: string = props.name;

  // const { width = 24, height = 24 } = props;

  const map: { [key: string] : string }  = {
    profile: "mdi:account-circle-outline",
    instagram: "mdi:instagram",
    twitter: "",
    email: "",
    share: "mdi:share-variant-outline"
  }

  if (map[name]) {
    return <Icon icon={map[name]} width={width} height={height} />
  }
}