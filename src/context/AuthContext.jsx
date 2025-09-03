import { createContext, useContext, useState, useEffect } from "react";
import { supabase } from "../supabaseClient";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null); // ✅ store just the user
  const [loading, setLoading] = useState(true);

  // ✅ Sign Up
  const signUp = async (email, password, full_name) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { full_name }, // store in user_metadata too
        // ✅ redirect after email confirmation (if enabled in Supabase settings)
        emailRedirectTo: window.location.origin,
      },
    });

    if (error) throw error;

    // Insert into profiles table if user exists
    if (data.user) {
      const { error: profileError } = await supabase
        .from("profiles")
        .insert([
          {
            id: data.user.id, // must match auth.users.id
            full_name,
            email,
          },
        ]);

      if (profileError) throw profileError;
    }

    setUser(data.user ?? null);
    return data;
  };

  // ✅ Sign In
  const signIn = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;

    setUser(data.user ?? null);
    return data;
  };

  // ✅ Sign Out
  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    setUser(null);
  };

  // ✅ Load initial session + listen for changes
  useEffect(() => {
  const getSession = async () => {
    const { data, error } = await supabase.auth.getSession();
    console.log("Initial session:", data);  // 👈 Debug log
    setUser(data.session?.user ?? null);
    setLoading(false);
  };

  getSession();

  const { data: listener } = supabase.auth.onAuthStateChange(
    (_event, session) => {
      console.log("Auth state changed:", session);  // 👈 Debug log
      setUser(session?.user ?? null);
    }
  );

  return () => {
    listener.subscription.unsubscribe();
  };
}, []);


  return (
  <AuthContext.Provider value={{ user, signUp, signIn, signOut }}>
    {!loading && children}
  </AuthContext.Provider>
);
};

// ✅ Hook for easy access
export const UserAuth = () => {
  return useContext(AuthContext);
};
