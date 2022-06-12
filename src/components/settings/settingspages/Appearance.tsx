import { Divider, useMantineColorScheme } from "@mantine/core";
import * as React from "react";
import { BackgroundContext, OSKSettingsContext, OverallAppearanceContext } from "../../../lib/context";
import OnScreenKeyboard from "../../OnScreenKeyboard";
import SettingsButton from "../SettingsButton";
import SettingsContainer from "../SettingsContainer";
import SettingsPage from "../SettingsPage";
import SettingsSelect from "../SettingsSelect";
import SettingsSlider from "../SettingsSlider";
import SettingsStatus from "../SettingsStatus";
import SettingsSwitch from "../SettingsSwitch";

export default function AppearanceSettings() {
	const { colorScheme, toggleColorScheme } = useMantineColorScheme();
	const { blur, setBlur, useImage, setUseImage, homeScreenOnly, setHomeScreenOnly } = React.useContext(BackgroundContext);
	const { buttonSize, setButtonSize, buttonRadius, setButtonRadius } = React.useContext(OSKSettingsContext);
	const { fontFamily, setFontFamily } = React.useContext(OverallAppearanceContext);
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
					checked={useImage}
					onSwitch={(val) => {
						setUseImage(val);
						fetch("/api/settings/set?setting=useBackgroundImage&value=" + val);
					}}
				/>
				<Divider />
				<SettingsSwitch label={"HomeScreen only"} checked={homeScreenOnly} onSwitch={setHomeScreenOnly} />
				<Divider />
				<SettingsSlider label={"Background Blur"} min={0} max={100} value={blur} onChange={(num) => {
					setBlur(num);
					fetch("/api/settings/set?setting=backgroundImageBlur&value=" + num);
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
