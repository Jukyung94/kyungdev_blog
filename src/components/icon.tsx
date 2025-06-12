import { Icon } from "@iconify/react";
import { IconType } from "@/lib/definitions";


export function Icons({ name, width = 24, height = 24 }: IconType) {
  // const name: string = props.name;

  // const { width = 24, height = 24 } = props;

  const map: { [key: string] : string }  = {
    profile: "mdi:account-circle-outline",
    instagram: "mdi:instagram",
    twitter: "",
    email: "",
    share: "mdi:share-variant-outline",
    back: "mdi:arrow-back"
  }

  if (map[name]) {
    return <Icon icon={map[name]} width={width} height={height} />
  }
}