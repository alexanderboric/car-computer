import { ActionIcon } from "@mantine/core";
import * as React from "react";

export default function ActionlessIcon({icon, color, ...props }: {icon: React.ReactNode, color: string}) {
	return <ActionIcon color={color} variant={"filled"} {...props}>{icon}</ActionIcon>;
}
