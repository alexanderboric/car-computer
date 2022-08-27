import {
	Group,
	UnstyledButton,
	Text,
	useMantineTheme,
    useMantineColorScheme,
} from "@mantine/core";
import * as React from "react";
import { MdChevronRight } from "react-icons/md";
import { Link } from "react-router-dom";

export default function SettingsStatusPageButton({
	label,
	status,
	pageLink,
    disabled,
    disabledAlternative,
	setCurrentPage,
}: {
	label: string;
	status: string;
	pageLink: string;
    disabled?: boolean;
    disabledAlternative?: string;
	setCurrentPage: (pageLink: string) => void;
}) {
	const theme = useMantineTheme();
    const { colorScheme } = useMantineColorScheme();
	return (
		<>
			<UnstyledButton
				pl="xs"
				pr="xs"
				style={{ borderRadius: theme.radius.md }}
				onClick={() => {
					if (!disabled) {
						setCurrentPage(pageLink);
					}
				}}
			>
				<Group position="apart" noWrap mb={3} mt={3}>
					<Group>
						<Text size="xl">{label}</Text>
					</Group>
					<Group spacing={5}>
						<Text weight={550} size="xl" color={disabled && colorScheme === "dark" ? theme.colors.dark[3] : theme.colors.gray[4]}>
							{(disabled && disabledAlternative) ? disabledAlternative : status}
						</Text>
						<MdChevronRight size={20} color={disabled && colorScheme === "dark" ? theme.colors.dark[3] : theme.colors.gray[4]} />
					</Group>
				</Group>
			</UnstyledButton>
		</>
	);
}
