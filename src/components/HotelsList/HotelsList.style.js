import styled from "styled-components";

export const ListContainer = styled.div`
  padding: 20px 0;
`;

export const ListToolContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

export const SortControl = styled.span`
  @media only screen and (max-width: 376px) {
    text-align: right;
  }
`;
