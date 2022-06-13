import { Group, UnstyledButton, Text, useMantineTheme, Switch } from "@mantine/core";
import * as React from "react";

export default function SettingsSwitch({
	label,
    checked,
	disabled,
    onSwitch
}: {
	label: string;
    checked?: boolean;
	disabled?: boolean;
    onSwitch: (state: boolean) => void;
}) {

	const theme = useMantineTheme();

	return (
		<>
			<UnstyledButton pl="xs" pr="xs" style={{ borderRadius: theme.radius.md }}>
				<Group position="apart" noWrap mb={3} mt={3}>
					<Group>
						<Text size="xl">{label}</Text>
					</Group>
					<Switch size="md" checked={checked} disabled={disabled} onChange={(event:InputEvent) => onSwitch((event.currentTarget as HTMLInputElement).checked)} />
				</Group>
			</UnstyledButton>
		</>
	);
}
