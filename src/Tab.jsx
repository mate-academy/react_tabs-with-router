import { useParams, React, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { tab } from './data_tabs';

export default function Tab() {
  const params = useParams();
  const tabe = tab(params.tabId);
  const navigate = useNavigate();

  useEffect(() => {
    if (!tabe) {
      navigate('/tabs');
    }
  }, [params]);

  return (
    <div>
      {tabe && tabe.content}
    </div>
  );
}
