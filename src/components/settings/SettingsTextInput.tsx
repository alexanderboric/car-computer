import {
	Group,
	UnstyledButton,
	Text,
	useMantineTheme,
	TextInput,
	Button,
	Title,
	Stack,
} from "@mantine/core";
import { useModals } from "@mantine/modals";
import * as React from "react";
import { useState } from "react";
import { MdChevronRight } from "react-icons/md";
import OnScreenKeyboard from "../OnScreenKeyboard";

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
	const inputField = React.useRef<HTMLInputElement>(null);


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
						centered: true,
						children: (
							<Stack spacing="xl">
								<TextInput
									ref={inputField}
									size="xl"
									placeholder={text}
									value={input}
									onChange={(
										event: any
									) => setInput(event.currentTarget.value)}
									mt="xl"
								/>
								<Button
									mt="xl"
									fullWidth
									onClick={() => {
										modals.closeModal(id);
										onChange(input);
									}}
									size="xl"
								>
									Save
								</Button>
								<OnScreenKeyboard
									text={text}
									onChange={(newText) => {
										/* setInput(newText); */
                                        inputField.current.value = newText;
                                        inputField.current.dispatchEvent(new Event('input', {bubbles: true}));
                                        // todo: make event working
									}}
								/>
							</Stack>
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
							{text}
						</Text>
						<MdChevronRight size={20} />
					</Group>
				</Group>
			</UnstyledButton>
		</>
	);
}
