import styled from "styled-components";
import {MyWorkspace} from "./MyWorkspace/MyWorkspace";
import {useState} from "react";
import {Section} from "./Section/Section";

const WorkspaceBg = styled.div`
  position: absolute;
  width: 219px;
  height: 34px;
  left: 0px;
  top: 135px;

  background: #2D4071;
`

const WorkspaceBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 18px;

  position: absolute;
  width: 187px;
  height: 346px;
  left: 16px;
  top: 140px;

`

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
            <WorkspaceBg/>
            <WorkspaceBlock>
                <MyWorkspace/>
                {
                    sections.map(section => (
                        <Section {...section} key={section.value}/>
                    ))
                }
            </WorkspaceBlock>
        </>
    )
}