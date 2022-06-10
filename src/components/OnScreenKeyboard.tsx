import { Button, Group, Stack } from "@mantine/core";
import * as React from "react";
import { MdBackspace, MdOutlineEmojiEmotions, MdSubdirectoryArrowLeft } from "react-icons/md";
import { BsShift, BsShiftFill } from "react-icons/bs";

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
                size="sm"
				variant="default"
				onClick={() => {
					if (key) {
						keyPress(key);
					} else {
						keyPress(shift ? upperCase : lowerCase);
					}
				}}
			>
				{element ? element : shift ? upperCase : lowerCase}
			</Button>
		);
	};

	const keyRow = (
		<>
			<Group position="apart">
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
			<Group position="apart">
				{keyButton("q", "Q")}
				{keyButton("w", "W")}
				{keyButton("e", "E")}
				{keyButton("r", "R")}
				{keyButton("t", "T")}
				{keyButton("z", "Z")}
				{keyButton("u", "U")}
				{keyButton("i", "I")}
				{keyButton("o", "O")}
				{keyButton("p", "P")}
				{keyButton("ü", "Ü")}
			</Group>
			<Group position="apart">
				{keyButton("a", "A")}
				{keyButton("s", "S")}
				{keyButton("d", "D")}
				{keyButton("f", "F")}
				{keyButton("g", "G")}
				{keyButton("h", "H")}
				{keyButton("j", "J")}
				{keyButton("k", "K")}
				{keyButton("l", "L")}
				{keyButton("ö", "Ö")}
				{keyButton("ä", "Ä")}
			</Group>
			<Group position="apart">
				{keyButton(
					undefined,
					undefined,
					"shift",
					shift ? <BsShiftFill /> : <BsShift />
				)}
				{keyButton("y", "Y")}
				{keyButton("x", "X")}
				{keyButton("c", "C")}
				{keyButton("v", "V")}
				{keyButton("b", "B")}
				{keyButton("n", "N")}
				{keyButton("m", "M")}
				{keyButton(",", ";")}
				{keyButton(".", ":")}
				{keyButton("-", "_")}
			</Group>
			<Group position="apart">
                {keyButton(undefined, undefined, "symbol", <MdOutlineEmojiEmotions />)}
                {keyButton("SPACE", "SPACE", "space", undefined)}
                {keyButton(undefined, undefined, "enter", <MdSubdirectoryArrowLeft />)}
            </Group>
		</>
	);
	const symbolRow = <></>;

	return (
		<>
			<Stack>{symbols ? symbolRow : keyRow}</Stack>
		</>
	);
}
