import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

export const WrapperTabs = styled(Tabs)`
  font-size: 16px;
  width: 100%;
  margin-top: 16px;
  padding-left: 6.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const WrapperTabList = styled(TabList)`
  list-style-type: none;
  padding: .4rem;
  display: flex;
  justify-content: center;
  margin: 0;
  min-width: 14%;
  background-color: #F7F8F9;
  border-radius: 20px;
  border: 1px solid #F7F8F9;
`;
WrapperTabList.tabsRole = "TabList";

export const WrapperTab = styled(Tab)`
  border: 1px solid #F7F8F9;
  padding: 1rem;
  border-radius: 10px;
  user-select: none;
  cursor: pointer;
  z-index: 99999;
  background-color: #F7F8F9;
  margin: 4px;
  font-weight: bold;
  color: rgba(0,0,0,.7);

  &:focus {
    outline: none;
  }

  &.is-selected {
    color: rgba(0,0,0, 1);
    background-color: #fff;
    box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
  }
`;
WrapperTab.tabsRole = "Tab";

export const WrapperTabPanel = styled(TabPanel)`

  padding: 16px;
  border: 1px solid "#ccc";
  display: none;
  margin-top: 2rem;

  &.is-selected {
    display: block;
  }
`;
WrapperTabPanel.tabsRole = "TabPanel";

export const WrapperList = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;
