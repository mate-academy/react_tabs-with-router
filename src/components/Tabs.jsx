import React from 'react'
import { NavLink } from 'react-router-dom'

const Tabs = (props) => {
  const { tabs, id } = props;

  return (
    <div>
      <h3>Tabs page</h3>
      <ul className='tabs'>
        {
          tabs.map(tab => (
            <li className={`tab__title ${tab.id === id
              ? 'tab__title-active'
              : ''}`}
            >
              <NavLink
                activeClassName='tab__title-link-active'
                className='tab__title-link'
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
