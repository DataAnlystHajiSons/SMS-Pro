document.addEventListener('DOMContentLoaded', () => {
    const supabaseUrl = 'https://mxktarizsqttwwzbqgld.supabase.co';
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im14a3Rhcml6c3F0dHd3emJxZ2xkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI2NDA3MTMsImV4cCI6MjA2ODIxNjcxM30.UKA9NjB8mlxYJjzaC0cMnPGREcEAf-NQ3AeRWNWeuP8';
    const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

    async function checkAuth() {
        const { data: { session }, error } = await supabase.auth.getSession();
        if (error || !session) {
            window.location.href = 'login.html';
            return Promise.reject('No session');
        }
        return session;
    }

    checkAuth();
});