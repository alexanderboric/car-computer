import {
	Group,
	UnstyledButton,
	Text,
	useMantineTheme,
} from "@mantine/core";
import * as React from "react";
import { MdChevronRight } from "react-icons/md";

export default function SettingsStatusButton({
	label,
	status,
	onClick,
}: {
	label: string;
	status: string;
	onClick: () => void;
}) {
	const theme = useMantineTheme();
	return (
		<>
			<UnstyledButton
				pl="xs"
				pr="xs"
				style={{ borderRadius: theme.radius.md }}
				onClick={onClick}
			>
				<Group position="apart" noWrap mb={3} mt={3}>
					<Group>
						<Text size="xl">{label}</Text>
					</Group>
					<Group spacing={5}>
						<Text weight={550} size="xl">
							{status}
						</Text>
						<MdChevronRight size={20} />
					</Group>
				</Group>
			</UnstyledButton>
		</>
	);
}
