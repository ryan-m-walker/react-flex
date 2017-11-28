import styled from 'styled-components'

export const Wrapper = styled.section`
  flex-grow: ${ ({active}) => active ? 36 : 3 };
  transition: all 180ms ease-out;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: ${ ({active}) => active ? 'auto' : 'hidden' };
  cursor: ${ ({active}) => active ? 'default' : 'pointer' };
  & * {
    opacity: ${ ({active}) => active ? 1 : 0.5 }; 
    transition: opacity 250ms
  }
  &:hover {
    flex-grow: ${ ({active}) => !active ? 4 : 36 };
    & * {
      opacity: 1;
    }
  }
`