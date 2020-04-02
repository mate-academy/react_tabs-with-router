import React, { FC } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

interface Props extends RouteComponentProps<{ url: string }> {
  text: string;
}
const About: FC<Props> = ({ text, match }) => (
  <article>
    <h2>
      {`You are reading information from page: ${match.url}`}
    </h2>
    <hr />
    <p>
      { text }
    </p>
    <p>
      Etiam feugiat lorem non metus. Phasellus
      viverra nulla ut metus varius laoreet.
      Fusce fermentum. Praesent congue erat
      at massa. Nullam vel sem.
    </p>
    <p>
      Quisque malesuada placerat nisl. Ut non
      enim eleifend felis pretium feugiat. Proin
      retium, leo ac pellentesque mollis, felis nunc
      ultrices eros, sed gravida augue augue mollis justo.
      Praesent adipiscing. Nam pretium turpis
      et arcu. Curabitur ullamcorper ultricies nisi.
    </p>
  </article>
);

export const WithRouterAbout = withRouter(About);
