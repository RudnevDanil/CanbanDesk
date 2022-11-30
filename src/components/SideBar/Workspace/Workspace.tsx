import {MyWorkspace} from "./MyWorkspace/MyWorkspace";
import {useState} from "react";
import {Section} from "./Section/Section";

export type TSectionItem = {
    value: number,
    label: string,
}
export type TSection = {
    value: number,
    label: string,
    items: TSectionItem[],
}
const testSections: TSection[] = [
    {
        label: "Favorites",
        items: ['Marketing', 'Mobile App']
    },
    {
        label: "My Projects",
        items: ['Marketing', 'Landing Pages', 'Wedding', 'Mobile App', 'House Construction']
    }
].map(({label, items}, i) => ({
    value: i,
    label,
    items: items.map((label, i) => ({value: i, label})),
}))

export function Workspace() {

    const [sections, setSections] = useState<TSection[]>(testSections)

    return (
        <>
            <MyWorkspace/>
            {
                sections.map(section => (
                    <Section {...section} key={section.value}/>
                ))
            }
        </>
    )
}