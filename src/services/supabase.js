import { createClient } from "@supabase/supabase-js";
import "react-native-url-polyfill/auto";
const supabaseUrl = "https://kpglxniieryhzbmizfri.supabase.co";
const supabaseKey =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtwZ2x4bmlpZXJ5aHpibWl6ZnJpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODk3NDk3MDksImV4cCI6MjAwNTMyNTcwOX0.dAMxEm-ZINrF8kvV62QGfKhXkD6q05QSlVgOpJvNI7Q";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
