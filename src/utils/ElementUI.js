import Vue from "vue";
import { Pagination } from "element-ui";

Vue.use(Pagination);


import CustomizedPagination from '@/components/Pagination'


Vue.component('Pagination', CustomizedPagination);
