import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.scss';

import {AuthContextProvider, AuthProtectedRoute} from './AuthContext';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import Passwords from './Passwords';
import Register from './Register';
import SectionItems from './SectionItems';
import Sections from './Sections/Sections';
import WebTechnologies from './LearningOutcomes/WebTechnologies';
import InfraSys from './LearningOutcomes/InfraSys';
import Databases from './LearningOutcomes/Databases';
import Programming from './LearningOutcomes/Programming';
import DataModeling from './LearningOutcomes/Databases/DataModeling';
import DataArchitecture from './LearningOutcomes/Databases/DataArchitecture';
import SQL from './LearningOutcomes/Databases/SQL';
import DatabaseManagement from './LearningOutcomes/Databases/DatabaseManagement';
import JavaScriptHTMLCSS from './LearningOutcomes/WebTechnologies/JavaScriptHTMLCSS';
import WebDesign from './LearningOutcomes/WebTechnologies/WebDesign';
import WebDev from './LearningOutcomes/WebTechnologies/WebDev';
import ComProtocols from './LearningOutcomes/WebTechnologies/ComProtocols';
import ServersStorage from './LearningOutcomes/InfraSys/ServersStorage';
import OperatingSystems from './LearningOutcomes/InfraSys/OperatingSystems';
import SwitchesRouters from './LearningOutcomes/InfraSys/SwitchesRouters';
import NetworkSecurity from './LearningOutcomes/InfraSys/NetworkSecurity';
import OOP from './LearningOutcomes/Programming/OOP';
import DataStructures from './LearningOutcomes/Programming/DataStructures';
import SystemsAlgorithms from './LearningOutcomes/Programming/SystemsAlgorithms';
import IDE from './LearningOutcomes/Programming/IDE';
import JavaScriptHTMLCSSQuiz from './LearningOutcomes/WebTechnologies/JavaScriptHTMLCSSQuiz';
import WebDesignQuiz from './LearningOutcomes/WebTechnologies/WebDesignQuiz';
import WebDevQuiz from './LearningOutcomes/WebTechnologies/WebDevQuiz';
import ComProtocolsQuiz from './LearningOutcomes/WebTechnologies/ComProtocolsQuiz';
import DatabasesQuiz, { databasesQuestionDict } from './LearningOutcomes/Databases/DatabasesQuiz';
import ProgrammingQuiz, { programmingQuestionDict } from './LearningOutcomes/Programming/ProgrammingQuiz';
import InfraSysQuiz, {infraSysQuestionDict} from './LearningOutcomes/InfraSys/InfraSysQuiz';

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/web_technologies">
            <WebTechnologies />
          </Route>
          < Route path="/javascript_html_css">
            <JavaScriptHTMLCSS />
          </Route>
          <Route path="/javascript_html_css_quiz">
            <JavaScriptHTMLCSSQuiz />
          </Route>
          <Route path="/web_design">
            <WebDesign />
          </Route>
          <Route path="/web_design_quiz">
            <WebDesignQuiz />
          </Route>
          <Route path="/web_dev">
            <WebDev />
          </Route>
          <Route path="/web_dev_quiz">
            <WebDevQuiz />
          </Route>
          <Route path="/com_protocols">
            <ComProtocols />
          </Route>
          <Route path="/com_protocols_quiz">
            <ComProtocolsQuiz />
          </Route>
          <Route path="/databases">
            <Databases />
          </Route>
          <Route path="/data_modeling">
            <DataModeling />
          </Route>
          <Route path="/data_modeling_quiz">
            <DatabasesQuiz questionList={databasesQuestionDict.questionList0}/>
          </Route>
          <Route path="/data_architecture">
            <DataArchitecture />
          </Route>
          <Route path="/data_architecture_quiz">
            <DatabasesQuiz questionList={databasesQuestionDict.questionList1}/>
          </Route>
          <Route path="/sql">
            <SQL />
          </Route>
          <Route path="/sql_quiz">
            <DatabasesQuiz questionList={databasesQuestionDict.questionList2}/>
          </Route>
          <Route path="/database_management">
            <DatabaseManagement />
          </Route>
          <Route path="/database_management_quiz">
            <DatabasesQuiz questionList={databasesQuestionDict.questionList3}/>
          </Route>
          <Route path="/infra_and_systems">
            <InfraSys />
          </Route>
          <Route path="/servers_storage">
            <ServersStorage />
          </Route>
          <Route path="/servers_storage_quiz">
            <InfraSysQuiz questionList={infraSysQuestionDict.questionList0}/>
          </Route>
          <Route path="/operating_systems">
            <OperatingSystems />
          </Route>
          <Route path="/operating_systems_quiz">
            <InfraSysQuiz questionList={infraSysQuestionDict.questionList1}/>
          </Route>
          <Route path="/switches_routers">
            <SwitchesRouters />
          </Route>
          <Route path="/switches_routers_quiz">
            <InfraSysQuiz questionList={infraSysQuestionDict.questionList2}/>
          </Route>
          <Route path="/network_security">
            <NetworkSecurity />
          </Route>
          <Route path="/network_security_quiz">
            <InfraSysQuiz questionList={infraSysQuestionDict.questionList3}/>
          </Route>
          <Route path="/programming">
            <Programming />
          </Route>
          <Route path="/oop">
            <OOP />
          </Route>
          <Route path="/oop_quiz">
            <ProgrammingQuiz questionList={programmingQuestionDict.questionList0}/>
          </Route>
          <Route path="/data_structures">
            <DataStructures />
          </Route>
          <Route path="/data_structures_quiz">
            <ProgrammingQuiz questionList={programmingQuestionDict.questionList1}/>
          </Route>
          <Route path="/sys_alg">
            <SystemsAlgorithms />
          </Route>

          <Route path="/sys_alg_quiz">
            <ProgrammingQuiz questionList={programmingQuestionDict.questionList2}/>
          </Route>
          <Route path="/ide">
            <IDE />
          </Route>
          <Route path="/ide_quiz">
            <ProgrammingQuiz questionList={programmingQuestionDict.questionList3}/>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/passwords">
            <Passwords />
          </Route>
          <Route path="/sections">
            <Sections />
          </Route> 
          {process.env.REACT_APP_FEATURE_REGISTRATION === 'true' && (
            <Route path="/register">
              <Register />
            </Route>

          )}
          <AuthProtectedRoute path="/sectionItems">
            <SectionItems />
          </AuthProtectedRoute>
        </Switch>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
