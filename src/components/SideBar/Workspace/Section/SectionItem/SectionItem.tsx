import styled from "styled-components";
import {TSectionItem} from "../../Workspace";

const SectionItemBlock = styled.div`
  margin-bottom: 1.125rem;
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