import React from 'react';
import {
  Router,
  Route,
  hashHistory,
  IndexRedirect
} from 'react-router';
import Loadable from 'react-loadable';
const MyLoadingComponent = ({ isLoading, error }) => {
  // Handle the loading state
  if (isLoading) {
    return <div>Loading...</div>;
  }
  // Handle the error state
  else if (error) {
    return <div>Sorry, there was a problem loading the page.</div>;
  }
  else {
    return null;
  }
};

const Routes = () => {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={Loadable({
        loader: () => import('./components/Login'),
        loading: MyLoadingComponent
      })}
      />
      <Route path="/Main" component={Loadable({
        loader: () => import('./components/Main'),
        loading: MyLoadingComponent
      })}
      >
        //访问根路由的时候，重定向到首页
        <IndexRedirect to="/Index" />
        <Route path="/Index" component={Loadable({
          loader: () => import('./components/Index'),
          loading: MyLoadingComponent
        })}
        />
        <Route path="/DailyOperation" component={Loadable({
          loader: () => import('./components/DailyOperation'),
          loading: MyLoadingComponent
        })}
        />
        <Route path="/TodayForecast" component={Loadable({
          loader: () => import('./components/TodayForecast'),
          loading: MyLoadingComponent
        })}
        />
        <Route path="/MailManagementTask" component={Loadable({
          loader: () => import('./components/MailManagementTask'),
          loading: MyLoadingComponent
        })}
        />
        <Route path="/MailManagementTaskMail" component={Loadable({
          loader: () => import('./components/MailManagementTaskMail'),
          loading: MyLoadingComponent
        })}
        />
        <Route path="/MailManagementTemplate" component={Loadable({
          loader: () => import('./components/MailManagementTemplate'),
          loading: MyLoadingComponent
        })}
        />
        <Route path="/MailManagementTaskLog" component={Loadable({
          loader: () => import('./components/MailManagementTaskLog'),
          loading: MyLoadingComponent
        })}
        />
        <Route path="/WarnModule" component={Loadable({
          loader: () => import('./components/WarnModule'),
          loading: MyLoadingComponent
        })}
        />
        <Route path="/WarnIndex" component={Loadable({
          loader: () => import('./components/WarnIndex'),
          loading: MyLoadingComponent
        })}
        />
        <Route path="/WarnPhone" component={Loadable({
          loader: () => import('./components/WarnPhone'),
          loading: MyLoadingComponent
        })}
        />
        <Route path="/MessageManagement" component={Loadable({
          loader: () => import('./components/MessageManagement'),
          loading: MyLoadingComponent
        })}
        />
        <Route path="/AccessLog" component={Loadable({
          loader: () => import('./components/AccessLog'),
          loading: MyLoadingComponent
        })}
        />
        <Route path="/RechargeReturn" component={Loadable({
          loader: () => import('./components/RechargeReturn'),
          loading: MyLoadingComponent
        })}
        />
        <Route path="/UserExperience" component={Loadable({
          loader: () => import('./components/UserExperience'),
          loading: MyLoadingComponent
        })}
        />
        <Route path="/MarketPromotion" component={Loadable({
          loader: () => import('./components/MarketPromotion'),
          loading: MyLoadingComponent
        })}
        />
        <Route path="/ConsumerActiveUser" component={Loadable({
          loader: () => import('./components/ConsumerActiveUser'),
          loading: MyLoadingComponent
        })}
        />
        <Route path="/AccessActiveUser" component={Loadable({
          loader: () => import('./components/AccessActiveUser'),
          loading: MyLoadingComponent
        })}
        />
        <Route path="/PersonTicketDaily" component={Loadable({
          loader: () => import('./components/PersonTicketDaily'),
          loading: MyLoadingComponent
        })}
        />
        <Route path="/PersonTicketTable" component={Loadable({
          loader: () => import('./components/PersonTicketTable'),
          loading: MyLoadingComponent
        })}
        />
        <Route path="/BusinessRegisterTable" component={Loadable({
          loader: () => import('./components/BusinessRegisterTable'),
          loading: MyLoadingComponent
        })}
        />
        <Route path="/BusinessActiveTable" component={Loadable({
          loader: () => import('./components/BusinessActiveTable'),
          loading: MyLoadingComponent
        })}
        />
        <Route path="/AreaIncome" component={Loadable({
          loader: () => import('./components/AreaIncome'),
          loading: MyLoadingComponent
        })}
        />
        <Route path="/ProductIncome" component={Loadable({
          loader: () => import('./components/ProductIncome'),
          loading: MyLoadingComponent
        })}
        />
        <Route path="/OrderSource" component={Loadable({
          loader: () => import('./components/OrderSource'),
          loading: MyLoadingComponent
        })}
        />
        <Route path="/CompleteOrder" component={Loadable({
          loader: () => import('./components/CompleteOrder'),
          loading: MyLoadingComponent
        })}
        />
        <Route path="/CarAnalysis" component={Loadable({
          loader: () => import('./components/CarAnalysis'),
          loading: MyLoadingComponent
        })}
        />
        <Route path="/CarMarketExtension" component={Loadable({
          loader: () => import('./components/CarMarketExtension'),
          loading: MyLoadingComponent
        })}
        />
        <Route path="/RegisterDriver" component={Loadable({
          loader: () => import('./components/RegisterDriver'),
          loading: MyLoadingComponent
        })}
        />
        <Route path="/RealtimeOrderHalf" component={Loadable({
          loader: () => import('./components/RealtimeOrderHalf'),
          loading: MyLoadingComponent
        })}
        />
        <Route path="/ErrorOrder" component={Loadable({
          loader: () => import('./components/ErrorOrder'),
          loading: MyLoadingComponent
        })}
        />
        <Route path="/DriverOrderPercent" component={Loadable({
          loader: () => import('./components/DriverOrderPercent'),
          loading: MyLoadingComponent
        })}
        />
        <Route path="/BusinessAccountInfo" component={Loadable({
          loader: () => import('./components/BusinessAccountInfo'),
          loading: MyLoadingComponent
        })}
        />
        <Route path="/CompetitorPrice" component={Loadable({
          loader: () => import('./components/CompetitorPrice'),
          loading: MyLoadingComponent
        })}
        />
        <Route path="/CtripAirport" component={Loadable({
          loader: () => import('./components/CtripAirport'),
          loading: MyLoadingComponent
        })}
        />
        <Route path="/ProductService" component={Loadable({
          loader: () => import('./components/ProductService'),
          loading: MyLoadingComponent
        })}
        />
        <Route path="/WeekReportDetails" component={Loadable({
          loader: () => import('./components/WeekReportDetails'),
          loading: MyLoadingComponent
        })}
        />
        <Route path="/Message" component={Loadable({
          loader: () => import('./components/Message'),
          loading: MyLoadingComponent
        })}
        />
      </Route>
    </Router>
  )
}


export default Routes