import classNames from "classnames"
import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { TabsContext } from "../../TabsContext"


export const Navigation = () => {
  const { setSelTab } = useContext(TabsContext);
  const getLinkClass = ({ isActive }: { isActive: boolean }) => classNames('navbar-item', {
    'is-active': isActive,
  })
  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink to="/" className={getLinkClass} onClick={() => {
            setSelTab(null);
          }}>
            Home
          </NavLink>
          <NavLink to="/tabs" className={getLinkClass}>
            Tabs
          </NavLink>
        </div>
      </div>
    </nav>
  )
}
