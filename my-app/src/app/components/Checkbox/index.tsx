import React from 'react';
import styled from 'styled-components';

const Circle = styled.div<{ checked?: boolean }>`
  width: 20px;
  height: 20px;
  min-width: 20px;
  border-radius: 50%;
  border: 2px solid ${props => (props.checked ? 'red' : '#eee')};
  padding: 3px;

  & > .checkbox-icon {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: red;
  }
`;

const TodoContent = styled.span<{ checked: boolean }>`
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    cursor: text;
    text-decoration: ${props => props.checked ? 'line-through' : 'initial'};
    color: ${props => (props.checked ? '#aaa' : '#212121')};
`
export default function CheckBox({
  checked,
  onClick,
}: {
  checked?: boolean;
  onClick?: () => void;
}) {
  return (
    <>
      <Circle checked={checked} onClick={onClick}>
        {checked ? <div className="checkbox-icon" /> : null}
      </Circle>
    </>
  );
}
