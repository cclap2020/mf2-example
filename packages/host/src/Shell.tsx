import {
    Outlet,
    Link
    } from "react-router-dom";

    const Shell = () => {
        return (
            <div>
              {/* A "layout route" is a good place to put markup you want to
                  share across all the pages on your site, like navigation. */}
              <nav>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/app1">App 1</Link>
                  </li>
                </ul>
              </nav>
        
              <hr />
        
              {/* An <Outlet> renders whatever child route is currently active,
                  so you can think about this <Outlet> as a placeholder for
                  the child routes we defined above. */}
              <Outlet />
            </div>
          );
    }

    export default Shell