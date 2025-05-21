import regexLookbehindAvailable from "./utils/regexLookbehindAvailable";

const RESTRICTED_SYMBOLS = "☑️✓✔✅";

const MATCH_BEHIND = regexLookbehindAvailable ? "(?<=^|\\s)" : "";

const MENTION_NAMESPACE = "\\w+\\/";

const MENTION_BODY = "([\\dA-Za-z]\\w{2,25})";

export const Regex = {
  evmAddress: /^(0x)?[\da-f]{40}$/i,
  username: /^[\dA-Za-z]\w{2,25}$/g,
  hashtag: /(#\w*[A-Za-z]\w*)/g,
  // Match string like @lens/someone.
  mention: new RegExp(
    `${MATCH_BEHIND}@${MENTION_NAMESPACE}${MENTION_BODY}`,
    "g"
  ),
  // Match string like @someone.
  accountNameFilter: new RegExp(`[${RESTRICTED_SYMBOLS}]`, "gu"),
  accountNameValidator: new RegExp(`^[^${RESTRICTED_SYMBOLS}]+$`),
  // modified version of https://stackoverflow.com/a/6041965/961254 to support unicode international characters
  url: /\b(http|https):\/\/([\p{L}\p{N}_-]+(?:(?:\.[\p{L}\p{N}_-]+)+))([\p{L}\p{N}_.,@?^=%&:\/~+#-]*[\p{L}\p{N}_@?^=%&\/~+#-])/gu
};