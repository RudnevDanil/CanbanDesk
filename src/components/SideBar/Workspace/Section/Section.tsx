import {TSection} from "../Workspace";
import {SectionHeader} from "./SectionHeader/SectionHeader";
import {SectionItem} from "./SectionItem/SectionItem";
import styled from "styled-components";

const SectionBlock = styled.div`
  margin-left: 1rem;
  margin-top: 0.8125rem;
`

export function Section({label, items} : TSection) {

    return (
        <SectionBlock>
            <SectionHeader label={label}/>
            {items.map(item => <SectionItem {...item} key={item.value}/>)}
        </SectionBlock>
    )
}