import { Button, Group, Stack } from "@mantine/core";
import * as React from "react";
import { MdBackspace } from "react-icons/md";

export default function OnScreenKeyboard({
	text,
	onChange,
}: {
	text: string;
	onChange: (value: string) => void;
}) {
	const [input, setInput] = React.useState(text);
	const [shift, setShift] = React.useState(false);
	const [symbols, setSymbols] = React.useState(false);

	React.useEffect(() => {
		onChange(input);
	}, [input, onChange]);

	const keyPress = (key: string) => {};

	const keyButton = (
		lowerCase?: string,
		upperCase?: string,
		key?: string,
		element?: JSX.Element
	) => {
		return (
			<Button
				variant="default"
				onClick={() => {
					if (key) {
						keyPress(key);
					} else {
						keyPress(shift ? upperCase : lowerCase);
					}
				}}
			>
				{key ? element : shift ? upperCase : lowerCase}
			</Button>
		);
	};

	const keyRow = (<>
        <Group>
            {keyButton("1", "1")}
            {keyButton("2", "2")}
            {keyButton("3", "3")}
            {keyButton("4", "4")}
            {keyButton("5", "5")}
            {keyButton("6", "6")}
            {keyButton("7", "7")}
            {keyButton("8", "8")}
            {keyButton("9", "9")}
            {keyButton("0", "0")}

            {keyButton(undefined, undefined, "backspace", <MdBackspace />)}
        </Group>
    </>);
	const symbolRow = (<>
    </>);

	return (
		<>
			<Stack>{symbols ? symbolRow : keyRow}</Stack>
		</>
	);
}
