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
	disabled,
    onChange
}: {
    label: string;
	min: number;
	max: number;
    value: number;
	disabled?: boolean;
	onChange: (val: number) => void;
}) {
	const theme = useMantineTheme();
    const [input, setInput] = React.useState(value);

    React.useEffect(() => {
        onChange(input);
    }, [input, onChange]);

	return (
		<>
			<UnstyledButton pl="xs" pr="xs" style={{ borderRadius: theme.radius.md }}>
				<Group position="apart" noWrap mb={3} mt={3}>
					<Stack style={{width: "100%"}}>
						<Group>
							<Text size="xl">{label}</Text>
						</Group>
                        <Group grow>
                        <Slider size="lg" min={min} disabled={disabled} max={max} value={input} onChange={setInput}/>
                        </Group>
                    </Stack>
				</Group>
			</UnstyledButton>
		</>
	);
}
