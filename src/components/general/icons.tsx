import { ReactSVG } from "react-svg";
import styled from "styled-components";

// Constants
import Images from "../../constants/Images";

const { icons, image } = Images;

const Icon: any = styled(ReactSVG)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;

  span {
    display: flex;
  }
`;

export const ArrowRightIcon: any = (props: any) => {
  return <Icon src={icons.arrow_right} wrapper={"span"} className={props.styles} />;
};

export const BrandIcon: any = (props: any) => {
  return <Icon src={icons.brand} wrapper={"span"} className={props.styles} />;
};

export const DiscordIcon: any = (props: any) => {
  return <Icon src={icons.discord} wrapper={"span"} className={props.styles} />;
};

export const EllipsisIcon: any = (props: any) => {
  return <Icon src={icons.ellipsis} wrapper={"span"} className={props.styles} />;
};

export const IntercomIcon: any = (props: any) => {
  return <Icon src={icons.intercom} wrapper={"span"} className={props.styles} />;
};

export const PlusIcon: any = (props: any) => {
  return <Icon src={icons.plus} wrapper={"span"} className={props.styles} />;
};

export const SearchIcon: any = (props: any) => {
  return <Icon src={icons.search} wrapper={"span"} className={props.styles} />;
};