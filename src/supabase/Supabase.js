import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://quhonovaelglwkqvptgi.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF1aG9ub3ZhZWxnbHdrcXZwdGdpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgxMzM3NjYsImV4cCI6MjAxMzcwOTc2Nn0.j_cFllqweaWGrWYaHC-Gck9Jzxz0d7OzZsi3gYjC_IM'
const supabase = createClient(supabaseUrl, supabaseKey)
export default supabase