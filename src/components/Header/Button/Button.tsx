import styled from "styled-components";

export type TButton = {
    label: string,
    iconPath: string,
}

const ButtonBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 20px;

  //width: 119px;
  //height: 40px;

  /* Blue/Main Blue */

  background: #0094FF;
  border-radius: 50px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`

const Icon = styled.img`
  width: 10px;
  height: 10px;

  flex: none;
  order: 0;
  flex-grow: 0;
`

const LabelBlock = styled.div`
  width: 55px;
  height: 16px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-align: right;

  color: #FFFFFF;


  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;

`

export const Button = ({label, iconPath}: TButton) => {

    return (
        <ButtonBlock>
            <Icon src={iconPath} alt={"..."}/>
            <LabelBlock>{label}</LabelBlock>
        </ButtonBlock>
    )
}