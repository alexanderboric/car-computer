import { Group, UnstyledButton, Text, useMantineTheme } from "@mantine/core";
import * as React from "react";

export default function SettingsButton({
	label,
    onClick
}: {
	label: string;
    onClick: () => void;
}) {

	const theme = useMantineTheme();

	return (
		<>
			<UnstyledButton pl="xs" pr="xs" style={{ borderRadius: theme.radius.md }} onClick={() => onClick()}>
				<Group position="apart" noWrap mb={3} mt={3}>
					<Group>
						<Text size="xl" style={{ color: theme.colors.blue[6] }}>{label}</Text>
					</Group>
				</Group>
			</UnstyledButton>
		</>
	);
}
