// src/components/TabsComponent.tsx
import { Link, useParams, useNavigate } from 'react-router-dom';
import { tabs } from '../data/tabs';
import { Tab } from '../types/Tab';

export default function TabsComponent() {
  const { tabId } = useParams<{ tabId?: string }>();
  const navigate = useNavigate();

  return (
    <div className="tabs is-boxed">
      <ul>
        {tabs.map((tab: Tab) => {
          const active = tab.id === tabId;

          // Клік по li тепер явно викликає навігацію — це робить тести стабільнішими
          const handleClick = (e: React.MouseEvent) => {
            // Якщо клік вже на <a>, дозволяємо стандартну поведінку
            // Інакше виконуємо навігацію програмно
            const target = e.target as HTMLElement;

            if (target.tagName.toLowerCase() !== 'a') {
              navigate(`/tabs/${tab.id}`);
            }
          };

          return (
            <li
              key={tab.id}
              data-cy="Tab"
              className={active ? 'is-active' : ''}
              onClick={handleClick}
              role="presentation"
            >
              <Link
                to={`/tabs/${tab.id}`}
                data-cy={`TabLink-${tab.id}`}
                className={active ? 'navbar-item is-active' : 'navbar-item'}
              >
                {tab.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
