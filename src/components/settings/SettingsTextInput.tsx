import {
	Group,
	UnstyledButton,
	Text,
	useMantineTheme,
	TextInput,
	Button,
} from "@mantine/core";
import { useModals } from "@mantine/modals";
import * as React from "react";
import { useState } from "react";
import { MdChevronRight } from "react-icons/md";

export default function SettingsTextInput({
	label,
	text,
	onChange,
}: {
	label: string;
	text: string;
	onChange: (text: string) => void;
}) {
	const theme = useMantineTheme();
	const modals = useModals();
    const [input, setInput] = useState(text);

	return (
		<>
			<UnstyledButton
				pl="xs"
				pr="xs"
				style={{ borderRadius: theme.radius.md }}
				onClick={() => {
					const id = modals.openModal({
						title: label,
						children: (
							<>
								<TextInput placeholder={input} data-autofocus onChange={setInput} />
								<Button
									fullWidth
									onClick={() => {
										modals.closeModal(id);
                                        onChange(input);
									}}
									mt="md"
								>
									Save
								</Button>
							</>
						),
					});
				}}
			>
				<Group position="apart" noWrap mb={3} mt={3}>
					<Group>
						<Text size="xl">{label}</Text>
					</Group>
					<Group>
						<Text weight={550} size="xl">
							{text}
						</Text>
                        <MdChevronRight />
					</Group>
				</Group>
			</UnstyledButton>
		</>
	);
}
