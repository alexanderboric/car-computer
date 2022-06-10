import {
	Text,
	Group,
	Stack,
	Title,
	UnstyledButton,
	useMantineTheme,
} from "@mantine/core";
import * as React from "react";
import { MdChevronLeft } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function SettingsPage({
	title,
	children,
}: {
	title: string;
	children: React.ReactNode;
}) {
	const theme = useMantineTheme();
    const navigate = useNavigate();

	return (
		<>
			<Stack ml={"xl"} mr={"xl"}>
				<Group mt={"md"}>
					<UnstyledButton onClick={() => navigate("../")}>
						<Group noWrap spacing={"xs"}>
							<MdChevronLeft
								style={{ color: theme.colors.blue[6] }}
								size={20}
							/>
							<Text style={{ color: theme.colors.blue[6] }}>Back</Text>
						</Group>
					</UnstyledButton>
				</Group>
				<Title order={2}>{title}</Title>
				{children}
			</Stack>
		</>
	);
}
