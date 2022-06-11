import {
	Group,
	UnstyledButton,
	Text,
	useMantineTheme,
	Title,
	CheckboxGroup,
    Checkbox,
} from "@mantine/core";
import { useModals } from "@mantine/modals";
import * as React from "react";
import { useState } from "react";
import { MdChevronRight } from "react-icons/md";

export default function SettingsMultiSelect({
	label,
	selected,
	values,
	onChange,
}: {
	label: string;
	selected: any[];
	values: { value: any; label: string | React.ReactNode }[];
	onChange: (value: any[]) => void;
}) {
	const theme = useMantineTheme();
	const modals = useModals();
	const [input, setInput] = useState(selected);

	return (
		<>
			<UnstyledButton
				pl="xs"
				pr="xs"
				style={{ borderRadius: theme.radius.md }}
				onClick={() => {
					modals.openModal({
						title: <Title>{label}</Title>,
						size: "xl",
						centered: false,
						children: <CheckboxGroup orientation="vertical" size="xl" value={input} onChange={setInput}>
                            {values.map(({ value:val, label:lab }) => <Checkbox value={val} label={lab} />)}
                        </CheckboxGroup>,
					});
				}}
			>
				<Group position="apart" noWrap mb={3} mt={3}>
					<Group>
						<Text size="xl">{label}</Text>
					</Group>
					<Group spacing={5}>
						<Text weight={550} size="xl">
							{input.map((v) => v.label).join(", ")}
						</Text>
						<MdChevronRight size={20} />
					</Group>
				</Group>
			</UnstyledButton>
		</>
	);
}
