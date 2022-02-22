/**
 *
 * Spacer
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';

interface Props {
  height?: number | String;
  width?: number | String;
}

export function Spacer(props: Props) {
  const [height, setHeight] = React.useState(props.height);

  React.useEffect(() => {
    if (typeof height == 'number') {
      setHeight(height.toString() + 'px');
    }
  }, []);
  return (
    <Div
      data-width={props.width}
      data-height={height}
      data-max-width={props['max-width']}
      data-max-height={props['max-height']}
      {...props}
    />
  );
}

const Div = styled.div`
  min-width: ${props => props['data-width']}px;
  min-height: ${props => props['data-height']};
  max-width: ${props => props['data-max-width']}px;
  max-height: ${props => props['data-max-height']}px;
  margin: 0;
  padding: 0;
`;
