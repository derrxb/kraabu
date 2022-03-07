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
var app_default = "/build/_assets/app-QSQ3EJD4.css";

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
var import_nanoid = require("nanoid");

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
};
var payment_default = Payment;

// app/domain/payments/mappers/arcadier-payment-mapper.ts
var ArcadierPaymentMapper = class {
  getPending(data) {
    return this.buildEntity(data);
  }
  find(data) {
    return this.buildEntity({});
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

// app/config/index.server.ts
init_react();
var import_supabase_js = require("@supabase/supabase-js");
var import_config = require("dotenv/config");
var supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
var supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;
var supabase = (0, import_supabase_js.createClient)(supabaseUrl, supabaseAnonKey);

// app/domain/payments/repositories/payment-repository.ts
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
    console.log({
      additionalData: data.additionalData,
      amount: data.currency.amount,
      currency: data.currency.type,
      description: data.description,
      invoice: data.invoice,
      status: data.status,
      user: data.user
    });
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

// route:/Users/derrickbol/dev/kraabu/app/routes/payments/ekyash/$id.tsx
var id_exports = {};
__export(id_exports, {
  action: () => action2,
  default: () => EKyash,
  loader: () => loader,
  meta: () => meta2
});
init_react();
var import_remix4 = __toESM(require_remix());
var meta2 = () => {
  return {
    title: "Complete GiggedBz Booking Payment | Krabuu",
    description: "You're almost done with your GiggedBz booking. Once payment is completed, your booking will be confirmed."
  };
};
var loader = async ({ params }) => {
  return (0, import_remix4.json)({
    alive: true
  });
};
var action2 = async ({ request }) => {
  const formData = await request.formData();
  if (!formData.get("name") || !formData.get("phone")) {
    throw new Error("Email and phone are both required.");
  }
};
function EKyash() {
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
  }, "Pay online with Belize's various digital wallets")), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col border-[1px] container shadow-md rounded p-4 w-[560px] min-h-[480px]"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-xl font-medium pb-2"
  }, "Requesting payment with EKyash on behalf of GiggedBz"), /* @__PURE__ */ React.createElement("span", {
    className: "text-gray-600 pb-4"
  }, "Please enter your EKyash ID (your phone number) to receive a payment request for your GiggedBz booking. Once you complete payment with EKyash, your booking will be confirmed."), /* @__PURE__ */ React.createElement(import_remix4.Form, {
    action: "/payments/ekyash",
    method: "post",
    className: "mb-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col pb-4"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "name",
    className: "font-medium"
  }, "Your name"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "name",
    id: "name",
    className: "focus:ring-indigo-500 focus:border-indigo-500 block border-2 w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md",
    placeholder: "i.e. John Doe"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col pb-4"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "phone",
    className: "font-medium"
  }, "Phone"), /* @__PURE__ */ React.createElement("input", {
    type: "tel",
    name: "phone",
    id: "phone",
    className: "focus:ring-indigo-500 focus:border-indigo-500 block border-2 w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md",
    placeholder: "i.e. 501-621-2131"
  })), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "w-full px-4 py-2 text-xl border-2 rounded-md focus:ring focus:ring-blue-100 border-blue-400 bg-blue-600 text-white"
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
var assets_manifest_default = { "version": "741be918", "entry": { "module": "/build/entry.client-XSNCTVDY.js", "imports": ["/build/_shared/chunk-EFCZPEX5.js", "/build/_shared/chunk-P2FTGPOX.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-AXSVLYMI.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-J3MPNNQZ.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/payments/ekyash/$id": { "id": "routes/payments/ekyash/$id", "parentId": "root", "path": "payments/ekyash/:id", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/payments/ekyash/$id-CWPUEZOP.js", "imports": void 0, "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/payments/ekyash/initiate": { "id": "routes/payments/ekyash/initiate", "parentId": "root", "path": "payments/ekyash/initiate", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/payments/ekyash/initiate-RHDAE4E6.js", "imports": void 0, "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-741BE918.js" };

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
  "routes/payments/ekyash/$id": {
    id: "routes/payments/ekyash/$id",
    parentId: "root",
    path: "payments/ekyash/:id",
    index: void 0,
    caseSensitive: void 0,
    module: id_exports
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICIuLi9zZXJ2ZXIuanMiLCAic2VydmVyLWVudHJ5LW1vZHVsZTpAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGQiLCAiLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGU6L1VzZXJzL2RlcnJpY2tib2wvZGV2L2tyYWFidS9hcHAvcm9vdC50c3giLCAicm91dGU6L1VzZXJzL2RlcnJpY2tib2wvZGV2L2tyYWFidS9hcHAvcm91dGVzL3BheW1lbnRzL2VreWFzaC9pbml0aWF0ZS50c3giLCAiLi4vYXBwL2RvbWFpbi9wYXltZW50cy9zZXJ2aWNlcy9jcmVhdGUtcGVuZGluZy1la3lhc2gtcGF5bWVudC50cyIsICIuLi9hcHAvcmVxdWVzdHMvY3JlYXRlLXBlbmRpbmctZWt5YXNoLXBheW1lbnQudHMiLCAiLi4vYXBwL2RvbWFpbi9wYXltZW50cy9tYXBwZXJzL2FyY2FkaWVyLXBheW1lbnQtbWFwcGVyLnRzIiwgIi4uL2FwcC9kb21haW4vcGF5bWVudHMvZW50aXRpZXMvcGF5bWVudC50cyIsICIuLi9hcHAvZG9tYWluL3BheW1lbnRzL3JlcG9zaXRvcmllcy9wYXltZW50LXJlcG9zaXRvcnkudHMiLCAiLi4vYXBwL2NvbmZpZy9pbmRleC5zZXJ2ZXIudHMiLCAicm91dGU6L1VzZXJzL2RlcnJpY2tib2wvZGV2L2tyYWFidS9hcHAvcm91dGVzL3BheW1lbnRzL2VreWFzaC8kaWQudHN4IiwgInJvdXRlOi9Vc2Vycy9kZXJyaWNrYm9sL2Rldi9rcmFhYnUvYXBwL3JvdXRlcy9pbmRleC50c3giLCAic2VydmVyLWFzc2V0cy1tYW5pZmVzdDpAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3QiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHsgUmVhY3QgfTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vbm9kZSB2MS4yLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgbm9kZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vbm9kZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YTsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZSB2MS4yLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgc2VydmVyUnVudGltZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc0Nvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnanNvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmpzb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyZWRpcmVjdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLnJlZGlyZWN0OyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3JlYWN0IHYxLjIuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciByZWFjdCA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vcmVhY3QnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRm9ybScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5Gb3JtOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaXZlUmVsb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpdmVSZWxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNZXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk1ldGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdOYXZMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk5hdkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUHJlZmV0Y2hQYWdlTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUHJlZmV0Y2hQYWdlTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peEJyb3dzZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhCcm93c2VyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhTZXJ2ZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhTZXJ2ZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JpcHRzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcmlwdHM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JvbGxSZXN0b3JhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JvbGxSZXN0b3JhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUFjdGlvbkRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQWN0aW9uRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUJlZm9yZVVubG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VCZWZvcmVVbmxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VDYXRjaCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VDYXRjaDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXJzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRm9ybUFjdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGb3JtQWN0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlSHJlZicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VIcmVmOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9hZGVyRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2FkZXJEYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9jYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9jYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VNYXRjaGVzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU1hdGNoZXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0ZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRpb25UeXBlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRpb25UeXBlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldENvbnRleHQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0Q29udGV4dDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VSZXNvbHZlZFBhdGgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUmVzb2x2ZWRQYXRoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU2VhcmNoUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVNlYXJjaFBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVN1Ym1pdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTdWJtaXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VUcmFuc2l0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVRyYW5zaXRpb247IH1cbn0pO1xuXG4iLCAiaW1wb3J0IGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCBjb21wcmVzc2lvbiBmcm9tIFwiY29tcHJlc3Npb25cIjtcbmltcG9ydCBtb3JnYW4gZnJvbSBcIm1vcmdhblwiO1xuaW1wb3J0IHsgY3JlYXRlUmVxdWVzdEhhbmRsZXIgfSBmcm9tIFwiQHJlbWl4LXJ1bi9leHByZXNzXCI7XG5cbmltcG9ydCAqIGFzIHNlcnZlckJ1aWxkIGZyb20gXCJAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGRcIjtcblxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuXG5hcHAudXNlKGNvbXByZXNzaW9uKCkpO1xuXG4vLyBodHRwOi8vZXhwcmVzc2pzLmNvbS9lbi9hZHZhbmNlZC9iZXN0LXByYWN0aWNlLXNlY3VyaXR5Lmh0bWwjYXQtYS1taW5pbXVtLWRpc2FibGUteC1wb3dlcmVkLWJ5LWhlYWRlclxuYXBwLmRpc2FibGUoXCJ4LXBvd2VyZWQtYnlcIik7XG5cbi8vIFJlbWl4IGZpbmdlcnByaW50cyBpdHMgYXNzZXRzIHNvIHdlIGNhbiBjYWNoZSBmb3JldmVyLlxuYXBwLnVzZShcbiAgXCIvYnVpbGRcIixcbiAgZXhwcmVzcy5zdGF0aWMoXCJwdWJsaWMvYnVpbGRcIiwgeyBpbW11dGFibGU6IHRydWUsIG1heEFnZTogXCIxeVwiIH0pXG4pO1xuXG4vLyBFdmVyeXRoaW5nIGVsc2UgKGxpa2UgZmF2aWNvbi5pY28pIGlzIGNhY2hlZCBmb3IgYW4gaG91ci4gWW91IG1heSB3YW50IHRvIGJlXG4vLyBtb3JlIGFnZ3Jlc3NpdmUgd2l0aCB0aGlzIGNhY2hpbmcuXG5hcHAudXNlKGV4cHJlc3Muc3RhdGljKFwicHVibGljL2J1aWxkXCIsIHsgbWF4QWdlOiBcIjFoXCIgfSkpO1xuXG5hcHAudXNlKG1vcmdhbihcInRpbnlcIikpO1xuXG5hcHAuYWxsKFxuICBcIipcIixcbiAgY3JlYXRlUmVxdWVzdEhhbmRsZXIoe1xuICAgIGJ1aWxkOiBzZXJ2ZXJCdWlsZCxcbiAgICBtb2RlOiBwcm9jZXNzLmVudi5OT0RFX0VOVlxuICB9KVxuKTtcblxuY29uc3QgcG9ydCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgMzAwMDtcblxuYXBwLmxpc3Rlbihwb3J0LCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKGBFeHByZXNzIHNlcnZlciBsaXN0ZW5pbmcgb24gcG9ydCAke3BvcnR9YCk7XG59KTtcbiIsICJcbmltcG9ydCAqIGFzIGVudHJ5U2VydmVyIGZyb20gXCIvVXNlcnMvZGVycmlja2JvbC9kZXYva3JhYWJ1L2FwcC9lbnRyeS5zZXJ2ZXIudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTAgZnJvbSBcIi9Vc2Vycy9kZXJyaWNrYm9sL2Rldi9rcmFhYnUvYXBwL3Jvb3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIi9Vc2Vycy9kZXJyaWNrYm9sL2Rldi9rcmFhYnUvYXBwL3JvdXRlcy9wYXltZW50cy9la3lhc2gvaW5pdGlhdGUudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTIgZnJvbSBcIi9Vc2Vycy9kZXJyaWNrYm9sL2Rldi9rcmFhYnUvYXBwL3JvdXRlcy9wYXltZW50cy9la3lhc2gvJGlkLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUzIGZyb20gXCIvVXNlcnMvZGVycmlja2JvbC9kZXYva3JhYWJ1L2FwcC9yb3V0ZXMvaW5kZXgudHN4XCI7XG4gIGV4cG9ydCB7IGRlZmF1bHQgYXMgYXNzZXRzIH0gZnJvbSBcIkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdFwiO1xuICBleHBvcnQgY29uc3QgZW50cnkgPSB7IG1vZHVsZTogZW50cnlTZXJ2ZXIgfTtcbiAgZXhwb3J0IGNvbnN0IHJvdXRlcyA9IHtcbiAgICBcInJvb3RcIjoge1xuICAgICAgaWQ6IFwicm9vdFwiLFxuICAgICAgcGFyZW50SWQ6IHVuZGVmaW5lZCxcbiAgICAgIHBhdGg6IFwiXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTBcbiAgICB9LFxuICBcInJvdXRlcy9wYXltZW50cy9la3lhc2gvaW5pdGlhdGVcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3BheW1lbnRzL2VreWFzaC9pbml0aWF0ZVwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJwYXltZW50cy9la3lhc2gvaW5pdGlhdGVcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMVxuICAgIH0sXG4gIFwicm91dGVzL3BheW1lbnRzL2VreWFzaC8kaWRcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3BheW1lbnRzL2VreWFzaC8kaWRcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwicGF5bWVudHMvZWt5YXNoLzppZFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUyXG4gICAgfSxcbiAgXCJyb3V0ZXMvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUzXG4gICAgfVxuICB9OyIsICJpbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gXCJyZWFjdC1kb20vc2VydmVyXCI7XG5pbXBvcnQgeyBSZW1peFNlcnZlciB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBFbnRyeUNvbnRleHQgfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlUmVxdWVzdChcbiAgcmVxdWVzdDogUmVxdWVzdCxcbiAgcmVzcG9uc2VTdGF0dXNDb2RlOiBudW1iZXIsXG4gIHJlc3BvbnNlSGVhZGVyczogSGVhZGVycyxcbiAgcmVtaXhDb250ZXh0OiBFbnRyeUNvbnRleHRcbikge1xuICBjb25zdCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcbiAgICA8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxuICApO1xuXG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L2h0bWxcIik7XG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZShcIjwhRE9DVFlQRSBodG1sPlwiICsgbWFya3VwLCB7XG4gICAgc3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXG4gICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzXG4gIH0pO1xufVxuIiwgImltcG9ydCB0eXBlIHsgTGlua3NGdW5jdGlvbiwgTWV0YUZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQge1xuICBMaW5rcyxcbiAgTGl2ZVJlbG9hZCxcbiAgTWV0YSxcbiAgT3V0bGV0LFxuICBTY3JpcHRzLFxuICBTY3JvbGxSZXN0b3JhdGlvbixcbn0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy9hcHAuY3NzXCI7XG5cbmV4cG9ydCBsZXQgbGlua3M6IExpbmtzRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiBbeyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiBzdHlsZXMgfV07XG59O1xuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4geyB0aXRsZTogXCJOZXcgUmVtaXggQXBwXCIgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgcmV0dXJuIChcbiAgICA8aHRtbCBsYW5nPVwiZW5cIiBjbGFzc05hbWU9XCJoLWZ1bGwgdy1mdWxsXCI+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8TWV0YSAvPlxuICAgICAgICA8TGlua3MgLz5cbiAgICAgIDwvaGVhZD5cbiAgICAgIDxib2R5IGNsYXNzTmFtZT1cImgtZnVsbCB3LWZ1bGxcIj5cbiAgICAgICAgPE91dGxldCAvPlxuICAgICAgICA8U2Nyb2xsUmVzdG9yYXRpb24gLz5cbiAgICAgICAgPFNjcmlwdHMgLz5cbiAgICAgICAgPExpdmVSZWxvYWQgLz5cbiAgICAgIDwvYm9keT5cbiAgICA8L2h0bWw+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgQWN0aW9uRnVuY3Rpb24sIGpzb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCBDcmVhdGVQZW5kaW5nRWt5YXNoUGF5bWVudCBmcm9tIFwifi9kb21haW4vcGF5bWVudHMvc2VydmljZXMvY3JlYXRlLXBlbmRpbmctZWt5YXNoLXBheW1lbnRcIjtcblxuZXhwb3J0IGNvbnN0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBwYXltZW50ID0gYXdhaXQgbmV3IENyZWF0ZVBlbmRpbmdFa3lhc2hQYXltZW50KHJlcXVlc3QpLmNhbGwoKTtcblxuICAgIHJldHVybiBqc29uKHBheW1lbnQuYWRkaXRpb25hbERhdGE/LnBheW1lbnRLZXksIDIwMCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4ganNvbihcbiAgICAgIHtcbiAgICAgICAgbWVzc2FnZTogXCJTb21ldGhpbmcgdW5leHBlY3RlZCBoYXBwZW5lZC4gUGxlYXNlIHRyeSBhZ2FpblwiLFxuICAgICAgfSxcbiAgICAgIDQyMlxuICAgICk7XG4gIH1cbn07XG4iLCAiaW1wb3J0IHR5cGUgeyBBcmNhZGllclBheW1lbnRSZXF1ZXN0IH0gZnJvbSBcIn4vZG9tYWluL3BheW1lbnRzL2xpYnJhcnkvYXJjYWRpZXItYXBpXCI7XG5pbXBvcnQgY3JlYXRlUGVuZGluZ0VreWFzaFBheW1lbnRTY2hlbWEgZnJvbSBcIn4vcmVxdWVzdHMvY3JlYXRlLXBlbmRpbmctZWt5YXNoLXBheW1lbnRcIjtcbmltcG9ydCBQYXltZW50IGZyb20gXCIuLi9lbnRpdGllcy9wYXltZW50XCI7XG5pbXBvcnQgQXJjYWRpZXJQYXltZW50TWFwcGVyIGZyb20gXCIuLi9tYXBwZXJzL2FyY2FkaWVyLXBheW1lbnQtbWFwcGVyXCI7XG5pbXBvcnQgUGF5bWVudFJlcG9zaXRvcnkgZnJvbSBcIi4uL3JlcG9zaXRvcmllcy9wYXltZW50LXJlcG9zaXRvcnlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3JlYXRlUGVuZGluZ0VreWFzaFBheW1lbnQge1xuICBwcml2YXRlIHJlcXVlc3Q6IFJlcXVlc3Q7XG4gIHByaXZhdGUgcGF5bWVudDogQXJjYWRpZXJQYXltZW50UmVxdWVzdCB8IG51bGw7XG5cbiAgY29uc3RydWN0b3IocmVxdWVzdDogUmVxdWVzdCkge1xuICAgIHRoaXMucmVxdWVzdCA9IHJlcXVlc3Q7XG4gICAgdGhpcy5wYXltZW50ID0gbnVsbDtcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeVBheW1lbnRQYXJhbXMoKSB7XG4gICAgY29uc3QgYm9keSA9IGF3YWl0IHRoaXMucmVxdWVzdC5qc29uKCk7XG5cbiAgICB0aGlzLnBheW1lbnQgPSBhd2FpdCBjcmVhdGVQZW5kaW5nRWt5YXNoUGF5bWVudFNjaGVtYS52YWxpZGF0ZUFzeW5jKHtcbiAgICAgIC4uLmJvZHksXG4gICAgfSk7XG4gIH1cblxuICBhc3luYyBjYWxsKCk6IFByb21pc2U8UGF5bWVudD4ge1xuICAgIGF3YWl0IHRoaXMudmVyaWZ5UGF5bWVudFBhcmFtcygpO1xuXG4gICAgaWYgKCF0aGlzLnBheW1lbnQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIGRhdGEgZnJvbSBhcmNhZGllciByZWNlaXZlZC5cIik7XG4gICAgfVxuXG4gICAgY29uc3QgcGVuZGluZ1BheW1lbnQgPSBuZXcgQXJjYWRpZXJQYXltZW50TWFwcGVyKCkuZ2V0UGVuZGluZyh0aGlzLnBheW1lbnQpO1xuICAgIGNvbnN0IHBheW1lbnQgPSBhd2FpdCBQYXltZW50UmVwb3NpdG9yeS5jcmVhdGVQZW5kaW5nKHBlbmRpbmdQYXltZW50KTtcblxuICAgIHJldHVybiBwYXltZW50O1xuICB9XG59XG4iLCAiaW1wb3J0IGpvaSBmcm9tIFwiam9pXCI7XG5cbmNvbnN0IGNyZWF0ZVBlbmRpbmdFa3lhc2hQYXltZW50U2NoZW1hID0gam9pLm9iamVjdCh7XG4gIGludm9pY2Vubzogam9pLnN0cmluZygpLnJlcXVpcmVkKCksXG4gIGN1cnJlbmN5OiBqb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcbiAgdG90YWw6IGpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxuICBoYXNoa2V5OiBqb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcbiAgZ2F0ZXdheTogam9pLnN0cmluZygpLnJlcXVpcmVkKCksXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUGVuZGluZ0VreWFzaFBheW1lbnRTY2hlbWE7XG4iLCAiaW1wb3J0IHsgbmFub2lkIH0gZnJvbSBcIm5hbm9pZFwiO1xuaW1wb3J0IFBheW1lbnQsIHsgUGF5bWVudFN0YXR1cyB9IGZyb20gXCIuLi9lbnRpdGllcy9wYXltZW50XCI7XG5pbXBvcnQgeyBBcmNhZGllclBheW1lbnRSZXF1ZXN0IH0gZnJvbSBcIi4uL2xpYnJhcnkvYXJjYWRpZXItYXBpXCI7XG5cbmNsYXNzIEFyY2FkaWVyUGF5bWVudE1hcHBlciB7XG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gZGF0YVxuICAgKiBAcmV0dXJucyBUaGUgaW5pdGlhbCBwYXltZW50IGRhdGEgc2VuZCBieSBhcmNhZGllclxuICAgKi9cbiAgZ2V0UGVuZGluZyhkYXRhOiBBcmNhZGllclBheW1lbnRSZXF1ZXN0KSB7XG4gICAgLy8gZG9uJ3QgZmluZDsganVzdCBidWlsZCB0aGUgZW50aXR5IGFzIHdlIGRvbid0IG5lZWQgdG8gcXVlcnkgYXJjYWRpZXIgZm9yIHRoaXMuXG4gICAgcmV0dXJuIHRoaXMuYnVpbGRFbnRpdHkoZGF0YSk7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIGRhdGFcbiAgICogQHJldHVybnMgUGF5bWVudCB3aXRoIHRoZSBvcmRlciBkZXRhaWxzIGZyb20gYXJjYWRpZXJcbiAgICovXG4gIGZpbmQoXG4gICAgZGF0YTogUGljazxBcmNhZGllclBheW1lbnRSZXF1ZXN0LCBcImdhdGV3YXlcIiB8IFwiaGFzaGtleVwiIHwgXCJpbnZvaWNlbm9cIj4gJiB7XG4gICAgICBwYXltZW50S2V5OiBzdHJpbmc7XG4gICAgfVxuICApIHtcbiAgICByZXR1cm4gdGhpcy5idWlsZEVudGl0eSh7fSBhcyBhbnkpO1xuICB9XG5cbiAgcHJpdmF0ZSBidWlsZEVudGl0eShkYXRhOiBBcmNhZGllclBheW1lbnRSZXF1ZXN0KTogUGF5bWVudCB7XG4gICAgcmV0dXJuIG5ldyBQYXltZW50KHtcbiAgICAgIHVzZXI6IFwiZ2lnZ2VkQnpcIixcbiAgICAgIHN0YXR1czogUGF5bWVudFN0YXR1cy5QZW5kaW5nLFxuICAgICAgY3VycmVuY3k6IHtcbiAgICAgICAgYW1vdW50OiBOdW1iZXIoZGF0YS50b3RhbCksXG4gICAgICAgIHR5cGU6IGRhdGEuY3VycmVuY3ksXG4gICAgICB9LFxuICAgICAgZGVzY3JpcHRpb246IGRhdGEuaW52b2ljZW5vLFxuICAgICAgaW52b2ljZTogZGF0YS5pbnZvaWNlbm8sXG4gICAgICBhZGRpdGlvbmFsRGF0YToge1xuICAgICAgICBnYXRld2F5OiBkYXRhLmdhdGV3YXksXG4gICAgICAgIGhhc2hrZXk6IGRhdGEuaGFzaGtleSxcbiAgICAgICAgcGF5bWVudEtleTogbmFub2lkKCksXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFyY2FkaWVyUGF5bWVudE1hcHBlcjtcbiIsICJleHBvcnQgY29uc3QgZW51bSBQYXltZW50U3RhdHVzIHtcbiAgUGVuZGluZyxcbiAgSW5Qcm9ncmVzcyxcbiAgY29tcGxldGVkLFxufVxuXG50eXBlIFByb3BzID0ge1xuICBzdGF0dXM6IFBheW1lbnRTdGF0dXM7XG4gIHVzZXI6IHN0cmluZztcbiAgaWQ/OiBudW1iZXI7XG4gIGN1cnJlbmN5OiB7XG4gICAgYW1vdW50OiBudW1iZXI7XG4gICAgdHlwZTogc3RyaW5nO1xuICB9O1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBjcmVhdGVkQXQ/OiBhbnk7XG4gIGludm9pY2U6IHN0cmluZztcbiAgYWRkaXRpb25hbERhdGE6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBudW1iZXI7XG4gIH07XG59O1xuXG5jbGFzcyBQYXltZW50IHtcbiAgYWRkaXRpb25hbERhdGE6IFByb3BzW1wiYWRkaXRpb25hbERhdGFcIl07XG4gIGNyZWF0ZWRBdDogUHJvcHNbXCJjcmVhdGVkQXRcIl07XG4gIGN1cnJlbmN5OiBQcm9wc1tcImN1cnJlbmN5XCJdO1xuICBkZXNjcmlwdGlvbjogUHJvcHNbXCJkZXNjcmlwdGlvblwiXTtcbiAgaWQ6IFByb3BzW1wiaWRcIl07XG4gIGludm9pY2U6IFByb3BzW1wiaW52b2ljZVwiXTtcbiAgc3RhdHVzOiBQcm9wc1tcInN0YXR1c1wiXTtcbiAgdXNlcjogUHJvcHNbXCJ1c2VyXCJdO1xuXG4gIGNvbnN0cnVjdG9yKHtcbiAgICBhZGRpdGlvbmFsRGF0YSxcbiAgICBjcmVhdGVkQXQsXG4gICAgY3VycmVuY3ksXG4gICAgZGVzY3JpcHRpb24sXG4gICAgaWQsXG4gICAgaW52b2ljZSxcbiAgICBzdGF0dXMsXG4gICAgdXNlcixcbiAgfTogUHJvcHMpIHtcbiAgICB0aGlzLmFkZGl0aW9uYWxEYXRhID0gYWRkaXRpb25hbERhdGE7XG4gICAgdGhpcy5jcmVhdGVkQXQgPSBjcmVhdGVkQXQ7XG4gICAgdGhpcy5jdXJyZW5jeSA9IGN1cnJlbmN5O1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmlkID0gaWQ7XG4gICAgdGhpcy5pbnZvaWNlID0gaW52b2ljZTtcbiAgICB0aGlzLnN0YXR1cyA9IHN0YXR1cztcbiAgICB0aGlzLnVzZXIgPSB1c2VyO1xuICB9XG5cbiAgaXNWYWxpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW5jeS5hbW91bnQgPiAwO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBheW1lbnQ7XG4iLCAiaW1wb3J0IHsgc3VwYWJhc2UgfSBmcm9tIFwifi9jb25maWcvaW5kZXguc2VydmVyXCI7XG5pbXBvcnQgUGF5bWVudCBmcm9tIFwiLi4vZW50aXRpZXMvcGF5bWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXltZW50UmVwb3NpdG9yeSB7XG4gIHN0YXRpYyBhc3luYyByZWJ1aWxkRW50aXR5KGRhdGE6IGFueSkge1xuICAgIHJldHVybiBuZXcgUGF5bWVudCh7XG4gICAgICBhZGRpdGlvbmFsRGF0YTogZGF0YT8uYWRkaXRpb25hbERhdGEsXG4gICAgICBjdXJyZW5jeToge1xuICAgICAgICBhbW91bnQ6IGRhdGE/LmFtb3VudCxcbiAgICAgICAgdHlwZTogZGF0YS5jdXJyZW5jeSxcbiAgICAgIH0sXG4gICAgICBkZXNjcmlwdGlvbjogZGF0YT8uZGVzY3JpcHRpb24sXG4gICAgICBpZDogZGF0YS5pZCxcbiAgICAgIGludm9pY2U6IGRhdGEuaW52b2ljZSxcbiAgICAgIHN0YXR1czogZGF0YS5zdGF0dXMsXG4gICAgICB1c2VyOiBkYXRhLnVzZXIsXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgYXN5bmMgY3JlYXRlUGVuZGluZyhkYXRhOiBQYXltZW50KSB7XG4gICAgY29uc29sZS5sb2coe1xuICAgICAgYWRkaXRpb25hbERhdGE6IGRhdGEuYWRkaXRpb25hbERhdGEsXG4gICAgICBhbW91bnQ6IGRhdGEuY3VycmVuY3kuYW1vdW50LFxuICAgICAgY3VycmVuY3k6IGRhdGEuY3VycmVuY3kudHlwZSxcbiAgICAgIGRlc2NyaXB0aW9uOiBkYXRhLmRlc2NyaXB0aW9uLFxuICAgICAgaW52b2ljZTogZGF0YS5pbnZvaWNlLFxuICAgICAgc3RhdHVzOiBkYXRhLnN0YXR1cyxcbiAgICAgIHVzZXI6IGRhdGEudXNlcixcbiAgICB9KTtcblxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHN1cGFiYXNlLmZyb20oXCJwYXltZW50c1wiKS5pbnNlcnQoW1xuICAgICAge1xuICAgICAgICBhZGRpdGlvbmFsRGF0YTogZGF0YS5hZGRpdGlvbmFsRGF0YSxcbiAgICAgICAgYW1vdW50OiBkYXRhLmN1cnJlbmN5LmFtb3VudCxcbiAgICAgICAgY3VycmVuY3k6IGRhdGEuY3VycmVuY3kudHlwZSxcbiAgICAgICAgZGVzY3JpcHRpb246IGRhdGEuZGVzY3JpcHRpb24sXG4gICAgICAgIGludm9pY2U6IGRhdGEuaW52b2ljZSxcbiAgICAgICAgc3RhdHVzOiBkYXRhLnN0YXR1cyxcbiAgICAgICAgdXNlcjogZGF0YS51c2VyLFxuICAgICAgfSxcbiAgICBdKTtcblxuICAgIHJldHVybiB0aGlzLnJlYnVpbGRFbnRpdHkocmVzdWx0LmJvZHk/LlswXSk7XG4gIH1cbn1cbiIsICJpbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tIFwiQHN1cGFiYXNlL3N1cGFiYXNlLWpzXCI7XG5pbXBvcnQgXCJkb3RlbnYvY29uZmlnXCI7XG5cbmNvbnN0IGVreWFzaCA9IHtcbiAgYXBpOiBcImh0dHBzOi8vbXctYXBpLXByZXByb2QuZS1reWFzaC5jb20vYXBpL3FycG9zLWFwcFwiLFxuICBoZWFkZXJzOiB7XG4gICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgXCJBY2NlcHQtTGFuZ3VhZ2VcIjogXCJlblwiLFxuICAgIFwiVGhlLVRpbWV6b25lLUlBTkFcIjogXCJCZWxpemVcIixcbiAgICBXTDogXCJiaWJpXCIsXG4gICAgSU1HRTogXCJBUFBLRVkxNy0wN0E4LTRCQUYtQUEwRi1CMTU2OEM1MDE3QTNcIixcbiAgICBhcHBWZXJzaW9uOiBcIjk5LjEuMVwiLFxuICAgIG9wZXJhdGluZ1N5c3RlbTogXCJBbmRyb2lkXCIsXG4gIH0sXG4gIGNyZWRlbnRpYWxzOiB7XG4gICAgU0lEOiAyMzI0NTE4NDAzLFxuICAgIFwiUGluIEhhc2hcIjogXCJjZDgwMWZjNTRjOGRhNGVlNjkwY2YwMGVkMzRmNmJlYlwiLFxuICB9LFxuICBkYXRhOiB7XG4gICAgcGhvbmU6IFwiNTAxNjM3NjU3NFwiLFxuICB9LFxufTtcblxuY29uc3Qgc3VwYWJhc2VVcmwgPSBwcm9jZXNzLmVudi5SRUFDVF9BUFBfU1VQQUJBU0VfVVJMO1xuY29uc3Qgc3VwYWJhc2VBbm9uS2V5ID0gcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX1NVUEFCQVNFX0FOT05fS0VZO1xuXG5jb25zdCBzdXBhYmFzZSA9IGNyZWF0ZUNsaWVudChzdXBhYmFzZVVybCBhcyBzdHJpbmcsIHN1cGFiYXNlQW5vbktleSBhcyBzdHJpbmcpO1xuXG5leHBvcnQgeyBla3lhc2gsIHN1cGFiYXNlIH07XG4iLCAiaW1wb3J0IHtcbiAgQWN0aW9uRnVuY3Rpb24sXG4gIEZvcm0sXG4gIGpzb24sXG4gIExvYWRlckZ1bmN0aW9uLFxuICBNZXRhRnVuY3Rpb24sXG59IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiBcIkNvbXBsZXRlIEdpZ2dlZEJ6IEJvb2tpbmcgUGF5bWVudCB8IEtyYWJ1dVwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJZb3UncmUgYWxtb3N0IGRvbmUgd2l0aCB5b3VyIEdpZ2dlZEJ6IGJvb2tpbmcuIE9uY2UgcGF5bWVudCBpcyBjb21wbGV0ZWQsIHlvdXIgYm9va2luZyB3aWxsIGJlIGNvbmZpcm1lZC5cIixcbiAgfTtcbn07XG5cbmV4cG9ydCBsZXQgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XG4gIC8vIExvYWQgcGF5bWVudCBpbmZvcm1hdGlvbiBmcm9tIEdpZ2dlZEJ6XG5cbiAgcmV0dXJuIGpzb24oe1xuICAgIGFsaXZlOiB0cnVlLFxuICB9KTtcbn07XG5cbmV4cG9ydCBsZXQgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBjb25zdCBmb3JtRGF0YSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcblxuICBpZiAoIWZvcm1EYXRhLmdldChcIm5hbWVcIikgfHwgIWZvcm1EYXRhLmdldChcInBob25lXCIpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiRW1haWwgYW5kIHBob25lIGFyZSBib3RoIHJlcXVpcmVkLlwiKTtcbiAgfVxuXG4gIC8vIGNyZWF0ZSBwYXltZW50IHJlcXVlc3QgdG8gRUt5YXNoXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFS3lhc2goKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoLWZ1bGwgdy1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtZ3JheS04MDBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktYXV0byBsZWFkaW5nLXJlbGF4ZWRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHBiLTQgb3BhY2l0eS03NSBob3ZlcjpvcGFjaXR5LTEwMFwiPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGRcIj5LcmFidXU8L2gxPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDBcIj5cbiAgICAgICAgICAgIFBheSBvbmxpbmUgd2l0aCBCZWxpemUncyB2YXJpb3VzIGRpZ2l0YWwgd2FsbGV0c1xuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGJvcmRlci1bMXB4XSBjb250YWluZXIgc2hhZG93LW1kIHJvdW5kZWQgcC00IHctWzU2MHB4XSBtaW4taC1bNDgwcHhdXCI+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1tZWRpdW0gcGItMlwiPlxuICAgICAgICAgICAgUmVxdWVzdGluZyBwYXltZW50IHdpdGggRUt5YXNoIG9uIGJlaGFsZiBvZiBHaWdnZWRCelxuICAgICAgICAgIDwvaDI+XG5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwIHBiLTRcIj5cbiAgICAgICAgICAgIFBsZWFzZSBlbnRlciB5b3VyIEVLeWFzaCBJRCAoeW91ciBwaG9uZSBudW1iZXIpIHRvIHJlY2VpdmUgYSBwYXltZW50XG4gICAgICAgICAgICByZXF1ZXN0IGZvciB5b3VyIEdpZ2dlZEJ6IGJvb2tpbmcuIE9uY2UgeW91IGNvbXBsZXRlIHBheW1lbnQgd2l0aFxuICAgICAgICAgICAgRUt5YXNoLCB5b3VyIGJvb2tpbmcgd2lsbCBiZSBjb25maXJtZWQuXG4gICAgICAgICAgPC9zcGFuPlxuXG4gICAgICAgICAgPEZvcm0gYWN0aW9uPVwiL3BheW1lbnRzL2VreWFzaFwiIG1ldGhvZD1cInBvc3RcIiBjbGFzc05hbWU9XCJtYi00XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgcGItNFwiPlxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIiBjbGFzc05hbWU9XCJmb250LW1lZGl1bVwiPlxuICAgICAgICAgICAgICAgIFlvdXIgbmFtZVxuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgICAgIGlkPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9jdXM6cmluZy1pbmRpZ28tNTAwIGZvY3VzOmJvcmRlci1pbmRpZ28tNTAwIGJsb2NrIGJvcmRlci0yIHctZnVsbCBwbC03IHByLTEyIHNtOnRleHQtc20gYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbWRcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiaS5lLiBKb2huIERvZVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHBiLTRcIj5cbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwaG9uZVwiIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtXCI+XG4gICAgICAgICAgICAgICAgUGhvbmVcbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInRlbFwiXG4gICAgICAgICAgICAgICAgbmFtZT1cInBob25lXCJcbiAgICAgICAgICAgICAgICBpZD1cInBob25lXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb2N1czpyaW5nLWluZGlnby01MDAgZm9jdXM6Ym9yZGVyLWluZGlnby01MDAgYmxvY2sgYm9yZGVyLTIgdy1mdWxsIHBsLTcgcHItMTIgc206dGV4dC1zbSBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1tZFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJpLmUuIDUwMS02MjEtMjEzMVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTQgcHktMiB0ZXh0LXhsIGJvcmRlci0yIHJvdW5kZWQtbWQgZm9jdXM6cmluZyBmb2N1czpyaW5nLWJsdWUtMTAwIGJvcmRlci1ibHVlLTQwMCBiZy1ibHVlLTYwMCB0ZXh0LXdoaXRlXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgR2V0IFBheW1lbnQgUmVxdWVzdFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9Gb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1mdWxsIHctZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LTN4bCB0ZXh0LWdyYXktODAwXCI+XG4gICAgICAgIFF1aWNrbHkgaW50ZWdyYXRlIGFuZCBhY2NlcHQgb25saW5lIHBheW1lbnRzIGluIEJlbGl6ZSB3aXRoIHZhcmlvdXNcbiAgICAgICAgc3VwcG9ydGVkIGUtd2FsbGV0cyFcbiAgICAgIDwvaDE+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiZXhwb3J0IGRlZmF1bHQgeyd2ZXJzaW9uJzonNzQxYmU5MTgnLCdlbnRyeSc6eydtb2R1bGUnOicvYnVpbGQvZW50cnkuY2xpZW50LVhTTkNUVkRZLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1FRkNaUEVYNS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVAyRlRHUE9YLmpzJ119LCdyb3V0ZXMnOnsncm9vdCc6eydpZCc6J3Jvb3QnLCdwYXJlbnRJZCc6dW5kZWZpbmVkLCdwYXRoJzonJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm9vdC1BWFNWTFlNSS5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2luZGV4Jzp7J2lkJzoncm91dGVzL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6dW5kZWZpbmVkLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2luZGV4LUozTVBOTlFaLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvcGF5bWVudHMvZWt5YXNoLyRpZCc6eydpZCc6J3JvdXRlcy9wYXltZW50cy9la3lhc2gvJGlkJywncGFyZW50SWQnOidyb290JywncGF0aCc6J3BheW1lbnRzL2VreWFzaC86aWQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvcGF5bWVudHMvZWt5YXNoLyRpZC1DV1BVRVpPUC5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9wYXltZW50cy9la3lhc2gvaW5pdGlhdGUnOnsnaWQnOidyb3V0ZXMvcGF5bWVudHMvZWt5YXNoL2luaXRpYXRlJywncGFyZW50SWQnOidyb290JywncGF0aCc6J3BheW1lbnRzL2VreWFzaC9pbml0aWF0ZScsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9wYXltZW50cy9la3lhc2gvaW5pdGlhdGUtUkhEQUU0RTYuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfX0sJ3VybCc6Jy9idWlsZC9tYW5pZmVzdC03NDFCRTkxOC5qcyd9OyJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBdUI7QUFBQTtBQUFBOzs7QUNBdkI7QUFBQTtBQUFBO0FBQUE7QUFZQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLE9BQU8sUUFBUTtBQUluQixXQUFPLGVBQWUsU0FB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
