import { createClient } from '@supabase/supabase-js';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpubnV0eWh5bXBhbnNweXpwc21sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk2Nzk4MDEsImV4cCI6MjAzNTI1NTgwMX0.mmdtlYPU3Ap4jD4ujDl7oCK5U6wm5bt9fUrLkrhDLMo'
const supabaseUrl = 'https://znnutyhympanspyzpsml.supabase.co';

export const supabase = createClient(supabaseUrl, supabaseKey);