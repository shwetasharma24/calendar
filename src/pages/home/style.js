import styled from '@emotion/styled';

export const Wrapper = styled.div`
  padding: 50px;
  height: calc(100vh - 100px);
  & .rbc-calendar {
    background-color: #F2F5FA;
    padding: 30px;
    box-shadow: rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;
    border-radius: 10px;
  }
  & .rbc-toolbar {
    padding: 20px 30px;
    & .rbc-btn-group {
      button {
        padding: 15px 30px;
        cursor: pointer;
      }
    }
    & .rbc-active {
      background-color: #5755B8;
      color: white;
    }
    & button:hover {
      background-color: #EFEFFD;
      color: black;
    }
    & .rbc-active:focus {
      background-color: #5755B8;
      color: white;
    }
    & button:active {
      box-shadow: none;
      background-color: #EFEFFD;
    }
  }
  & .rbc-month-view {
    border-radius: 5px;
  }
  &.MuiPopover-paper {
    padding: 10px;
  }
`;

export const PopOverWrapper = styled.div`
  padding: 10px;
  background-color: #2B3858;
  color: white;
`;

export const Title = styled.span`
  display: block;
  text-align: center;
  font-weight: bold;
  margin-bottom: 3px;
`;

export const Desc = styled.span`
  display: block;
`;