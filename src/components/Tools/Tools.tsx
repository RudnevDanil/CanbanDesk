import styled from "styled-components";
import {useState} from "react";
import {Tool} from "./Tool/Tool";

const {default: roadmapIconPath} = require("../../imgs/roadmapIcon.svg");
const {default: scheduleIconPath} = require("../../imgs/scheduleIcon.svg");
const {default: tasksIconPath} = require("../../imgs/tasksIcon.svg");
const {default: notesIconPath} = require("../../imgs/notesIcon.svg");
const {default: filesIconPath} = require("../../imgs/filesIcon.svg");

const ToolsStyle = styled.div`
  position: absolute;
  width: 154px;
  height: 978px;
  left: 219px;
  top: 0px;

  background: #F5F8FA;
`
const ToolsBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  position: absolute;
  width: 138px;
  height: 250px;
  left: 0px;
  top: 71px;
`

const ToolsLabel = styled.div`
  position: relative;
  width: 45px;
  height: 21px;
  left: 16px;
  top: 24px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px; 
  
  color: #222222;
`

export type TTool = {
    value: number,
    label: string,
    iconPath: string,
}
const testTools: TTool[] = [
    {label: "Roadmap", iconPath: roadmapIconPath},
    {label: "Schedule", iconPath: scheduleIconPath},
    {label: "Tasks", iconPath: tasksIconPath},
    {label: "Notes", iconPath: notesIconPath},
    {label: "Files", iconPath: filesIconPath},
].map((tool, i) => ({...tool, value: i}))

export const Tools = () => {
    const [tools, setTools] = useState<TTool[]>(testTools)
    const [activeTool, setActiveTool] = useState<number>(1)

    console.log(tools)
    return (
        <ToolsStyle>
            <ToolsBlock>
                {
                    tools.map(tool => <Tool tool={tool} isActive={activeTool === tool.value} key={tool.value}/>)
                }
            </ToolsBlock>
            <ToolsLabel>Tools</ToolsLabel>
        </ToolsStyle>
    )
}