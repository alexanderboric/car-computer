import {
	Group,
	UnstyledButton,
	Text,
	useMantineTheme,
	Title,
	SegmentedControl,
} from "@mantine/core";
import { useModals } from "@mantine/modals";
import * as React from "react";
import { useState } from "react";
import { MdChevronRight } from "react-icons/md";

export default function SettingsSelect({
	label,
	value,
	values,
	onChange,
}: {
	label: string;
	value: any;
	values: { value: any; label: string | React.ReactNode }[];
	onChange: (text: string) => void;
}) {
	const theme = useMantineTheme();
	const modals = useModals();
	const [input, setInput] = useState(value);

	return (
		<>
			<UnstyledButton
				pl="xs"
				pr="xs"
				style={{ borderRadius: theme.radius.md }}
				onClick={() => {
					const id = modals.openModal({
						title: <Title>{label}</Title>,
						size: "xl",
						centered: false,
						children: (
							<SegmentedControl
								orientation="vertical"
								size="xl"
								fullWidth
								value={input}
								data={values}
								onChange={(val: string) => {
									setInput(val);
									onChange(val);
									modals.closeModal(id);
								}}
							/>
						),
					});
				}}
			>
				<Group position="apart" noWrap mb={3} mt={3}>
					<Group>
						<Text size="xl">{label}</Text>
					</Group>
					<Group spacing={5}>
						<Text weight={550} size="xl">
							{values.find((v) => v.value === input)?.label}
						</Text>
						<MdChevronRight size={20} />
					</Group>
				</Group>
			</UnstyledButton>
		</>
	);
}
