import React from 'react';
import {
  Router,
  Route,
  hashHistory,
  IndexRedirect
} from 'react-router';

import Login from './components/Login'
import Register from './components/Register'
import Main from './components/Main'
import Index from './components/Index'
import DailyOperation from './components/DailyOperation'
import TodayForecast from './components/TodayForecast'
import MailManagementTask from './components/MailManagementTask'
import MailManagementTaskMail from './components/MailManagementTaskMail'
import MailManagementTemplate from './components/MailManagementTemplate'
import MailManagementTaskLog from './components/MailManagementTaskLog'
import WarnModule from './components/WarnModule'
import WarnIndex from './components/WarnIndex'
import WarnPhone from './components/WarnPhone'
import MessageManagement from './components/MessageManagement'
import AccessLog from './components/AccessLog'
import RechargeReturn from './components/RechargeReturn'
import UserExperience from './components/UserExperience'
import MarketPromotion from './components/MarketPromotion'
import ConsumerActiveUser from './components/ConsumerActiveUser'
import AccessActiveUser from './components/AccessActiveUser'
import PersonTicketDaily from './components/PersonTicketDaily'
import PersonTicketTable from './components/PersonTicketTable'
import BusinessRegisterTable from './components/BusinessRegisterTable'
import BusinessActiveTable from './components/BusinessActiveTable'
import AreaIncome from './components/AreaIncome'
import ProductIncome from './components/ProductIncome'
import OrderSource from './components/OrderSource'
import CompleteOrder from './components/CompleteOrder'
import CarAnalysis from './components/CarAnalysis'
import CarMarketExtension from './components/CarMarketExtension'
import RegisterDriver from './components/RegisterDriver'
import RealtimeOrderHalf from './components/RealtimeOrderHalf'
import ErrorOrder from './components/ErrorOrder'
import DriverOrderPercent from './components/DriverOrderPercent'
import BusinessAccountInfo from './components/BusinessAccountInfo'
import CompetitorPrice from './components/CompetitorPrice'
import CtripAirport from './components/CtripAirport'
import ProductService from './components/ProductService'
import WeekReportDetails from './components/WeekReportDetails'
import Message from './components/Message'


const Routes = () => {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Login
        }
        />
        <Route path="/Register" component={Register
        }/>
        <Route path="/Main" component={Main
        }
        >
          //访问根路由的时候，重定向到首页
          <IndexRedirect to="/Index" />
          <Route path="/Index" component={Index
          }
          />
          <Route path="/DailyOperation" component={DailyOperation
          }
          />
          <Route path="/TodayForecast" component={TodayForecast
          }
          />
          <Route path="/MailManagementTask" component={MailManagementTask
          }
          />
          <Route path="/MailManagementTaskMail" component={MailManagementTaskMail
          }
          />
          <Route path="/MailManagementTemplate" component={MailManagementTemplate
          }
          />
          <Route path="/MailManagementTaskLog" component={MailManagementTaskLog
          }
          />
          <Route path="/WarnModule" component={WarnModule
          }
          />
          <Route path="/WarnIndex" component={WarnIndex
          }
          />
          <Route path="/WarnPhone" component={WarnPhone
          }
          />
          <Route path="/MessageManagement" component={MessageManagement
          }
          />
          <Route path="/AccessLog" component={AccessLog
          }
          />
          <Route path="/RechargeReturn" component={RechargeReturn
          }
          />
          <Route path="/UserExperience" component={UserExperience
          }
          />
          <Route path="/MarketPromotion" component={MarketPromotion
          }
          />
          <Route path="/ConsumerActiveUser" component={ConsumerActiveUser
          }
          />
          <Route path="/AccessActiveUser" component={AccessActiveUser
          }
          />
          <Route path="/PersonTicketDaily" component={PersonTicketDaily
          }
          />
          <Route path="/PersonTicketTable" component={PersonTicketTable
          }
          />
          <Route path="/BusinessRegisterTable" component={BusinessRegisterTable
          }
          />
          <Route path="/BusinessActiveTable" component={BusinessActiveTable
          }
          />
          <Route path="/AreaIncome" component={AreaIncome
          }
          />
          <Route path="/ProductIncome" component={ProductIncome
          }
          />
          <Route path="/OrderSource" component={OrderSource
          }
          />
          <Route path="/CompleteOrder" component={CompleteOrder
          }
          />
          <Route path="/CarAnalysis" component={CarAnalysis
          }
          />
          <Route path="/CarMarketExtension" component={CarMarketExtension
          }
          />
          <Route path="/RegisterDriver" component={RegisterDriver
          }
          />
          <Route path="/RealtimeOrderHalf" component={RealtimeOrderHalf
          }
          />
          <Route path="/ErrorOrder" component={ErrorOrder
          }
          />
          <Route path="/DriverOrderPercent" component={DriverOrderPercent
          }
          />
          <Route path="/BusinessAccountInfo" component={BusinessAccountInfo
          }
          />
          <Route path="/CompetitorPrice" component={CompetitorPrice
          }
          />
          <Route path="/CtripAirport" component={CtripAirport
          }
          />
          <Route path="/ProductService" component={ProductService
          }
          />
          <Route path="/WeekReportDetails" component={WeekReportDetails
          }
          />
          <Route path="/Message" component={Message
          }
          />
        </Route>
      </Router>
    )
  }
  
  
  export default Routes