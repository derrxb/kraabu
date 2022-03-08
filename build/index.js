var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
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
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
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
var app_default = "/build/_assets/app-WELG3222.css";

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

// route:/Users/derrickbol/dev/kraabu/app/routes/payments/ekyash/pay-with-phone.tsx
var pay_with_phone_exports = {};
__export(pay_with_phone_exports, {
  action: () => action,
  blockInvalidNumberChar: () => blockInvalidNumberChar,
  default: () => EKyash,
  loader: () => loader,
  meta: () => meta2
});
init_react();
var import_remix3 = __toESM(require_remix());

// app/components/krabuu-header.tsx
init_react();
function KrabuuHeader() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col pb-4 opacity-50 hover:opacity-100"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-2xl font-bold"
  }, "Krabuu"), /* @__PURE__ */ React.createElement("span", {
    className: "text-gray-600 text-sm"
  }, "Securely pay online with Belize's various digital wallets"));
}

// app/components/payment-amount.tsx
init_react();
function PaymentAmount({ amount, type, invoice }) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "w-full flex flex-col items-center mb-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-row items-end mr-2"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text-7xl font-bold text-indigo-500"
  }, "$", amount), /* @__PURE__ */ React.createElement("span", {
    className: "text-2xl font-medium text-indigo-400"
  }, type)), /* @__PURE__ */ React.createElement("span", {
    className: "text-gray-900"
  }, invoice));
}

// app/domain/payments/repositories/payment-repository.ts
init_react();

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
    operatingSystem: "Android",
    SID: "2324518403"
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

// app/domain/payments/repositories/payment-repository.ts
var PaymentRepository = class {
  static async rebuildEntity(data) {
    if (!data || typeof data === "undefined") {
      return null;
    }
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

// route:/Users/derrickbol/dev/kraabu/app/routes/payments/ekyash/pay-with-phone.tsx
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
    return (0, import_remix3.json)({ message: "no payment with this invoice no" }, 404);
  }
  const payment = await PaymentRepository.getPaymentByInvoice(invoiceNo);
  return (0, import_remix3.json)({
    alive: true,
    payment
  });
};
var action = async ({ request }) => {
  const formData = await request.formData();
  if (!formData.get("name") || !formData.get("phone")) {
    throw new Error("Email and phone are both required.");
  }
  const searchParams = new URL(request.url).searchParams;
  const invoiceNo = searchParams.get("invoiceNo");
  if (!invoiceNo) {
    return (0, import_remix3.json)({ message: "no payment with this invoice no" }, 404);
  }
  const payment = await PaymentRepository.getPaymentByInvoice(invoiceNo);
};
var blockInvalidNumberChar = (e) => {
  return ["e", "E", "+"].includes(e.key) && e.preventDefault();
};
function EKyash() {
  const data = (0, import_remix3.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "h-full w-full flex items-center justify-center text-gray-800"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "my-auto leading-relaxed"
  }, /* @__PURE__ */ React.createElement(KrabuuHeader, null), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col border-[1px] container shadow-md rounded p-4 w-[560px] min-h-[480px]"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-xl font-medium pb-4 text-gray-900"
  }, "GiggedBz is requesting payment for your order using the EKyash digital wallet."), /* @__PURE__ */ React.createElement(PaymentAmount, {
    type: data.payment.currency.type,
    invoice: data.payment.invoice,
    amount: data.payment.currency.amount
  }), /* @__PURE__ */ React.createElement("span", {
    className: "text-gray-500 pb-4"
  }, "Please enter your phone number linked to your EKyash account in order to receive your payment request."), /* @__PURE__ */ React.createElement(import_remix3.Form, {
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

// route:/Users/derrickbol/dev/kraabu/app/routes/payments/ekyash/initiate.tsx
var initiate_exports = {};
__export(initiate_exports, {
  action: () => action2
});
init_react();
var import_remix4 = __toESM(require_remix());

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
var action2 = async ({ request }) => {
  var _a;
  try {
    const payment = await new CreatePendingEkyashPayment(request).call();
    return (0, import_remix4.json)((_a = payment.additionalData) == null ? void 0 : _a.paymentKey, 200);
  } catch (e) {
    return (0, import_remix4.json)({
      message: "Something unexpected happened. Please try again"
    }, 422);
  }
};

// route:/Users/derrickbol/dev/kraabu/app/routes/payments/ekyash/index.tsx
var ekyash_exports = {};
__export(ekyash_exports, {
  default: () => Index,
  loader: () => loader2
});
init_react();
var import_remix5 = __toESM(require_remix());

// app/domain/payments/services/request-ekyash-payment-qr-code.ts
init_react();

// app/domain/payments/library/ekyash-api.ts
init_react();
var import_axios2 = __toESM(require("axios"));
var import_crypto_js = require("crypto-js");
var getJWTToken = async () => {
  const header = import_crypto_js.enc.Base64.stringify(import_crypto_js.enc.Utf8.parse(JSON.stringify({ alg: "HS256", typ: "JWT" })));
  const data = import_crypto_js.enc.Base64.stringify(import_crypto_js.enc.Utf8.parse(JSON.stringify({ mobile: ekyash.data.phone })));
  const signature = import_crypto_js.enc.Base64.stringify((0, import_crypto_js.HmacSHA256)(`${header}.${data}`, ekyash.headers.IMGE));
  return `${header}.${data}.${signature}`;
};
var getAuthorization = async (data) => {
  const jwt = await getJWTToken();
  console.log(import_crypto_js.enc.Base64.stringify((0, import_crypto_js.SHA256)(data.pinHash)));
  const response = await import_axios2.default.post(`${ekyash.api}/authorization`, __spreadProps(__spreadValues({}, data), {
    sid: String(data.sid)
  }), {
    headers: __spreadProps(__spreadValues({}, ekyash.headers), {
      Authorization: `Bearer ${jwt}`
    })
  });
  return response.data;
};
var createNewInvoice = async (data) => {
  const jwt = await getJWTToken();
  const response = await import_axios2.default.post(`${ekyash.api}/create-new-invoice`, __spreadValues({}, data), {
    headers: __spreadProps(__spreadValues({}, ekyash.headers), {
      Authorization: `Bearer ${jwt}`
    })
  });
  return response.data;
};

// app/domain/payments/services/request-ekyash-payment-qr-code.ts
var RequestEkyashPaymentQrCode = class {
  constructor(invoiceNo, paymentKey) {
    this.invoiceNo = invoiceNo;
    this.paymentKey = paymentKey;
  }
  async call() {
    const pendingPayment = await PaymentRepository.getPaymentByInvoice(this.invoiceNo);
    if (!pendingPayment) {
      throw new Error("Payment with the given invoice does not exist.");
    }
    const session = await getAuthorization({
      sid: ekyash.credentials.SID,
      pinHash: ekyash.credentials["Pin Hash"],
      pushKey: ""
    });
    console.log(session);
    const paymentResponse = await createNewInvoice({
      amount: pendingPayment.currency.amount,
      description: pendingPayment.description,
      currency: "BZD",
      orderId: pendingPayment.invoice,
      session: session.Session
    });
    console.log(paymentResponse);
    const inProgressPayment = await PaymentRepository.setPaymentQrCodeUrl(pendingPayment, paymentResponse.qrUrl);
    if (!inProgressPayment) {
      throw new Error("Something unexpected happened with this payment.");
    }
    return inProgressPayment;
  }
};

// route:/Users/derrickbol/dev/kraabu/app/routes/payments/ekyash/index.tsx
var loader2 = async ({ request }) => {
  const searchParams = new URL(request.url).searchParams;
  const invoiceNo = searchParams.get("invoiceNo");
  const paymentKey = searchParams.get("paykey");
  if (!invoiceNo || !paymentKey) {
    return (0, import_remix5.json)({ message: "no payment with this invoice no" }, 404);
  }
  const payment = await new RequestEkyashPaymentQrCode(invoiceNo, paymentKey).call();
  return (0, import_remix5.json)({
    payment
  });
};
function Index() {
  var _a, _b;
  const data = (0, import_remix5.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "h-full w-full flex items-center justify-center text-gray-800"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "my-auto leading-relaxed"
  }, /* @__PURE__ */ React.createElement(KrabuuHeader, null), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col border-[1px] container shadow-md rounded p-4 w-[560px] min-h-[480px]"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-xl font-medium pb-2 text-gray-900"
  }, "GiggedBz is requesting payment for your order with EKyash."), /* @__PURE__ */ React.createElement(PaymentAmount, {
    amount: data.payment.currency.amount,
    type: data.payment.currency.type,
    invoice: data.payment.invoice
  }), /* @__PURE__ */ React.createElement("span", {
    className: "text-medium text-base pb-4 text-gray-500"
  }, "Please scan the QR code to make payment with your EKyash app."), ((_a = data.payment.additionalData) == null ? void 0 : _a.qrCodeUrl) ? /* @__PURE__ */ React.createElement("img", {
    src: (_b = data.payment.additionalData) == null ? void 0 : _b.qrCodeUrl,
    alt: "payment qr code"
  }) : /* @__PURE__ */ React.createElement("div", {
    className: "w-full py-2 px-4 bg-red-200 rounded-md"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text-red-700"
  }, "Oh, no! Something unexpected happened. Don't worry, your wallet has not been charged.")))));
}

// route:/Users/derrickbol/dev/kraabu/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index2
});
init_react();
function Index2() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "h-full w-full flex items-center justify-center"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "font-bold text-3xl text-gray-800"
  }, "Quickly integrate and accept online payments in Belize with various supported e-wallets!"));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "69470a55", "entry": { "module": "/build/entry.client-ANDNFDEO.js", "imports": ["/build/_shared/chunk-GO7C5GN2.js", "/build/_shared/chunk-P2FTGPOX.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-FOY5GYLF.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-J3MPNNQZ.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/payments/ekyash/index": { "id": "routes/payments/ekyash/index", "parentId": "root", "path": "payments/ekyash", "index": true, "caseSensitive": void 0, "module": "/build/routes/payments/ekyash/index-V6H4FKM3.js", "imports": ["/build/_shared/chunk-F4EUBN3J.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/payments/ekyash/initiate": { "id": "routes/payments/ekyash/initiate", "parentId": "root", "path": "payments/ekyash/initiate", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/payments/ekyash/initiate-AZVSOMJO.js", "imports": ["/build/_shared/chunk-VFN4SGLK.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/payments/ekyash/pay-with-phone": { "id": "routes/payments/ekyash/pay-with-phone", "parentId": "root", "path": "payments/ekyash/pay-with-phone", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/payments/ekyash/pay-with-phone-B65LN7CQ.js", "imports": ["/build/_shared/chunk-VFN4SGLK.js", "/build/_shared/chunk-F4EUBN3J.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-69470A55.js" };

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
  "routes/payments/ekyash/pay-with-phone": {
    id: "routes/payments/ekyash/pay-with-phone",
    parentId: "root",
    path: "payments/ekyash/pay-with-phone",
    index: void 0,
    caseSensitive: void 0,
    module: pay_with_phone_exports
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICIuLi9zZXJ2ZXIuanMiLCAic2VydmVyLWVudHJ5LW1vZHVsZTpAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGQiLCAiLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGU6L1VzZXJzL2RlcnJpY2tib2wvZGV2L2tyYWFidS9hcHAvcm9vdC50c3giLCAicm91dGU6L1VzZXJzL2RlcnJpY2tib2wvZGV2L2tyYWFidS9hcHAvcm91dGVzL3BheW1lbnRzL2VreWFzaC9wYXktd2l0aC1waG9uZS50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMva3JhYnV1LWhlYWRlci50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvcGF5bWVudC1hbW91bnQudHN4IiwgIi4uL2FwcC9kb21haW4vcGF5bWVudHMvcmVwb3NpdG9yaWVzL3BheW1lbnQtcmVwb3NpdG9yeS50cyIsICIuLi9hcHAvY29uZmlnL2luZGV4LnNlcnZlci50cyIsICIuLi9hcHAvZG9tYWluL3BheW1lbnRzL2VudGl0aWVzL3BheW1lbnQudHMiLCAicm91dGU6L1VzZXJzL2RlcnJpY2tib2wvZGV2L2tyYWFidS9hcHAvcm91dGVzL3BheW1lbnRzL2VreWFzaC9pbml0aWF0ZS50c3giLCAiLi4vYXBwL2RvbWFpbi9wYXltZW50cy9zZXJ2aWNlcy9jcmVhdGUtcGVuZGluZy1la3lhc2gtcGF5bWVudC50cyIsICIuLi9hcHAvcmVxdWVzdHMvY3JlYXRlLXBlbmRpbmctZWt5YXNoLXBheW1lbnQudHMiLCAiLi4vYXBwL2RvbWFpbi9wYXltZW50cy9tYXBwZXJzL2FyY2FkaWVyLXBheW1lbnQtbWFwcGVyLnRzIiwgInJvdXRlOi9Vc2Vycy9kZXJyaWNrYm9sL2Rldi9rcmFhYnUvYXBwL3JvdXRlcy9wYXltZW50cy9la3lhc2gvaW5kZXgudHN4IiwgIi4uL2FwcC9kb21haW4vcGF5bWVudHMvc2VydmljZXMvcmVxdWVzdC1la3lhc2gtcGF5bWVudC1xci1jb2RlLnRzIiwgIi4uL2FwcC9kb21haW4vcGF5bWVudHMvbGlicmFyeS9la3lhc2gtYXBpLnRzIiwgInJvdXRlOi9Vc2Vycy9kZXJyaWNrYm9sL2Rldi9rcmFhYnUvYXBwL3JvdXRlcy9pbmRleC50c3giLCAic2VydmVyLWFzc2V0cy1tYW5pZmVzdDpAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3QiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHsgUmVhY3QgfTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vbm9kZSB2MS4yLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgbm9kZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vbm9kZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YTsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZSB2MS4yLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgc2VydmVyUnVudGltZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc0Nvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnanNvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmpzb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyZWRpcmVjdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLnJlZGlyZWN0OyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3JlYWN0IHYxLjIuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciByZWFjdCA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vcmVhY3QnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRm9ybScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5Gb3JtOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaXZlUmVsb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpdmVSZWxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNZXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk1ldGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdOYXZMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk5hdkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUHJlZmV0Y2hQYWdlTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUHJlZmV0Y2hQYWdlTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peEJyb3dzZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhCcm93c2VyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhTZXJ2ZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhTZXJ2ZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JpcHRzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcmlwdHM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JvbGxSZXN0b3JhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JvbGxSZXN0b3JhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUFjdGlvbkRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQWN0aW9uRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUJlZm9yZVVubG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VCZWZvcmVVbmxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VDYXRjaCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VDYXRjaDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXJzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRm9ybUFjdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGb3JtQWN0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlSHJlZicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VIcmVmOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9hZGVyRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2FkZXJEYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9jYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9jYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VNYXRjaGVzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU1hdGNoZXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0ZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRpb25UeXBlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRpb25UeXBlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldENvbnRleHQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0Q29udGV4dDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VSZXNvbHZlZFBhdGgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUmVzb2x2ZWRQYXRoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU2VhcmNoUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVNlYXJjaFBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVN1Ym1pdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTdWJtaXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VUcmFuc2l0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVRyYW5zaXRpb247IH1cbn0pO1xuXG4iLCAiaW1wb3J0IGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCBjb21wcmVzc2lvbiBmcm9tIFwiY29tcHJlc3Npb25cIjtcbmltcG9ydCBtb3JnYW4gZnJvbSBcIm1vcmdhblwiO1xuaW1wb3J0IHsgY3JlYXRlUmVxdWVzdEhhbmRsZXIgfSBmcm9tIFwiQHJlbWl4LXJ1bi9leHByZXNzXCI7XG5cbmltcG9ydCAqIGFzIHNlcnZlckJ1aWxkIGZyb20gXCJAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGRcIjtcblxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuXG5hcHAudXNlKGNvbXByZXNzaW9uKCkpO1xuXG4vLyBodHRwOi8vZXhwcmVzc2pzLmNvbS9lbi9hZHZhbmNlZC9iZXN0LXByYWN0aWNlLXNlY3VyaXR5Lmh0bWwjYXQtYS1taW5pbXVtLWRpc2FibGUteC1wb3dlcmVkLWJ5LWhlYWRlclxuYXBwLmRpc2FibGUoXCJ4LXBvd2VyZWQtYnlcIik7XG5cbi8vIFJlbWl4IGZpbmdlcnByaW50cyBpdHMgYXNzZXRzIHNvIHdlIGNhbiBjYWNoZSBmb3JldmVyLlxuYXBwLnVzZShcbiAgXCIvYnVpbGRcIixcbiAgZXhwcmVzcy5zdGF0aWMoXCJwdWJsaWMvYnVpbGRcIiwgeyBpbW11dGFibGU6IHRydWUsIG1heEFnZTogXCIxeVwiIH0pXG4pO1xuXG4vLyBFdmVyeXRoaW5nIGVsc2UgKGxpa2UgZmF2aWNvbi5pY28pIGlzIGNhY2hlZCBmb3IgYW4gaG91ci4gWW91IG1heSB3YW50IHRvIGJlXG4vLyBtb3JlIGFnZ3Jlc3NpdmUgd2l0aCB0aGlzIGNhY2hpbmcuXG5hcHAudXNlKGV4cHJlc3Muc3RhdGljKFwicHVibGljL2J1aWxkXCIsIHsgbWF4QWdlOiBcIjFoXCIgfSkpO1xuXG5hcHAudXNlKG1vcmdhbihcInRpbnlcIikpO1xuXG5hcHAuYWxsKFxuICBcIipcIixcbiAgY3JlYXRlUmVxdWVzdEhhbmRsZXIoe1xuICAgIGJ1aWxkOiBzZXJ2ZXJCdWlsZCxcbiAgICBtb2RlOiBwcm9jZXNzLmVudi5OT0RFX0VOVlxuICB9KVxuKTtcblxuY29uc3QgcG9ydCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgMzAwMDtcblxuYXBwLmxpc3Rlbihwb3J0LCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKGBFeHByZXNzIHNlcnZlciBsaXN0ZW5pbmcgb24gcG9ydCAke3BvcnR9YCk7XG59KTtcbiIsICJcbmltcG9ydCAqIGFzIGVudHJ5U2VydmVyIGZyb20gXCIvVXNlcnMvZGVycmlja2JvbC9kZXYva3JhYWJ1L2FwcC9lbnRyeS5zZXJ2ZXIudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTAgZnJvbSBcIi9Vc2Vycy9kZXJyaWNrYm9sL2Rldi9rcmFhYnUvYXBwL3Jvb3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIi9Vc2Vycy9kZXJyaWNrYm9sL2Rldi9rcmFhYnUvYXBwL3JvdXRlcy9wYXltZW50cy9la3lhc2gvcGF5LXdpdGgtcGhvbmUudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTIgZnJvbSBcIi9Vc2Vycy9kZXJyaWNrYm9sL2Rldi9rcmFhYnUvYXBwL3JvdXRlcy9wYXltZW50cy9la3lhc2gvaW5pdGlhdGUudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTMgZnJvbSBcIi9Vc2Vycy9kZXJyaWNrYm9sL2Rldi9rcmFhYnUvYXBwL3JvdXRlcy9wYXltZW50cy9la3lhc2gvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTQgZnJvbSBcIi9Vc2Vycy9kZXJyaWNrYm9sL2Rldi9rcmFhYnUvYXBwL3JvdXRlcy9pbmRleC50c3hcIjtcbiAgZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NldHMgfSBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0XCI7XG4gIGV4cG9ydCBjb25zdCBlbnRyeSA9IHsgbW9kdWxlOiBlbnRyeVNlcnZlciB9O1xuICBleHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICAgIFwicm9vdFwiOiB7XG4gICAgICBpZDogXCJyb290XCIsXG4gICAgICBwYXJlbnRJZDogdW5kZWZpbmVkLFxuICAgICAgcGF0aDogXCJcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMFxuICAgIH0sXG4gIFwicm91dGVzL3BheW1lbnRzL2VreWFzaC9wYXktd2l0aC1waG9uZVwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvcGF5bWVudHMvZWt5YXNoL3BheS13aXRoLXBob25lXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInBheW1lbnRzL2VreWFzaC9wYXktd2l0aC1waG9uZVwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxXG4gICAgfSxcbiAgXCJyb3V0ZXMvcGF5bWVudHMvZWt5YXNoL2luaXRpYXRlXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9wYXltZW50cy9la3lhc2gvaW5pdGlhdGVcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwicGF5bWVudHMvZWt5YXNoL2luaXRpYXRlXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTJcbiAgICB9LFxuICBcInJvdXRlcy9wYXltZW50cy9la3lhc2gvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3BheW1lbnRzL2VreWFzaC9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJwYXltZW50cy9la3lhc2hcIixcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTNcbiAgICB9LFxuICBcInJvdXRlcy9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTRcbiAgICB9XG4gIH07IiwgImltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IEVudHJ5Q29udGV4dCB9IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KFxuICByZXF1ZXN0OiBSZXF1ZXN0LFxuICByZXNwb25zZVN0YXR1c0NvZGU6IG51bWJlcixcbiAgcmVzcG9uc2VIZWFkZXJzOiBIZWFkZXJzLFxuICByZW1peENvbnRleHQ6IEVudHJ5Q29udGV4dFxuKSB7XG4gIGNvbnN0IG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKFxuICAgIDxSZW1peFNlcnZlciBjb250ZXh0PXtyZW1peENvbnRleHR9IHVybD17cmVxdWVzdC51cmx9IC8+XG4gICk7XG5cbiAgcmVzcG9uc2VIZWFkZXJzLnNldChcIkNvbnRlbnQtVHlwZVwiLCBcInRleHQvaHRtbFwiKTtcblxuICByZXR1cm4gbmV3IFJlc3BvbnNlKFwiPCFET0NUWVBFIGh0bWw+XCIgKyBtYXJrdXAsIHtcbiAgICBzdGF0dXM6IHJlc3BvbnNlU3RhdHVzQ29kZSxcbiAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnNcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBMaW5rc0Z1bmN0aW9uLCBNZXRhRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7XG4gIExpbmtzLFxuICBMaXZlUmVsb2FkLFxuICBNZXRhLFxuICBPdXRsZXQsXG4gIFNjcmlwdHMsXG4gIFNjcm9sbFJlc3RvcmF0aW9uLFxufSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzL2FwcC5jc3NcIjtcblxuZXhwb3J0IGxldCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIFt7IHJlbDogXCJzdHlsZXNoZWV0XCIsIGhyZWY6IHN0eWxlcyB9XTtcbn07XG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiB7IHRpdGxlOiBcIk5ldyBSZW1peCBBcHBcIiB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuICByZXR1cm4gKFxuICAgIDxodG1sIGxhbmc9XCJlblwiIGNsYXNzTmFtZT1cImgtZnVsbCB3LWZ1bGxcIj5cbiAgICAgIDxoZWFkPlxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgIDxNZXRhIC8+XG4gICAgICAgIDxMaW5rcyAvPlxuICAgICAgPC9oZWFkPlxuICAgICAgPGJvZHkgY2xhc3NOYW1lPVwiaC1mdWxsIHctZnVsbFwiPlxuICAgICAgICA8T3V0bGV0IC8+XG4gICAgICAgIDxTY3JvbGxSZXN0b3JhdGlvbiAvPlxuICAgICAgICA8U2NyaXB0cyAvPlxuICAgICAgICA8TGl2ZVJlbG9hZCAvPlxuICAgICAgPC9ib2R5PlxuICAgIDwvaHRtbD5cbiAgKTtcbn1cbiIsICJpbXBvcnQge1xuICBBY3Rpb25GdW5jdGlvbixcbiAgRm9ybSxcbiAganNvbixcbiAgTG9hZGVyRnVuY3Rpb24sXG4gIE1ldGFGdW5jdGlvbixcbiAgdXNlTG9hZGVyRGF0YSxcbn0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgS3JhYnV1SGVhZGVyIGZyb20gXCJ+L2NvbXBvbmVudHMva3JhYnV1LWhlYWRlclwiO1xuaW1wb3J0IFBheW1lbnRBbW91bnQgZnJvbSBcIn4vY29tcG9uZW50cy9wYXltZW50LWFtb3VudFwiO1xuaW1wb3J0IFBheW1lbnQgZnJvbSBcIn4vZG9tYWluL3BheW1lbnRzL2VudGl0aWVzL3BheW1lbnRcIjtcbmltcG9ydCBQYXltZW50UmVwb3NpdG9yeSBmcm9tIFwifi9kb21haW4vcGF5bWVudHMvcmVwb3NpdG9yaWVzL3BheW1lbnQtcmVwb3NpdG9yeVwiO1xuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiBcIkNvbXBsZXRlIEdpZ2dlZEJ6IEJvb2tpbmcgUGF5bWVudCB8IEtyYWJ1dVwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJZb3UncmUgYWxtb3N0IGRvbmUgd2l0aCB5b3VyIEdpZ2dlZEJ6IGJvb2tpbmcuIE9uY2UgcGF5bWVudCBpcyBjb21wbGV0ZWQsIHlvdXIgYm9va2luZyB3aWxsIGJlIGNvbmZpcm1lZC5cIixcbiAgfTtcbn07XG5cbmV4cG9ydCBsZXQgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBjb25zdCBzZWFyY2hQYXJhbXMgPSBuZXcgVVJMKHJlcXVlc3QudXJsKS5zZWFyY2hQYXJhbXM7XG4gIGNvbnN0IGludm9pY2VObyA9IHNlYXJjaFBhcmFtcy5nZXQoXCJpbnZvaWNlTm9cIik7XG4gIGNvbnN0IHBheW1lbnRLZXkgPSBzZWFyY2hQYXJhbXMuZ2V0KFwicGF5a2V5XCIpO1xuXG4gIGlmICghaW52b2ljZU5vIHx8ICFwYXltZW50S2V5KSB7XG4gICAgcmV0dXJuIGpzb24oeyBtZXNzYWdlOiBcIm5vIHBheW1lbnQgd2l0aCB0aGlzIGludm9pY2Ugbm9cIiB9LCA0MDQpO1xuICB9XG5cbiAgY29uc3QgcGF5bWVudCA9IGF3YWl0IFBheW1lbnRSZXBvc2l0b3J5LmdldFBheW1lbnRCeUludm9pY2UoaW52b2ljZU5vKTtcblxuICByZXR1cm4ganNvbih7XG4gICAgYWxpdmU6IHRydWUsXG4gICAgcGF5bWVudDogcGF5bWVudCxcbiAgfSk7XG59O1xuXG5leHBvcnQgbGV0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgY29uc3QgZm9ybURhdGEgPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XG5cbiAgaWYgKCFmb3JtRGF0YS5nZXQoXCJuYW1lXCIpIHx8ICFmb3JtRGF0YS5nZXQoXCJwaG9uZVwiKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkVtYWlsIGFuZCBwaG9uZSBhcmUgYm90aCByZXF1aXJlZC5cIik7XG4gIH1cblxuICBjb25zdCBzZWFyY2hQYXJhbXMgPSBuZXcgVVJMKHJlcXVlc3QudXJsKS5zZWFyY2hQYXJhbXM7XG4gIGNvbnN0IGludm9pY2VObyA9IHNlYXJjaFBhcmFtcy5nZXQoXCJpbnZvaWNlTm9cIik7XG5cbiAgaWYgKCFpbnZvaWNlTm8pIHtcbiAgICByZXR1cm4ganNvbih7IG1lc3NhZ2U6IFwibm8gcGF5bWVudCB3aXRoIHRoaXMgaW52b2ljZSBub1wiIH0sIDQwNCk7XG4gIH1cblxuICBjb25zdCBwYXltZW50ID0gYXdhaXQgUGF5bWVudFJlcG9zaXRvcnkuZ2V0UGF5bWVudEJ5SW52b2ljZShcbiAgICBpbnZvaWNlTm8gYXMgc3RyaW5nXG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgYmxvY2tJbnZhbGlkTnVtYmVyQ2hhciA9IChlOiBhbnkpID0+IHtcbiAgcmV0dXJuIFtcImVcIiwgXCJFXCIsIFwiK1wiXS5pbmNsdWRlcyhlLmtleSkgJiYgZS5wcmV2ZW50RGVmYXVsdCgpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRUt5YXNoKCkge1xuICBjb25zdCBkYXRhID0gdXNlTG9hZGVyRGF0YSgpIGFzIHsgcGF5bWVudDogUGF5bWVudCB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoLWZ1bGwgdy1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtZ3JheS04MDBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktYXV0byBsZWFkaW5nLXJlbGF4ZWRcIj5cbiAgICAgICAgPEtyYWJ1dUhlYWRlciAvPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBib3JkZXItWzFweF0gY29udGFpbmVyIHNoYWRvdy1tZCByb3VuZGVkIHAtNCB3LVs1NjBweF0gbWluLWgtWzQ4MHB4XVwiPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtbWVkaXVtIHBiLTQgdGV4dC1ncmF5LTkwMFwiPlxuICAgICAgICAgICAgR2lnZ2VkQnogaXMgcmVxdWVzdGluZyBwYXltZW50IGZvciB5b3VyIG9yZGVyIHVzaW5nIHRoZSBFS3lhc2hcbiAgICAgICAgICAgIGRpZ2l0YWwgd2FsbGV0LlxuICAgICAgICAgIDwvaDI+XG5cbiAgICAgICAgICA8UGF5bWVudEFtb3VudFxuICAgICAgICAgICAgdHlwZT17ZGF0YS5wYXltZW50LmN1cnJlbmN5LnR5cGV9XG4gICAgICAgICAgICBpbnZvaWNlPXtkYXRhLnBheW1lbnQuaW52b2ljZX1cbiAgICAgICAgICAgIGFtb3VudD17ZGF0YS5wYXltZW50LmN1cnJlbmN5LmFtb3VudH1cbiAgICAgICAgICAvPlxuXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMCBwYi00XCI+XG4gICAgICAgICAgICBQbGVhc2UgZW50ZXIgeW91ciBwaG9uZSBudW1iZXIgbGlua2VkIHRvIHlvdXIgRUt5YXNoIGFjY291bnQgaW5cbiAgICAgICAgICAgIG9yZGVyIHRvIHJlY2VpdmUgeW91ciBwYXltZW50IHJlcXVlc3QuXG4gICAgICAgICAgPC9zcGFuPlxuXG4gICAgICAgICAgPEZvcm0gYWN0aW9uPVwiL3BheW1lbnRzL2VreWFzaFwiIG1ldGhvZD1cInBvc3RcIiBjbGFzc05hbWU9XCJtYi00XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgcGItNFwiPlxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIiBjbGFzc05hbWU9XCJmb250LW1lZGl1bSB0ZXh0LWdyYXktNjAwXCI+XG4gICAgICAgICAgICAgICAgWW91ciBuYW1lXG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgaWQ9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQteGwgZm9jdXM6cmluZy1pbmRpZ28tNTAwIGZvY3VzOmJvcmRlci1pbmRpZ28tNTAwIGJsb2NrIGJvcmRlci0yIHctZnVsbCBwbC03IHByLTEyIGZvbnQtbm9ybWFsIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kIHB5LTJcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiaS5lLiBKb2huIERvZVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHBiLTRcIj5cbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwaG9uZVwiIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtIHRleHQtZ3JheS02MDBcIj5cbiAgICAgICAgICAgICAgICBQaG9uZVxuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGVsXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwicGhvbmVcIlxuICAgICAgICAgICAgICAgIGlkPVwicGhvbmVcIlxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgcGF0dGVybj1cIlswLTldezN9LVswLTldezN9LVswLTldezR9XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvY3VzOnJpbmctaW5kaWdvLTUwMCBmb2N1czpib3JkZXItaW5kaWdvLTUwMCBibG9jayBib3JkZXItMiB3LWZ1bGwgcGwtNyBwci0xMiBmb250LW5vcm1hbCBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1tZCBweS0yXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImkuZS4gNTAxLTYyMS0xMjM0XCJcbiAgICAgICAgICAgICAgICBvbktleURvd249e2Jsb2NrSW52YWxpZE51bWJlckNoYXJ9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTQgcHktMiB0ZXh0LXhsIGJvcmRlci0yIHJvdW5kZWQtbWQgZm9jdXM6cmluZyBmb2N1czpyaW5nLWluZGlnby0xMDAgYm9yZGVyLWluZGlnby01MDAgYmctaW5kaWdvLTYwMCB0ZXh0LXdoaXRlXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgR2V0IFBheW1lbnQgUmVxdWVzdFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9Gb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEtyYWJ1dUhlYWRlcigpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgcGItNCBvcGFjaXR5LTUwIGhvdmVyOm9wYWNpdHktMTAwXCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkXCI+S3JhYnV1PC9oMT5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDAgdGV4dC1zbVwiPlxuICAgICAgICBTZWN1cmVseSBwYXkgb25saW5lIHdpdGggQmVsaXplJ3MgdmFyaW91cyBkaWdpdGFsIHdhbGxldHNcbiAgICAgIDwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJ0eXBlIFByb3BzID0ge1xuICBhbW91bnQ6IG51bWJlcjtcbiAgdHlwZTogc3RyaW5nO1xuICBpbnZvaWNlOiBzdHJpbmc7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYXltZW50QW1vdW50KHsgYW1vdW50LCB0eXBlLCBpbnZvaWNlIH06IFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgbWItNFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGl0ZW1zLWVuZCBtci0yXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtN3hsIGZvbnQtYm9sZCB0ZXh0LWluZGlnby01MDBcIj4ke2Ftb3VudH08L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtbWVkaXVtIHRleHQtaW5kaWdvLTQwMFwiPnt0eXBlfTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ncmF5LTkwMFwiPntpbnZvaWNlfTwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBzdXBhYmFzZSB9IGZyb20gXCJ+L2NvbmZpZy9pbmRleC5zZXJ2ZXJcIjtcbmltcG9ydCBQYXltZW50IGZyb20gXCIuLi9lbnRpdGllcy9wYXltZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBheW1lbnRSZXBvc2l0b3J5IHtcbiAgc3RhdGljIGFzeW5jIHJlYnVpbGRFbnRpdHkoZGF0YTogYW55KSB7XG4gICAgaWYgKCFkYXRhIHx8IHR5cGVvZiBkYXRhID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IFBheW1lbnQoe1xuICAgICAgYWRkaXRpb25hbERhdGE6IGRhdGE/LmFkZGl0aW9uYWxEYXRhLFxuICAgICAgY3VycmVuY3k6IHtcbiAgICAgICAgYW1vdW50OiBkYXRhPy5hbW91bnQsXG4gICAgICAgIHR5cGU6IGRhdGEuY3VycmVuY3ksXG4gICAgICB9LFxuICAgICAgZGVzY3JpcHRpb246IGRhdGE/LmRlc2NyaXB0aW9uLFxuICAgICAgaWQ6IGRhdGEuaWQsXG4gICAgICBpbnZvaWNlOiBkYXRhLmludm9pY2UsXG4gICAgICBzdGF0dXM6IGRhdGEuc3RhdHVzLFxuICAgICAgdXNlcjogZGF0YS51c2VyLFxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGFzeW5jIGNyZWF0ZVBlbmRpbmcoZGF0YTogUGF5bWVudCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHN1cGFiYXNlLmZyb20oXCJwYXltZW50c1wiKS5pbnNlcnQoW1xuICAgICAge1xuICAgICAgICBhZGRpdGlvbmFsRGF0YTogZGF0YS5hZGRpdGlvbmFsRGF0YSxcbiAgICAgICAgYW1vdW50OiBkYXRhLmN1cnJlbmN5LmFtb3VudCxcbiAgICAgICAgY3VycmVuY3k6IGRhdGEuY3VycmVuY3kudHlwZSxcbiAgICAgICAgZGVzY3JpcHRpb246IGRhdGEuZGVzY3JpcHRpb24sXG4gICAgICAgIGludm9pY2U6IGRhdGEuaW52b2ljZSxcbiAgICAgICAgc3RhdHVzOiBkYXRhLnN0YXR1cyxcbiAgICAgICAgdXNlcjogZGF0YS51c2VyLFxuICAgICAgfSxcbiAgICBdKTtcblxuICAgIHJldHVybiB0aGlzLnJlYnVpbGRFbnRpdHkocmVzdWx0LmJvZHk/LlswXSk7XG4gIH1cblxuICBzdGF0aWMgYXN5bmMgZ2V0UGF5bWVudEJ5SW52b2ljZShpbnZvaWNlOiBzdHJpbmcpIHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzdXBhYmFzZVxuICAgICAgLmZyb20oXCJwYXltZW50c1wiKVxuICAgICAgLnNlbGVjdChcIipcIilcbiAgICAgIC5lcShcImludm9pY2VcIiwgaW52b2ljZSk7XG5cbiAgICByZXR1cm4gdGhpcy5yZWJ1aWxkRW50aXR5KHJlc3VsdC5ib2R5Py5bMF0pO1xuICB9XG5cbiAgc3RhdGljIGFzeW5jIHNldFBheW1lbnRRckNvZGVVcmwocGF5bWVudDogUGF5bWVudCwgcXJDb2RlVXJsOiBzdHJpbmcpIHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzdXBhYmFzZVxuICAgICAgLmZyb20oXCJwYXltZW50c1wiKVxuICAgICAgLnVwc2VydCh7IGFkZGl0aW9uYWxEYXRhOiB7IHFyQ29kZVVybCB9IH0pXG4gICAgICAuZXEoXCJpbnZvaWNlXCIsIHBheW1lbnQuaW52b2ljZSk7XG5cbiAgICByZXR1cm4gdGhpcy5yZWJ1aWxkRW50aXR5KHJlc3VsdC5ib2R5Py5bMF0pO1xuICB9XG59XG4iLCAiaW1wb3J0IHsgY3JlYXRlQ2xpZW50IH0gZnJvbSBcIkBzdXBhYmFzZS9zdXBhYmFzZS1qc1wiO1xuaW1wb3J0IFwiZG90ZW52L2NvbmZpZ1wiO1xuXG5jb25zdCBla3lhc2ggPSB7XG4gIGFwaTogXCJodHRwczovL213LWFwaS1wcmVwcm9kLmUta3lhc2guY29tL2FwaS9xcnBvcy1hcHBcIixcbiAgcm91dGVzOiB7XG4gICAgYmFzZTogXCJodHRwczovL213LWFwaS1wcmVwcm9kLmUta3lhc2guY29tL2FwaS9xcnBvcy1hcHBcIixcbiAgICBvcmRlckRldGFpbHM6IFwiaHR0cHM6Ly9naWdnZWRiei5hcmNhZGllci5pby91c2VyL2NoZWNrb3V0L29yZGVyLWRldGFpbHNcIixcbiAgfSxcbiAgaGVhZGVyczoge1xuICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgIFwiQWNjZXB0LUxhbmd1YWdlXCI6IFwiZW5cIixcbiAgICBcIlRoZS1UaW1lem9uZS1JQU5BXCI6IFwiQmVsaXplXCIsXG4gICAgV0w6IFwiYmliaVwiLFxuICAgIElNR0U6IFwiQVBQS0VZMTctMDdBOC00QkFGLUFBMEYtQjE1NjhDNTAxN0EzXCIsXG4gICAgYXBwVmVyc2lvbjogXCI5OS4xLjFcIixcbiAgICBvcGVyYXRpbmdTeXN0ZW06IFwiQW5kcm9pZFwiLFxuICAgIFNJRDogXCIyMzI0NTE4NDAzXCIsXG4gIH0sXG4gIGNyZWRlbnRpYWxzOiB7XG4gICAgU0lEOiAyMzI0NTE4NDAzLFxuICAgIFwiUGluIEhhc2hcIjogXCJjZDgwMWZjNTRjOGRhNGVlNjkwY2YwMGVkMzRmNmJlYlwiLFxuICB9LFxuICBkYXRhOiB7XG4gICAgcGhvbmU6IFwiNTAxNjM3NjU3NFwiLFxuICB9LFxufTtcblxuY29uc3Qgc3VwYWJhc2VVcmwgPSBwcm9jZXNzLmVudi5SRUFDVF9BUFBfU1VQQUJBU0VfVVJMO1xuY29uc3Qgc3VwYWJhc2VBbm9uS2V5ID0gcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX1NVUEFCQVNFX0FOT05fS0VZO1xuXG5jb25zdCBzdXBhYmFzZSA9IGNyZWF0ZUNsaWVudChzdXBhYmFzZVVybCBhcyBzdHJpbmcsIHN1cGFiYXNlQW5vbktleSBhcyBzdHJpbmcpO1xuXG5leHBvcnQgeyBla3lhc2gsIHN1cGFiYXNlIH07XG4iLCAiZXhwb3J0IGNvbnN0IGVudW0gUGF5bWVudFN0YXR1cyB7XG4gIFBlbmRpbmcsXG4gIEluUHJvZ3Jlc3MsXG4gIGNvbXBsZXRlZCxcbn1cblxudHlwZSBQcm9wcyA9IHtcbiAgc3RhdHVzOiBQYXltZW50U3RhdHVzO1xuICB1c2VyOiBzdHJpbmc7XG4gIGlkPzogbnVtYmVyO1xuICBjdXJyZW5jeToge1xuICAgIGFtb3VudDogbnVtYmVyO1xuICAgIHR5cGU6IHN0cmluZztcbiAgfTtcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgY3JlYXRlZEF0PzogYW55O1xuICBpbnZvaWNlOiBzdHJpbmc7XG4gIGFkZGl0aW9uYWxEYXRhOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgbnVtYmVyO1xuICB9O1xufTtcblxuY2xhc3MgUGF5bWVudCB7XG4gIGFkZGl0aW9uYWxEYXRhOiBQcm9wc1tcImFkZGl0aW9uYWxEYXRhXCJdO1xuICBjcmVhdGVkQXQ6IFByb3BzW1wiY3JlYXRlZEF0XCJdO1xuICBjdXJyZW5jeTogUHJvcHNbXCJjdXJyZW5jeVwiXTtcbiAgZGVzY3JpcHRpb246IFByb3BzW1wiZGVzY3JpcHRpb25cIl07XG4gIGlkOiBQcm9wc1tcImlkXCJdO1xuICBpbnZvaWNlOiBQcm9wc1tcImludm9pY2VcIl07XG4gIHN0YXR1czogUHJvcHNbXCJzdGF0dXNcIl07XG4gIHVzZXI6IFByb3BzW1widXNlclwiXTtcblxuICBjb25zdHJ1Y3Rvcih7XG4gICAgYWRkaXRpb25hbERhdGEsXG4gICAgY3JlYXRlZEF0LFxuICAgIGN1cnJlbmN5LFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIGlkLFxuICAgIGludm9pY2UsXG4gICAgc3RhdHVzLFxuICAgIHVzZXIsXG4gIH06IFByb3BzKSB7XG4gICAgdGhpcy5hZGRpdGlvbmFsRGF0YSA9IGFkZGl0aW9uYWxEYXRhO1xuICAgIHRoaXMuY3JlYXRlZEF0ID0gY3JlYXRlZEF0O1xuICAgIHRoaXMuY3VycmVuY3kgPSBjdXJyZW5jeTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5pZCA9IGlkO1xuICAgIHRoaXMuaW52b2ljZSA9IGludm9pY2U7XG4gICAgdGhpcy5zdGF0dXMgPSBzdGF0dXM7XG4gICAgdGhpcy51c2VyID0gdXNlcjtcbiAgfVxuXG4gIGlzVmFsaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVuY3kuYW1vdW50ID4gMDtcbiAgfVxuXG4gIGlzUGVuZGluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0dXMgPT09IFBheW1lbnRTdGF0dXMuUGVuZGluZztcbiAgfVxuXG4gIGNhbk1hcmtJblByb2dyZXNzKCkge1xuICAgIHJldHVybiB0aGlzLmlzUGVuZGluZygpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBheW1lbnQ7XG4iLCAiaW1wb3J0IHsgQWN0aW9uRnVuY3Rpb24sIGpzb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCBDcmVhdGVQZW5kaW5nRWt5YXNoUGF5bWVudCBmcm9tIFwifi9kb21haW4vcGF5bWVudHMvc2VydmljZXMvY3JlYXRlLXBlbmRpbmctZWt5YXNoLXBheW1lbnRcIjtcblxuZXhwb3J0IGNvbnN0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBwYXltZW50ID0gYXdhaXQgbmV3IENyZWF0ZVBlbmRpbmdFa3lhc2hQYXltZW50KHJlcXVlc3QpLmNhbGwoKTtcblxuICAgIHJldHVybiBqc29uKHBheW1lbnQuYWRkaXRpb25hbERhdGE/LnBheW1lbnRLZXksIDIwMCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4ganNvbihcbiAgICAgIHtcbiAgICAgICAgbWVzc2FnZTogXCJTb21ldGhpbmcgdW5leHBlY3RlZCBoYXBwZW5lZC4gUGxlYXNlIHRyeSBhZ2FpblwiLFxuICAgICAgfSxcbiAgICAgIDQyMlxuICAgICk7XG4gIH1cbn07XG4iLCAiaW1wb3J0IHR5cGUgeyBBcmNhZGllclBheW1lbnRSZXF1ZXN0IH0gZnJvbSBcIn4vZG9tYWluL3BheW1lbnRzL2xpYnJhcnkvYXJjYWRpZXItYXBpXCI7XG5pbXBvcnQgY3JlYXRlUGVuZGluZ0VreWFzaFBheW1lbnRTY2hlbWEgZnJvbSBcIn4vcmVxdWVzdHMvY3JlYXRlLXBlbmRpbmctZWt5YXNoLXBheW1lbnRcIjtcbmltcG9ydCBQYXltZW50IGZyb20gXCIuLi9lbnRpdGllcy9wYXltZW50XCI7XG5pbXBvcnQgQXJjYWRpZXJQYXltZW50TWFwcGVyIGZyb20gXCIuLi9tYXBwZXJzL2FyY2FkaWVyLXBheW1lbnQtbWFwcGVyXCI7XG5pbXBvcnQgUGF5bWVudFJlcG9zaXRvcnkgZnJvbSBcIi4uL3JlcG9zaXRvcmllcy9wYXltZW50LXJlcG9zaXRvcnlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3JlYXRlUGVuZGluZ0VreWFzaFBheW1lbnQge1xuICBwcml2YXRlIHJlcXVlc3Q6IFJlcXVlc3Q7XG4gIHByaXZhdGUgcGF5bWVudDogQXJjYWRpZXJQYXltZW50UmVxdWVzdCB8IG51bGw7XG5cbiAgY29uc3RydWN0b3IocmVxdWVzdDogUmVxdWVzdCkge1xuICAgIHRoaXMucmVxdWVzdCA9IHJlcXVlc3Q7XG4gICAgdGhpcy5wYXltZW50ID0gbnVsbDtcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeVBheW1lbnRQYXJhbXMoKSB7XG4gICAgY29uc3QgYm9keSA9IGF3YWl0IHRoaXMucmVxdWVzdC5qc29uKCk7XG5cbiAgICB0aGlzLnBheW1lbnQgPSBhd2FpdCBjcmVhdGVQZW5kaW5nRWt5YXNoUGF5bWVudFNjaGVtYS52YWxpZGF0ZUFzeW5jKHtcbiAgICAgIC4uLmJvZHksXG4gICAgfSk7XG4gIH1cblxuICBhc3luYyBjYWxsKCk6IFByb21pc2U8UGF5bWVudD4ge1xuICAgIGF3YWl0IHRoaXMudmVyaWZ5UGF5bWVudFBhcmFtcygpO1xuXG4gICAgaWYgKCF0aGlzLnBheW1lbnQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIGRhdGEgZnJvbSBhcmNhZGllciByZWNlaXZlZC5cIik7XG4gICAgfVxuXG4gICAgY29uc3QgcGVuZGluZ1BheW1lbnQgPSBuZXcgQXJjYWRpZXJQYXltZW50TWFwcGVyKCkuZ2V0UGVuZGluZyh0aGlzLnBheW1lbnQpO1xuICAgIGNvbnN0IHBheW1lbnQgPSBhd2FpdCBQYXltZW50UmVwb3NpdG9yeS5jcmVhdGVQZW5kaW5nKHBlbmRpbmdQYXltZW50KTtcblxuICAgIHJldHVybiBwYXltZW50O1xuICB9XG59XG4iLCAiaW1wb3J0IGpvaSBmcm9tIFwiam9pXCI7XG5cbmNvbnN0IGNyZWF0ZVBlbmRpbmdFa3lhc2hQYXltZW50U2NoZW1hID0gam9pLm9iamVjdCh7XG4gIGludm9pY2Vubzogam9pLnN0cmluZygpLnJlcXVpcmVkKCksXG4gIGN1cnJlbmN5OiBqb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcbiAgdG90YWw6IGpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxuICBoYXNoa2V5OiBqb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcbiAgZ2F0ZXdheTogam9pLnN0cmluZygpLnJlcXVpcmVkKCksXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUGVuZGluZ0VreWFzaFBheW1lbnRTY2hlbWE7XG4iLCAiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgbmFub2lkIH0gZnJvbSBcIm5hbm9pZFwiO1xuaW1wb3J0IHsgZWt5YXNoIH0gZnJvbSBcIn4vY29uZmlnL2luZGV4LnNlcnZlclwiO1xuaW1wb3J0IFBheW1lbnQsIHsgUGF5bWVudFN0YXR1cyB9IGZyb20gXCIuLi9lbnRpdGllcy9wYXltZW50XCI7XG5pbXBvcnQgeyBBcmNhZGllclBheW1lbnRSZXF1ZXN0IH0gZnJvbSBcIi4uL2xpYnJhcnkvYXJjYWRpZXItYXBpXCI7XG5cbmNsYXNzIEFyY2FkaWVyUGF5bWVudE1hcHBlciB7XG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gZGF0YVxuICAgKiBAcmV0dXJucyBUaGUgaW5pdGlhbCBwYXltZW50IGRhdGEgc2VuZCBieSBhcmNhZGllclxuICAgKi9cbiAgZ2V0UGVuZGluZyhkYXRhOiBBcmNhZGllclBheW1lbnRSZXF1ZXN0KSB7XG4gICAgLy8gZG9uJ3QgZmluZDsganVzdCBidWlsZCB0aGUgZW50aXR5IGFzIHdlIGRvbid0IG5lZWQgdG8gcXVlcnkgYXJjYWRpZXIgZm9yIHRoaXMuXG4gICAgcmV0dXJuIHRoaXMuYnVpbGRFbnRpdHkoZGF0YSk7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIGRhdGFcbiAgICogQHJldHVybnMgUGF5bWVudCB3aXRoIHRoZSBvcmRlciBkZXRhaWxzIGZyb20gYXJjYWRpZXJcbiAgICovXG4gIGFzeW5jIGZpbmQoXG4gICAgZGF0YTogUGljazxBcmNhZGllclBheW1lbnRSZXF1ZXN0LCBcImdhdGV3YXlcIiB8IFwiaGFzaGtleVwiIHwgXCJpbnZvaWNlbm9cIj4gJiB7XG4gICAgICBwYXltZW50S2V5OiBzdHJpbmc7XG4gICAgfVxuICApIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcbiAgICAgIGAke2VreWFzaC5yb3V0ZXMub3JkZXJEZXRhaWxzfT9nYXRld2F5PSR7ZGF0YS5nYXRld2F5fSZpbnZvaWNlTm89JHtkYXRhLmludm9pY2Vub30mcGF5a2V5PSR7ZGF0YS5wYXltZW50S2V5fSZoYXNoa2V5PSR7ZGF0YS5oYXNoa2V5fWBcbiAgICApO1xuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBwcml2YXRlIGJ1aWxkRW50aXR5KGRhdGE6IEFyY2FkaWVyUGF5bWVudFJlcXVlc3QpOiBQYXltZW50IHtcbiAgICByZXR1cm4gbmV3IFBheW1lbnQoe1xuICAgICAgdXNlcjogXCJnaWdnZWRCelwiLFxuICAgICAgc3RhdHVzOiBQYXltZW50U3RhdHVzLlBlbmRpbmcsXG4gICAgICBjdXJyZW5jeToge1xuICAgICAgICBhbW91bnQ6IE51bWJlcihkYXRhLnRvdGFsKSxcbiAgICAgICAgdHlwZTogZGF0YS5jdXJyZW5jeSxcbiAgICAgIH0sXG4gICAgICBkZXNjcmlwdGlvbjogZGF0YS5pbnZvaWNlbm8sXG4gICAgICBpbnZvaWNlOiBkYXRhLmludm9pY2VubyxcbiAgICAgIGFkZGl0aW9uYWxEYXRhOiB7XG4gICAgICAgIGdhdGV3YXk6IGRhdGEuZ2F0ZXdheSxcbiAgICAgICAgaGFzaGtleTogZGF0YS5oYXNoa2V5LFxuICAgICAgICBwYXltZW50S2V5OiBuYW5vaWQoKSxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXJjYWRpZXJQYXltZW50TWFwcGVyO1xuIiwgImltcG9ydCB7IGpzb24sIExvYWRlckZ1bmN0aW9uLCB1c2VMb2FkZXJEYXRhIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgS3JhYnV1SGVhZGVyIGZyb20gXCJ+L2NvbXBvbmVudHMva3JhYnV1LWhlYWRlclwiO1xuaW1wb3J0IFBheW1lbnRBbW91bnQgZnJvbSBcIn4vY29tcG9uZW50cy9wYXltZW50LWFtb3VudFwiO1xuaW1wb3J0IFBheW1lbnQgZnJvbSBcIn4vZG9tYWluL3BheW1lbnRzL2VudGl0aWVzL3BheW1lbnRcIjtcbmltcG9ydCBSZXF1ZXN0RWt5YXNoUGF5bWVudFFyQ29kZSBmcm9tIFwifi9kb21haW4vcGF5bWVudHMvc2VydmljZXMvcmVxdWVzdC1la3lhc2gtcGF5bWVudC1xci1jb2RlXCI7XG5cbmV4cG9ydCBsZXQgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBjb25zdCBzZWFyY2hQYXJhbXMgPSBuZXcgVVJMKHJlcXVlc3QudXJsKS5zZWFyY2hQYXJhbXM7XG4gIGNvbnN0IGludm9pY2VObyA9IHNlYXJjaFBhcmFtcy5nZXQoXCJpbnZvaWNlTm9cIik7XG4gIGNvbnN0IHBheW1lbnRLZXkgPSBzZWFyY2hQYXJhbXMuZ2V0KFwicGF5a2V5XCIpO1xuXG4gIGlmICghaW52b2ljZU5vIHx8ICFwYXltZW50S2V5KSB7XG4gICAgcmV0dXJuIGpzb24oeyBtZXNzYWdlOiBcIm5vIHBheW1lbnQgd2l0aCB0aGlzIGludm9pY2Ugbm9cIiB9LCA0MDQpO1xuICB9XG5cbiAgY29uc3QgcGF5bWVudCA9IGF3YWl0IG5ldyBSZXF1ZXN0RWt5YXNoUGF5bWVudFFyQ29kZShcbiAgICBpbnZvaWNlTm8sXG4gICAgcGF5bWVudEtleVxuICApLmNhbGwoKTtcblxuICByZXR1cm4ganNvbih7XG4gICAgcGF5bWVudDogcGF5bWVudCxcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgY29uc3QgZGF0YSA9IHVzZUxvYWRlckRhdGEoKSBhcyB7IHBheW1lbnQ6IFBheW1lbnQgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1mdWxsIHctZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LWdyYXktODAwXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LWF1dG8gbGVhZGluZy1yZWxheGVkXCI+XG4gICAgICAgIDxLcmFidXVIZWFkZXIgLz5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgYm9yZGVyLVsxcHhdIGNvbnRhaW5lciBzaGFkb3ctbWQgcm91bmRlZCBwLTQgdy1bNTYwcHhdIG1pbi1oLVs0ODBweF1cIj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LW1lZGl1bSBwYi0yIHRleHQtZ3JheS05MDBcIj5cbiAgICAgICAgICAgIEdpZ2dlZEJ6IGlzIHJlcXVlc3RpbmcgcGF5bWVudCBmb3IgeW91ciBvcmRlciB3aXRoIEVLeWFzaC5cbiAgICAgICAgICA8L2gxPlxuXG4gICAgICAgICAgPFBheW1lbnRBbW91bnRcbiAgICAgICAgICAgIGFtb3VudD17ZGF0YS5wYXltZW50LmN1cnJlbmN5LmFtb3VudH1cbiAgICAgICAgICAgIHR5cGU9e2RhdGEucGF5bWVudC5jdXJyZW5jeS50eXBlfVxuICAgICAgICAgICAgaW52b2ljZT17ZGF0YS5wYXltZW50Lmludm9pY2V9XG4gICAgICAgICAgLz5cblxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbWVkaXVtIHRleHQtYmFzZSBwYi00IHRleHQtZ3JheS01MDBcIj5cbiAgICAgICAgICAgIFBsZWFzZSBzY2FuIHRoZSBRUiBjb2RlIHRvIG1ha2UgcGF5bWVudCB3aXRoIHlvdXIgRUt5YXNoIGFwcC5cbiAgICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgICB7ZGF0YS5wYXltZW50LmFkZGl0aW9uYWxEYXRhPy5xckNvZGVVcmwgPyAoXG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHNyYz17ZGF0YS5wYXltZW50LmFkZGl0aW9uYWxEYXRhPy5xckNvZGVVcmwgYXMgc3RyaW5nfVxuICAgICAgICAgICAgICBhbHQ9XCJwYXltZW50IHFyIGNvZGVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcHktMiBweC00IGJnLXJlZC0yMDAgcm91bmRlZC1tZFwiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXJlZC03MDBcIj5cbiAgICAgICAgICAgICAgICBPaCwgbm8hIFNvbWV0aGluZyB1bmV4cGVjdGVkIGhhcHBlbmVkLiBEb24ndCB3b3JyeSwgeW91ciB3YWxsZXRcbiAgICAgICAgICAgICAgICBoYXMgbm90IGJlZW4gY2hhcmdlZC5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBla3lhc2ggfSBmcm9tIFwifi9jb25maWcvaW5kZXguc2VydmVyXCI7XG5pbXBvcnQgeyBjcmVhdGVOZXdJbnZvaWNlLCBnZXRBdXRob3JpemF0aW9uIH0gZnJvbSBcIi4uL2xpYnJhcnkvZWt5YXNoLWFwaVwiO1xuaW1wb3J0IFBheW1lbnRSZXBvc2l0b3J5IGZyb20gXCIuLi9yZXBvc2l0b3JpZXMvcGF5bWVudC1yZXBvc2l0b3J5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlcXVlc3RFa3lhc2hQYXltZW50UXJDb2RlIHtcbiAgcHJpdmF0ZSBpbnZvaWNlTm86IHN0cmluZztcbiAgcHJpdmF0ZSBwYXltZW50S2V5OiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoaW52b2ljZU5vOiBzdHJpbmcsIHBheW1lbnRLZXk6IHN0cmluZykge1xuICAgIHRoaXMuaW52b2ljZU5vID0gaW52b2ljZU5vO1xuICAgIHRoaXMucGF5bWVudEtleSA9IHBheW1lbnRLZXk7XG4gIH1cblxuICBhc3luYyBjYWxsKCkge1xuICAgIGNvbnN0IHBlbmRpbmdQYXltZW50ID0gYXdhaXQgUGF5bWVudFJlcG9zaXRvcnkuZ2V0UGF5bWVudEJ5SW52b2ljZShcbiAgICAgIHRoaXMuaW52b2ljZU5vXG4gICAgKTtcblxuICAgIGlmICghcGVuZGluZ1BheW1lbnQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlBheW1lbnQgd2l0aCB0aGUgZ2l2ZW4gaW52b2ljZSBkb2VzIG5vdCBleGlzdC5cIik7XG4gICAgfVxuXG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldEF1dGhvcml6YXRpb24oe1xuICAgICAgc2lkOiBla3lhc2guY3JlZGVudGlhbHMuU0lELFxuICAgICAgcGluSGFzaDogZWt5YXNoLmNyZWRlbnRpYWxzW1wiUGluIEhhc2hcIl0sXG4gICAgICBwdXNoS2V5OiBcIlwiLFxuICAgIH0pO1xuXG4gICAgY29uc29sZS5sb2coc2Vzc2lvbik7XG5cbiAgICBjb25zdCBwYXltZW50UmVzcG9uc2UgPSBhd2FpdCBjcmVhdGVOZXdJbnZvaWNlKHtcbiAgICAgIGFtb3VudDogcGVuZGluZ1BheW1lbnQuY3VycmVuY3kuYW1vdW50LFxuICAgICAgZGVzY3JpcHRpb246IHBlbmRpbmdQYXltZW50LmRlc2NyaXB0aW9uLFxuICAgICAgY3VycmVuY3k6IFwiQlpEXCIsXG4gICAgICBvcmRlcklkOiBwZW5kaW5nUGF5bWVudC5pbnZvaWNlLFxuICAgICAgc2Vzc2lvbjogc2Vzc2lvbi5TZXNzaW9uLFxuICAgIH0pO1xuXG4gICAgY29uc29sZS5sb2cocGF5bWVudFJlc3BvbnNlKTtcblxuICAgIGNvbnN0IGluUHJvZ3Jlc3NQYXltZW50ID0gYXdhaXQgUGF5bWVudFJlcG9zaXRvcnkuc2V0UGF5bWVudFFyQ29kZVVybChcbiAgICAgIHBlbmRpbmdQYXltZW50LFxuICAgICAgcGF5bWVudFJlc3BvbnNlLnFyVXJsXG4gICAgKTtcblxuICAgIGlmICghaW5Qcm9ncmVzc1BheW1lbnQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlNvbWV0aGluZyB1bmV4cGVjdGVkIGhhcHBlbmVkIHdpdGggdGhpcyBwYXltZW50LlwiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW5Qcm9ncmVzc1BheW1lbnQ7XG4gIH1cbn1cbiIsICJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBlbmMsIEhtYWNTSEEyNTYsIFNIQTI1NiB9IGZyb20gXCJjcnlwdG8tanNcIjtcbmltcG9ydCB7IGVreWFzaCB9IGZyb20gXCJ+L2NvbmZpZy9pbmRleC5zZXJ2ZXJcIjtcblxuLyoqXG4gKiBCdWlsZHMgJiByZXR1cm5zIGEgSldUIHRva2VuIGZvciBjYWxscyB0byBFLWt5YXNoJ3MgQVBJLlxuICogQHJldHVybnNcbiAqL1xuY29uc3QgZ2V0SldUVG9rZW4gPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGhlYWRlciA9IGVuYy5CYXNlNjQuc3RyaW5naWZ5KFxuICAgIGVuYy5VdGY4LnBhcnNlKEpTT04uc3RyaW5naWZ5KHsgYWxnOiBcIkhTMjU2XCIsIHR5cDogXCJKV1RcIiB9KSlcbiAgKTtcblxuICBjb25zdCBkYXRhID0gZW5jLkJhc2U2NC5zdHJpbmdpZnkoXG4gICAgZW5jLlV0ZjgucGFyc2UoSlNPTi5zdHJpbmdpZnkoeyBtb2JpbGU6IGVreWFzaC5kYXRhLnBob25lIH0pKVxuICApO1xuXG4gIGNvbnN0IHNpZ25hdHVyZSA9IGVuYy5CYXNlNjQuc3RyaW5naWZ5KFxuICAgIEhtYWNTSEEyNTYoYCR7aGVhZGVyfS4ke2RhdGF9YCwgZWt5YXNoLmhlYWRlcnMuSU1HRSlcbiAgKTtcblxuICByZXR1cm4gYCR7aGVhZGVyfS4ke2RhdGF9LiR7c2lnbmF0dXJlfWA7XG59O1xuXG50eXBlIEF1dGhvcml6YXRpb25EYXRhID0ge1xuICAvKipcbiAgICogTWVyY2hhbnQgSUQgcHJvdmlkZWQgYnkgRWt5YXNoXG4gICAqL1xuICBzaWQ6IG51bWJlcjtcbiAgLyoqXG4gICAqIHBpbkhhc2gsIHByb3ZpZGVkIGJ5IEVreWFzaDogaGFzaCgnc2hhMjU2JywgbWQ1KCdwaW4nKSlcbiAgICovXG4gIHBpbkhhc2g6IHN0cmluZztcbiAgLyoqXG4gICAqIGFsd2F5cyBwcm92aWRlZCBhcyBhbiBlbXB0eSBzdHJpbmdcbiAgICovXG4gIHB1c2hLZXk6IFwiXCI7XG59O1xuXG50eXBlIEF1dGhvcml6YXRpb25SZXNwb25zZSA9IHtcbiAgLyoqXG4gICAqIFRoaXMgc2Vzc2lvbiBJRCB0aGF0IHNob3VsZCBiZSB1c2VkIGZvciBzdWJzZXF1ZW50IHJlcXVlc3RzLlxuICAgKi9cbiAgU2Vzc2lvbjogc3RyaW5nO1xuICBmaXJzdE5hbWU/OiBzdHJpbmc7XG4gIGxhc3ROYW1lPzogc3RyaW5nO1xuICAvKipcbiAgICogQXBwIG1vYmlsZSBzZXR0aW5nc1xuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiB7XG4gICAqICAgXCJuYW1lU2V0dGluZ3NcIjogXCJ2YWx1ZVwiXG4gICAqIH1cbiAgICovXG4gIFNldHRpbmdzPzogYW55O1xufTtcblxuLyoqXG4gKiBSZXF1ZXN0IGEgc2Vzc2lvbiBrZXkgZnJvbSBFLUt5YXNoJ3MgQVBJIGluIG9yZGVyIHRvIGF1dGhvcml6ZSByZXF1ZXN0cy5cbiAqIEByZXR1cm5zXG4gKi9cbmNvbnN0IGdldEF1dGhvcml6YXRpb24gPSBhc3luYyAoXG4gIGRhdGE6IEF1dGhvcml6YXRpb25EYXRhXG4pOiBQcm9taXNlPEF1dGhvcml6YXRpb25SZXNwb25zZT4gPT4ge1xuICBjb25zdCBqd3QgPSBhd2FpdCBnZXRKV1RUb2tlbigpO1xuXG4gIGNvbnNvbGUubG9nKGVuYy5CYXNlNjQuc3RyaW5naWZ5KFNIQTI1NihkYXRhLnBpbkhhc2gpKSk7XG5cbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFxuICAgIGAke2VreWFzaC5hcGl9L2F1dGhvcml6YXRpb25gLFxuICAgIHtcbiAgICAgIC4uLmRhdGEsXG4gICAgICBzaWQ6IFN0cmluZyhkYXRhLnNpZCksXG4gICAgfSxcbiAgICB7XG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIC4uLmVreWFzaC5oZWFkZXJzLFxuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7and0fWAsXG4gICAgICB9LFxuICAgIH1cbiAgKTtcblxuICByZXR1cm4gcmVzcG9uc2UuZGF0YSBhcyBBdXRob3JpemF0aW9uUmVzcG9uc2U7XG59O1xuXG5leHBvcnQgdHlwZSBOZXdJbnZvaWNlRGF0YSA9IHtcbiAgLyoqXG4gICAqIFNlc3Npb24gSWQgZm9yIHRvIGF1dGhvcml6ZSByZXF1ZXN0LlxuICAgKi9cbiAgc2Vzc2lvbjogc3RyaW5nO1xuICAvKipcbiAgICogSWQgb2YgdGhlIG9yZGVyIGJlaW5nIGNhcnJpZWQgb3V0XG4gICAqL1xuICBvcmRlcklkOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBBbW91bnQgaW4gY2VudHMuXG4gICAqL1xuICBhbW91bnQ6IG51bWJlcjtcbiAgLyoqXG4gICAqIEN1cnJlbmN5IGluIElTTyA0MjE3IGZvcm1hdC5cbiAgICovXG4gIGN1cnJlbmN5OiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBQaG9uZSBudW1iZXIgb2YgdGhlIGN1c3RvbWVyIHRoYXQgd2lsbCBwYXkgdGhlIHJlcXVlc3RcbiAgICovXG4gIHBheWVyPzogbnVtYmVyO1xuICAvKipcbiAgICogTWV0YWRhdGEgcmVsYXRlZCB0byB0aGUgaXRlbXMgYmVpbmcgcGF5ZWQgZm9yLlxuICAgKiBAZXhhbXBsZVxuICAgKiB7XG4gICAqICAgXCJmaWVsZFwiOiBcInZhbHVlXCJcbiAgICogfVxuICAgKi9cbiAgZmllbGRzT3RoZXI/OiBPYmplY3QgfCBhbnlbXTtcbiAgLyoqXG4gICAqIFNpbWlsYXIgdG8gZmllbGRzT3RoZXIgYnV0IGFyZSB1c2VkIG9ubHkgb24gbW9iaWxlIHBob25lcy5cbiAgICogQGV4YW1wbGVcbiAgICoge1xuICAgKiAgIFwiZmllbGRcIjogXCJ2YWx1ZVwiXG4gICAqIH1cbiAgICovXG4gIGZpZWxkc0FwcD86IE9iamVjdCB8IGFueVtdO1xuICAvKipcbiAgICogQmVmb3JlIHRoZSBtZXJjaGFudCBjcmVhdGVzIHRoZVxuICAgKiBpbnZvaWNlLCB0aGUgbWVyY2hhbnQgY2FuIGNhbGwgdGhlXG4gICAqIFx1MjAxQ1VwbG9hZEltYWdlXHUyMDFEIGVuZHBvaW50IHRvIHVwbG9hZCBhblxuICAgKiBpbWFnZSAoZm9yIGV4YW1wbGUgdGhlIGludm9pY2UpLiBXaGVuXG4gICAqIHRoZSBjYWxsIHRvIGNyZWF0ZSB0aGUgaW52b2ljZSBpcyBtYWRlLFxuICAgKiB0aGUgTWVyY2hhbnQgY2FuIHNwZWNpZnkgdGhlIGltYWdlXG4gICAqIG5hbWUgaW4gdGhpcyBmaWVsZC4gVGhlIGN1c3RvbWVyIHdpbGxcbiAgICogcmVjZWl2ZSB0aGUgaW1hZ2UgYW5kIGRldGFpbHMgd2hlblxuICAgKiB0aGV5IHJlY2VpdmUgdGhlIG5vdGlmaWNhdGlvbi5cbiAgICovXG4gIHJlY2VpcHQ/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBJbnZvaWNlIGRhdGUgYW5kIHRpbWUgdW50aWwgaXQgZXhwaXJlcy5cbiAgICogQGV4YW1wbGVcbiAgICogMjAyMS0wMS0xNyAxNTo0NToxMlxuICAgKi9cbiAgZGF0ZUxpZmU/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBSZXVzYWJsZSBpbnZvaWNlXG4gICAqL1xuICBsb25nVGVybT86IGJvb2xlYW47XG59O1xuXG50eXBlIE5ld0ludm9pY2VSZXNwb25zZSA9IHtcbiAgLyoqXG4gICAqIEB0eXBlIEF1dGhvcml6YXRpb25SZXNwb25zZS5TZXNzaW9uXG4gICAqL1xuICBpbnZvaWNlSWQ6IG51bWJlcjtcbiAgLyoqXG4gICAqIExpbmsgdG8gdGhlIFFSIGNvZGUgb2YgdGhlIGludm9pY2UuXG4gICAqIEBleGFtcGxlIGh0dHBzOi8vZG9tYWluL3FyL2ludm9pY2UvMzY4MDUwMTQzODQ5XG4gICAqL1xuICBxclVybDogc3RyaW5nO1xuICAvKipcbiAgICogVGhlIGRhdGEgdGhhdCBpcyBpbiB0aGUgUVIgY29kZS5cbiAgICogQGV4YW1wbGUgMzY4MDUwMTQzODQ5XG4gICAqL1xuICBxckRhdGE6IHN0cmluZztcbiAgLyoqXG4gICAqIExpbmsgdG8gdGhlIHVwbG9hZGVkIGltYWdlIC0gc2UgcmVjZWlwdCBwYXJhbWV0ZXIgaW4gdGhlIHJlcXVlc3RcbiAgICogQGV4YW1wbGUgaHR0cHM6Ly9kb21haW4vcXIvaW52b2ljZS8zNjgwNTAxNDM4NDlcbiAgICovXG4gIHJlY2VpcHRVcmw6IHN0cmluZztcbn07XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBpbnZvaWNlIGZvciB1c2VycyB3aXRoIGEgc3BlY2lmaWVkIGFtb3VudCBpbiBCZWxpemUgRG9sbGFycy5cbiAqL1xuY29uc3QgY3JlYXRlTmV3SW52b2ljZSA9IGFzeW5jIChcbiAgZGF0YTogTmV3SW52b2ljZURhdGFcbik6IFByb21pc2U8TmV3SW52b2ljZVJlc3BvbnNlPiA9PiB7XG4gIGNvbnN0IGp3dCA9IGF3YWl0IGdldEpXVFRva2VuKCk7XG5cbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFxuICAgIGAke2VreWFzaC5hcGl9L2NyZWF0ZS1uZXctaW52b2ljZWAsXG4gICAge1xuICAgICAgLi4uZGF0YSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgLi4uZWt5YXNoLmhlYWRlcnMsXG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtqd3R9YCxcbiAgICAgIH0sXG4gICAgfVxuICApO1xuXG4gIHJldHVybiByZXNwb25zZS5kYXRhIGFzIE5ld0ludm9pY2VSZXNwb25zZTtcbn07XG5cbnR5cGUgVXBsb2FkSW52b2ljZUltYWdlRGF0YSA9IHtcbiAgLyoqXG4gICAqIFNlc3Npb24gSUQgYXV0aG9yaXppbmcgdGhlIHJlcXVlc3RcbiAgICovXG4gIHNlc3Npb246IHN0cmluZztcbiAgLyoqXG4gICAqIEltYWdlIHR5cGVcbiAgICovXG4gIGltYWdlVHlwZTogc3RyaW5nO1xuICAvKipcbiAgICogSW1hZ2UgZmlsZS4gVE9ETzogV2hhdCBmb3JtYXQgc2hvdWxkIHRoaXMgYmUgaW4/XG4gICAqL1xuICBmaWxlOiBhbnk7XG59O1xuXG50eXBlIFVwbG9hZEludm9pY2VJbWFnZVJlc3BvbnNlID0ge1xuICAvKipcbiAgICogVGhlIHJlc3VsdCBvZiB0aGUgYWN0aW9uXG4gICAqL1xuICBzdWNjZXNzPzogYm9vbGVhbjtcbn07XG5cbmNvbnN0IHVwbG9hZEludm9pY2VJbWFnZSA9IGFzeW5jIChkYXRhOiBVcGxvYWRJbnZvaWNlSW1hZ2VEYXRhKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChgJHtla3lhc2guYXBpfS91cGxvYWQtaW1hZ2VgLCB7XG4gICAgLi4uZGF0YSxcbiAgfSk7XG5cbiAgcmV0dXJuIHJlc3BvbnNlLmRhdGEgYXMgVXBsb2FkSW52b2ljZUltYWdlUmVzcG9uc2U7XG59O1xuXG5leHBvcnQgeyBnZXRKV1RUb2tlbiwgZ2V0QXV0aG9yaXphdGlvbiwgY3JlYXRlTmV3SW52b2ljZSwgdXBsb2FkSW52b2ljZUltYWdlIH07XG4iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoLWZ1bGwgdy1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtM3hsIHRleHQtZ3JheS04MDBcIj5cbiAgICAgICAgUXVpY2tseSBpbnRlZ3JhdGUgYW5kIGFjY2VwdCBvbmxpbmUgcGF5bWVudHMgaW4gQmVsaXplIHdpdGggdmFyaW91c1xuICAgICAgICBzdXBwb3J0ZWQgZS13YWxsZXRzIVxuICAgICAgPC9oMT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJleHBvcnQgZGVmYXVsdCB7J3ZlcnNpb24nOic2OTQ3MGE1NScsJ2VudHJ5Jzp7J21vZHVsZSc6Jy9idWlsZC9lbnRyeS5jbGllbnQtQU5ETkZERU8uanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUdPN0M1R04yLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstUDJGVEdQT1guanMnXX0sJ3JvdXRlcyc6eydyb290Jzp7J2lkJzoncm9vdCcsJ3BhcmVudElkJzp1bmRlZmluZWQsJ3BhdGgnOicnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb290LUZPWTVHWUxGLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvaW5kZXgnOnsnaWQnOidyb3V0ZXMvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzp1bmRlZmluZWQsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvaW5kZXgtSjNNUE5OUVouanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9wYXltZW50cy9la3lhc2gvaW5kZXgnOnsnaWQnOidyb3V0ZXMvcGF5bWVudHMvZWt5YXNoL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6J3BheW1lbnRzL2VreWFzaCcsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvcGF5bWVudHMvZWt5YXNoL2luZGV4LVY2SDRGS00zLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1GNEVVQk4zSi5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9wYXltZW50cy9la3lhc2gvaW5pdGlhdGUnOnsnaWQnOidyb3V0ZXMvcGF5bWVudHMvZWt5YXNoL2luaXRpYXRlJywncGFyZW50SWQnOidyb290JywncGF0aCc6J3BheW1lbnRzL2VreWFzaC9pbml0aWF0ZScsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9wYXltZW50cy9la3lhc2gvaW5pdGlhdGUtQVpWU09NSk8uanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVZGTjRTR0xLLmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3BheW1lbnRzL2VreWFzaC9wYXktd2l0aC1waG9uZSc6eydpZCc6J3JvdXRlcy9wYXltZW50cy9la3lhc2gvcGF5LXdpdGgtcGhvbmUnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzoncGF5bWVudHMvZWt5YXNoL3BheS13aXRoLXBob25lJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3BheW1lbnRzL2VreWFzaC9wYXktd2l0aC1waG9uZS1CNjVMTjdDUS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstVkZONFNHTEsuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1GNEVVQk4zSi5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfX0sJ3VybCc6Jy9idWlsZC9tYW5pZmVzdC02OTQ3MEE1NS5qcyd9OyJdLAog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
