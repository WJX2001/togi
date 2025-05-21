import { hydrateAccount } from "@/store/persisted/useAccountStore"
import { Access } from "@togi/data/features";
import { getAddress } from "viem";

const hasAccess = (feature: string): boolean => {
  const address = hydrateAccount()?.address

  if (!address) {
    return false
  }

  const accounts = Access[feature].map((account) => getAddress(account))
  return accounts.includes(getAddress(address))
}

export default hasAccess