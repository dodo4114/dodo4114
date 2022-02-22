import styled from 'styled-components/macro';

export const Lead = styled.p`
  font-size: 1.5rem;
  font-weight: 300;
  line-height: 1.5;
  text-align: center;
  color: ${p => p.theme.textSecondary};
  margin: 0 0 1.5rem 0;
  white-space: pre-wrap;
  strong {
    color: ${p => p.theme.text};
    font-weight: 500;
  }
`;
