import React, { FC, useMemo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

import { Tab } from '../Tab';

import { tabs } from '../../config/tabs';
import './Tabs.css';
import { InitialState } from '../../constants/types';
import { setActiveTabId } from '../../store/actions';
import { getActiveTab, checkTabIdValid } from '../../utils/helpers';


interface StateProps {
  activeTabId: string;
}

export const Tabs: FC = () => {
  const { activeTabId } = useSelector<InitialState, StateProps>((state: InitialState) => ({
    activeTabId: state.activeTabId,
  }));

  const activeTab = useMemo(
    () => getActiveTab(tabs, activeTabId),
    [activeTabId],
  );

  const dispatch = useDispatch();
  const { tabId } = useParams();
  const history = useHistory();

  useEffect(() => {
    const isTabIdValid = checkTabIdValid(tabs, tabId);

    if (isTabIdValid) {
      dispatch(setActiveTabId(tabId || 'tab-1'));
    } else {
      history.push('/tabs/tab-1');
    }
  }, [tabId]);

  const handleTabClick = (id: string) => {
    dispatch(setActiveTabId(id));
  };

  return (
    <div>
      <h2>Tabs Page</h2>

      <ul className="tabs-list">
        {tabs.map(tab => (
          <li
            key={tab.id}
            className="tabs-item"
          >
            <Tab
              id={tab.id}
              title={tab.title}
              onClick={() => handleTabClick(tab.id)}
            />
          </li>
        ))}
      </ul>

      <p className="tabs-content">
        {activeTab.content}
      </p>
    </div>
  );
};
