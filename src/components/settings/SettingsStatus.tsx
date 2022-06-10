import {
	Group,
	UnstyledButton,
	Text,
	useMantineTheme,
	Switch,
    Loader,
} from "@mantine/core";
import * as React from "react";

export default function SettingsStatus({
	label,
	status,
    loading
}: {
	label: string;
    status: string;
    loading?: boolean;
}) {
	const theme = useMantineTheme();

	return (
		<>
			<UnstyledButton pl="xs" pr="xs" style={{ borderRadius: theme.radius.md }}>
				<Group position="apart" noWrap mb={3} mt={3}>
					<Group>
						<Text size="xl">{label}</Text>
					</Group>
					<Group>
                        {loading ? <Loader size={"sm"} /> : <Text weight={550} size="xl">{status}</Text>}
					</Group>
				</Group>
			</UnstyledButton>
		</>
	);
}
