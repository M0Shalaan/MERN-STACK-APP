import { useAuthContext } from "./useAuthContext";
export const useLogout = () => {
  const { dispach } = useAuthContext();
  const logout = () => {
    //   remove user from local storage
    localStorage.removeItem("user");

    // dispatch logout action
    dispach({ type: "LOGOUT" });
  };

  return { logout };
};
