import { Box, Card, CloseButton, Group, Overlay, Text, Image, useMantineColorScheme } from "@mantine/core";
import * as React from "react";
import { AppContext } from "../../src/lib/context";

export default function AppViewApp() {

        const { colorScheme } = useMantineColorScheme();
	let dark = colorScheme === "dark";

	return <AppContext.Consumer>
                {ctx => {
                        if (ctx.currentApp !== "builtin-app-view") {
                                ctx.setOpenedApps(ctx.openedApps.filter((app) => app.appInfo.id !== "builtin-app-view"));
                        }
                        if (ctx.openedApps.filter((app) => !["builtin-home", "builtin-app-view"].includes(app.appInfo.id)).length === 0) {
                                ctx.setCurrentApp("builtin-home");
                        }
                        return (<Group position="center" mt="xl">
                                {ctx.openedApps.filter(a => !["builtin-app-view", "builtin-home"].includes(a.appInfo.id)).length > 0 && ctx.openedApps.filter(a => !["builtin-app-view", "builtin-home"].includes(a.appInfo.id)).map((app, index) => (<Card pt="xl" key={app.appInfo.id}>
                                        <Card.Section>
                                                <Group position="apart" pr="lg" pl="lg">
                                                        <Group>
                                                                <Image  src={require(`/apps/${app.appInfo.id}/${
								dark && app.appInfo.iconPathDark ? app.appInfo.iconPathDark : app.appInfo.iconPath
							}`)} width={32} height={32} />
                                                                <Text weight={700}>{app.appInfo.name}</Text>
                                                        </Group>
                                                        <CloseButton onClick={() => {
                                                                ctx.setOpenedApps(ctx.openedApps.filter(a => a.appInfo.id !== app.appInfo.id));
                                                        }} />
                                                </Group>
                                        </Card.Section>
                                        <Box style={{ position: "relative" }} onClick={() => ctx.setCurrentApp(app.appInfo.id)}>
                                                <Group>
                                                        {app.appRuntime}
                                                        <Overlay  opacity={0}/>
                                                </Group>        
                                        </Box>
                                </Card>))}
                        </Group>);
                }
        }
        </AppContext.Consumer>;
}
