import { createClient } from '@supabase/supabase-js';
import 'dotenv/config';

const ekyash = {
  routes: {
    orderDetails: 'https://giggedbz.arcadier.io/user/checkout/order-details',
  },
  headers: {
    'Content-Type': 'application/json',
    'Accept-Language': 'en',
    'The-Timezone-IANA': 'Belize',
    WL: 'bibi',
    IMGE: 'APPKEY17-07A8-4BAF-AA0F-B1568C5017A3',
    appVersion: '99.1.1',
    operatingSystem: 'Android',
  },
};

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl as string, supabaseAnonKey as string);

export { ekyash, supabase };
