import { Button, Drawer, Group, MANTINE_SIZES, Stack } from "@mantine/core";
import * as React from "react";
import { MdBackspace, MdSubdirectoryArrowLeft } from "react-icons/md";
import { BsShift, BsShiftFill } from "react-icons/bs";
import { SettingsContext } from "../lib/context";

export default function OnScreenKeyboard({
	text,
	onChange,
	allowEnter,
	onClose,
	closeOnTap,
}: {
	text: string;
	onChange: (value: string) => void;
	allowEnter?: boolean;
	onClose?: () => void;
	closeOnTap?: boolean;
}) {
	const [input, setInput] = React.useState(text);
	const [shift, setShift] = React.useState(false);
	const [symbols, setSymbols] = React.useState(false);
	const { OSKButtonSize: buttonSize, OSKButtonRadius: buttonRadius } =
		React.useContext(SettingsContext);

	React.useEffect(() => {
		onChange(input);
	}, [input, onChange]);

	const keyPress = (key: string) => {
		switch (key) {
			case "backspace":
				setInput(input.slice(0, -1));
				break;
			case "shift":
				setShift(!shift);
				break;
			case "symbol":
				setSymbols(!symbols);
				break;
			case "enter":
				if (allowEnter) {
					setInput(input + "\n");
				}
				break;
			case "space":
				setInput(input + " ");
				break;
			default:
				setInput(input + key);
				break;
		}
	};

	const keyButton = (
		lowerCase?: string,
		upperCase?: string,
		key?: string,
		element?: JSX.Element
	) => {
		return (
			<Button
				size={MANTINE_SIZES[buttonSize]}
				radius={MANTINE_SIZES[buttonRadius]}
				variant="default"
				style={{
					[key === "space" && "width"]: "65%"
				}}
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
			<Group position="center">
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
			<Group position="center">
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
			<Group position="center">
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
			<Group position="center">
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
			<Group position="center">
				{keyButton(undefined, undefined, "symbol", <>#+=</>)}
				{keyButton("SPACE", "SPACE", "space", undefined)}
				{keyButton(undefined, undefined, "enter", <MdSubdirectoryArrowLeft />)}
			</Group>
		</>
	);
	const symbolRow = (
		<>
			<Group position="center">
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
			<Group position="center">
				{keyButton("-", "-")}
				{keyButton("/", "/")}
				{keyButton(":", ":")}
				{keyButton(";", ";")}
				{keyButton(".", ".")}
				{keyButton(",", ",")}
				{keyButton("€", "€")}
				{keyButton("&", "&")}
				{keyButton("@", "@")}
				{keyButton('"', '"')}
				{keyButton("#", "#")}
			</Group>
			<Group position="center">
				{keyButton("!", "!")}
				{keyButton("?", "?")}
				{keyButton("§", "§")}
				{keyButton("$", "$")}
				{keyButton("%", "%")}
				{keyButton("(", "(")}
				{keyButton(")", ")")}
				{keyButton("[", "[")}
				{keyButton("]", "]")}
				{keyButton("{", "{")}
				{keyButton("}", "}")}
			</Group>
			<Group position="center">
				{keyButton("+", "+")}
				{keyButton("-", "-")}
				{keyButton("=", "=")}
				{keyButton("<", "<")}
				{keyButton(">", ">")}
				{keyButton("´", "´")}
				{keyButton("`", "`")}
				{keyButton("'", "'")}
				{keyButton("^", "^")}
				{keyButton("°", "°")}
				{keyButton("-", "_")}
			</Group>
			<Group position="center">
				{keyButton(undefined, undefined, "symbol", <>#+=</>)}
				{keyButton("SPACE", "SPACE", "space", undefined)}
				{keyButton(undefined, undefined, "enter", <MdSubdirectoryArrowLeft />)}
			</Group>
		</>
	);

	return (
		<>
			<Drawer
				position="bottom"
				transition={"slide-up"}
				transitionDuration={400}
				transitionTimingFunction={"ease"}
				closeOnClickOutside={closeOnTap}
				size={"lg"}
				opened={true}
				onClose={onClose}
				withOverlay={closeOnTap ? true : false}
				overlayOpacity={0}
				trapFocus={false}
			>
				<Stack spacing={"xs"} mr={"xl"} ml={"xl"} mt={-30}>
					{symbols ? symbolRow : keyRow}
				</Stack>
			</Drawer>
		</>
	);
}
