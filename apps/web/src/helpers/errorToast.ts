import { toast } from "sonner";
import { Errors } from "@togi/data/errors";
const FORBIDDEN_ERROR =
  "Forbidden - Failed to generate source stamp: App rejected verification request:";

const errorToast = (error?: any) => {
  if (!error || error?.message?.includes("viem")) {
    return;
  }

  if (error?.message.includes(FORBIDDEN_ERROR)) {
    return toast.error(error?.message.replace(FORBIDDEN_ERROR, ""), {
      id: "error"
    });
  }

  if (error?.message.includes("Connector not connected")) {
    return toast.error("Connect or switch to the correct wallet!", {
      id: "connector-error"
    });
  }

  toast.error(
    error?.data?.message || error?.message || Errors.SomethingWentWrong,
    { id: "error" }
  );
};

export default errorToast;