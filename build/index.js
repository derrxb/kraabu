var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toESM(require("react"));
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// server.js
init_react();
var import_express = __toESM(require("express"));
var import_compression = __toESM(require("compression"));
var import_morgan = __toESM(require("morgan"));
var import_express2 = require("@remix-run/express");

// server-entry-module:@remix-run/dev/server-build
var server_build_exports = {};
__export(server_build_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = require("react-dom/server");
var import_remix = __toESM(require_remix());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/Users/derrickbol/dev/kraabu/app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
init_react();
var import_remix2 = __toESM(require_remix());

// app/styles/app.css
var app_default = "/build/_assets/app-GN4XBQT6.css";

// route:/Users/derrickbol/dev/kraabu/app/root.tsx
var links = () => {
  return [{ rel: "stylesheet", href: app_default }];
};
var meta = () => {
  return { title: "New Remix App" };
};
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en",
    className: "h-full w-full"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement(import_remix2.Meta, null), /* @__PURE__ */ React.createElement(import_remix2.Links, null)), /* @__PURE__ */ React.createElement("body", {
    className: "h-full w-full"
  }, /* @__PURE__ */ React.createElement(import_remix2.Outlet, null), /* @__PURE__ */ React.createElement(import_remix2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix2.Scripts, null), /* @__PURE__ */ React.createElement(import_remix2.LiveReload, null)));
}

// route:/Users/derrickbol/dev/kraabu/app/routes/payments/ekyash/initiate.tsx
var initiate_exports = {};
__export(initiate_exports, {
  action: () => action
});
init_react();
var import_remix3 = __toESM(require_remix());

// app/domain/payments/services/create-pending-ekyash-payment.ts
init_react();

// app/requests/create-pending-ekyash-payment.ts
init_react();
var import_joi = __toESM(require("joi"));
var createPendingEkyashPaymentSchema = import_joi.default.object({
  invoiceno: import_joi.default.string().required(),
  currency: import_joi.default.string().required(),
  total: import_joi.default.string().required(),
  hashkey: import_joi.default.string().required(),
  gateway: import_joi.default.string().required()
});
var create_pending_ekyash_payment_default = createPendingEkyashPaymentSchema;

// app/domain/payments/mappers/arcadier-payment-mapper.ts
init_react();
var import_axios = __toESM(require("axios"));
var import_nanoid = require("nanoid");

// app/config/index.server.ts
init_react();
var import_supabase_js = require("@supabase/supabase-js");
var import_config = require("dotenv/config");
var ekyash = {
  api: "https://mw-api-preprod.e-kyash.com/api/qrpos-app",
  routes: {
    base: "https://mw-api-preprod.e-kyash.com/api/qrpos-app",
    orderDetails: "https://giggedbz.arcadier.io/user/checkout/order-details"
  },
  headers: {
    "Content-Type": "application/json",
    "Accept-Language": "en",
    "The-Timezone-IANA": "Belize",
    WL: "bibi",
    IMGE: "APPKEY17-07A8-4BAF-AA0F-B1568C5017A3",
    appVersion: "99.1.1",
    operatingSystem: "Android"
  },
  credentials: {
    SID: 2324518403,
    "Pin Hash": "cd801fc54c8da4ee690cf00ed34f6beb"
  },
  data: {
    phone: "5016376574"
  }
};
var supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
var supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;
var supabase = (0, import_supabase_js.createClient)(supabaseUrl, supabaseAnonKey);

// app/domain/payments/entities/payment.ts
init_react();
var Payment = class {
  constructor({
    additionalData,
    createdAt,
    currency,
    description,
    id,
    invoice,
    status,
    user
  }) {
    this.additionalData = additionalData;
    this.createdAt = createdAt;
    this.currency = currency;
    this.description = description;
    this.id = id;
    this.invoice = invoice;
    this.status = status;
    this.user = user;
  }
  isValid() {
    return this.currency.amount > 0;
  }
  isPending() {
    return this.status === 0 /* Pending */;
  }
  canMarkInProgress() {
    return this.isPending();
  }
};
var payment_default = Payment;

// app/domain/payments/mappers/arcadier-payment-mapper.ts
var ArcadierPaymentMapper = class {
  getPending(data) {
    return this.buildEntity(data);
  }
  async find(data) {
    const response = await import_axios.default.get(`${ekyash.routes.orderDetails}?gateway=${data.gateway}&invoiceNo=${data.invoiceno}&paykey=${data.paymentKey}&hashkey=${data.hashkey}`);
    return null;
  }
  buildEntity(data) {
    return new payment_default({
      user: "giggedBz",
      status: 0 /* Pending */,
      currency: {
        amount: Number(data.total),
        type: data.currency
      },
      description: data.invoiceno,
      invoice: data.invoiceno,
      additionalData: {
        gateway: data.gateway,
        hashkey: data.hashkey,
        paymentKey: (0, import_nanoid.nanoid)()
      }
    });
  }
};
var arcadier_payment_mapper_default = ArcadierPaymentMapper;

// app/domain/payments/repositories/payment-repository.ts
init_react();
var PaymentRepository = class {
  static async rebuildEntity(data) {
    return new payment_default({
      additionalData: data == null ? void 0 : data.additionalData,
      currency: {
        amount: data == null ? void 0 : data.amount,
        type: data.currency
      },
      description: data == null ? void 0 : data.description,
      id: data.id,
      invoice: data.invoice,
      status: data.status,
      user: data.user
    });
  }
  static async createPending(data) {
    var _a;
    const result = await supabase.from("payments").insert([
      {
        additionalData: data.additionalData,
        amount: data.currency.amount,
        currency: data.currency.type,
        description: data.description,
        invoice: data.invoice,
        status: data.status,
        user: data.user
      }
    ]);
    return this.rebuildEntity((_a = result.body) == null ? void 0 : _a[0]);
  }
  static async getPaymentByInvoice(invoice) {
    var _a;
    const result = await supabase.from("payments").select("*").eq("invoice", invoice);
    return this.rebuildEntity((_a = result.body) == null ? void 0 : _a[0]);
  }
  static async setPaymentQrCodeUrl(payment, qrCodeUrl) {
    var _a;
    const result = await supabase.from("payments").upsert({ additionalData: { qrCodeUrl } }).eq("invoice", payment.invoice);
    return this.rebuildEntity((_a = result.body) == null ? void 0 : _a[0]);
  }
};

// app/domain/payments/services/create-pending-ekyash-payment.ts
var CreatePendingEkyashPayment = class {
  constructor(request) {
    this.request = request;
    this.payment = null;
  }
  async verifyPaymentParams() {
    const body = await this.request.json();
    this.payment = await create_pending_ekyash_payment_default.validateAsync(__spreadValues({}, body));
  }
  async call() {
    await this.verifyPaymentParams();
    if (!this.payment) {
      throw new Error("No data from arcadier received.");
    }
    const pendingPayment = new arcadier_payment_mapper_default().getPending(this.payment);
    const payment = await PaymentRepository.createPending(pendingPayment);
    return payment;
  }
};

// route:/Users/derrickbol/dev/kraabu/app/routes/payments/ekyash/initiate.tsx
var action = async ({ request }) => {
  var _a;
  try {
    const payment = await new CreatePendingEkyashPayment(request).call();
    return (0, import_remix3.json)((_a = payment.additionalData) == null ? void 0 : _a.paymentKey, 200);
  } catch (e) {
    return (0, import_remix3.json)({
      message: "Something unexpected happened. Please try again"
    }, 422);
  }
};

// route:/Users/derrickbol/dev/kraabu/app/routes/payments/ekyash/index.tsx
var ekyash_exports = {};
__export(ekyash_exports, {
  action: () => action2,
  blockInvalidNumberChar: () => blockInvalidNumberChar,
  default: () => EKyash,
  loader: () => loader,
  meta: () => meta2
});
init_react();
var import_remix4 = __toESM(require_remix());

// app/domain/payments/services/request-ekyash-payment.ts
init_react();

// app/domain/payments/library/ekyash-api.ts
init_react();
var import_axios2 = __toESM(require("axios"));
var import_crypto_js = require("crypto-js");
var getAuthorization = async (data) => {
  const response = await import_axios2.default.post(`${ekyash.api}/authorization`, __spreadValues({}, data));
  return response.data;
};
var createNewInvoice = async (data) => {
  const response = await import_axios2.default.post(`${ekyash.api}/create-new-invoice`, __spreadValues({}, data));
  return response.data;
};

// app/domain/payments/services/request-ekyash-payment.ts
var RequestEkyashPayment = class {
  constructor(payment, user) {
    this.payment = payment;
    this.user = user;
  }
  async call() {
    const session = await getAuthorization({
      Sid: ekyash.credentials.SID,
      pinHash: ekyash.credentials["Pin Hash"],
      pushKey: ""
    });
    let paymentResponse = await createNewInvoice({
      amount: this.payment.currency.amount,
      description: this.payment.description,
      currency: "BZD",
      orderId: this.payment.invoice,
      session: session.Session
    });
    this.payment = await PaymentRepository.setPaymentQrCodeUrl(this.payment, paymentResponse.qrUrl);
  }
};

// route:/Users/derrickbol/dev/kraabu/app/routes/payments/ekyash/index.tsx
var meta2 = () => {
  return {
    title: "Complete GiggedBz Booking Payment | Krabuu",
    description: "You're almost done with your GiggedBz booking. Once payment is completed, your booking will be confirmed."
  };
};
var loader = async ({ request }) => {
  const searchParams = new URL(request.url).searchParams;
  const invoiceNo = searchParams.get("invoiceNo");
  const paymentKey = searchParams.get("paykey");
  if (!invoiceNo || !paymentKey) {
    return (0, import_remix4.json)({ message: "no payment with this invoice no" }, 404);
  }
  const payment = await PaymentRepository.getPaymentByInvoice(invoiceNo);
  return (0, import_remix4.json)({
    alive: true,
    payment
  });
};
var action2 = async ({ request }) => {
  const formData = await request.formData();
  if (!formData.get("name") || !formData.get("phone")) {
    throw new Error("Email and phone are both required.");
  }
  const searchParams = new URL(request.url).searchParams;
  const invoiceNo = searchParams.get("invoiceNo");
  if (!invoiceNo) {
    return (0, import_remix4.json)({ message: "no payment with this invoice no" }, 404);
  }
  const payment = await PaymentRepository.getPaymentByInvoice(invoiceNo);
  await new RequestEkyashPayment(payment, {
    name: formData.get("name"),
    phoneNumber: formData.get("phoneNumber")
  }).call();
};
var blockInvalidNumberChar = (e) => {
  return ["e", "E", "+"].includes(e.key) && e.preventDefault();
};
function EKyash() {
  const data = (0, import_remix4.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "h-full w-full flex items-center justify-center text-gray-800"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "my-auto leading-relaxed"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col pb-4 opacity-75 hover:opacity-100"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-3xl font-bold"
  }, "Krabuu"), /* @__PURE__ */ React.createElement("span", {
    className: "text-gray-600"
  }, "Securely pay online with Belize's various digital wallets")), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col border-[1px] container shadow-md rounded p-4 w-[560px] min-h-[480px]"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-xl font-medium pb-4 text-gray-900"
  }, "ReGiggedBz is requesting payment for your order using the EKyash digital wallet."), /* @__PURE__ */ React.createElement("div", {
    className: "w-full flex flex-col items-center mb-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-row items-end mr-2"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text-7xl font-bold text-indigo-500"
  }, "$", data.payment.currency.amount), /* @__PURE__ */ React.createElement("span", {
    className: "text-2xl font-medium text-indigo-400"
  }, data.payment.currency.type)), /* @__PURE__ */ React.createElement("span", {
    className: "text-gray-900"
  }, data.payment.invoice)), /* @__PURE__ */ React.createElement("span", {
    className: "text-gray-500 pb-4"
  }, "Please enter your phone number linked to your EKyash account in order to receive your payment request."), /* @__PURE__ */ React.createElement(import_remix4.Form, {
    action: "/payments/ekyash",
    method: "post",
    className: "mb-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col pb-4"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "name",
    className: "font-medium text-gray-600"
  }, "Your name"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "name",
    id: "name",
    required: true,
    className: "text-xl focus:ring-indigo-500 focus:border-indigo-500 block border-2 w-full pl-7 pr-12 font-normal border-gray-300 rounded-md py-2",
    placeholder: "i.e. John Doe"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col pb-4"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "phone",
    className: "font-medium text-gray-600"
  }, "Phone"), /* @__PURE__ */ React.createElement("input", {
    type: "tel",
    name: "phone",
    id: "phone",
    required: true,
    pattern: "[0-9]{3}-[0-9]{3}-[0-9]{4}",
    className: "text-xl focus:ring-indigo-500 focus:border-indigo-500 block border-2 w-full pl-7 pr-12 font-normal border-gray-300 rounded-md py-2",
    placeholder: "i.e. 501-621-1234",
    onKeyDown: blockInvalidNumberChar
  })), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "w-full px-4 py-2 text-xl border-2 rounded-md focus:ring focus:ring-indigo-100 border-indigo-500 bg-indigo-600 text-white"
  }, "Get Payment Request")))));
}

// route:/Users/derrickbol/dev/kraabu/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});
init_react();
function Index() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "h-full w-full flex items-center justify-center"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "font-bold text-3xl text-gray-800"
  }, "Quickly integrate and accept online payments in Belize with various supported e-wallets!"));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "7a64d9f6", "entry": { "module": "/build/entry.client-ANDNFDEO.js", "imports": ["/build/_shared/chunk-GO7C5GN2.js", "/build/_shared/chunk-P2FTGPOX.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-7NH7BMHR.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-J3MPNNQZ.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/payments/ekyash/index": { "id": "routes/payments/ekyash/index", "parentId": "root", "path": "payments/ekyash", "index": true, "caseSensitive": void 0, "module": "/build/routes/payments/ekyash/index-QPHGVBPH.js", "imports": ["/build/_shared/chunk-6SKWSLUF.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/payments/ekyash/initiate": { "id": "routes/payments/ekyash/initiate", "parentId": "root", "path": "payments/ekyash/initiate", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/payments/ekyash/initiate-IQKTLCOW.js", "imports": ["/build/_shared/chunk-6SKWSLUF.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-7A64D9F6.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/payments/ekyash/initiate": {
    id: "routes/payments/ekyash/initiate",
    parentId: "root",
    path: "payments/ekyash/initiate",
    index: void 0,
    caseSensitive: void 0,
    module: initiate_exports
  },
  "routes/payments/ekyash/index": {
    id: "routes/payments/ekyash/index",
    parentId: "root",
    path: "payments/ekyash",
    index: true,
    caseSensitive: void 0,
    module: ekyash_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};

// server.js
var app = (0, import_express.default)();
app.use((0, import_compression.default)());
app.disable("x-powered-by");
app.use("/build", import_express.default.static("public/build", { immutable: true, maxAge: "1y" }));
app.use(import_express.default.static("public/build", { maxAge: "1h" }));
app.use((0, import_morgan.default)("tiny"));
app.all("*", (0, import_express2.createRequestHandler)({
  build: server_build_exports,
  mode: "development"
}));
var port = process.env.PORT || 3e3;
app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
/**
 * @remix-run/node v1.2.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.2.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.2.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICIuLi9zZXJ2ZXIuanMiLCAic2VydmVyLWVudHJ5LW1vZHVsZTpAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGQiLCAiLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGU6L1VzZXJzL2RlcnJpY2tib2wvZGV2L2tyYWFidS9hcHAvcm9vdC50c3giLCAicm91dGU6L1VzZXJzL2RlcnJpY2tib2wvZGV2L2tyYWFidS9hcHAvcm91dGVzL3BheW1lbnRzL2VreWFzaC9pbml0aWF0ZS50c3giLCAiLi4vYXBwL2RvbWFpbi9wYXltZW50cy9zZXJ2aWNlcy9jcmVhdGUtcGVuZGluZy1la3lhc2gtcGF5bWVudC50cyIsICIuLi9hcHAvcmVxdWVzdHMvY3JlYXRlLXBlbmRpbmctZWt5YXNoLXBheW1lbnQudHMiLCAiLi4vYXBwL2RvbWFpbi9wYXltZW50cy9tYXBwZXJzL2FyY2FkaWVyLXBheW1lbnQtbWFwcGVyLnRzIiwgIi4uL2FwcC9jb25maWcvaW5kZXguc2VydmVyLnRzIiwgIi4uL2FwcC9kb21haW4vcGF5bWVudHMvZW50aXRpZXMvcGF5bWVudC50cyIsICIuLi9hcHAvZG9tYWluL3BheW1lbnRzL3JlcG9zaXRvcmllcy9wYXltZW50LXJlcG9zaXRvcnkudHMiLCAicm91dGU6L1VzZXJzL2RlcnJpY2tib2wvZGV2L2tyYWFidS9hcHAvcm91dGVzL3BheW1lbnRzL2VreWFzaC9pbmRleC50c3giLCAiLi4vYXBwL2RvbWFpbi9wYXltZW50cy9zZXJ2aWNlcy9yZXF1ZXN0LWVreWFzaC1wYXltZW50LnRzIiwgIi4uL2FwcC9kb21haW4vcGF5bWVudHMvbGlicmFyeS9la3lhc2gtYXBpLnRzIiwgInJvdXRlOi9Vc2Vycy9kZXJyaWNrYm9sL2Rldi9rcmFhYnUvYXBwL3JvdXRlcy9pbmRleC50c3giLCAic2VydmVyLWFzc2V0cy1tYW5pZmVzdDpAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3QiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHsgUmVhY3QgfTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vbm9kZSB2MS4yLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgbm9kZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vbm9kZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YTsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZSB2MS4yLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgc2VydmVyUnVudGltZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc0Nvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnanNvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmpzb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyZWRpcmVjdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLnJlZGlyZWN0OyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3JlYWN0IHYxLjIuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciByZWFjdCA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vcmVhY3QnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRm9ybScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5Gb3JtOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaXZlUmVsb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpdmVSZWxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNZXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk1ldGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdOYXZMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk5hdkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUHJlZmV0Y2hQYWdlTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUHJlZmV0Y2hQYWdlTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peEJyb3dzZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhCcm93c2VyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhTZXJ2ZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhTZXJ2ZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JpcHRzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcmlwdHM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JvbGxSZXN0b3JhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JvbGxSZXN0b3JhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUFjdGlvbkRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQWN0aW9uRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUJlZm9yZVVubG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VCZWZvcmVVbmxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VDYXRjaCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VDYXRjaDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXJzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRm9ybUFjdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGb3JtQWN0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlSHJlZicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VIcmVmOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9hZGVyRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2FkZXJEYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9jYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9jYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VNYXRjaGVzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU1hdGNoZXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0ZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRpb25UeXBlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRpb25UeXBlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldENvbnRleHQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0Q29udGV4dDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VSZXNvbHZlZFBhdGgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUmVzb2x2ZWRQYXRoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU2VhcmNoUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVNlYXJjaFBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVN1Ym1pdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTdWJtaXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VUcmFuc2l0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVRyYW5zaXRpb247IH1cbn0pO1xuXG4iLCAiaW1wb3J0IGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCBjb21wcmVzc2lvbiBmcm9tIFwiY29tcHJlc3Npb25cIjtcbmltcG9ydCBtb3JnYW4gZnJvbSBcIm1vcmdhblwiO1xuaW1wb3J0IHsgY3JlYXRlUmVxdWVzdEhhbmRsZXIgfSBmcm9tIFwiQHJlbWl4LXJ1bi9leHByZXNzXCI7XG5cbmltcG9ydCAqIGFzIHNlcnZlckJ1aWxkIGZyb20gXCJAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGRcIjtcblxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuXG5hcHAudXNlKGNvbXByZXNzaW9uKCkpO1xuXG4vLyBodHRwOi8vZXhwcmVzc2pzLmNvbS9lbi9hZHZhbmNlZC9iZXN0LXByYWN0aWNlLXNlY3VyaXR5Lmh0bWwjYXQtYS1taW5pbXVtLWRpc2FibGUteC1wb3dlcmVkLWJ5LWhlYWRlclxuYXBwLmRpc2FibGUoXCJ4LXBvd2VyZWQtYnlcIik7XG5cbi8vIFJlbWl4IGZpbmdlcnByaW50cyBpdHMgYXNzZXRzIHNvIHdlIGNhbiBjYWNoZSBmb3JldmVyLlxuYXBwLnVzZShcbiAgXCIvYnVpbGRcIixcbiAgZXhwcmVzcy5zdGF0aWMoXCJwdWJsaWMvYnVpbGRcIiwgeyBpbW11dGFibGU6IHRydWUsIG1heEFnZTogXCIxeVwiIH0pXG4pO1xuXG4vLyBFdmVyeXRoaW5nIGVsc2UgKGxpa2UgZmF2aWNvbi5pY28pIGlzIGNhY2hlZCBmb3IgYW4gaG91ci4gWW91IG1heSB3YW50IHRvIGJlXG4vLyBtb3JlIGFnZ3Jlc3NpdmUgd2l0aCB0aGlzIGNhY2hpbmcuXG5hcHAudXNlKGV4cHJlc3Muc3RhdGljKFwicHVibGljL2J1aWxkXCIsIHsgbWF4QWdlOiBcIjFoXCIgfSkpO1xuXG5hcHAudXNlKG1vcmdhbihcInRpbnlcIikpO1xuXG5hcHAuYWxsKFxuICBcIipcIixcbiAgY3JlYXRlUmVxdWVzdEhhbmRsZXIoe1xuICAgIGJ1aWxkOiBzZXJ2ZXJCdWlsZCxcbiAgICBtb2RlOiBwcm9jZXNzLmVudi5OT0RFX0VOVlxuICB9KVxuKTtcblxuY29uc3QgcG9ydCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgMzAwMDtcblxuYXBwLmxpc3Rlbihwb3J0LCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKGBFeHByZXNzIHNlcnZlciBsaXN0ZW5pbmcgb24gcG9ydCAke3BvcnR9YCk7XG59KTtcbiIsICJcbmltcG9ydCAqIGFzIGVudHJ5U2VydmVyIGZyb20gXCIvVXNlcnMvZGVycmlja2JvbC9kZXYva3JhYWJ1L2FwcC9lbnRyeS5zZXJ2ZXIudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTAgZnJvbSBcIi9Vc2Vycy9kZXJyaWNrYm9sL2Rldi9rcmFhYnUvYXBwL3Jvb3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIi9Vc2Vycy9kZXJyaWNrYm9sL2Rldi9rcmFhYnUvYXBwL3JvdXRlcy9wYXltZW50cy9la3lhc2gvaW5pdGlhdGUudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTIgZnJvbSBcIi9Vc2Vycy9kZXJyaWNrYm9sL2Rldi9rcmFhYnUvYXBwL3JvdXRlcy9wYXltZW50cy9la3lhc2gvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTMgZnJvbSBcIi9Vc2Vycy9kZXJyaWNrYm9sL2Rldi9rcmFhYnUvYXBwL3JvdXRlcy9pbmRleC50c3hcIjtcbiAgZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NldHMgfSBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0XCI7XG4gIGV4cG9ydCBjb25zdCBlbnRyeSA9IHsgbW9kdWxlOiBlbnRyeVNlcnZlciB9O1xuICBleHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICAgIFwicm9vdFwiOiB7XG4gICAgICBpZDogXCJyb290XCIsXG4gICAgICBwYXJlbnRJZDogdW5kZWZpbmVkLFxuICAgICAgcGF0aDogXCJcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMFxuICAgIH0sXG4gIFwicm91dGVzL3BheW1lbnRzL2VreWFzaC9pbml0aWF0ZVwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvcGF5bWVudHMvZWt5YXNoL2luaXRpYXRlXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInBheW1lbnRzL2VreWFzaC9pbml0aWF0ZVwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxXG4gICAgfSxcbiAgXCJyb3V0ZXMvcGF5bWVudHMvZWt5YXNoL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9wYXltZW50cy9la3lhc2gvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwicGF5bWVudHMvZWt5YXNoXCIsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUyXG4gICAgfSxcbiAgXCJyb3V0ZXMvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUzXG4gICAgfVxuICB9OyIsICJpbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gXCJyZWFjdC1kb20vc2VydmVyXCI7XG5pbXBvcnQgeyBSZW1peFNlcnZlciB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBFbnRyeUNvbnRleHQgfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlUmVxdWVzdChcbiAgcmVxdWVzdDogUmVxdWVzdCxcbiAgcmVzcG9uc2VTdGF0dXNDb2RlOiBudW1iZXIsXG4gIHJlc3BvbnNlSGVhZGVyczogSGVhZGVycyxcbiAgcmVtaXhDb250ZXh0OiBFbnRyeUNvbnRleHRcbikge1xuICBjb25zdCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcbiAgICA8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxuICApO1xuXG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L2h0bWxcIik7XG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZShcIjwhRE9DVFlQRSBodG1sPlwiICsgbWFya3VwLCB7XG4gICAgc3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXG4gICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzXG4gIH0pO1xufVxuIiwgImltcG9ydCB0eXBlIHsgTGlua3NGdW5jdGlvbiwgTWV0YUZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQge1xuICBMaW5rcyxcbiAgTGl2ZVJlbG9hZCxcbiAgTWV0YSxcbiAgT3V0bGV0LFxuICBTY3JpcHRzLFxuICBTY3JvbGxSZXN0b3JhdGlvbixcbn0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy9hcHAuY3NzXCI7XG5cbmV4cG9ydCBsZXQgbGlua3M6IExpbmtzRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiBbeyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiBzdHlsZXMgfV07XG59O1xuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4geyB0aXRsZTogXCJOZXcgUmVtaXggQXBwXCIgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgcmV0dXJuIChcbiAgICA8aHRtbCBsYW5nPVwiZW5cIiBjbGFzc05hbWU9XCJoLWZ1bGwgdy1mdWxsXCI+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8TWV0YSAvPlxuICAgICAgICA8TGlua3MgLz5cbiAgICAgIDwvaGVhZD5cbiAgICAgIDxib2R5IGNsYXNzTmFtZT1cImgtZnVsbCB3LWZ1bGxcIj5cbiAgICAgICAgPE91dGxldCAvPlxuICAgICAgICA8U2Nyb2xsUmVzdG9yYXRpb24gLz5cbiAgICAgICAgPFNjcmlwdHMgLz5cbiAgICAgICAgPExpdmVSZWxvYWQgLz5cbiAgICAgIDwvYm9keT5cbiAgICA8L2h0bWw+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgQWN0aW9uRnVuY3Rpb24sIGpzb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCBDcmVhdGVQZW5kaW5nRWt5YXNoUGF5bWVudCBmcm9tIFwifi9kb21haW4vcGF5bWVudHMvc2VydmljZXMvY3JlYXRlLXBlbmRpbmctZWt5YXNoLXBheW1lbnRcIjtcblxuZXhwb3J0IGNvbnN0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBwYXltZW50ID0gYXdhaXQgbmV3IENyZWF0ZVBlbmRpbmdFa3lhc2hQYXltZW50KHJlcXVlc3QpLmNhbGwoKTtcblxuICAgIHJldHVybiBqc29uKHBheW1lbnQuYWRkaXRpb25hbERhdGE/LnBheW1lbnRLZXksIDIwMCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4ganNvbihcbiAgICAgIHtcbiAgICAgICAgbWVzc2FnZTogXCJTb21ldGhpbmcgdW5leHBlY3RlZCBoYXBwZW5lZC4gUGxlYXNlIHRyeSBhZ2FpblwiLFxuICAgICAgfSxcbiAgICAgIDQyMlxuICAgICk7XG4gIH1cbn07XG4iLCAiaW1wb3J0IHR5cGUgeyBBcmNhZGllclBheW1lbnRSZXF1ZXN0IH0gZnJvbSBcIn4vZG9tYWluL3BheW1lbnRzL2xpYnJhcnkvYXJjYWRpZXItYXBpXCI7XG5pbXBvcnQgY3JlYXRlUGVuZGluZ0VreWFzaFBheW1lbnRTY2hlbWEgZnJvbSBcIn4vcmVxdWVzdHMvY3JlYXRlLXBlbmRpbmctZWt5YXNoLXBheW1lbnRcIjtcbmltcG9ydCBQYXltZW50IGZyb20gXCIuLi9lbnRpdGllcy9wYXltZW50XCI7XG5pbXBvcnQgQXJjYWRpZXJQYXltZW50TWFwcGVyIGZyb20gXCIuLi9tYXBwZXJzL2FyY2FkaWVyLXBheW1lbnQtbWFwcGVyXCI7XG5pbXBvcnQgUGF5bWVudFJlcG9zaXRvcnkgZnJvbSBcIi4uL3JlcG9zaXRvcmllcy9wYXltZW50LXJlcG9zaXRvcnlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3JlYXRlUGVuZGluZ0VreWFzaFBheW1lbnQge1xuICBwcml2YXRlIHJlcXVlc3Q6IFJlcXVlc3Q7XG4gIHByaXZhdGUgcGF5bWVudDogQXJjYWRpZXJQYXltZW50UmVxdWVzdCB8IG51bGw7XG5cbiAgY29uc3RydWN0b3IocmVxdWVzdDogUmVxdWVzdCkge1xuICAgIHRoaXMucmVxdWVzdCA9IHJlcXVlc3Q7XG4gICAgdGhpcy5wYXltZW50ID0gbnVsbDtcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeVBheW1lbnRQYXJhbXMoKSB7XG4gICAgY29uc3QgYm9keSA9IGF3YWl0IHRoaXMucmVxdWVzdC5qc29uKCk7XG5cbiAgICB0aGlzLnBheW1lbnQgPSBhd2FpdCBjcmVhdGVQZW5kaW5nRWt5YXNoUGF5bWVudFNjaGVtYS52YWxpZGF0ZUFzeW5jKHtcbiAgICAgIC4uLmJvZHksXG4gICAgfSk7XG4gIH1cblxuICBhc3luYyBjYWxsKCk6IFByb21pc2U8UGF5bWVudD4ge1xuICAgIGF3YWl0IHRoaXMudmVyaWZ5UGF5bWVudFBhcmFtcygpO1xuXG4gICAgaWYgKCF0aGlzLnBheW1lbnQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIGRhdGEgZnJvbSBhcmNhZGllciByZWNlaXZlZC5cIik7XG4gICAgfVxuXG4gICAgY29uc3QgcGVuZGluZ1BheW1lbnQgPSBuZXcgQXJjYWRpZXJQYXltZW50TWFwcGVyKCkuZ2V0UGVuZGluZyh0aGlzLnBheW1lbnQpO1xuICAgIGNvbnN0IHBheW1lbnQgPSBhd2FpdCBQYXltZW50UmVwb3NpdG9yeS5jcmVhdGVQZW5kaW5nKHBlbmRpbmdQYXltZW50KTtcblxuICAgIHJldHVybiBwYXltZW50O1xuICB9XG59XG4iLCAiaW1wb3J0IGpvaSBmcm9tIFwiam9pXCI7XG5cbmNvbnN0IGNyZWF0ZVBlbmRpbmdFa3lhc2hQYXltZW50U2NoZW1hID0gam9pLm9iamVjdCh7XG4gIGludm9pY2Vubzogam9pLnN0cmluZygpLnJlcXVpcmVkKCksXG4gIGN1cnJlbmN5OiBqb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcbiAgdG90YWw6IGpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxuICBoYXNoa2V5OiBqb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcbiAgZ2F0ZXdheTogam9pLnN0cmluZygpLnJlcXVpcmVkKCksXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUGVuZGluZ0VreWFzaFBheW1lbnRTY2hlbWE7XG4iLCAiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgbmFub2lkIH0gZnJvbSBcIm5hbm9pZFwiO1xuaW1wb3J0IHsgZWt5YXNoIH0gZnJvbSBcIn4vY29uZmlnL2luZGV4LnNlcnZlclwiO1xuaW1wb3J0IFBheW1lbnQsIHsgUGF5bWVudFN0YXR1cyB9IGZyb20gXCIuLi9lbnRpdGllcy9wYXltZW50XCI7XG5pbXBvcnQgeyBBcmNhZGllclBheW1lbnRSZXF1ZXN0IH0gZnJvbSBcIi4uL2xpYnJhcnkvYXJjYWRpZXItYXBpXCI7XG5cbmNsYXNzIEFyY2FkaWVyUGF5bWVudE1hcHBlciB7XG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gZGF0YVxuICAgKiBAcmV0dXJucyBUaGUgaW5pdGlhbCBwYXltZW50IGRhdGEgc2VuZCBieSBhcmNhZGllclxuICAgKi9cbiAgZ2V0UGVuZGluZyhkYXRhOiBBcmNhZGllclBheW1lbnRSZXF1ZXN0KSB7XG4gICAgLy8gZG9uJ3QgZmluZDsganVzdCBidWlsZCB0aGUgZW50aXR5IGFzIHdlIGRvbid0IG5lZWQgdG8gcXVlcnkgYXJjYWRpZXIgZm9yIHRoaXMuXG4gICAgcmV0dXJuIHRoaXMuYnVpbGRFbnRpdHkoZGF0YSk7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIGRhdGFcbiAgICogQHJldHVybnMgUGF5bWVudCB3aXRoIHRoZSBvcmRlciBkZXRhaWxzIGZyb20gYXJjYWRpZXJcbiAgICovXG4gIGFzeW5jIGZpbmQoXG4gICAgZGF0YTogUGljazxBcmNhZGllclBheW1lbnRSZXF1ZXN0LCBcImdhdGV3YXlcIiB8IFwiaGFzaGtleVwiIHwgXCJpbnZvaWNlbm9cIj4gJiB7XG4gICAgICBwYXltZW50S2V5OiBzdHJpbmc7XG4gICAgfVxuICApIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcbiAgICAgIGAke2VreWFzaC5yb3V0ZXMub3JkZXJEZXRhaWxzfT9nYXRld2F5PSR7ZGF0YS5nYXRld2F5fSZpbnZvaWNlTm89JHtkYXRhLmludm9pY2Vub30mcGF5a2V5PSR7ZGF0YS5wYXltZW50S2V5fSZoYXNoa2V5PSR7ZGF0YS5oYXNoa2V5fWBcbiAgICApO1xuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBwcml2YXRlIGJ1aWxkRW50aXR5KGRhdGE6IEFyY2FkaWVyUGF5bWVudFJlcXVlc3QpOiBQYXltZW50IHtcbiAgICByZXR1cm4gbmV3IFBheW1lbnQoe1xuICAgICAgdXNlcjogXCJnaWdnZWRCelwiLFxuICAgICAgc3RhdHVzOiBQYXltZW50U3RhdHVzLlBlbmRpbmcsXG4gICAgICBjdXJyZW5jeToge1xuICAgICAgICBhbW91bnQ6IE51bWJlcihkYXRhLnRvdGFsKSxcbiAgICAgICAgdHlwZTogZGF0YS5jdXJyZW5jeSxcbiAgICAgIH0sXG4gICAgICBkZXNjcmlwdGlvbjogZGF0YS5pbnZvaWNlbm8sXG4gICAgICBpbnZvaWNlOiBkYXRhLmludm9pY2VubyxcbiAgICAgIGFkZGl0aW9uYWxEYXRhOiB7XG4gICAgICAgIGdhdGV3YXk6IGRhdGEuZ2F0ZXdheSxcbiAgICAgICAgaGFzaGtleTogZGF0YS5oYXNoa2V5LFxuICAgICAgICBwYXltZW50S2V5OiBuYW5vaWQoKSxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXJjYWRpZXJQYXltZW50TWFwcGVyO1xuIiwgImltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gXCJAc3VwYWJhc2Uvc3VwYWJhc2UtanNcIjtcbmltcG9ydCBcImRvdGVudi9jb25maWdcIjtcblxuY29uc3QgZWt5YXNoID0ge1xuICBhcGk6IFwiaHR0cHM6Ly9tdy1hcGktcHJlcHJvZC5lLWt5YXNoLmNvbS9hcGkvcXJwb3MtYXBwXCIsXG4gIHJvdXRlczoge1xuICAgIGJhc2U6IFwiaHR0cHM6Ly9tdy1hcGktcHJlcHJvZC5lLWt5YXNoLmNvbS9hcGkvcXJwb3MtYXBwXCIsXG4gICAgb3JkZXJEZXRhaWxzOiBcImh0dHBzOi8vZ2lnZ2VkYnouYXJjYWRpZXIuaW8vdXNlci9jaGVja291dC9vcmRlci1kZXRhaWxzXCIsXG4gIH0sXG4gIGhlYWRlcnM6IHtcbiAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICBcIkFjY2VwdC1MYW5ndWFnZVwiOiBcImVuXCIsXG4gICAgXCJUaGUtVGltZXpvbmUtSUFOQVwiOiBcIkJlbGl6ZVwiLFxuICAgIFdMOiBcImJpYmlcIixcbiAgICBJTUdFOiBcIkFQUEtFWTE3LTA3QTgtNEJBRi1BQTBGLUIxNTY4QzUwMTdBM1wiLFxuICAgIGFwcFZlcnNpb246IFwiOTkuMS4xXCIsXG4gICAgb3BlcmF0aW5nU3lzdGVtOiBcIkFuZHJvaWRcIixcbiAgfSxcbiAgY3JlZGVudGlhbHM6IHtcbiAgICBTSUQ6IDIzMjQ1MTg0MDMsXG4gICAgXCJQaW4gSGFzaFwiOiBcImNkODAxZmM1NGM4ZGE0ZWU2OTBjZjAwZWQzNGY2YmViXCIsXG4gIH0sXG4gIGRhdGE6IHtcbiAgICBwaG9uZTogXCI1MDE2Mzc2NTc0XCIsXG4gIH0sXG59O1xuXG5jb25zdCBzdXBhYmFzZVVybCA9IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9TVVBBQkFTRV9VUkw7XG5jb25zdCBzdXBhYmFzZUFub25LZXkgPSBwcm9jZXNzLmVudi5SRUFDVF9BUFBfU1VQQUJBU0VfQU5PTl9LRVk7XG5cbmNvbnN0IHN1cGFiYXNlID0gY3JlYXRlQ2xpZW50KHN1cGFiYXNlVXJsIGFzIHN0cmluZywgc3VwYWJhc2VBbm9uS2V5IGFzIHN0cmluZyk7XG5cbmV4cG9ydCB7IGVreWFzaCwgc3VwYWJhc2UgfTtcbiIsICJleHBvcnQgY29uc3QgZW51bSBQYXltZW50U3RhdHVzIHtcbiAgUGVuZGluZyxcbiAgSW5Qcm9ncmVzcyxcbiAgY29tcGxldGVkLFxufVxuXG50eXBlIFByb3BzID0ge1xuICBzdGF0dXM6IFBheW1lbnRTdGF0dXM7XG4gIHVzZXI6IHN0cmluZztcbiAgaWQ/OiBudW1iZXI7XG4gIGN1cnJlbmN5OiB7XG4gICAgYW1vdW50OiBudW1iZXI7XG4gICAgdHlwZTogc3RyaW5nO1xuICB9O1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBjcmVhdGVkQXQ/OiBhbnk7XG4gIGludm9pY2U6IHN0cmluZztcbiAgYWRkaXRpb25hbERhdGE6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBudW1iZXI7XG4gIH07XG59O1xuXG5jbGFzcyBQYXltZW50IHtcbiAgYWRkaXRpb25hbERhdGE6IFByb3BzW1wiYWRkaXRpb25hbERhdGFcIl07XG4gIGNyZWF0ZWRBdDogUHJvcHNbXCJjcmVhdGVkQXRcIl07XG4gIGN1cnJlbmN5OiBQcm9wc1tcImN1cnJlbmN5XCJdO1xuICBkZXNjcmlwdGlvbjogUHJvcHNbXCJkZXNjcmlwdGlvblwiXTtcbiAgaWQ6IFByb3BzW1wiaWRcIl07XG4gIGludm9pY2U6IFByb3BzW1wiaW52b2ljZVwiXTtcbiAgc3RhdHVzOiBQcm9wc1tcInN0YXR1c1wiXTtcbiAgdXNlcjogUHJvcHNbXCJ1c2VyXCJdO1xuXG4gIGNvbnN0cnVjdG9yKHtcbiAgICBhZGRpdGlvbmFsRGF0YSxcbiAgICBjcmVhdGVkQXQsXG4gICAgY3VycmVuY3ksXG4gICAgZGVzY3JpcHRpb24sXG4gICAgaWQsXG4gICAgaW52b2ljZSxcbiAgICBzdGF0dXMsXG4gICAgdXNlcixcbiAgfTogUHJvcHMpIHtcbiAgICB0aGlzLmFkZGl0aW9uYWxEYXRhID0gYWRkaXRpb25hbERhdGE7XG4gICAgdGhpcy5jcmVhdGVkQXQgPSBjcmVhdGVkQXQ7XG4gICAgdGhpcy5jdXJyZW5jeSA9IGN1cnJlbmN5O1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmlkID0gaWQ7XG4gICAgdGhpcy5pbnZvaWNlID0gaW52b2ljZTtcbiAgICB0aGlzLnN0YXR1cyA9IHN0YXR1cztcbiAgICB0aGlzLnVzZXIgPSB1c2VyO1xuICB9XG5cbiAgaXNWYWxpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW5jeS5hbW91bnQgPiAwO1xuICB9XG5cbiAgaXNQZW5kaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXR1cyA9PT0gUGF5bWVudFN0YXR1cy5QZW5kaW5nO1xuICB9XG5cbiAgY2FuTWFya0luUHJvZ3Jlc3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNQZW5kaW5nKCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGF5bWVudDtcbiIsICJpbXBvcnQgeyBzdXBhYmFzZSB9IGZyb20gXCJ+L2NvbmZpZy9pbmRleC5zZXJ2ZXJcIjtcbmltcG9ydCBQYXltZW50IGZyb20gXCIuLi9lbnRpdGllcy9wYXltZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBheW1lbnRSZXBvc2l0b3J5IHtcbiAgc3RhdGljIGFzeW5jIHJlYnVpbGRFbnRpdHkoZGF0YTogYW55KSB7XG4gICAgcmV0dXJuIG5ldyBQYXltZW50KHtcbiAgICAgIGFkZGl0aW9uYWxEYXRhOiBkYXRhPy5hZGRpdGlvbmFsRGF0YSxcbiAgICAgIGN1cnJlbmN5OiB7XG4gICAgICAgIGFtb3VudDogZGF0YT8uYW1vdW50LFxuICAgICAgICB0eXBlOiBkYXRhLmN1cnJlbmN5LFxuICAgICAgfSxcbiAgICAgIGRlc2NyaXB0aW9uOiBkYXRhPy5kZXNjcmlwdGlvbixcbiAgICAgIGlkOiBkYXRhLmlkLFxuICAgICAgaW52b2ljZTogZGF0YS5pbnZvaWNlLFxuICAgICAgc3RhdHVzOiBkYXRhLnN0YXR1cyxcbiAgICAgIHVzZXI6IGRhdGEudXNlcixcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBhc3luYyBjcmVhdGVQZW5kaW5nKGRhdGE6IFBheW1lbnQpIHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzdXBhYmFzZS5mcm9tKFwicGF5bWVudHNcIikuaW5zZXJ0KFtcbiAgICAgIHtcbiAgICAgICAgYWRkaXRpb25hbERhdGE6IGRhdGEuYWRkaXRpb25hbERhdGEsXG4gICAgICAgIGFtb3VudDogZGF0YS5jdXJyZW5jeS5hbW91bnQsXG4gICAgICAgIGN1cnJlbmN5OiBkYXRhLmN1cnJlbmN5LnR5cGUsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBkYXRhLmRlc2NyaXB0aW9uLFxuICAgICAgICBpbnZvaWNlOiBkYXRhLmludm9pY2UsXG4gICAgICAgIHN0YXR1czogZGF0YS5zdGF0dXMsXG4gICAgICAgIHVzZXI6IGRhdGEudXNlcixcbiAgICAgIH0sXG4gICAgXSk7XG5cbiAgICByZXR1cm4gdGhpcy5yZWJ1aWxkRW50aXR5KHJlc3VsdC5ib2R5Py5bMF0pO1xuICB9XG5cbiAgc3RhdGljIGFzeW5jIGdldFBheW1lbnRCeUludm9pY2UoaW52b2ljZTogc3RyaW5nKTogUHJvbWlzZTxQYXltZW50PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAgIC5mcm9tKFwicGF5bWVudHNcIilcbiAgICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgICAuZXEoXCJpbnZvaWNlXCIsIGludm9pY2UpO1xuXG4gICAgcmV0dXJuIHRoaXMucmVidWlsZEVudGl0eShyZXN1bHQuYm9keT8uWzBdKTtcbiAgfVxuXG4gIHN0YXRpYyBhc3luYyBzZXRQYXltZW50UXJDb2RlVXJsKHBheW1lbnQ6IFBheW1lbnQsIHFyQ29kZVVybDogc3RyaW5nKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAgIC5mcm9tKFwicGF5bWVudHNcIilcbiAgICAgIC51cHNlcnQoeyBhZGRpdGlvbmFsRGF0YTogeyBxckNvZGVVcmwgfSB9KVxuICAgICAgLmVxKFwiaW52b2ljZVwiLCBwYXltZW50Lmludm9pY2UpO1xuXG4gICAgcmV0dXJuIHRoaXMucmVidWlsZEVudGl0eShyZXN1bHQuYm9keT8uWzBdKTtcbiAgfVxufVxuIiwgImltcG9ydCB7XG4gIEFjdGlvbkZ1bmN0aW9uLFxuICBGb3JtLFxuICBqc29uLFxuICBMb2FkZXJGdW5jdGlvbixcbiAgTWV0YUZ1bmN0aW9uLFxuICB1c2VMb2FkZXJEYXRhLFxufSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCBQYXltZW50IGZyb20gXCJ+L2RvbWFpbi9wYXltZW50cy9lbnRpdGllcy9wYXltZW50XCI7XG5pbXBvcnQgUGF5bWVudFJlcG9zaXRvcnkgZnJvbSBcIn4vZG9tYWluL3BheW1lbnRzL3JlcG9zaXRvcmllcy9wYXltZW50LXJlcG9zaXRvcnlcIjtcbmltcG9ydCBSZXF1ZXN0RWt5YXNoUGF5bWVudCBmcm9tIFwifi9kb21haW4vcGF5bWVudHMvc2VydmljZXMvcmVxdWVzdC1la3lhc2gtcGF5bWVudFwiO1xuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiBcIkNvbXBsZXRlIEdpZ2dlZEJ6IEJvb2tpbmcgUGF5bWVudCB8IEtyYWJ1dVwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJZb3UncmUgYWxtb3N0IGRvbmUgd2l0aCB5b3VyIEdpZ2dlZEJ6IGJvb2tpbmcuIE9uY2UgcGF5bWVudCBpcyBjb21wbGV0ZWQsIHlvdXIgYm9va2luZyB3aWxsIGJlIGNvbmZpcm1lZC5cIixcbiAgfTtcbn07XG5cbmV4cG9ydCBsZXQgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBjb25zdCBzZWFyY2hQYXJhbXMgPSBuZXcgVVJMKHJlcXVlc3QudXJsKS5zZWFyY2hQYXJhbXM7XG4gIGNvbnN0IGludm9pY2VObyA9IHNlYXJjaFBhcmFtcy5nZXQoXCJpbnZvaWNlTm9cIik7XG4gIGNvbnN0IHBheW1lbnRLZXkgPSBzZWFyY2hQYXJhbXMuZ2V0KFwicGF5a2V5XCIpO1xuXG4gIGlmICghaW52b2ljZU5vIHx8ICFwYXltZW50S2V5KSB7XG4gICAgcmV0dXJuIGpzb24oeyBtZXNzYWdlOiBcIm5vIHBheW1lbnQgd2l0aCB0aGlzIGludm9pY2Ugbm9cIiB9LCA0MDQpO1xuICB9XG5cbiAgY29uc3QgcGF5bWVudCA9IGF3YWl0IFBheW1lbnRSZXBvc2l0b3J5LmdldFBheW1lbnRCeUludm9pY2UoaW52b2ljZU5vKTtcblxuICByZXR1cm4ganNvbih7XG4gICAgYWxpdmU6IHRydWUsXG4gICAgcGF5bWVudDogcGF5bWVudCxcbiAgfSk7XG59O1xuXG5leHBvcnQgbGV0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgY29uc3QgZm9ybURhdGEgPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XG5cbiAgaWYgKCFmb3JtRGF0YS5nZXQoXCJuYW1lXCIpIHx8ICFmb3JtRGF0YS5nZXQoXCJwaG9uZVwiKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkVtYWlsIGFuZCBwaG9uZSBhcmUgYm90aCByZXF1aXJlZC5cIik7XG4gIH1cblxuICBjb25zdCBzZWFyY2hQYXJhbXMgPSBuZXcgVVJMKHJlcXVlc3QudXJsKS5zZWFyY2hQYXJhbXM7XG4gIGNvbnN0IGludm9pY2VObyA9IHNlYXJjaFBhcmFtcy5nZXQoXCJpbnZvaWNlTm9cIik7XG5cbiAgaWYgKCFpbnZvaWNlTm8pIHtcbiAgICByZXR1cm4ganNvbih7IG1lc3NhZ2U6IFwibm8gcGF5bWVudCB3aXRoIHRoaXMgaW52b2ljZSBub1wiIH0sIDQwNCk7XG4gIH1cblxuICBjb25zdCBwYXltZW50ID0gYXdhaXQgUGF5bWVudFJlcG9zaXRvcnkuZ2V0UGF5bWVudEJ5SW52b2ljZShcbiAgICBpbnZvaWNlTm8gYXMgc3RyaW5nXG4gICk7XG5cbiAgYXdhaXQgbmV3IFJlcXVlc3RFa3lhc2hQYXltZW50KHBheW1lbnQsIHtcbiAgICBuYW1lOiBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpIGFzIHN0cmluZyxcbiAgICBwaG9uZU51bWJlcjogZm9ybURhdGEuZ2V0KFwicGhvbmVOdW1iZXJcIikgYXMgc3RyaW5nLFxuICB9KS5jYWxsKCk7XG59O1xuXG5leHBvcnQgY29uc3QgYmxvY2tJbnZhbGlkTnVtYmVyQ2hhciA9IChlOiBhbnkpID0+IHtcbiAgcmV0dXJuIFtcImVcIiwgXCJFXCIsIFwiK1wiXS5pbmNsdWRlcyhlLmtleSkgJiYgZS5wcmV2ZW50RGVmYXVsdCgpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRUt5YXNoKCkge1xuICBjb25zdCBkYXRhID0gdXNlTG9hZGVyRGF0YSgpIGFzIHsgcGF5bWVudDogUGF5bWVudCB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoLWZ1bGwgdy1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtZ3JheS04MDBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktYXV0byBsZWFkaW5nLXJlbGF4ZWRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHBiLTQgb3BhY2l0eS03NSBob3ZlcjpvcGFjaXR5LTEwMFwiPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGRcIj5LcmFidXU8L2gxPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDBcIj5cbiAgICAgICAgICAgIFNlY3VyZWx5IHBheSBvbmxpbmUgd2l0aCBCZWxpemUncyB2YXJpb3VzIGRpZ2l0YWwgd2FsbGV0c1xuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGJvcmRlci1bMXB4XSBjb250YWluZXIgc2hhZG93LW1kIHJvdW5kZWQgcC00IHctWzU2MHB4XSBtaW4taC1bNDgwcHhdXCI+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1tZWRpdW0gcGItNCB0ZXh0LWdyYXktOTAwXCI+XG4gICAgICAgICAgICBSZUdpZ2dlZEJ6IGlzIHJlcXVlc3RpbmcgcGF5bWVudCBmb3IgeW91ciBvcmRlciB1c2luZyB0aGUgRUt5YXNoXG4gICAgICAgICAgICBkaWdpdGFsIHdhbGxldC5cbiAgICAgICAgICA8L2gyPlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgbWItNFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGl0ZW1zLWVuZCBtci0yXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtN3hsIGZvbnQtYm9sZCB0ZXh0LWluZGlnby01MDBcIj5cbiAgICAgICAgICAgICAgICAke2RhdGEucGF5bWVudC5jdXJyZW5jeS5hbW91bnR9XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1tZWRpdW0gdGV4dC1pbmRpZ28tNDAwXCI+XG4gICAgICAgICAgICAgICAge2RhdGEucGF5bWVudC5jdXJyZW5jeS50eXBlfVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JheS05MDBcIj57ZGF0YS5wYXltZW50Lmludm9pY2V9PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMCBwYi00XCI+XG4gICAgICAgICAgICBQbGVhc2UgZW50ZXIgeW91ciBwaG9uZSBudW1iZXIgbGlua2VkIHRvIHlvdXIgRUt5YXNoIGFjY291bnQgaW5cbiAgICAgICAgICAgIG9yZGVyIHRvIHJlY2VpdmUgeW91ciBwYXltZW50IHJlcXVlc3QuXG4gICAgICAgICAgPC9zcGFuPlxuXG4gICAgICAgICAgPEZvcm0gYWN0aW9uPVwiL3BheW1lbnRzL2VreWFzaFwiIG1ldGhvZD1cInBvc3RcIiBjbGFzc05hbWU9XCJtYi00XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgcGItNFwiPlxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIiBjbGFzc05hbWU9XCJmb250LW1lZGl1bSB0ZXh0LWdyYXktNjAwXCI+XG4gICAgICAgICAgICAgICAgWW91ciBuYW1lXG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgaWQ9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQteGwgZm9jdXM6cmluZy1pbmRpZ28tNTAwIGZvY3VzOmJvcmRlci1pbmRpZ28tNTAwIGJsb2NrIGJvcmRlci0yIHctZnVsbCBwbC03IHByLTEyIGZvbnQtbm9ybWFsIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kIHB5LTJcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiaS5lLiBKb2huIERvZVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHBiLTRcIj5cbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwaG9uZVwiIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtIHRleHQtZ3JheS02MDBcIj5cbiAgICAgICAgICAgICAgICBQaG9uZVxuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGVsXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwicGhvbmVcIlxuICAgICAgICAgICAgICAgIGlkPVwicGhvbmVcIlxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgcGF0dGVybj1cIlswLTldezN9LVswLTldezN9LVswLTldezR9XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvY3VzOnJpbmctaW5kaWdvLTUwMCBmb2N1czpib3JkZXItaW5kaWdvLTUwMCBibG9jayBib3JkZXItMiB3LWZ1bGwgcGwtNyBwci0xMiBmb250LW5vcm1hbCBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1tZCBweS0yXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImkuZS4gNTAxLTYyMS0xMjM0XCJcbiAgICAgICAgICAgICAgICBvbktleURvd249e2Jsb2NrSW52YWxpZE51bWJlckNoYXJ9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTQgcHktMiB0ZXh0LXhsIGJvcmRlci0yIHJvdW5kZWQtbWQgZm9jdXM6cmluZyBmb2N1czpyaW5nLWluZGlnby0xMDAgYm9yZGVyLWluZGlnby01MDAgYmctaW5kaWdvLTYwMCB0ZXh0LXdoaXRlXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgR2V0IFBheW1lbnQgUmVxdWVzdFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9Gb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImltcG9ydCB7IGVreWFzaCB9IGZyb20gXCJ+L2NvbmZpZy9pbmRleC5zZXJ2ZXJcIjtcbmltcG9ydCBQYXltZW50IGZyb20gXCIuLi9lbnRpdGllcy9wYXltZW50XCI7XG5pbXBvcnQgeyBjcmVhdGVOZXdJbnZvaWNlLCBnZXRBdXRob3JpemF0aW9uIH0gZnJvbSBcIi4uL2xpYnJhcnkvZWt5YXNoLWFwaVwiO1xuaW1wb3J0IFBheW1lbnRSZXBvc2l0b3J5IGZyb20gXCIuLi9yZXBvc2l0b3JpZXMvcGF5bWVudC1yZXBvc2l0b3J5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlcXVlc3RFa3lhc2hQYXltZW50IHtcbiAgcHJpdmF0ZSBwYXltZW50OiBQYXltZW50O1xuICBwcml2YXRlIHVzZXI6IHsgbmFtZTogc3RyaW5nOyBwaG9uZU51bWJlcjogc3RyaW5nIH07XG5cbiAgY29uc3RydWN0b3IocGF5bWVudDogUGF5bWVudCwgdXNlcjogeyBuYW1lOiBzdHJpbmc7IHBob25lTnVtYmVyOiBzdHJpbmcgfSkge1xuICAgIHRoaXMucGF5bWVudCA9IHBheW1lbnQ7XG4gICAgdGhpcy51c2VyID0gdXNlcjtcbiAgfVxuXG4gIGFzeW5jIGNhbGwoKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldEF1dGhvcml6YXRpb24oe1xuICAgICAgU2lkOiBla3lhc2guY3JlZGVudGlhbHMuU0lELFxuICAgICAgcGluSGFzaDogZWt5YXNoLmNyZWRlbnRpYWxzW1wiUGluIEhhc2hcIl0sXG4gICAgICBwdXNoS2V5OiBcIlwiLFxuICAgIH0pO1xuXG4gICAgbGV0IHBheW1lbnRSZXNwb25zZSA9IGF3YWl0IGNyZWF0ZU5ld0ludm9pY2Uoe1xuICAgICAgYW1vdW50OiB0aGlzLnBheW1lbnQuY3VycmVuY3kuYW1vdW50LFxuICAgICAgZGVzY3JpcHRpb246IHRoaXMucGF5bWVudC5kZXNjcmlwdGlvbixcbiAgICAgIGN1cnJlbmN5OiBcIkJaRFwiLFxuICAgICAgb3JkZXJJZDogdGhpcy5wYXltZW50Lmludm9pY2UsXG4gICAgICBzZXNzaW9uOiBzZXNzaW9uLlNlc3Npb24sXG4gICAgfSk7XG5cbiAgICB0aGlzLnBheW1lbnQgPSBhd2FpdCBQYXltZW50UmVwb3NpdG9yeS5zZXRQYXltZW50UXJDb2RlVXJsKFxuICAgICAgdGhpcy5wYXltZW50LFxuICAgICAgcGF5bWVudFJlc3BvbnNlLnFyVXJsXG4gICAgKTtcbiAgfVxufVxuIiwgImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IGVuYywgSG1hY1NIQTI1NiB9IGZyb20gXCJjcnlwdG8tanNcIjtcbmltcG9ydCB7IGVreWFzaCB9IGZyb20gXCJ+L2NvbmZpZy9pbmRleC5zZXJ2ZXJcIjtcblxuLyoqXG4gKiBCdWlsZHMgJiByZXR1cm5zIGEgSldUIHRva2VuIGZvciBjYWxscyB0byBFLWt5YXNoJ3MgQVBJLlxuICogQHJldHVybnNcbiAqL1xuY29uc3QgZ2V0SldUVG9rZW4gPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGhlYWRlciA9IGVuYy5CYXNlNjQuc3RyaW5naWZ5KFxuICAgIGVuYy5VdGY4LnBhcnNlKEpTT04uc3RyaW5naWZ5KHsgYWxnOiBcIkhTMjU2XCIsIHR5cDogXCJKV1RcIiB9KSlcbiAgKTtcblxuICBjb25zdCBkYXRhID0gZW5jLkJhc2U2NC5zdHJpbmdpZnkoXG4gICAgZW5jLlV0ZjgucGFyc2UoSlNPTi5zdHJpbmdpZnkoeyBtb2JpbGU6IGVreWFzaC5kYXRhLnBob25lIH0pKVxuICApO1xuXG4gIGNvbnN0IHNpZ25hdHVyZSA9IGVuYy5CYXNlNjQuc3RyaW5naWZ5KFxuICAgIEhtYWNTSEEyNTYoYCR7aGVhZGVyfS4ke2RhdGF9YCwgZWt5YXNoLmhlYWRlcnMuSU1HRSlcbiAgKTtcblxuICByZXR1cm4gYCR7aGVhZGVyfS4ke2RhdGF9LiR7c2lnbmF0dXJlfWA7XG59O1xuXG50eXBlIEF1dGhvcml6YXRpb25EYXRhID0ge1xuICAvKipcbiAgICogTWVyY2hhbnQgSUQgcHJvdmlkZWQgYnkgRWt5YXNoXG4gICAqL1xuICBTaWQ6IG51bWJlcjtcbiAgLyoqXG4gICAqIHBpbkhhc2gsIHByb3ZpZGVkIGJ5IEVreWFzaDpoYXNoKCdzaGEyNTYnLCBtZDUoJ3BpbicpKVxuICAgKi9cbiAgcGluSGFzaDogc3RyaW5nO1xuICAvKipcbiAgICogYWx3YXlzIHByb3ZpZGVkIGFzIGFuIGVtcHR5IHN0cmluZ1xuICAgKi9cbiAgcHVzaEtleTogXCJcIjtcbn07XG5cbnR5cGUgQXV0aG9yaXphdGlvblJlc3BvbnNlID0ge1xuICAvKipcbiAgICogVGhpcyBzZXNzaW9uIElEIHRoYXQgc2hvdWxkIGJlIHVzZWQgZm9yIHN1YnNlcXVlbnQgcmVxdWVzdHMuXG4gICAqL1xuICBTZXNzaW9uOiBzdHJpbmc7XG4gIGZpcnN0TmFtZT86IHN0cmluZztcbiAgbGFzdE5hbWU/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBBcHAgbW9iaWxlIHNldHRpbmdzXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIHtcbiAgICogICBcIm5hbWVTZXR0aW5nc1wiOiBcInZhbHVlXCJcbiAgICogfVxuICAgKi9cbiAgU2V0dGluZ3M/OiBhbnk7XG59O1xuXG4vKipcbiAqIFJlcXVlc3QgYSBzZXNzaW9uIGtleSBmcm9tIEUtS3lhc2gncyBBUEkgaW4gb3JkZXIgdG8gYXV0aG9yaXplIHJlcXVlc3RzLlxuICogQHJldHVybnNcbiAqL1xuY29uc3QgZ2V0QXV0aG9yaXphdGlvbiA9IGFzeW5jIChcbiAgZGF0YTogQXV0aG9yaXphdGlvbkRhdGFcbik6IFByb21pc2U8QXV0aG9yaXphdGlvblJlc3BvbnNlPiA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChgJHtla3lhc2guYXBpfS9hdXRob3JpemF0aW9uYCwge1xuICAgIC4uLmRhdGEsXG4gIH0pO1xuXG4gIHJldHVybiByZXNwb25zZS5kYXRhIGFzIEF1dGhvcml6YXRpb25SZXNwb25zZTtcbn07XG5cbmV4cG9ydCB0eXBlIE5ld0ludm9pY2VEYXRhID0ge1xuICAvKipcbiAgICogU2Vzc2lvbiBJZCBmb3IgdG8gYXV0aG9yaXplIHJlcXVlc3QuXG4gICAqL1xuICBzZXNzaW9uOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBJZCBvZiB0aGUgb3JkZXIgYmVpbmcgY2FycmllZCBvdXRcbiAgICovXG4gIG9yZGVySWQ6IHN0cmluZztcbiAgLyoqXG4gICAqIEFtb3VudCBpbiBjZW50cy5cbiAgICovXG4gIGFtb3VudDogbnVtYmVyO1xuICAvKipcbiAgICogQ3VycmVuY3kgaW4gSVNPIDQyMTcgZm9ybWF0LlxuICAgKi9cbiAgY3VycmVuY3k6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgLyoqXG4gICAqIFBob25lIG51bWJlciBvZiB0aGUgY3VzdG9tZXIgdGhhdCB3aWxsIHBheSB0aGUgcmVxdWVzdFxuICAgKi9cbiAgcGF5ZXI/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBNZXRhZGF0YSByZWxhdGVkIHRvIHRoZSBpdGVtcyBiZWluZyBwYXllZCBmb3IuXG4gICAqIEBleGFtcGxlXG4gICAqIHtcbiAgICogICBcImZpZWxkXCI6IFwidmFsdWVcIlxuICAgKiB9XG4gICAqL1xuICBmaWVsZHNPdGhlcj86IE9iamVjdCB8IGFueVtdO1xuICAvKipcbiAgICogU2ltaWxhciB0byBmaWVsZHNPdGhlciBidXQgYXJlIHVzZWQgb25seSBvbiBtb2JpbGUgcGhvbmVzLlxuICAgKiBAZXhhbXBsZVxuICAgKiB7XG4gICAqICAgXCJmaWVsZFwiOiBcInZhbHVlXCJcbiAgICogfVxuICAgKi9cbiAgZmllbGRzQXBwPzogT2JqZWN0IHwgYW55W107XG4gIC8qKlxuICAgKiBCZWZvcmUgdGhlIG1lcmNoYW50IGNyZWF0ZXMgdGhlXG4gICAqIGludm9pY2UsIHRoZSBtZXJjaGFudCBjYW4gY2FsbCB0aGVcbiAgICogXHUyMDFDVXBsb2FkSW1hZ2VcdTIwMUQgZW5kcG9pbnQgdG8gdXBsb2FkIGFuXG4gICAqIGltYWdlIChmb3IgZXhhbXBsZSB0aGUgaW52b2ljZSkuIFdoZW5cbiAgICogdGhlIGNhbGwgdG8gY3JlYXRlIHRoZSBpbnZvaWNlIGlzIG1hZGUsXG4gICAqIHRoZSBNZXJjaGFudCBjYW4gc3BlY2lmeSB0aGUgaW1hZ2VcbiAgICogbmFtZSBpbiB0aGlzIGZpZWxkLiBUaGUgY3VzdG9tZXIgd2lsbFxuICAgKiByZWNlaXZlIHRoZSBpbWFnZSBhbmQgZGV0YWlscyB3aGVuXG4gICAqIHRoZXkgcmVjZWl2ZSB0aGUgbm90aWZpY2F0aW9uLlxuICAgKi9cbiAgcmVjZWlwdD86IHN0cmluZztcbiAgLyoqXG4gICAqIEludm9pY2UgZGF0ZSBhbmQgdGltZSB1bnRpbCBpdCBleHBpcmVzLlxuICAgKiBAZXhhbXBsZVxuICAgKiAyMDIxLTAxLTE3IDE1OjQ1OjEyXG4gICAqL1xuICBkYXRlTGlmZT86IHN0cmluZztcbiAgLyoqXG4gICAqIFJldXNhYmxlIGludm9pY2VcbiAgICovXG4gIGxvbmdUZXJtPzogYm9vbGVhbjtcbn07XG5cbnR5cGUgTmV3SW52b2ljZVJlc3BvbnNlID0ge1xuICAvKipcbiAgICogQHR5cGUgQXV0aG9yaXphdGlvblJlc3BvbnNlLlNlc3Npb25cbiAgICovXG4gIGludm9pY2VJZDogbnVtYmVyO1xuICAvKipcbiAgICogTGluayB0byB0aGUgUVIgY29kZSBvZiB0aGUgaW52b2ljZS5cbiAgICogQGV4YW1wbGUgaHR0cHM6Ly9kb21haW4vcXIvaW52b2ljZS8zNjgwNTAxNDM4NDlcbiAgICovXG4gIHFyVXJsOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgZGF0YSB0aGF0IGlzIGluIHRoZSBRUiBjb2RlLlxuICAgKiBAZXhhbXBsZSAzNjgwNTAxNDM4NDlcbiAgICovXG4gIHFyRGF0YTogc3RyaW5nO1xuICAvKipcbiAgICogTGluayB0byB0aGUgdXBsb2FkZWQgaW1hZ2UgLSBzZSByZWNlaXB0IHBhcmFtZXRlciBpbiB0aGUgcmVxdWVzdFxuICAgKiBAZXhhbXBsZSBodHRwczovL2RvbWFpbi9xci9pbnZvaWNlLzM2ODA1MDE0Mzg0OVxuICAgKi9cbiAgcmVjZWlwdFVybDogc3RyaW5nO1xufTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGludm9pY2UgZm9yIHVzZXJzIHdpdGggYSBzcGVjaWZpZWQgYW1vdW50IGluIEJlbGl6ZSBEb2xsYXJzLlxuICovXG5jb25zdCBjcmVhdGVOZXdJbnZvaWNlID0gYXN5bmMgKFxuICBkYXRhOiBOZXdJbnZvaWNlRGF0YVxuKTogUHJvbWlzZTxOZXdJbnZvaWNlUmVzcG9uc2U+ID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KGAke2VreWFzaC5hcGl9L2NyZWF0ZS1uZXctaW52b2ljZWAsIHtcbiAgICAuLi5kYXRhLFxuICB9KTtcblxuICByZXR1cm4gcmVzcG9uc2UuZGF0YSBhcyBOZXdJbnZvaWNlUmVzcG9uc2U7XG59O1xuXG50eXBlIFVwbG9hZEludm9pY2VJbWFnZURhdGEgPSB7XG4gIC8qKlxuICAgKiBTZXNzaW9uIElEIGF1dGhvcml6aW5nIHRoZSByZXF1ZXN0XG4gICAqL1xuICBzZXNzaW9uOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBJbWFnZSB0eXBlXG4gICAqL1xuICBpbWFnZVR5cGU6IHN0cmluZztcbiAgLyoqXG4gICAqIEltYWdlIGZpbGUuIFRPRE86IFdoYXQgZm9ybWF0IHNob3VsZCB0aGlzIGJlIGluP1xuICAgKi9cbiAgZmlsZTogYW55O1xufTtcblxudHlwZSBVcGxvYWRJbnZvaWNlSW1hZ2VSZXNwb25zZSA9IHtcbiAgLyoqXG4gICAqIFRoZSByZXN1bHQgb2YgdGhlIGFjdGlvblxuICAgKi9cbiAgc3VjY2Vzcz86IGJvb2xlYW47XG59O1xuXG5jb25zdCB1cGxvYWRJbnZvaWNlSW1hZ2UgPSBhc3luYyAoZGF0YTogVXBsb2FkSW52b2ljZUltYWdlRGF0YSkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoYCR7ZWt5YXNoLmFwaX0vdXBsb2FkLWltYWdlYCwge1xuICAgIC4uLmRhdGEsXG4gIH0pO1xuXG4gIHJldHVybiByZXNwb25zZS5kYXRhIGFzIFVwbG9hZEludm9pY2VJbWFnZVJlc3BvbnNlO1xufTtcblxuZXhwb3J0IHsgZ2V0SldUVG9rZW4sIGdldEF1dGhvcml6YXRpb24sIGNyZWF0ZU5ld0ludm9pY2UsIHVwbG9hZEludm9pY2VJbWFnZSB9O1xuIiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1mdWxsIHctZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LTN4bCB0ZXh0LWdyYXktODAwXCI+XG4gICAgICAgIFF1aWNrbHkgaW50ZWdyYXRlIGFuZCBhY2NlcHQgb25saW5lIHBheW1lbnRzIGluIEJlbGl6ZSB3aXRoIHZhcmlvdXNcbiAgICAgICAgc3VwcG9ydGVkIGUtd2FsbGV0cyFcbiAgICAgIDwvaDE+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiZXhwb3J0IGRlZmF1bHQgeyd2ZXJzaW9uJzonN2E2NGQ5ZjYnLCdlbnRyeSc6eydtb2R1bGUnOicvYnVpbGQvZW50cnkuY2xpZW50LUFORE5GREVPLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1HTzdDNUdOMi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVAyRlRHUE9YLmpzJ119LCdyb3V0ZXMnOnsncm9vdCc6eydpZCc6J3Jvb3QnLCdwYXJlbnRJZCc6dW5kZWZpbmVkLCdwYXRoJzonJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm9vdC03Tkg3Qk1IUi5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2luZGV4Jzp7J2lkJzoncm91dGVzL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6dW5kZWZpbmVkLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2luZGV4LUozTVBOTlFaLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvcGF5bWVudHMvZWt5YXNoL2luZGV4Jzp7J2lkJzoncm91dGVzL3BheW1lbnRzL2VreWFzaC9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidwYXltZW50cy9la3lhc2gnLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3BheW1lbnRzL2VreWFzaC9pbmRleC1RUEhHVkJQSC5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstNlNLV1NMVUYuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9wYXltZW50cy9la3lhc2gvaW5pdGlhdGUnOnsnaWQnOidyb3V0ZXMvcGF5bWVudHMvZWt5YXNoL2luaXRpYXRlJywncGFyZW50SWQnOidyb290JywncGF0aCc6J3BheW1lbnRzL2VreWFzaC9pbml0aWF0ZScsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9wYXltZW50cy9la3lhc2gvaW5pdGlhdGUtSVFLVExDT1cuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTZTS1dTTFVGLmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfX0sJ3VybCc6Jy9idWlsZC9tYW5pZmVzdC03QTY0RDlGNi5qcyd9OyJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBdUI7QUFBQTtBQUFBOzs7QUNBdkI7QUFBQTtBQUFBO0FBQUE7QUFZQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLE9BQU8sUUFBUTtBQUluQixXQUFPLGVBQWUsU0FBUyw0QkFBNEI7QUFBQSxNQUN6RCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLG9DQUFvQztBQUFBLE1BQ2pFLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsc0NBQXNDO0FBQUEsTUFDbkUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxtQ0FBbUM7QUFBQSxNQUNoRSxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBR2pDLEFBWUEsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU87QUFFdEQsUUFBSSxnQkFBZ0IsUUFBUTtBQUk1QixXQUFPLGVBQWUsU0FBUyxnQkFBZ0I7QUFBQSxNQUM3QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLGNBQWM7QUFBQTtBQUFBO0FBRTFDLFdBQU8sZUFBZSxTQUFTLDhCQUE4QjtBQUFBLE1BQzNELFlB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
