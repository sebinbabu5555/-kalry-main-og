import { createClient } from '@supabase/supabase-js';
import Constants from 'expo-constants';

// Read from app.config.js extra
const supabaseUrl = Constants.expoConfig.extra.supabaseUrl;
const supabaseAnonKey = Constants.expoConfig.extra.supabaseAnonKey;

// Optional: verify keys loaded
console.log('Supabase URL:', supabaseUrl);
console.log('Supabase Anon Key:', supabaseAnonKey);

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
