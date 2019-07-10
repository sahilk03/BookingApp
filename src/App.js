import React from 'react';
import './styles.scss';
import Sidenav from './Sidenav.js';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import Booking from './Booking';
import SearchIcon from './asset/ic-search.svg'
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';

class App extends React.Component {

  render() {
    return (
      <React.Fragment>
        <BrowserRouter>

          <div className="app_wrapper">
            <div className="app_header">
              <Typography className="company_title" variant="h6" gutterBottom>
                  RichMond Town
              </Typography>
              <FormControl
                className="search_wrapper"
              >
                <Input
                  className="search_input"
                  id="adornment-password"
                  type={'text'}
                  placeholder={"search a Room"}
                  // onChange={handleChange('password')}
                  startAdornment={
                    <InputAdornment position="start">
                      <img src={SearchIcon} />
                    </InputAdornment>
                  }
                />
              </FormControl>

            </div>
            <div className="app container">
              <Sidenav></Sidenav>
              <div className="app_content">
                <Switch>
                  <Route path={"/collections"} component={Booking}></Route>
                  <Route path={"/sampling"} component={Booking}></Route>
                  <Route path={"/production"} component={Booking}></Route>
                  <Route path={"/inbox"} component={Booking}></Route>
                  <Route path={"/account"} component={Booking}></Route>
                  <Route path={"/"} component={Booking}></Route>
                  <Route component={() => <div>Not Found</div>} />
                </Switch>
              </div>
            </div>
          </div>
        </BrowserRouter>
      </React.Fragment>

    );
  }
}
export default App;
