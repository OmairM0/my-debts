import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://rspvmksgmghizpnoszyw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJzcHZta3NnbWdoaXpwbm9zenl3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg1MDAzMDIsImV4cCI6MjAyNDA3NjMwMn0.-4kGV5UGvAfZEKGupSTCphuXCH-eP5QRyxyP9Yp0vIA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
