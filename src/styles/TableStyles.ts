import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  font-family: sans-serif;
  min-width: 400px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  @media (max-width: 768px) {
    min-width: 0;
    box-shadow: none;
    font-size: 0.8em;
  }
`;

export const TableHeader = styled.th`
  background-color: #009879;
  color: #ffffff;
  text-align: left;
  padding: 12px 15px;
  cursor: pointer;
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid #dddddd;

  &:nth-of-type(even) {
    background-color: #f3f3f3;
  }

  &:last-of-type {
    border-bottom: 2px solid #009879;
  }
`;

export const TableData = styled.td`
  padding: 12px 15px;
`;
