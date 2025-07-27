import { createClient } from '@supabase/supabase-js'

const URL = 'https://uqzwlthwjgoxukevycbg.supabase.co'

const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVxendsdGh3amdveHVrZXZ5Y2JnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMzMTI2NTMsImV4cCI6MjA2ODg4ODY1M30.PpL9cqDfDHtgCIFtGQBqt95scRoY25q9NdeQ6Iv-boc';


export const supabase = createClient(URL, API_KEY);

