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
var app_default = "/build/_assets/app-SC7TISD7.css";

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
    className: "flex flex-col pt-4 opacity-30 hover:opacity-100 text-right"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "pb-0 text-[8px]"
  }, "POWERED BY"), /* @__PURE__ */ React.createElement("h1", {
    className: "text-2xl font-bold"
  }, "Krabuu"), /* @__PURE__ */ React.createElement("span", {
    className: "text-gray-600 text-[10px]"
  }, "Pay online with Belize's digital wallets"));
}

// app/components/payment-amount.tsx
init_react();
function PaymentAmount({ amount, type, invoice }) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "w-full flex flex-col items-center mb-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-row items-end mr-2"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text-6xl font-bold text-indigo-500"
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
    "Pin Hash": "8d4fd24a970f49292076bf74df011e9f8d0e7850273666fcf4db458f1ee2d461",
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
    const result = await supabase.from("payments").update({ additionalData: { qrCodeUrl } }).eq("invoice", payment.invoice);
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
    this.payment = await create_pending_ekyash_payment_default.validateAsync(__spreadProps(__spreadValues({}, body), {
      total: Number(body.total).toString()
    }));
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

// app/assets/images/gigged-logo.png
var gigged_logo_default = "/build/_assets/gigged-logo-32TGUQ6X.png";

// app/components/vendor-header.tsx
init_react();
function VendorHeader({ name, logo, description, url }) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col pt-4 mb-4"
  }, /* @__PURE__ */ React.createElement("a", {
    href: url,
    target: "_blank",
    rel: "noreferrer"
  }, /* @__PURE__ */ React.createElement("img", {
    src: logo,
    alt: `${name} logo`,
    className: "w-36 h-auto mb-1"
  })), /* @__PURE__ */ React.createElement("span", {
    className: "text-gray-600 font-medium text-[10px]"
  }, description));
}

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
    pinHash: ekyash.credentials["Pin Hash"]
  }, {
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
    var _a;
    const pendingPayment = await PaymentRepository.getPaymentByInvoice(this.invoiceNo);
    if (!pendingPayment) {
      throw new Error("Payment with the given invoice does not exist.");
    }
    if ((_a = pendingPayment.additionalData) == null ? void 0 : _a.qrCodeUrl) {
      console.log("Active URL currently exists...");
      return pendingPayment;
    }
    const session = await getAuthorization({
      sid: ekyash.credentials.SID,
      pinHash: ekyash.credentials["Pin Hash"],
      pushKey: "{{pushkey}}"
    });
    const paymentResponse = await createNewInvoice({
      amount: pendingPayment.currency.amount,
      description: pendingPayment.description,
      currency: "BZD",
      orderId: pendingPayment.invoice,
      session: session.session
    });
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
  }, /* @__PURE__ */ React.createElement(VendorHeader, {
    name: "GiggedBz",
    logo: gigged_logo_default,
    url: "http://gigged.bz",
    description: "Make life easier by hiring a Gigger to help"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col border-[1px] container shadow-sm rounded p-4 w-[600px] min-h-[480px]"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-2xl font-medium pb-2 text-gray-900 text-center"
  }, "Giggedbz is requesting payment for your order with E-Kyash."), /* @__PURE__ */ React.createElement(PaymentAmount, {
    amount: data.payment.currency.amount,
    type: data.payment.currency.type,
    invoice: data.payment.invoice
  }), /* @__PURE__ */ React.createElement("hr", {
    className: "border-2 rounded-full mb-4 w-40 self-center"
  }), ((_a = data.payment.additionalData) == null ? void 0 : _a.qrCodeUrl) ? /* @__PURE__ */ React.createElement("img", {
    src: (_b = data.payment.additionalData) == null ? void 0 : _b.qrCodeUrl,
    alt: "payment qr code",
    className: "w-40 self-center pb-4"
  }) : /* @__PURE__ */ React.createElement("div", {
    className: "w-full py-2 px-4 bg-red-200 rounded-md pb-4"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text-red-700"
  }, "Oh, no! Something unexpected happened. Don't worry, your wallet has not been charged.")), /* @__PURE__ */ React.createElement("span", {
    className: "text-medium text-base pb-4 text-gray-500 text-center"
  }, "Please scan the QR code above to make payment with your E-Kyash app.")), /* @__PURE__ */ React.createElement(KrabuuHeader, null)));
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
var assets_manifest_default = { "version": "6e0499d6", "entry": { "module": "/build/entry.client-ANDNFDEO.js", "imports": ["/build/_shared/chunk-GO7C5GN2.js", "/build/_shared/chunk-P2FTGPOX.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-EYZBSW36.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-J3MPNNQZ.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/payments/ekyash/index": { "id": "routes/payments/ekyash/index", "parentId": "root", "path": "payments/ekyash", "index": true, "caseSensitive": void 0, "module": "/build/routes/payments/ekyash/index-HZN3WAPP.js", "imports": ["/build/_shared/chunk-PRLRAKEX.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/payments/ekyash/initiate": { "id": "routes/payments/ekyash/initiate", "parentId": "root", "path": "payments/ekyash/initiate", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/payments/ekyash/initiate-YPBAM6J3.js", "imports": ["/build/_shared/chunk-4IQ4C2XM.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/payments/ekyash/pay-with-phone": { "id": "routes/payments/ekyash/pay-with-phone", "parentId": "root", "path": "payments/ekyash/pay-with-phone", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/payments/ekyash/pay-with-phone-YK5FTXNM.js", "imports": ["/build/_shared/chunk-4IQ4C2XM.js", "/build/_shared/chunk-PRLRAKEX.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-6E0499D6.js" };

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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICIuLi9zZXJ2ZXIuanMiLCAic2VydmVyLWVudHJ5LW1vZHVsZTpAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGQiLCAiLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGU6L1VzZXJzL2RlcnJpY2tib2wvZGV2L2tyYWFidS9hcHAvcm9vdC50c3giLCAicm91dGU6L1VzZXJzL2RlcnJpY2tib2wvZGV2L2tyYWFidS9hcHAvcm91dGVzL3BheW1lbnRzL2VreWFzaC9wYXktd2l0aC1waG9uZS50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMva3JhYnV1LWhlYWRlci50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvcGF5bWVudC1hbW91bnQudHN4IiwgIi4uL2FwcC9kb21haW4vcGF5bWVudHMvcmVwb3NpdG9yaWVzL3BheW1lbnQtcmVwb3NpdG9yeS50cyIsICIuLi9hcHAvY29uZmlnL2luZGV4LnNlcnZlci50cyIsICIuLi9hcHAvZG9tYWluL3BheW1lbnRzL2VudGl0aWVzL3BheW1lbnQudHMiLCAicm91dGU6L1VzZXJzL2RlcnJpY2tib2wvZGV2L2tyYWFidS9hcHAvcm91dGVzL3BheW1lbnRzL2VreWFzaC9pbml0aWF0ZS50c3giLCAiLi4vYXBwL2RvbWFpbi9wYXltZW50cy9zZXJ2aWNlcy9jcmVhdGUtcGVuZGluZy1la3lhc2gtcGF5bWVudC50cyIsICIuLi9hcHAvcmVxdWVzdHMvY3JlYXRlLXBlbmRpbmctZWt5YXNoLXBheW1lbnQudHMiLCAiLi4vYXBwL2RvbWFpbi9wYXltZW50cy9tYXBwZXJzL2FyY2FkaWVyLXBheW1lbnQtbWFwcGVyLnRzIiwgInJvdXRlOi9Vc2Vycy9kZXJyaWNrYm9sL2Rldi9rcmFhYnUvYXBwL3JvdXRlcy9wYXltZW50cy9la3lhc2gvaW5kZXgudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL3ZlbmRvci1oZWFkZXIudHN4IiwgIi4uL2FwcC9kb21haW4vcGF5bWVudHMvc2VydmljZXMvcmVxdWVzdC1la3lhc2gtcGF5bWVudC1xci1jb2RlLnRzIiwgIi4uL2FwcC9kb21haW4vcGF5bWVudHMvbGlicmFyeS9la3lhc2gtYXBpLnRzIiwgInJvdXRlOi9Vc2Vycy9kZXJyaWNrYm9sL2Rldi9rcmFhYnUvYXBwL3JvdXRlcy9pbmRleC50c3giLCAic2VydmVyLWFzc2V0cy1tYW5pZmVzdDpAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3QiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHsgUmVhY3QgfTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vbm9kZSB2MS4yLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgbm9kZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vbm9kZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YTsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZSB2MS4yLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgc2VydmVyUnVudGltZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc0Nvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnanNvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmpzb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyZWRpcmVjdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLnJlZGlyZWN0OyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3JlYWN0IHYxLjIuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciByZWFjdCA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vcmVhY3QnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRm9ybScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5Gb3JtOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaXZlUmVsb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpdmVSZWxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNZXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk1ldGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdOYXZMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk5hdkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUHJlZmV0Y2hQYWdlTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUHJlZmV0Y2hQYWdlTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peEJyb3dzZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhCcm93c2VyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhTZXJ2ZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhTZXJ2ZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JpcHRzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcmlwdHM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JvbGxSZXN0b3JhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JvbGxSZXN0b3JhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUFjdGlvbkRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQWN0aW9uRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUJlZm9yZVVubG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VCZWZvcmVVbmxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VDYXRjaCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VDYXRjaDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXJzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRm9ybUFjdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGb3JtQWN0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlSHJlZicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VIcmVmOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9hZGVyRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2FkZXJEYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9jYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9jYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VNYXRjaGVzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU1hdGNoZXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0ZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRpb25UeXBlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRpb25UeXBlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldENvbnRleHQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0Q29udGV4dDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VSZXNvbHZlZFBhdGgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUmVzb2x2ZWRQYXRoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU2VhcmNoUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVNlYXJjaFBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVN1Ym1pdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTdWJtaXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VUcmFuc2l0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVRyYW5zaXRpb247IH1cbn0pO1xuXG4iLCAiaW1wb3J0IGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCBjb21wcmVzc2lvbiBmcm9tIFwiY29tcHJlc3Npb25cIjtcbmltcG9ydCBtb3JnYW4gZnJvbSBcIm1vcmdhblwiO1xuaW1wb3J0IHsgY3JlYXRlUmVxdWVzdEhhbmRsZXIgfSBmcm9tIFwiQHJlbWl4LXJ1bi9leHByZXNzXCI7XG5cbmltcG9ydCAqIGFzIHNlcnZlckJ1aWxkIGZyb20gXCJAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGRcIjtcblxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuXG5hcHAudXNlKGNvbXByZXNzaW9uKCkpO1xuXG4vLyBodHRwOi8vZXhwcmVzc2pzLmNvbS9lbi9hZHZhbmNlZC9iZXN0LXByYWN0aWNlLXNlY3VyaXR5Lmh0bWwjYXQtYS1taW5pbXVtLWRpc2FibGUteC1wb3dlcmVkLWJ5LWhlYWRlclxuYXBwLmRpc2FibGUoXCJ4LXBvd2VyZWQtYnlcIik7XG5cbi8vIFJlbWl4IGZpbmdlcnByaW50cyBpdHMgYXNzZXRzIHNvIHdlIGNhbiBjYWNoZSBmb3JldmVyLlxuYXBwLnVzZShcbiAgXCIvYnVpbGRcIixcbiAgZXhwcmVzcy5zdGF0aWMoXCJwdWJsaWMvYnVpbGRcIiwgeyBpbW11dGFibGU6IHRydWUsIG1heEFnZTogXCIxeVwiIH0pXG4pO1xuXG4vLyBFdmVyeXRoaW5nIGVsc2UgKGxpa2UgZmF2aWNvbi5pY28pIGlzIGNhY2hlZCBmb3IgYW4gaG91ci4gWW91IG1heSB3YW50IHRvIGJlXG4vLyBtb3JlIGFnZ3Jlc3NpdmUgd2l0aCB0aGlzIGNhY2hpbmcuXG5hcHAudXNlKGV4cHJlc3Muc3RhdGljKFwicHVibGljL2J1aWxkXCIsIHsgbWF4QWdlOiBcIjFoXCIgfSkpO1xuXG5hcHAudXNlKG1vcmdhbihcInRpbnlcIikpO1xuXG5hcHAuYWxsKFxuICBcIipcIixcbiAgY3JlYXRlUmVxdWVzdEhhbmRsZXIoe1xuICAgIGJ1aWxkOiBzZXJ2ZXJCdWlsZCxcbiAgICBtb2RlOiBwcm9jZXNzLmVudi5OT0RFX0VOVlxuICB9KVxuKTtcblxuY29uc3QgcG9ydCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgMzAwMDtcblxuYXBwLmxpc3Rlbihwb3J0LCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKGBFeHByZXNzIHNlcnZlciBsaXN0ZW5pbmcgb24gcG9ydCAke3BvcnR9YCk7XG59KTtcbiIsICJcbmltcG9ydCAqIGFzIGVudHJ5U2VydmVyIGZyb20gXCIvVXNlcnMvZGVycmlja2JvbC9kZXYva3JhYWJ1L2FwcC9lbnRyeS5zZXJ2ZXIudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTAgZnJvbSBcIi9Vc2Vycy9kZXJyaWNrYm9sL2Rldi9rcmFhYnUvYXBwL3Jvb3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIi9Vc2Vycy9kZXJyaWNrYm9sL2Rldi9rcmFhYnUvYXBwL3JvdXRlcy9wYXltZW50cy9la3lhc2gvcGF5LXdpdGgtcGhvbmUudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTIgZnJvbSBcIi9Vc2Vycy9kZXJyaWNrYm9sL2Rldi9rcmFhYnUvYXBwL3JvdXRlcy9wYXltZW50cy9la3lhc2gvaW5pdGlhdGUudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTMgZnJvbSBcIi9Vc2Vycy9kZXJyaWNrYm9sL2Rldi9rcmFhYnUvYXBwL3JvdXRlcy9wYXltZW50cy9la3lhc2gvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTQgZnJvbSBcIi9Vc2Vycy9kZXJyaWNrYm9sL2Rldi9rcmFhYnUvYXBwL3JvdXRlcy9pbmRleC50c3hcIjtcbiAgZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NldHMgfSBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0XCI7XG4gIGV4cG9ydCBjb25zdCBlbnRyeSA9IHsgbW9kdWxlOiBlbnRyeVNlcnZlciB9O1xuICBleHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICAgIFwicm9vdFwiOiB7XG4gICAgICBpZDogXCJyb290XCIsXG4gICAgICBwYXJlbnRJZDogdW5kZWZpbmVkLFxuICAgICAgcGF0aDogXCJcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMFxuICAgIH0sXG4gIFwicm91dGVzL3BheW1lbnRzL2VreWFzaC9wYXktd2l0aC1waG9uZVwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvcGF5bWVudHMvZWt5YXNoL3BheS13aXRoLXBob25lXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInBheW1lbnRzL2VreWFzaC9wYXktd2l0aC1waG9uZVwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxXG4gICAgfSxcbiAgXCJyb3V0ZXMvcGF5bWVudHMvZWt5YXNoL2luaXRpYXRlXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9wYXltZW50cy9la3lhc2gvaW5pdGlhdGVcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwicGF5bWVudHMvZWt5YXNoL2luaXRpYXRlXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTJcbiAgICB9LFxuICBcInJvdXRlcy9wYXltZW50cy9la3lhc2gvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3BheW1lbnRzL2VreWFzaC9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJwYXltZW50cy9la3lhc2hcIixcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTNcbiAgICB9LFxuICBcInJvdXRlcy9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTRcbiAgICB9XG4gIH07IiwgImltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IEVudHJ5Q29udGV4dCB9IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KFxuICByZXF1ZXN0OiBSZXF1ZXN0LFxuICByZXNwb25zZVN0YXR1c0NvZGU6IG51bWJlcixcbiAgcmVzcG9uc2VIZWFkZXJzOiBIZWFkZXJzLFxuICByZW1peENvbnRleHQ6IEVudHJ5Q29udGV4dFxuKSB7XG4gIGNvbnN0IG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKFxuICAgIDxSZW1peFNlcnZlciBjb250ZXh0PXtyZW1peENvbnRleHR9IHVybD17cmVxdWVzdC51cmx9IC8+XG4gICk7XG5cbiAgcmVzcG9uc2VIZWFkZXJzLnNldChcIkNvbnRlbnQtVHlwZVwiLCBcInRleHQvaHRtbFwiKTtcblxuICByZXR1cm4gbmV3IFJlc3BvbnNlKFwiPCFET0NUWVBFIGh0bWw+XCIgKyBtYXJrdXAsIHtcbiAgICBzdGF0dXM6IHJlc3BvbnNlU3RhdHVzQ29kZSxcbiAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnNcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBMaW5rc0Z1bmN0aW9uLCBNZXRhRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7XG4gIExpbmtzLFxuICBMaXZlUmVsb2FkLFxuICBNZXRhLFxuICBPdXRsZXQsXG4gIFNjcmlwdHMsXG4gIFNjcm9sbFJlc3RvcmF0aW9uLFxufSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzL2FwcC5jc3NcIjtcblxuZXhwb3J0IGxldCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIFt7IHJlbDogXCJzdHlsZXNoZWV0XCIsIGhyZWY6IHN0eWxlcyB9XTtcbn07XG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiB7IHRpdGxlOiBcIk5ldyBSZW1peCBBcHBcIiB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuICByZXR1cm4gKFxuICAgIDxodG1sIGxhbmc9XCJlblwiIGNsYXNzTmFtZT1cImgtZnVsbCB3LWZ1bGxcIj5cbiAgICAgIDxoZWFkPlxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgIDxNZXRhIC8+XG4gICAgICAgIDxMaW5rcyAvPlxuICAgICAgPC9oZWFkPlxuXG4gICAgICA8Ym9keSBjbGFzc05hbWU9XCJoLWZ1bGwgdy1mdWxsXCI+XG4gICAgICAgIDxPdXRsZXQgLz5cbiAgICAgICAgPFNjcm9sbFJlc3RvcmF0aW9uIC8+XG4gICAgICAgIDxTY3JpcHRzIC8+XG4gICAgICAgIDxMaXZlUmVsb2FkIC8+XG4gICAgICA8L2JvZHk+XG4gICAgPC9odG1sPlxuICApO1xufVxuIiwgImltcG9ydCB7XG4gIEFjdGlvbkZ1bmN0aW9uLFxuICBGb3JtLFxuICBqc29uLFxuICBMb2FkZXJGdW5jdGlvbixcbiAgTWV0YUZ1bmN0aW9uLFxuICB1c2VMb2FkZXJEYXRhLFxufSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCBLcmFidXVIZWFkZXIgZnJvbSBcIn4vY29tcG9uZW50cy9rcmFidXUtaGVhZGVyXCI7XG5pbXBvcnQgUGF5bWVudEFtb3VudCBmcm9tIFwifi9jb21wb25lbnRzL3BheW1lbnQtYW1vdW50XCI7XG5pbXBvcnQgUGF5bWVudCBmcm9tIFwifi9kb21haW4vcGF5bWVudHMvZW50aXRpZXMvcGF5bWVudFwiO1xuaW1wb3J0IFBheW1lbnRSZXBvc2l0b3J5IGZyb20gXCJ+L2RvbWFpbi9wYXltZW50cy9yZXBvc2l0b3JpZXMvcGF5bWVudC1yZXBvc2l0b3J5XCI7XG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdGl0bGU6IFwiQ29tcGxldGUgR2lnZ2VkQnogQm9va2luZyBQYXltZW50IHwgS3JhYnV1XCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIllvdSdyZSBhbG1vc3QgZG9uZSB3aXRoIHlvdXIgR2lnZ2VkQnogYm9va2luZy4gT25jZSBwYXltZW50IGlzIGNvbXBsZXRlZCwgeW91ciBib29raW5nIHdpbGwgYmUgY29uZmlybWVkLlwiLFxuICB9O1xufTtcblxuZXhwb3J0IGxldCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGNvbnN0IHNlYXJjaFBhcmFtcyA9IG5ldyBVUkwocmVxdWVzdC51cmwpLnNlYXJjaFBhcmFtcztcbiAgY29uc3QgaW52b2ljZU5vID0gc2VhcmNoUGFyYW1zLmdldChcImludm9pY2VOb1wiKTtcbiAgY29uc3QgcGF5bWVudEtleSA9IHNlYXJjaFBhcmFtcy5nZXQoXCJwYXlrZXlcIik7XG5cbiAgaWYgKCFpbnZvaWNlTm8gfHwgIXBheW1lbnRLZXkpIHtcbiAgICByZXR1cm4ganNvbih7IG1lc3NhZ2U6IFwibm8gcGF5bWVudCB3aXRoIHRoaXMgaW52b2ljZSBub1wiIH0sIDQwNCk7XG4gIH1cblxuICBjb25zdCBwYXltZW50ID0gYXdhaXQgUGF5bWVudFJlcG9zaXRvcnkuZ2V0UGF5bWVudEJ5SW52b2ljZShpbnZvaWNlTm8pO1xuXG4gIHJldHVybiBqc29uKHtcbiAgICBhbGl2ZTogdHJ1ZSxcbiAgICBwYXltZW50OiBwYXltZW50LFxuICB9KTtcbn07XG5cbmV4cG9ydCBsZXQgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBjb25zdCBmb3JtRGF0YSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcblxuICBpZiAoIWZvcm1EYXRhLmdldChcIm5hbWVcIikgfHwgIWZvcm1EYXRhLmdldChcInBob25lXCIpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiRW1haWwgYW5kIHBob25lIGFyZSBib3RoIHJlcXVpcmVkLlwiKTtcbiAgfVxuXG4gIGNvbnN0IHNlYXJjaFBhcmFtcyA9IG5ldyBVUkwocmVxdWVzdC51cmwpLnNlYXJjaFBhcmFtcztcbiAgY29uc3QgaW52b2ljZU5vID0gc2VhcmNoUGFyYW1zLmdldChcImludm9pY2VOb1wiKTtcblxuICBpZiAoIWludm9pY2VObykge1xuICAgIHJldHVybiBqc29uKHsgbWVzc2FnZTogXCJubyBwYXltZW50IHdpdGggdGhpcyBpbnZvaWNlIG5vXCIgfSwgNDA0KTtcbiAgfVxuXG4gIGNvbnN0IHBheW1lbnQgPSBhd2FpdCBQYXltZW50UmVwb3NpdG9yeS5nZXRQYXltZW50QnlJbnZvaWNlKFxuICAgIGludm9pY2VObyBhcyBzdHJpbmdcbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBibG9ja0ludmFsaWROdW1iZXJDaGFyID0gKGU6IGFueSkgPT4ge1xuICByZXR1cm4gW1wiZVwiLCBcIkVcIiwgXCIrXCJdLmluY2x1ZGVzKGUua2V5KSAmJiBlLnByZXZlbnREZWZhdWx0KCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFS3lhc2goKSB7XG4gIGNvbnN0IGRhdGEgPSB1c2VMb2FkZXJEYXRhKCkgYXMgeyBwYXltZW50OiBQYXltZW50IH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImgtZnVsbCB3LWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC1ncmF5LTgwMFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS1hdXRvIGxlYWRpbmctcmVsYXhlZFwiPlxuICAgICAgICA8S3JhYnV1SGVhZGVyIC8+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGJvcmRlci1bMXB4XSBjb250YWluZXIgc2hhZG93LW1kIHJvdW5kZWQgcC00IHctWzU2MHB4XSBtaW4taC1bNDgwcHhdXCI+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1tZWRpdW0gcGItNCB0ZXh0LWdyYXktOTAwXCI+XG4gICAgICAgICAgICBHaWdnZWRCeiBpcyByZXF1ZXN0aW5nIHBheW1lbnQgZm9yIHlvdXIgb3JkZXIgdXNpbmcgdGhlIEVLeWFzaFxuICAgICAgICAgICAgZGlnaXRhbCB3YWxsZXQuXG4gICAgICAgICAgPC9oMj5cblxuICAgICAgICAgIDxQYXltZW50QW1vdW50XG4gICAgICAgICAgICB0eXBlPXtkYXRhLnBheW1lbnQuY3VycmVuY3kudHlwZX1cbiAgICAgICAgICAgIGludm9pY2U9e2RhdGEucGF5bWVudC5pbnZvaWNlfVxuICAgICAgICAgICAgYW1vdW50PXtkYXRhLnBheW1lbnQuY3VycmVuY3kuYW1vdW50fVxuICAgICAgICAgIC8+XG5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwIHBiLTRcIj5cbiAgICAgICAgICAgIFBsZWFzZSBlbnRlciB5b3VyIHBob25lIG51bWJlciBsaW5rZWQgdG8geW91ciBFS3lhc2ggYWNjb3VudCBpblxuICAgICAgICAgICAgb3JkZXIgdG8gcmVjZWl2ZSB5b3VyIHBheW1lbnQgcmVxdWVzdC5cbiAgICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgICA8Rm9ybSBhY3Rpb249XCIvcGF5bWVudHMvZWt5YXNoXCIgbWV0aG9kPVwicG9zdFwiIGNsYXNzTmFtZT1cIm1iLTRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBwYi00XCI+XG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmFtZVwiIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtIHRleHQtZ3JheS02MDBcIj5cbiAgICAgICAgICAgICAgICBZb3VyIG5hbWVcbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICBpZD1cIm5hbWVcIlxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC14bCBmb2N1czpyaW5nLWluZGlnby01MDAgZm9jdXM6Ym9yZGVyLWluZGlnby01MDAgYmxvY2sgYm9yZGVyLTIgdy1mdWxsIHBsLTcgcHItMTIgZm9udC1ub3JtYWwgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbWQgcHktMlwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJpLmUuIEpvaG4gRG9lXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgcGItNFwiPlxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBob25lXCIgY2xhc3NOYW1lPVwiZm9udC1tZWRpdW0gdGV4dC1ncmF5LTYwMFwiPlxuICAgICAgICAgICAgICAgIFBob25lXG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZWxcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJwaG9uZVwiXG4gICAgICAgICAgICAgICAgaWQ9XCJwaG9uZVwiXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICBwYXR0ZXJuPVwiWzAtOV17M30tWzAtOV17M30tWzAtOV17NH1cIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQteGwgZm9jdXM6cmluZy1pbmRpZ28tNTAwIGZvY3VzOmJvcmRlci1pbmRpZ28tNTAwIGJsb2NrIGJvcmRlci0yIHctZnVsbCBwbC03IHByLTEyIGZvbnQtbm9ybWFsIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kIHB5LTJcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiaS5lLiA1MDEtNjIxLTEyMzRcIlxuICAgICAgICAgICAgICAgIG9uS2V5RG93bj17YmxvY2tJbnZhbGlkTnVtYmVyQ2hhcn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtNCBweS0yIHRleHQteGwgYm9yZGVyLTIgcm91bmRlZC1tZCBmb2N1czpyaW5nIGZvY3VzOnJpbmctaW5kaWdvLTEwMCBib3JkZXItaW5kaWdvLTUwMCBiZy1pbmRpZ28tNjAwIHRleHQtd2hpdGVcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBHZXQgUGF5bWVudCBSZXF1ZXN0XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gS3JhYnV1SGVhZGVyKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBwdC00IG9wYWNpdHktMzAgaG92ZXI6b3BhY2l0eS0xMDAgdGV4dC1yaWdodFwiPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGItMCB0ZXh0LVs4cHhdXCI+UE9XRVJFRCBCWTwvc3Bhbj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGRcIj5LcmFidXU8L2gxPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMCB0ZXh0LVsxMHB4XVwiPlxuICAgICAgICBQYXkgb25saW5lIHdpdGggQmVsaXplJ3MgZGlnaXRhbCB3YWxsZXRzXG4gICAgICA8L3NwYW4+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAidHlwZSBQcm9wcyA9IHtcbiAgYW1vdW50OiBudW1iZXI7XG4gIHR5cGU6IHN0cmluZztcbiAgaW52b2ljZTogc3RyaW5nO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGF5bWVudEFtb3VudCh7IGFtb3VudCwgdHlwZSwgaW52b2ljZSB9OiBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIG1iLTRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBpdGVtcy1lbmQgbXItMlwiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LTZ4bCBmb250LWJvbGQgdGV4dC1pbmRpZ28tNTAwXCI+JHthbW91bnR9PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LW1lZGl1bSB0ZXh0LWluZGlnby00MDBcIj57dHlwZX08L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JheS05MDBcIj57aW52b2ljZX08L3NwYW4+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgc3VwYWJhc2UgfSBmcm9tIFwifi9jb25maWcvaW5kZXguc2VydmVyXCI7XG5pbXBvcnQgUGF5bWVudCBmcm9tIFwiLi4vZW50aXRpZXMvcGF5bWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXltZW50UmVwb3NpdG9yeSB7XG4gIHN0YXRpYyBhc3luYyByZWJ1aWxkRW50aXR5KGRhdGE6IGFueSkge1xuICAgIGlmICghZGF0YSB8fCB0eXBlb2YgZGF0YSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBQYXltZW50KHtcbiAgICAgIGFkZGl0aW9uYWxEYXRhOiBkYXRhPy5hZGRpdGlvbmFsRGF0YSxcbiAgICAgIGN1cnJlbmN5OiB7XG4gICAgICAgIGFtb3VudDogZGF0YT8uYW1vdW50LFxuICAgICAgICB0eXBlOiBkYXRhLmN1cnJlbmN5LFxuICAgICAgfSxcbiAgICAgIGRlc2NyaXB0aW9uOiBkYXRhPy5kZXNjcmlwdGlvbixcbiAgICAgIGlkOiBkYXRhLmlkLFxuICAgICAgaW52b2ljZTogZGF0YS5pbnZvaWNlLFxuICAgICAgc3RhdHVzOiBkYXRhLnN0YXR1cyxcbiAgICAgIHVzZXI6IGRhdGEudXNlcixcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBhc3luYyBjcmVhdGVQZW5kaW5nKGRhdGE6IFBheW1lbnQpIHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzdXBhYmFzZS5mcm9tKFwicGF5bWVudHNcIikuaW5zZXJ0KFtcbiAgICAgIHtcbiAgICAgICAgYWRkaXRpb25hbERhdGE6IGRhdGEuYWRkaXRpb25hbERhdGEsXG4gICAgICAgIGFtb3VudDogZGF0YS5jdXJyZW5jeS5hbW91bnQsXG4gICAgICAgIGN1cnJlbmN5OiBkYXRhLmN1cnJlbmN5LnR5cGUsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBkYXRhLmRlc2NyaXB0aW9uLFxuICAgICAgICBpbnZvaWNlOiBkYXRhLmludm9pY2UsXG4gICAgICAgIHN0YXR1czogZGF0YS5zdGF0dXMsXG4gICAgICAgIHVzZXI6IGRhdGEudXNlcixcbiAgICAgIH0sXG4gICAgXSk7XG5cbiAgICByZXR1cm4gdGhpcy5yZWJ1aWxkRW50aXR5KHJlc3VsdC5ib2R5Py5bMF0pO1xuICB9XG5cbiAgc3RhdGljIGFzeW5jIGdldFBheW1lbnRCeUludm9pY2UoaW52b2ljZTogc3RyaW5nKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAgIC5mcm9tKFwicGF5bWVudHNcIilcbiAgICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgICAuZXEoXCJpbnZvaWNlXCIsIGludm9pY2UpO1xuXG4gICAgcmV0dXJuIHRoaXMucmVidWlsZEVudGl0eShyZXN1bHQuYm9keT8uWzBdKTtcbiAgfVxuXG4gIHN0YXRpYyBhc3luYyBzZXRQYXltZW50UXJDb2RlVXJsKHBheW1lbnQ6IFBheW1lbnQsIHFyQ29kZVVybDogc3RyaW5nKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAgIC5mcm9tKFwicGF5bWVudHNcIilcbiAgICAgIC51cGRhdGUoeyBhZGRpdGlvbmFsRGF0YTogeyBxckNvZGVVcmwgfSB9KVxuICAgICAgLmVxKFwiaW52b2ljZVwiLCBwYXltZW50Lmludm9pY2UpO1xuXG4gICAgcmV0dXJuIHRoaXMucmVidWlsZEVudGl0eShyZXN1bHQuYm9keT8uWzBdKTtcbiAgfVxufVxuIiwgImltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gXCJAc3VwYWJhc2Uvc3VwYWJhc2UtanNcIjtcbmltcG9ydCBcImRvdGVudi9jb25maWdcIjtcblxuY29uc3QgZWt5YXNoID0ge1xuICBhcGk6IFwiaHR0cHM6Ly9tdy1hcGktcHJlcHJvZC5lLWt5YXNoLmNvbS9hcGkvcXJwb3MtYXBwXCIsXG4gIHJvdXRlczoge1xuICAgIGJhc2U6IFwiaHR0cHM6Ly9tdy1hcGktcHJlcHJvZC5lLWt5YXNoLmNvbS9hcGkvcXJwb3MtYXBwXCIsXG4gICAgb3JkZXJEZXRhaWxzOiBcImh0dHBzOi8vZ2lnZ2VkYnouYXJjYWRpZXIuaW8vdXNlci9jaGVja291dC9vcmRlci1kZXRhaWxzXCIsXG4gIH0sXG4gIGhlYWRlcnM6IHtcbiAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICBcIkFjY2VwdC1MYW5ndWFnZVwiOiBcImVuXCIsXG4gICAgXCJUaGUtVGltZXpvbmUtSUFOQVwiOiBcIkJlbGl6ZVwiLFxuICAgIFdMOiBcImJpYmlcIixcbiAgICBJTUdFOiBcIkFQUEtFWTE3LTA3QTgtNEJBRi1BQTBGLUIxNTY4QzUwMTdBM1wiLFxuICAgIGFwcFZlcnNpb246IFwiOTkuMS4xXCIsXG4gICAgb3BlcmF0aW5nU3lzdGVtOiBcIkFuZHJvaWRcIixcbiAgICBTSUQ6IFwiMjMyNDUxODQwM1wiLFxuICB9LFxuICBjcmVkZW50aWFsczoge1xuICAgIFNJRDogMjMyNDUxODQwMyxcbiAgICBcIlBpbiBIYXNoXCI6XG4gICAgICBcIjhkNGZkMjRhOTcwZjQ5MjkyMDc2YmY3NGRmMDExZTlmOGQwZTc4NTAyNzM2NjZmY2Y0ZGI0NThmMWVlMmQ0NjFcIixcbiAgICBwaW5FbmNvZGVkOlxuICAgICAgXCI0NGM4MGJiZGU1OTJhZWQ3ZTIxMzhiNjdlYzcxZTk0YTVhMjJkMzliYzM2ZDY2YzMzNzNjMWVhMzMwMTNkMzk2XCIsXG4gIH0sXG4gIGRhdGE6IHtcbiAgICBwaG9uZTogXCI1MDE2Mzc2NTc0XCIsXG4gIH0sXG59O1xuXG5jb25zdCBzdXBhYmFzZVVybCA9IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9TVVBBQkFTRV9VUkw7XG5jb25zdCBzdXBhYmFzZUFub25LZXkgPSBwcm9jZXNzLmVudi5SRUFDVF9BUFBfU1VQQUJBU0VfQU5PTl9LRVk7XG5cbmNvbnN0IHN1cGFiYXNlID0gY3JlYXRlQ2xpZW50KHN1cGFiYXNlVXJsIGFzIHN0cmluZywgc3VwYWJhc2VBbm9uS2V5IGFzIHN0cmluZyk7XG5cbmV4cG9ydCB7IGVreWFzaCwgc3VwYWJhc2UgfTtcbiIsICJleHBvcnQgY29uc3QgZW51bSBQYXltZW50U3RhdHVzIHtcbiAgUGVuZGluZyxcbiAgSW5Qcm9ncmVzcyxcbiAgY29tcGxldGVkLFxufVxuXG50eXBlIFByb3BzID0ge1xuICBzdGF0dXM6IFBheW1lbnRTdGF0dXM7XG4gIHVzZXI6IHN0cmluZztcbiAgaWQ/OiBudW1iZXI7XG4gIGN1cnJlbmN5OiB7XG4gICAgYW1vdW50OiBudW1iZXI7XG4gICAgdHlwZTogc3RyaW5nO1xuICB9O1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBjcmVhdGVkQXQ/OiBhbnk7XG4gIGludm9pY2U6IHN0cmluZztcbiAgYWRkaXRpb25hbERhdGE6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBudW1iZXI7XG4gIH07XG59O1xuXG5jbGFzcyBQYXltZW50IHtcbiAgYWRkaXRpb25hbERhdGE6IFByb3BzW1wiYWRkaXRpb25hbERhdGFcIl07XG4gIGNyZWF0ZWRBdDogUHJvcHNbXCJjcmVhdGVkQXRcIl07XG4gIGN1cnJlbmN5OiBQcm9wc1tcImN1cnJlbmN5XCJdO1xuICBkZXNjcmlwdGlvbjogUHJvcHNbXCJkZXNjcmlwdGlvblwiXTtcbiAgaWQ6IFByb3BzW1wiaWRcIl07XG4gIGludm9pY2U6IFByb3BzW1wiaW52b2ljZVwiXTtcbiAgc3RhdHVzOiBQcm9wc1tcInN0YXR1c1wiXTtcbiAgdXNlcjogUHJvcHNbXCJ1c2VyXCJdO1xuXG4gIGNvbnN0cnVjdG9yKHtcbiAgICBhZGRpdGlvbmFsRGF0YSxcbiAgICBjcmVhdGVkQXQsXG4gICAgY3VycmVuY3ksXG4gICAgZGVzY3JpcHRpb24sXG4gICAgaWQsXG4gICAgaW52b2ljZSxcbiAgICBzdGF0dXMsXG4gICAgdXNlcixcbiAgfTogUHJvcHMpIHtcbiAgICB0aGlzLmFkZGl0aW9uYWxEYXRhID0gYWRkaXRpb25hbERhdGE7XG4gICAgdGhpcy5jcmVhdGVkQXQgPSBjcmVhdGVkQXQ7XG4gICAgdGhpcy5jdXJyZW5jeSA9IGN1cnJlbmN5O1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmlkID0gaWQ7XG4gICAgdGhpcy5pbnZvaWNlID0gaW52b2ljZTtcbiAgICB0aGlzLnN0YXR1cyA9IHN0YXR1cztcbiAgICB0aGlzLnVzZXIgPSB1c2VyO1xuICB9XG5cbiAgaXNWYWxpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW5jeS5hbW91bnQgPiAwO1xuICB9XG5cbiAgaXNQZW5kaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXR1cyA9PT0gUGF5bWVudFN0YXR1cy5QZW5kaW5nO1xuICB9XG5cbiAgY2FuTWFya0luUHJvZ3Jlc3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNQZW5kaW5nKCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGF5bWVudDtcbiIsICJpbXBvcnQgeyBBY3Rpb25GdW5jdGlvbiwganNvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IENyZWF0ZVBlbmRpbmdFa3lhc2hQYXltZW50IGZyb20gXCJ+L2RvbWFpbi9wYXltZW50cy9zZXJ2aWNlcy9jcmVhdGUtcGVuZGluZy1la3lhc2gtcGF5bWVudFwiO1xuXG5leHBvcnQgY29uc3QgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHBheW1lbnQgPSBhd2FpdCBuZXcgQ3JlYXRlUGVuZGluZ0VreWFzaFBheW1lbnQocmVxdWVzdCkuY2FsbCgpO1xuXG4gICAgcmV0dXJuIGpzb24ocGF5bWVudC5hZGRpdGlvbmFsRGF0YT8ucGF5bWVudEtleSwgMjAwKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBqc29uKFxuICAgICAge1xuICAgICAgICBtZXNzYWdlOiBcIlNvbWV0aGluZyB1bmV4cGVjdGVkIGhhcHBlbmVkLiBQbGVhc2UgdHJ5IGFnYWluXCIsXG4gICAgICB9LFxuICAgICAgNDIyXG4gICAgKTtcbiAgfVxufTtcbiIsICJpbXBvcnQgdHlwZSB7IEFyY2FkaWVyUGF5bWVudFJlcXVlc3QgfSBmcm9tIFwifi9kb21haW4vcGF5bWVudHMvbGlicmFyeS9hcmNhZGllci1hcGlcIjtcbmltcG9ydCBjcmVhdGVQZW5kaW5nRWt5YXNoUGF5bWVudFNjaGVtYSBmcm9tIFwifi9yZXF1ZXN0cy9jcmVhdGUtcGVuZGluZy1la3lhc2gtcGF5bWVudFwiO1xuaW1wb3J0IFBheW1lbnQgZnJvbSBcIi4uL2VudGl0aWVzL3BheW1lbnRcIjtcbmltcG9ydCBBcmNhZGllclBheW1lbnRNYXBwZXIgZnJvbSBcIi4uL21hcHBlcnMvYXJjYWRpZXItcGF5bWVudC1tYXBwZXJcIjtcbmltcG9ydCBQYXltZW50UmVwb3NpdG9yeSBmcm9tIFwiLi4vcmVwb3NpdG9yaWVzL3BheW1lbnQtcmVwb3NpdG9yeVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDcmVhdGVQZW5kaW5nRWt5YXNoUGF5bWVudCB7XG4gIHByaXZhdGUgcmVxdWVzdDogUmVxdWVzdDtcbiAgcHJpdmF0ZSBwYXltZW50OiBBcmNhZGllclBheW1lbnRSZXF1ZXN0IHwgbnVsbDtcblxuICBjb25zdHJ1Y3RvcihyZXF1ZXN0OiBSZXF1ZXN0KSB7XG4gICAgdGhpcy5yZXF1ZXN0ID0gcmVxdWVzdDtcbiAgICB0aGlzLnBheW1lbnQgPSBudWxsO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5UGF5bWVudFBhcmFtcygpIHtcbiAgICBjb25zdCBib2R5ID0gYXdhaXQgdGhpcy5yZXF1ZXN0Lmpzb24oKTtcblxuICAgIHRoaXMucGF5bWVudCA9IGF3YWl0IGNyZWF0ZVBlbmRpbmdFa3lhc2hQYXltZW50U2NoZW1hLnZhbGlkYXRlQXN5bmMoe1xuICAgICAgLi4uYm9keSxcbiAgICAgIHRvdGFsOiBOdW1iZXIoYm9keS50b3RhbCkudG9TdHJpbmcoKSwgLy8gZW5zdXJlIHN0cmluZ1xuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgY2FsbCgpOiBQcm9taXNlPFBheW1lbnQ+IHtcbiAgICBhd2FpdCB0aGlzLnZlcmlmeVBheW1lbnRQYXJhbXMoKTtcblxuICAgIGlmICghdGhpcy5wYXltZW50KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBkYXRhIGZyb20gYXJjYWRpZXIgcmVjZWl2ZWQuXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IHBlbmRpbmdQYXltZW50ID0gbmV3IEFyY2FkaWVyUGF5bWVudE1hcHBlcigpLmdldFBlbmRpbmcodGhpcy5wYXltZW50KTtcbiAgICBjb25zdCBwYXltZW50ID0gYXdhaXQgUGF5bWVudFJlcG9zaXRvcnkuY3JlYXRlUGVuZGluZyhwZW5kaW5nUGF5bWVudCk7XG5cbiAgICByZXR1cm4gcGF5bWVudCBhcyBQYXltZW50O1xuICB9XG59XG4iLCAiaW1wb3J0IGpvaSBmcm9tIFwiam9pXCI7XG5cbmNvbnN0IGNyZWF0ZVBlbmRpbmdFa3lhc2hQYXltZW50U2NoZW1hID0gam9pLm9iamVjdCh7XG4gIGludm9pY2Vubzogam9pLnN0cmluZygpLnJlcXVpcmVkKCksXG4gIGN1cnJlbmN5OiBqb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcbiAgdG90YWw6IGpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxuICBoYXNoa2V5OiBqb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcbiAgZ2F0ZXdheTogam9pLnN0cmluZygpLnJlcXVpcmVkKCksXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUGVuZGluZ0VreWFzaFBheW1lbnRTY2hlbWE7XG4iLCAiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgbmFub2lkIH0gZnJvbSBcIm5hbm9pZFwiO1xuaW1wb3J0IHsgZWt5YXNoIH0gZnJvbSBcIn4vY29uZmlnL2luZGV4LnNlcnZlclwiO1xuaW1wb3J0IFBheW1lbnQsIHsgUGF5bWVudFN0YXR1cyB9IGZyb20gXCIuLi9lbnRpdGllcy9wYXltZW50XCI7XG5pbXBvcnQgeyBBcmNhZGllclBheW1lbnRSZXF1ZXN0IH0gZnJvbSBcIi4uL2xpYnJhcnkvYXJjYWRpZXItYXBpXCI7XG5cbmNsYXNzIEFyY2FkaWVyUGF5bWVudE1hcHBlciB7XG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gZGF0YVxuICAgKiBAcmV0dXJucyBUaGUgaW5pdGlhbCBwYXltZW50IGRhdGEgc2VuZCBieSBhcmNhZGllclxuICAgKi9cbiAgZ2V0UGVuZGluZyhkYXRhOiBBcmNhZGllclBheW1lbnRSZXF1ZXN0KSB7XG4gICAgLy8gZG9uJ3QgZmluZDsganVzdCBidWlsZCB0aGUgZW50aXR5IGFzIHdlIGRvbid0IG5lZWQgdG8gcXVlcnkgYXJjYWRpZXIgZm9yIHRoaXMuXG4gICAgcmV0dXJuIHRoaXMuYnVpbGRFbnRpdHkoZGF0YSk7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIGRhdGFcbiAgICogQHJldHVybnMgUGF5bWVudCB3aXRoIHRoZSBvcmRlciBkZXRhaWxzIGZyb20gYXJjYWRpZXJcbiAgICovXG4gIGFzeW5jIGZpbmQoXG4gICAgZGF0YTogUGljazxBcmNhZGllclBheW1lbnRSZXF1ZXN0LCBcImdhdGV3YXlcIiB8IFwiaGFzaGtleVwiIHwgXCJpbnZvaWNlbm9cIj4gJiB7XG4gICAgICBwYXltZW50S2V5OiBzdHJpbmc7XG4gICAgfVxuICApIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcbiAgICAgIGAke2VreWFzaC5yb3V0ZXMub3JkZXJEZXRhaWxzfT9nYXRld2F5PSR7ZGF0YS5nYXRld2F5fSZpbnZvaWNlTm89JHtkYXRhLmludm9pY2Vub30mcGF5a2V5PSR7ZGF0YS5wYXltZW50S2V5fSZoYXNoa2V5PSR7ZGF0YS5oYXNoa2V5fWBcbiAgICApO1xuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBwcml2YXRlIGJ1aWxkRW50aXR5KGRhdGE6IEFyY2FkaWVyUGF5bWVudFJlcXVlc3QpOiBQYXltZW50IHtcbiAgICByZXR1cm4gbmV3IFBheW1lbnQoe1xuICAgICAgdXNlcjogXCJnaWdnZWRCelwiLFxuICAgICAgc3RhdHVzOiBQYXltZW50U3RhdHVzLlBlbmRpbmcsXG4gICAgICBjdXJyZW5jeToge1xuICAgICAgICBhbW91bnQ6IE51bWJlcihkYXRhLnRvdGFsKSxcbiAgICAgICAgdHlwZTogZGF0YS5jdXJyZW5jeSxcbiAgICAgIH0sXG4gICAgICBkZXNjcmlwdGlvbjogZGF0YS5pbnZvaWNlbm8sXG4gICAgICBpbnZvaWNlOiBkYXRhLmludm9pY2VubyxcbiAgICAgIGFkZGl0aW9uYWxEYXRhOiB7XG4gICAgICAgIGdhdGV3YXk6IGRhdGEuZ2F0ZXdheSxcbiAgICAgICAgaGFzaGtleTogZGF0YS5oYXNoa2V5LFxuICAgICAgICBwYXltZW50S2V5OiBuYW5vaWQoKSxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXJjYWRpZXJQYXltZW50TWFwcGVyO1xuIiwgImltcG9ydCB7IGpzb24sIExvYWRlckZ1bmN0aW9uLCB1c2VMb2FkZXJEYXRhIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgZ2lnZ2VkIGZyb20gXCJ+L2Fzc2V0cy9pbWFnZXMvZ2lnZ2VkLWxvZ28ucG5nXCI7XG5pbXBvcnQgS3JhYnV1SGVhZGVyIGZyb20gXCJ+L2NvbXBvbmVudHMva3JhYnV1LWhlYWRlclwiO1xuaW1wb3J0IFBheW1lbnRBbW91bnQgZnJvbSBcIn4vY29tcG9uZW50cy9wYXltZW50LWFtb3VudFwiO1xuaW1wb3J0IFZlbmRvckhlYWRlciBmcm9tIFwifi9jb21wb25lbnRzL3ZlbmRvci1oZWFkZXJcIjtcbmltcG9ydCBQYXltZW50IGZyb20gXCJ+L2RvbWFpbi9wYXltZW50cy9lbnRpdGllcy9wYXltZW50XCI7XG5pbXBvcnQgUmVxdWVzdEVreWFzaFBheW1lbnRRckNvZGUgZnJvbSBcIn4vZG9tYWluL3BheW1lbnRzL3NlcnZpY2VzL3JlcXVlc3QtZWt5YXNoLXBheW1lbnQtcXItY29kZVwiO1xuXG5leHBvcnQgbGV0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgY29uc3Qgc2VhcmNoUGFyYW1zID0gbmV3IFVSTChyZXF1ZXN0LnVybCkuc2VhcmNoUGFyYW1zO1xuICBjb25zdCBpbnZvaWNlTm8gPSBzZWFyY2hQYXJhbXMuZ2V0KFwiaW52b2ljZU5vXCIpO1xuICBjb25zdCBwYXltZW50S2V5ID0gc2VhcmNoUGFyYW1zLmdldChcInBheWtleVwiKTtcblxuICBpZiAoIWludm9pY2VObyB8fCAhcGF5bWVudEtleSkge1xuICAgIHJldHVybiBqc29uKHsgbWVzc2FnZTogXCJubyBwYXltZW50IHdpdGggdGhpcyBpbnZvaWNlIG5vXCIgfSwgNDA0KTtcbiAgfVxuXG4gIGNvbnN0IHBheW1lbnQgPSBhd2FpdCBuZXcgUmVxdWVzdEVreWFzaFBheW1lbnRRckNvZGUoXG4gICAgaW52b2ljZU5vLFxuICAgIHBheW1lbnRLZXlcbiAgKS5jYWxsKCk7XG5cbiAgcmV0dXJuIGpzb24oe1xuICAgIHBheW1lbnQ6IHBheW1lbnQsXG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIGNvbnN0IGRhdGEgPSB1c2VMb2FkZXJEYXRhKCkgYXMgeyBwYXltZW50OiBQYXltZW50IH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImgtZnVsbCB3LWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC1ncmF5LTgwMFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS1hdXRvIGxlYWRpbmctcmVsYXhlZFwiPlxuICAgICAgICA8VmVuZG9ySGVhZGVyXG4gICAgICAgICAgbmFtZT1cIkdpZ2dlZEJ6XCJcbiAgICAgICAgICBsb2dvPXtnaWdnZWR9XG4gICAgICAgICAgdXJsPVwiaHR0cDovL2dpZ2dlZC5ielwiXG4gICAgICAgICAgZGVzY3JpcHRpb249XCJNYWtlIGxpZmUgZWFzaWVyIGJ5IGhpcmluZyBhIEdpZ2dlciB0byBoZWxwXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGJvcmRlci1bMXB4XSBjb250YWluZXIgc2hhZG93LXNtIHJvdW5kZWQgcC00IHctWzYwMHB4XSBtaW4taC1bNDgwcHhdXCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtbWVkaXVtIHBiLTIgdGV4dC1ncmF5LTkwMCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgR2lnZ2VkYnogaXMgcmVxdWVzdGluZyBwYXltZW50IGZvciB5b3VyIG9yZGVyIHdpdGggRS1LeWFzaC5cbiAgICAgICAgICA8L2gxPlxuXG4gICAgICAgICAgPFBheW1lbnRBbW91bnRcbiAgICAgICAgICAgIGFtb3VudD17ZGF0YS5wYXltZW50LmN1cnJlbmN5LmFtb3VudH1cbiAgICAgICAgICAgIHR5cGU9e2RhdGEucGF5bWVudC5jdXJyZW5jeS50eXBlfVxuICAgICAgICAgICAgaW52b2ljZT17ZGF0YS5wYXltZW50Lmludm9pY2V9XG4gICAgICAgICAgLz5cblxuICAgICAgICAgIDxociBjbGFzc05hbWU9XCJib3JkZXItMiByb3VuZGVkLWZ1bGwgbWItNCB3LTQwIHNlbGYtY2VudGVyXCIgLz5cblxuICAgICAgICAgIHtkYXRhLnBheW1lbnQuYWRkaXRpb25hbERhdGE/LnFyQ29kZVVybCA/IChcbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgc3JjPXtkYXRhLnBheW1lbnQuYWRkaXRpb25hbERhdGE/LnFyQ29kZVVybCBhcyBzdHJpbmd9XG4gICAgICAgICAgICAgIGFsdD1cInBheW1lbnQgcXIgY29kZVwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNDAgc2VsZi1jZW50ZXIgcGItNFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBweS0yIHB4LTQgYmctcmVkLTIwMCByb3VuZGVkLW1kIHBiLTRcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1yZWQtNzAwXCI+XG4gICAgICAgICAgICAgICAgT2gsIG5vISBTb21ldGhpbmcgdW5leHBlY3RlZCBoYXBwZW5lZC4gRG9uJ3Qgd29ycnksIHlvdXIgd2FsbGV0XG4gICAgICAgICAgICAgICAgaGFzIG5vdCBiZWVuIGNoYXJnZWQuXG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LW1lZGl1bSB0ZXh0LWJhc2UgcGItNCB0ZXh0LWdyYXktNTAwIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICBQbGVhc2Ugc2NhbiB0aGUgUVIgY29kZSBhYm92ZSB0byBtYWtlIHBheW1lbnQgd2l0aCB5b3VyIEUtS3lhc2ggYXBwLlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPEtyYWJ1dUhlYWRlciAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAidHlwZSBQcm9wcyA9IHtcbiAgbmFtZTogc3RyaW5nO1xuICBsb2dvOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIHVybDogc3RyaW5nO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVmVuZG9ySGVhZGVyKHsgbmFtZSwgbG9nbywgZGVzY3JpcHRpb24sIHVybCB9OiBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBwdC00IG1iLTRcIj5cbiAgICAgIDxhIGhyZWY9e3VybH0gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9yZWZlcnJlclwiPlxuICAgICAgICA8aW1nIHNyYz17bG9nb30gYWx0PXtgJHtuYW1lfSBsb2dvYH0gY2xhc3NOYW1lPVwidy0zNiBoLWF1dG8gbWItMVwiIC8+XG4gICAgICA8L2E+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwIGZvbnQtbWVkaXVtIHRleHQtWzEwcHhdXCI+XG4gICAgICAgIHtkZXNjcmlwdGlvbn1cbiAgICAgIDwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBla3lhc2ggfSBmcm9tIFwifi9jb25maWcvaW5kZXguc2VydmVyXCI7XG5pbXBvcnQgeyBjcmVhdGVOZXdJbnZvaWNlLCBnZXRBdXRob3JpemF0aW9uIH0gZnJvbSBcIi4uL2xpYnJhcnkvZWt5YXNoLWFwaVwiO1xuaW1wb3J0IFBheW1lbnRSZXBvc2l0b3J5IGZyb20gXCIuLi9yZXBvc2l0b3JpZXMvcGF5bWVudC1yZXBvc2l0b3J5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlcXVlc3RFa3lhc2hQYXltZW50UXJDb2RlIHtcbiAgcHJpdmF0ZSBpbnZvaWNlTm86IHN0cmluZztcbiAgcHJpdmF0ZSBwYXltZW50S2V5OiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoaW52b2ljZU5vOiBzdHJpbmcsIHBheW1lbnRLZXk6IHN0cmluZykge1xuICAgIHRoaXMuaW52b2ljZU5vID0gaW52b2ljZU5vO1xuICAgIHRoaXMucGF5bWVudEtleSA9IHBheW1lbnRLZXk7XG4gIH1cblxuICBhc3luYyBjYWxsKCkge1xuICAgIGNvbnN0IHBlbmRpbmdQYXltZW50ID0gYXdhaXQgUGF5bWVudFJlcG9zaXRvcnkuZ2V0UGF5bWVudEJ5SW52b2ljZShcbiAgICAgIHRoaXMuaW52b2ljZU5vXG4gICAgKTtcblxuICAgIGlmICghcGVuZGluZ1BheW1lbnQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlBheW1lbnQgd2l0aCB0aGUgZ2l2ZW4gaW52b2ljZSBkb2VzIG5vdCBleGlzdC5cIik7XG4gICAgfVxuXG4gICAgaWYgKHBlbmRpbmdQYXltZW50LmFkZGl0aW9uYWxEYXRhPy5xckNvZGVVcmwpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiQWN0aXZlIFVSTCBjdXJyZW50bHkgZXhpc3RzLi4uXCIpO1xuICAgICAgcmV0dXJuIHBlbmRpbmdQYXltZW50O1xuICAgIH1cblxuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRBdXRob3JpemF0aW9uKHtcbiAgICAgIHNpZDogZWt5YXNoLmNyZWRlbnRpYWxzLlNJRCxcbiAgICAgIHBpbkhhc2g6IGVreWFzaC5jcmVkZW50aWFsc1tcIlBpbiBIYXNoXCJdLFxuICAgICAgcHVzaEtleTogXCJ7e3B1c2hrZXl9fVwiLFxuICAgIH0pO1xuXG4gICAgY29uc3QgcGF5bWVudFJlc3BvbnNlID0gYXdhaXQgY3JlYXRlTmV3SW52b2ljZSh7XG4gICAgICBhbW91bnQ6IHBlbmRpbmdQYXltZW50LmN1cnJlbmN5LmFtb3VudCxcbiAgICAgIGRlc2NyaXB0aW9uOiBwZW5kaW5nUGF5bWVudC5kZXNjcmlwdGlvbixcbiAgICAgIGN1cnJlbmN5OiBcIkJaRFwiLFxuICAgICAgb3JkZXJJZDogcGVuZGluZ1BheW1lbnQuaW52b2ljZSxcbiAgICAgIHNlc3Npb246IHNlc3Npb24uc2Vzc2lvbixcbiAgICB9KTtcblxuICAgIGNvbnN0IGluUHJvZ3Jlc3NQYXltZW50ID0gYXdhaXQgUGF5bWVudFJlcG9zaXRvcnkuc2V0UGF5bWVudFFyQ29kZVVybChcbiAgICAgIHBlbmRpbmdQYXltZW50LFxuICAgICAgcGF5bWVudFJlc3BvbnNlLnFyVXJsXG4gICAgKTtcblxuICAgIGlmICghaW5Qcm9ncmVzc1BheW1lbnQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlNvbWV0aGluZyB1bmV4cGVjdGVkIGhhcHBlbmVkIHdpdGggdGhpcyBwYXltZW50LlwiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW5Qcm9ncmVzc1BheW1lbnQ7XG4gIH1cbn1cbiIsICJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBlbmMsIEhtYWNTSEEyNTYgfSBmcm9tIFwiY3J5cHRvLWpzXCI7XG5pbXBvcnQgeyBla3lhc2ggfSBmcm9tIFwifi9jb25maWcvaW5kZXguc2VydmVyXCI7XG5cbi8qKlxuICogQnVpbGRzICYgcmV0dXJucyBhIEpXVCB0b2tlbiBmb3IgY2FsbHMgdG8gRS1reWFzaCdzIEFQSS5cbiAqIEByZXR1cm5zXG4gKi9cbmNvbnN0IGdldEpXVFRva2VuID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBoZWFkZXIgPSBlbmMuQmFzZTY0LnN0cmluZ2lmeShcbiAgICBlbmMuVXRmOC5wYXJzZShKU09OLnN0cmluZ2lmeSh7IGFsZzogXCJIUzI1NlwiLCB0eXA6IFwiSldUXCIgfSkpXG4gICk7XG5cbiAgY29uc3QgZGF0YSA9IGVuYy5CYXNlNjQuc3RyaW5naWZ5KFxuICAgIGVuYy5VdGY4LnBhcnNlKFxuICAgICAgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBtb2JpbGU6IGVreWFzaC5kYXRhLnBob25lLFxuICAgICAgICBzaWQ6IGVreWFzaC5jcmVkZW50aWFscy5TSUQsXG4gICAgICAgIHB1c2hrZXk6IFwiXCIsXG4gICAgICAgIHBpbkhhc2g6IGVreWFzaC5jcmVkZW50aWFscy5waW5FbmNvZGVkLFxuICAgICAgfSlcbiAgICApXG4gICk7XG5cbiAgY29uc3Qgc2lnbmF0dXJlID0gZW5jLkJhc2U2NC5zdHJpbmdpZnkoXG4gICAgSG1hY1NIQTI1NihgJHtoZWFkZXJ9LiR7ZGF0YX1gLCBla3lhc2guaGVhZGVycy5JTUdFKVxuICApO1xuXG4gIHJldHVybiBgJHtoZWFkZXJ9LiR7ZGF0YX0uJHtzaWduYXR1cmV9YDtcbn07XG5cbnR5cGUgQXV0aG9yaXphdGlvbkRhdGEgPSB7XG4gIC8qKlxuICAgKiBNZXJjaGFudCBJRCBwcm92aWRlZCBieSBFa3lhc2hcbiAgICovXG4gIHNpZDogbnVtYmVyO1xuICAvKipcbiAgICogcGluSGFzaCwgcHJvdmlkZWQgYnkgRWt5YXNoOiBoYXNoKCdzaGEyNTYnLCBtZDUoJ3BpbicpKVxuICAgKi9cbiAgcGluSGFzaDogc3RyaW5nO1xuICAvKipcbiAgICogYWx3YXlzIHByb3ZpZGVkIGFzIGFuIGVtcHR5IHN0cmluZ1xuICAgKi9cbiAgcHVzaEtleTogc3RyaW5nO1xufTtcblxudHlwZSBBdXRob3JpemF0aW9uUmVzcG9uc2UgPSB7XG4gIC8qKlxuICAgKiBUaGlzIHNlc3Npb24gSUQgdGhhdCBzaG91bGQgYmUgdXNlZCBmb3Igc3Vic2VxdWVudCByZXF1ZXN0cy5cbiAgICovXG4gIHNlc3Npb246IHN0cmluZztcbiAgZmlyc3ROYW1lPzogc3RyaW5nO1xuICBsYXN0TmFtZT86IHN0cmluZztcbiAgLyoqXG4gICAqIEFwcCBtb2JpbGUgc2V0dGluZ3NcbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICoge1xuICAgKiAgIFwibmFtZVNldHRpbmdzXCI6IFwidmFsdWVcIlxuICAgKiB9XG4gICAqL1xuICBTZXR0aW5ncz86IGFueTtcbn07XG5cbi8qKlxuICogUmVxdWVzdCBhIHNlc3Npb24ga2V5IGZyb20gRS1LeWFzaCdzIEFQSSBpbiBvcmRlciB0byBhdXRob3JpemUgcmVxdWVzdHMuXG4gKiBAcmV0dXJuc1xuICovXG5jb25zdCBnZXRBdXRob3JpemF0aW9uID0gYXN5bmMgKFxuICBkYXRhOiBBdXRob3JpemF0aW9uRGF0YVxuKTogUHJvbWlzZTxBdXRob3JpemF0aW9uUmVzcG9uc2U+ID0+IHtcbiAgY29uc3Qgand0ID0gYXdhaXQgZ2V0SldUVG9rZW4oKTtcblxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXG4gICAgYCR7ZWt5YXNoLmFwaX0vYXV0aG9yaXphdGlvbmAsXG4gICAge1xuICAgICAgcHVzaGtleTogXCJcIixcbiAgICAgIHNpZDogU3RyaW5nKGRhdGEuc2lkKSxcbiAgICAgIHBpbkhhc2g6IGVreWFzaC5jcmVkZW50aWFsc1tcIlBpbiBIYXNoXCJdLFxuICAgIH0sXG4gICAge1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICAuLi5la3lhc2guaGVhZGVycyxcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2p3dH1gLFxuICAgICAgfSxcbiAgICB9XG4gICk7XG5cbiAgcmV0dXJuIHJlc3BvbnNlLmRhdGEgYXMgQXV0aG9yaXphdGlvblJlc3BvbnNlO1xufTtcblxuZXhwb3J0IHR5cGUgTmV3SW52b2ljZURhdGEgPSB7XG4gIC8qKlxuICAgKiBTZXNzaW9uIElkIGZvciB0byBhdXRob3JpemUgcmVxdWVzdC5cbiAgICovXG4gIHNlc3Npb246IHN0cmluZztcbiAgLyoqXG4gICAqIElkIG9mIHRoZSBvcmRlciBiZWluZyBjYXJyaWVkIG91dFxuICAgKi9cbiAgb3JkZXJJZDogc3RyaW5nO1xuICAvKipcbiAgICogQW1vdW50IGluIGNlbnRzLlxuICAgKi9cbiAgYW1vdW50OiBudW1iZXI7XG4gIC8qKlxuICAgKiBDdXJyZW5jeSBpbiBJU08gNDIxNyBmb3JtYXQuXG4gICAqL1xuICBjdXJyZW5jeTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICAvKipcbiAgICogUGhvbmUgbnVtYmVyIG9mIHRoZSBjdXN0b21lciB0aGF0IHdpbGwgcGF5IHRoZSByZXF1ZXN0XG4gICAqL1xuICBwYXllcj86IG51bWJlcjtcbiAgLyoqXG4gICAqIE1ldGFkYXRhIHJlbGF0ZWQgdG8gdGhlIGl0ZW1zIGJlaW5nIHBheWVkIGZvci5cbiAgICogQGV4YW1wbGVcbiAgICoge1xuICAgKiAgIFwiZmllbGRcIjogXCJ2YWx1ZVwiXG4gICAqIH1cbiAgICovXG4gIGZpZWxkc090aGVyPzogT2JqZWN0IHwgYW55W107XG4gIC8qKlxuICAgKiBTaW1pbGFyIHRvIGZpZWxkc090aGVyIGJ1dCBhcmUgdXNlZCBvbmx5IG9uIG1vYmlsZSBwaG9uZXMuXG4gICAqIEBleGFtcGxlXG4gICAqIHtcbiAgICogICBcImZpZWxkXCI6IFwidmFsdWVcIlxuICAgKiB9XG4gICAqL1xuICBmaWVsZHNBcHA/OiBPYmplY3QgfCBhbnlbXTtcbiAgLyoqXG4gICAqIEJlZm9yZSB0aGUgbWVyY2hhbnQgY3JlYXRlcyB0aGVcbiAgICogaW52b2ljZSwgdGhlIG1lcmNoYW50IGNhbiBjYWxsIHRoZVxuICAgKiBcdTIwMUNVcGxvYWRJbWFnZVx1MjAxRCBlbmRwb2ludCB0byB1cGxvYWQgYW5cbiAgICogaW1hZ2UgKGZvciBleGFtcGxlIHRoZSBpbnZvaWNlKS4gV2hlblxuICAgKiB0aGUgY2FsbCB0byBjcmVhdGUgdGhlIGludm9pY2UgaXMgbWFkZSxcbiAgICogdGhlIE1lcmNoYW50IGNhbiBzcGVjaWZ5IHRoZSBpbWFnZVxuICAgKiBuYW1lIGluIHRoaXMgZmllbGQuIFRoZSBjdXN0b21lciB3aWxsXG4gICAqIHJlY2VpdmUgdGhlIGltYWdlIGFuZCBkZXRhaWxzIHdoZW5cbiAgICogdGhleSByZWNlaXZlIHRoZSBub3RpZmljYXRpb24uXG4gICAqL1xuICByZWNlaXB0Pzogc3RyaW5nO1xuICAvKipcbiAgICogSW52b2ljZSBkYXRlIGFuZCB0aW1lIHVudGlsIGl0IGV4cGlyZXMuXG4gICAqIEBleGFtcGxlXG4gICAqIDIwMjEtMDEtMTcgMTU6NDU6MTJcbiAgICovXG4gIGRhdGVMaWZlPzogc3RyaW5nO1xuICAvKipcbiAgICogUmV1c2FibGUgaW52b2ljZVxuICAgKi9cbiAgbG9uZ1Rlcm0/OiBib29sZWFuO1xufTtcblxudHlwZSBOZXdJbnZvaWNlUmVzcG9uc2UgPSB7XG4gIC8qKlxuICAgKiBAdHlwZSBBdXRob3JpemF0aW9uUmVzcG9uc2UuU2Vzc2lvblxuICAgKi9cbiAgaW52b2ljZUlkOiBudW1iZXI7XG4gIC8qKlxuICAgKiBMaW5rIHRvIHRoZSBRUiBjb2RlIG9mIHRoZSBpbnZvaWNlLlxuICAgKiBAZXhhbXBsZSBodHRwczovL2RvbWFpbi9xci9pbnZvaWNlLzM2ODA1MDE0Mzg0OVxuICAgKi9cbiAgcXJVcmw6IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSBkYXRhIHRoYXQgaXMgaW4gdGhlIFFSIGNvZGUuXG4gICAqIEBleGFtcGxlIDM2ODA1MDE0Mzg0OVxuICAgKi9cbiAgcXJEYXRhOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBMaW5rIHRvIHRoZSB1cGxvYWRlZCBpbWFnZSAtIHNlIHJlY2VpcHQgcGFyYW1ldGVyIGluIHRoZSByZXF1ZXN0XG4gICAqIEBleGFtcGxlIGh0dHBzOi8vZG9tYWluL3FyL2ludm9pY2UvMzY4MDUwMTQzODQ5XG4gICAqL1xuICByZWNlaXB0VXJsOiBzdHJpbmc7XG59O1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gaW52b2ljZSBmb3IgdXNlcnMgd2l0aCBhIHNwZWNpZmllZCBhbW91bnQgaW4gQmVsaXplIERvbGxhcnMuXG4gKi9cbmNvbnN0IGNyZWF0ZU5ld0ludm9pY2UgPSBhc3luYyAoXG4gIGRhdGE6IE5ld0ludm9pY2VEYXRhXG4pOiBQcm9taXNlPE5ld0ludm9pY2VSZXNwb25zZT4gPT4ge1xuICBjb25zdCBqd3QgPSBhd2FpdCBnZXRKV1RUb2tlbigpO1xuXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChcbiAgICBgJHtla3lhc2guYXBpfS9jcmVhdGUtbmV3LWludm9pY2VgLFxuICAgIHtcbiAgICAgIC4uLmRhdGEsXG4gICAgfSxcbiAgICB7XG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIC4uLmVreWFzaC5oZWFkZXJzLFxuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7and0fWAsXG4gICAgICB9LFxuICAgIH1cbiAgKTtcblxuICByZXR1cm4gcmVzcG9uc2UuZGF0YSBhcyBOZXdJbnZvaWNlUmVzcG9uc2U7XG59O1xuXG50eXBlIFVwbG9hZEludm9pY2VJbWFnZURhdGEgPSB7XG4gIC8qKlxuICAgKiBTZXNzaW9uIElEIGF1dGhvcml6aW5nIHRoZSByZXF1ZXN0XG4gICAqL1xuICBzZXNzaW9uOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBJbWFnZSB0eXBlXG4gICAqL1xuICBpbWFnZVR5cGU6IHN0cmluZztcbiAgLyoqXG4gICAqIEltYWdlIGZpbGUuIFRPRE86IFdoYXQgZm9ybWF0IHNob3VsZCB0aGlzIGJlIGluP1xuICAgKi9cbiAgZmlsZTogYW55O1xufTtcblxudHlwZSBVcGxvYWRJbnZvaWNlSW1hZ2VSZXNwb25zZSA9IHtcbiAgLyoqXG4gICAqIFRoZSByZXN1bHQgb2YgdGhlIGFjdGlvblxuICAgKi9cbiAgc3VjY2Vzcz86IGJvb2xlYW47XG59O1xuXG5jb25zdCB1cGxvYWRJbnZvaWNlSW1hZ2UgPSBhc3luYyAoZGF0YTogVXBsb2FkSW52b2ljZUltYWdlRGF0YSkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoYCR7ZWt5YXNoLmFwaX0vdXBsb2FkLWltYWdlYCwge1xuICAgIC4uLmRhdGEsXG4gIH0pO1xuXG4gIHJldHVybiByZXNwb25zZS5kYXRhIGFzIFVwbG9hZEludm9pY2VJbWFnZVJlc3BvbnNlO1xufTtcblxuZXhwb3J0IHsgZ2V0SldUVG9rZW4sIGdldEF1dGhvcml6YXRpb24sIGNyZWF0ZU5ld0ludm9pY2UsIHVwbG9hZEludm9pY2VJbWFnZSB9O1xuIiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1mdWxsIHctZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LTN4bCB0ZXh0LWdyYXktODAwXCI+XG4gICAgICAgIFF1aWNrbHkgaW50ZWdyYXRlIGFuZCBhY2NlcHQgb25saW5lIHBheW1lbnRzIGluIEJlbGl6ZSB3aXRoIHZhcmlvdXNcbiAgICAgICAgc3VwcG9ydGVkIGUtd2FsbGV0cyFcbiAgICAgIDwvaDE+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiZXhwb3J0IGRlZmF1bHQgeyd2ZXJzaW9uJzonNmUwNDk5ZDYnLCdlbnRyeSc6eydtb2R1bGUnOicvYnVpbGQvZW50cnkuY2xpZW50LUFORE5GREVPLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1HTzdDNUdOMi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVAyRlRHUE9YLmpzJ119LCdyb3V0ZXMnOnsncm9vdCc6eydpZCc6J3Jvb3QnLCdwYXJlbnRJZCc6dW5kZWZpbmVkLCdwYXRoJzonJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm9vdC1FWVpCU1czNi5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2luZGV4Jzp7J2lkJzoncm91dGVzL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6dW5kZWZpbmVkLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2luZGV4LUozTVBOTlFaLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvcGF5bWVudHMvZWt5YXNoL2luZGV4Jzp7J2lkJzoncm91dGVzL3BheW1lbnRzL2VreWFzaC9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidwYXltZW50cy9la3lhc2gnLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3BheW1lbnRzL2VreWFzaC9pbmRleC1IWk4zV0FQUC5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstUFJMUkFLRVguanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvcGF5bWVudHMvZWt5YXNoL2luaXRpYXRlJzp7J2lkJzoncm91dGVzL3BheW1lbnRzL2VreWFzaC9pbml0aWF0ZScsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidwYXltZW50cy9la3lhc2gvaW5pdGlhdGUnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvcGF5bWVudHMvZWt5YXNoL2luaXRpYXRlLVlQQkFNNkozLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay00SVE0QzJYTS5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9wYXltZW50cy9la3lhc2gvcGF5LXdpdGgtcGhvbmUnOnsnaWQnOidyb3V0ZXMvcGF5bWVudHMvZWt5YXNoL3BheS13aXRoLXBob25lJywncGFyZW50SWQnOidyb290JywncGF0aCc6J3BheW1lbnRzL2VreWFzaC9wYXktd2l0aC1waG9uZScsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9wYXltZW50cy9la3lhc2gvcGF5LXdpdGgtcGhvbmUtWUs1RlRYTk0uanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTRJUTRDMlhNLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstUFJMUkFLRVguanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX19LCd1cmwnOicvYnVpbGQvbWFuaWZlc3QtNkUwNDk5RDYuanMnfTsiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBQUE7QUFBQTs7O0FDQXZCO0FBQUE7QUFBQTtBQUFBO0FBWUEsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU87QUFFdEQsUUFBSSxPQUFPLFFBQVE7QUFJbkIsV0FBTyxlQUFlLFNBQVMsNEJBQTRCO0FBQUEsTUFDekQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFP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QXdDLEVBQUMsTUFBSyx5Q0FBd0MsWUFBVyxRQUFPLFFBQU8sa0NBQWlDLFNBQVEsUUFBVSxpQkFBZ0IsUUFBVSxVQUFTLDREQUEyRCxXQUFVLENBQUMsb0NBQW1DLHFDQUFvQyxhQUFZLE1BQUssYUFBWSxNQUFLLG9CQUFtQixPQUFNLG9CQUFtQixXQUFRLE9BQU07OztBbEJRL3dELElBQU0sUUFBUSxFQUFFLFFBQVE7QUFDeEIsSUFBTSxTQUFTO0FBQUEsRUFDcEIsUUFBUTtBQUFBLElBQ04sSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFWix5Q0FBeUM7QUFBQSxJQUNyQyxJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVaLG1DQUFtQztBQUFBLElBQy9CLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVosZ0NBQWdDO0FBQUEsSUFDNUIsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFWixnQkFBZ0I7QUFBQSxJQUNaLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBOzs7QUR6Q2QsSUFBTSxNQUFNO0FBRVosSUFBSSxJQUFJO0FBR1IsSUFBSSxRQUFRO0FBR1osSUFBSSxJQUNGLFVBQ0EsdUJBQVEsT0FBTyxnQkFBZ0IsRUFBRSxXQUFXLE1BQU0sUUFBUTtBQUs1RCxJQUFJLElBQUksdUJBQVEsT0FBTyxnQkFBZ0IsRUFBRSxRQUFRO0FBRWpELElBQUksSUFBSSwyQkFBTztBQUVmLElBQUksSUFDRixLQUNBLDBDQUFxQjtBQUFBLEVBQ25CLE9BQU87QUFBQSxFQUNQLE1BQU07QUFBQTtBQUlWLElBQU0sT0FBTyxRQUFRLElBQUksUUFBUTtBQUVqQyxJQUFJLE9BQU8sTUFBTSxNQUFNO0FBQ3JCLFVBQVEsSUFBSSxvQ0FBb0M7QUFBQTsiLAogICJuYW1lcyI6IFtdCn0K
