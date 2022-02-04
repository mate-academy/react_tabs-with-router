import { useParams, React, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { getTabById } from './data_tabs';

export default function Tab() {
  const params = useParams();
  const tab = getTabById(params.tabId);
  const navigate = useNavigate();

  useEffect(() => {
    if (!tab) {
      navigate('/tabs');
    }
  }, [params]);

  return (
    <div>
      {tab && tab.content}
    </div>
  );
}
