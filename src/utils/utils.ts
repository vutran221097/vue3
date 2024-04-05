import { toast } from "vue3-toastify";

export const isEmptyObject = (obj: any) => {
  return Object.entries(obj).length === 0;
};

export const ErrorMessage = (e: any) => {
  const error = JSON.parse(JSON.stringify(e));
  if (isEmptyObject(error)) return;
  toast.error(
    error?.code?.replace("auth/", "")?.replaceAll("-", " ")?.toUpperCase()
  );
};
