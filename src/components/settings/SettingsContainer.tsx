import { Paper, Stack, Title, Text, Group } from "@mantine/core";
import * as React from "react";

export default function SettingsContainer({
	label,
	bottomText,
	children,
}: {
	label?: string;
	bottomText?: string;
	children: React.ReactNode;
}) {
	return (
		<>
			<Stack spacing={0}>
				<Group ml="sm">
					<Title order={5}>{label}</Title>
				</Group>
				<Paper
					withBorder
					sx={(theme) => ({
						backgroundColor:
							theme.colorScheme === "dark"
								? theme.colors.dark[6]
								: theme.colors.gray[1],
					})}
				>
					<Stack spacing={5}>{children}</Stack>
				</Paper>
				<Group ml="sm">
					<Text>{bottomText}</Text>
				</Group>
			</Stack>
		</>
	);
}
