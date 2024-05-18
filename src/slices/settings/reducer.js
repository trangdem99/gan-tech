import {
  createSlice 
} from "@reduxjs/toolkit"
import {
  getSetting,
} from "./thunk"

const initialState = {
  "product": {
    "name": "",
   "slug": "",
   "image": "",
   "description": {
      "title": "",
      "short_content": "",
      "full_content": ""
    }
  },
  "service": {
    "name": "",
   "slug": "",
   "image": "",
   "description": {
      "title": "",
      "short_content": "",
      "full_content": ""
    }
  },
  "carousel": {
    "name": "",
    "image": ""
  },
  "setting": {
    "short_name": "",
    "full_name": "",
    "logo": "",
    "favicon": "",
    "description": {
      "short_content": "",
      "full_content": ""
    },
    "keywords": "",
    "address": "",
    "phone": "",
    "email": "",
    "products": [],
    "services": [],
    "carousels": [],
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
            "logo": _action.payload.data.setting.logo ? process.env.PUBLIC_URL + _action.payload.data.setting.logo : initialState.setting.logo,
            "favicon": _action.payload.data.setting.favicon ? process.env.PUBLIC_URL + _action.payload.data.setting.favicon : initialState.setting.favicon,
            "description": {
              "short_content": _action.payload.data.setting.description.short_content ?? initialState.setting.description.short_content,
              "full_content": _action.payload.data.setting.description.full_content ?? initialState.setting.description.full_content,
            },
            "keywords": _action.payload.data.setting.keywords ?? initialState.setting.keywords,
            "address": _action.payload.data.setting.address ?? initialState.setting.address,
            "phone": _action.payload.data.setting.phone ?? initialState.setting.phone,
            "email": _action.payload.data.setting.email ?? initialState.setting.email,
            "products": _action.payload.data.setting.products ? _action.payload.data.setting.products.map((product) => ({
              "name": product.name ?? initialState.product.name,
              "slug": product.slug ?? initialState.product.slug,
              "image": product.image ? process.env.PUBLIC_URL + product.image : initialState.product.image,
              "description": {
                "title": product.description.title ?? initialState.product.description.title,
                "short_content": product.description.short_content ?? initialState.product.description.short_content,
                "full_content": product.description.full_content ?? initialState.product.description.full_content,
              }
            })) : initialState.setting.products,
            "services": _action.payload.data.setting.services ? _action.payload.data.setting.services.map((service) => ({
              "name": service.name ?? initialState.service.name,
              "slug": service.slug ?? initialState.service.slug,
              "image": service.image ? process.env.PUBLIC_URL + service.image : initialState.service.image,
              "description": {
                "title": service.description.title ?? initialState.service.description.title,
                "short_content": service.description.short_content ?? initialState.service.description.short_content,
                "full_content": service.description.full_content ?? initialState.service.description.full_content,
              }
            })) : initialState.setting.services,
            "carousels": _action.payload.data.setting.carousels ? _action.payload.data.setting.carousels.map((carousel) => ({ 
              "name": carousel.name ?? initialState.carousel.name,
              "image": carousel.image ? process.env.PUBLIC_URL + carousel.image : initialState.carousel.image,
            })) : initialState.setting.carousels,
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