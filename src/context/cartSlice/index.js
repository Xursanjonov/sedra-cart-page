import { createSlice } from "@reduxjs/toolkit";
import { getStorage, setStorage } from "../../lib";

const initialState = {
  value: getStorage("cart-shop")?.value || [],
  totalCount: getStorage("total-count")?.totalCount || 0,
  totalPrice: getStorage("total-price")?.totalPrice || 0,
};

const calculateTotals = (value) => {
  const totalCount = value.reduce((acc, item) => acc + item.shopCount, 0);
  const totalPrice = value.reduce(
    (acc, item) => acc + item.shopCount * item.price,
    0
  );
  return { totalCount, totalPrice };
};

export const cartsSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const index = state.value.findIndex((el) => el.id === payload.id);
      if (index === -1) {
        state.value = [...state.value, { ...payload, shopCount: 1 }];
      } else {
        state.value = state.value.map((cart) =>
          cart.id === payload.id
            ? { ...cart, shopCount: cart.shopCount + 1 }
            : cart
        );
      }
      const totals = calculateTotals(state.value);
      state.totalCount = totals.totalCount;
      state.totalPrice = totals.totalPrice;
      setStorage("cart-shop", {
        ...state,
        totalCount: state.totalCount,
        totalPrice: state.totalPrice,
      });
    },
    addToShopCount: (state, { payload }) => {
      const index = state.value.findIndex((el) => el.id === payload);
      if (index !== -1) {
        state.value = state.value.map((cart) =>
          cart.id === payload
            ? { ...cart, shopCount: cart.shopCount + 1 }
            : cart
        );
        const totals = calculateTotals(state.value);
        state.totalCount = totals.totalCount;
        state.totalPrice = totals.totalPrice;
        setStorage("cart-shop", {
          ...state,
          totalCount: state.totalCount,
          totalPrice: state.totalPrice,
        });
      }
    },
    removeToShopCount: (state, { payload }) => {
      const index = state.value.findIndex((el) => el.id === payload);
      if (index !== -1) {
        const updatedCart = state.value.map((el, idx) =>
          idx === index ? { ...el, shopCount: el.shopCount - 1 } : el
        );
        state.value = updatedCart.filter((cart) => cart.shopCount > 0);
        const totals = calculateTotals(state.value);
        state.totalCount = totals.totalCount;
        state.totalPrice = totals.totalPrice;
        setStorage("cart-shop", {
          ...state,
          totalCount: state.totalCount,
          totalPrice: state.totalPrice,
        });
      }
    },
    deleteToCart: (state, { payload }) => {
      state.value = state.value.filter((cart) => cart.id !== payload);
      const totals = calculateTotals(state.value);
      state.totalCount = totals.totalCount;
      state.totalPrice = totals.totalPrice;
      setStorage("cart-shop", {
        ...state,
        totalCount: state.totalCount,
        totalPrice: state.totalPrice,
      });
    },
  },
});

export const { addToCart, addToShopCount, removeToShopCount, deleteToCart } =
  cartsSlice.actions;

export default cartsSlice.reducer;
