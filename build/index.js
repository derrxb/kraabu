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
var app_default = "/build/_assets/app-5DBL7C56.css";

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
    console.log("DB: ", result);
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
var assets_manifest_default = { "version": "ea4e1a9d", "entry": { "module": "/build/entry.client-ANDNFDEO.js", "imports": ["/build/_shared/chunk-GO7C5GN2.js", "/build/_shared/chunk-P2FTGPOX.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-QV6UV2VK.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-J3MPNNQZ.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/payments/ekyash/index": { "id": "routes/payments/ekyash/index", "parentId": "root", "path": "payments/ekyash", "index": true, "caseSensitive": void 0, "module": "/build/routes/payments/ekyash/index-HZN3WAPP.js", "imports": ["/build/_shared/chunk-PRLRAKEX.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/payments/ekyash/initiate": { "id": "routes/payments/ekyash/initiate", "parentId": "root", "path": "payments/ekyash/initiate", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/payments/ekyash/initiate-XY2XRFTN.js", "imports": ["/build/_shared/chunk-S2IPJTE4.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/payments/ekyash/pay-with-phone": { "id": "routes/payments/ekyash/pay-with-phone", "parentId": "root", "path": "payments/ekyash/pay-with-phone", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/payments/ekyash/pay-with-phone-CGWZRUM2.js", "imports": ["/build/_shared/chunk-S2IPJTE4.js", "/build/_shared/chunk-PRLRAKEX.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-EA4E1A9D.js" };

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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICIuLi9zZXJ2ZXIuanMiLCAic2VydmVyLWVudHJ5LW1vZHVsZTpAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGQiLCAiLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGU6L1VzZXJzL2RlcnJpY2tib2wvZGV2L2tyYWFidS9hcHAvcm9vdC50c3giLCAicm91dGU6L1VzZXJzL2RlcnJpY2tib2wvZGV2L2tyYWFidS9hcHAvcm91dGVzL3BheW1lbnRzL2VreWFzaC9wYXktd2l0aC1waG9uZS50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMva3JhYnV1LWhlYWRlci50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvcGF5bWVudC1hbW91bnQudHN4IiwgIi4uL2FwcC9kb21haW4vcGF5bWVudHMvcmVwb3NpdG9yaWVzL3BheW1lbnQtcmVwb3NpdG9yeS50cyIsICIuLi9hcHAvY29uZmlnL2luZGV4LnNlcnZlci50cyIsICIuLi9hcHAvZG9tYWluL3BheW1lbnRzL2VudGl0aWVzL3BheW1lbnQudHMiLCAicm91dGU6L1VzZXJzL2RlcnJpY2tib2wvZGV2L2tyYWFidS9hcHAvcm91dGVzL3BheW1lbnRzL2VreWFzaC9pbml0aWF0ZS50c3giLCAiLi4vYXBwL2RvbWFpbi9wYXltZW50cy9zZXJ2aWNlcy9jcmVhdGUtcGVuZGluZy1la3lhc2gtcGF5bWVudC50cyIsICIuLi9hcHAvcmVxdWVzdHMvY3JlYXRlLXBlbmRpbmctZWt5YXNoLXBheW1lbnQudHMiLCAiLi4vYXBwL2RvbWFpbi9wYXltZW50cy9tYXBwZXJzL2FyY2FkaWVyLXBheW1lbnQtbWFwcGVyLnRzIiwgInJvdXRlOi9Vc2Vycy9kZXJyaWNrYm9sL2Rldi9rcmFhYnUvYXBwL3JvdXRlcy9wYXltZW50cy9la3lhc2gvaW5kZXgudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL3ZlbmRvci1oZWFkZXIudHN4IiwgIi4uL2FwcC9kb21haW4vcGF5bWVudHMvc2VydmljZXMvcmVxdWVzdC1la3lhc2gtcGF5bWVudC1xci1jb2RlLnRzIiwgIi4uL2FwcC9kb21haW4vcGF5bWVudHMvbGlicmFyeS9la3lhc2gtYXBpLnRzIiwgInJvdXRlOi9Vc2Vycy9kZXJyaWNrYm9sL2Rldi9rcmFhYnUvYXBwL3JvdXRlcy9pbmRleC50c3giLCAic2VydmVyLWFzc2V0cy1tYW5pZmVzdDpAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3QiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHsgUmVhY3QgfTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vbm9kZSB2MS4yLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgbm9kZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vbm9kZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YTsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZSB2MS4yLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgc2VydmVyUnVudGltZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc0Nvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnanNvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmpzb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyZWRpcmVjdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLnJlZGlyZWN0OyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3JlYWN0IHYxLjIuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciByZWFjdCA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vcmVhY3QnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRm9ybScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5Gb3JtOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaXZlUmVsb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpdmVSZWxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNZXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk1ldGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdOYXZMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk5hdkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUHJlZmV0Y2hQYWdlTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUHJlZmV0Y2hQYWdlTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peEJyb3dzZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhCcm93c2VyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhTZXJ2ZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhTZXJ2ZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JpcHRzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcmlwdHM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JvbGxSZXN0b3JhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JvbGxSZXN0b3JhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUFjdGlvbkRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQWN0aW9uRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUJlZm9yZVVubG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VCZWZvcmVVbmxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VDYXRjaCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VDYXRjaDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXJzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRm9ybUFjdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGb3JtQWN0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlSHJlZicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VIcmVmOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9hZGVyRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2FkZXJEYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9jYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9jYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VNYXRjaGVzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU1hdGNoZXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0ZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRpb25UeXBlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRpb25UeXBlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldENvbnRleHQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0Q29udGV4dDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VSZXNvbHZlZFBhdGgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUmVzb2x2ZWRQYXRoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU2VhcmNoUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVNlYXJjaFBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVN1Ym1pdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTdWJtaXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VUcmFuc2l0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVRyYW5zaXRpb247IH1cbn0pO1xuXG4iLCAiaW1wb3J0IGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCBjb21wcmVzc2lvbiBmcm9tIFwiY29tcHJlc3Npb25cIjtcbmltcG9ydCBtb3JnYW4gZnJvbSBcIm1vcmdhblwiO1xuaW1wb3J0IHsgY3JlYXRlUmVxdWVzdEhhbmRsZXIgfSBmcm9tIFwiQHJlbWl4LXJ1bi9leHByZXNzXCI7XG5cbmltcG9ydCAqIGFzIHNlcnZlckJ1aWxkIGZyb20gXCJAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGRcIjtcblxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuXG5hcHAudXNlKGNvbXByZXNzaW9uKCkpO1xuXG4vLyBodHRwOi8vZXhwcmVzc2pzLmNvbS9lbi9hZHZhbmNlZC9iZXN0LXByYWN0aWNlLXNlY3VyaXR5Lmh0bWwjYXQtYS1taW5pbXVtLWRpc2FibGUteC1wb3dlcmVkLWJ5LWhlYWRlclxuYXBwLmRpc2FibGUoXCJ4LXBvd2VyZWQtYnlcIik7XG5cbi8vIFJlbWl4IGZpbmdlcnByaW50cyBpdHMgYXNzZXRzIHNvIHdlIGNhbiBjYWNoZSBmb3JldmVyLlxuYXBwLnVzZShcbiAgXCIvYnVpbGRcIixcbiAgZXhwcmVzcy5zdGF0aWMoXCJwdWJsaWMvYnVpbGRcIiwgeyBpbW11dGFibGU6IHRydWUsIG1heEFnZTogXCIxeVwiIH0pXG4pO1xuXG4vLyBFdmVyeXRoaW5nIGVsc2UgKGxpa2UgZmF2aWNvbi5pY28pIGlzIGNhY2hlZCBmb3IgYW4gaG91ci4gWW91IG1heSB3YW50IHRvIGJlXG4vLyBtb3JlIGFnZ3Jlc3NpdmUgd2l0aCB0aGlzIGNhY2hpbmcuXG5hcHAudXNlKGV4cHJlc3Muc3RhdGljKFwicHVibGljL2J1aWxkXCIsIHsgbWF4QWdlOiBcIjFoXCIgfSkpO1xuXG5hcHAudXNlKG1vcmdhbihcInRpbnlcIikpO1xuXG5hcHAuYWxsKFxuICBcIipcIixcbiAgY3JlYXRlUmVxdWVzdEhhbmRsZXIoe1xuICAgIGJ1aWxkOiBzZXJ2ZXJCdWlsZCxcbiAgICBtb2RlOiBwcm9jZXNzLmVudi5OT0RFX0VOVlxuICB9KVxuKTtcblxuY29uc3QgcG9ydCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgMzAwMDtcblxuYXBwLmxpc3Rlbihwb3J0LCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKGBFeHByZXNzIHNlcnZlciBsaXN0ZW5pbmcgb24gcG9ydCAke3BvcnR9YCk7XG59KTtcbiIsICJcbmltcG9ydCAqIGFzIGVudHJ5U2VydmVyIGZyb20gXCIvVXNlcnMvZGVycmlja2JvbC9kZXYva3JhYWJ1L2FwcC9lbnRyeS5zZXJ2ZXIudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTAgZnJvbSBcIi9Vc2Vycy9kZXJyaWNrYm9sL2Rldi9rcmFhYnUvYXBwL3Jvb3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIi9Vc2Vycy9kZXJyaWNrYm9sL2Rldi9rcmFhYnUvYXBwL3JvdXRlcy9wYXltZW50cy9la3lhc2gvcGF5LXdpdGgtcGhvbmUudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTIgZnJvbSBcIi9Vc2Vycy9kZXJyaWNrYm9sL2Rldi9rcmFhYnUvYXBwL3JvdXRlcy9wYXltZW50cy9la3lhc2gvaW5pdGlhdGUudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTMgZnJvbSBcIi9Vc2Vycy9kZXJyaWNrYm9sL2Rldi9rcmFhYnUvYXBwL3JvdXRlcy9wYXltZW50cy9la3lhc2gvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTQgZnJvbSBcIi9Vc2Vycy9kZXJyaWNrYm9sL2Rldi9rcmFhYnUvYXBwL3JvdXRlcy9pbmRleC50c3hcIjtcbiAgZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NldHMgfSBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0XCI7XG4gIGV4cG9ydCBjb25zdCBlbnRyeSA9IHsgbW9kdWxlOiBlbnRyeVNlcnZlciB9O1xuICBleHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICAgIFwicm9vdFwiOiB7XG4gICAgICBpZDogXCJyb290XCIsXG4gICAgICBwYXJlbnRJZDogdW5kZWZpbmVkLFxuICAgICAgcGF0aDogXCJcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMFxuICAgIH0sXG4gIFwicm91dGVzL3BheW1lbnRzL2VreWFzaC9wYXktd2l0aC1waG9uZVwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvcGF5bWVudHMvZWt5YXNoL3BheS13aXRoLXBob25lXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInBheW1lbnRzL2VreWFzaC9wYXktd2l0aC1waG9uZVwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxXG4gICAgfSxcbiAgXCJyb3V0ZXMvcGF5bWVudHMvZWt5YXNoL2luaXRpYXRlXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9wYXltZW50cy9la3lhc2gvaW5pdGlhdGVcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwicGF5bWVudHMvZWt5YXNoL2luaXRpYXRlXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTJcbiAgICB9LFxuICBcInJvdXRlcy9wYXltZW50cy9la3lhc2gvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3BheW1lbnRzL2VreWFzaC9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJwYXltZW50cy9la3lhc2hcIixcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTNcbiAgICB9LFxuICBcInJvdXRlcy9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTRcbiAgICB9XG4gIH07IiwgImltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IEVudHJ5Q29udGV4dCB9IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KFxuICByZXF1ZXN0OiBSZXF1ZXN0LFxuICByZXNwb25zZVN0YXR1c0NvZGU6IG51bWJlcixcbiAgcmVzcG9uc2VIZWFkZXJzOiBIZWFkZXJzLFxuICByZW1peENvbnRleHQ6IEVudHJ5Q29udGV4dFxuKSB7XG4gIGNvbnN0IG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKFxuICAgIDxSZW1peFNlcnZlciBjb250ZXh0PXtyZW1peENvbnRleHR9IHVybD17cmVxdWVzdC51cmx9IC8+XG4gICk7XG5cbiAgcmVzcG9uc2VIZWFkZXJzLnNldChcIkNvbnRlbnQtVHlwZVwiLCBcInRleHQvaHRtbFwiKTtcblxuICByZXR1cm4gbmV3IFJlc3BvbnNlKFwiPCFET0NUWVBFIGh0bWw+XCIgKyBtYXJrdXAsIHtcbiAgICBzdGF0dXM6IHJlc3BvbnNlU3RhdHVzQ29kZSxcbiAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnNcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBMaW5rc0Z1bmN0aW9uLCBNZXRhRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7XG4gIExpbmtzLFxuICBMaXZlUmVsb2FkLFxuICBNZXRhLFxuICBPdXRsZXQsXG4gIFNjcmlwdHMsXG4gIFNjcm9sbFJlc3RvcmF0aW9uLFxufSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzL2FwcC5jc3NcIjtcblxuZXhwb3J0IGxldCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIFt7IHJlbDogXCJzdHlsZXNoZWV0XCIsIGhyZWY6IHN0eWxlcyB9XTtcbn07XG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiB7IHRpdGxlOiBcIk5ldyBSZW1peCBBcHBcIiB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuICByZXR1cm4gKFxuICAgIDxodG1sIGxhbmc9XCJlblwiIGNsYXNzTmFtZT1cImgtZnVsbCB3LWZ1bGxcIj5cbiAgICAgIDxoZWFkPlxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgIDxNZXRhIC8+XG4gICAgICAgIDxMaW5rcyAvPlxuICAgICAgPC9oZWFkPlxuICAgICAgPGJvZHkgY2xhc3NOYW1lPVwiaC1mdWxsIHctZnVsbFwiPlxuICAgICAgICA8T3V0bGV0IC8+XG4gICAgICAgIDxTY3JvbGxSZXN0b3JhdGlvbiAvPlxuICAgICAgICA8U2NyaXB0cyAvPlxuICAgICAgICA8TGl2ZVJlbG9hZCAvPlxuICAgICAgPC9ib2R5PlxuICAgIDwvaHRtbD5cbiAgKTtcbn1cbiIsICJpbXBvcnQge1xuICBBY3Rpb25GdW5jdGlvbixcbiAgRm9ybSxcbiAganNvbixcbiAgTG9hZGVyRnVuY3Rpb24sXG4gIE1ldGFGdW5jdGlvbixcbiAgdXNlTG9hZGVyRGF0YSxcbn0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgS3JhYnV1SGVhZGVyIGZyb20gXCJ+L2NvbXBvbmVudHMva3JhYnV1LWhlYWRlclwiO1xuaW1wb3J0IFBheW1lbnRBbW91bnQgZnJvbSBcIn4vY29tcG9uZW50cy9wYXltZW50LWFtb3VudFwiO1xuaW1wb3J0IFBheW1lbnQgZnJvbSBcIn4vZG9tYWluL3BheW1lbnRzL2VudGl0aWVzL3BheW1lbnRcIjtcbmltcG9ydCBQYXltZW50UmVwb3NpdG9yeSBmcm9tIFwifi9kb21haW4vcGF5bWVudHMvcmVwb3NpdG9yaWVzL3BheW1lbnQtcmVwb3NpdG9yeVwiO1xuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiBcIkNvbXBsZXRlIEdpZ2dlZEJ6IEJvb2tpbmcgUGF5bWVudCB8IEtyYWJ1dVwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJZb3UncmUgYWxtb3N0IGRvbmUgd2l0aCB5b3VyIEdpZ2dlZEJ6IGJvb2tpbmcuIE9uY2UgcGF5bWVudCBpcyBjb21wbGV0ZWQsIHlvdXIgYm9va2luZyB3aWxsIGJlIGNvbmZpcm1lZC5cIixcbiAgfTtcbn07XG5cbmV4cG9ydCBsZXQgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBjb25zdCBzZWFyY2hQYXJhbXMgPSBuZXcgVVJMKHJlcXVlc3QudXJsKS5zZWFyY2hQYXJhbXM7XG4gIGNvbnN0IGludm9pY2VObyA9IHNlYXJjaFBhcmFtcy5nZXQoXCJpbnZvaWNlTm9cIik7XG4gIGNvbnN0IHBheW1lbnRLZXkgPSBzZWFyY2hQYXJhbXMuZ2V0KFwicGF5a2V5XCIpO1xuXG4gIGlmICghaW52b2ljZU5vIHx8ICFwYXltZW50S2V5KSB7XG4gICAgcmV0dXJuIGpzb24oeyBtZXNzYWdlOiBcIm5vIHBheW1lbnQgd2l0aCB0aGlzIGludm9pY2Ugbm9cIiB9LCA0MDQpO1xuICB9XG5cbiAgY29uc3QgcGF5bWVudCA9IGF3YWl0IFBheW1lbnRSZXBvc2l0b3J5LmdldFBheW1lbnRCeUludm9pY2UoaW52b2ljZU5vKTtcblxuICByZXR1cm4ganNvbih7XG4gICAgYWxpdmU6IHRydWUsXG4gICAgcGF5bWVudDogcGF5bWVudCxcbiAgfSk7XG59O1xuXG5leHBvcnQgbGV0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgY29uc3QgZm9ybURhdGEgPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XG5cbiAgaWYgKCFmb3JtRGF0YS5nZXQoXCJuYW1lXCIpIHx8ICFmb3JtRGF0YS5nZXQoXCJwaG9uZVwiKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkVtYWlsIGFuZCBwaG9uZSBhcmUgYm90aCByZXF1aXJlZC5cIik7XG4gIH1cblxuICBjb25zdCBzZWFyY2hQYXJhbXMgPSBuZXcgVVJMKHJlcXVlc3QudXJsKS5zZWFyY2hQYXJhbXM7XG4gIGNvbnN0IGludm9pY2VObyA9IHNlYXJjaFBhcmFtcy5nZXQoXCJpbnZvaWNlTm9cIik7XG5cbiAgaWYgKCFpbnZvaWNlTm8pIHtcbiAgICByZXR1cm4ganNvbih7IG1lc3NhZ2U6IFwibm8gcGF5bWVudCB3aXRoIHRoaXMgaW52b2ljZSBub1wiIH0sIDQwNCk7XG4gIH1cblxuICBjb25zdCBwYXltZW50ID0gYXdhaXQgUGF5bWVudFJlcG9zaXRvcnkuZ2V0UGF5bWVudEJ5SW52b2ljZShcbiAgICBpbnZvaWNlTm8gYXMgc3RyaW5nXG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgYmxvY2tJbnZhbGlkTnVtYmVyQ2hhciA9IChlOiBhbnkpID0+IHtcbiAgcmV0dXJuIFtcImVcIiwgXCJFXCIsIFwiK1wiXS5pbmNsdWRlcyhlLmtleSkgJiYgZS5wcmV2ZW50RGVmYXVsdCgpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRUt5YXNoKCkge1xuICBjb25zdCBkYXRhID0gdXNlTG9hZGVyRGF0YSgpIGFzIHsgcGF5bWVudDogUGF5bWVudCB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoLWZ1bGwgdy1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtZ3JheS04MDBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktYXV0byBsZWFkaW5nLXJlbGF4ZWRcIj5cbiAgICAgICAgPEtyYWJ1dUhlYWRlciAvPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBib3JkZXItWzFweF0gY29udGFpbmVyIHNoYWRvdy1tZCByb3VuZGVkIHAtNCB3LVs1NjBweF0gbWluLWgtWzQ4MHB4XVwiPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtbWVkaXVtIHBiLTQgdGV4dC1ncmF5LTkwMFwiPlxuICAgICAgICAgICAgR2lnZ2VkQnogaXMgcmVxdWVzdGluZyBwYXltZW50IGZvciB5b3VyIG9yZGVyIHVzaW5nIHRoZSBFS3lhc2hcbiAgICAgICAgICAgIGRpZ2l0YWwgd2FsbGV0LlxuICAgICAgICAgIDwvaDI+XG5cbiAgICAgICAgICA8UGF5bWVudEFtb3VudFxuICAgICAgICAgICAgdHlwZT17ZGF0YS5wYXltZW50LmN1cnJlbmN5LnR5cGV9XG4gICAgICAgICAgICBpbnZvaWNlPXtkYXRhLnBheW1lbnQuaW52b2ljZX1cbiAgICAgICAgICAgIGFtb3VudD17ZGF0YS5wYXltZW50LmN1cnJlbmN5LmFtb3VudH1cbiAgICAgICAgICAvPlxuXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMCBwYi00XCI+XG4gICAgICAgICAgICBQbGVhc2UgZW50ZXIgeW91ciBwaG9uZSBudW1iZXIgbGlua2VkIHRvIHlvdXIgRUt5YXNoIGFjY291bnQgaW5cbiAgICAgICAgICAgIG9yZGVyIHRvIHJlY2VpdmUgeW91ciBwYXltZW50IHJlcXVlc3QuXG4gICAgICAgICAgPC9zcGFuPlxuXG4gICAgICAgICAgPEZvcm0gYWN0aW9uPVwiL3BheW1lbnRzL2VreWFzaFwiIG1ldGhvZD1cInBvc3RcIiBjbGFzc05hbWU9XCJtYi00XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgcGItNFwiPlxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIiBjbGFzc05hbWU9XCJmb250LW1lZGl1bSB0ZXh0LWdyYXktNjAwXCI+XG4gICAgICAgICAgICAgICAgWW91ciBuYW1lXG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgaWQ9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQteGwgZm9jdXM6cmluZy1pbmRpZ28tNTAwIGZvY3VzOmJvcmRlci1pbmRpZ28tNTAwIGJsb2NrIGJvcmRlci0yIHctZnVsbCBwbC03IHByLTEyIGZvbnQtbm9ybWFsIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kIHB5LTJcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiaS5lLiBKb2huIERvZVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHBiLTRcIj5cbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwaG9uZVwiIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtIHRleHQtZ3JheS02MDBcIj5cbiAgICAgICAgICAgICAgICBQaG9uZVxuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGVsXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwicGhvbmVcIlxuICAgICAgICAgICAgICAgIGlkPVwicGhvbmVcIlxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgcGF0dGVybj1cIlswLTldezN9LVswLTldezN9LVswLTldezR9XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvY3VzOnJpbmctaW5kaWdvLTUwMCBmb2N1czpib3JkZXItaW5kaWdvLTUwMCBibG9jayBib3JkZXItMiB3LWZ1bGwgcGwtNyBwci0xMiBmb250LW5vcm1hbCBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1tZCBweS0yXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImkuZS4gNTAxLTYyMS0xMjM0XCJcbiAgICAgICAgICAgICAgICBvbktleURvd249e2Jsb2NrSW52YWxpZE51bWJlckNoYXJ9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTQgcHktMiB0ZXh0LXhsIGJvcmRlci0yIHJvdW5kZWQtbWQgZm9jdXM6cmluZyBmb2N1czpyaW5nLWluZGlnby0xMDAgYm9yZGVyLWluZGlnby01MDAgYmctaW5kaWdvLTYwMCB0ZXh0LXdoaXRlXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgR2V0IFBheW1lbnQgUmVxdWVzdFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9Gb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEtyYWJ1dUhlYWRlcigpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgcHQtNCBvcGFjaXR5LTMwIGhvdmVyOm9wYWNpdHktMTAwIHRleHQtcmlnaHRcIj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBiLTAgdGV4dC1bOHB4XVwiPlBPV0VSRUQgQlk8L3NwYW4+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkXCI+S3JhYnV1PC9oMT5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDAgdGV4dC1bMTBweF1cIj5cbiAgICAgICAgUGF5IG9ubGluZSB3aXRoIEJlbGl6ZSdzIGRpZ2l0YWwgd2FsbGV0c1xuICAgICAgPC9zcGFuPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgInR5cGUgUHJvcHMgPSB7XG4gIGFtb3VudDogbnVtYmVyO1xuICB0eXBlOiBzdHJpbmc7XG4gIGludm9pY2U6IHN0cmluZztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBheW1lbnRBbW91bnQoeyBhbW91bnQsIHR5cGUsIGludm9pY2UgfTogUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBtYi00XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgaXRlbXMtZW5kIG1yLTJcIj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC02eGwgZm9udC1ib2xkIHRleHQtaW5kaWdvLTUwMFwiPiR7YW1vdW50fTwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1tZWRpdW0gdGV4dC1pbmRpZ28tNDAwXCI+e3R5cGV9PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktOTAwXCI+e2ludm9pY2V9PC9zcGFuPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImltcG9ydCB7IHN1cGFiYXNlIH0gZnJvbSBcIn4vY29uZmlnL2luZGV4LnNlcnZlclwiO1xuaW1wb3J0IFBheW1lbnQgZnJvbSBcIi4uL2VudGl0aWVzL3BheW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGF5bWVudFJlcG9zaXRvcnkge1xuICBzdGF0aWMgYXN5bmMgcmVidWlsZEVudGl0eShkYXRhOiBhbnkpIHtcbiAgICBpZiAoIWRhdGEgfHwgdHlwZW9mIGRhdGEgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgUGF5bWVudCh7XG4gICAgICBhZGRpdGlvbmFsRGF0YTogZGF0YT8uYWRkaXRpb25hbERhdGEsXG4gICAgICBjdXJyZW5jeToge1xuICAgICAgICBhbW91bnQ6IGRhdGE/LmFtb3VudCxcbiAgICAgICAgdHlwZTogZGF0YS5jdXJyZW5jeSxcbiAgICAgIH0sXG4gICAgICBkZXNjcmlwdGlvbjogZGF0YT8uZGVzY3JpcHRpb24sXG4gICAgICBpZDogZGF0YS5pZCxcbiAgICAgIGludm9pY2U6IGRhdGEuaW52b2ljZSxcbiAgICAgIHN0YXR1czogZGF0YS5zdGF0dXMsXG4gICAgICB1c2VyOiBkYXRhLnVzZXIsXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgYXN5bmMgY3JlYXRlUGVuZGluZyhkYXRhOiBQYXltZW50KSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc3VwYWJhc2UuZnJvbShcInBheW1lbnRzXCIpLmluc2VydChbXG4gICAgICB7XG4gICAgICAgIGFkZGl0aW9uYWxEYXRhOiBkYXRhLmFkZGl0aW9uYWxEYXRhLFxuICAgICAgICBhbW91bnQ6IGRhdGEuY3VycmVuY3kuYW1vdW50LFxuICAgICAgICBjdXJyZW5jeTogZGF0YS5jdXJyZW5jeS50eXBlLFxuICAgICAgICBkZXNjcmlwdGlvbjogZGF0YS5kZXNjcmlwdGlvbixcbiAgICAgICAgaW52b2ljZTogZGF0YS5pbnZvaWNlLFxuICAgICAgICBzdGF0dXM6IGRhdGEuc3RhdHVzLFxuICAgICAgICB1c2VyOiBkYXRhLnVzZXIsXG4gICAgICB9LFxuICAgIF0pO1xuXG4gICAgcmV0dXJuIHRoaXMucmVidWlsZEVudGl0eShyZXN1bHQuYm9keT8uWzBdKTtcbiAgfVxuXG4gIHN0YXRpYyBhc3luYyBnZXRQYXltZW50QnlJbnZvaWNlKGludm9pY2U6IHN0cmluZykge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHN1cGFiYXNlXG4gICAgICAuZnJvbShcInBheW1lbnRzXCIpXG4gICAgICAuc2VsZWN0KFwiKlwiKVxuICAgICAgLmVxKFwiaW52b2ljZVwiLCBpbnZvaWNlKTtcblxuICAgIHJldHVybiB0aGlzLnJlYnVpbGRFbnRpdHkocmVzdWx0LmJvZHk/LlswXSk7XG4gIH1cblxuICBzdGF0aWMgYXN5bmMgc2V0UGF5bWVudFFyQ29kZVVybChwYXltZW50OiBQYXltZW50LCBxckNvZGVVcmw6IHN0cmluZykge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHN1cGFiYXNlXG4gICAgICAuZnJvbShcInBheW1lbnRzXCIpXG4gICAgICAudXBkYXRlKHsgYWRkaXRpb25hbERhdGE6IHsgcXJDb2RlVXJsIH0gfSlcbiAgICAgIC5lcShcImludm9pY2VcIiwgcGF5bWVudC5pbnZvaWNlKTtcblxuICAgIGNvbnNvbGUubG9nKFwiREI6IFwiLCByZXN1bHQpO1xuXG4gICAgcmV0dXJuIHRoaXMucmVidWlsZEVudGl0eShyZXN1bHQuYm9keT8uWzBdKTtcbiAgfVxufVxuIiwgImltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gXCJAc3VwYWJhc2Uvc3VwYWJhc2UtanNcIjtcbmltcG9ydCBcImRvdGVudi9jb25maWdcIjtcblxuY29uc3QgZWt5YXNoID0ge1xuICBhcGk6IFwiaHR0cHM6Ly9tdy1hcGktcHJlcHJvZC5lLWt5YXNoLmNvbS9hcGkvcXJwb3MtYXBwXCIsXG4gIHJvdXRlczoge1xuICAgIGJhc2U6IFwiaHR0cHM6Ly9tdy1hcGktcHJlcHJvZC5lLWt5YXNoLmNvbS9hcGkvcXJwb3MtYXBwXCIsXG4gICAgb3JkZXJEZXRhaWxzOiBcImh0dHBzOi8vZ2lnZ2VkYnouYXJjYWRpZXIuaW8vdXNlci9jaGVja291dC9vcmRlci1kZXRhaWxzXCIsXG4gIH0sXG4gIGhlYWRlcnM6IHtcbiAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICBcIkFjY2VwdC1MYW5ndWFnZVwiOiBcImVuXCIsXG4gICAgXCJUaGUtVGltZXpvbmUtSUFOQVwiOiBcIkJlbGl6ZVwiLFxuICAgIFdMOiBcImJpYmlcIixcbiAgICBJTUdFOiBcIkFQUEtFWTE3LTA3QTgtNEJBRi1BQTBGLUIxNTY4QzUwMTdBM1wiLFxuICAgIGFwcFZlcnNpb246IFwiOTkuMS4xXCIsXG4gICAgb3BlcmF0aW5nU3lzdGVtOiBcIkFuZHJvaWRcIixcbiAgICBTSUQ6IFwiMjMyNDUxODQwM1wiLFxuICB9LFxuICBjcmVkZW50aWFsczoge1xuICAgIFNJRDogMjMyNDUxODQwMyxcbiAgICBcIlBpbiBIYXNoXCI6XG4gICAgICBcIjhkNGZkMjRhOTcwZjQ5MjkyMDc2YmY3NGRmMDExZTlmOGQwZTc4NTAyNzM2NjZmY2Y0ZGI0NThmMWVlMmQ0NjFcIixcbiAgICBwaW5FbmNvZGVkOlxuICAgICAgXCI0NGM4MGJiZGU1OTJhZWQ3ZTIxMzhiNjdlYzcxZTk0YTVhMjJkMzliYzM2ZDY2YzMzNzNjMWVhMzMwMTNkMzk2XCIsXG4gIH0sXG4gIGRhdGE6IHtcbiAgICBwaG9uZTogXCI1MDE2Mzc2NTc0XCIsXG4gIH0sXG59O1xuXG5jb25zdCBzdXBhYmFzZVVybCA9IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9TVVBBQkFTRV9VUkw7XG5jb25zdCBzdXBhYmFzZUFub25LZXkgPSBwcm9jZXNzLmVudi5SRUFDVF9BUFBfU1VQQUJBU0VfQU5PTl9LRVk7XG5cbmNvbnN0IHN1cGFiYXNlID0gY3JlYXRlQ2xpZW50KHN1cGFiYXNlVXJsIGFzIHN0cmluZywgc3VwYWJhc2VBbm9uS2V5IGFzIHN0cmluZyk7XG5cbmV4cG9ydCB7IGVreWFzaCwgc3VwYWJhc2UgfTtcbiIsICJleHBvcnQgY29uc3QgZW51bSBQYXltZW50U3RhdHVzIHtcbiAgUGVuZGluZyxcbiAgSW5Qcm9ncmVzcyxcbiAgY29tcGxldGVkLFxufVxuXG50eXBlIFByb3BzID0ge1xuICBzdGF0dXM6IFBheW1lbnRTdGF0dXM7XG4gIHVzZXI6IHN0cmluZztcbiAgaWQ/OiBudW1iZXI7XG4gIGN1cnJlbmN5OiB7XG4gICAgYW1vdW50OiBudW1iZXI7XG4gICAgdHlwZTogc3RyaW5nO1xuICB9O1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBjcmVhdGVkQXQ/OiBhbnk7XG4gIGludm9pY2U6IHN0cmluZztcbiAgYWRkaXRpb25hbERhdGE6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBudW1iZXI7XG4gIH07XG59O1xuXG5jbGFzcyBQYXltZW50IHtcbiAgYWRkaXRpb25hbERhdGE6IFByb3BzW1wiYWRkaXRpb25hbERhdGFcIl07XG4gIGNyZWF0ZWRBdDogUHJvcHNbXCJjcmVhdGVkQXRcIl07XG4gIGN1cnJlbmN5OiBQcm9wc1tcImN1cnJlbmN5XCJdO1xuICBkZXNjcmlwdGlvbjogUHJvcHNbXCJkZXNjcmlwdGlvblwiXTtcbiAgaWQ6IFByb3BzW1wiaWRcIl07XG4gIGludm9pY2U6IFByb3BzW1wiaW52b2ljZVwiXTtcbiAgc3RhdHVzOiBQcm9wc1tcInN0YXR1c1wiXTtcbiAgdXNlcjogUHJvcHNbXCJ1c2VyXCJdO1xuXG4gIGNvbnN0cnVjdG9yKHtcbiAgICBhZGRpdGlvbmFsRGF0YSxcbiAgICBjcmVhdGVkQXQsXG4gICAgY3VycmVuY3ksXG4gICAgZGVzY3JpcHRpb24sXG4gICAgaWQsXG4gICAgaW52b2ljZSxcbiAgICBzdGF0dXMsXG4gICAgdXNlcixcbiAgfTogUHJvcHMpIHtcbiAgICB0aGlzLmFkZGl0aW9uYWxEYXRhID0gYWRkaXRpb25hbERhdGE7XG4gICAgdGhpcy5jcmVhdGVkQXQgPSBjcmVhdGVkQXQ7XG4gICAgdGhpcy5jdXJyZW5jeSA9IGN1cnJlbmN5O1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmlkID0gaWQ7XG4gICAgdGhpcy5pbnZvaWNlID0gaW52b2ljZTtcbiAgICB0aGlzLnN0YXR1cyA9IHN0YXR1cztcbiAgICB0aGlzLnVzZXIgPSB1c2VyO1xuICB9XG5cbiAgaXNWYWxpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW5jeS5hbW91bnQgPiAwO1xuICB9XG5cbiAgaXNQZW5kaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXR1cyA9PT0gUGF5bWVudFN0YXR1cy5QZW5kaW5nO1xuICB9XG5cbiAgY2FuTWFya0luUHJvZ3Jlc3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNQZW5kaW5nKCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGF5bWVudDtcbiIsICJpbXBvcnQgeyBBY3Rpb25GdW5jdGlvbiwganNvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IENyZWF0ZVBlbmRpbmdFa3lhc2hQYXltZW50IGZyb20gXCJ+L2RvbWFpbi9wYXltZW50cy9zZXJ2aWNlcy9jcmVhdGUtcGVuZGluZy1la3lhc2gtcGF5bWVudFwiO1xuXG5leHBvcnQgY29uc3QgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHBheW1lbnQgPSBhd2FpdCBuZXcgQ3JlYXRlUGVuZGluZ0VreWFzaFBheW1lbnQocmVxdWVzdCkuY2FsbCgpO1xuXG4gICAgcmV0dXJuIGpzb24ocGF5bWVudC5hZGRpdGlvbmFsRGF0YT8ucGF5bWVudEtleSwgMjAwKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBqc29uKFxuICAgICAge1xuICAgICAgICBtZXNzYWdlOiBcIlNvbWV0aGluZyB1bmV4cGVjdGVkIGhhcHBlbmVkLiBQbGVhc2UgdHJ5IGFnYWluXCIsXG4gICAgICB9LFxuICAgICAgNDIyXG4gICAgKTtcbiAgfVxufTtcbiIsICJpbXBvcnQgdHlwZSB7IEFyY2FkaWVyUGF5bWVudFJlcXVlc3QgfSBmcm9tIFwifi9kb21haW4vcGF5bWVudHMvbGlicmFyeS9hcmNhZGllci1hcGlcIjtcbmltcG9ydCBjcmVhdGVQZW5kaW5nRWt5YXNoUGF5bWVudFNjaGVtYSBmcm9tIFwifi9yZXF1ZXN0cy9jcmVhdGUtcGVuZGluZy1la3lhc2gtcGF5bWVudFwiO1xuaW1wb3J0IFBheW1lbnQgZnJvbSBcIi4uL2VudGl0aWVzL3BheW1lbnRcIjtcbmltcG9ydCBBcmNhZGllclBheW1lbnRNYXBwZXIgZnJvbSBcIi4uL21hcHBlcnMvYXJjYWRpZXItcGF5bWVudC1tYXBwZXJcIjtcbmltcG9ydCBQYXltZW50UmVwb3NpdG9yeSBmcm9tIFwiLi4vcmVwb3NpdG9yaWVzL3BheW1lbnQtcmVwb3NpdG9yeVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDcmVhdGVQZW5kaW5nRWt5YXNoUGF5bWVudCB7XG4gIHByaXZhdGUgcmVxdWVzdDogUmVxdWVzdDtcbiAgcHJpdmF0ZSBwYXltZW50OiBBcmNhZGllclBheW1lbnRSZXF1ZXN0IHwgbnVsbDtcblxuICBjb25zdHJ1Y3RvcihyZXF1ZXN0OiBSZXF1ZXN0KSB7XG4gICAgdGhpcy5yZXF1ZXN0ID0gcmVxdWVzdDtcbiAgICB0aGlzLnBheW1lbnQgPSBudWxsO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5UGF5bWVudFBhcmFtcygpIHtcbiAgICBjb25zdCBib2R5ID0gYXdhaXQgdGhpcy5yZXF1ZXN0Lmpzb24oKTtcblxuICAgIHRoaXMucGF5bWVudCA9IGF3YWl0IGNyZWF0ZVBlbmRpbmdFa3lhc2hQYXltZW50U2NoZW1hLnZhbGlkYXRlQXN5bmMoe1xuICAgICAgLi4uYm9keSxcbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIGNhbGwoKTogUHJvbWlzZTxQYXltZW50PiB7XG4gICAgYXdhaXQgdGhpcy52ZXJpZnlQYXltZW50UGFyYW1zKCk7XG5cbiAgICBpZiAoIXRoaXMucGF5bWVudCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gZGF0YSBmcm9tIGFyY2FkaWVyIHJlY2VpdmVkLlwiKTtcbiAgICB9XG5cbiAgICBjb25zdCBwZW5kaW5nUGF5bWVudCA9IG5ldyBBcmNhZGllclBheW1lbnRNYXBwZXIoKS5nZXRQZW5kaW5nKHRoaXMucGF5bWVudCk7XG4gICAgY29uc3QgcGF5bWVudCA9IGF3YWl0IFBheW1lbnRSZXBvc2l0b3J5LmNyZWF0ZVBlbmRpbmcocGVuZGluZ1BheW1lbnQpO1xuXG4gICAgcmV0dXJuIHBheW1lbnQ7XG4gIH1cbn1cbiIsICJpbXBvcnQgam9pIGZyb20gXCJqb2lcIjtcblxuY29uc3QgY3JlYXRlUGVuZGluZ0VreWFzaFBheW1lbnRTY2hlbWEgPSBqb2kub2JqZWN0KHtcbiAgaW52b2ljZW5vOiBqb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcbiAgY3VycmVuY3k6IGpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxuICB0b3RhbDogam9pLnN0cmluZygpLnJlcXVpcmVkKCksXG4gIGhhc2hrZXk6IGpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxuICBnYXRld2F5OiBqb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVQZW5kaW5nRWt5YXNoUGF5bWVudFNjaGVtYTtcbiIsICJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBuYW5vaWQgfSBmcm9tIFwibmFub2lkXCI7XG5pbXBvcnQgeyBla3lhc2ggfSBmcm9tIFwifi9jb25maWcvaW5kZXguc2VydmVyXCI7XG5pbXBvcnQgUGF5bWVudCwgeyBQYXltZW50U3RhdHVzIH0gZnJvbSBcIi4uL2VudGl0aWVzL3BheW1lbnRcIjtcbmltcG9ydCB7IEFyY2FkaWVyUGF5bWVudFJlcXVlc3QgfSBmcm9tIFwiLi4vbGlicmFyeS9hcmNhZGllci1hcGlcIjtcblxuY2xhc3MgQXJjYWRpZXJQYXltZW50TWFwcGVyIHtcbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSBkYXRhXG4gICAqIEByZXR1cm5zIFRoZSBpbml0aWFsIHBheW1lbnQgZGF0YSBzZW5kIGJ5IGFyY2FkaWVyXG4gICAqL1xuICBnZXRQZW5kaW5nKGRhdGE6IEFyY2FkaWVyUGF5bWVudFJlcXVlc3QpIHtcbiAgICAvLyBkb24ndCBmaW5kOyBqdXN0IGJ1aWxkIHRoZSBlbnRpdHkgYXMgd2UgZG9uJ3QgbmVlZCB0byBxdWVyeSBhcmNhZGllciBmb3IgdGhpcy5cbiAgICByZXR1cm4gdGhpcy5idWlsZEVudGl0eShkYXRhKTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gZGF0YVxuICAgKiBAcmV0dXJucyBQYXltZW50IHdpdGggdGhlIG9yZGVyIGRldGFpbHMgZnJvbSBhcmNhZGllclxuICAgKi9cbiAgYXN5bmMgZmluZChcbiAgICBkYXRhOiBQaWNrPEFyY2FkaWVyUGF5bWVudFJlcXVlc3QsIFwiZ2F0ZXdheVwiIHwgXCJoYXNoa2V5XCIgfCBcImludm9pY2Vub1wiPiAmIHtcbiAgICAgIHBheW1lbnRLZXk6IHN0cmluZztcbiAgICB9XG4gICkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFxuICAgICAgYCR7ZWt5YXNoLnJvdXRlcy5vcmRlckRldGFpbHN9P2dhdGV3YXk9JHtkYXRhLmdhdGV3YXl9Jmludm9pY2VObz0ke2RhdGEuaW52b2ljZW5vfSZwYXlrZXk9JHtkYXRhLnBheW1lbnRLZXl9Jmhhc2hrZXk9JHtkYXRhLmhhc2hrZXl9YFxuICAgICk7XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGRFbnRpdHkoZGF0YTogQXJjYWRpZXJQYXltZW50UmVxdWVzdCk6IFBheW1lbnQge1xuICAgIHJldHVybiBuZXcgUGF5bWVudCh7XG4gICAgICB1c2VyOiBcImdpZ2dlZEJ6XCIsXG4gICAgICBzdGF0dXM6IFBheW1lbnRTdGF0dXMuUGVuZGluZyxcbiAgICAgIGN1cnJlbmN5OiB7XG4gICAgICAgIGFtb3VudDogTnVtYmVyKGRhdGEudG90YWwpLFxuICAgICAgICB0eXBlOiBkYXRhLmN1cnJlbmN5LFxuICAgICAgfSxcbiAgICAgIGRlc2NyaXB0aW9uOiBkYXRhLmludm9pY2VubyxcbiAgICAgIGludm9pY2U6IGRhdGEuaW52b2ljZW5vLFxuICAgICAgYWRkaXRpb25hbERhdGE6IHtcbiAgICAgICAgZ2F0ZXdheTogZGF0YS5nYXRld2F5LFxuICAgICAgICBoYXNoa2V5OiBkYXRhLmhhc2hrZXksXG4gICAgICAgIHBheW1lbnRLZXk6IG5hbm9pZCgpLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcmNhZGllclBheW1lbnRNYXBwZXI7XG4iLCAiaW1wb3J0IHsganNvbiwgTG9hZGVyRnVuY3Rpb24sIHVzZUxvYWRlckRhdGEgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCBnaWdnZWQgZnJvbSBcIn4vYXNzZXRzL2ltYWdlcy9naWdnZWQtbG9nby5wbmdcIjtcbmltcG9ydCBLcmFidXVIZWFkZXIgZnJvbSBcIn4vY29tcG9uZW50cy9rcmFidXUtaGVhZGVyXCI7XG5pbXBvcnQgUGF5bWVudEFtb3VudCBmcm9tIFwifi9jb21wb25lbnRzL3BheW1lbnQtYW1vdW50XCI7XG5pbXBvcnQgVmVuZG9ySGVhZGVyIGZyb20gXCJ+L2NvbXBvbmVudHMvdmVuZG9yLWhlYWRlclwiO1xuaW1wb3J0IFBheW1lbnQgZnJvbSBcIn4vZG9tYWluL3BheW1lbnRzL2VudGl0aWVzL3BheW1lbnRcIjtcbmltcG9ydCBSZXF1ZXN0RWt5YXNoUGF5bWVudFFyQ29kZSBmcm9tIFwifi9kb21haW4vcGF5bWVudHMvc2VydmljZXMvcmVxdWVzdC1la3lhc2gtcGF5bWVudC1xci1jb2RlXCI7XG5cbmV4cG9ydCBsZXQgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBjb25zdCBzZWFyY2hQYXJhbXMgPSBuZXcgVVJMKHJlcXVlc3QudXJsKS5zZWFyY2hQYXJhbXM7XG4gIGNvbnN0IGludm9pY2VObyA9IHNlYXJjaFBhcmFtcy5nZXQoXCJpbnZvaWNlTm9cIik7XG4gIGNvbnN0IHBheW1lbnRLZXkgPSBzZWFyY2hQYXJhbXMuZ2V0KFwicGF5a2V5XCIpO1xuXG4gIGlmICghaW52b2ljZU5vIHx8ICFwYXltZW50S2V5KSB7XG4gICAgcmV0dXJuIGpzb24oeyBtZXNzYWdlOiBcIm5vIHBheW1lbnQgd2l0aCB0aGlzIGludm9pY2Ugbm9cIiB9LCA0MDQpO1xuICB9XG5cbiAgY29uc3QgcGF5bWVudCA9IGF3YWl0IG5ldyBSZXF1ZXN0RWt5YXNoUGF5bWVudFFyQ29kZShcbiAgICBpbnZvaWNlTm8sXG4gICAgcGF5bWVudEtleVxuICApLmNhbGwoKTtcblxuICByZXR1cm4ganNvbih7XG4gICAgcGF5bWVudDogcGF5bWVudCxcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgY29uc3QgZGF0YSA9IHVzZUxvYWRlckRhdGEoKSBhcyB7IHBheW1lbnQ6IFBheW1lbnQgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1mdWxsIHctZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LWdyYXktODAwXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LWF1dG8gbGVhZGluZy1yZWxheGVkXCI+XG4gICAgICAgIDxWZW5kb3JIZWFkZXJcbiAgICAgICAgICBuYW1lPVwiR2lnZ2VkQnpcIlxuICAgICAgICAgIGxvZ289e2dpZ2dlZH1cbiAgICAgICAgICB1cmw9XCJodHRwOi8vZ2lnZ2VkLmJ6XCJcbiAgICAgICAgICBkZXNjcmlwdGlvbj1cIk1ha2UgbGlmZSBlYXNpZXIgYnkgaGlyaW5nIGEgR2lnZ2VyIHRvIGhlbHBcIlxuICAgICAgICAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgYm9yZGVyLVsxcHhdIGNvbnRhaW5lciBzaGFkb3ctc20gcm91bmRlZCBwLTQgdy1bNjAwcHhdIG1pbi1oLVs0ODBweF1cIj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1tZWRpdW0gcGItMiB0ZXh0LWdyYXktOTAwIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICBHaWdnZWRieiBpcyByZXF1ZXN0aW5nIHBheW1lbnQgZm9yIHlvdXIgb3JkZXIgd2l0aCBFLUt5YXNoLlxuICAgICAgICAgIDwvaDE+XG5cbiAgICAgICAgICA8UGF5bWVudEFtb3VudFxuICAgICAgICAgICAgYW1vdW50PXtkYXRhLnBheW1lbnQuY3VycmVuY3kuYW1vdW50fVxuICAgICAgICAgICAgdHlwZT17ZGF0YS5wYXltZW50LmN1cnJlbmN5LnR5cGV9XG4gICAgICAgICAgICBpbnZvaWNlPXtkYXRhLnBheW1lbnQuaW52b2ljZX1cbiAgICAgICAgICAvPlxuXG4gICAgICAgICAgPGhyIGNsYXNzTmFtZT1cImJvcmRlci0yIHJvdW5kZWQtZnVsbCBtYi00IHctNDAgc2VsZi1jZW50ZXJcIiAvPlxuXG4gICAgICAgICAge2RhdGEucGF5bWVudC5hZGRpdGlvbmFsRGF0YT8ucXJDb2RlVXJsID8gKFxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBzcmM9e2RhdGEucGF5bWVudC5hZGRpdGlvbmFsRGF0YT8ucXJDb2RlVXJsIGFzIHN0cmluZ31cbiAgICAgICAgICAgICAgYWx0PVwicGF5bWVudCBxciBjb2RlXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy00MCBzZWxmLWNlbnRlciBwYi00XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHB5LTIgcHgtNCBiZy1yZWQtMjAwIHJvdW5kZWQtbWQgcGItNFwiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXJlZC03MDBcIj5cbiAgICAgICAgICAgICAgICBPaCwgbm8hIFNvbWV0aGluZyB1bmV4cGVjdGVkIGhhcHBlbmVkLiBEb24ndCB3b3JyeSwgeW91ciB3YWxsZXRcbiAgICAgICAgICAgICAgICBoYXMgbm90IGJlZW4gY2hhcmdlZC5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cblxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbWVkaXVtIHRleHQtYmFzZSBwYi00IHRleHQtZ3JheS01MDAgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgIFBsZWFzZSBzY2FuIHRoZSBRUiBjb2RlIGFib3ZlIHRvIG1ha2UgcGF5bWVudCB3aXRoIHlvdXIgRS1LeWFzaCBhcHAuXG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8S3JhYnV1SGVhZGVyIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJ0eXBlIFByb3BzID0ge1xuICBuYW1lOiBzdHJpbmc7XG4gIGxvZ286IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgdXJsOiBzdHJpbmc7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBWZW5kb3JIZWFkZXIoeyBuYW1lLCBsb2dvLCBkZXNjcmlwdGlvbiwgdXJsIH06IFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHB0LTQgbWItNFwiPlxuICAgICAgPGEgaHJlZj17dXJsfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyXCI+XG4gICAgICAgIDxpbWcgc3JjPXtsb2dvfSBhbHQ9e2Ake25hbWV9IGxvZ29gfSBjbGFzc05hbWU9XCJ3LTM2IGgtYXV0byBtYi0xXCIgLz5cbiAgICAgIDwvYT5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDAgZm9udC1tZWRpdW0gdGV4dC1bMTBweF1cIj5cbiAgICAgICAge2Rlc2NyaXB0aW9ufVxuICAgICAgPC9zcGFuPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImltcG9ydCB7IGVreWFzaCB9IGZyb20gXCJ+L2NvbmZpZy9pbmRleC5zZXJ2ZXJcIjtcbmltcG9ydCB7IGNyZWF0ZU5ld0ludm9pY2UsIGdldEF1dGhvcml6YXRpb24gfSBmcm9tIFwiLi4vbGlicmFyeS9la3lhc2gtYXBpXCI7XG5pbXBvcnQgUGF5bWVudFJlcG9zaXRvcnkgZnJvbSBcIi4uL3JlcG9zaXRvcmllcy9wYXltZW50LXJlcG9zaXRvcnlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVxdWVzdEVreWFzaFBheW1lbnRRckNvZGUge1xuICBwcml2YXRlIGludm9pY2VObzogc3RyaW5nO1xuICBwcml2YXRlIHBheW1lbnRLZXk6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihpbnZvaWNlTm86IHN0cmluZywgcGF5bWVudEtleTogc3RyaW5nKSB7XG4gICAgdGhpcy5pbnZvaWNlTm8gPSBpbnZvaWNlTm87XG4gICAgdGhpcy5wYXltZW50S2V5ID0gcGF5bWVudEtleTtcbiAgfVxuXG4gIGFzeW5jIGNhbGwoKSB7XG4gICAgY29uc3QgcGVuZGluZ1BheW1lbnQgPSBhd2FpdCBQYXltZW50UmVwb3NpdG9yeS5nZXRQYXltZW50QnlJbnZvaWNlKFxuICAgICAgdGhpcy5pbnZvaWNlTm9cbiAgICApO1xuXG4gICAgaWYgKCFwZW5kaW5nUGF5bWVudCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUGF5bWVudCB3aXRoIHRoZSBnaXZlbiBpbnZvaWNlIGRvZXMgbm90IGV4aXN0LlwiKTtcbiAgICB9XG5cbiAgICBpZiAocGVuZGluZ1BheW1lbnQuYWRkaXRpb25hbERhdGE/LnFyQ29kZVVybCkge1xuICAgICAgY29uc29sZS5sb2coXCJBY3RpdmUgVVJMIGN1cnJlbnRseSBleGlzdHMuLi5cIik7XG4gICAgICByZXR1cm4gcGVuZGluZ1BheW1lbnQ7XG4gICAgfVxuXG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldEF1dGhvcml6YXRpb24oe1xuICAgICAgc2lkOiBla3lhc2guY3JlZGVudGlhbHMuU0lELFxuICAgICAgcGluSGFzaDogZWt5YXNoLmNyZWRlbnRpYWxzW1wiUGluIEhhc2hcIl0sXG4gICAgICBwdXNoS2V5OiBcInt7cHVzaGtleX19XCIsXG4gICAgfSk7XG5cbiAgICBjb25zdCBwYXltZW50UmVzcG9uc2UgPSBhd2FpdCBjcmVhdGVOZXdJbnZvaWNlKHtcbiAgICAgIGFtb3VudDogcGVuZGluZ1BheW1lbnQuY3VycmVuY3kuYW1vdW50LFxuICAgICAgZGVzY3JpcHRpb246IHBlbmRpbmdQYXltZW50LmRlc2NyaXB0aW9uLFxuICAgICAgY3VycmVuY3k6IFwiQlpEXCIsXG4gICAgICBvcmRlcklkOiBwZW5kaW5nUGF5bWVudC5pbnZvaWNlLFxuICAgICAgc2Vzc2lvbjogc2Vzc2lvbi5zZXNzaW9uLFxuICAgIH0pO1xuXG4gICAgY29uc3QgaW5Qcm9ncmVzc1BheW1lbnQgPSBhd2FpdCBQYXltZW50UmVwb3NpdG9yeS5zZXRQYXltZW50UXJDb2RlVXJsKFxuICAgICAgcGVuZGluZ1BheW1lbnQsXG4gICAgICBwYXltZW50UmVzcG9uc2UucXJVcmxcbiAgICApO1xuXG4gICAgaWYgKCFpblByb2dyZXNzUGF5bWVudCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU29tZXRoaW5nIHVuZXhwZWN0ZWQgaGFwcGVuZWQgd2l0aCB0aGlzIHBheW1lbnQuXCIpO1xuICAgIH1cblxuICAgIHJldHVybiBpblByb2dyZXNzUGF5bWVudDtcbiAgfVxufVxuIiwgImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IGVuYywgSG1hY1NIQTI1NiB9IGZyb20gXCJjcnlwdG8tanNcIjtcbmltcG9ydCB7IGVreWFzaCB9IGZyb20gXCJ+L2NvbmZpZy9pbmRleC5zZXJ2ZXJcIjtcblxuLyoqXG4gKiBCdWlsZHMgJiByZXR1cm5zIGEgSldUIHRva2VuIGZvciBjYWxscyB0byBFLWt5YXNoJ3MgQVBJLlxuICogQHJldHVybnNcbiAqL1xuY29uc3QgZ2V0SldUVG9rZW4gPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGhlYWRlciA9IGVuYy5CYXNlNjQuc3RyaW5naWZ5KFxuICAgIGVuYy5VdGY4LnBhcnNlKEpTT04uc3RyaW5naWZ5KHsgYWxnOiBcIkhTMjU2XCIsIHR5cDogXCJKV1RcIiB9KSlcbiAgKTtcblxuICBjb25zdCBkYXRhID0gZW5jLkJhc2U2NC5zdHJpbmdpZnkoXG4gICAgZW5jLlV0ZjgucGFyc2UoXG4gICAgICBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIG1vYmlsZTogZWt5YXNoLmRhdGEucGhvbmUsXG4gICAgICAgIHNpZDogZWt5YXNoLmNyZWRlbnRpYWxzLlNJRCxcbiAgICAgICAgcHVzaGtleTogXCJcIixcbiAgICAgICAgcGluSGFzaDogZWt5YXNoLmNyZWRlbnRpYWxzLnBpbkVuY29kZWQsXG4gICAgICB9KVxuICAgIClcbiAgKTtcblxuICBjb25zdCBzaWduYXR1cmUgPSBlbmMuQmFzZTY0LnN0cmluZ2lmeShcbiAgICBIbWFjU0hBMjU2KGAke2hlYWRlcn0uJHtkYXRhfWAsIGVreWFzaC5oZWFkZXJzLklNR0UpXG4gICk7XG5cbiAgcmV0dXJuIGAke2hlYWRlcn0uJHtkYXRhfS4ke3NpZ25hdHVyZX1gO1xufTtcblxudHlwZSBBdXRob3JpemF0aW9uRGF0YSA9IHtcbiAgLyoqXG4gICAqIE1lcmNoYW50IElEIHByb3ZpZGVkIGJ5IEVreWFzaFxuICAgKi9cbiAgc2lkOiBudW1iZXI7XG4gIC8qKlxuICAgKiBwaW5IYXNoLCBwcm92aWRlZCBieSBFa3lhc2g6IGhhc2goJ3NoYTI1NicsIG1kNSgncGluJykpXG4gICAqL1xuICBwaW5IYXNoOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBhbHdheXMgcHJvdmlkZWQgYXMgYW4gZW1wdHkgc3RyaW5nXG4gICAqL1xuICBwdXNoS2V5OiBzdHJpbmc7XG59O1xuXG50eXBlIEF1dGhvcml6YXRpb25SZXNwb25zZSA9IHtcbiAgLyoqXG4gICAqIFRoaXMgc2Vzc2lvbiBJRCB0aGF0IHNob3VsZCBiZSB1c2VkIGZvciBzdWJzZXF1ZW50IHJlcXVlc3RzLlxuICAgKi9cbiAgc2Vzc2lvbjogc3RyaW5nO1xuICBmaXJzdE5hbWU/OiBzdHJpbmc7XG4gIGxhc3ROYW1lPzogc3RyaW5nO1xuICAvKipcbiAgICogQXBwIG1vYmlsZSBzZXR0aW5nc1xuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiB7XG4gICAqICAgXCJuYW1lU2V0dGluZ3NcIjogXCJ2YWx1ZVwiXG4gICAqIH1cbiAgICovXG4gIFNldHRpbmdzPzogYW55O1xufTtcblxuLyoqXG4gKiBSZXF1ZXN0IGEgc2Vzc2lvbiBrZXkgZnJvbSBFLUt5YXNoJ3MgQVBJIGluIG9yZGVyIHRvIGF1dGhvcml6ZSByZXF1ZXN0cy5cbiAqIEByZXR1cm5zXG4gKi9cbmNvbnN0IGdldEF1dGhvcml6YXRpb24gPSBhc3luYyAoXG4gIGRhdGE6IEF1dGhvcml6YXRpb25EYXRhXG4pOiBQcm9taXNlPEF1dGhvcml6YXRpb25SZXNwb25zZT4gPT4ge1xuICBjb25zdCBqd3QgPSBhd2FpdCBnZXRKV1RUb2tlbigpO1xuXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChcbiAgICBgJHtla3lhc2guYXBpfS9hdXRob3JpemF0aW9uYCxcbiAgICB7XG4gICAgICBwdXNoa2V5OiBcIlwiLFxuICAgICAgc2lkOiBTdHJpbmcoZGF0YS5zaWQpLFxuICAgICAgcGluSGFzaDogZWt5YXNoLmNyZWRlbnRpYWxzW1wiUGluIEhhc2hcIl0sXG4gICAgfSxcbiAgICB7XG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIC4uLmVreWFzaC5oZWFkZXJzLFxuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7and0fWAsXG4gICAgICB9LFxuICAgIH1cbiAgKTtcblxuICByZXR1cm4gcmVzcG9uc2UuZGF0YSBhcyBBdXRob3JpemF0aW9uUmVzcG9uc2U7XG59O1xuXG5leHBvcnQgdHlwZSBOZXdJbnZvaWNlRGF0YSA9IHtcbiAgLyoqXG4gICAqIFNlc3Npb24gSWQgZm9yIHRvIGF1dGhvcml6ZSByZXF1ZXN0LlxuICAgKi9cbiAgc2Vzc2lvbjogc3RyaW5nO1xuICAvKipcbiAgICogSWQgb2YgdGhlIG9yZGVyIGJlaW5nIGNhcnJpZWQgb3V0XG4gICAqL1xuICBvcmRlcklkOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBBbW91bnQgaW4gY2VudHMuXG4gICAqL1xuICBhbW91bnQ6IG51bWJlcjtcbiAgLyoqXG4gICAqIEN1cnJlbmN5IGluIElTTyA0MjE3IGZvcm1hdC5cbiAgICovXG4gIGN1cnJlbmN5OiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBQaG9uZSBudW1iZXIgb2YgdGhlIGN1c3RvbWVyIHRoYXQgd2lsbCBwYXkgdGhlIHJlcXVlc3RcbiAgICovXG4gIHBheWVyPzogbnVtYmVyO1xuICAvKipcbiAgICogTWV0YWRhdGEgcmVsYXRlZCB0byB0aGUgaXRlbXMgYmVpbmcgcGF5ZWQgZm9yLlxuICAgKiBAZXhhbXBsZVxuICAgKiB7XG4gICAqICAgXCJmaWVsZFwiOiBcInZhbHVlXCJcbiAgICogfVxuICAgKi9cbiAgZmllbGRzT3RoZXI/OiBPYmplY3QgfCBhbnlbXTtcbiAgLyoqXG4gICAqIFNpbWlsYXIgdG8gZmllbGRzT3RoZXIgYnV0IGFyZSB1c2VkIG9ubHkgb24gbW9iaWxlIHBob25lcy5cbiAgICogQGV4YW1wbGVcbiAgICoge1xuICAgKiAgIFwiZmllbGRcIjogXCJ2YWx1ZVwiXG4gICAqIH1cbiAgICovXG4gIGZpZWxkc0FwcD86IE9iamVjdCB8IGFueVtdO1xuICAvKipcbiAgICogQmVmb3JlIHRoZSBtZXJjaGFudCBjcmVhdGVzIHRoZVxuICAgKiBpbnZvaWNlLCB0aGUgbWVyY2hhbnQgY2FuIGNhbGwgdGhlXG4gICAqIFx1MjAxQ1VwbG9hZEltYWdlXHUyMDFEIGVuZHBvaW50IHRvIHVwbG9hZCBhblxuICAgKiBpbWFnZSAoZm9yIGV4YW1wbGUgdGhlIGludm9pY2UpLiBXaGVuXG4gICAqIHRoZSBjYWxsIHRvIGNyZWF0ZSB0aGUgaW52b2ljZSBpcyBtYWRlLFxuICAgKiB0aGUgTWVyY2hhbnQgY2FuIHNwZWNpZnkgdGhlIGltYWdlXG4gICAqIG5hbWUgaW4gdGhpcyBmaWVsZC4gVGhlIGN1c3RvbWVyIHdpbGxcbiAgICogcmVjZWl2ZSB0aGUgaW1hZ2UgYW5kIGRldGFpbHMgd2hlblxuICAgKiB0aGV5IHJlY2VpdmUgdGhlIG5vdGlmaWNhdGlvbi5cbiAgICovXG4gIHJlY2VpcHQ/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBJbnZvaWNlIGRhdGUgYW5kIHRpbWUgdW50aWwgaXQgZXhwaXJlcy5cbiAgICogQGV4YW1wbGVcbiAgICogMjAyMS0wMS0xNyAxNTo0NToxMlxuICAgKi9cbiAgZGF0ZUxpZmU/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBSZXVzYWJsZSBpbnZvaWNlXG4gICAqL1xuICBsb25nVGVybT86IGJvb2xlYW47XG59O1xuXG50eXBlIE5ld0ludm9pY2VSZXNwb25zZSA9IHtcbiAgLyoqXG4gICAqIEB0eXBlIEF1dGhvcml6YXRpb25SZXNwb25zZS5TZXNzaW9uXG4gICAqL1xuICBpbnZvaWNlSWQ6IG51bWJlcjtcbiAgLyoqXG4gICAqIExpbmsgdG8gdGhlIFFSIGNvZGUgb2YgdGhlIGludm9pY2UuXG4gICAqIEBleGFtcGxlIGh0dHBzOi8vZG9tYWluL3FyL2ludm9pY2UvMzY4MDUwMTQzODQ5XG4gICAqL1xuICBxclVybDogc3RyaW5nO1xuICAvKipcbiAgICogVGhlIGRhdGEgdGhhdCBpcyBpbiB0aGUgUVIgY29kZS5cbiAgICogQGV4YW1wbGUgMzY4MDUwMTQzODQ5XG4gICAqL1xuICBxckRhdGE6IHN0cmluZztcbiAgLyoqXG4gICAqIExpbmsgdG8gdGhlIHVwbG9hZGVkIGltYWdlIC0gc2UgcmVjZWlwdCBwYXJhbWV0ZXIgaW4gdGhlIHJlcXVlc3RcbiAgICogQGV4YW1wbGUgaHR0cHM6Ly9kb21haW4vcXIvaW52b2ljZS8zNjgwNTAxNDM4NDlcbiAgICovXG4gIHJlY2VpcHRVcmw6IHN0cmluZztcbn07XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBpbnZvaWNlIGZvciB1c2VycyB3aXRoIGEgc3BlY2lmaWVkIGFtb3VudCBpbiBCZWxpemUgRG9sbGFycy5cbiAqL1xuY29uc3QgY3JlYXRlTmV3SW52b2ljZSA9IGFzeW5jIChcbiAgZGF0YTogTmV3SW52b2ljZURhdGFcbik6IFByb21pc2U8TmV3SW52b2ljZVJlc3BvbnNlPiA9PiB7XG4gIGNvbnN0IGp3dCA9IGF3YWl0IGdldEpXVFRva2VuKCk7XG5cbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFxuICAgIGAke2VreWFzaC5hcGl9L2NyZWF0ZS1uZXctaW52b2ljZWAsXG4gICAge1xuICAgICAgLi4uZGF0YSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgLi4uZWt5YXNoLmhlYWRlcnMsXG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtqd3R9YCxcbiAgICAgIH0sXG4gICAgfVxuICApO1xuXG4gIHJldHVybiByZXNwb25zZS5kYXRhIGFzIE5ld0ludm9pY2VSZXNwb25zZTtcbn07XG5cbnR5cGUgVXBsb2FkSW52b2ljZUltYWdlRGF0YSA9IHtcbiAgLyoqXG4gICAqIFNlc3Npb24gSUQgYXV0aG9yaXppbmcgdGhlIHJlcXVlc3RcbiAgICovXG4gIHNlc3Npb246IHN0cmluZztcbiAgLyoqXG4gICAqIEltYWdlIHR5cGVcbiAgICovXG4gIGltYWdlVHlwZTogc3RyaW5nO1xuICAvKipcbiAgICogSW1hZ2UgZmlsZS4gVE9ETzogV2hhdCBmb3JtYXQgc2hvdWxkIHRoaXMgYmUgaW4/XG4gICAqL1xuICBmaWxlOiBhbnk7XG59O1xuXG50eXBlIFVwbG9hZEludm9pY2VJbWFnZVJlc3BvbnNlID0ge1xuICAvKipcbiAgICogVGhlIHJlc3VsdCBvZiB0aGUgYWN0aW9uXG4gICAqL1xuICBzdWNjZXNzPzogYm9vbGVhbjtcbn07XG5cbmNvbnN0IHVwbG9hZEludm9pY2VJbWFnZSA9IGFzeW5jIChkYXRhOiBVcGxvYWRJbnZvaWNlSW1hZ2VEYXRhKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChgJHtla3lhc2guYXBpfS91cGxvYWQtaW1hZ2VgLCB7XG4gICAgLi4uZGF0YSxcbiAgfSk7XG5cbiAgcmV0dXJuIHJlc3BvbnNlLmRhdGEgYXMgVXBsb2FkSW52b2ljZUltYWdlUmVzcG9uc2U7XG59O1xuXG5leHBvcnQgeyBnZXRKV1RUb2tlbiwgZ2V0QXV0aG9yaXphdGlvbiwgY3JlYXRlTmV3SW52b2ljZSwgdXBsb2FkSW52b2ljZUltYWdlIH07XG4iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoLWZ1bGwgdy1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtM3hsIHRleHQtZ3JheS04MDBcIj5cbiAgICAgICAgUXVpY2tseSBpbnRlZ3JhdGUgYW5kIGFjY2VwdCBvbmxpbmUgcGF5bWVudHMgaW4gQmVsaXplIHdpdGggdmFyaW91c1xuICAgICAgICBzdXBwb3J0ZWQgZS13YWxsZXRzIVxuICAgICAgPC9oMT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJleHBvcnQgZGVmYXVsdCB7J3ZlcnNpb24nOidlYTRlMWE5ZCcsJ2VudHJ5Jzp7J21vZHVsZSc6Jy9idWlsZC9lbnRyeS5jbGllbnQtQU5ETkZERU8uanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUdPN0M1R04yLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstUDJGVEdQT1guanMnXX0sJ3JvdXRlcyc6eydyb290Jzp7J2lkJzoncm9vdCcsJ3BhcmVudElkJzp1bmRlZmluZWQsJ3BhdGgnOicnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb290LVFWNlVWMlZLLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvaW5kZXgnOnsnaWQnOidyb3V0ZXMvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzp1bmRlZmluZWQsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvaW5kZXgtSjNNUE5OUVouanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9wYXltZW50cy9la3lhc2gvaW5kZXgnOnsnaWQnOidyb3V0ZXMvcGF5bWVudHMvZWt5YXNoL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6J3BheW1lbnRzL2VreWFzaCcsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvcGF5bWVudHMvZWt5YXNoL2luZGV4LUhaTjNXQVBQLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1QUkxSQUtFWC5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9wYXltZW50cy9la3lhc2gvaW5pdGlhdGUnOnsnaWQnOidyb3V0ZXMvcGF5bWVudHMvZWt5YXNoL2luaXRpYXRlJywncGFyZW50SWQnOidyb290JywncGF0aCc6J3BheW1lbnRzL2VreWFzaC9pbml0aWF0ZScsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9wYXltZW50cy9la3lhc2gvaW5pdGlhdGUtWFkyWFJGVE4uanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVMySVBKVEU0LmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3BheW1lbnRzL2VreWFzaC9wYXktd2l0aC1waG9uZSc6eydpZCc6J3JvdXRlcy9wYXltZW50cy9la3lhc2gvcGF5LXdpdGgtcGhvbmUnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzoncGF5bWVudHMvZWt5YXNoL3BheS13aXRoLXBob25lJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3BheW1lbnRzL2VreWFzaC9wYXktd2l0aC1waG9uZS1DR1daUlVNMi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstUzJJUEpURTQuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1QUkxSQUtFWC5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfX0sJ3VybCc6Jy9idWlsZC9tYW5pZmVzdC1FQTRFMUE5RC5qcyd9OyJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBdUI7QUFBQTtBQUFBOzs7QUNBdkI7QUFBQTtBQUFBO0FBQUE7QUFZQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLE9BQU8sUUFBUTtBQUluQixXQUFPLGVBQWUsU0FBUyw0QkFBNEI7QUFBQSxNQUN6RCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLG9DQUFvQztBQUFBLE1BQ2pFLFlBQVk7QUFB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
