import styled, { css } from 'styled-components';

const marginDir = (p: any) => p.flow === 'column'
	? 'top'
	: 'left';

export default {
	StyledLayout: styled.div`
  display: flex;
  flex-direction: ${(p: any) => p.flow};
  flex-wrap: ${(p: any) => p.wrap};
  padding: ${(p: any) => `${p.padding}`};
  margin: ${(p: any) => `${p.margin}`};
  ${(p: any) => p.width && css`
    width: ${p.width}
  `};
  ${(p: any) => p.height && css`
    height: ${p.height}
  `};
  ${(p: any) => p.justify && css`
    justify-content: ${p.justify}
  `};
  ${(p: any) => p.align && css`
    align-items: ${p.align}
  `};
  ${(p: any) => p.gap && css`
    & > * + * {
      margin-${marginDir}: ${p.gap}rem;
    }
  `}`,
};
