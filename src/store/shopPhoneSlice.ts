import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPhones } from '../models/IPhones.ts';

const Orders =
  localStorage.getItem('Orders') !== null
    ? JSON.parse(localStorage.getItem('Orders'))
    : [];

const Filter_phone =
  localStorage.getItem('Filter_phone') !== null
    ? JSON.parse(localStorage.getItem('Filter_phone'))
    : [];

const Versus =
  localStorage.getItem('Versus_phone') !== null
    ? JSON.parse(localStorage.getItem('Versus_phone'))
    : [];

type Categories = {
  id: number;
  namecat: string;
};
type ShopState = {
  phones: IPhones[];
  categories: Categories[];
  All_category: boolean;
  orders: IPhones[];
  filter_phone: IPhones[];
  versus_Phone: IPhones[];
  filterSearch: [];
  sum: number;
  maxPrice: number;
  maxThreads: number;
  nameCategory: string;
  availableInOrder: boolean;
};
const initialState: ShopState = {
  phones: [
    {
      id: 1,
      name: 'Apple iPhone 11 128GB',
      company: 'Apple',
      short_desc: 'something',
      img: 'Apple_Iphone11_128.jpg',
      threads_name: 'Apple A13 Bionic',
      front_camera: '12MP',
      main_camera: '12MP',
      count: 1,
      quantity_threads: 6,
      memory: 128,
      price: 10000,
      click: false,
      click_versus: false,
    },
    {
      id: 2,
      name: 'Apple iPhone 13 128GB',
      company: 'Apple',
      short_desc: 'something',
      img: 'Apple_Iphone13_128.jpg',
      threads_name: 'Apple A14 Bionic',
      front_camera: '12MP',
      main_camera: '12MP',
      price: 15000,
      count: 1,
      quantity_threads: 6,
      memory: 128,
      click: false,
      click_versus: false,
    },
    {
      id: 3,
      name: 'Apple iPhone 13 PRO 128GB',
      company: 'Apple',
      short_desc: 'something',
      img: 'Apple_Iphone13_pro_128.jpg',
      threads_name: 'Apple A15 Bionic',
      front_camera: '12MP',
      main_camera: '12MP',
      price: 17000,
      count: 1,
      quantity_threads: 6,
      memory: 128,
      click: false,
      click_versus: false,
    },
    {
      id: 4,
      name: 'Apple iPhone 13 PRO MAX 128GB',
      company: 'Apple',
      short_desc: 'something',
      img: 'Apple_Iphone13_pro_max_128.jpg',
      threads_name: 'Apple A15 Bionic',
      front_camera: '12MP',
      main_camera: '12MP',
      price: 20000,
      count: 1,
      quantity_threads: 6,
      memory: 128,
      click: false,
      click_versus: false,
    },
    {
      id: 5,
      name: 'Infinix Note 10 PRO 8/128GB',
      company: 'Infinix',
      short_desc: 'something',
      img: 'Infinix_note10_pro_8_128.jpg',
      threads_name: 'MediaTek Helio G95',
      main_camera: '64MP + 8MP + 2MP + 2MP',
      front_camera: '16MP',
      price: 7000,
      count: 1,
      quantity_threads: 8,
      memory: 128,
      click: false,
      click_versus: false,
    },
    {
      id: 6,
      name: 'Motorola Moto G60 6/128GB',
      company: 'Motorola',
      short_desc: 'something',
      img: 'Motorola_moto_g60_6_128.jpg',
      threads_name: 'Qualcomm Snapdragon 732G',
      main_camera: '108MP + 8MP + 2MP',
      front_camera: '32MP',
      price: 9000,
      count: 1,
      quantity_threads: 8,
      memory: 128,
      click: false,
      click_versus: false,
    },
    {
      id: 7,
      name: 'Samsung Galaxy A32 4/64GB',
      company: 'Samsung',
      short_desc: 'something',
      img: 'Samsung_galaxy_a32_4_64.jpg',
      threads_name: 'MediaTek Helio G80',
      main_camera: '64MP + 8MP + 5MP + 5MP',
      front_camera: '20MP',
      price: 5000,
      count: 1,
      quantity_threads: 8,
      memory: 64,
      click: false,
      click_versus: false,
    },
    {
      id: 8,
      name: 'Samsung Galaxy A32 4/128GB',
      company: 'Samsung',
      short_desc: 'something',
      img: 'Samsung_galaxy_a32_4_128.jpg',
      threads_name: 'MediaTek Helio G80',
      main_camera: '64MP + 8MP + 5MP + 5MP',
      front_camera: '20MP',
      price: 10000,
      count: 1,
      quantity_threads: 8,
      memory: 128,
      click: false,
      click_versus: false,
    },
    {
      id: 9,
      name: 'Samsung Galaxy A53 5G 6/128GB',
      company: 'Samsung',
      short_desc: 'something',
      img: 'Samsung_galaxy_a53_5g_6_128.jpg',
      threads_name: 'Samsung Exynos 1280',
      main_camera: '64MP + 12MP + 5MP + 5MP',
      front_camera: '32MP',
      price: 17000,
      count: 1,
      quantity_threads: 8,
      memory: 128,
      click: false,
      click_versus: false,
    },
    {
      id: 10,
      name: 'Samsung Galaxy M32 6/128GB',
      company: 'Samsung',
      short_desc: 'something',
      img: 'Samsung_galaxy_m32_6_128.jpg',
      threads_name: 'MediaTek Helio G80',
      main_camera: '64MP + 8MP + 2MP + 2MP',
      front_camera: '20MP',
      price: 17000,
      count: 1,
      quantity_threads: 8,
      memory: 128,
      click: false,
      click_versus: false,
    },
    {
      id: 11,
      name: 'Samsung Galaxy M52 5G 6/128GB',
      company: 'Samsung',
      short_desc: 'something',
      img: 'Samsung_galaxy_m52_5g_6_128.jpg',
      threads_name: 'Qualcomm Snapdragon 778G',
      main_camera: '64MP + 12MP + 5MP',
      front_camera: '32MP',
      price: 11000,
      count: 1,
      quantity_threads: 8,
      memory: 128,
      click: false,
      click_versus: false,
    },
    {
      id: 12,
      name: 'Samsung Galaxy M53 5G 6/128GB',
      company: 'Samsung',
      short_desc: 'something',
      img: 'Samsung_galaxy_m53_5g_6_128.jpg',
      threads_name: 'Qualcomm Snapdragon 778G',
      main_camera: '64MP + 12MP + 5MP',
      front_camera: '32MP',
      price: 17000,
      count: 1,
      quantity_threads: 8,
      memory: 128,
      click: false,
      click_versus: false,
    },
  ],
  categories: [
    { id: 1, namecat: 'All' },
    { id: 2, namecat: 'Apple' },
    { id: 3, namecat: 'Samsung' },
    { id: 4, namecat: 'Infinix' },
  ],
  All_category: false,
  orders: Orders,
  filter_phone: Filter_phone,
  versus_Phone: Versus,
  filterSearch: [],
  sum: 0,
  maxPrice: 0,
  maxThreads: 0,
  nameCategory: '',
  availableInOrder: false,
};

const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    addToOrder(state, action: PayloadAction<number>) {
      state.availableInOrder = false;
      state.orders.map((order) => {
        if (order.id === action.payload) {
          order.count = order.count + 1;
          state.availableInOrder = true;
        }
      });
      if (state.availableInOrder === false) {
        state.phones.map((phone) => {
          if (phone.id === action.payload) {
            phone.click = true;
            state.orders.push(phone);
          }
        });
      }
    },
    removeCount(state, action: PayloadAction<number>) {
      state.orders.map((order) => {
        if (order.id === action.payload) {
          order.count = order.count - 1;
        }
        if (order.count === 0) {
          state.orders = state.orders.filter(
            (order) => order.id !== action.payload,
          );
          state.phones.map((phone) => {
            if (phone.id === action.payload) {
              phone.click = false;
            }
          });
        }
      });
    },
    //   filterCategories(state, action: PayloadAction<string>): void {
    //     state.filter_phone = [];
    //     const filter = JSON.parse(localStorage.getItem('Filter_phone'));
    //     state.phones = filter;
    //     if (action.payload === 'All') {
    //       state.phones.forEach((el: IPhones) => state.filter_phone.push(el));
    //       state.All_category = true;
    //     } else {
    //       state.phones.some((phones: IPhones) => {
    //         phones.company === action.payload && state.filter_phone.push(phones);
    //       });
    //       state.All_category = false;
    //       state.nameCategory = action.payload;
    //     }
    //   },
    //   filterSearchPhone(state, action: PayloadAction<string>) {
    //     state.filterSearch = [];
    //     state.phones.some((phone: IPhones) => {
    //       action.payload !== '' &&
    //         phone.name.toLowerCase().startsWith(action.payload.toLowerCase()) &&
    //         state.filterSearch.push(phone);
    //     });
    //   },
    //   startPhone(state): void {
    //     if (localStorage.getItem('Filter_phone') === null) {
    //       state.filter_phone = [];
    //       state.phones.forEach((el) => state.filter_phone.push(el));
    //       localStorage.setItem(
    //         'Filter_phone',
    //         JSON.stringify(state.filter_phone),
    //       );
    //     }
    //     localStorage.getItem('Filter_phone');
    //     state.All_category = true;
    //   },
    //   addToOrder(state, action: PayloadAction<number>): void {
    //     let isArr = false;
    //     state.orders.map((el) => {
    //       if (el.id === action.payload) {
    //         el.count = el.count + 1;
    //         isArr = true;
    //       }
    //     });
    //     if (!isArr) {
    //       state.filter_phone = [];
    //       state.phones.some(
    //         (phone) => phone.id === action.payload && state.orders.push(phone),
    //       );
    //       const filter = JSON.parse(localStorage.getItem('Filter_phone'));
    //       state.phones = filter;
    //       state.filter_phone = state.phones.map((phone) =>
    //         phone.id === action.payload
    //           ? { ...phone, click: (phone.click = true) }
    //           : phone,
    //       );

    //       localStorage.setItem(
    //         'Filter_phone',
    //         JSON.stringify(state.filter_phone),
    //       );
    //     }
    //     localStorage.setItem('Orders', JSON.stringify(state.orders));
    //   },
    //   afterAddOrder(state, action: PayloadAction<string>): void {
    //     if (!state.All_category) {
    //       state.filter_phone = [];
    //       state.phones.forEach((phone) =>
    //         phone.company === action.payload
    //           ? state.filter_phone.push(phone)
    //           : null,
    //       );
    //     } else {
    //       state.filter_phone = [];
    //       state.phones.forEach((el) => state.filter_phone.push(el));
    //     }
    //   },
    //   MinusCountOrder(state, action: PayloadAction<number>): void {
    //     state.orders = state.orders.map((el) =>
    //       el.id === action.payload ? { ...el, count: el.count - 1 } : el,
    //     );
    //     localStorage.setItem('Orders', JSON.stringify(state.orders));
    //   },
    //   filterOrderDeleteClick(state, action: PayloadAction<number>): void {
    //     const filter = JSON.parse(localStorage.getItem('Filter_phone'));
    //     state.phones = filter;
    //     state.filter_phone = state.phones.map((el) =>
    //       el.id === action.payload ? { ...el, click: (el.click = false) } : el,
    //     );
    //     localStorage.setItem('Filter_phone', JSON.stringify(state.filter_phone));
    //   },
    //   filterAfterDeleteOrder(state): void {
    //     if (state.All_category !== true) {
    //       state.filter_phone = [];
    //       state.phones.forEach(
    //         (el) =>
    //           el.company === state.nameCategory && state.filter_phone.push(el),
    //       );
    //     } else {
    //       state.filter_phone = [];
    //       state.phones.forEach((el) => state.filter_phone.push(el));
    //     }
    //   },
    //   deleteOrder(state, action: PayloadAction<number>): void {
    //     state.orders = state.orders.filter((el) => el.id !== action.payload);
    //     localStorage.setItem('Orders', JSON.stringify(state.orders));
    //   },
    //   addToVersus(state, action: PayloadAction<number>): void {
    //     let isArr = false;
    //     state.versus_Phone.forEach((el) => {
    //       if (el.id === action.payload) {
    //         isArr = true;
    //       }
    //     });
    //     if (!isArr) {
    //       state.phones.filter(
    //         (phone) =>
    //           phone.id === action.payload && state.versus_Phone.push(phone),
    //       );
    //       const filter = JSON.parse(localStorage.getItem('Filter_phone'));
    //       state.phones = filter;
    //       state.filter_phone = state.phones.map((el) =>
    //         el.id === action.payload
    //           ? { ...el, click_versus: (el.click_versus = true) }
    //           : el,
    //       );
    //       localStorage.setItem(
    //         'Versus_phone',
    //         JSON.stringify(state.versus_Phone),
    //       );
    //       localStorage.setItem(
    //         'Filter_phone',
    //         JSON.stringify(state.filter_phone),
    //       );
    //     }
    //   },
    //   DeleteInVersus(state, action: PayloadAction<number>): void {
    //     state.versus_Phone = state.versus_Phone.filter(
    //       (el) => el.id !== action.payload,
    //     );
    //     localStorage.setItem('Versus_phone', JSON.stringify(state.versus_Phone));
    //     const filter = JSON.parse(localStorage.getItem('Filter_phone'));
    //     state.phones = filter;
    //     state.filter_phone = state.phones.map((el) =>
    //       el.id === action.payload
    //         ? { ...el, click_versus: (el.click_versus = false) }
    //         : el,
    //     );
    //     localStorage.setItem('Filter_phone', JSON.stringify(state.filter_phone));
    //   },
    //   addcount(state, action: PayloadAction<number>) {
    //     state.orders = state.orders.map((el) =>
    //       el.id === action.payload ? { ...el, count: el.count + 1 } : el,
    //     );
    //     localStorage.setItem('Orders', JSON.stringify(state.orders));
    //   },
    //   versusMaxPrice(state) {
    //     state.versus_Phone.length > 0 &&
    //       state.versus_Phone.reduce((acc, curr) => {
    //         if (acc.price > curr.price) {
    //           return (state.maxPrice = acc);
    //         } else return (state.maxPrice = curr);
    //       });
    //   },
    //   versusMaxThreads(state) {
    //     state.versus_Phone.length > 0 &&
    //       state.versus_Phone.reduce((acc, curr) => {
    //         if (acc.quantity_threads > curr.quantity_threads) {
    //           return (state.maxThreads = acc);
    //         } else return (state.maxThreads = curr);
    //       });
    //   },
    //   countSum(state) {
    //     state.sum = 0;
    //     state.orders.forEach((el) => {
    //       state.sum += el.count * el.price;
    //     });
    //   },
  },
});
export const { addToOrder, removeCount } = shopSlice.actions;
export default shopSlice.reducer;
