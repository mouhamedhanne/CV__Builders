import supabase from "@/lib/database";
import { useEffect, useState } from "react";

const useSession = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<AuthError | null>(null);

  useEffect(() => {
    const fetchSession = async () => {
      setLoading(true);
      try {
        const {
          data: { session },
          error,
        } = await supabase.auth.getSession();
        if (error) setError(error);
        setUser(session?.user || null);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchSession();
  }, []);

  const refreshSession = async () => {
    setLoading(true);
    try {
      const {
        data: { session },
        error,
      } = await supabase.auth.refreshSession();
      if (error) setError(error);
      setUser(session?.user || null);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  refreshSession();

  return {
    user,
    loading,
    error,
  };
};

export default useSession;

//<"idle" | "pending" | "error">
