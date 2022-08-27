import { LoadingOverlay } from "@mantine/core";
import * as React from "react";
import { InfotainmentApp } from "../../lib/types";

export default function AppView({ app }: { app: InfotainmentApp }) {
    const [appComponent, setAppComponent] = React.useState(<LoadingOverlay />);

    React.useEffect(() => {
        async function fetchData() {
            const component = await import(`/apps/${app.id}/${app.startUiPath}`).then((module) => module.default).catch(() => import(`/apps/${"builtin-error"}/notFound`).then((module) => module.default));
            setAppComponent(component);
        }
        fetchData();
    }, [app])

	return <React.Suspense fallback="Loading...">{appComponent}</React.Suspense>;
}
