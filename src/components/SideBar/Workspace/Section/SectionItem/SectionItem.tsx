import styled from "styled-components";
import {TSectionItem} from "../../Workspace";

const SectionItemBlock = styled.div`
  //width: 63px;
  height: 16px;
  margin-top: 18px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;

  color: #8C939F;
`

export function SectionItem({label} : TSectionItem) {

    return (
        <SectionItemBlock>
            {label}
        </SectionItemBlock>
    )
}