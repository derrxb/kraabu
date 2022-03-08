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
    "Pin Hash": "cd801fc54c8da4ee690cf00ed34f6beb",
    pinEncoded: "44c80bbde592aed7e2138b67ec71e94a5a22d39bc36d66c3373c1ea33013d396"
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
  const data = import_crypto_js.enc.Base64.stringify(import_crypto_js.enc.Utf8.parse(JSON.stringify({
    mobile: ekyash.data.phone,
    sid: ekyash.credentials.SID,
    pushkey: "",
    pinHash: ekyash.credentials.pinEncoded
  })));
  const signature = import_crypto_js.enc.Base64.stringify((0, import_crypto_js.HmacSHA256)(`${header}.${data}`, ekyash.headers.IMGE));
  return `${header}.${data}.${signature}`;
};
var getAuthorization = async (data) => {
  const jwt = await getJWTToken();
  const response = await import_axios2.default.post(`${ekyash.api}/authorization`, {
    pushkey: "",
    sid: String(data.sid),
    pinHash: "cd801fc54c8da4ee690cf00ed34f6bebcd801fc54c8da4ee690cf00ed34f6beb"
  }, {
    headers: __spreadProps(__spreadValues({}, ekyash.headers), {
      Authorization: `Bearer ${jwt}`
    })
  });
  console.log(response);
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICIuLi9zZXJ2ZXIuanMiLCAic2VydmVyLWVudHJ5LW1vZHVsZTpAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGQiLCAiLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGU6L1VzZXJzL2RlcnJpY2tib2wvZGV2L2tyYWFidS9hcHAvcm9vdC50c3giLCAicm91dGU6L1VzZXJzL2RlcnJpY2tib2wvZGV2L2tyYWFidS9hcHAvcm91dGVzL3BheW1lbnRzL2VreWFzaC9wYXktd2l0aC1waG9uZS50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMva3JhYnV1LWhlYWRlci50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvcGF5bWVudC1hbW91bnQudHN4IiwgIi4uL2FwcC9kb21haW4vcGF5bWVudHMvcmVwb3NpdG9yaWVzL3BheW1lbnQtcmVwb3NpdG9yeS50cyIsICIuLi9hcHAvY29uZmlnL2luZGV4LnNlcnZlci50cyIsICIuLi9hcHAvZG9tYWluL3BheW1lbnRzL2VudGl0aWVzL3BheW1lbnQudHMiLCAicm91dGU6L1VzZXJzL2RlcnJpY2tib2wvZGV2L2tyYWFidS9hcHAvcm91dGVzL3BheW1lbnRzL2VreWFzaC9pbml0aWF0ZS50c3giLCAiLi4vYXBwL2RvbWFpbi9wYXltZW50cy9zZXJ2aWNlcy9jcmVhdGUtcGVuZGluZy1la3lhc2gtcGF5bWVudC50cyIsICIuLi9hcHAvcmVxdWVzdHMvY3JlYXRlLXBlbmRpbmctZWt5YXNoLXBheW1lbnQudHMiLCAiLi4vYXBwL2RvbWFpbi9wYXltZW50cy9tYXBwZXJzL2FyY2FkaWVyLXBheW1lbnQtbWFwcGVyLnRzIiwgInJvdXRlOi9Vc2Vycy9kZXJyaWNrYm9sL2Rldi9rcmFhYnUvYXBwL3JvdXRlcy9wYXltZW50cy9la3lhc2gvaW5kZXgudHN4IiwgIi4uL2FwcC9kb21haW4vcGF5bWVudHMvc2VydmljZXMvcmVxdWVzdC1la3lhc2gtcGF5bWVudC1xci1jb2RlLnRzIiwgIi4uL2FwcC9kb21haW4vcGF5bWVudHMvbGlicmFyeS9la3lhc2gtYXBpLnRzIiwgInJvdXRlOi9Vc2Vycy9kZXJyaWNrYm9sL2Rldi9rcmFhYnUvYXBwL3JvdXRlcy9pbmRleC50c3giLCAic2VydmVyLWFzc2V0cy1tYW5pZmVzdDpAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3QiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHsgUmVhY3QgfTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vbm9kZSB2MS4yLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgbm9kZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vbm9kZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YTsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZSB2MS4yLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgc2VydmVyUnVudGltZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc0Nvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnanNvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmpzb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyZWRpcmVjdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLnJlZGlyZWN0OyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3JlYWN0IHYxLjIuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciByZWFjdCA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vcmVhY3QnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRm9ybScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5Gb3JtOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaXZlUmVsb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpdmVSZWxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNZXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk1ldGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdOYXZMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk5hdkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUHJlZmV0Y2hQYWdlTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUHJlZmV0Y2hQYWdlTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peEJyb3dzZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhCcm93c2VyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhTZXJ2ZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhTZXJ2ZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JpcHRzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcmlwdHM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JvbGxSZXN0b3JhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JvbGxSZXN0b3JhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUFjdGlvbkRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQWN0aW9uRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUJlZm9yZVVubG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VCZWZvcmVVbmxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VDYXRjaCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VDYXRjaDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXJzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRm9ybUFjdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGb3JtQWN0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlSHJlZicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VIcmVmOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9hZGVyRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2FkZXJEYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9jYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9jYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VNYXRjaGVzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU1hdGNoZXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0ZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRpb25UeXBlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRpb25UeXBlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldENvbnRleHQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0Q29udGV4dDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VSZXNvbHZlZFBhdGgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUmVzb2x2ZWRQYXRoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU2VhcmNoUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVNlYXJjaFBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVN1Ym1pdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTdWJtaXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VUcmFuc2l0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVRyYW5zaXRpb247IH1cbn0pO1xuXG4iLCAiaW1wb3J0IGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCBjb21wcmVzc2lvbiBmcm9tIFwiY29tcHJlc3Npb25cIjtcbmltcG9ydCBtb3JnYW4gZnJvbSBcIm1vcmdhblwiO1xuaW1wb3J0IHsgY3JlYXRlUmVxdWVzdEhhbmRsZXIgfSBmcm9tIFwiQHJlbWl4LXJ1bi9leHByZXNzXCI7XG5cbmltcG9ydCAqIGFzIHNlcnZlckJ1aWxkIGZyb20gXCJAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGRcIjtcblxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuXG5hcHAudXNlKGNvbXByZXNzaW9uKCkpO1xuXG4vLyBodHRwOi8vZXhwcmVzc2pzLmNvbS9lbi9hZHZhbmNlZC9iZXN0LXByYWN0aWNlLXNlY3VyaXR5Lmh0bWwjYXQtYS1taW5pbXVtLWRpc2FibGUteC1wb3dlcmVkLWJ5LWhlYWRlclxuYXBwLmRpc2FibGUoXCJ4LXBvd2VyZWQtYnlcIik7XG5cbi8vIFJlbWl4IGZpbmdlcnByaW50cyBpdHMgYXNzZXRzIHNvIHdlIGNhbiBjYWNoZSBmb3JldmVyLlxuYXBwLnVzZShcbiAgXCIvYnVpbGRcIixcbiAgZXhwcmVzcy5zdGF0aWMoXCJwdWJsaWMvYnVpbGRcIiwgeyBpbW11dGFibGU6IHRydWUsIG1heEFnZTogXCIxeVwiIH0pXG4pO1xuXG4vLyBFdmVyeXRoaW5nIGVsc2UgKGxpa2UgZmF2aWNvbi5pY28pIGlzIGNhY2hlZCBmb3IgYW4gaG91ci4gWW91IG1heSB3YW50IHRvIGJlXG4vLyBtb3JlIGFnZ3Jlc3NpdmUgd2l0aCB0aGlzIGNhY2hpbmcuXG5hcHAudXNlKGV4cHJlc3Muc3RhdGljKFwicHVibGljL2J1aWxkXCIsIHsgbWF4QWdlOiBcIjFoXCIgfSkpO1xuXG5hcHAudXNlKG1vcmdhbihcInRpbnlcIikpO1xuXG5hcHAuYWxsKFxuICBcIipcIixcbiAgY3JlYXRlUmVxdWVzdEhhbmRsZXIoe1xuICAgIGJ1aWxkOiBzZXJ2ZXJCdWlsZCxcbiAgICBtb2RlOiBwcm9jZXNzLmVudi5OT0RFX0VOVlxuICB9KVxuKTtcblxuY29uc3QgcG9ydCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgMzAwMDtcblxuYXBwLmxpc3Rlbihwb3J0LCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKGBFeHByZXNzIHNlcnZlciBsaXN0ZW5pbmcgb24gcG9ydCAke3BvcnR9YCk7XG59KTtcbiIsICJcbmltcG9ydCAqIGFzIGVudHJ5U2VydmVyIGZyb20gXCIvVXNlcnMvZGVycmlja2JvbC9kZXYva3JhYWJ1L2FwcC9lbnRyeS5zZXJ2ZXIudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTAgZnJvbSBcIi9Vc2Vycy9kZXJyaWNrYm9sL2Rldi9rcmFhYnUvYXBwL3Jvb3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIi9Vc2Vycy9kZXJyaWNrYm9sL2Rldi9rcmFhYnUvYXBwL3JvdXRlcy9wYXltZW50cy9la3lhc2gvcGF5LXdpdGgtcGhvbmUudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTIgZnJvbSBcIi9Vc2Vycy9kZXJyaWNrYm9sL2Rldi9rcmFhYnUvYXBwL3JvdXRlcy9wYXltZW50cy9la3lhc2gvaW5pdGlhdGUudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTMgZnJvbSBcIi9Vc2Vycy9kZXJyaWNrYm9sL2Rldi9rcmFhYnUvYXBwL3JvdXRlcy9wYXltZW50cy9la3lhc2gvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTQgZnJvbSBcIi9Vc2Vycy9kZXJyaWNrYm9sL2Rldi9rcmFhYnUvYXBwL3JvdXRlcy9pbmRleC50c3hcIjtcbiAgZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NldHMgfSBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0XCI7XG4gIGV4cG9ydCBjb25zdCBlbnRyeSA9IHsgbW9kdWxlOiBlbnRyeVNlcnZlciB9O1xuICBleHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICAgIFwicm9vdFwiOiB7XG4gICAgICBpZDogXCJyb290XCIsXG4gICAgICBwYXJlbnRJZDogdW5kZWZpbmVkLFxuICAgICAgcGF0aDogXCJcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMFxuICAgIH0sXG4gIFwicm91dGVzL3BheW1lbnRzL2VreWFzaC9wYXktd2l0aC1waG9uZVwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvcGF5bWVudHMvZWt5YXNoL3BheS13aXRoLXBob25lXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInBheW1lbnRzL2VreWFzaC9wYXktd2l0aC1waG9uZVwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxXG4gICAgfSxcbiAgXCJyb3V0ZXMvcGF5bWVudHMvZWt5YXNoL2luaXRpYXRlXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9wYXltZW50cy9la3lhc2gvaW5pdGlhdGVcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwicGF5bWVudHMvZWt5YXNoL2luaXRpYXRlXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTJcbiAgICB9LFxuICBcInJvdXRlcy9wYXltZW50cy9la3lhc2gvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3BheW1lbnRzL2VreWFzaC9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJwYXltZW50cy9la3lhc2hcIixcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTNcbiAgICB9LFxuICBcInJvdXRlcy9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTRcbiAgICB9XG4gIH07IiwgImltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IEVudHJ5Q29udGV4dCB9IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KFxuICByZXF1ZXN0OiBSZXF1ZXN0LFxuICByZXNwb25zZVN0YXR1c0NvZGU6IG51bWJlcixcbiAgcmVzcG9uc2VIZWFkZXJzOiBIZWFkZXJzLFxuICByZW1peENvbnRleHQ6IEVudHJ5Q29udGV4dFxuKSB7XG4gIGNvbnN0IG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKFxuICAgIDxSZW1peFNlcnZlciBjb250ZXh0PXtyZW1peENvbnRleHR9IHVybD17cmVxdWVzdC51cmx9IC8+XG4gICk7XG5cbiAgcmVzcG9uc2VIZWFkZXJzLnNldChcIkNvbnRlbnQtVHlwZVwiLCBcInRleHQvaHRtbFwiKTtcblxuICByZXR1cm4gbmV3IFJlc3BvbnNlKFwiPCFET0NUWVBFIGh0bWw+XCIgKyBtYXJrdXAsIHtcbiAgICBzdGF0dXM6IHJlc3BvbnNlU3RhdHVzQ29kZSxcbiAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnNcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBMaW5rc0Z1bmN0aW9uLCBNZXRhRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7XG4gIExpbmtzLFxuICBMaXZlUmVsb2FkLFxuICBNZXRhLFxuICBPdXRsZXQsXG4gIFNjcmlwdHMsXG4gIFNjcm9sbFJlc3RvcmF0aW9uLFxufSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzL2FwcC5jc3NcIjtcblxuZXhwb3J0IGxldCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIFt7IHJlbDogXCJzdHlsZXNoZWV0XCIsIGhyZWY6IHN0eWxlcyB9XTtcbn07XG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiB7IHRpdGxlOiBcIk5ldyBSZW1peCBBcHBcIiB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuICByZXR1cm4gKFxuICAgIDxodG1sIGxhbmc9XCJlblwiIGNsYXNzTmFtZT1cImgtZnVsbCB3LWZ1bGxcIj5cbiAgICAgIDxoZWFkPlxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgIDxNZXRhIC8+XG4gICAgICAgIDxMaW5rcyAvPlxuICAgICAgPC9oZWFkPlxuICAgICAgPGJvZHkgY2xhc3NOYW1lPVwiaC1mdWxsIHctZnVsbFwiPlxuICAgICAgICA8T3V0bGV0IC8+XG4gICAgICAgIDxTY3JvbGxSZXN0b3JhdGlvbiAvPlxuICAgICAgICA8U2NyaXB0cyAvPlxuICAgICAgICA8TGl2ZVJlbG9hZCAvPlxuICAgICAgPC9ib2R5PlxuICAgIDwvaHRtbD5cbiAgKTtcbn1cbiIsICJpbXBvcnQge1xuICBBY3Rpb25GdW5jdGlvbixcbiAgRm9ybSxcbiAganNvbixcbiAgTG9hZGVyRnVuY3Rpb24sXG4gIE1ldGFGdW5jdGlvbixcbiAgdXNlTG9hZGVyRGF0YSxcbn0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgS3JhYnV1SGVhZGVyIGZyb20gXCJ+L2NvbXBvbmVudHMva3JhYnV1LWhlYWRlclwiO1xuaW1wb3J0IFBheW1lbnRBbW91bnQgZnJvbSBcIn4vY29tcG9uZW50cy9wYXltZW50LWFtb3VudFwiO1xuaW1wb3J0IFBheW1lbnQgZnJvbSBcIn4vZG9tYWluL3BheW1lbnRzL2VudGl0aWVzL3BheW1lbnRcIjtcbmltcG9ydCBQYXltZW50UmVwb3NpdG9yeSBmcm9tIFwifi9kb21haW4vcGF5bWVudHMvcmVwb3NpdG9yaWVzL3BheW1lbnQtcmVwb3NpdG9yeVwiO1xuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiBcIkNvbXBsZXRlIEdpZ2dlZEJ6IEJvb2tpbmcgUGF5bWVudCB8IEtyYWJ1dVwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJZb3UncmUgYWxtb3N0IGRvbmUgd2l0aCB5b3VyIEdpZ2dlZEJ6IGJvb2tpbmcuIE9uY2UgcGF5bWVudCBpcyBjb21wbGV0ZWQsIHlvdXIgYm9va2luZyB3aWxsIGJlIGNvbmZpcm1lZC5cIixcbiAgfTtcbn07XG5cbmV4cG9ydCBsZXQgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBjb25zdCBzZWFyY2hQYXJhbXMgPSBuZXcgVVJMKHJlcXVlc3QudXJsKS5zZWFyY2hQYXJhbXM7XG4gIGNvbnN0IGludm9pY2VObyA9IHNlYXJjaFBhcmFtcy5nZXQoXCJpbnZvaWNlTm9cIik7XG4gIGNvbnN0IHBheW1lbnRLZXkgPSBzZWFyY2hQYXJhbXMuZ2V0KFwicGF5a2V5XCIpO1xuXG4gIGlmICghaW52b2ljZU5vIHx8ICFwYXltZW50S2V5KSB7XG4gICAgcmV0dXJuIGpzb24oeyBtZXNzYWdlOiBcIm5vIHBheW1lbnQgd2l0aCB0aGlzIGludm9pY2Ugbm9cIiB9LCA0MDQpO1xuICB9XG5cbiAgY29uc3QgcGF5bWVudCA9IGF3YWl0IFBheW1lbnRSZXBvc2l0b3J5LmdldFBheW1lbnRCeUludm9pY2UoaW52b2ljZU5vKTtcblxuICByZXR1cm4ganNvbih7XG4gICAgYWxpdmU6IHRydWUsXG4gICAgcGF5bWVudDogcGF5bWVudCxcbiAgfSk7XG59O1xuXG5leHBvcnQgbGV0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgY29uc3QgZm9ybURhdGEgPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XG5cbiAgaWYgKCFmb3JtRGF0YS5nZXQoXCJuYW1lXCIpIHx8ICFmb3JtRGF0YS5nZXQoXCJwaG9uZVwiKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkVtYWlsIGFuZCBwaG9uZSBhcmUgYm90aCByZXF1aXJlZC5cIik7XG4gIH1cblxuICBjb25zdCBzZWFyY2hQYXJhbXMgPSBuZXcgVVJMKHJlcXVlc3QudXJsKS5zZWFyY2hQYXJhbXM7XG4gIGNvbnN0IGludm9pY2VObyA9IHNlYXJjaFBhcmFtcy5nZXQoXCJpbnZvaWNlTm9cIik7XG5cbiAgaWYgKCFpbnZvaWNlTm8pIHtcbiAgICByZXR1cm4ganNvbih7IG1lc3NhZ2U6IFwibm8gcGF5bWVudCB3aXRoIHRoaXMgaW52b2ljZSBub1wiIH0sIDQwNCk7XG4gIH1cblxuICBjb25zdCBwYXltZW50ID0gYXdhaXQgUGF5bWVudFJlcG9zaXRvcnkuZ2V0UGF5bWVudEJ5SW52b2ljZShcbiAgICBpbnZvaWNlTm8gYXMgc3RyaW5nXG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgYmxvY2tJbnZhbGlkTnVtYmVyQ2hhciA9IChlOiBhbnkpID0+IHtcbiAgcmV0dXJuIFtcImVcIiwgXCJFXCIsIFwiK1wiXS5pbmNsdWRlcyhlLmtleSkgJiYgZS5wcmV2ZW50RGVmYXVsdCgpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRUt5YXNoKCkge1xuICBjb25zdCBkYXRhID0gdXNlTG9hZGVyRGF0YSgpIGFzIHsgcGF5bWVudDogUGF5bWVudCB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoLWZ1bGwgdy1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtZ3JheS04MDBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktYXV0byBsZWFkaW5nLXJlbGF4ZWRcIj5cbiAgICAgICAgPEtyYWJ1dUhlYWRlciAvPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBib3JkZXItWzFweF0gY29udGFpbmVyIHNoYWRvdy1tZCByb3VuZGVkIHAtNCB3LVs1NjBweF0gbWluLWgtWzQ4MHB4XVwiPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtbWVkaXVtIHBiLTQgdGV4dC1ncmF5LTkwMFwiPlxuICAgICAgICAgICAgR2lnZ2VkQnogaXMgcmVxdWVzdGluZyBwYXltZW50IGZvciB5b3VyIG9yZGVyIHVzaW5nIHRoZSBFS3lhc2hcbiAgICAgICAgICAgIGRpZ2l0YWwgd2FsbGV0LlxuICAgICAgICAgIDwvaDI+XG5cbiAgICAgICAgICA8UGF5bWVudEFtb3VudFxuICAgICAgICAgICAgdHlwZT17ZGF0YS5wYXltZW50LmN1cnJlbmN5LnR5cGV9XG4gICAgICAgICAgICBpbnZvaWNlPXtkYXRhLnBheW1lbnQuaW52b2ljZX1cbiAgICAgICAgICAgIGFtb3VudD17ZGF0YS5wYXltZW50LmN1cnJlbmN5LmFtb3VudH1cbiAgICAgICAgICAvPlxuXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMCBwYi00XCI+XG4gICAgICAgICAgICBQbGVhc2UgZW50ZXIgeW91ciBwaG9uZSBudW1iZXIgbGlua2VkIHRvIHlvdXIgRUt5YXNoIGFjY291bnQgaW5cbiAgICAgICAgICAgIG9yZGVyIHRvIHJlY2VpdmUgeW91ciBwYXltZW50IHJlcXVlc3QuXG4gICAgICAgICAgPC9zcGFuPlxuXG4gICAgICAgICAgPEZvcm0gYWN0aW9uPVwiL3BheW1lbnRzL2VreWFzaFwiIG1ldGhvZD1cInBvc3RcIiBjbGFzc05hbWU9XCJtYi00XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgcGItNFwiPlxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIiBjbGFzc05hbWU9XCJmb250LW1lZGl1bSB0ZXh0LWdyYXktNjAwXCI+XG4gICAgICAgICAgICAgICAgWW91ciBuYW1lXG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgaWQ9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQteGwgZm9jdXM6cmluZy1pbmRpZ28tNTAwIGZvY3VzOmJvcmRlci1pbmRpZ28tNTAwIGJsb2NrIGJvcmRlci0yIHctZnVsbCBwbC03IHByLTEyIGZvbnQtbm9ybWFsIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kIHB5LTJcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiaS5lLiBKb2huIERvZVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHBiLTRcIj5cbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwaG9uZVwiIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtIHRleHQtZ3JheS02MDBcIj5cbiAgICAgICAgICAgICAgICBQaG9uZVxuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGVsXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwicGhvbmVcIlxuICAgICAgICAgICAgICAgIGlkPVwicGhvbmVcIlxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgcGF0dGVybj1cIlswLTldezN9LVswLTldezN9LVswLTldezR9XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvY3VzOnJpbmctaW5kaWdvLTUwMCBmb2N1czpib3JkZXItaW5kaWdvLTUwMCBibG9jayBib3JkZXItMiB3LWZ1bGwgcGwtNyBwci0xMiBmb250LW5vcm1hbCBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1tZCBweS0yXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImkuZS4gNTAxLTYyMS0xMjM0XCJcbiAgICAgICAgICAgICAgICBvbktleURvd249e2Jsb2NrSW52YWxpZE51bWJlckNoYXJ9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTQgcHktMiB0ZXh0LXhsIGJvcmRlci0yIHJvdW5kZWQtbWQgZm9jdXM6cmluZyBmb2N1czpyaW5nLWluZGlnby0xMDAgYm9yZGVyLWluZGlnby01MDAgYmctaW5kaWdvLTYwMCB0ZXh0LXdoaXRlXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgR2V0IFBheW1lbnQgUmVxdWVzdFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9Gb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEtyYWJ1dUhlYWRlcigpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgcGItNCBvcGFjaXR5LTUwIGhvdmVyOm9wYWNpdHktMTAwXCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkXCI+S3JhYnV1PC9oMT5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDAgdGV4dC1zbVwiPlxuICAgICAgICBTZWN1cmVseSBwYXkgb25saW5lIHdpdGggQmVsaXplJ3MgdmFyaW91cyBkaWdpdGFsIHdhbGxldHNcbiAgICAgIDwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJ0eXBlIFByb3BzID0ge1xuICBhbW91bnQ6IG51bWJlcjtcbiAgdHlwZTogc3RyaW5nO1xuICBpbnZvaWNlOiBzdHJpbmc7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYXltZW50QW1vdW50KHsgYW1vdW50LCB0eXBlLCBpbnZvaWNlIH06IFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgbWItNFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGl0ZW1zLWVuZCBtci0yXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtN3hsIGZvbnQtYm9sZCB0ZXh0LWluZGlnby01MDBcIj4ke2Ftb3VudH08L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtbWVkaXVtIHRleHQtaW5kaWdvLTQwMFwiPnt0eXBlfTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ncmF5LTkwMFwiPntpbnZvaWNlfTwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBzdXBhYmFzZSB9IGZyb20gXCJ+L2NvbmZpZy9pbmRleC5zZXJ2ZXJcIjtcbmltcG9ydCBQYXltZW50IGZyb20gXCIuLi9lbnRpdGllcy9wYXltZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBheW1lbnRSZXBvc2l0b3J5IHtcbiAgc3RhdGljIGFzeW5jIHJlYnVpbGRFbnRpdHkoZGF0YTogYW55KSB7XG4gICAgaWYgKCFkYXRhIHx8IHR5cGVvZiBkYXRhID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IFBheW1lbnQoe1xuICAgICAgYWRkaXRpb25hbERhdGE6IGRhdGE/LmFkZGl0aW9uYWxEYXRhLFxuICAgICAgY3VycmVuY3k6IHtcbiAgICAgICAgYW1vdW50OiBkYXRhPy5hbW91bnQsXG4gICAgICAgIHR5cGU6IGRhdGEuY3VycmVuY3ksXG4gICAgICB9LFxuICAgICAgZGVzY3JpcHRpb246IGRhdGE/LmRlc2NyaXB0aW9uLFxuICAgICAgaWQ6IGRhdGEuaWQsXG4gICAgICBpbnZvaWNlOiBkYXRhLmludm9pY2UsXG4gICAgICBzdGF0dXM6IGRhdGEuc3RhdHVzLFxuICAgICAgdXNlcjogZGF0YS51c2VyLFxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGFzeW5jIGNyZWF0ZVBlbmRpbmcoZGF0YTogUGF5bWVudCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHN1cGFiYXNlLmZyb20oXCJwYXltZW50c1wiKS5pbnNlcnQoW1xuICAgICAge1xuICAgICAgICBhZGRpdGlvbmFsRGF0YTogZGF0YS5hZGRpdGlvbmFsRGF0YSxcbiAgICAgICAgYW1vdW50OiBkYXRhLmN1cnJlbmN5LmFtb3VudCxcbiAgICAgICAgY3VycmVuY3k6IGRhdGEuY3VycmVuY3kudHlwZSxcbiAgICAgICAgZGVzY3JpcHRpb246IGRhdGEuZGVzY3JpcHRpb24sXG4gICAgICAgIGludm9pY2U6IGRhdGEuaW52b2ljZSxcbiAgICAgICAgc3RhdHVzOiBkYXRhLnN0YXR1cyxcbiAgICAgICAgdXNlcjogZGF0YS51c2VyLFxuICAgICAgfSxcbiAgICBdKTtcblxuICAgIHJldHVybiB0aGlzLnJlYnVpbGRFbnRpdHkocmVzdWx0LmJvZHk/LlswXSk7XG4gIH1cblxuICBzdGF0aWMgYXN5bmMgZ2V0UGF5bWVudEJ5SW52b2ljZShpbnZvaWNlOiBzdHJpbmcpIHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzdXBhYmFzZVxuICAgICAgLmZyb20oXCJwYXltZW50c1wiKVxuICAgICAgLnNlbGVjdChcIipcIilcbiAgICAgIC5lcShcImludm9pY2VcIiwgaW52b2ljZSk7XG5cbiAgICByZXR1cm4gdGhpcy5yZWJ1aWxkRW50aXR5KHJlc3VsdC5ib2R5Py5bMF0pO1xuICB9XG5cbiAgc3RhdGljIGFzeW5jIHNldFBheW1lbnRRckNvZGVVcmwocGF5bWVudDogUGF5bWVudCwgcXJDb2RlVXJsOiBzdHJpbmcpIHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzdXBhYmFzZVxuICAgICAgLmZyb20oXCJwYXltZW50c1wiKVxuICAgICAgLnVwc2VydCh7IGFkZGl0aW9uYWxEYXRhOiB7IHFyQ29kZVVybCB9IH0pXG4gICAgICAuZXEoXCJpbnZvaWNlXCIsIHBheW1lbnQuaW52b2ljZSk7XG5cbiAgICByZXR1cm4gdGhpcy5yZWJ1aWxkRW50aXR5KHJlc3VsdC5ib2R5Py5bMF0pO1xuICB9XG59XG4iLCAiaW1wb3J0IHsgY3JlYXRlQ2xpZW50IH0gZnJvbSBcIkBzdXBhYmFzZS9zdXBhYmFzZS1qc1wiO1xuaW1wb3J0IFwiZG90ZW52L2NvbmZpZ1wiO1xuXG5jb25zdCBla3lhc2ggPSB7XG4gIGFwaTogXCJodHRwczovL213LWFwaS1wcmVwcm9kLmUta3lhc2guY29tL2FwaS9xcnBvcy1hcHBcIixcbiAgcm91dGVzOiB7XG4gICAgYmFzZTogXCJodHRwczovL213LWFwaS1wcmVwcm9kLmUta3lhc2guY29tL2FwaS9xcnBvcy1hcHBcIixcbiAgICBvcmRlckRldGFpbHM6IFwiaHR0cHM6Ly9naWdnZWRiei5hcmNhZGllci5pby91c2VyL2NoZWNrb3V0L29yZGVyLWRldGFpbHNcIixcbiAgfSxcbiAgaGVhZGVyczoge1xuICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgIFwiQWNjZXB0LUxhbmd1YWdlXCI6IFwiZW5cIixcbiAgICBcIlRoZS1UaW1lem9uZS1JQU5BXCI6IFwiQmVsaXplXCIsXG4gICAgV0w6IFwiYmliaVwiLFxuICAgIElNR0U6IFwiQVBQS0VZMTctMDdBOC00QkFGLUFBMEYtQjE1NjhDNTAxN0EzXCIsXG4gICAgYXBwVmVyc2lvbjogXCI5OS4xLjFcIixcbiAgICBvcGVyYXRpbmdTeXN0ZW06IFwiQW5kcm9pZFwiLFxuICAgIFNJRDogXCIyMzI0NTE4NDAzXCIsXG4gIH0sXG4gIGNyZWRlbnRpYWxzOiB7XG4gICAgU0lEOiAyMzI0NTE4NDAzLFxuICAgIFwiUGluIEhhc2hcIjogXCJjZDgwMWZjNTRjOGRhNGVlNjkwY2YwMGVkMzRmNmJlYlwiLFxuICAgIHBpbkVuY29kZWQ6XG4gICAgICBcIjQ0YzgwYmJkZTU5MmFlZDdlMjEzOGI2N2VjNzFlOTRhNWEyMmQzOWJjMzZkNjZjMzM3M2MxZWEzMzAxM2QzOTZcIixcbiAgfSxcbiAgZGF0YToge1xuICAgIHBob25lOiBcIjUwMTYzNzY1NzRcIixcbiAgfSxcbn07XG5cbmNvbnN0IHN1cGFiYXNlVXJsID0gcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX1NVUEFCQVNFX1VSTDtcbmNvbnN0IHN1cGFiYXNlQW5vbktleSA9IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9TVVBBQkFTRV9BTk9OX0tFWTtcblxuY29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVDbGllbnQoc3VwYWJhc2VVcmwgYXMgc3RyaW5nLCBzdXBhYmFzZUFub25LZXkgYXMgc3RyaW5nKTtcblxuZXhwb3J0IHsgZWt5YXNoLCBzdXBhYmFzZSB9O1xuIiwgImV4cG9ydCBjb25zdCBlbnVtIFBheW1lbnRTdGF0dXMge1xuICBQZW5kaW5nLFxuICBJblByb2dyZXNzLFxuICBjb21wbGV0ZWQsXG59XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHN0YXR1czogUGF5bWVudFN0YXR1cztcbiAgdXNlcjogc3RyaW5nO1xuICBpZD86IG51bWJlcjtcbiAgY3VycmVuY3k6IHtcbiAgICBhbW91bnQ6IG51bWJlcjtcbiAgICB0eXBlOiBzdHJpbmc7XG4gIH07XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIGNyZWF0ZWRBdD86IGFueTtcbiAgaW52b2ljZTogc3RyaW5nO1xuICBhZGRpdGlvbmFsRGF0YToge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IG51bWJlcjtcbiAgfTtcbn07XG5cbmNsYXNzIFBheW1lbnQge1xuICBhZGRpdGlvbmFsRGF0YTogUHJvcHNbXCJhZGRpdGlvbmFsRGF0YVwiXTtcbiAgY3JlYXRlZEF0OiBQcm9wc1tcImNyZWF0ZWRBdFwiXTtcbiAgY3VycmVuY3k6IFByb3BzW1wiY3VycmVuY3lcIl07XG4gIGRlc2NyaXB0aW9uOiBQcm9wc1tcImRlc2NyaXB0aW9uXCJdO1xuICBpZDogUHJvcHNbXCJpZFwiXTtcbiAgaW52b2ljZTogUHJvcHNbXCJpbnZvaWNlXCJdO1xuICBzdGF0dXM6IFByb3BzW1wic3RhdHVzXCJdO1xuICB1c2VyOiBQcm9wc1tcInVzZXJcIl07XG5cbiAgY29uc3RydWN0b3Ioe1xuICAgIGFkZGl0aW9uYWxEYXRhLFxuICAgIGNyZWF0ZWRBdCxcbiAgICBjdXJyZW5jeSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBpZCxcbiAgICBpbnZvaWNlLFxuICAgIHN0YXR1cyxcbiAgICB1c2VyLFxuICB9OiBQcm9wcykge1xuICAgIHRoaXMuYWRkaXRpb25hbERhdGEgPSBhZGRpdGlvbmFsRGF0YTtcbiAgICB0aGlzLmNyZWF0ZWRBdCA9IGNyZWF0ZWRBdDtcbiAgICB0aGlzLmN1cnJlbmN5ID0gY3VycmVuY3k7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgICB0aGlzLmludm9pY2UgPSBpbnZvaWNlO1xuICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xuICAgIHRoaXMudXNlciA9IHVzZXI7XG4gIH1cblxuICBpc1ZhbGlkKCkge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbmN5LmFtb3VudCA+IDA7XG4gIH1cblxuICBpc1BlbmRpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdHVzID09PSBQYXltZW50U3RhdHVzLlBlbmRpbmc7XG4gIH1cblxuICBjYW5NYXJrSW5Qcm9ncmVzcygpIHtcbiAgICByZXR1cm4gdGhpcy5pc1BlbmRpbmcoKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQYXltZW50O1xuIiwgImltcG9ydCB7IEFjdGlvbkZ1bmN0aW9uLCBqc29uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgQ3JlYXRlUGVuZGluZ0VreWFzaFBheW1lbnQgZnJvbSBcIn4vZG9tYWluL3BheW1lbnRzL3NlcnZpY2VzL2NyZWF0ZS1wZW5kaW5nLWVreWFzaC1wYXltZW50XCI7XG5cbmV4cG9ydCBjb25zdCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcGF5bWVudCA9IGF3YWl0IG5ldyBDcmVhdGVQZW5kaW5nRWt5YXNoUGF5bWVudChyZXF1ZXN0KS5jYWxsKCk7XG5cbiAgICByZXR1cm4ganNvbihwYXltZW50LmFkZGl0aW9uYWxEYXRhPy5wYXltZW50S2V5LCAyMDApO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGpzb24oXG4gICAgICB7XG4gICAgICAgIG1lc3NhZ2U6IFwiU29tZXRoaW5nIHVuZXhwZWN0ZWQgaGFwcGVuZWQuIFBsZWFzZSB0cnkgYWdhaW5cIixcbiAgICAgIH0sXG4gICAgICA0MjJcbiAgICApO1xuICB9XG59O1xuIiwgImltcG9ydCB0eXBlIHsgQXJjYWRpZXJQYXltZW50UmVxdWVzdCB9IGZyb20gXCJ+L2RvbWFpbi9wYXltZW50cy9saWJyYXJ5L2FyY2FkaWVyLWFwaVwiO1xuaW1wb3J0IGNyZWF0ZVBlbmRpbmdFa3lhc2hQYXltZW50U2NoZW1hIGZyb20gXCJ+L3JlcXVlc3RzL2NyZWF0ZS1wZW5kaW5nLWVreWFzaC1wYXltZW50XCI7XG5pbXBvcnQgUGF5bWVudCBmcm9tIFwiLi4vZW50aXRpZXMvcGF5bWVudFwiO1xuaW1wb3J0IEFyY2FkaWVyUGF5bWVudE1hcHBlciBmcm9tIFwiLi4vbWFwcGVycy9hcmNhZGllci1wYXltZW50LW1hcHBlclwiO1xuaW1wb3J0IFBheW1lbnRSZXBvc2l0b3J5IGZyb20gXCIuLi9yZXBvc2l0b3JpZXMvcGF5bWVudC1yZXBvc2l0b3J5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENyZWF0ZVBlbmRpbmdFa3lhc2hQYXltZW50IHtcbiAgcHJpdmF0ZSByZXF1ZXN0OiBSZXF1ZXN0O1xuICBwcml2YXRlIHBheW1lbnQ6IEFyY2FkaWVyUGF5bWVudFJlcXVlc3QgfCBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKHJlcXVlc3Q6IFJlcXVlc3QpIHtcbiAgICB0aGlzLnJlcXVlc3QgPSByZXF1ZXN0O1xuICAgIHRoaXMucGF5bWVudCA9IG51bGw7XG4gIH1cblxuICBhc3luYyB2ZXJpZnlQYXltZW50UGFyYW1zKCkge1xuICAgIGNvbnN0IGJvZHkgPSBhd2FpdCB0aGlzLnJlcXVlc3QuanNvbigpO1xuXG4gICAgdGhpcy5wYXltZW50ID0gYXdhaXQgY3JlYXRlUGVuZGluZ0VreWFzaFBheW1lbnRTY2hlbWEudmFsaWRhdGVBc3luYyh7XG4gICAgICAuLi5ib2R5LFxuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgY2FsbCgpOiBQcm9taXNlPFBheW1lbnQ+IHtcbiAgICBhd2FpdCB0aGlzLnZlcmlmeVBheW1lbnRQYXJhbXMoKTtcblxuICAgIGlmICghdGhpcy5wYXltZW50KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBkYXRhIGZyb20gYXJjYWRpZXIgcmVjZWl2ZWQuXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IHBlbmRpbmdQYXltZW50ID0gbmV3IEFyY2FkaWVyUGF5bWVudE1hcHBlcigpLmdldFBlbmRpbmcodGhpcy5wYXltZW50KTtcbiAgICBjb25zdCBwYXltZW50ID0gYXdhaXQgUGF5bWVudFJlcG9zaXRvcnkuY3JlYXRlUGVuZGluZyhwZW5kaW5nUGF5bWVudCk7XG5cbiAgICByZXR1cm4gcGF5bWVudDtcbiAgfVxufVxuIiwgImltcG9ydCBqb2kgZnJvbSBcImpvaVwiO1xuXG5jb25zdCBjcmVhdGVQZW5kaW5nRWt5YXNoUGF5bWVudFNjaGVtYSA9IGpvaS5vYmplY3Qoe1xuICBpbnZvaWNlbm86IGpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxuICBjdXJyZW5jeTogam9pLnN0cmluZygpLnJlcXVpcmVkKCksXG4gIHRvdGFsOiBqb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcbiAgaGFzaGtleTogam9pLnN0cmluZygpLnJlcXVpcmVkKCksXG4gIGdhdGV3YXk6IGpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVBlbmRpbmdFa3lhc2hQYXltZW50U2NoZW1hO1xuIiwgImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IG5hbm9pZCB9IGZyb20gXCJuYW5vaWRcIjtcbmltcG9ydCB7IGVreWFzaCB9IGZyb20gXCJ+L2NvbmZpZy9pbmRleC5zZXJ2ZXJcIjtcbmltcG9ydCBQYXltZW50LCB7IFBheW1lbnRTdGF0dXMgfSBmcm9tIFwiLi4vZW50aXRpZXMvcGF5bWVudFwiO1xuaW1wb3J0IHsgQXJjYWRpZXJQYXltZW50UmVxdWVzdCB9IGZyb20gXCIuLi9saWJyYXJ5L2FyY2FkaWVyLWFwaVwiO1xuXG5jbGFzcyBBcmNhZGllclBheW1lbnRNYXBwZXIge1xuICAvKipcbiAgICpcbiAgICogQHBhcmFtIGRhdGFcbiAgICogQHJldHVybnMgVGhlIGluaXRpYWwgcGF5bWVudCBkYXRhIHNlbmQgYnkgYXJjYWRpZXJcbiAgICovXG4gIGdldFBlbmRpbmcoZGF0YTogQXJjYWRpZXJQYXltZW50UmVxdWVzdCkge1xuICAgIC8vIGRvbid0IGZpbmQ7IGp1c3QgYnVpbGQgdGhlIGVudGl0eSBhcyB3ZSBkb24ndCBuZWVkIHRvIHF1ZXJ5IGFyY2FkaWVyIGZvciB0aGlzLlxuICAgIHJldHVybiB0aGlzLmJ1aWxkRW50aXR5KGRhdGEpO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSBkYXRhXG4gICAqIEByZXR1cm5zIFBheW1lbnQgd2l0aCB0aGUgb3JkZXIgZGV0YWlscyBmcm9tIGFyY2FkaWVyXG4gICAqL1xuICBhc3luYyBmaW5kKFxuICAgIGRhdGE6IFBpY2s8QXJjYWRpZXJQYXltZW50UmVxdWVzdCwgXCJnYXRld2F5XCIgfCBcImhhc2hrZXlcIiB8IFwiaW52b2ljZW5vXCI+ICYge1xuICAgICAgcGF5bWVudEtleTogc3RyaW5nO1xuICAgIH1cbiAgKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXG4gICAgICBgJHtla3lhc2gucm91dGVzLm9yZGVyRGV0YWlsc30/Z2F0ZXdheT0ke2RhdGEuZ2F0ZXdheX0maW52b2ljZU5vPSR7ZGF0YS5pbnZvaWNlbm99JnBheWtleT0ke2RhdGEucGF5bWVudEtleX0maGFzaGtleT0ke2RhdGEuaGFzaGtleX1gXG4gICAgKTtcblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBidWlsZEVudGl0eShkYXRhOiBBcmNhZGllclBheW1lbnRSZXF1ZXN0KTogUGF5bWVudCB7XG4gICAgcmV0dXJuIG5ldyBQYXltZW50KHtcbiAgICAgIHVzZXI6IFwiZ2lnZ2VkQnpcIixcbiAgICAgIHN0YXR1czogUGF5bWVudFN0YXR1cy5QZW5kaW5nLFxuICAgICAgY3VycmVuY3k6IHtcbiAgICAgICAgYW1vdW50OiBOdW1iZXIoZGF0YS50b3RhbCksXG4gICAgICAgIHR5cGU6IGRhdGEuY3VycmVuY3ksXG4gICAgICB9LFxuICAgICAgZGVzY3JpcHRpb246IGRhdGEuaW52b2ljZW5vLFxuICAgICAgaW52b2ljZTogZGF0YS5pbnZvaWNlbm8sXG4gICAgICBhZGRpdGlvbmFsRGF0YToge1xuICAgICAgICBnYXRld2F5OiBkYXRhLmdhdGV3YXksXG4gICAgICAgIGhhc2hrZXk6IGRhdGEuaGFzaGtleSxcbiAgICAgICAgcGF5bWVudEtleTogbmFub2lkKCksXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFyY2FkaWVyUGF5bWVudE1hcHBlcjtcbiIsICJpbXBvcnQgeyBqc29uLCBMb2FkZXJGdW5jdGlvbiwgdXNlTG9hZGVyRGF0YSB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IEtyYWJ1dUhlYWRlciBmcm9tIFwifi9jb21wb25lbnRzL2tyYWJ1dS1oZWFkZXJcIjtcbmltcG9ydCBQYXltZW50QW1vdW50IGZyb20gXCJ+L2NvbXBvbmVudHMvcGF5bWVudC1hbW91bnRcIjtcbmltcG9ydCBQYXltZW50IGZyb20gXCJ+L2RvbWFpbi9wYXltZW50cy9lbnRpdGllcy9wYXltZW50XCI7XG5pbXBvcnQgUmVxdWVzdEVreWFzaFBheW1lbnRRckNvZGUgZnJvbSBcIn4vZG9tYWluL3BheW1lbnRzL3NlcnZpY2VzL3JlcXVlc3QtZWt5YXNoLXBheW1lbnQtcXItY29kZVwiO1xuXG5leHBvcnQgbGV0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgY29uc3Qgc2VhcmNoUGFyYW1zID0gbmV3IFVSTChyZXF1ZXN0LnVybCkuc2VhcmNoUGFyYW1zO1xuICBjb25zdCBpbnZvaWNlTm8gPSBzZWFyY2hQYXJhbXMuZ2V0KFwiaW52b2ljZU5vXCIpO1xuICBjb25zdCBwYXltZW50S2V5ID0gc2VhcmNoUGFyYW1zLmdldChcInBheWtleVwiKTtcblxuICBpZiAoIWludm9pY2VObyB8fCAhcGF5bWVudEtleSkge1xuICAgIHJldHVybiBqc29uKHsgbWVzc2FnZTogXCJubyBwYXltZW50IHdpdGggdGhpcyBpbnZvaWNlIG5vXCIgfSwgNDA0KTtcbiAgfVxuXG4gIGNvbnN0IHBheW1lbnQgPSBhd2FpdCBuZXcgUmVxdWVzdEVreWFzaFBheW1lbnRRckNvZGUoXG4gICAgaW52b2ljZU5vLFxuICAgIHBheW1lbnRLZXlcbiAgKS5jYWxsKCk7XG5cbiAgcmV0dXJuIGpzb24oe1xuICAgIHBheW1lbnQ6IHBheW1lbnQsXG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIGNvbnN0IGRhdGEgPSB1c2VMb2FkZXJEYXRhKCkgYXMgeyBwYXltZW50OiBQYXltZW50IH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImgtZnVsbCB3LWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC1ncmF5LTgwMFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS1hdXRvIGxlYWRpbmctcmVsYXhlZFwiPlxuICAgICAgICA8S3JhYnV1SGVhZGVyIC8+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGJvcmRlci1bMXB4XSBjb250YWluZXIgc2hhZG93LW1kIHJvdW5kZWQgcC00IHctWzU2MHB4XSBtaW4taC1bNDgwcHhdXCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1tZWRpdW0gcGItMiB0ZXh0LWdyYXktOTAwXCI+XG4gICAgICAgICAgICBHaWdnZWRCeiBpcyByZXF1ZXN0aW5nIHBheW1lbnQgZm9yIHlvdXIgb3JkZXIgd2l0aCBFS3lhc2guXG4gICAgICAgICAgPC9oMT5cblxuICAgICAgICAgIDxQYXltZW50QW1vdW50XG4gICAgICAgICAgICBhbW91bnQ9e2RhdGEucGF5bWVudC5jdXJyZW5jeS5hbW91bnR9XG4gICAgICAgICAgICB0eXBlPXtkYXRhLnBheW1lbnQuY3VycmVuY3kudHlwZX1cbiAgICAgICAgICAgIGludm9pY2U9e2RhdGEucGF5bWVudC5pbnZvaWNlfVxuICAgICAgICAgIC8+XG5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LW1lZGl1bSB0ZXh0LWJhc2UgcGItNCB0ZXh0LWdyYXktNTAwXCI+XG4gICAgICAgICAgICBQbGVhc2Ugc2NhbiB0aGUgUVIgY29kZSB0byBtYWtlIHBheW1lbnQgd2l0aCB5b3VyIEVLeWFzaCBhcHAuXG4gICAgICAgICAgPC9zcGFuPlxuXG4gICAgICAgICAge2RhdGEucGF5bWVudC5hZGRpdGlvbmFsRGF0YT8ucXJDb2RlVXJsID8gKFxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBzcmM9e2RhdGEucGF5bWVudC5hZGRpdGlvbmFsRGF0YT8ucXJDb2RlVXJsIGFzIHN0cmluZ31cbiAgICAgICAgICAgICAgYWx0PVwicGF5bWVudCBxciBjb2RlXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHB5LTIgcHgtNCBiZy1yZWQtMjAwIHJvdW5kZWQtbWRcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1yZWQtNzAwXCI+XG4gICAgICAgICAgICAgICAgT2gsIG5vISBTb21ldGhpbmcgdW5leHBlY3RlZCBoYXBwZW5lZC4gRG9uJ3Qgd29ycnksIHlvdXIgd2FsbGV0XG4gICAgICAgICAgICAgICAgaGFzIG5vdCBiZWVuIGNoYXJnZWQuXG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgZWt5YXNoIH0gZnJvbSBcIn4vY29uZmlnL2luZGV4LnNlcnZlclwiO1xuaW1wb3J0IHsgY3JlYXRlTmV3SW52b2ljZSwgZ2V0QXV0aG9yaXphdGlvbiB9IGZyb20gXCIuLi9saWJyYXJ5L2VreWFzaC1hcGlcIjtcbmltcG9ydCBQYXltZW50UmVwb3NpdG9yeSBmcm9tIFwiLi4vcmVwb3NpdG9yaWVzL3BheW1lbnQtcmVwb3NpdG9yeVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXF1ZXN0RWt5YXNoUGF5bWVudFFyQ29kZSB7XG4gIHByaXZhdGUgaW52b2ljZU5vOiBzdHJpbmc7XG4gIHByaXZhdGUgcGF5bWVudEtleTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKGludm9pY2VObzogc3RyaW5nLCBwYXltZW50S2V5OiBzdHJpbmcpIHtcbiAgICB0aGlzLmludm9pY2VObyA9IGludm9pY2VObztcbiAgICB0aGlzLnBheW1lbnRLZXkgPSBwYXltZW50S2V5O1xuICB9XG5cbiAgYXN5bmMgY2FsbCgpIHtcbiAgICBjb25zdCBwZW5kaW5nUGF5bWVudCA9IGF3YWl0IFBheW1lbnRSZXBvc2l0b3J5LmdldFBheW1lbnRCeUludm9pY2UoXG4gICAgICB0aGlzLmludm9pY2VOb1xuICAgICk7XG5cbiAgICBpZiAoIXBlbmRpbmdQYXltZW50KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJQYXltZW50IHdpdGggdGhlIGdpdmVuIGludm9pY2UgZG9lcyBub3QgZXhpc3QuXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRBdXRob3JpemF0aW9uKHtcbiAgICAgIHNpZDogZWt5YXNoLmNyZWRlbnRpYWxzLlNJRCxcbiAgICAgIHBpbkhhc2g6IGVreWFzaC5jcmVkZW50aWFsc1tcIlBpbiBIYXNoXCJdLFxuICAgICAgcHVzaEtleTogXCJcIixcbiAgICB9KTtcblxuICAgIGNvbnNvbGUubG9nKHNlc3Npb24pO1xuXG4gICAgY29uc3QgcGF5bWVudFJlc3BvbnNlID0gYXdhaXQgY3JlYXRlTmV3SW52b2ljZSh7XG4gICAgICBhbW91bnQ6IHBlbmRpbmdQYXltZW50LmN1cnJlbmN5LmFtb3VudCxcbiAgICAgIGRlc2NyaXB0aW9uOiBwZW5kaW5nUGF5bWVudC5kZXNjcmlwdGlvbixcbiAgICAgIGN1cnJlbmN5OiBcIkJaRFwiLFxuICAgICAgb3JkZXJJZDogcGVuZGluZ1BheW1lbnQuaW52b2ljZSxcbiAgICAgIHNlc3Npb246IHNlc3Npb24uU2Vzc2lvbixcbiAgICB9KTtcblxuICAgIGNvbnNvbGUubG9nKHBheW1lbnRSZXNwb25zZSk7XG5cbiAgICBjb25zdCBpblByb2dyZXNzUGF5bWVudCA9IGF3YWl0IFBheW1lbnRSZXBvc2l0b3J5LnNldFBheW1lbnRRckNvZGVVcmwoXG4gICAgICBwZW5kaW5nUGF5bWVudCxcbiAgICAgIHBheW1lbnRSZXNwb25zZS5xclVybFxuICAgICk7XG5cbiAgICBpZiAoIWluUHJvZ3Jlc3NQYXltZW50KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTb21ldGhpbmcgdW5leHBlY3RlZCBoYXBwZW5lZCB3aXRoIHRoaXMgcGF5bWVudC5cIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGluUHJvZ3Jlc3NQYXltZW50O1xuICB9XG59XG4iLCAiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgZW5jLCBIbWFjU0hBMjU2IH0gZnJvbSBcImNyeXB0by1qc1wiO1xuaW1wb3J0IHsgZWt5YXNoIH0gZnJvbSBcIn4vY29uZmlnL2luZGV4LnNlcnZlclwiO1xuXG4vKipcbiAqIEJ1aWxkcyAmIHJldHVybnMgYSBKV1QgdG9rZW4gZm9yIGNhbGxzIHRvIEUta3lhc2gncyBBUEkuXG4gKiBAcmV0dXJuc1xuICovXG5jb25zdCBnZXRKV1RUb2tlbiA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgaGVhZGVyID0gZW5jLkJhc2U2NC5zdHJpbmdpZnkoXG4gICAgZW5jLlV0ZjgucGFyc2UoSlNPTi5zdHJpbmdpZnkoeyBhbGc6IFwiSFMyNTZcIiwgdHlwOiBcIkpXVFwiIH0pKVxuICApO1xuXG4gIGNvbnN0IGRhdGEgPSBlbmMuQmFzZTY0LnN0cmluZ2lmeShcbiAgICBlbmMuVXRmOC5wYXJzZShcbiAgICAgIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgbW9iaWxlOiBla3lhc2guZGF0YS5waG9uZSxcbiAgICAgICAgc2lkOiBla3lhc2guY3JlZGVudGlhbHMuU0lELFxuICAgICAgICBwdXNoa2V5OiBcIlwiLFxuICAgICAgICBwaW5IYXNoOiBla3lhc2guY3JlZGVudGlhbHMucGluRW5jb2RlZCxcbiAgICAgIH0pXG4gICAgKVxuICApO1xuXG4gIGNvbnN0IHNpZ25hdHVyZSA9IGVuYy5CYXNlNjQuc3RyaW5naWZ5KFxuICAgIEhtYWNTSEEyNTYoYCR7aGVhZGVyfS4ke2RhdGF9YCwgZWt5YXNoLmhlYWRlcnMuSU1HRSlcbiAgKTtcblxuICByZXR1cm4gYCR7aGVhZGVyfS4ke2RhdGF9LiR7c2lnbmF0dXJlfWA7XG59O1xuXG50eXBlIEF1dGhvcml6YXRpb25EYXRhID0ge1xuICAvKipcbiAgICogTWVyY2hhbnQgSUQgcHJvdmlkZWQgYnkgRWt5YXNoXG4gICAqL1xuICBzaWQ6IG51bWJlcjtcbiAgLyoqXG4gICAqIHBpbkhhc2gsIHByb3ZpZGVkIGJ5IEVreWFzaDogaGFzaCgnc2hhMjU2JywgbWQ1KCdwaW4nKSlcbiAgICovXG4gIHBpbkhhc2g6IHN0cmluZztcbiAgLyoqXG4gICAqIGFsd2F5cyBwcm92aWRlZCBhcyBhbiBlbXB0eSBzdHJpbmdcbiAgICovXG4gIHB1c2hLZXk6IFwiXCI7XG59O1xuXG50eXBlIEF1dGhvcml6YXRpb25SZXNwb25zZSA9IHtcbiAgLyoqXG4gICAqIFRoaXMgc2Vzc2lvbiBJRCB0aGF0IHNob3VsZCBiZSB1c2VkIGZvciBzdWJzZXF1ZW50IHJlcXVlc3RzLlxuICAgKi9cbiAgU2Vzc2lvbjogc3RyaW5nO1xuICBmaXJzdE5hbWU/OiBzdHJpbmc7XG4gIGxhc3ROYW1lPzogc3RyaW5nO1xuICAvKipcbiAgICogQXBwIG1vYmlsZSBzZXR0aW5nc1xuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiB7XG4gICAqICAgXCJuYW1lU2V0dGluZ3NcIjogXCJ2YWx1ZVwiXG4gICAqIH1cbiAgICovXG4gIFNldHRpbmdzPzogYW55O1xufTtcblxuLyoqXG4gKiBSZXF1ZXN0IGEgc2Vzc2lvbiBrZXkgZnJvbSBFLUt5YXNoJ3MgQVBJIGluIG9yZGVyIHRvIGF1dGhvcml6ZSByZXF1ZXN0cy5cbiAqIEByZXR1cm5zXG4gKi9cbmNvbnN0IGdldEF1dGhvcml6YXRpb24gPSBhc3luYyAoXG4gIGRhdGE6IEF1dGhvcml6YXRpb25EYXRhXG4pOiBQcm9taXNlPEF1dGhvcml6YXRpb25SZXNwb25zZT4gPT4ge1xuICBjb25zdCBqd3QgPSBhd2FpdCBnZXRKV1RUb2tlbigpO1xuXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChcbiAgICBgJHtla3lhc2guYXBpfS9hdXRob3JpemF0aW9uYCxcbiAgICB7XG4gICAgICBwdXNoa2V5OiBcIlwiLFxuICAgICAgc2lkOiBTdHJpbmcoZGF0YS5zaWQpLFxuICAgICAgcGluSGFzaDpcbiAgICAgICAgXCJjZDgwMWZjNTRjOGRhNGVlNjkwY2YwMGVkMzRmNmJlYmNkODAxZmM1NGM4ZGE0ZWU2OTBjZjAwZWQzNGY2YmViXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIC4uLmVreWFzaC5oZWFkZXJzLFxuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7and0fWAsXG4gICAgICB9LFxuICAgIH1cbiAgKTtcblxuICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG5cbiAgcmV0dXJuIHJlc3BvbnNlLmRhdGEgYXMgQXV0aG9yaXphdGlvblJlc3BvbnNlO1xufTtcblxuZXhwb3J0IHR5cGUgTmV3SW52b2ljZURhdGEgPSB7XG4gIC8qKlxuICAgKiBTZXNzaW9uIElkIGZvciB0byBhdXRob3JpemUgcmVxdWVzdC5cbiAgICovXG4gIHNlc3Npb246IHN0cmluZztcbiAgLyoqXG4gICAqIElkIG9mIHRoZSBvcmRlciBiZWluZyBjYXJyaWVkIG91dFxuICAgKi9cbiAgb3JkZXJJZDogc3RyaW5nO1xuICAvKipcbiAgICogQW1vdW50IGluIGNlbnRzLlxuICAgKi9cbiAgYW1vdW50OiBudW1iZXI7XG4gIC8qKlxuICAgKiBDdXJyZW5jeSBpbiBJU08gNDIxNyBmb3JtYXQuXG4gICAqL1xuICBjdXJyZW5jeTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICAvKipcbiAgICogUGhvbmUgbnVtYmVyIG9mIHRoZSBjdXN0b21lciB0aGF0IHdpbGwgcGF5IHRoZSByZXF1ZXN0XG4gICAqL1xuICBwYXllcj86IG51bWJlcjtcbiAgLyoqXG4gICAqIE1ldGFkYXRhIHJlbGF0ZWQgdG8gdGhlIGl0ZW1zIGJlaW5nIHBheWVkIGZvci5cbiAgICogQGV4YW1wbGVcbiAgICoge1xuICAgKiAgIFwiZmllbGRcIjogXCJ2YWx1ZVwiXG4gICAqIH1cbiAgICovXG4gIGZpZWxkc090aGVyPzogT2JqZWN0IHwgYW55W107XG4gIC8qKlxuICAgKiBTaW1pbGFyIHRvIGZpZWxkc090aGVyIGJ1dCBhcmUgdXNlZCBvbmx5IG9uIG1vYmlsZSBwaG9uZXMuXG4gICAqIEBleGFtcGxlXG4gICAqIHtcbiAgICogICBcImZpZWxkXCI6IFwidmFsdWVcIlxuICAgKiB9XG4gICAqL1xuICBmaWVsZHNBcHA/OiBPYmplY3QgfCBhbnlbXTtcbiAgLyoqXG4gICAqIEJlZm9yZSB0aGUgbWVyY2hhbnQgY3JlYXRlcyB0aGVcbiAgICogaW52b2ljZSwgdGhlIG1lcmNoYW50IGNhbiBjYWxsIHRoZVxuICAgKiBcdTIwMUNVcGxvYWRJbWFnZVx1MjAxRCBlbmRwb2ludCB0byB1cGxvYWQgYW5cbiAgICogaW1hZ2UgKGZvciBleGFtcGxlIHRoZSBpbnZvaWNlKS4gV2hlblxuICAgKiB0aGUgY2FsbCB0byBjcmVhdGUgdGhlIGludm9pY2UgaXMgbWFkZSxcbiAgICogdGhlIE1lcmNoYW50IGNhbiBzcGVjaWZ5IHRoZSBpbWFnZVxuICAgKiBuYW1lIGluIHRoaXMgZmllbGQuIFRoZSBjdXN0b21lciB3aWxsXG4gICAqIHJlY2VpdmUgdGhlIGltYWdlIGFuZCBkZXRhaWxzIHdoZW5cbiAgICogdGhleSByZWNlaXZlIHRoZSBub3RpZmljYXRpb24uXG4gICAqL1xuICByZWNlaXB0Pzogc3RyaW5nO1xuICAvKipcbiAgICogSW52b2ljZSBkYXRlIGFuZCB0aW1lIHVudGlsIGl0IGV4cGlyZXMuXG4gICAqIEBleGFtcGxlXG4gICAqIDIwMjEtMDEtMTcgMTU6NDU6MTJcbiAgICovXG4gIGRhdGVMaWZlPzogc3RyaW5nO1xuICAvKipcbiAgICogUmV1c2FibGUgaW52b2ljZVxuICAgKi9cbiAgbG9uZ1Rlcm0/OiBib29sZWFuO1xufTtcblxudHlwZSBOZXdJbnZvaWNlUmVzcG9uc2UgPSB7XG4gIC8qKlxuICAgKiBAdHlwZSBBdXRob3JpemF0aW9uUmVzcG9uc2UuU2Vzc2lvblxuICAgKi9cbiAgaW52b2ljZUlkOiBudW1iZXI7XG4gIC8qKlxuICAgKiBMaW5rIHRvIHRoZSBRUiBjb2RlIG9mIHRoZSBpbnZvaWNlLlxuICAgKiBAZXhhbXBsZSBodHRwczovL2RvbWFpbi9xci9pbnZvaWNlLzM2ODA1MDE0Mzg0OVxuICAgKi9cbiAgcXJVcmw6IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSBkYXRhIHRoYXQgaXMgaW4gdGhlIFFSIGNvZGUuXG4gICAqIEBleGFtcGxlIDM2ODA1MDE0Mzg0OVxuICAgKi9cbiAgcXJEYXRhOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBMaW5rIHRvIHRoZSB1cGxvYWRlZCBpbWFnZSAtIHNlIHJlY2VpcHQgcGFyYW1ldGVyIGluIHRoZSByZXF1ZXN0XG4gICAqIEBleGFtcGxlIGh0dHBzOi8vZG9tYWluL3FyL2ludm9pY2UvMzY4MDUwMTQzODQ5XG4gICAqL1xuICByZWNlaXB0VXJsOiBzdHJpbmc7XG59O1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gaW52b2ljZSBmb3IgdXNlcnMgd2l0aCBhIHNwZWNpZmllZCBhbW91bnQgaW4gQmVsaXplIERvbGxhcnMuXG4gKi9cbmNvbnN0IGNyZWF0ZU5ld0ludm9pY2UgPSBhc3luYyAoXG4gIGRhdGE6IE5ld0ludm9pY2VEYXRhXG4pOiBQcm9taXNlPE5ld0ludm9pY2VSZXNwb25zZT4gPT4ge1xuICBjb25zdCBqd3QgPSBhd2FpdCBnZXRKV1RUb2tlbigpO1xuXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChcbiAgICBgJHtla3lhc2guYXBpfS9jcmVhdGUtbmV3LWludm9pY2VgLFxuICAgIHtcbiAgICAgIC4uLmRhdGEsXG4gICAgfSxcbiAgICB7XG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIC4uLmVreWFzaC5oZWFkZXJzLFxuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7and0fWAsXG4gICAgICB9LFxuICAgIH1cbiAgKTtcblxuICByZXR1cm4gcmVzcG9uc2UuZGF0YSBhcyBOZXdJbnZvaWNlUmVzcG9uc2U7XG59O1xuXG50eXBlIFVwbG9hZEludm9pY2VJbWFnZURhdGEgPSB7XG4gIC8qKlxuICAgKiBTZXNzaW9uIElEIGF1dGhvcml6aW5nIHRoZSByZXF1ZXN0XG4gICAqL1xuICBzZXNzaW9uOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBJbWFnZSB0eXBlXG4gICAqL1xuICBpbWFnZVR5cGU6IHN0cmluZztcbiAgLyoqXG4gICAqIEltYWdlIGZpbGUuIFRPRE86IFdoYXQgZm9ybWF0IHNob3VsZCB0aGlzIGJlIGluP1xuICAgKi9cbiAgZmlsZTogYW55O1xufTtcblxudHlwZSBVcGxvYWRJbnZvaWNlSW1hZ2VSZXNwb25zZSA9IHtcbiAgLyoqXG4gICAqIFRoZSByZXN1bHQgb2YgdGhlIGFjdGlvblxuICAgKi9cbiAgc3VjY2Vzcz86IGJvb2xlYW47XG59O1xuXG5jb25zdCB1cGxvYWRJbnZvaWNlSW1hZ2UgPSBhc3luYyAoZGF0YTogVXBsb2FkSW52b2ljZUltYWdlRGF0YSkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoYCR7ZWt5YXNoLmFwaX0vdXBsb2FkLWltYWdlYCwge1xuICAgIC4uLmRhdGEsXG4gIH0pO1xuXG4gIHJldHVybiByZXNwb25zZS5kYXRhIGFzIFVwbG9hZEludm9pY2VJbWFnZVJlc3BvbnNlO1xufTtcblxuZXhwb3J0IHsgZ2V0SldUVG9rZW4sIGdldEF1dGhvcml6YXRpb24sIGNyZWF0ZU5ld0ludm9pY2UsIHVwbG9hZEludm9pY2VJbWFnZSB9O1xuIiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1mdWxsIHctZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LTN4bCB0ZXh0LWdyYXktODAwXCI+XG4gICAgICAgIFF1aWNrbHkgaW50ZWdyYXRlIGFuZCBhY2NlcHQgb25saW5lIHBheW1lbnRzIGluIEJlbGl6ZSB3aXRoIHZhcmlvdXNcbiAgICAgICAgc3VwcG9ydGVkIGUtd2FsbGV0cyFcbiAgICAgIDwvaDE+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiZXhwb3J0IGRlZmF1bHQgeyd2ZXJzaW9uJzonNjk0NzBhNTUnLCdlbnRyeSc6eydtb2R1bGUnOicvYnVpbGQvZW50cnkuY2xpZW50LUFORE5GREVPLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1HTzdDNUdOMi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVAyRlRHUE9YLmpzJ119LCdyb3V0ZXMnOnsncm9vdCc6eydpZCc6J3Jvb3QnLCdwYXJlbnRJZCc6dW5kZWZpbmVkLCdwYXRoJzonJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm9vdC1GT1k1R1lMRi5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2luZGV4Jzp7J2lkJzoncm91dGVzL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6dW5kZWZpbmVkLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2luZGV4LUozTVBOTlFaLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvcGF5bWVudHMvZWt5YXNoL2luZGV4Jzp7J2lkJzoncm91dGVzL3BheW1lbnRzL2VreWFzaC9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidwYXltZW50cy9la3lhc2gnLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3BheW1lbnRzL2VreWFzaC9pbmRleC1WNkg0RktNMy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstRjRFVUJOM0ouanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvcGF5bWVudHMvZWt5YXNoL2luaXRpYXRlJzp7J2lkJzoncm91dGVzL3BheW1lbnRzL2VreWFzaC9pbml0aWF0ZScsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidwYXltZW50cy9la3lhc2gvaW5pdGlhdGUnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvcGF5bWVudHMvZWt5YXNoL2luaXRpYXRlLUFaVlNPTUpPLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1WRk40U0dMSy5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9wYXltZW50cy9la3lhc2gvcGF5LXdpdGgtcGhvbmUnOnsnaWQnOidyb3V0ZXMvcGF5bWVudHMvZWt5YXNoL3BheS13aXRoLXBob25lJywncGFyZW50SWQnOidyb290JywncGF0aCc6J3BheW1lbnRzL2VreWFzaC9wYXktd2l0aC1waG9uZScsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9wYXltZW50cy9la3lhc2gvcGF5LXdpdGgtcGhvbmUtQjY1TE43Q1EuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVZGTjRTR0xLLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRjRFVUJOM0ouanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX19LCd1cmwnOicvYnVpbGQvbWFuaWZlc3QtNjk0NzBBNTUuanMnfTsiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBQUE7QUFBQTs7O0FDQXZCO0FBQUE7QUFBQTtBQUFBO0FBWUEsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU87QUFFdEQsUUFBSSxPQUFPLFFBQVE7QUFJbkIsV0FBTyxlQUFlLFNBQVMsNEJBQTRCO0FBQUEsTUFDekQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxvQ0FBb0M7QUFBQSxNQUNqRSxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLHNDQUFzQztBQUFBLE1BQ25FLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsbUNBQW1DO0FBQUEsTUFDaEUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUdqQyxBQVlBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksZ0JBQWdCLFFBQVE7QUFJNUIsV0FB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
