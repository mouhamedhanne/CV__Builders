import supabase from "@/lib/database";

export const signInUser = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;
    return data;
  } catch (error) {
    throw error;
  }
};

export const updateUserEmail = async (
  newEmail: string,
  {
    email,
    password,
  }: {
    email: string;
    password: string;
  }
) => {
  try {
    await signInUser({ email, password });
    const { data, error } = await supabase.auth.updateUser({
      email: newEmail,
    });

    if (error) throw error;
    return data;
  } catch (error) {
    throw error;
  }
};
