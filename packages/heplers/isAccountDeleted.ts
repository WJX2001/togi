import { NULL_ADDRESS } from "@togi/data/constants";
import type { AccountFragment } from "@togi/indexer";

const isAccountDeleted = (account: AccountFragment): boolean => {
  if (account.owner === NULL_ADDRESS) {
    return true;
  }
  return false;
};

export default isAccountDeleted;
