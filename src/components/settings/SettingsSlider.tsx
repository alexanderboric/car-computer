import {
	Group,
	UnstyledButton,
	Text,
	useMantineTheme,
	Stack,
    Slider,
} from "@mantine/core";
import * as React from "react";

export default function SettingsSlider({
    label,
	min,
	max,
	value,
    onChange
}: {
    label: string;
	min: number;
	max: number;
    value: number;
	onChange: (val: number) => void;
}) {
	const theme = useMantineTheme();

	return (
		<>
			<UnstyledButton pl="xs" pr="xs" style={{ borderRadius: theme.radius.md }}>
				<Group position="apart" noWrap mb={3} mt={3}>
					<Stack style={{width: "100%"}}>
						<Group>
							<Text size="xl">{label}</Text>
						</Group>
                        <Group grow>
                        <Slider size="xl" min={min} max={max} defaultValue={value} onChange={(event:any) => onChange(event.currentTarget.value)}/>
                        </Group>
                    </Stack>
				</Group>
			</UnstyledButton>
		</>
	);
}
