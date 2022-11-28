import {TSection} from "../Workspace";
import {SectionHeader} from "./SectionHeader/SectionHeader";
import {SectionItem} from "./SectionItem/SectionItem";

export function Section({label, items} : TSection) {

    return (
        <>
            <SectionHeader label={label}/>
            {items.map(item => <SectionItem {...item} key={item.value}/>)}
        </>
    )
}