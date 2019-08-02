import React from 'react'
import { NavLink } from 'react-router-dom'

const Tabs = (props) => {
  const { tabs, id } = props;


  return (
    <div>
      <h2>Tabs page</h2>
      <ul className='tabs'>
        {
          tabs.map(tab => (
            <li className={`tab__title ${tab.id === id
              ? 'tab__title-active'
              : ''}`
            }
            >
              <NavLink
                className={`tab__title-link ${tab.id === id
                  ? 'tab__title-link-active '
                  : ''}`
                }
                to={`/tabs/${tab.id}`}

              >
                {tab.title}
              </NavLink>
            </li>
          ))
        }
      </ul>

      <section className='tab__section'>
        {
          tabs.find(tab => tab.id === id)
            ? tabs.find(tab => tab.id === id).content
            : <div>Choose something</div>
        }
      </section>
    </div>
  )
};

export default Tabs