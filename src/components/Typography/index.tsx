import styled, { css } from 'styled-components';

export type Props = {
  color?: string,
  bold?: boolean,
  children?: React.ReactChild,
};

const sharedStyle = css`
  font-family: BarlowSemiCondensed;
  text-transform: uppercase;
`;

export const Title = styled.h1<Omit<Props, 'bold'>>`
  ${sharedStyle}
  color: ${({ color }) => color || '#fff'};
  font-weight: 700;
`;

export const Text = styled.p<Props>`
  ${sharedStyle}
  color: ${({ color }) => color || '#fff'};
  ${({ bold }) => bold && `font-weight: 700`}
`;

const Typography = {
  Title,
  Text,
};

export default Typography;
