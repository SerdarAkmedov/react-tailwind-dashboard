import { lazy } from 'react';
import Dashboard from '../components/Dashboard/Dashboard';

const Calendar = lazy(() => import('../pages/Calendar'));
const CoreArticles = lazy(() => import('../pages/CoreArticles'));
const HealthArticles = lazy(() => import("../pages/HealthArticles"));
const PoliticalArticles = lazy(() => import("../pages/PoliticalArticles"));
const WarArticles = lazy(() => import("../pages/WarArticles"));
const Message1 = lazy(() => import('../pages/Messages/Message1'));
const Task1 = lazy(() => import('../pages/Tasks/Task1'));

const coreRoutes = [
  {
    path:'/',
    title:'Dashboard',
    component: Dashboard,
  },
  {
    path: '/articles/war_articles',
    title: 'War Articles',
    component: WarArticles,
  },  
  {
    path: '/articles/political_articles',
    title: 'Political Articles',
    component: PoliticalArticles,
  },  
  {
    path: '/articles/health_articles',
    title: 'Healt Articles',
    component: HealthArticles,
  },
  {
    path: '/articles/core_articles',
    title: 'Core Articles',
    component: CoreArticles,
  },
  {
    path: '/calendar',
    title: 'Calendar',
    component: Calendar,
  },
  
  {
    path:'/messages/message_1',
    title:"Message 1",
    component:Message1,
  },{
    path:'/tasks/task_1,',
    title:"Task 1",
    component:Task1,
  }
];

const routes = [...coreRoutes];
export default routes;
