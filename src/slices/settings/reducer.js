import {
  createSlice
} from "@reduxjs/toolkit"
import {
  getSetting,
} from "./thunk"

const initialState = {
  "product": {
    "image": [],
    "content": "",
  },
  "setting": {
    "short_name": "",
    "full_name": "",
    "logo": "",
    "favicon": "",
    "tax_code": "",
    "business_registration": "",
    "keywords": "",
    "address": "",
    "phone": "",
    "email": "",
    "homepage": {
      "title": "",
      "image": "",
      "content": "",
      "products": [],
    },
    "services": {
      "title": "",
      "image": "",
      "content": "",
    },
  },
  "is_success": false,
  "is_loading": false,
  "is_submitting": false,
  "msg": ""
};

export default createSlice({
  "name": "settings",
  "initialState": {
    "setting": {
      "data": initialState.setting,
      "msg": initialState.msg,
      "is_submitting": initialState.is_submitting,
      "is_loading": initialState.is_loading,
      "is_success": initialState.is_success,
    },
  },
  "reducers": {},
  "extraReducers": (builder) => {
    builder
      .addCase(getSetting.pending, (state, _action) => {
        state.setting = {
          "data": initialState.setting,
          "msg": initialState.msg,
          "is_submitting": initialState.is_submitting,
          "is_loading": initialState.is_loading,
          "is_success": initialState.is_success,
        };
      })
      .addCase(getSetting.fulfilled, (state, _action) => {
        state.setting = {
          "data": _action.payload?.data?.setting ? {
            "short_name": _action.payload.data.setting.short_name ?? initialState.setting.short_name,
            "full_name": _action.payload.data.setting.full_name ?? initialState.setting.full_name,
            "logo": _action.payload.data.setting.logo ? process.env.REACT_APP_PUBLIC_URL + _action.payload.data.setting.logo : initialState.setting.logo,
            "favicon": _action.payload.data.setting.favicon ? process.env.REACT_APP_PUBLIC_URL + _action.payload.data.setting.favicon : initialState.setting.favicon,
            "tax_code": _action.payload.data.setting.tax_code ?? initialState.setting.tax_code,
            "business_registration": _action.payload.data.setting.business_registration ?? initialState.setting.business_registration,
            "keywords": _action.payload.data.setting.keywords ?? initialState.setting.keywords,
            "address": _action.payload.data.setting.address ?? initialState.setting.address,
            "phone": _action.payload.data.setting.phone ?? initialState.setting.phone,
            "email": _action.payload.data.setting.email ?? initialState.setting.email,
            "homepage": _action.payload.data.setting.homepage ? {
              "title": _action.payload.data.setting.homepage.title ?? initialState.setting.homepage.title,
              "image": _action.payload.data.setting.homepage.image ? process.env.REACT_APP_PUBLIC_URL + _action.payload.data.setting.homepage.image : initialState.setting.homepage.image,
              "content": _action.payload.data.setting.homepage.content ?? initialState.setting.homepage.content,
              "products": _action.payload.data.setting.homepage.products.map((product) => ({
                "content": product.content ?? initialState.product.content,
                "images": product.images ? product.images.map((image) => process.env.REACT_APP_PUBLIC_URL + image) : initialState.product.image,
              })),
            } : initialState.setting.homepage,
            "services": _action.payload.data.setting.services ? {
              "title": _action.payload.data.setting.services.title ?? initialState.setting.services.title,
              "image": _action.payload.data.setting.services.image ? process.env.REACT_APP_PUBLIC_URL + _action.payload.data.setting.services.image : initialState.setting.services.image,
              "content": _action.payload.data.setting.services.content ?? initialState.setting.services.content,
            } : initialState.setting.services,
          } : initialState.setting,
          "msg": initialState.msg,
          "is_submitting": initialState.is_submitting,
          "is_loading": false,
          "is_success": _action.payload?.is_success ?? initialState.is_success,
        };
      })
      .addCase(getSetting.rejected, (state, _action) => {
        state.setting = {
          "data": initialState.setting,
          "msg": _action.payload?.msg ?? initialState.msg,
          "is_submitting": initialState.is_submitting,
          "is_loading": initialState.is_loading,
          "is_success": false,
        };
      })
  }
});