import {TSection} from "../Workspace";
import styled from "styled-components";
import {SectionHeader} from "./SectionHeader/SectionHeader";
import {SectionItem} from "./SectionItem/SectionItem";

const SectionBlock = styled.div`

`

export function Section({label, items} : TSection) {

    return (
        <SectionBlock>
            <SectionHeader label={label}/>
            {items.map(item => <SectionItem {...item} key={item.value}/>)}
        </SectionBlock>
    )
}