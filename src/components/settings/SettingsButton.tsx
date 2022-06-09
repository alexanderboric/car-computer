import { Group, UnstyledButton, Text } from "@mantine/core";
import * as React from "react";
import { MdChevronRight } from "react-icons/md";
import { Link } from "react-router-dom";

export default function SettingsButton({ pageLink, label }: { pageLink: string, label: string }) {
	return (
		<>
			<UnstyledButton
				sx={(theme) => ({
					fontWeight: 500,
				})}
                
				component={Link}
				to={"/settings/" + pageLink}
			>
				<Group position="apart">
					<Text size={"xl"}>{label}</Text>
					<MdChevronRight />
				</Group>
			</UnstyledButton>
		</>
	);
}
