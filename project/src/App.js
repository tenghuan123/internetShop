import React from 'react';
import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import routes from './routes/routes'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

moment.locale('zh-cn');

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
        {routes.map(item => <Route path={item.path} exact={item.exact} component={item.component} key={item.component}></Route>)}
      </Switch>
      </Router>
    </div>
  );
}

export default App;
