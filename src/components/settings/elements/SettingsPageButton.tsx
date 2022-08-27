import { Group, UnstyledButton, Text, useMantineTheme, useMantineColorScheme } from "@mantine/core";
import * as React from "react";
import { MdChevronRight } from "react-icons/md";

export default function SettingsPageButton({
	pageLink,
	label,
    icon,
	currentPage,
	setCurrentPage
}: {
	pageLink: string;
	label: string;
    icon?: any;
	currentPage: string;
	setCurrentPage: (pageLink: string) => void;
}) {

	const theme = useMantineTheme();
	const { colorScheme } = useMantineColorScheme();

	return (
		<>
			<UnstyledButton pl="xs" pr="xs" style={{backgroundColor: (currentPage === pageLink && (colorScheme === "dark" ? theme.colors.gray[8] : theme.colors.gray[3])), borderRadius: theme.radius.md }} onClick={() => setCurrentPage(pageLink)}>
				<Group position="apart" noWrap mb={3} mt={3}>
					<Group>
                        {icon}
						<Text size="xl">{label}</Text>
					</Group>
					<MdChevronRight size={20} />
				</Group>
			</UnstyledButton>
		</>
	);
}
