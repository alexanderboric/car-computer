import { Divider, useMantineColorScheme } from "@mantine/core";
import * as React from "react";
import { SettingsContext } from "../../../lib/context";
import OnScreenKeyboard from "../../OnScreenKeyboard";
import SettingsButton from "../elements/SettingsButton";
import SettingsContainer from "../organization/SettingsContainer";
import SettingsPage from "../organization/SettingsPage";
import SettingsSelect from "../elements/SettingsSelect";
import SettingsSlider from "../elements/SettingsSlider";
import SettingsStatus from "../elements/SettingsStatus";
import SettingsSwitch from "../elements/SettingsSwitch";

export default function AppearanceSettings() {
	const { colorScheme, toggleColorScheme } = useMantineColorScheme();
	const { backgroundImageBlur, setBackgroundImageBlur, useBackgroundImage, setUseBackgroundImage, backgroundImageHomeScreenOnly, setBackgroundImageHomeScreenOnly, OSKButtonSize: buttonSize, setOSKButtonSize: setButtonSize, OSKButtonRadius: buttonRadius, setOSKButtonRadius: setButtonRadius, fontFamily, setFontFamily } = React.useContext(SettingsContext);
	const [showOSK, setShowOSK] = React.useState(false);

	const [greeting, setGreeting] = React.useState("");
	const [greetingLoaded, setGreetingLoaded] = React.useState(false);

	React.useEffect(() => {
		const fetchData = async () => {
			fetch("/api/greeting?name=John").then(res => res.json()).then(data => {
				setGreeting(data.greeting);
				setGreetingLoaded(true);
			});
		};
		fetchData();
	}, []);

	return (
		<SettingsPage title={"Appearance"}>
			<SettingsContainer label="Theme">
				<SettingsSwitch
					label={"Dark Mode"}
					checked={colorScheme === "dark"}
					onSwitch={() => toggleColorScheme()}
				/>
				<Divider />
				<SettingsSelect label={"Font"} value={fontFamily} values={[
					{ value: "default", label: "Default" },
					{ value: "Verdana, sans-serif", label: "Verdana" },
					{ value: "Monaco, Courier", label: "Monaco" },
					{ value: "Greycliff CF", label: "Greycliff" },
				]} onChange={setFontFamily} />
				<Divider />
				<SettingsStatus label={"Test"} status={greeting} loading={!greetingLoaded} />
			</SettingsContainer>

			<SettingsContainer label="Background">
				<SettingsSwitch
					label={"Use Background Image"}
					checked={useBackgroundImage}
					onSwitch={(val) => {
						setUseBackgroundImage(val);
					}}
				/>
				<Divider />
				<SettingsSwitch label={"HomeScreen only"} disabled={!useBackgroundImage} checked={backgroundImageHomeScreenOnly} onSwitch={setBackgroundImageHomeScreenOnly} />
				<Divider />
				<SettingsSlider label={"Background Blur"} disabled={!useBackgroundImage} min={0} max={100} value={backgroundImageBlur} onChange={(num) => {
					setBackgroundImageBlur(num);
				}} />
			</SettingsContainer>

			<SettingsContainer label="On Screen Keyboard" bottomText="On Screen Keyboard will appear whenever text input is required.">
				<SettingsSelect label={"Button Radius"} value={buttonRadius} values={[
					{ label: "Extra Small", value: 0 },
					{ label: "Small", value: 1 },
					{ label: "Medium", value: 2 },
					{ label: "Large", value: 3 },
					{ label: "Extra Large", value: 4 }
				]} onChange={setButtonRadius} />
				<Divider />
				<SettingsSelect label={"Button Size"} value={buttonSize} values={[
					{ label: "Extra Small", value: 0 },
					{ label: "Small", value: 1 },
					{ label: "Medium", value: 2 },
					{ label: "Large", value: 3 },
					{ label: "Extra Large", value: 4 }
				]} onChange={setButtonSize} />
				<Divider />
				<SettingsButton label={"Show Keyboard"} onClick={() => setShowOSK(true)} />
				{showOSK && <OnScreenKeyboard text={""} onChange={() => {}} onClose={() => {setShowOSK(false)}} closeOnTap />}
			</SettingsContainer>
		</SettingsPage>
	);
}
