import { toast } from "vue3-toastify";

export const ErrorMessage = (e: any) => {
  const error = JSON.parse(JSON.stringify(e));
  toast.error(
    error.code.replace("auth/", "").replaceAll("-", " ").toUpperCase()
  );
};
