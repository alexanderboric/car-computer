import { Group, SegmentedControl, Stack, Text } from "@mantine/core";
import * as React from "react";
import { MdDownloadDone, MdSearch, MdSource, MdStar } from "react-icons/md";

export default function AppStoreApp() {
    return (<>
    <Stack>
        <SegmentedControl 
        size="xl"
        data={[
            {
                value: 'featured',
                label: <Group><MdStar /><Text weight={600}>Featured</Text></Group>
            },
            {
                value: 'search',
                label: <Group><MdSearch /><Text weight={600}>Search</Text></Group>
            },
            {
                value: 'installed',
                label: <Group><MdDownloadDone /><Text weight={600}>Installed</Text></Group>
            },
            {
                value: 'sources',
                label: <Group><MdSource /><Text weight={600}>Sources</Text></Group>
            }
        ]} />
    </Stack>
    </>)
}