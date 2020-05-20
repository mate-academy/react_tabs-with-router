import React, { useState } from 'react';
import { Link, Switch, Route } from 'react-router-dom'

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const  Tabs = (props: any) => {
    const { path } = props.match;
    const [isActiveId, setActivIdStatus] = useState<string>('');
    console.log(path)

    const handleClick = (id: string) => {
      setActivIdStatus(id)
    }

    return (
      <div className="container">
        <h2>Tabs</h2>
        <div className="tabs-field">
          <div className="links">
            {tabs.map(tab =>
              (
                <Link to={`${path}/${tab.id}`}
                  className={isActiveId === tab.id ? "link active" : "link"}
                  onClick={() => handleClick(tab.id)}>
                    {tab.title}
                </Link>
              ))
            }
          </div>
          <div className="tabs">
          {isActiveId.length
            ? (
                <Switch>
                  {tabs.map(tab => (
                    <Route path={`${path}/${tab.id}`} render={() =>
                      (
                      <div className="tab">
                        {tab.content}
                      </div>
                      )}
                    />
                  ))}
                </Switch>
              )
            : (
                <div className="tab"></div>
              )
            }
          </div>
        </div>
      </div>
    );
  }
