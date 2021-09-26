import VueRouter from 'vue-router'
import { pages } from './pages';
import Ledger from "./components/Ledger.vue";

const routes = [
    { path: pages.ledgers, component: Ledger }
];

export default new VueRouter({ routes });