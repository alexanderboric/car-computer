import { Divider, Stack, Title, Text } from "@mantine/core";
import * as React from "react";

export default function notFound() {
	return (
		<Stack>
			<Title mt="xl">Error</Title>
			<Divider variant="dotted" />
            <Text weight={600}>The requested App could not be found or opened.</Text>
		</Stack>
	);
}
