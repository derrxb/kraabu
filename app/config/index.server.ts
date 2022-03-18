import { createClient } from "@supabase/supabase-js";
import "dotenv/config";

const ekyash = {
  api: "https://mw-api-preprod.e-kyash.com/api/qrpos-app",
  routes: {
    base: "https://mw-api-preprod.e-kyash.com/api/qrpos-app",
    orderDetails: "https://giggedbz.arcadier.io/user/checkout/order-details",
  },
  headers: {
    "Content-Type": "application/json",
    "Accept-Language": "en",
    "The-Timezone-IANA": "Belize",
    WL: "bibi",
    IMGE: "APPKEY17-07A8-4BAF-AA0F-B1568C5017A3",
    appVersion: "99.1.1",
    operatingSystem: "Android",
    SID: "2324518403",
  },
  credentials: {
    SID: 2324518403,
    "Pin Hash":
      "8d4fd24a970f49292076bf74df011e9f8d0e7850273666fcf4db458f1ee2d461",
    pinEncoded:
      "44c80bbde592aed7e2138b67ec71e94a5a22d39bc36d66c3373c1ea33013d396",
  },
  data: {
    phone: "5016376574",
  },
};

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl as string, supabaseAnonKey as string);

export { ekyash, supabase };
