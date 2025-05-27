import type { DocumentNode } from 'graphql';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  AccessToken: { input: any; output: any; }
  AlwaysTrue: { input: any; output: any; }
  BigDecimal: { input: any; output: any; }
  BigInt: { input: any; output: any; }
  BlockchainData: { input: any; output: any; }
  ChainId: { input: any; output: any; }
  Cursor: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  EvmAddress: { input: any; output: any; }
  FixedBytes32: { input: any; output: any; }
  GeneratedNotificationId: { input: any; output: any; }
  GeoUri: { input: any; output: any; }
  GrantId: { input: any; output: any; }
  IdToken: { input: any; output: any; }
  JSON: { input: any; output: any; }
  JsonString: { input: any; output: any; }
  LegacyProfileId: { input: any; output: any; }
  LegacyPublicationId: { input: any; output: any; }
  LegacyRefreshToken: { input: any; output: any; }
  Locale: { input: any; output: any; }
  MarketplaceMetadataAttributeValue: { input: any; output: any; }
  MetadataId: { input: any; output: any; }
  PostId: { input: any; output: any; }
  RefreshToken: { input: any; output: any; }
  RuleId: { input: any; output: any; }
  ServerAPIKey: { input: any; output: any; }
  Signature: { input: any; output: any; }
  Tag: { input: any; output: any; }
  TxHash: { input: any; output: any; }
  URI: { input: any; output: any; }
  URL: { input: any; output: any; }
  UUID: { input: any; output: any; }
  UsernameValue: { input: any; output: any; }
  Void: { input: any; output: any; }
};

export type AccessControlRequest = {
  address: Scalars['EvmAddress']['input'];
};

export type AccessControlResult = {
  __typename?: 'AccessControlResult';
  address: Scalars['EvmAddress']['output'];
  createdAt: Scalars['DateTime']['output'];
};

export type Account = {
  __typename?: 'Account';
  actions: Array<AccountAction>;
  address: Scalars['EvmAddress']['output'];
  createdAt: Scalars['DateTime']['output'];
  metadata?: Maybe<AccountMetadata>;
  operations?: Maybe<LoggedInAccountOperations>;
  owner: Scalars['EvmAddress']['output'];
  rules: AccountFollowRules;
  score: Scalars['Int']['output'];
  username?: Maybe<Username>;
};


export type AccountUsernameArgs = {
  request?: AccountUsernameOneOf;
};

export type AccountAction = TippingAccountAction | UnknownAccountAction;

export type AccountActionConfigInput = {
  unknown?: InputMaybe<UnknownActionConfigInput>;
};

export type AccountActionExecuteInput = {
  tipping?: InputMaybe<TippingAmountInput>;
  unknown?: InputMaybe<UnknownActionExecuteInput>;
};

export type AccountActionExecuted = TippingAccountActionExecuted | UnknownAccountActionExecuted;

export type AccountActionExecutedNotification = {
  __typename?: 'AccountActionExecutedNotification';
  actions: Array<AccountActionExecuted>;
  id: Scalars['GeneratedNotificationId']['output'];
};

export type AccountActionExecutedNotificationFilter = {
  account?: InputMaybe<Array<Scalars['EvmAddress']['input']>>;
  action?: InputMaybe<Array<Scalars['EvmAddress']['input']>>;
  actionType?: InputMaybe<Array<AccountActionType>>;
  app?: InputMaybe<Array<InputMaybe<Scalars['EvmAddress']['input']>>>;
  executingAccount?: InputMaybe<Array<Scalars['EvmAddress']['input']>>;
};

export type AccountActionFilter = {
  address?: InputMaybe<Scalars['EvmAddress']['input']>;
  tipping?: InputMaybe<Scalars['AlwaysTrue']['input']>;
};

export enum AccountActionType {
  Tipping = 'TIPPING',
  Unknown = 'UNKNOWN'
}

export type AccountAvailable = AccountManaged | AccountOwned;

export type AccountBalancesRequest = {
  includeNative?: Scalars['Boolean']['input'];
  tokens?: Array<Scalars['EvmAddress']['input']>;
};

export type AccountBlocked = {
  __typename?: 'AccountBlocked';
  account: Account;
  blockedAt: Scalars['DateTime']['output'];
};

export type AccountBlockedNotificationFilter = {
  app?: InputMaybe<Array<InputMaybe<Scalars['EvmAddress']['input']>>>;
  graph?: InputMaybe<Array<Scalars['EvmAddress']['input']>>;
};

export type AccountBlockedResponse = {
  __typename?: 'AccountBlockedResponse';
  hash: Scalars['TxHash']['output'];
};

export type AccountCreatedNotificationFilter = {
  app?: InputMaybe<Array<InputMaybe<Scalars['EvmAddress']['input']>>>;
  graph?: InputMaybe<Array<Scalars['EvmAddress']['input']>>;
};

export type AccountExecutedActions = {
  __typename?: 'AccountExecutedActions';
  account: Account;
  firstAt: Scalars['DateTime']['output'];
  lastAt: Scalars['DateTime']['output'];
  total: Scalars['Int']['output'];
};

export type AccountFeedsStats = {
  __typename?: 'AccountFeedsStats';
  collects: Scalars['Int']['output'];
  comments: Scalars['Int']['output'];
  posts: Scalars['Int']['output'];
  quotes: Scalars['Int']['output'];
  reacted: Scalars['Int']['output'];
  reactions: Scalars['Int']['output'];
  reposts: Scalars['Int']['output'];
  tips: Scalars['Int']['output'];
};

export type AccountFeedsStatsFilter = {
  feeds?: InputMaybe<Array<FeedOneOf>>;
};

export type AccountFeedsStatsRequest = {
  account: Scalars['EvmAddress']['input'];
  filter?: InputMaybe<AccountFeedsStatsFilter>;
};

export type AccountFollowOperationValidationFailed = {
  __typename?: 'AccountFollowOperationValidationFailed';
  reason: Scalars['String']['output'];
  unsatisfiedRules?: Maybe<AccountFollowUnsatisfiedRules>;
};

export type AccountFollowOperationValidationOutcome = AccountFollowOperationValidationFailed | AccountFollowOperationValidationPassed | AccountFollowOperationValidationUnknown;

export type AccountFollowOperationValidationPassed = {
  __typename?: 'AccountFollowOperationValidationPassed';
  passed: Scalars['AlwaysTrue']['output'];
};

export type AccountFollowOperationValidationRule = AccountFollowRule | GraphRule;

export type AccountFollowOperationValidationUnknown = {
  __typename?: 'AccountFollowOperationValidationUnknown';
  extraChecksRequired: Array<AccountFollowOperationValidationRule>;
};

export type AccountFollowRule = {
  __typename?: 'AccountFollowRule';
  address: Scalars['EvmAddress']['output'];
  config: Array<AnyKeyValue>;
  id: Scalars['RuleId']['output'];
  type: AccountFollowRuleType;
};

export type AccountFollowRuleConfig = {
  simplePaymentRule?: InputMaybe<SimplePaymentFollowRuleConfig>;
  tokenGatedRule?: InputMaybe<TokenGatedFollowRuleConfig>;
  unknownRule?: InputMaybe<UnknownAccountRuleConfig>;
};

export enum AccountFollowRuleType {
  SimplePayment = 'SIMPLE_PAYMENT',
  TokenGated = 'TOKEN_GATED',
  Unknown = 'UNKNOWN'
}

export enum AccountFollowRuleUnsatisfiedReason {
  FollowSimplePaymentNotEnoughBalance = 'FOLLOW_SIMPLE_PAYMENT_NOT_ENOUGH_BALANCE',
  FollowTokenGatedNotATokenHolder = 'FOLLOW_TOKEN_GATED_NOT_A_TOKEN_HOLDER',
  GraphAccountBlocked = 'GRAPH_ACCOUNT_BLOCKED',
  GraphGroupGatedNotAMember = 'GRAPH_GROUP_GATED_NOT_A_MEMBER',
  GraphTokenGatedNotATokenHolder = 'GRAPH_TOKEN_GATED_NOT_A_TOKEN_HOLDER'
}

export type AccountFollowRules = {
  __typename?: 'AccountFollowRules';
  anyOf: Array<AccountFollowRule>;
  required: Array<AccountFollowRule>;
};

export type AccountFollowRulesProcessingParams = {
  simplePaymentRule?: InputMaybe<SimplePaymentRuleProcessingParamsInput>;
  unknownRule?: InputMaybe<UnknownRuleProcessingParams>;
};

export type AccountFollowUnsatisfiedRule = {
  __typename?: 'AccountFollowUnsatisfiedRule';
  config: Array<AnyKeyValue>;
  message: Scalars['String']['output'];
  reason: AccountFollowRuleUnsatisfiedReason;
  rule: Scalars['EvmAddress']['output'];
};

export type AccountFollowUnsatisfiedRules = {
  __typename?: 'AccountFollowUnsatisfiedRules';
  anyOf: Array<AccountFollowUnsatisfiedRule>;
  required: Array<AccountFollowUnsatisfiedRule>;
};

export type AccountFollowedNotificationFilter = {
  app?: InputMaybe<Array<InputMaybe<Scalars['EvmAddress']['input']>>>;
  followedAccount?: InputMaybe<Array<Scalars['EvmAddress']['input']>>;
  follower?: InputMaybe<Array<Scalars['EvmAddress']['input']>>;
  graph?: InputMaybe<Array<Scalars['EvmAddress']['input']>>;
};

export type AccountGraphsFollowStats = {
  __typename?: 'AccountGraphsFollowStats';
  followers: Scalars['Int']['output'];
  following: Scalars['Int']['output'];
};

export type AccountGraphsStatsFilter = {
  graphs?: InputMaybe<Array<GraphOneOf>>;
};

export type AccountGraphsStatsRequest = {
  account: Scalars['EvmAddress']['input'];
  filter?: InputMaybe<AccountGraphsStatsFilter>;
};

export type AccountManaged = {
  __typename?: 'AccountManaged';
  account: Account;
  addedAt: Scalars['DateTime']['output'];
  permissions: AccountManagerPermissions;
};

export type AccountManager = {
  __typename?: 'AccountManager';
  addedAt: Scalars['DateTime']['output'];
  isLensManager: Scalars['Boolean']['output'];
  manager: Scalars['EvmAddress']['output'];
  permissions: AccountManagerPermissions;
};

export type AccountManagerAddedNotificationFilter = {
  managedAccount?: InputMaybe<Array<Scalars['EvmAddress']['input']>>;
  manager?: InputMaybe<Array<Scalars['EvmAddress']['input']>>;
};

export type AccountManagerChallengeRequest = {
  account: Scalars['EvmAddress']['input'];
  app?: Scalars['EvmAddress']['input'];
  manager: Scalars['EvmAddress']['input'];
};

export type AccountManagerPermissions = {
  __typename?: 'AccountManagerPermissions';
  canExecuteTransactions: Scalars['Boolean']['output'];
  canSetMetadataUri: Scalars['Boolean']['output'];
  canTransferNative: Scalars['Boolean']['output'];
  canTransferTokens: Scalars['Boolean']['output'];
};

export type AccountManagerPermissionsInput = {
  canExecuteTransactions: Scalars['Boolean']['input'];
  canSetMetadataUri: Scalars['Boolean']['input'];
  canTransferNative: Scalars['Boolean']['input'];
  canTransferTokens: Scalars['Boolean']['input'];
};

export type AccountManagerRemovedNotificationFilter = {
  managedAccount?: InputMaybe<Array<Scalars['EvmAddress']['input']>>;
  manager?: InputMaybe<Array<Scalars['EvmAddress']['input']>>;
};

export type AccountManagerUpdatedNotificationFilter = {
  managedAccount?: InputMaybe<Array<Scalars['EvmAddress']['input']>>;
  manager?: InputMaybe<Array<Scalars['EvmAddress']['input']>>;
};

export type AccountManagersRequest = {
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
  pageSize?: PageSize;
};

export type AccountMention = {
  __typename?: 'AccountMention';
  account: Scalars['EvmAddress']['output'];
  namespace: Scalars['EvmAddress']['output'];
  replace: MentionReplace;
};

export type AccountMentionedNotificationFilter = {
  app?: InputMaybe<Array<InputMaybe<Scalars['EvmAddress']['input']>>>;
  author?: InputMaybe<Array<Scalars['EvmAddress']['input']>>;
  feed?: InputMaybe<Array<Scalars['EvmAddress']['input']>>;
  mentionedAccount?: InputMaybe<Array<Scalars['EvmAddress']['input']>>;
  mentionedUsername?: InputMaybe<Array<Scalars['UsernameValue']['input']>>;
};

export type AccountMetadata = {
  __typename?: 'AccountMetadata';
  attributes: Array<MetadataAttribute>;
  bio?: Maybe<Scalars['String']['output']>;
  coverPicture?: Maybe<Scalars['URI']['output']>;
  id: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  picture?: Maybe<Scalars['URI']['output']>;
};


export type AccountMetadataCoverPictureArgs = {
  request?: MediaImageRequest;
};


export type AccountMetadataPictureArgs = {
  request?: MediaImageRequest;
};

export type AccountOwned = {
  __typename?: 'AccountOwned';
  account: Account;
  addedAt: Scalars['DateTime']['output'];
};

export type AccountOwnerChallengeRequest = {
  account: Scalars['EvmAddress']['input'];
  app?: Scalars['EvmAddress']['input'];
  owner: Scalars['EvmAddress']['input'];
};

export type AccountOwnershipTransferredNotificationFilter = {
  account?: InputMaybe<Array<Scalars['EvmAddress']['input']>>;
};

export type AccountPostReaction = {
  __typename?: 'AccountPostReaction';
  account: Account;
  reactions: Array<PostReaction>;
};

export type AccountRecommendationsRequest = {
  account: Scalars['EvmAddress']['input'];
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
  pageSize?: PageSize;
  shuffle?: Scalars['Boolean']['input'];
};

export enum AccountReportReason {
  Impersonation = 'IMPERSONATION',
  Other = 'OTHER',
  RepetitiveSpam = 'REPETITIVE_SPAM'
}

export type AccountReportedNotificationFilter = {
  app?: InputMaybe<Array<InputMaybe<Scalars['EvmAddress']['input']>>>;
  reportedAccount?: InputMaybe<Array<Scalars['EvmAddress']['input']>>;
  reporter?: InputMaybe<Array<Scalars['EvmAddress']['input']>>;
};

export type AccountRequest = {
  address?: InputMaybe<Scalars['EvmAddress']['input']>;
  legacyProfileId?: InputMaybe<Scalars['LegacyProfileId']['input']>;
  txHash?: InputMaybe<Scalars['TxHash']['input']>;
  username?: InputMaybe<UsernameInput>;
};

export type AccountRulesConfigInput = {
  anyOf?: Array<AccountFollowRuleConfig>;
  required?: Array<AccountFollowRuleConfig>;
};

export type AccountScoreFilter = {
  atLeast?: InputMaybe<Scalars['Int']['input']>;
  lessThan?: InputMaybe<Scalars['Int']['input']>;
};

export type AccountStats = {
  __typename?: 'AccountStats';
  feedStats: AccountFeedsStats;
  graphFollowStats: AccountGraphsFollowStats;
};

export type AccountStatsRequest = {
  account?: InputMaybe<Scalars['EvmAddress']['input']>;
  forFeeds?: Array<Scalars['EvmAddress']['input']>;
  forGraphs?: Array<Scalars['EvmAddress']['input']>;
  username?: InputMaybe<UsernameInput>;
};

export type AccountUnblockedNotificationFilter = {
  app?: InputMaybe<Array<InputMaybe<Scalars['EvmAddress']['input']>>>;
  graph?: InputMaybe<Array<Scalars['EvmAddress']['input']>>;
};

export type AccountUnblockedResponse = {
  __typename?: 'AccountUnblockedResponse';
  hash: Scalars['TxHash']['output'];
};

export type AccountUnfollowedNotificationFilter = {
  app?: InputMaybe<Array<InputMaybe<Scalars['EvmAddress']['input']>>>;
  graph?: InputMaybe<Array<Scalars['EvmAddress']['input']>>;
  unfollowedAccount?: InputMaybe<Array<Scalars['EvmAddress']['input']>>;
  unfollower?: InputMaybe<Array<Scalars['EvmAddress']['input']>>;
};

export type AccountUsernameAssignedNotificationFilter = {
  account?: InputMaybe<Array<Scalars['EvmAddress']['input']>>;
  namespace?: InputMaybe<Array<Scalars['EvmAddress']['input']>>;
};

export type AccountUsernameCreatedNotificationFilter = {
  account?: InputMaybe<Array<Scalars['EvmAddress']['input']>>;
  namespace?: InputMaybe<Array<Scalars['EvmAddress']['input']>>;
};

export type AccountUsernameOneOf = {
  autoResolve?: InputMaybe<Scalars['AlwaysTrue']['input']>;
  namespace?: InputMaybe<Scalars['EvmAddress']['input']>;
};

export type AccountUsernameUnassignedNotificationFilter = {
  namespace?: InputMaybe<Array<Scalars['EvmAddress']['input']>>;
  previousAccount?: InputMaybe<Array<Scalars['EvmAddress']['input']>>;
};

export type AccountsAvailableRequest = {
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
  hiddenFilter?: ManagedAccountsVisibility;
  includeOwned?: Scalars['Boolean']['input'];
  managedBy: Scalars['EvmAddress']['input'];
  pageSize?: PageSize;
};

export type AccountsBlockedRequest = {
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
  pageSize?: PageSize;
};

export type AccountsBulkRequest = {
  addresses?: InputMaybe<Array<Scalars['EvmAddress']['input']>>;
  legacyProfileIds?: InputMaybe<Array<Scalars['LegacyProfileId']['input']>>;
  ownedBy?: InputMaybe<Array<Scalars['EvmAddress']['input']>>;
  usernames?: InputMaybe<Array<UsernameInput>>;
};

export type AccountsFilter = {
  searchBy?: InputMaybe<UsernameSearchInput>;
};

export enum AccountsOrderBy {
  AccountScore = 'ACCOUNT_SCORE',
  Alphabetical = 'ALPHABETICAL',
  BestMatch = 'BEST_MATCH'
}

export type AccountsRequest = {
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<AccountsFilter>;
  orderBy?: AccountsOrderBy;
  pageSize?: PageSize;
};

export type ActionMetadata = {
  __typename?: 'ActionMetadata';
  authors: Array<Scalars['String']['output']>;
  configureParams: Array<KeyValuePair>;
  description: Scalars['String']['output'];
  executeParams: Array<KeyValuePair>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  setDisabledParams: Array<KeyValuePair>;
  source: Scalars['URI']['output'];
};

export type AddAccountManagerRequest = {
  address: Scalars['EvmAddress']['input'];
  permissions: AccountManagerPermissionsInput;
};

export type AddAccountManagerResult = SelfFundedTransactionRequest | SponsoredTransactionRequest | TransactionWillFail;

export type AddAdminsRequest = {
  address: Scalars['EvmAddress']['input'];
  admins: Array<Scalars['EvmAddress']['input']>;
};

export type AddAdminsResult = SelfFundedTransactionRequest | SponsoredTransactionRequest | TransactionWillFail;

export type AddAppAuthorizationEndpointRequest = {
  app: Scalars['EvmAddress']['input'];
  bearerToken?: InputMaybe<Scalars['String']['input']>;
  endpoint: Scalars['URL']['input'];
};

export type AddAppFeedsRequest = {
  app: Scalars['EvmAddress']['input'];
  feeds: Array<Scalars['EvmAddress']['input']>;
};

export type AddAppFeedsResult = SelfFundedTransactionRequest | SponsoredTransactionRequest | TransactionWillFail;

export type AddAppGroupsRequest = {
  app: Scalars['EvmAddress']['input'];
  groups: Array<Scalars['EvmAddress']['input']>;
};

export type AddAppGroupsResult = SelfFundedTransactionRequest | SponsoredTransactionRequest | TransactionWillFail;

export type AddAppSignersRequest = {
  app: Scalars['EvmAddress']['input'];
  signers: Array<Scalars['EvmAddress']['input']>;
};

export type AddAppSignersResult = SelfFundedTransactionRequest | SponsoredTransactionRequest | TransactionWillFail;

export type AddReactionFailure = {
  __typename?: 'AddReactionFailure';
  reason: Scalars['String']['output'];
};

export type AddReactionRequest = {
  post: Scalars['PostId']['input'];
  reaction: PostReactionType;
};

export type AddReactionResponse = {
  __typename?: 'AddReactionResponse';
  success: Scalars['Boolean']['output'];
};

export type AddReactionResult = AddReactionFailure | AddReactionResponse;

export type AddressKeyValue = {
  __typename?: 'AddressKeyValue';
  address: Scalars['EvmAddress']['output'];
  key: Scalars['String']['output'];
};

export type Admin = {
  __typename?: 'Admin';
  account: Account;
  addedAt: Scalars['DateTime']['output'];
};

export type AdminsForFilterRequest = {
  searchBy?: InputMaybe<UsernameSearchInput>;
};

export enum AdminsForOrderBy {
  LatestFirst = 'LATEST_FIRST',
  OldestFirst = 'OLDEST_FIRST'
}

export type AdminsForRequest = {
  address: Scalars['EvmAddress']['input'];
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<AdminsForFilterRequest>;
  orderBy?: AdminsForOrderBy;
  pageSize?: PageSize;
};

export type AmountInput = {
  currency: Scalars['EvmAddress']['input'];
  value: Scalars['BigDecimal']['input'];
};

export type AnyAccountBalance = Erc20Amount | Erc20BalanceError | NativeAmount | NativeBalanceError;

export type AnyKeyValue = AddressKeyValue | ArrayKeyValue | BigDecimalKeyValue | BooleanKeyValue | DictionaryKeyValue | IntKeyValue | IntNullableKeyValue | RawKeyValue | StringKeyValue;

export type AnyKeyValueInput = {
  raw?: InputMaybe<RawKeyValueInput>;
};

export type AnyMedia = MediaAudio | MediaImage | MediaVideo;

export type AnyPost = Post | Repost;

export type App = {
  __typename?: 'App';
  address: Scalars['EvmAddress']['output'];
  createdAt: Scalars['DateTime']['output'];
  defaultFeedAddress?: Maybe<Scalars['EvmAddress']['output']>;
  graphAddress?: Maybe<Scalars['EvmAddress']['output']>;
  hasAuthorizationEndpoint: Scalars['Boolean']['output'];
  metadata?: Maybe<AppMetadata>;
  namespaceAddress?: Maybe<Scalars['EvmAddress']['output']>;
  owner: Scalars['EvmAddress']['output'];
  sponsorshipAddress?: Maybe<Scalars['EvmAddress']['output']>;
  treasuryAddress?: Maybe<Scalars['EvmAddress']['output']>;
  verificationEnabled: Scalars['Boolean']['output'];
};

export type AppFeed = {
  __typename?: 'AppFeed';
  feed: Scalars['EvmAddress']['output'];
  timestamp: Scalars['DateTime']['output'];
};

export type AppFeedsRequest = {
  app: Scalars['EvmAddress']['input'];
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
  pageSize?: PageSize;
};

export type AppGroupsRequest = {
  app: Scalars['EvmAddress']['input'];
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
  pageSize?: PageSize;
};

export type AppMetadata = {
  __typename?: 'AppMetadata';
  description?: Maybe<Scalars['String']['output']>;
  developer: Scalars['String']['output'];
  logo?: Maybe<Scalars['URI']['output']>;
  name: Scalars['String']['output'];
  platforms: Array<AppPlatform>;
  privacyPolicy?: Maybe<Scalars['URI']['output']>;
  tagline?: Maybe<Scalars['String']['output']>;
  termsOfService?: Maybe<Scalars['URI']['output']>;
  url: Scalars['URI']['output'];
};


export type AppMetadataLogoArgs = {
  request?: MediaImageRequest;
};

export enum AppPlatform {
  Android = 'ANDROID',
  Ios = 'IOS',
  Web = 'WEB'
}

export type AppRequest = {
  app?: InputMaybe<Scalars['EvmAddress']['input']>;
  txHash?: InputMaybe<Scalars['TxHash']['input']>;
};

export type AppServerApiKeyRequest = {
  app: Scalars['EvmAddress']['input'];
};

export type AppSigner = {
  __typename?: 'AppSigner';
  signer: Scalars['EvmAddress']['output'];
  timestamp: Scalars['DateTime']['output'];
};

export type AppSignersFilterRequest = {
  searchQuery?: InputMaybe<Scalars['String']['input']>;
};

export enum AppSignersOrderBy {
  LatestFirst = 'LATEST_FIRST',
  OldestFirst = 'OLDEST_FIRST'
}

export type AppSignersRequest = {
  app: Scalars['EvmAddress']['input'];
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<AppSignersFilterRequest>;
  orderBy?: AppSignersOrderBy;
  pageSize?: PageSize;
};

export type AppUser = {
  __typename?: 'AppUser';
  account: Account;
  firstLoginOn: Scalars['DateTime']['output'];
  lastActiveOn: Scalars['DateTime']['output'];
};

export type AppUsersFilterRequest = {
  searchBy?: InputMaybe<UsernameSearchInput>;
};

export enum AppUsersOrderBy {
  AccountScore = 'ACCOUNT_SCORE',
  Alphabetical = 'ALPHABETICAL',
  BestMatch = 'BEST_MATCH'
}

export type AppUsersRequest = {
  app: Scalars['EvmAddress']['input'];
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<AppUsersFilterRequest>;
  orderBy?: AppUsersOrderBy;
  pageSize?: PageSize;
};

export type ApproveGroupMembershipRequest = {
  accounts: Array<Scalars['EvmAddress']['input']>;
  group: Scalars['EvmAddress']['input'];
  rulesProcessingParams?: InputMaybe<Array<GroupRulesProcessingParams>>;
};

export type ApproveGroupMembershipRequestsResponse = {
  __typename?: 'ApproveGroupMembershipRequestsResponse';
  hash: Scalars['TxHash']['output'];
};

export type ApproveGroupMembershipResult = ApproveGroupMembershipRequestsResponse | GroupOperationValidationFailed | SelfFundedTransactionRequest | SponsoredTransactionRequest | TransactionWillFail;

export type AppsFilter = {
  linkedToFeed?: InputMaybe<Scalars['EvmAddress']['input']>;
  linkedToGraph?: InputMaybe<Scalars['EvmAddress']['input']>;
  linkedToSponsorship?: InputMaybe<Scalars['EvmAddress']['input']>;
  managedBy?: InputMaybe<ManagedBy>;
  searchQuery?: InputMaybe<Scalars['String']['input']>;
};

export enum AppsOrderBy {
  Alphabetical = 'ALPHABETICAL',
  LatestFirst = 'LATEST_FIRST',
  OldestFirst = 'OLDEST_FIRST'
}

export type AppsRequest = {
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<AppsFilter>;
  orderBy?: AppsOrderBy;
  pageSize?: PageSize;
};

export type AppsResult = {
  __typename?: 'AppsResult';
  items: Array<App>;
  pageInfo: PaginatedResultInfo;
};

export type ArrayData = AddressKeyValue | BigDecimalKeyValue | BooleanKeyValue | DictionaryKeyValue | IntKeyValue | IntNullableKeyValue | RawKeyValue | StringKeyValue;

export type ArrayKeyValue = {
  __typename?: 'ArrayKeyValue';
  array: Array<ArrayData>;
  key: Scalars['String']['output'];
};

export type ArticleMetadata = {
  __typename?: 'ArticleMetadata';
  attachments: Array<AnyMedia>;
  attributes: Array<MetadataAttribute>;
  content: Scalars['String']['output'];
  contentWarning?: Maybe<ContentWarning>;
  id: Scalars['MetadataId']['output'];
  locale: Scalars['Locale']['output'];
  mainContentFocus: MainContentFocus;
  tags?: Maybe<Array<Scalars['Tag']['output']>>;
  title?: Maybe<Scalars['String']['output']>;
};

export type AssignUsernameResponse = {
  __typename?: 'AssignUsernameResponse';
  hash: Scalars['TxHash']['output'];
};

export type AssignUsernameToAccountRequest = {
  assignRulesProcessingParams?: InputMaybe<Array<NamespaceRulesProcessingParams>>;
  unassignAccountRulesProcessingParams?: InputMaybe<Array<NamespaceRulesProcessingParams>>;
  unassignUsernameRulesProcessingParams?: InputMaybe<Array<NamespaceRulesProcessingParams>>;
  username: UsernameInput;
};

export type AssignUsernameToAccountResult = AssignUsernameResponse | NamespaceOperationValidationFailed | SelfFundedTransactionRequest | SponsoredTransactionRequest | TransactionWillFail;

export type AudioMetadata = {
  __typename?: 'AudioMetadata';
  attachments: Array<AnyMedia>;
  attributes: Array<MetadataAttribute>;
  audio: MediaAudio;
  content: Scalars['String']['output'];
  contentWarning?: Maybe<ContentWarning>;
  id: Scalars['MetadataId']['output'];
  locale: Scalars['Locale']['output'];
  mainContentFocus: MainContentFocus;
  tags?: Maybe<Array<Scalars['Tag']['output']>>;
  title?: Maybe<Scalars['String']['output']>;
};

export type AuthenticatedSession = {
  __typename?: 'AuthenticatedSession';
  app: Scalars['EvmAddress']['output'];
  authenticationId: Scalars['UUID']['output'];
  browser?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  device?: Maybe<Scalars['String']['output']>;
  expiresAt: Scalars['DateTime']['output'];
  origin?: Maybe<Scalars['URL']['output']>;
  os?: Maybe<Scalars['String']['output']>;
  signer: Scalars['EvmAddress']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type AuthenticatedSessionsRequest = {
  app?: InputMaybe<Scalars['EvmAddress']['input']>;
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
  pageSize?: PageSize;
};

export type AuthenticationChallenge = {
  __typename?: 'AuthenticationChallenge';
  id: Scalars['UUID']['output'];
  text: Scalars['String']['output'];
};

export type AuthenticationResult = AuthenticationTokens | ExpiredChallengeError | ForbiddenError | WrongSignerError;

export type AuthenticationTokens = {
  __typename?: 'AuthenticationTokens';
  accessToken: Scalars['AccessToken']['output'];
  idToken: Scalars['IdToken']['output'];
  refreshToken: Scalars['RefreshToken']['output'];
};

export type BanGroupAccountsRequest = {
  accounts: Array<Scalars['EvmAddress']['input']>;
  group: Scalars['EvmAddress']['input'];
};

export type BanGroupAccountsResponse = {
  __typename?: 'BanGroupAccountsResponse';
  hash: Scalars['TxHash']['output'];
};

export type BanGroupAccountsResult = BanGroupAccountsResponse | SelfFundedTransactionRequest | SponsoredTransactionRequest | TransactionWillFail;

export type BigDecimalKeyValue = {
  __typename?: 'BigDecimalKeyValue';
  bigDecimal: Scalars['BigDecimal']['output'];
  key: Scalars['String']['output'];
};

export type BlockRequest = {
  account: Scalars['EvmAddress']['input'];
};

export type BlockResult = AccountBlockedResponse | SelfFundedTransactionRequest | SponsoredTransactionRequest | TransactionWillFail;

export type BookmarkPostRequest = {
  post: Scalars['PostId']['input'];
};

export type BooleanKeyValue = {
  __typename?: 'BooleanKeyValue';
  boolean: Scalars['Boolean']['output'];
  key: Scalars['String']['output'];
};

export type BooleanValue = {
  __typename?: 'BooleanValue';
  onChain: Scalars['Boolean']['output'];
  optimistic: Scalars['Boolean']['output'];
};

export type BuilderChallengeRequest = {
  address: Scalars['EvmAddress']['input'];
};

export type CanCreateUsernameResult = NamespaceOperationValidationFailed | NamespaceOperationValidationPassed | NamespaceOperationValidationUnknown | UsernameTaken;

export type CanFollowRequest = {
  graph: Scalars['EvmAddress']['input'];
};

export type CanUnfollowRequest = {
  graph: Scalars['EvmAddress']['input'];
};

export type CancelGroupMembershipRequestRequest = {
  group: Scalars['EvmAddress']['input'];
};

export type CancelGroupMembershipRequestResponse = {
  __typename?: 'CancelGroupMembershipRequestResponse';
  hash: Scalars['TxHash']['output'];
};

export type CancelGroupMembershipRequestResult = CancelGroupMembershipRequestResponse | SelfFundedTransactionRequest | SponsoredTransactionRequest | TransactionWillFail;

export type ChallengeRequest = {
  accountManager?: InputMaybe<AccountManagerChallengeRequest>;
  accountOwner?: InputMaybe<AccountOwnerChallengeRequest>;
  builder?: InputMaybe<BuilderChallengeRequest>;
  onboardingUser?: InputMaybe<OnboardingUserChallengeRequest>;
};

export type CheckingInMetadata = {
  __typename?: 'CheckingInMetadata';
  address?: Maybe<PhysicalAddress>;
  attachments: Array<AnyMedia>;
  attributes: Array<MetadataAttribute>;
  content: Scalars['String']['output'];
  contentWarning?: Maybe<ContentWarning>;
  id: Scalars['MetadataId']['output'];
  locale: Scalars['Locale']['output'];
  location: Scalars['String']['output'];
  mainContentFocus: MainContentFocus;
  position?: Maybe<Scalars['GeoUri']['output']>;
  tags?: Maybe<Array<Scalars['Tag']['output']>>;
};

export type CollectedBy = {
  account: Scalars['EvmAddress']['input'];
};

export type CommentNotification = {
  __typename?: 'CommentNotification';
  comment: Post;
  id: Scalars['GeneratedNotificationId']['output'];
};

export type ConfigureAccountActionRequest = {
  action: AccountActionConfigInput;
};

export type ConfigureAccountActionResponse = {
  __typename?: 'ConfigureAccountActionResponse';
  hash: Scalars['TxHash']['output'];
};

export type ConfigureAccountActionResult = ConfigureAccountActionResponse | SelfFundedTransactionRequest | SponsoredTransactionRequest | TransactionWillFail;

export type ConfigurePostActionRequest = {
  params: PostActionConfigInput;
  post: Scalars['PostId']['input'];
};

export type ConfigurePostActionResponse = {
  __typename?: 'ConfigurePostActionResponse';
  hash: Scalars['TxHash']['output'];
};

export type ConfigurePostActionResult = ConfigurePostActionResponse | SelfFundedTransactionRequest | SponsoredTransactionRequest | TransactionWillFail;

export enum ContentWarning {
  Nsfw = 'NSFW',
  Sensitive = 'SENSITIVE',
  Spoiler = 'SPOILER'
}

export type CreateAccountResponse = {
  __typename?: 'CreateAccountResponse';
  hash: Scalars['TxHash']['output'];
};

export type CreateAccountWithUsernameRequest = {
  accountManager?: InputMaybe<Array<Scalars['EvmAddress']['input']>>;
  assignUsernameRuleProcessingParams?: InputMaybe<Array<NamespaceRulesProcessingParams>>;
  createUsernameRuleProcessingParams?: InputMaybe<Array<NamespaceRulesProcessingParams>>;
  enableSignless?: Scalars['Boolean']['input'];
  metadataUri: Scalars['URI']['input'];
  owner?: InputMaybe<Scalars['EvmAddress']['input']>;
  username: UsernameInput;
};

export type CreateAccountWithUsernameResult = CreateAccountResponse | NamespaceOperationValidationFailed | SelfFundedTransactionRequest | SponsoredTransactionRequest | TransactionWillFail | UsernameTaken;

export type CreateAppRequest = {
  admins?: InputMaybe<Array<Scalars['EvmAddress']['input']>>;
  defaultFeed: FeedChoiceOneOf;
  feeds?: InputMaybe<Array<Scalars['EvmAddress']['input']>>;
  graph: GraphChoiceOneOf;
  groups?: InputMaybe<Array<Scalars['EvmAddress']['input']>>;
  metadataUri?: InputMaybe<Scalars['URI']['input']>;
  namespace: UsernameNamespaceChoiceOneOf;
  signers?: InputMaybe<Array<Scalars['EvmAddress']['input']>>;
  sponsorship?: InputMaybe<Scalars['EvmAddress']['input']>;
  treasury?: InputMaybe<Scalars['EvmAddress']['input']>;
  verification?: Scalars['Boolean']['input'];
};

export type CreateAppResponse = {
  __typename?: 'CreateAppResponse';
  hash: Scalars['TxHash']['output'];
};

export type CreateAppResult = CreateAppResponse | SelfFundedTransactionRequest | TransactionWillFail;

export type CreateFeedRequest = {
  admins?: InputMaybe<Array<Scalars['EvmAddress']['input']>>;
  metadataUri?: InputMaybe<Scalars['URI']['input']>;
  rules?: InputMaybe<FeedRulesConfigInput>;
};

export type CreateFeedResponse = {
  __typename?: 'CreateFeedResponse';
  hash: Scalars['TxHash']['output'];
};

export type CreateFeedResult = CreateFeedResponse | SelfFundedTransactionRequest | TransactionWillFail;

export type CreateFollowRequest = {
  account: Scalars['EvmAddress']['input'];
  followRuleProcessingParams?: InputMaybe<Array<AccountFollowRulesProcessingParams>>;
  graph?: Scalars['EvmAddress']['input'];
  graphRulesProcessingParams?: InputMaybe<Array<GraphRulesProcessingParams>>;
};

export type CreateFrameEip712TypedData = {
  __typename?: 'CreateFrameEIP712TypedData';
  domain: Eip712TypedDataDomain;
  types: CreateFrameEip712TypedDataTypes;
  value: CreateFrameEip712TypedDataValue;
};

export type CreateFrameEip712TypedDataInput = {
  domain: Eip712TypedDataDomainInput;
  types: CreateFrameEip712TypedDataTypesInput;
  value: FrameEip712Request;
};

export type CreateFrameEip712TypedDataTypes = {
  __typename?: 'CreateFrameEIP712TypedDataTypes';
  frameData: Array<Eip712TypedDataField>;
};

export type CreateFrameEip712TypedDataTypesInput = {
  frameData: Array<Eip712TypedDataFieldInput>;
};

export type CreateFrameEip712TypedDataValue = {
  __typename?: 'CreateFrameEIP712TypedDataValue';
  account: Scalars['EvmAddress']['output'];
  app: Scalars['EvmAddress']['output'];
  buttonIndex: Scalars['Int']['output'];
  deadline: Scalars['Int']['output'];
  inputText: Scalars['String']['output'];
  postId: Scalars['PostId']['output'];
  specVersion: Scalars['String']['output'];
  state: Scalars['String']['output'];
  transactionId: Scalars['String']['output'];
  url: Scalars['URI']['output'];
};

export type CreateGraphRequest = {
  admins?: InputMaybe<Array<Scalars['EvmAddress']['input']>>;
  metadataUri?: InputMaybe<Scalars['URI']['input']>;
  rules?: InputMaybe<GraphRulesConfigInput>;
};

export type CreateGraphResponse = {
  __typename?: 'CreateGraphResponse';
  hash: Scalars['TxHash']['output'];
};

export type CreateGraphResult = CreateGraphResponse | SelfFundedTransactionRequest | TransactionWillFail;

export type CreateGroupRequest = {
  admins?: InputMaybe<Array<Scalars['EvmAddress']['input']>>;
  feed?: InputMaybe<GroupFeedParams>;
  metadataUri?: InputMaybe<Scalars['URI']['input']>;
  owner?: InputMaybe<Scalars['EvmAddress']['input']>;
  rules?: InputMaybe<GroupRulesConfigInput>;
};

export type CreateGroupResponse = {
  __typename?: 'CreateGroupResponse';
  hash: Scalars['TxHash']['output'];
};

export type CreateGroupResult = CreateGroupResponse | SelfFundedTransactionRequest | SponsoredTransactionRequest | TransactionWillFail;

export type CreateNamespaceResponse = {
  __typename?: 'CreateNamespaceResponse';
  hash: Scalars['TxHash']['output'];
};

export type CreatePostRequest = {
  actions?: InputMaybe<Array<PostActionConfigInput>>;
  commentOn?: InputMaybe<ReferencingPostInput>;
  contentUri: Scalars['URI']['input'];
  feed?: InputMaybe<Scalars['EvmAddress']['input']>;
  feedRulesProcessingParams?: InputMaybe<Array<FeedRulesProcessingParams>>;
  quoteOf?: InputMaybe<ReferencingPostInput>;
  rules?: InputMaybe<PostRulesConfigInput>;
};

export type CreateRepostRequest = {
  feedRulesProcessingParams?: InputMaybe<Array<FeedRulesProcessingParams>>;
  post: Scalars['PostId']['input'];
  postRulesProcessingParams?: InputMaybe<Array<PostRulesProcessingParams>>;
};

export type CreateSnsSubscriptionRequest = {
  app?: InputMaybe<Scalars['EvmAddress']['input']>;
  topics: Array<SnsTopicInput>;
  webhook: Scalars['String']['input'];
};

export type CreateSponsorshipRequest = {
  admins?: InputMaybe<Array<Scalars['EvmAddress']['input']>>;
  allowLensAccess: Scalars['Boolean']['input'];
  exclusionList?: InputMaybe<Array<SponsorshipRateLimitsExempt>>;
  metadataUri?: InputMaybe<Scalars['URI']['input']>;
  rateLimit?: InputMaybe<SponsorshipRateLimitsInput>;
  signers?: InputMaybe<Array<SponsorshipSignerInput>>;
};

export type CreateSponsorshipResponse = {
  __typename?: 'CreateSponsorshipResponse';
  hash: Scalars['TxHash']['output'];
};

export type CreateSponsorshipResult = CreateSponsorshipResponse | SelfFundedTransactionRequest | TransactionWillFail;

export type CreateUnfollowRequest = {
  account: Scalars['EvmAddress']['input'];
  graph?: Scalars['EvmAddress']['input'];
  graphRulesProcessingParams?: InputMaybe<Array<GraphRulesProcessingParams>>;
};

export type CreateUsernameNamespaceRequest = {
  admins?: InputMaybe<Array<Scalars['EvmAddress']['input']>>;
  metadataUri?: InputMaybe<Scalars['URI']['input']>;
  namespace: Scalars['String']['input'];
  rules?: InputMaybe<NamespaceRulesConfigInput>;
  symbol: Scalars['String']['input'];
};

export type CreateUsernameNamespaceResult = CreateNamespaceResponse | SelfFundedTransactionRequest | TransactionWillFail;

export type CreateUsernameRequest = {
  assignAccountNamespaceRulesProcessingParams?: InputMaybe<Array<NamespaceRulesProcessingParams>>;
  autoAssign?: Scalars['Boolean']['input'];
  createUsernameRulesProcessingParams?: InputMaybe<Array<NamespaceRulesProcessingParams>>;
  unassignUsernameNamespaceRulesProcessingParams?: InputMaybe<Array<NamespaceRulesProcessingParams>>;
  username: UsernameInput;
};

export type CreateUsernameResponse = {
  __typename?: 'CreateUsernameResponse';
  hash: Scalars['TxHash']['output'];
};

export type CreateUsernameResult = CreateUsernameResponse | NamespaceOperationValidationFailed | SelfFundedTransactionRequest | SponsoredTransactionRequest | TransactionWillFail | UsernameTaken;

export type DebugPostMetadataRequest = {
  json?: InputMaybe<Scalars['String']['input']>;
  rawUri?: InputMaybe<Scalars['URI']['input']>;
  source: EntityType;
};

export type DebugPostMetadataResult = {
  __typename?: 'DebugPostMetadataResult';
  reason?: Maybe<Scalars['String']['output']>;
  valid: Scalars['Boolean']['output'];
};

export type DeletePostRequest = {
  feedRulesProcessingParams?: InputMaybe<Array<FeedRulesProcessingParams>>;
  post: Scalars['PostId']['input'];
};

export type DeletePostResponse = {
  __typename?: 'DeletePostResponse';
  hash: Scalars['TxHash']['output'];
};

export type DeletePostResult = DeletePostResponse | SelfFundedTransactionRequest | SponsoredTransactionRequest | TransactionWillFail;

export type DeleteSnsSubscriptionRequest = {
  id: Scalars['UUID']['input'];
};

export type DepositRequest = {
  erc20?: InputMaybe<AmountInput>;
  native?: InputMaybe<Scalars['BigDecimal']['input']>;
};

export type DepositResult = InsufficientFunds | SelfFundedTransactionRequest | SponsoredTransactionRequest | TransactionWillFail;

export type DictionaryKeyValue = {
  __typename?: 'DictionaryKeyValue';
  dictionary: Array<PrimitiveData>;
  key: Scalars['String']['output'];
};

export type DisableAccountActionRequest = {
  unknown?: InputMaybe<UnknownActionConfigInput>;
};

export type DisableAccountActionResponse = {
  __typename?: 'DisableAccountActionResponse';
  hash: Scalars['TxHash']['output'];
};

export type DisableAccountActionResult = DisableAccountActionResponse | SelfFundedTransactionRequest | SponsoredTransactionRequest | TransactionWillFail;

export type DisablePostActionParams = {
  simpleCollect?: InputMaybe<Scalars['AlwaysTrue']['input']>;
  unknown?: InputMaybe<UnknownActionConfigInput>;
};

export type DisablePostActionRequest = {
  action: DisablePostActionParams;
  post: Scalars['PostId']['input'];
};

export type DisablePostActionResponse = {
  __typename?: 'DisablePostActionResponse';
  hash: Scalars['TxHash']['output'];
};

export type DisablePostActionResult = DisablePostActionResponse | SelfFundedTransactionRequest | SponsoredTransactionRequest | TransactionWillFail;

export type DismissRecommendedAccountsRequest = {
  accounts: Array<Scalars['EvmAddress']['input']>;
};

export type EditPostRequest = {
  contentUri: Scalars['URI']['input'];
  feedRulesProcessingParams?: InputMaybe<Array<FeedRulesProcessingParams>>;
  parentPostRulesProcessingParams?: InputMaybe<Array<PostRulesProcessingParams>>;
  post: Scalars['PostId']['input'];
};

export type Eip712Meta = {
  __typename?: 'Eip712Meta';
  customSignature?: Maybe<Scalars['BlockchainData']['output']>;
  factoryDeps: Array<Scalars['BlockchainData']['output']>;
  gasPerPubdata: Scalars['BigInt']['output'];
  paymasterParams?: Maybe<PaymasterParams>;
};

export type Eip712TransactionRequest = {
  __typename?: 'Eip712TransactionRequest';
  chainId: Scalars['Int']['output'];
  customData: Eip712Meta;
  data: Scalars['BlockchainData']['output'];
  from: Scalars['EvmAddress']['output'];
  gasLimit: Scalars['Int']['output'];
  maxFeePerGas: Scalars['BigInt']['output'];
  maxPriorityFeePerGas: Scalars['BigInt']['output'];
  nonce: Scalars['Int']['output'];
  to: Scalars['EvmAddress']['output'];
  type: Scalars['Int']['output'];
  value: Scalars['BigInt']['output'];
};

export type Eip712TypedDataDomain = {
  __typename?: 'Eip712TypedDataDomain';
  chainId: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  verifyingContract: Scalars['EvmAddress']['output'];
  version: Scalars['String']['output'];
};

export type Eip712TypedDataDomainInput = {
  chainId: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  verifyingContract: Scalars['EvmAddress']['input'];
  version: Scalars['String']['input'];
};

export type Eip712TypedDataField = {
  __typename?: 'Eip712TypedDataField';
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type Eip712TypedDataFieldInput = {
  name: Scalars['String']['input'];
  type: Scalars['String']['input'];
};

export type Eip1559TransactionRequest = {
  __typename?: 'Eip1559TransactionRequest';
  chainId: Scalars['Int']['output'];
  data: Scalars['BlockchainData']['output'];
  from: Scalars['EvmAddress']['output'];
  gasLimit: Scalars['Int']['output'];
  maxFeePerGas: Scalars['BigInt']['output'];
  maxPriorityFeePerGas: Scalars['BigInt']['output'];
  nonce: Scalars['Int']['output'];
  to: Scalars['EvmAddress']['output'];
  type: Scalars['Int']['output'];
  value: Scalars['BigInt']['output'];
};

export type EmbedMetadata = {
  __typename?: 'EmbedMetadata';
  attachments: Array<AnyMedia>;
  attributes: Array<MetadataAttribute>;
  content: Scalars['String']['output'];
  contentWarning?: Maybe<ContentWarning>;
  embed: Scalars['URI']['output'];
  id: Scalars['MetadataId']['output'];
  locale: Scalars['Locale']['output'];
  mainContentFocus: MainContentFocus;
  tags?: Maybe<Array<Scalars['Tag']['output']>>;
};

export type EnableAccountActionRequest = {
  unknown?: InputMaybe<UnknownActionConfigInput>;
};

export type EnableAccountActionResponse = {
  __typename?: 'EnableAccountActionResponse';
  hash: Scalars['TxHash']['output'];
};

export type EnableAccountActionResult = EnableAccountActionResponse | SelfFundedTransactionRequest | SponsoredTransactionRequest | TransactionWillFail;

export type EnablePostActionParams = {
  simpleCollect?: InputMaybe<Scalars['AlwaysTrue']['input']>;
  unknown?: InputMaybe<UnknownActionConfigInput>;
};

export type EnablePostActionRequest = {
  action: EnablePostActionParams;
  post: Scalars['PostId']['input'];
};

export type EnablePostActionResponse = {
  __typename?: 'EnablePostActionResponse';
  hash: Scalars['TxHash']['output'];
};

export type EnablePostActionResult = EnablePostActionResponse | SelfFundedTransactionRequest | SponsoredTransactionRequest | TransactionWillFail;

export type EnableSignlessResult = SelfFundedTransactionRequest | SponsoredTransactionRequest | TransactionWillFail;

export type EntityId = {
  account?: InputMaybe<Scalars['EvmAddress']['input']>;
  accountAction?: InputMaybe<Scalars['EvmAddress']['input']>;
  app?: InputMaybe<Scalars['EvmAddress']['input']>;
  feed?: InputMaybe<Scalars['EvmAddress']['input']>;
  graph?: InputMaybe<Scalars['EvmAddress']['input']>;
  group?: InputMaybe<Scalars['EvmAddress']['input']>;
  post?: InputMaybe<Scalars['PostId']['input']>;
  postAction?: InputMaybe<Scalars['EvmAddress']['input']>;
  sponsorship?: InputMaybe<Scalars['EvmAddress']['input']>;
  usernameNamespace?: InputMaybe<Scalars['EvmAddress']['input']>;
};

export enum EntityType {
  Account = 'ACCOUNT',
  AccountAction = 'ACCOUNT_ACTION',
  App = 'APP',
  Feed = 'FEED',
  Graph = 'GRAPH',
  Group = 'GROUP',
  Post = 'POST',
  PostAction = 'POST_ACTION',
  Rule = 'RULE',
  Sponsorship = 'SPONSORSHIP',
  UsernameNamespace = 'USERNAME_NAMESPACE'
}

export type Erc20 = {
  __typename?: 'Erc20';
  contract: NetworkAddress;
  decimals: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  symbol: Scalars['String']['output'];
};

export type Erc20Amount = {
  __typename?: 'Erc20Amount';
  asset: Erc20;
  value: Scalars['BigDecimal']['output'];
};

export type Erc20BalanceError = {
  __typename?: 'Erc20BalanceError';
  reason: Scalars['String']['output'];
  token: Scalars['EvmAddress']['output'];
};

export type EventLocation = {
  __typename?: 'EventLocation';
  physical?: Maybe<Scalars['String']['output']>;
  virtual?: Maybe<Scalars['URI']['output']>;
};

export type EventMetadata = {
  __typename?: 'EventMetadata';
  address?: Maybe<PhysicalAddress>;
  attachments: Array<AnyMedia>;
  attributes: Array<MetadataAttribute>;
  content: Scalars['String']['output'];
  contentWarning?: Maybe<ContentWarning>;
  endsAt: Scalars['DateTime']['output'];
  id: Scalars['MetadataId']['output'];
  links: Array<Scalars['URI']['output']>;
  locale: Scalars['Locale']['output'];
  location: EventLocation;
  mainContentFocus: MainContentFocus;
  position?: Maybe<Scalars['GeoUri']['output']>;
  schedulingAdjustments?: Maybe<EventSchedulingAdjustments>;
  startsAt: Scalars['DateTime']['output'];
  tags?: Maybe<Array<Scalars['Tag']['output']>>;
  title?: Maybe<Scalars['String']['output']>;
};

export type EventSchedulingAdjustments = {
  __typename?: 'EventSchedulingAdjustments';
  timezoneId: TimezoneId;
  timezoneOffset: Scalars['Float']['output'];
};

export type ExecuteAccountActionRequest = {
  account: Scalars['EvmAddress']['input'];
  action: AccountActionExecuteInput;
};

export type ExecuteAccountActionResponse = {
  __typename?: 'ExecuteAccountActionResponse';
  hash: Scalars['TxHash']['output'];
};

export type ExecuteAccountActionResult = ExecuteAccountActionResponse | SelfFundedTransactionRequest | SponsoredTransactionRequest | TransactionWillFail;

export type ExecutePostActionRequest = {
  action: PostActionExecuteInput;
  post: Scalars['PostId']['input'];
};

export type ExecutePostActionResponse = {
  __typename?: 'ExecutePostActionResponse';
  hash: Scalars['TxHash']['output'];
};

export type ExecutePostActionResult = ExecutePostActionResponse | SelfFundedTransactionRequest | SponsoredTransactionRequest | TransactionWillFail;

export type ExecutedUnknownActionRequest = {
  address: Scalars['EvmAddress']['input'];
};

export type ExpiredChallengeError = {
  __typename?: 'ExpiredChallengeError';
  reason: Scalars['String']['output'];
};

export type FailedTransactionStatus = {
  __typename?: 'FailedTransactionStatus';
  blockTimestamp: Scalars['DateTime']['output'];
  reason: Scalars['String']['output'];
  summary: Array<SubOperationStatus>;
};

export type Feed = {
  __typename?: 'Feed';
  address: Scalars['EvmAddress']['output'];
  createdAt: Scalars['DateTime']['output'];
  metadata?: Maybe<FeedMetadata>;
  operations?: Maybe<LoggedInFeedPostOperations>;
  owner: Scalars['EvmAddress']['output'];
  rules: FeedRules;
};

export type FeedChoiceOneOf = {
  custom?: InputMaybe<Scalars['EvmAddress']['input']>;
  globalFeed?: InputMaybe<Scalars['AlwaysTrue']['input']>;
  none?: InputMaybe<Scalars['AlwaysTrue']['input']>;
};

export type FeedMetadata = {
  __typename?: 'FeedMetadata';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type FeedOneOf = {
  app?: InputMaybe<Scalars['EvmAddress']['input']>;
  feed?: InputMaybe<Scalars['EvmAddress']['input']>;
  globalFeed?: InputMaybe<Scalars['AlwaysTrue']['input']>;
};

export type FeedOperationValidationFailed = {
  __typename?: 'FeedOperationValidationFailed';
  reason: Scalars['String']['output'];
  unsatisfiedRules?: Maybe<FeedUnsatisfiedRules>;
};

export type FeedOperationValidationOutcome = FeedOperationValidationFailed | FeedOperationValidationPassed | FeedOperationValidationUnknown;

export type FeedOperationValidationPassed = {
  __typename?: 'FeedOperationValidationPassed';
  passed: Scalars['AlwaysTrue']['output'];
};

export type FeedOperationValidationUnknown = {
  __typename?: 'FeedOperationValidationUnknown';
  extraChecksRequired: Array<FeedRule>;
};

export type FeedRequest = {
  feed?: InputMaybe<Scalars['EvmAddress']['input']>;
  txHash?: InputMaybe<Scalars['TxHash']['input']>;
};

export type FeedRule = {
  __typename?: 'FeedRule';
  address: Scalars['EvmAddress']['output'];
  config: Array<AnyKeyValue>;
  executesOn: Array<FeedRuleExecuteOn>;
  id: Scalars['RuleId']['output'];
  type: FeedRuleType;
};

export type FeedRuleConfig = {
  groupGatedRule?: InputMaybe<GroupGatedFeedRuleConfig>;
  simplePaymentRule?: InputMaybe<SimplePaymentFeedRuleConfig>;
  tokenGatedRule?: InputMaybe<TokenGatedFeedRuleConfig>;
  unknownRule?: InputMaybe<UnknownFeedRuleConfig>;
};

export enum FeedRuleExecuteOn {
  ChangingPostRule = 'CHANGING_POST_RULE',
  CreatingPost = 'CREATING_POST',
  DeletingPost = 'DELETING_POST',
  EditingPost = 'EDITING_POST'
}

export enum FeedRuleType {
  AccountBlocking = 'ACCOUNT_BLOCKING',
  GroupGated = 'GROUP_GATED',
  RestrictedSigners = 'RESTRICTED_SIGNERS',
  SimplePayment = 'SIMPLE_PAYMENT',
  TokenGated = 'TOKEN_GATED',
  Unknown = 'UNKNOWN'
}

export enum FeedRuleUnsatisfiedReason {
  AccountBlocked = 'ACCOUNT_BLOCKED',
  GroupGatedNotAMember = 'GROUP_GATED_NOT_A_MEMBER',
  SimplePaymentNotEnoughBalance = 'SIMPLE_PAYMENT_NOT_ENOUGH_BALANCE',
  TokenGatedNotATokenHolder = 'TOKEN_GATED_NOT_A_TOKEN_HOLDER'
}

export type FeedRules = {
  __typename?: 'FeedRules';
  anyOf: Array<FeedRule>;
  required: Array<FeedRule>;
};

export type FeedRulesConfigInput = {
  anyOf?: Array<FeedRuleConfig>;
  required?: Array<FeedRuleConfig>;
};

export type FeedRulesProcessingParams = {
  unknownRule?: InputMaybe<UnknownRuleProcessingParams>;
};

export type FeedUnsatisfiedRule = {
  __typename?: 'FeedUnsatisfiedRule';
  config: Array<AnyKeyValue>;
  message: Scalars['String']['output'];
  reason: FeedRuleUnsatisfiedReason;
  rule: Scalars['EvmAddress']['output'];
};

export type FeedUnsatisfiedRules = {
  __typename?: 'FeedUnsatisfiedRules';
  anyOf: Array<FeedUnsatisfiedRule>;
  required: Array<FeedUnsatisfiedRule>;
};

export type FeedsFilter = {
  managedBy?: InputMaybe<ManagedBy>;
  searchQuery?: InputMaybe<Scalars['String']['input']>;
};

export enum FeedsOrderBy {
  Alphabetical = 'ALPHABETICAL',
  LatestFirst = 'LATEST_FIRST',
  OldestFirst = 'OLDEST_FIRST'
}

export type FeedsRequest = {
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<FeedsFilter>;
  orderBy?: FeedsOrderBy;
  pageSize?: PageSize;
};

export type FinishedTransactionStatus = {
  __typename?: 'FinishedTransactionStatus';
  blockTimestamp: Scalars['DateTime']['output'];
  summary: Array<SubOperationStatus>;
};

export type FixedSizeTransform = {
  height: Scalars['Int']['input'];
  width: Scalars['Int']['input'];
};

export type FollowNotification = {
  __typename?: 'FollowNotification';
  followers: Array<NotificationAccountFollow>;
  id: Scalars['GeneratedNotificationId']['output'];
};

export type FollowPair = {
  account: Scalars['EvmAddress']['input'];
  follower: Scalars['EvmAddress']['input'];
  graph?: Scalars['EvmAddress']['input'];
};

export type FollowResponse = {
  __typename?: 'FollowResponse';
  hash: Scalars['TxHash']['output'];
};

export type FollowResult = AccountFollowOperationValidationFailed | FollowResponse | SelfFundedTransactionRequest | SponsoredTransactionRequest | TransactionWillFail;

export type FollowStatusRequest = {
  pairs: Array<FollowPair>;
};

export type FollowStatusResult = {
  __typename?: 'FollowStatusResult';
  account: Scalars['EvmAddress']['output'];
  follower: Scalars['EvmAddress']['output'];
  graph: Scalars['EvmAddress']['output'];
  isFollowing: BooleanValue;
};

export type Follower = {
  __typename?: 'Follower';
  followedOn: Scalars['DateTime']['output'];
  follower: Account;
  graph: Scalars['EvmAddress']['output'];
};

export type FollowerOn = {
  __typename?: 'FollowerOn';
  globalGraph: Scalars['Boolean']['output'];
  graph: Scalars['EvmAddress']['output'];
};

export type FollowerOnInput = {
  globalGraph?: InputMaybe<Scalars['AlwaysTrue']['input']>;
  graph?: InputMaybe<Scalars['EvmAddress']['input']>;
};

export type FollowersFilter = {
  graphs?: InputMaybe<Array<GraphOneOf>>;
};

export type FollowersOnlyPostRuleConfig = {
  graph?: Scalars['EvmAddress']['input'];
  quotesRestricted?: Scalars['Boolean']['input'];
  repliesRestricted?: Scalars['Boolean']['input'];
  repostRestricted?: Scalars['Boolean']['input'];
};

export enum FollowersOrderBy {
  AccountScore = 'ACCOUNT_SCORE',
  Asc = 'ASC',
  Desc = 'DESC'
}

export type FollowersRequest = {
  account: Scalars['EvmAddress']['input'];
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<FollowersFilter>;
  orderBy?: FollowersOrderBy;
  pageSize?: PageSize;
};

export type FollowersYouKnowFilter = {
  graphs?: InputMaybe<Array<GraphOneOf>>;
};

export enum FollowersYouKnowOrderBy {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type FollowersYouKnowRequest = {
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<FollowersYouKnowFilter>;
  observer: Scalars['EvmAddress']['input'];
  orderBy?: FollowersYouKnowOrderBy;
  pageSize?: PageSize;
  target: Scalars['EvmAddress']['input'];
};

export type Following = {
  __typename?: 'Following';
  followedOn: Scalars['DateTime']['output'];
  following: Account;
  graph: Scalars['EvmAddress']['output'];
};

export type FollowingFilter = {
  graphs?: InputMaybe<Array<GraphOneOf>>;
};

export enum FollowingOrderBy {
  AccountScore = 'ACCOUNT_SCORE',
  Asc = 'ASC',
  Desc = 'DESC'
}

export type FollowingRequest = {
  account: Scalars['EvmAddress']['input'];
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<FollowingFilter>;
  orderBy?: FollowingOrderBy;
  pageSize?: PageSize;
};

export enum ForYouSource {
  Curated = 'CURATED',
  ExtendedNetwork = 'EXTENDED_NETWORK',
  Following = 'FOLLOWING',
  Popular = 'POPULAR'
}

export type ForbiddenError = {
  __typename?: 'ForbiddenError';
  reason: Scalars['String']['output'];
};

export type FrameEip712Request = {
  account: Scalars['EvmAddress']['input'];
  app: Scalars['EvmAddress']['input'];
  buttonIndex: Scalars['Int']['input'];
  deadline: Scalars['Int']['input'];
  inputText: Scalars['String']['input'];
  post: Scalars['PostId']['input'];
  specVersion: Scalars['String']['input'];
  state: Scalars['String']['input'];
  transactionId: Scalars['String']['input'];
  url: Scalars['URI']['input'];
};

export type FrameLensManagerSignatureResult = {
  __typename?: 'FrameLensManagerSignatureResult';
  signature: Scalars['Signature']['output'];
  signedTypedData: CreateFrameEip712TypedData;
};

export type FrameVerifySignature = {
  identityToken: Scalars['IdToken']['input'];
  signature: Scalars['Signature']['input'];
  signedTypedData: CreateFrameEip712TypedDataInput;
};

export enum FrameVerifySignatureResult {
  DeadlineExpired = 'DEADLINE_EXPIRED',
  IdentityCannotUseAccount = 'IDENTITY_CANNOT_USE_ACCOUNT',
  IdentityTokenNotValid = 'IDENTITY_TOKEN_NOT_VALID',
  IdentityUnauthorized = 'IDENTITY_UNAUTHORIZED',
  PostDoesntExist = 'POST_DOESNT_EXIST',
  SignatureNotValid = 'SIGNATURE_NOT_VALID',
  SignerAddressCannotUseAccount = 'SIGNER_ADDRESS_CANNOT_USE_ACCOUNT',
  TypedDataAccountNotMatchingIdentityToken = 'TYPED_DATA_ACCOUNT_NOT_MATCHING_IDENTITY_TOKEN',
  TypedDataDomainIncorrect = 'TYPED_DATA_DOMAIN_INCORRECT',
  TypedDataTypesIncorrectFields = 'TYPED_DATA_TYPES_INCORRECT_FIELDS',
  Verified = 'VERIFIED'
}

export type GenerateNewAppServerApiKeyRequest = {
  app: Scalars['EvmAddress']['input'];
};

export type GetSnsSubscriptionsRequest = {
  app?: InputMaybe<Scalars['EvmAddress']['input']>;
};

export type Graph = {
  __typename?: 'Graph';
  address: Scalars['EvmAddress']['output'];
  createdAt: Scalars['DateTime']['output'];
  metadata?: Maybe<GraphMetadata>;
  owner: Scalars['EvmAddress']['output'];
  rules: GraphRules;
};

export type GraphChoiceOneOf = {
  custom?: InputMaybe<Scalars['EvmAddress']['input']>;
  globalGraph?: InputMaybe<Scalars['AlwaysTrue']['input']>;
  none?: InputMaybe<Scalars['AlwaysTrue']['input']>;
};

export type GraphMetadata = {
  __typename?: 'GraphMetadata';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type GraphOneOf = {
  app?: InputMaybe<Scalars['EvmAddress']['input']>;
  globalGraph?: InputMaybe<Scalars['AlwaysTrue']['input']>;
  graph?: InputMaybe<Scalars['EvmAddress']['input']>;
};

export type GraphRequest = {
  graph?: InputMaybe<Scalars['EvmAddress']['input']>;
  txHash?: InputMaybe<Scalars['TxHash']['input']>;
};

export type GraphRule = {
  __typename?: 'GraphRule';
  address: Scalars['EvmAddress']['output'];
  config: Array<AnyKeyValue>;
  executesOn: Array<GraphRuleExecuteOn>;
  id: Scalars['RuleId']['output'];
  type: GraphRuleType;
};

export type GraphRuleConfig = {
  groupGatedRule?: InputMaybe<GroupGatedGraphRuleConfig>;
  tokenGatedRule?: InputMaybe<TokenGatedGraphRuleConfig>;
  unknownRule?: InputMaybe<UnknownGraphRuleConfig>;
};

export enum GraphRuleExecuteOn {
  ChangingFollowRules = 'CHANGING_FOLLOW_RULES',
  Following = 'FOLLOWING',
  Unfollowing = 'UNFOLLOWING'
}

export enum GraphRuleType {
  AccountBlocking = 'ACCOUNT_BLOCKING',
  GroupGated = 'GROUP_GATED',
  TokenGated = 'TOKEN_GATED',
  Unknown = 'UNKNOWN'
}

export type GraphRules = {
  __typename?: 'GraphRules';
  anyOf: Array<GraphRule>;
  required: Array<GraphRule>;
};

export type GraphRulesConfigInput = {
  anyOf?: Array<GraphRuleConfig>;
  required?: Array<GraphRuleConfig>;
};

export type GraphRulesProcessingParams = {
  unknownRule?: InputMaybe<UnknownRuleProcessingParams>;
};

export type GraphsFilter = {
  managedBy?: InputMaybe<ManagedBy>;
  searchQuery?: InputMaybe<Scalars['String']['input']>;
};

export enum GraphsOrderBy {
  Alphabetical = 'ALPHABETICAL',
  LatestFirst = 'LATEST_FIRST',
  OldestFirst = 'OLDEST_FIRST'
}

export type GraphsRequest = {
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<GraphsFilter>;
  orderBy?: GraphsOrderBy;
  pageSize?: PageSize;
};

export type Group = {
  __typename?: 'Group';
  address: Scalars['EvmAddress']['output'];
  banningEnabled: Scalars['Boolean']['output'];
  feed?: Maybe<Feed>;
  membershipApprovalEnabled: Scalars['Boolean']['output'];
  metadata?: Maybe<GroupMetadata>;
  operations?: Maybe<LoggedInGroupOperations>;
  owner: Scalars['EvmAddress']['output'];
  rules: GroupRules;
  timestamp: Scalars['DateTime']['output'];
};

export type GroupBannedAccount = {
  __typename?: 'GroupBannedAccount';
  account: Account;
  bannedAt: Scalars['DateTime']['output'];
  bannedBy: Account;
  lastActiveAt: Scalars['DateTime']['output'];
  ruleId: Scalars['RuleId']['output'];
};

export type GroupBannedAccountsFilter = {
  searchBy?: InputMaybe<UsernameSearchInput>;
};

export enum GroupBannedAccountsOrderBy {
  AccountScore = 'ACCOUNT_SCORE',
  FirstBanned = 'FIRST_BANNED',
  LastActive = 'LAST_ACTIVE',
  LastBanned = 'LAST_BANNED'
}

export type GroupBannedAccountsRequest = {
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<GroupBannedAccountsFilter>;
  group: Scalars['EvmAddress']['input'];
  orderBy?: GroupBannedAccountsOrderBy;
  pageSize?: PageSize;
};

export type GroupFeedParams = {
  metadataUri?: InputMaybe<Scalars['URI']['input']>;
  repliesRestricted?: Scalars['Boolean']['input'];
  rules?: InputMaybe<FeedRulesConfigInput>;
};

export type GroupGatedFeedRuleConfig = {
  group: Scalars['EvmAddress']['input'];
  repliesRestricted?: Scalars['Boolean']['input'];
};

export type GroupGatedGraphRuleConfig = {
  group: Scalars['EvmAddress']['input'];
};

export type GroupMember = {
  __typename?: 'GroupMember';
  account: Account;
  joinedAt: Scalars['DateTime']['output'];
  lastActiveAt: Scalars['DateTime']['output'];
};

export type GroupMembersFilter = {
  searchBy?: InputMaybe<UsernameSearchInput>;
};

export enum GroupMembersOrderBy {
  AccountScore = 'ACCOUNT_SCORE',
  FirstJoined = 'FIRST_JOINED',
  LastActive = 'LAST_ACTIVE',
  LastJoined = 'LAST_JOINED'
}

export type GroupMembersRequest = {
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<GroupMembersFilter>;
  group: Scalars['EvmAddress']['input'];
  orderBy?: GroupMembersOrderBy;
  pageSize?: PageSize;
};

export type GroupMembershipRequest = {
  __typename?: 'GroupMembershipRequest';
  account: Account;
  lastActiveAt: Scalars['DateTime']['output'];
  requestedAt: Scalars['DateTime']['output'];
  ruleId: Scalars['RuleId']['output'];
};

export type GroupMembershipRequestApprovedNotification = {
  __typename?: 'GroupMembershipRequestApprovedNotification';
  approvedAt: Scalars['DateTime']['output'];
  approvedBy: Account;
  group: Group;
  id: Scalars['GeneratedNotificationId']['output'];
};

export type GroupMembershipRequestRejectedNotification = {
  __typename?: 'GroupMembershipRequestRejectedNotification';
  group: Group;
  id: Scalars['GeneratedNotificationId']['output'];
  rejectedAt: Scalars['DateTime']['output'];
  rejectedBy: Account;
};

export type GroupMembershipRequestsFilter = {
  searchBy?: InputMaybe<UsernameSearchInput>;
};

export enum GroupMembershipRequestsOrderBy {
  AccountScore = 'ACCOUNT_SCORE',
  FirstRequested = 'FIRST_REQUESTED',
  LastActive = 'LAST_ACTIVE',
  LastRequested = 'LAST_REQUESTED'
}

export type GroupMembershipRequestsRequest = {
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<GroupMembershipRequestsFilter>;
  group: Scalars['EvmAddress']['input'];
  orderBy?: GroupMembershipRequestsOrderBy;
  pageSize?: PageSize;
};

export type GroupMention = {
  __typename?: 'GroupMention';
  group: Scalars['EvmAddress']['output'];
  replace: MentionReplace;
};

export type GroupMetadata = {
  __typename?: 'GroupMetadata';
  coverPicture?: Maybe<Scalars['URI']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Scalars['URI']['output']>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};


export type GroupMetadataCoverPictureArgs = {
  request?: MediaImageRequest;
};


export type GroupMetadataIconArgs = {
  request?: MediaImageRequest;
};

export type GroupOperationValidationFailed = {
  __typename?: 'GroupOperationValidationFailed';
  reason: Scalars['String']['output'];
  unsatisfiedRules?: Maybe<GroupUnsatisfiedRules>;
};

export type GroupOperationValidationOutcome = GroupOperationValidationFailed | GroupOperationValidationPassed | GroupOperationValidationUnknown;

export type GroupOperationValidationPassed = {
  __typename?: 'GroupOperationValidationPassed';
  passed: Scalars['AlwaysTrue']['output'];
};

export type GroupOperationValidationUnknown = {
  __typename?: 'GroupOperationValidationUnknown';
  extraChecksRequired: Array<GroupRule>;
};

export type GroupRequest = {
  group?: InputMaybe<Scalars['EvmAddress']['input']>;
  txHash?: InputMaybe<Scalars['TxHash']['input']>;
};

export type GroupRule = {
  __typename?: 'GroupRule';
  address: Scalars['EvmAddress']['output'];
  config: Array<AnyKeyValue>;
  executesOn: Array<GroupRuleExecuteOn>;
  id: Scalars['RuleId']['output'];
  type: GroupRuleType;
};

export type GroupRuleConfig = {
  membershipApprovalRule?: InputMaybe<MembershipApprovalGroupRuleConfig>;
  simplePaymentRule?: InputMaybe<SimplePaymentGroupRuleConfig>;
  tokenGatedRule?: InputMaybe<TokenGatedGroupRuleConfig>;
  unknownRule?: InputMaybe<UnknownGroupRuleConfig>;
};

export enum GroupRuleExecuteOn {
  Adding = 'ADDING',
  Joining = 'JOINING',
  Leaving = 'LEAVING',
  Removing = 'REMOVING'
}

export enum GroupRuleType {
  AdditionRemovalPid = 'ADDITION_REMOVAL_PID',
  BanAccount = 'BAN_ACCOUNT',
  MembershipApproval = 'MEMBERSHIP_APPROVAL',
  SimplePayment = 'SIMPLE_PAYMENT',
  TokenGated = 'TOKEN_GATED',
  Unknown = 'UNKNOWN'
}

export enum GroupRuleUnsatisfiedReason {
  AccountBanned = 'ACCOUNT_BANNED',
  MembershipApprovalRequired = 'MEMBERSHIP_APPROVAL_REQUIRED',
  SimplePaymentNotEnoughBalance = 'SIMPLE_PAYMENT_NOT_ENOUGH_BALANCE',
  TokenGatedAccountJoiningNotATokenHolder = 'TOKEN_GATED_ACCOUNT_JOINING_NOT_A_TOKEN_HOLDER',
  TokenGatedAccountRemovalStillTokenHolder = 'TOKEN_GATED_ACCOUNT_REMOVAL_STILL_TOKEN_HOLDER'
}

export type GroupRules = {
  __typename?: 'GroupRules';
  anyOf: Array<GroupRule>;
  required: Array<GroupRule>;
};

export type GroupRulesConfigInput = {
  anyOf?: Array<GroupRuleConfig>;
  required?: Array<GroupRuleConfig>;
};

export type GroupRulesProcessingParams = {
  unknownRule?: InputMaybe<UnknownRuleProcessingParams>;
};

export type GroupStatsRequest = {
  group: Scalars['EvmAddress']['input'];
};

export type GroupStatsResponse = {
  __typename?: 'GroupStatsResponse';
  totalMembers: Scalars['Int']['output'];
};

export type GroupUnsatisfiedRule = {
  __typename?: 'GroupUnsatisfiedRule';
  config: Array<AnyKeyValue>;
  message: Scalars['String']['output'];
  reason: GroupRuleUnsatisfiedReason;
  rule: Scalars['EvmAddress']['output'];
};

export type GroupUnsatisfiedRules = {
  __typename?: 'GroupUnsatisfiedRules';
  anyOf: Array<GroupUnsatisfiedRule>;
  required: Array<GroupUnsatisfiedRule>;
};

export type GroupsFilter = {
  managedBy?: InputMaybe<ManagedBy>;
  member?: InputMaybe<Scalars['EvmAddress']['input']>;
  searchQuery?: InputMaybe<Scalars['String']['input']>;
};

export enum GroupsOrderBy {
  Alphabetical = 'ALPHABETICAL',
  LatestFirst = 'LATEST_FIRST',
  OldestFirst = 'OLDEST_FIRST'
}

export type GroupsRequest = {
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<GroupsFilter>;
  orderBy?: GroupsOrderBy;
  pageSize?: PageSize;
};

export type HasReactedRequest = {
  type?: InputMaybe<PostReactionType>;
};

export type HeightBasedTransform = {
  height: Scalars['Int']['input'];
};

export type HideManagedAccountRequest = {
  account: Scalars['EvmAddress']['input'];
};

export type HideReplyRequest = {
  post: Scalars['PostId']['input'];
};

export type ImageMetadata = {
  __typename?: 'ImageMetadata';
  attachments: Array<AnyMedia>;
  attributes: Array<MetadataAttribute>;
  content: Scalars['String']['output'];
  contentWarning?: Maybe<ContentWarning>;
  id: Scalars['MetadataId']['output'];
  image: MediaImage;
  locale: Scalars['Locale']['output'];
  mainContentFocus: MainContentFocus;
  tags?: Maybe<Array<Scalars['Tag']['output']>>;
  title?: Maybe<Scalars['String']['output']>;
};

export type ImageTransform = {
  fixedSize?: InputMaybe<FixedSizeTransform>;
  heightBased?: InputMaybe<HeightBasedTransform>;
  widthBased?: InputMaybe<WidthBasedTransform>;
};

export enum IndexingStatus {
  Failed = 'FAILED',
  Finished = 'FINISHED',
  Pending = 'PENDING'
}

export type InsufficientFunds = {
  __typename?: 'InsufficientFunds';
  reason: Scalars['String']['output'];
};

export type IntKeyValue = {
  __typename?: 'IntKeyValue';
  int: Scalars['Int']['output'];
  key: Scalars['String']['output'];
};

export type IntNullableKeyValue = {
  __typename?: 'IntNullableKeyValue';
  key: Scalars['String']['output'];
  optionalInt?: Maybe<Scalars['Int']['output']>;
};

export type IsFollowedByMeRequest = {
  graph: Scalars['EvmAddress']['input'];
};

export type IsFollowingMeRequest = {
  graph: Scalars['EvmAddress']['input'];
};

export type JoinGroupRequest = {
  group: Scalars['EvmAddress']['input'];
  rulesProcessingParams?: InputMaybe<Array<GroupRulesProcessingParams>>;
};

export type JoinGroupResponse = {
  __typename?: 'JoinGroupResponse';
  hash: Scalars['TxHash']['output'];
};

export type JoinGroupResult = GroupOperationValidationFailed | JoinGroupResponse | SelfFundedTransactionRequest | SponsoredTransactionRequest | TransactionWillFail;

export type KeyValuePair = {
  __typename?: 'KeyValuePair';
  key: Scalars['FixedBytes32']['output'];
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type LastLoggedInAccountRequest = {
  address: Scalars['EvmAddress']['input'];
  app?: InputMaybe<Scalars['EvmAddress']['input']>;
};

export type LeaveGroupRequest = {
  group: Scalars['EvmAddress']['input'];
  rulesProcessingParams?: InputMaybe<Array<GroupRulesProcessingParams>>;
};

export type LeaveGroupResponse = {
  __typename?: 'LeaveGroupResponse';
  hash: Scalars['TxHash']['output'];
};

export type LeaveGroupResult = GroupOperationValidationFailed | LeaveGroupResponse | SelfFundedTransactionRequest | SponsoredTransactionRequest | TransactionWillFail;

export type LengthAmountPair = {
  amount: Scalars['BigDecimal']['input'];
  length: Scalars['Int']['input'];
};

export type LinkMetadata = {
  __typename?: 'LinkMetadata';
  attachments: Array<AnyMedia>;
  attributes: Array<MetadataAttribute>;
  content: Scalars['String']['output'];
  contentWarning?: Maybe<ContentWarning>;
  id: Scalars['MetadataId']['output'];
  locale: Scalars['Locale']['output'];
  mainContentFocus: MainContentFocus;
  sharingLink: Scalars['URI']['output'];
  tags?: Maybe<Array<Scalars['Tag']['output']>>;
};

export type LivestreamMetadata = {
  __typename?: 'LivestreamMetadata';
  attachments: Array<AnyMedia>;
  attributes: Array<MetadataAttribute>;
  checkLiveApi?: Maybe<Scalars['URI']['output']>;
  content: Scalars['String']['output'];
  contentWarning?: Maybe<ContentWarning>;
  endsAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['MetadataId']['output'];
  liveUrl: Scalars['URI']['output'];
  locale: Scalars['Locale']['output'];
  mainContentFocus: MainContentFocus;
  playbackUrl: Scalars['URI']['output'];
  startsAt: Scalars['DateTime']['output'];
  tags?: Maybe<Array<Scalars['Tag']['output']>>;
  title?: Maybe<Scalars['String']['output']>;
};

export type LoggedInAccountOperations = {
  __typename?: 'LoggedInAccountOperations';
  canBlock: Scalars['Boolean']['output'];
  canFollow: AccountFollowOperationValidationOutcome;
  canUnblock: Scalars['Boolean']['output'];
  canUnfollow: AccountFollowOperationValidationOutcome;
  hasBlockedMe: Scalars['Boolean']['output'];
  hasReported: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  isBlockedByMe: Scalars['Boolean']['output'];
  isFollowedByMe: Scalars['Boolean']['output'];
  isFollowingMe: Scalars['Boolean']['output'];
  isMutedByMe: Scalars['Boolean']['output'];
};


export type LoggedInAccountOperationsCanFollowArgs = {
  request?: InputMaybe<CanFollowRequest>;
};


export type LoggedInAccountOperationsCanUnfollowArgs = {
  request?: InputMaybe<CanUnfollowRequest>;
};


export type LoggedInAccountOperationsIsFollowedByMeArgs = {
  request?: InputMaybe<IsFollowedByMeRequest>;
};


export type LoggedInAccountOperationsIsFollowingMeArgs = {
  request?: InputMaybe<IsFollowingMeRequest>;
};

export type LoggedInFeedPostOperations = {
  __typename?: 'LoggedInFeedPostOperations';
  canPost: FeedOperationValidationOutcome;
  id: Scalars['ID']['output'];
};

export type LoggedInGroupOperations = {
  __typename?: 'LoggedInGroupOperations';
  canAddMember: GroupOperationValidationOutcome;
  canJoin: GroupOperationValidationOutcome;
  canLeave: GroupOperationValidationOutcome;
  canRemoveMember: GroupOperationValidationOutcome;
  hasRequestedMembership: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  isBanned: Scalars['Boolean']['output'];
  isMember: Scalars['Boolean']['output'];
};

export type LoggedInPostOperations = {
  __typename?: 'LoggedInPostOperations';
  canComment: PostOperationValidationOutcome;
  canDelete: PostOperationValidationOutcome;
  canEdit: PostOperationValidationOutcome;
  canQuote: PostOperationValidationOutcome;
  canRepost: PostOperationValidationOutcome;
  canSimpleCollect: SimpleCollectValidationOutcome;
  canTip: Scalars['Boolean']['output'];
  executedUnknownActionCount: Scalars['Int']['output'];
  hasBookmarked: Scalars['Boolean']['output'];
  hasCommented: BooleanValue;
  hasExecutedUnknownAction: Scalars['Boolean']['output'];
  hasQuoted: BooleanValue;
  hasReacted: Scalars['Boolean']['output'];
  hasReported: Scalars['Boolean']['output'];
  hasReposted: BooleanValue;
  hasSimpleCollected: Scalars['Boolean']['output'];
  hasTipped: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  isNotInterested: Scalars['Boolean']['output'];
  lastTip?: Maybe<PostTip>;
  postTipCount: Scalars['Int']['output'];
  simpleCollectCount: Scalars['Int']['output'];
};


export type LoggedInPostOperationsExecutedUnknownActionCountArgs = {
  request: ExecutedUnknownActionRequest;
};


export type LoggedInPostOperationsHasExecutedUnknownActionArgs = {
  request: ExecutedUnknownActionRequest;
};


export type LoggedInPostOperationsHasReactedArgs = {
  request?: InputMaybe<HasReactedRequest>;
};

export type LoggedInUsernameNamespaceOperations = {
  __typename?: 'LoggedInUsernameNamespaceOperations';
  canCreate: NamespaceOperationValidationOutcome;
  id: Scalars['ID']['output'];
};

export type LoggedInUsernameOperations = {
  __typename?: 'LoggedInUsernameOperations';
  canAssign: NamespaceOperationValidationOutcome;
  canRemove: NamespaceOperationValidationOutcome;
  canUnassign: NamespaceOperationValidationOutcome;
  id: Scalars['ID']['output'];
};

export enum MainContentFocus {
  Article = 'ARTICLE',
  Audio = 'AUDIO',
  CheckingIn = 'CHECKING_IN',
  Embed = 'EMBED',
  Event = 'EVENT',
  Image = 'IMAGE',
  Link = 'LINK',
  Livestream = 'LIVESTREAM',
  Mint = 'MINT',
  ShortVideo = 'SHORT_VIDEO',
  Space = 'SPACE',
  Story = 'STORY',
  TextOnly = 'TEXT_ONLY',
  ThreeD = 'THREE_D',
  Transaction = 'TRANSACTION',
  Video = 'VIDEO'
}

export enum ManagedAccountsVisibility {
  All = 'ALL',
  HiddenOnly = 'HIDDEN_ONLY',
  NoneHidden = 'NONE_HIDDEN'
}

export type ManagedBy = {
  address: Scalars['EvmAddress']['input'];
  includeOwners?: Scalars['Boolean']['input'];
};

export type MarketplaceMetadataAttribute = {
  __typename?: 'MarketplaceMetadataAttribute';
  displayType?: Maybe<MarketplaceMetadataAttributeDisplayType>;
  traitType?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['MarketplaceMetadataAttributeValue']['output']>;
};

export enum MarketplaceMetadataAttributeDisplayType {
  Date = 'DATE',
  Number = 'NUMBER',
  String = 'STRING'
}

export type MeResult = {
  __typename?: 'MeResult';
  appLoggedIn: Scalars['EvmAddress']['output'];
  isSignless: Scalars['Boolean']['output'];
  isSponsored: Scalars['Boolean']['output'];
  limit: SponsorshipAllowance;
  loggedInAs: AccountAvailable;
};

export type MediaAudio = {
  __typename?: 'MediaAudio';
  artist?: Maybe<Scalars['String']['output']>;
  attributes: Array<MetadataAttribute>;
  cover?: Maybe<Scalars['URI']['output']>;
  credits?: Maybe<Scalars['String']['output']>;
  duration?: Maybe<Scalars['Int']['output']>;
  genre?: Maybe<Scalars['String']['output']>;
  item: Scalars['URI']['output'];
  kind?: Maybe<MediaAudioKind>;
  license?: Maybe<MetadataLicenseType>;
  lyrics?: Maybe<Scalars['URI']['output']>;
  recordLabel?: Maybe<Scalars['String']['output']>;
  type: MediaAudioType;
};


export type MediaAudioCoverArgs = {
  request?: MediaImageRequest;
};


export type MediaAudioItemArgs = {
  request?: MediaAudioRequest;
};

export enum MediaAudioKind {
  Audiobook = 'AUDIOBOOK',
  Music = 'MUSIC',
  Other = 'OTHER',
  Podcast = 'PODCAST',
  Sound = 'SOUND',
  VoiceNote = 'VOICE_NOTE'
}

export type MediaAudioRequest = {
  useOriginal: Scalars['Boolean']['input'];
};

export enum MediaAudioType {
  AudioAac = 'AUDIO_AAC',
  AudioFlac = 'AUDIO_FLAC',
  AudioMpeg = 'AUDIO_MPEG',
  AudioMp_4 = 'AUDIO_MP_4',
  AudioOgg = 'AUDIO_OGG',
  AudioVndWave = 'AUDIO_VND_WAVE',
  AudioWav = 'AUDIO_WAV',
  AudioWebm = 'AUDIO_WEBM'
}

export type MediaImage = {
  __typename?: 'MediaImage';
  altTag?: Maybe<Scalars['String']['output']>;
  attributes: Array<MetadataAttribute>;
  height?: Maybe<Scalars['Int']['output']>;
  item: Scalars['URI']['output'];
  license?: Maybe<MetadataLicenseType>;
  type: MediaImageType;
  width?: Maybe<Scalars['Int']['output']>;
};


export type MediaImageItemArgs = {
  request?: MediaImageRequest;
};

export type MediaImageRequest = {
  preferTransform?: InputMaybe<ImageTransform>;
  useOriginal?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum MediaImageType {
  Avif = 'AVIF',
  Bmp = 'BMP',
  Gif = 'GIF',
  Heic = 'HEIC',
  Jpeg = 'JPEG',
  Png = 'PNG',
  SvgXml = 'SVG_XML',
  Tiff = 'TIFF',
  Webp = 'WEBP',
  XMsBmp = 'X_MS_BMP'
}

export type MediaSnapshotNotificationFilter = {
  source?: InputMaybe<Array<PrimitiveId>>;
};

export type MediaVideo = {
  __typename?: 'MediaVideo';
  altTag?: Maybe<Scalars['String']['output']>;
  attributes: Array<MetadataAttribute>;
  cover?: Maybe<Scalars['URI']['output']>;
  duration?: Maybe<Scalars['Int']['output']>;
  item: Scalars['URI']['output'];
  license?: Maybe<MetadataLicenseType>;
  type: MediaVideoType;
};


export type MediaVideoCoverArgs = {
  request?: MediaImageRequest;
};


export type MediaVideoItemArgs = {
  request?: MediaVideoRequest;
};

export type MediaVideoRequest = {
  useOriginal: Scalars['Boolean']['input'];
};

export enum MediaVideoType {
  ModelGltfBinary = 'MODEL_GLTF_BINARY',
  ModelGltfJson = 'MODEL_GLTF_JSON',
  VideoMov = 'VIDEO_MOV',
  VideoMpeg = 'VIDEO_MPEG',
  VideoMp_4 = 'VIDEO_MP_4',
  VideoOgg = 'VIDEO_OGG',
  VideoOgv = 'VIDEO_OGV',
  VideoQuicktime = 'VIDEO_QUICKTIME',
  VideoWebm = 'VIDEO_WEBM',
  VideoXm_4V = 'VIDEO_XM_4V'
}

export type MembershipApprovalGroupRuleConfig = {
  enable?: InputMaybe<Scalars['AlwaysTrue']['input']>;
};

export type MentionNotification = {
  __typename?: 'MentionNotification';
  id: Scalars['GeneratedNotificationId']['output'];
  post: Post;
};

export type MentionReplace = {
  __typename?: 'MentionReplace';
  from: Scalars['String']['output'];
  to: Scalars['String']['output'];
};

export type MetadataAttribute = {
  __typename?: 'MetadataAttribute';
  key: Scalars['String']['output'];
  type: MetadataAttributeType;
  value: Scalars['String']['output'];
};

export enum MetadataAttributeType {
  Boolean = 'BOOLEAN',
  Date = 'DATE',
  Json = 'JSON',
  Number = 'NUMBER',
  String = 'STRING'
}

export enum MetadataLicenseType {
  Cco = 'CCO',
  CcBy = 'CC_BY',
  CcByNc = 'CC_BY_NC',
  CcByNd = 'CC_BY_ND',
  TbnlCdNplLedger = 'TBNL_CD_NPL_LEDGER',
  TbnlCdNplLegal = 'TBNL_CD_NPL_LEGAL',
  TbnlCdPlLedger = 'TBNL_CD_PL_LEDGER',
  TbnlCdPlLegal = 'TBNL_CD_PL_LEGAL',
  TbnlCDtsaNplLedger = 'TBNL_C_DTSA_NPL_LEDGER',
  TbnlCDtsaNplLegal = 'TBNL_C_DTSA_NPL_LEGAL',
  TbnlCDtsaPlLedger = 'TBNL_C_DTSA_PL_LEDGER',
  TbnlCDtsaPlLegal = 'TBNL_C_DTSA_PL_LEGAL',
  TbnlCDtNplLedger = 'TBNL_C_DT_NPL_LEDGER',
  TbnlCDtNplLegal = 'TBNL_C_DT_NPL_LEGAL',
  TbnlCDtPlLedger = 'TBNL_C_DT_PL_LEDGER',
  TbnlCDtPlLegal = 'TBNL_C_DT_PL_LEGAL',
  TbnlCNdNplLedger = 'TBNL_C_ND_NPL_LEDGER',
  TbnlCNdNplLegal = 'TBNL_C_ND_NPL_LEGAL',
  TbnlCNdPlLedger = 'TBNL_C_ND_PL_LEDGER',
  TbnlCNdPlLegal = 'TBNL_C_ND_PL_LEGAL',
  TbnlNcDtsaNplLedger = 'TBNL_NC_DTSA_NPL_LEDGER',
  TbnlNcDtsaNplLegal = 'TBNL_NC_DTSA_NPL_LEGAL',
  TbnlNcDtsaPlLedger = 'TBNL_NC_DTSA_PL_LEDGER',
  TbnlNcDtsaPlLegal = 'TBNL_NC_DTSA_PL_LEGAL',
  TbnlNcDtNplLedger = 'TBNL_NC_DT_NPL_LEDGER',
  TbnlNcDtNplLegal = 'TBNL_NC_DT_NPL_LEGAL',
  TbnlNcDtPlLedger = 'TBNL_NC_DT_PL_LEDGER',
  TbnlNcDtPlLegal = 'TBNL_NC_DT_PL_LEGAL',
  TbnlNcDNplLedger = 'TBNL_NC_D_NPL_LEDGER',
  TbnlNcDNplLegal = 'TBNL_NC_D_NPL_LEGAL',
  TbnlNcDPlLedger = 'TBNL_NC_D_PL_LEDGER',
  TbnlNcDPlLegal = 'TBNL_NC_D_PL_LEGAL',
  TbnlNcNdNplLedger = 'TBNL_NC_ND_NPL_LEDGER',
  TbnlNcNdNplLegal = 'TBNL_NC_ND_NPL_LEGAL',
  TbnlNcNdPlLedger = 'TBNL_NC_ND_PL_LEDGER',
  TbnlNcNdPlLegal = 'TBNL_NC_ND_PL_LEGAL'
}

export type MetadataSnapshotNotificationFilter = {
  source?: InputMaybe<Array<PrimitiveId>>;
};

export type MintMetadata = {
  __typename?: 'MintMetadata';
  attachments: Array<AnyMedia>;
  attributes: Array<MetadataAttribute>;
  content: Scalars['String']['output'];
  contentWarning?: Maybe<ContentWarning>;
  id: Scalars['MetadataId']['output'];
  locale: Scalars['Locale']['output'];
  mainContentFocus: MainContentFocus;
  mintLink: Scalars['URI']['output'];
  tags?: Maybe<Array<Scalars['Tag']['output']>>;
};

export type MlinternalAccountRecommendationsRequest = {
  account?: InputMaybe<Scalars['EvmAddress']['input']>;
  secret: Scalars['String']['input'];
};

export type MlinternalForYouRequest = {
  account?: InputMaybe<Scalars['EvmAddress']['input']>;
  secret: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addAccountManager: AddAccountManagerResult;
  addAdmins: AddAdminsResult;
  addAppAuthorizationEndpoint: Scalars['Void']['output'];
  addAppFeeds: AddAppFeedsResult;
  addAppGroups: AddAppGroupsResult;
  addAppSigners: AddAppSignersResult;
  addPostNotInterested: Scalars['Void']['output'];
  addReaction: AddReactionResult;
  approveGroupMembershipRequests: ApproveGroupMembershipResult;
  assignUsernameToAccount: AssignUsernameToAccountResult;
  authenticate: AuthenticationResult;
  banGroupAccounts: BanGroupAccountsResult;
  block: BlockResult;
  bookmarkPost: Scalars['Void']['output'];
  cancelGroupMembershipRequest: CancelGroupMembershipRequestResult;
  challenge: AuthenticationChallenge;
  configureAccountAction: ConfigureAccountActionResult;
  configurePostAction: ConfigurePostActionResult;
  createAccountWithUsername: CreateAccountWithUsernameResult;
  createApp: CreateAppResult;
  createFeed: CreateFeedResult;
  createGraph: CreateGraphResult;
  createGroup: CreateGroupResult;
  createSnsSubscriptions: Array<SnsSubscription>;
  createSponsorship: CreateSponsorshipResult;
  createUsername: CreateUsernameResult;
  createUsernameNamespace: CreateUsernameNamespaceResult;
  deletePost: DeletePostResult;
  deleteSnsSubscription: Scalars['Void']['output'];
  deposit: DepositResult;
  disableAccountAction: DisableAccountActionResult;
  disablePostAction: DisablePostActionResult;
  editPost: PostResult;
  enableAccountAction: EnableAccountActionResult;
  enablePostAction: EnablePostActionResult;
  enableSignless: EnableSignlessResult;
  executeAccountAction: ExecuteAccountActionResult;
  executePostAction: ExecutePostActionResult;
  follow: FollowResult;
  generateNewAppServerApiKey: Scalars['ServerAPIKey']['output'];
  hideManagedAccount: Scalars['Void']['output'];
  hideReply: Scalars['Void']['output'];
  joinGroup: JoinGroupResult;
  leaveGroup: LeaveGroupResult;
  legacyRolloverRefresh: RefreshResult;
  mlAccountRecommendationsInternal: Scalars['Void']['output'];
  mlDismissRecommendedAccounts: Scalars['Void']['output'];
  mlForYouInternal: Scalars['Void']['output'];
  mute: Scalars['Void']['output'];
  pauseSponsorship: PausingResult;
  post: PostResult;
  recommendAccount: Scalars['Void']['output'];
  refresh: RefreshResult;
  refreshMetadata: RefreshMetadataResult;
  rejectGroupMembershipRequests: RejectGroupMembershipResult;
  removeAccountManager: RemoveAccountManagerResult;
  removeAdmins: RemoveAdminsResult;
  removeAppAuthorizationEndpoint: Scalars['Void']['output'];
  removeAppFeeds: RemoveAppFeedsResult;
  removeAppGroups: RemoveAppGroupsResult;
  removeAppSigners: RemoveAppSignersResult;
  removeGroupMembers: RemoveGroupMembersResult;
  removeSignless: RemoveSignlessResult;
  reportAccount: Scalars['Void']['output'];
  reportPost: Scalars['Void']['output'];
  repost: PostResult;
  requestGroupMembership: RequestGroupMembershipResult;
  revokeAuthentication: Scalars['Void']['output'];
  setAccountMetadata: SetAccountMetadataResult;
  setAppGraph: SetAppGraphResult;
  setAppMetadata: SetAppMetadataResult;
  setAppSponsorship: SetAppSponsorshipResult;
  setAppTreasury: SetAppTreasuryResult;
  setAppUsernameNamespace: SetAppUsernameNamespaceResult;
  setAppVerification: SetAppVerificationResult;
  setDefaultAppFeed: SetDefaultAppFeedResult;
  setFeedMetadata: SetFeedMetadataResult;
  setGraphMetadata: SetGraphMetadataResult;
  setGroupMetadata: SetGroupMetadataResult;
  setNamespaceMetadata: SetNamespaceMetadataResult;
  setSponsorshipMetadata: SetSponsorshipMetadataResult;
  signFrameAction: FrameLensManagerSignatureResult;
  switchAccount: SwitchAccountResult;
  transferPrimitiveOwnership: TransferPrimitiveOwnershipResult;
  unassignUsernameFromAccount: UnassignUsernameToAccountResult;
  unbanGroupAccounts: UnbanGroupAccountsResult;
  unblock: UnblockResult;
  undoBookmarkPost: Scalars['Void']['output'];
  undoPostNotInterested: Scalars['Void']['output'];
  undoReaction: UndoReactionResult;
  undoRecommendedAccount: Scalars['Void']['output'];
  unfollow: UnfollowResult;
  unhideManagedAccount: Scalars['Void']['output'];
  unhideReply: Scalars['Void']['output'];
  unmute: Scalars['Void']['output'];
  unpauseSponsorship: PausingResult;
  unwrapTokens: UnwrapTokensResult;
  updateAccountFollowRules: UpdateAccountFollowRulesResult;
  updateAccountManager: UpdateAccountManagerResult;
  updateFeedRules: UpdateFeedRulesResult;
  updateGraphRules: UpdateGraphRulesResult;
  updateGroupRules: UpdateGroupRulesResult;
  updateNamespaceRules: UpdateNamespaceRulesResult;
  updatePostRules: UpdatePostRulesResult;
  updateReservedUsernames: UpdateReservedUsernamesResult;
  updateSponsorshipExclusionList: UpdateSponsorshipExclusionListResult;
  updateSponsorshipLimits: UpdateSponsorshipLimitsResult;
  updateSponsorshipSigners: UpdateSponsorshipSignersResult;
  withdraw: WithdrawResult;
  wrapTokens: WrapTokensResult;
};


export type MutationAddAccountManagerArgs = {
  request: AddAccountManagerRequest;
};


export type MutationAddAdminsArgs = {
  request: AddAdminsRequest;
};


export type MutationAddAppAuthorizationEndpointArgs = {
  request: AddAppAuthorizationEndpointRequest;
};


export type MutationAddAppFeedsArgs = {
  request: AddAppFeedsRequest;
};


export type MutationAddAppGroupsArgs = {
  request: AddAppGroupsRequest;
};


export type MutationAddAppSignersArgs = {
  request: AddAppSignersRequest;
};


export type MutationAddPostNotInterestedArgs = {
  request: PostNotInterestedRequest;
};


export type MutationAddReactionArgs = {
  request: AddReactionRequest;
};


export type MutationApproveGroupMembershipRequestsArgs = {
  request: ApproveGroupMembershipRequest;
};


export type MutationAssignUsernameToAccountArgs = {
  request: AssignUsernameToAccountRequest;
};


export type MutationAuthenticateArgs = {
  request: SignedAuthChallenge;
};


export type MutationBanGroupAccountsArgs = {
  request: BanGroupAccountsRequest;
};


export type MutationBlockArgs = {
  request: BlockRequest;
};


export type MutationBookmarkPostArgs = {
  request: BookmarkPostRequest;
};


export type MutationCancelGroupMembershipRequestArgs = {
  request: CancelGroupMembershipRequestRequest;
};


export type MutationChallengeArgs = {
  request: ChallengeRequest;
};


export type MutationConfigureAccountActionArgs = {
  request: ConfigureAccountActionRequest;
};


export type MutationConfigurePostActionArgs = {
  request: ConfigurePostActionRequest;
};


export type MutationCreateAccountWithUsernameArgs = {
  request: CreateAccountWithUsernameRequest;
};


export type MutationCreateAppArgs = {
  request: CreateAppRequest;
};


export type MutationCreateFeedArgs = {
  request: CreateFeedRequest;
};


export type MutationCreateGraphArgs = {
  request: CreateGraphRequest;
};


export type MutationCreateGroupArgs = {
  request: CreateGroupRequest;
};


export type MutationCreateSnsSubscriptionsArgs = {
  request: CreateSnsSubscriptionRequest;
};


export type MutationCreateSponsorshipArgs = {
  request: CreateSponsorshipRequest;
};


export type MutationCreateUsernameArgs = {
  request: CreateUsernameRequest;
};


export type MutationCreateUsernameNamespaceArgs = {
  request: CreateUsernameNamespaceRequest;
};


export type MutationDeletePostArgs = {
  request: DeletePostRequest;
};


export type MutationDeleteSnsSubscriptionArgs = {
  request: DeleteSnsSubscriptionRequest;
};


export type MutationDepositArgs = {
  request: DepositRequest;
};


export type MutationDisableAccountActionArgs = {
  request: DisableAccountActionRequest;
};


export type MutationDisablePostActionArgs = {
  request: DisablePostActionRequest;
};


export type MutationEditPostArgs = {
  request: EditPostRequest;
};


export type MutationEnableAccountActionArgs = {
  request: EnableAccountActionRequest;
};


export type MutationEnablePostActionArgs = {
  request: EnablePostActionRequest;
};


export type MutationExecuteAccountActionArgs = {
  request: ExecuteAccountActionRequest;
};


export type MutationExecutePostActionArgs = {
  request: ExecutePostActionRequest;
};


export type MutationFollowArgs = {
  request: CreateFollowRequest;
};


export type MutationGenerateNewAppServerApiKeyArgs = {
  request: GenerateNewAppServerApiKeyRequest;
};


export type MutationHideManagedAccountArgs = {
  request: HideManagedAccountRequest;
};


export type MutationHideReplyArgs = {
  request: HideReplyRequest;
};


export type MutationJoinGroupArgs = {
  request: JoinGroupRequest;
};


export type MutationLeaveGroupArgs = {
  request: LeaveGroupRequest;
};


export type MutationLegacyRolloverRefreshArgs = {
  request: RolloverRefreshRequest;
};


export type MutationMlAccountRecommendationsInternalArgs = {
  request: MlinternalAccountRecommendationsRequest;
};


export type MutationMlDismissRecommendedAccountsArgs = {
  request: DismissRecommendedAccountsRequest;
};


export type MutationMlForYouInternalArgs = {
  request: MlinternalForYouRequest;
};


export type MutationMuteArgs = {
  request: MuteRequest;
};


export type MutationPauseSponsorshipArgs = {
  request: PausingRequest;
};


export type MutationPostArgs = {
  request: CreatePostRequest;
};


export type MutationRecommendAccountArgs = {
  request: RecommendAccount;
};


export type MutationRefreshArgs = {
  request: RefreshRequest;
};


export type MutationRefreshMetadataArgs = {
  request: RefreshMetadataRequest;
};


export type MutationRejectGroupMembershipRequestsArgs = {
  request: RejectGroupMembershipRequest;
};


export type MutationRemoveAccountManagerArgs = {
  request: RemoveAccountManagerRequest;
};


export type MutationRemoveAdminsArgs = {
  request: RemoveAdminsRequest;
};


export type MutationRemoveAppAuthorizationEndpointArgs = {
  request: RemoveAppAuthorizationEndpointRequest;
};


export type MutationRemoveAppFeedsArgs = {
  request: RemoveAppFeedsRequest;
};


export type MutationRemoveAppGroupsArgs = {
  request: RemoveAppGroupsRequest;
};


export type MutationRemoveAppSignersArgs = {
  request: RemoveAppSignersRequest;
};


export type MutationRemoveGroupMembersArgs = {
  request: RemoveGroupMembersRequest;
};


export type MutationReportAccountArgs = {
  request: ReportAccountRequest;
};


export type MutationReportPostArgs = {
  request: ReportPostRequest;
};


export type MutationRepostArgs = {
  request: CreateRepostRequest;
};


export type MutationRequestGroupMembershipArgs = {
  request: RequestGroupMembershipRequest;
};


export type MutationRevokeAuthenticationArgs = {
  request: RevokeAuthenticationRequest;
};


export type MutationSetAccountMetadataArgs = {
  request: SetAccountMetadataRequest;
};


export type MutationSetAppGraphArgs = {
  request: SetAppGraphRequest;
};


export type MutationSetAppMetadataArgs = {
  request: SetAppMetadataRequest;
};


export type MutationSetAppSponsorshipArgs = {
  request: SetAppSponsorshipRequest;
};


export type MutationSetAppTreasuryArgs = {
  request: SetAppTreasuryRequest;
};


export type MutationSetAppUsernameNamespaceArgs = {
  request: SetAppUsernameNamespaceRequest;
};


export type MutationSetAppVerificationArgs = {
  request: SetAppVerificationRequest;
};


export type MutationSetDefaultAppFeedArgs = {
  request: SetDefaultAppFeedRequest;
};


export type MutationSetFeedMetadataArgs = {
  request: SetFeedMetadataRequest;
};


export type MutationSetGraphMetadataArgs = {
  request: SetGraphMetadataRequest;
};


export type MutationSetGroupMetadataArgs = {
  request: SetGroupMetadataRequest;
};


export type MutationSetNamespaceMetadataArgs = {
  request: SetNamespaceMetadataRequest;
};


export type MutationSetSponsorshipMetadataArgs = {
  request: SetSponsorshipMetadataRequest;
};


export type MutationSignFrameActionArgs = {
  request: FrameEip712Request;
};


export type MutationSwitchAccountArgs = {
  request: SwitchAccountRequest;
};


export type MutationTransferPrimitiveOwnershipArgs = {
  request: TransferPrimitiveOwnershipRequest;
};


export type MutationUnassignUsernameFromAccountArgs = {
  request: UnassignUsernameFromAccountRequest;
};


export type MutationUnbanGroupAccountsArgs = {
  request: UnbanGroupAccountsRequest;
};


export type MutationUnblockArgs = {
  request: UnblockRequest;
};


export type MutationUndoBookmarkPostArgs = {
  request: BookmarkPostRequest;
};


export type MutationUndoPostNotInterestedArgs = {
  request: PostNotInterestedRequest;
};


export type MutationUndoReactionArgs = {
  request: UndoReactionRequest;
};


export type MutationUndoRecommendedAccountArgs = {
  request: UndoRecommendedAccount;
};


export type MutationUnfollowArgs = {
  request: CreateUnfollowRequest;
};


export type MutationUnhideManagedAccountArgs = {
  request: UnhideManagedAccountRequest;
};


export type MutationUnhideReplyArgs = {
  request: UnhideReplyRequest;
};


export type MutationUnmuteArgs = {
  request: MuteRequest;
};


export type MutationUnpauseSponsorshipArgs = {
  request: PausingRequest;
};


export type MutationUnwrapTokensArgs = {
  request: UnwrapTokensRequest;
};


export type MutationUpdateAccountFollowRulesArgs = {
  request: UpdateAccountFollowRulesRequest;
};


export type MutationUpdateAccountManagerArgs = {
  request: UpdateAccountManagerRequest;
};


export type MutationUpdateFeedRulesArgs = {
  request: UpdateFeedRulesRequest;
};


export type MutationUpdateGraphRulesArgs = {
  request: UpdateGraphRulesRequest;
};


export type MutationUpdateGroupRulesArgs = {
  request: UpdateGroupRulesRequest;
};


export type MutationUpdateNamespaceRulesArgs = {
  request: UpdateNamespaceRulesRequest;
};


export type MutationUpdatePostRulesArgs = {
  request: UpdatePostRulesRequest;
};


export type MutationUpdateReservedUsernamesArgs = {
  request: UpdateReservedUsernamesRequest;
};


export type MutationUpdateSponsorshipExclusionListArgs = {
  request: UpdateSponsorshipExclusionListRequest;
};


export type MutationUpdateSponsorshipLimitsArgs = {
  request: UpdateSponsorshipLimitsRequest;
};


export type MutationUpdateSponsorshipSignersArgs = {
  request: UpdateSponsorshipSignersRequest;
};


export type MutationWithdrawArgs = {
  request: WithdrawRequest;
};


export type MutationWrapTokensArgs = {
  request: WrapTokensRequest;
};

export type MuteRequest = {
  account: Scalars['EvmAddress']['input'];
};

export type NamespaceOperationValidationFailed = {
  __typename?: 'NamespaceOperationValidationFailed';
  reason: Scalars['String']['output'];
  unsatisfiedRules?: Maybe<NamespaceUnsatisfiedRules>;
};

export type NamespaceOperationValidationOutcome = NamespaceOperationValidationFailed | NamespaceOperationValidationPassed | NamespaceOperationValidationUnknown;

export type NamespaceOperationValidationPassed = {
  __typename?: 'NamespaceOperationValidationPassed';
  passed: Scalars['AlwaysTrue']['output'];
};

export type NamespaceOperationValidationUnknown = {
  __typename?: 'NamespaceOperationValidationUnknown';
  extraChecksRequired: Array<NamespaceRule>;
};

export type NamespaceRequest = {
  namespace?: InputMaybe<Scalars['EvmAddress']['input']>;
  txHash?: InputMaybe<Scalars['TxHash']['input']>;
};

export type NamespaceReservedUsernamesRequest = {
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
  namespace: Scalars['EvmAddress']['input'];
  pageSize?: PageSize;
};

export type NamespaceRule = {
  __typename?: 'NamespaceRule';
  address: Scalars['EvmAddress']['output'];
  config: Array<AnyKeyValue>;
  executesOn: Array<NamespaceRuleExecuteOn>;
  id: Scalars['RuleId']['output'];
  type: NamespaceRuleType;
};

export type NamespaceRuleConfig = {
  tokenGatedRule?: InputMaybe<TokenGatedNamespaceRuleConfig>;
  unknownRule?: InputMaybe<UnknownNamespaceRuleConfig>;
  usernameLengthRule?: InputMaybe<UsernameLengthNamespaceRuleConfig>;
  usernamePricePerLengthRule?: InputMaybe<UsernamePricePerLengthNamespaceRuleConfig>;
};

export enum NamespaceRuleExecuteOn {
  Assigning = 'ASSIGNING',
  Creating = 'CREATING',
  Removing = 'REMOVING',
  Unassigning = 'UNASSIGNING'
}

export enum NamespaceRuleType {
  PricePerLength = 'PRICE_PER_LENGTH',
  TokenGated = 'TOKEN_GATED',
  Unknown = 'UNKNOWN',
  UsernameLength = 'USERNAME_LENGTH',
  UsernameReserved = 'USERNAME_RESERVED',
  UsernameSimpleCharset = 'USERNAME_SIMPLE_CHARSET'
}

export enum NamespaceRuleUnsatisfiedReason {
  TokenGatedNotATokenHolder = 'TOKEN_GATED_NOT_A_TOKEN_HOLDER',
  UsernameLengthNotWithinRange = 'USERNAME_LENGTH_NOT_WITHIN_RANGE',
  UsernameNotASimpleCharset = 'USERNAME_NOT_A_SIMPLE_CHARSET',
  UsernamePricePerLengthNotEnoughBalance = 'USERNAME_PRICE_PER_LENGTH_NOT_ENOUGH_BALANCE',
  UsernameReserved = 'USERNAME_RESERVED'
}

export type NamespaceRules = {
  __typename?: 'NamespaceRules';
  anyOf: Array<NamespaceRule>;
  required: Array<NamespaceRule>;
};

export type NamespaceRulesConfigInput = {
  anyOf?: Array<NamespaceRuleConfig>;
  required?: Array<NamespaceRuleConfig>;
};

export type NamespaceRulesProcessingParams = {
  unknownRule?: InputMaybe<UnknownRuleProcessingParams>;
};

export type NamespaceUnsatisfiedRule = {
  __typename?: 'NamespaceUnsatisfiedRule';
  config: Array<AnyKeyValue>;
  message: Scalars['String']['output'];
  reason: NamespaceRuleUnsatisfiedReason;
  rule: Scalars['EvmAddress']['output'];
};

export type NamespaceUnsatisfiedRules = {
  __typename?: 'NamespaceUnsatisfiedRules';
  anyOf: Array<NamespaceUnsatisfiedRule>;
  required: Array<NamespaceUnsatisfiedRule>;
};

export type NamespacesFilter = {
  managedBy?: InputMaybe<ManagedBy>;
  searchQuery?: InputMaybe<Scalars['String']['input']>;
};

export enum NamespacesOrderBy {
  Alphabetical = 'ALPHABETICAL',
  LatestFirst = 'LATEST_FIRST',
  OldestFirst = 'OLDEST_FIRST'
}

export type NamespacesRequest = {
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<NamespacesFilter>;
  orderBy?: NamespacesOrderBy;
  pageSize?: PageSize;
};

export type NamespacesResult = {
  __typename?: 'NamespacesResult';
  items: Array<UsernameNamespace>;
  pageInfo: PaginatedResultInfo;
};

export type NativeAmount = {
  __typename?: 'NativeAmount';
  asset: NativeToken;
  value: Scalars['BigDecimal']['output'];
};

export type NativeBalanceError = {
  __typename?: 'NativeBalanceError';
  reason: Scalars['String']['output'];
};

export type NativeToken = {
  __typename?: 'NativeToken';
  decimals: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  symbol: Scalars['String']['output'];
};

export type NetworkAddress = {
  __typename?: 'NetworkAddress';
  address: Scalars['EvmAddress']['output'];
  chainId: Scalars['Int']['output'];
};

export type NftMetadata = {
  __typename?: 'NftMetadata';
  animationUrl?: Maybe<Scalars['URI']['output']>;
  attributes: Array<MarketplaceMetadataAttribute>;
  description?: Maybe<Scalars['String']['output']>;
  externalUrl?: Maybe<Scalars['URI']['output']>;
  image?: Maybe<Scalars['URI']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type NotIndexedYetStatus = {
  __typename?: 'NotIndexedYetStatus';
  reason: Scalars['String']['output'];
  txHasMined: Scalars['Boolean']['output'];
};

export type Notification = AccountActionExecutedNotification | CommentNotification | FollowNotification | GroupMembershipRequestApprovedNotification | GroupMembershipRequestRejectedNotification | MentionNotification | PostActionExecutedNotification | QuoteNotification | ReactionNotification | RepostNotification;

export type NotificationAccountFollow = {
  __typename?: 'NotificationAccountFollow';
  account: Account;
  followedAt: Scalars['DateTime']['output'];
};

export type NotificationAccountPostReaction = {
  __typename?: 'NotificationAccountPostReaction';
  account: Account;
  reactions: Array<PostReaction>;
};

export type NotificationAccountRepost = {
  __typename?: 'NotificationAccountRepost';
  account: Account;
  repostId: Scalars['PostId']['output'];
  repostedAt: Scalars['DateTime']['output'];
};

export type NotificationFilter = {
  apps?: InputMaybe<Array<Scalars['EvmAddress']['input']>>;
  feeds?: InputMaybe<Array<FeedOneOf>>;
  graphs?: InputMaybe<Array<GraphOneOf>>;
  includeLowScore?: Scalars['Boolean']['input'];
  notificationTypes?: InputMaybe<Array<NotificationType>>;
  timeBasedAggregation?: Scalars['Boolean']['input'];
};

export enum NotificationOrderBy {
  AccountScore = 'ACCOUNT_SCORE',
  Default = 'DEFAULT'
}

export type NotificationRequest = {
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<NotificationFilter>;
  orderBy?: NotificationOrderBy;
};

export enum NotificationType {
  Commented = 'COMMENTED',
  ExecutedAccountAction = 'EXECUTED_ACCOUNT_ACTION',
  ExecutedPostAction = 'EXECUTED_POST_ACTION',
  Followed = 'FOLLOWED',
  GroupMembershipRequestApproved = 'GROUP_MEMBERSHIP_REQUEST_APPROVED',
  GroupMembershipRequestRejected = 'GROUP_MEMBERSHIP_REQUEST_REJECTED',
  Mentioned = 'MENTIONED',
  Quoted = 'QUOTED',
  Reacted = 'REACTED',
  Reposted = 'REPOSTED'
}

export type OnboardingUserChallengeRequest = {
  app?: Scalars['EvmAddress']['input'];
  wallet: Scalars['EvmAddress']['input'];
};

export enum PageSize {
  Fifty = 'FIFTY',
  Ten = 'TEN'
}

export type PaginatedAccountExecutedActionsResult = {
  __typename?: 'PaginatedAccountExecutedActionsResult';
  items: Array<AccountExecutedActions>;
  pageInfo: PaginatedResultInfo;
};

export type PaginatedAccountManagersResult = {
  __typename?: 'PaginatedAccountManagersResult';
  items: Array<AccountManager>;
  pageInfo: PaginatedResultInfo;
};

export type PaginatedAccountsAvailableResult = {
  __typename?: 'PaginatedAccountsAvailableResult';
  items: Array<AccountAvailable>;
  pageInfo: PaginatedResultInfo;
};

export type PaginatedAccountsBlockedResult = {
  __typename?: 'PaginatedAccountsBlockedResult';
  items: Array<AccountBlocked>;
  pageInfo: PaginatedResultInfo;
};

export type PaginatedAccountsResult = {
  __typename?: 'PaginatedAccountsResult';
  items: Array<Account>;
  pageInfo: PaginatedResultInfo;
};

export type PaginatedActiveAuthenticationsResult = {
  __typename?: 'PaginatedActiveAuthenticationsResult';
  items: Array<AuthenticatedSession>;
  pageInfo: PaginatedResultInfo;
};

export type PaginatedAdminsResult = {
  __typename?: 'PaginatedAdminsResult';
  items: Array<Admin>;
  pageInfo: PaginatedResultInfo;
};

export type PaginatedAnyPostsResult = {
  __typename?: 'PaginatedAnyPostsResult';
  items: Array<AnyPost>;
  pageInfo: PaginatedResultInfo;
};

export type PaginatedAppFeedsResult = {
  __typename?: 'PaginatedAppFeedsResult';
  items: Array<AppFeed>;
  pageInfo: PaginatedResultInfo;
};

export type PaginatedAppSignersResult = {
  __typename?: 'PaginatedAppSignersResult';
  items: Array<AppSigner>;
  pageInfo: PaginatedResultInfo;
};

export type PaginatedAppUsersResult = {
  __typename?: 'PaginatedAppUsersResult';
  items: Array<AppUser>;
  pageInfo: PaginatedResultInfo;
};

export type PaginatedFeedsResult = {
  __typename?: 'PaginatedFeedsResult';
  items: Array<Feed>;
  pageInfo: PaginatedResultInfo;
};

export type PaginatedFollowersResult = {
  __typename?: 'PaginatedFollowersResult';
  items: Array<Follower>;
  pageInfo: PaginatedResultInfo;
};

export type PaginatedFollowingResult = {
  __typename?: 'PaginatedFollowingResult';
  items: Array<Following>;
  pageInfo: PaginatedResultInfo;
};

export type PaginatedGraphsResult = {
  __typename?: 'PaginatedGraphsResult';
  items: Array<Graph>;
  pageInfo: PaginatedResultInfo;
};

export type PaginatedGroupBannedAccountsResult = {
  __typename?: 'PaginatedGroupBannedAccountsResult';
  items: Array<GroupBannedAccount>;
  pageInfo: PaginatedResultInfo;
};

export type PaginatedGroupMembersResult = {
  __typename?: 'PaginatedGroupMembersResult';
  items: Array<GroupMember>;
  pageInfo: PaginatedResultInfo;
};

export type PaginatedGroupMembershipRequestsResult = {
  __typename?: 'PaginatedGroupMembershipRequestsResult';
  items: Array<GroupMembershipRequest>;
  pageInfo: PaginatedResultInfo;
};

export type PaginatedGroupsResult = {
  __typename?: 'PaginatedGroupsResult';
  items: Array<Group>;
  pageInfo: PaginatedResultInfo;
};

export type PaginatedNamespaceReservedUsernamesResult = {
  __typename?: 'PaginatedNamespaceReservedUsernamesResult';
  items: Array<UsernameReserved>;
  pageInfo: PaginatedResultInfo;
};

export type PaginatedNotificationResult = {
  __typename?: 'PaginatedNotificationResult';
  items: Array<Notification>;
  pageInfo: PaginatedResultInfo;
};

export type PaginatedPostActionContracts = {
  __typename?: 'PaginatedPostActionContracts';
  items: Array<PostActionContract>;
  pageInfo: PaginatedResultInfo;
};

export type PaginatedPostEditsResult = {
  __typename?: 'PaginatedPostEditsResult';
  items: Array<PostEdit>;
  pageInfo: PaginatedResultInfo;
};

export type PaginatedPostExecutedActionsResult = {
  __typename?: 'PaginatedPostExecutedActionsResult';
  items: Array<PostExecutedActions>;
  pageInfo: PaginatedResultInfo;
};

export type PaginatedPostReactionsResult = {
  __typename?: 'PaginatedPostReactionsResult';
  items: Array<AccountPostReaction>;
  pageInfo: PaginatedResultInfo;
};

export type PaginatedPostTagsResult = {
  __typename?: 'PaginatedPostTagsResult';
  items: Array<PostTag>;
  pageInfo: PaginatedResultInfo;
};

export type PaginatedPostsForYouResult = {
  __typename?: 'PaginatedPostsForYouResult';
  items: Array<PostForYou>;
  pageInfo: PaginatedResultInfo;
};

export type PaginatedPostsResult = {
  __typename?: 'PaginatedPostsResult';
  items: Array<Post>;
  pageInfo: PaginatedResultInfo;
};

export type PaginatedResultInfo = {
  __typename?: 'PaginatedResultInfo';
  next?: Maybe<Scalars['Cursor']['output']>;
  prev?: Maybe<Scalars['Cursor']['output']>;
};

export type PaginatedTimelineResult = {
  __typename?: 'PaginatedTimelineResult';
  items: Array<TimelineItem>;
  pageInfo: PaginatedResultInfo;
};

export type PaginatedUsernamesResult = {
  __typename?: 'PaginatedUsernamesResult';
  items: Array<Username>;
  pageInfo: PaginatedResultInfo;
};

export type PausingRequest = {
  sponsorship: Scalars['EvmAddress']['input'];
};

export type PausingResult = SelfFundedTransactionRequest | SponsoredTransactionRequest | TransactionWillFail;

export type PayToCollectConfig = {
  __typename?: 'PayToCollectConfig';
  amount: Erc20Amount;
  recipients: Array<RecipientPercent>;
  referralShare?: Maybe<Scalars['Float']['output']>;
};

export type PayToCollectInput = {
  amount: AmountInput;
  recipients: Array<RecipientPercentInput>;
  referralShare?: InputMaybe<Scalars['Float']['input']>;
};

export type PaymasterParams = {
  __typename?: 'PaymasterParams';
  paymaster: Scalars['EvmAddress']['output'];
  paymasterInput: Scalars['BlockchainData']['output'];
};

export type PendingTransactionStatus = {
  __typename?: 'PendingTransactionStatus';
  blockTimestamp: Scalars['DateTime']['output'];
  summary: Array<SubOperationStatus>;
};

export type PhysicalAddress = {
  __typename?: 'PhysicalAddress';
  country: Scalars['String']['output'];
  formatted?: Maybe<Scalars['String']['output']>;
  locality: Scalars['String']['output'];
  postalCode?: Maybe<Scalars['String']['output']>;
  region?: Maybe<Scalars['String']['output']>;
  streetAddress?: Maybe<Scalars['String']['output']>;
};

export type Post = {
  __typename?: 'Post';
  actions: Array<PostAction>;
  app?: Maybe<App>;
  author: Account;
  collectibleMetadata: NftMetadata;
  commentOn?: Maybe<Post>;
  contentUri: Scalars['URI']['output'];
  feed: PostFeedInfo;
  id: Scalars['PostId']['output'];
  isDeleted: Scalars['Boolean']['output'];
  isEdited: Scalars['Boolean']['output'];
  mentions: Array<PostMention>;
  metadata: PostMetadata;
  operations?: Maybe<LoggedInPostOperations>;
  quoteOf?: Maybe<Post>;
  root?: Maybe<Post>;
  rules: PostRules;
  slug: Scalars['PostId']['output'];
  stats: PostStats;
  timestamp: Scalars['DateTime']['output'];
};


export type PostActionsArgs = {
  request?: PostActionsParams;
};


export type PostContentUriArgs = {
  request?: PostContentUriRequest;
};

export type PostAccountPair = {
  account: Scalars['EvmAddress']['input'];
  post: Scalars['PostId']['input'];
};

export type PostAction = SimpleCollectAction | UnknownPostAction;

export type PostActionConfigInput = {
  simpleCollect?: InputMaybe<SimpleCollectActionConfigInput>;
  unknown?: InputMaybe<UnknownActionConfigInput>;
};

export type PostActionContract = SimpleCollectActionContract | TippingPostActionContract | UnknownPostActionContract;

export type PostActionContractsRequest = {
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
  includeUnknown?: Scalars['Boolean']['input'];
  onlyCollectActions?: Scalars['Boolean']['input'];
  pageSize?: PageSize;
};

export type PostActionExecuteInput = {
  simpleCollect?: InputMaybe<SimpleCollectExecuteInput>;
  tipping?: InputMaybe<TippingAmountInput>;
  unknown?: InputMaybe<UnknownActionExecuteInput>;
};

export type PostActionExecuted = SimpleCollectPostActionExecuted | TippingPostActionExecuted | UnknownPostActionExecuted;

export type PostActionExecutedNotification = {
  __typename?: 'PostActionExecutedNotification';
  actions: Array<PostActionExecuted>;
  id: Scalars['GeneratedNotificationId']['output'];
  post: Post;
};

export type PostActionExecutedNotificationFilter = {
  action?: InputMaybe<Array<Scalars['EvmAddress']['input']>>;
  actionType?: InputMaybe<Array<PostActionType>>;
  app?: InputMaybe<Array<InputMaybe<Scalars['EvmAddress']['input']>>>;
  executingAccount?: InputMaybe<Array<Scalars['EvmAddress']['input']>>;
  postId?: InputMaybe<Array<Scalars['PostId']['input']>>;
  receivingAccount?: InputMaybe<Array<Scalars['EvmAddress']['input']>>;
};

export type PostActionFilter = {
  address?: InputMaybe<Scalars['EvmAddress']['input']>;
  simpleCollect?: InputMaybe<Scalars['AlwaysTrue']['input']>;
  tipping?: InputMaybe<Scalars['AlwaysTrue']['input']>;
};

export enum PostActionType {
  SimpleCollect = 'SIMPLE_COLLECT',
  Tipping = 'TIPPING',
  Unknown = 'UNKNOWN'
}

export type PostActionsParams = {
  includeDisabled: Scalars['Boolean']['input'];
};

export type PostBookmarksFilter = {
  feeds?: InputMaybe<Array<FeedOneOf>>;
  metadata?: InputMaybe<PostMetadataFilter>;
};

export type PostBookmarksRequest = {
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<PostBookmarksFilter>;
  pageSize?: PageSize;
};

export type PostCollectedNotificationFilter = {
  app?: InputMaybe<Array<InputMaybe<Scalars['EvmAddress']['input']>>>;
  author?: InputMaybe<Array<Scalars['EvmAddress']['input']>>;
  collector?: InputMaybe<Array<Scalars['EvmAddress']['input']>>;
  postId?: InputMaybe<Array<Scalars['PostId']['input']>>;
};

export type PostContentUriRequest = {
  useSnapshot: Scalars['Boolean']['input'];
};

export type PostCreatedNotificationFilter = {
  app?: InputMaybe<Array<InputMaybe<Scalars['EvmAddress']['input']>>>;
  author?: InputMaybe<Array<Scalars['EvmAddress']['input']>>;
  feed?: InputMaybe<Array<Scalars['EvmAddress']['input']>>;
  parentPostId?: InputMaybe<Array<InputMaybe<Scalars['PostId']['input']>>>;
  postTypes?: InputMaybe<Array<Array<PostType>>>;
};

export type PostDeletedNotificationFilter = {
  app?: InputMaybe<Array<InputMaybe<Scalars['EvmAddress']['input']>>>;
  author?: InputMaybe<Array<Scalars['EvmAddress']['input']>>;
  feed?: InputMaybe<Array<Scalars['EvmAddress']['input']>>;
  parentPostId?: InputMaybe<Array<InputMaybe<Scalars['PostId']['input']>>>;
  postTypes?: InputMaybe<Array<Array<PostType>>>;
};

export type PostEdit = {
  __typename?: 'PostEdit';
  metadata: PostMetadata;
  timestamp: Scalars['DateTime']['output'];
};

export type PostEditedNotificationFilter = {
  app?: InputMaybe<Array<InputMaybe<Scalars['EvmAddress']['input']>>>;
  author?: InputMaybe<Array<Scalars['EvmAddress']['input']>>;
  feed?: InputMaybe<Array<Scalars['EvmAddress']['input']>>;
  parentPostId?: InputMaybe<Array<InputMaybe<Scalars['PostId']['input']>>>;
  postTypes?: InputMaybe<Array<Array<PostType>>>;
};

export type PostEditsRequest = {
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
  pageSize?: PageSize;
  post: Scalars['PostId']['input'];
};

export type PostExecutedActions = {
  __typename?: 'PostExecutedActions';
  account: Account;
  firstAt: Scalars['DateTime']['output'];
  lastAt: Scalars['DateTime']['output'];
  total: Scalars['Int']['output'];
};

export type PostFeedInfo = {
  __typename?: 'PostFeedInfo';
  address: Scalars['EvmAddress']['output'];
  group?: Maybe<PostGroupInfo>;
  metadata?: Maybe<FeedMetadata>;
};

export type PostForYou = {
  __typename?: 'PostForYou';
  post: Post;
  source: ForYouSource;
};

export type PostGroupInfo = {
  __typename?: 'PostGroupInfo';
  address: Scalars['EvmAddress']['output'];
  metadata?: Maybe<GroupMetadata>;
};

export type PostMention = AccountMention | GroupMention;

export type PostMetadata = ArticleMetadata | AudioMetadata | CheckingInMetadata | EmbedMetadata | EventMetadata | ImageMetadata | LinkMetadata | LivestreamMetadata | MintMetadata | SpaceMetadata | StoryMetadata | TextOnlyMetadata | ThreeDMetadata | TransactionMetadata | UnknownPostMetadata | VideoMetadata;

export type PostMetadataContentWarningFilter = {
  oneOf: Array<ContentWarning>;
};

export type PostMetadataFilter = {
  contentWarning?: InputMaybe<PostMetadataContentWarningFilter>;
  mainContentFocus?: InputMaybe<Array<MainContentFocus>>;
  tags?: InputMaybe<PostMetadataTagsFilter>;
};

export type PostMetadataTagsFilter = {
  all?: InputMaybe<Array<Scalars['String']['input']>>;
  oneOf?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type PostNotInterestedRequest = {
  post: Scalars['PostId']['input'];
};

export type PostOperationValidationFailed = {
  __typename?: 'PostOperationValidationFailed';
  reason: Scalars['String']['output'];
  unsatisfiedRules?: Maybe<PostUnsatisfiedRules>;
};

export type PostOperationValidationOutcome = PostOperationValidationFailed | PostOperationValidationPassed | PostOperationValidationUnknown;

export type PostOperationValidationPassed = {
  __typename?: 'PostOperationValidationPassed';
  passed: Scalars['AlwaysTrue']['output'];
};

export type PostOperationValidationRule = FeedRule | PostRule;

export type PostOperationValidationUnknown = {
  __typename?: 'PostOperationValidationUnknown';
  extraChecksRequired: Array<PostOperationValidationRule>;
};

export type PostReaction = {
  __typename?: 'PostReaction';
  app?: Maybe<Scalars['EvmAddress']['output']>;
  reactedAt: Scalars['DateTime']['output'];
  reaction: PostReactionType;
};

export type PostReactionAddedNotificationFilter = {
  app?: InputMaybe<Array<Scalars['EvmAddress']['input']>>;
  postId?: InputMaybe<Array<Scalars['PostId']['input']>>;
  reactingAccount?: InputMaybe<Array<Scalars['EvmAddress']['input']>>;
  reactionType?: InputMaybe<Array<PostReactionType>>;
};

export enum PostReactionOrderBy {
  AccountScore = 'ACCOUNT_SCORE',
  Default = 'DEFAULT'
}

export type PostReactionRemovedNotificationFilter = {
  app?: InputMaybe<Array<Scalars['EvmAddress']['input']>>;
  postId?: InputMaybe<Array<Scalars['PostId']['input']>>;
  reactingAccount?: InputMaybe<Array<Scalars['EvmAddress']['input']>>;
  reactionType?: InputMaybe<Array<PostReactionType>>;
};

export type PostReactionStatus = {
  __typename?: 'PostReactionStatus';
  account: Scalars['EvmAddress']['output'];
  app?: Maybe<Scalars['EvmAddress']['output']>;
  postId: Scalars['PostId']['output'];
  result: Scalars['Boolean']['output'];
};

export type PostReactionStatusRequest = {
  filter?: InputMaybe<PostReactionsFilter>;
  pairs: Array<PostAccountPair>;
};

export enum PostReactionType {
  Downvote = 'DOWNVOTE',
  Upvote = 'UPVOTE'
}

export type PostReactionsFilter = {
  anyOf?: InputMaybe<Array<PostReactionType>>;
};

export type PostReactionsRequest = {
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<PostReactionsFilter>;
  orderBy?: InputMaybe<PostReactionOrderBy>;
  pageSize?: PageSize;
  post: Scalars['PostId']['input'];
};

export enum PostReferenceType {
  CommentOn = 'COMMENT_ON',
  QuoteOf = 'QUOTE_OF',
  RepostOf = 'REPOST_OF'
}

export type PostReferencesRequest = {
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
  pageSize?: PageSize;
  referenceTypes: Array<PostReferenceType>;
  referencedPost: Scalars['PostId']['input'];
  relevancyFilter?: ReferenceRelevancyFilter;
  visibilityFilter?: PostVisibilityFilter;
};

export enum PostReportReason {
  AnimalAbuse = 'ANIMAL_ABUSE',
  DirectThreat = 'DIRECT_THREAT',
  FakeEngagement = 'FAKE_ENGAGEMENT',
  Harassment = 'HARASSMENT',
  HateSpeech = 'HATE_SPEECH',
  Impersonation = 'IMPERSONATION',
  ManipulationAlgo = 'MANIPULATION_ALGO',
  Misleading = 'MISLEADING',
  MisuseHashtags = 'MISUSE_HASHTAGS',
  Nudity = 'NUDITY',
  Offensive = 'OFFENSIVE',
  Repetitive = 'REPETITIVE',
  Scam = 'SCAM',
  SelfHarm = 'SELF_HARM',
  SomethingElse = 'SOMETHING_ELSE',
  UnauthorizedSale = 'UNAUTHORIZED_SALE',
  Unrelated = 'UNRELATED',
  Violence = 'VIOLENCE'
}

export type PostReportedNotificationFilter = {
  app?: InputMaybe<Array<InputMaybe<Scalars['EvmAddress']['input']>>>;
  author?: InputMaybe<Array<Scalars['EvmAddress']['input']>>;
  feed?: InputMaybe<Array<Scalars['EvmAddress']['input']>>;
  reporter?: InputMaybe<Array<Scalars['EvmAddress']['input']>>;
};

export type PostRequest = {
  legacyId?: InputMaybe<Scalars['LegacyPublicationId']['input']>;
  post?: InputMaybe<Scalars['PostId']['input']>;
  txHash?: InputMaybe<Scalars['TxHash']['input']>;
};

export type PostResponse = {
  __typename?: 'PostResponse';
  hash: Scalars['TxHash']['output'];
};

export type PostResult = PostOperationValidationFailed | PostResponse | SelfFundedTransactionRequest | SponsoredTransactionRequest | TransactionWillFail;

export type PostRule = {
  __typename?: 'PostRule';
  address: Scalars['EvmAddress']['output'];
  config: Array<AnyKeyValue>;
  executesOn: Array<PostRuleExecuteOn>;
  id: Scalars['RuleId']['output'];
  type: PostRuleType;
};

export type PostRuleConfig = {
  followersOnlyRule?: InputMaybe<FollowersOnlyPostRuleConfig>;
  unknownRule?: InputMaybe<UnknownPostRuleConfig>;
};

export enum PostRuleExecuteOn {
  CreatingPost = 'CREATING_POST',
  EditingPost = 'EDITING_POST'
}

export enum PostRuleType {
  FollowersOnly = 'FOLLOWERS_ONLY',
  Unknown = 'UNKNOWN'
}

export enum PostRuleUnsatisfiedReason {
  FeedAccountBlocked = 'FEED_ACCOUNT_BLOCKED',
  FeedGroupGatedNotAMember = 'FEED_GROUP_GATED_NOT_A_MEMBER',
  FeedSimplePaymentNotEnoughBalance = 'FEED_SIMPLE_PAYMENT_NOT_ENOUGH_BALANCE',
  FeedTokenGatedNotATokenHolder = 'FEED_TOKEN_GATED_NOT_A_TOKEN_HOLDER',
  PostNotAFollower = 'POST_NOT_A_FOLLOWER'
}

export type PostRules = {
  __typename?: 'PostRules';
  anyOf: Array<PostRule>;
  required: Array<PostRule>;
};

export type PostRulesConfigInput = {
  anyOf?: Array<PostRuleConfig>;
  required?: Array<PostRuleConfig>;
};

export type PostRulesProcessingParams = {
  unknownRule?: InputMaybe<UnknownRuleProcessingParams>;
};

export type PostStats = {
  __typename?: 'PostStats';
  bookmarks: Scalars['Int']['output'];
  collects: Scalars['Int']['output'];
  comments: Scalars['Int']['output'];
  quotes: Scalars['Int']['output'];
  reactions: Scalars['Int']['output'];
  reposts: Scalars['Int']['output'];
  tips: Scalars['Int']['output'];
};


export type PostStatsReactionsArgs = {
  request?: StatsReactionRequest;
};

export type PostTag = {
  __typename?: 'PostTag';
  total: Scalars['Int']['output'];
  value: Scalars['String']['output'];
};

export type PostTagsFilter = {
  feeds?: InputMaybe<Array<FeedOneOf>>;
};

export enum PostTagsOrderBy {
  Alphabetical = 'ALPHABETICAL',
  MostPopular = 'MOST_POPULAR'
}

export type PostTagsRequest = {
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<PostTagsFilter>;
  orderBy?: PostTagsOrderBy;
  pageSize?: PageSize;
};

export type PostTip = {
  __typename?: 'PostTip';
  amount: Erc20Amount;
  date: Scalars['DateTime']['output'];
};

export enum PostType {
  Comment = 'COMMENT',
  Quote = 'QUOTE',
  Repost = 'REPOST',
  Root = 'ROOT'
}

export type PostUnsatisfiedRule = {
  __typename?: 'PostUnsatisfiedRule';
  config: Array<AnyKeyValue>;
  message: Scalars['String']['output'];
  reason: PostRuleUnsatisfiedReason;
  rule: Scalars['EvmAddress']['output'];
};

export type PostUnsatisfiedRules = {
  __typename?: 'PostUnsatisfiedRules';
  anyOf: Array<PostUnsatisfiedRule>;
  required: Array<PostUnsatisfiedRule>;
};

export enum PostVisibilityFilter {
  All = 'ALL',
  Hidden = 'HIDDEN',
  Visible = 'VISIBLE'
}

export type PostsExploreFilter = {
  metadata?: PostMetadataFilter;
  since?: Scalars['Int']['input'];
};

export type PostsExploreRequest = {
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: PostsExploreFilter;
  pageSize?: PageSize;
  shuffle?: Scalars['Boolean']['input'];
};

export type PostsFilter = {
  accountScore?: InputMaybe<AccountScoreFilter>;
  apps?: InputMaybe<Array<Scalars['EvmAddress']['input']>>;
  authors?: InputMaybe<Array<Scalars['EvmAddress']['input']>>;
  collectedBy?: InputMaybe<CollectedBy>;
  feeds?: InputMaybe<Array<FeedOneOf>>;
  metadata?: InputMaybe<PostMetadataFilter>;
  postTypes?: InputMaybe<Array<PostType>>;
  posts?: InputMaybe<Array<Scalars['PostId']['input']>>;
  searchQuery?: InputMaybe<Scalars['String']['input']>;
};

export type PostsForYouRequest = {
  account?: InputMaybe<Scalars['EvmAddress']['input']>;
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
  pageSize?: PageSize;
  shuffle?: Scalars['Boolean']['input'];
};

export type PostsRequest = {
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<PostsFilter>;
  pageSize?: PageSize;
};

export type PrimitiveData = AddressKeyValue | BigDecimalKeyValue | BooleanKeyValue | IntKeyValue | IntNullableKeyValue | RawKeyValue | StringKeyValue;

export type PrimitiveId = {
  account?: InputMaybe<Scalars['EvmAddress']['input']>;
  accountAction?: InputMaybe<Scalars['EvmAddress']['input']>;
  app?: InputMaybe<Scalars['EvmAddress']['input']>;
  feed?: InputMaybe<Scalars['EvmAddress']['input']>;
  graph?: InputMaybe<Scalars['EvmAddress']['input']>;
  group?: InputMaybe<Scalars['EvmAddress']['input']>;
  post?: InputMaybe<Scalars['PostId']['input']>;
  postAction?: InputMaybe<Scalars['EvmAddress']['input']>;
  sponsorship?: InputMaybe<Scalars['EvmAddress']['input']>;
  usernameNamespace?: InputMaybe<Scalars['EvmAddress']['input']>;
};

export enum PrimitiveMetadataSchema {
  Account = 'ACCOUNT',
  Action = 'ACTION',
  App = 'APP',
  Feed = 'FEED',
  Graph = 'GRAPH',
  Group = 'GROUP',
  Rule = 'RULE',
  Sponsorship = 'SPONSORSHIP',
  Username = 'USERNAME'
}

export type Query = {
  __typename?: 'Query';
  _service: _Service;
  accessControl?: Maybe<AccessControlResult>;
  account?: Maybe<Account>;
  accountBalances: Array<AnyAccountBalance>;
  accountFeedsStats: AccountFeedsStats;
  accountGraphsStats: AccountGraphsFollowStats;
  accountManagers: PaginatedAccountManagersResult;
  accountStats: AccountStats;
  accounts: PaginatedAccountsResult;
  accountsAvailable: PaginatedAccountsAvailableResult;
  accountsBlocked: PaginatedAccountsBlockedResult;
  accountsBulk: Array<Account>;
  adminsFor: PaginatedAdminsResult;
  app?: Maybe<App>;
  appFeeds: PaginatedAppFeedsResult;
  appGroups: PaginatedGroupsResult;
  appServerApiKey?: Maybe<Scalars['String']['output']>;
  appSigners: PaginatedAppSignersResult;
  appUsers: PaginatedAppUsersResult;
  apps: AppsResult;
  authenticatedSessions: PaginatedActiveAuthenticationsResult;
  canCreateUsername: CanCreateUsernameResult;
  createFrameTypedData: CreateFrameEip712TypedData;
  currentSession: AuthenticatedSession;
  debugMetadata: DebugPostMetadataResult;
  feed?: Maybe<Feed>;
  feeds: PaginatedFeedsResult;
  followStatus: Array<FollowStatusResult>;
  followers: PaginatedFollowersResult;
  followersYouKnow: PaginatedFollowersResult;
  following: PaginatedFollowingResult;
  getSnsSubscriptions: Array<SnsSubscription>;
  graph?: Maybe<Graph>;
  graphs: PaginatedGraphsResult;
  group?: Maybe<Group>;
  groupBannedAccounts: PaginatedGroupBannedAccountsResult;
  groupMembers: PaginatedGroupMembersResult;
  groupMembershipRequests: PaginatedGroupMembershipRequestsResult;
  groupStats: GroupStatsResponse;
  groups: PaginatedGroupsResult;
  health: Scalars['Boolean']['output'];
  lastLoggedInAccount?: Maybe<Account>;
  maintenance: Scalars['Boolean']['output'];
  me: MeResult;
  mlAccountRecommendations: PaginatedAccountsResult;
  mlPostsExplore: PaginatedPostsResult;
  mlPostsForYou: PaginatedPostsForYouResult;
  namespace?: Maybe<UsernameNamespace>;
  namespaceReservedUsernames: PaginatedNamespaceReservedUsernamesResult;
  namespaces: NamespacesResult;
  notifications: PaginatedNotificationResult;
  post?: Maybe<AnyPost>;
  postActionContracts: PaginatedPostActionContracts;
  postBookmarks: PaginatedAnyPostsResult;
  postEdits: PaginatedPostEditsResult;
  postReactionStatus: Array<PostReactionStatus>;
  postReactions: PaginatedPostReactionsResult;
  postReferences: PaginatedAnyPostsResult;
  postTags: PaginatedPostTagsResult;
  posts: PaginatedAnyPostsResult;
  refreshMetadataStatus: RefreshMetadataStatusResult;
  sponsorship?: Maybe<Sponsorship>;
  sponsorshipGrants: SponsorshipGrantsResult;
  sponsorshipLimitsExclusions: SponsorshipLimitsExclusionsResult;
  sponsorshipSigners: SponsorshipSignersResult;
  sponsorships: SponsorshipsResult;
  timeline: PaginatedTimelineResult;
  timelineHighlights: PaginatedPostsResult;
  transactionStatus: TransactionStatusResult;
  username?: Maybe<Username>;
  usernames: PaginatedUsernamesResult;
  verifyFrameSignature: FrameVerifySignatureResult;
  whoExecutedActionOnAccount: PaginatedAccountExecutedActionsResult;
  whoExecutedActionOnPost: PaginatedPostExecutedActionsResult;
  whoReferencedPost: PaginatedAccountsResult;
};


export type QueryAccessControlArgs = {
  request: AccessControlRequest;
};


export type QueryAccountArgs = {
  request: AccountRequest;
};


export type QueryAccountBalancesArgs = {
  request: AccountBalancesRequest;
};


export type QueryAccountFeedsStatsArgs = {
  request: AccountFeedsStatsRequest;
};


export type QueryAccountGraphsStatsArgs = {
  request: AccountGraphsStatsRequest;
};


export type QueryAccountManagersArgs = {
  request: AccountManagersRequest;
};


export type QueryAccountStatsArgs = {
  request: AccountStatsRequest;
};


export type QueryAccountsArgs = {
  request: AccountsRequest;
};


export type QueryAccountsAvailableArgs = {
  request: AccountsAvailableRequest;
};


export type QueryAccountsBlockedArgs = {
  request: AccountsBlockedRequest;
};


export type QueryAccountsBulkArgs = {
  request: AccountsBulkRequest;
};


export type QueryAdminsForArgs = {
  request: AdminsForRequest;
};


export type QueryAppArgs = {
  request: AppRequest;
};


export type QueryAppFeedsArgs = {
  request: AppFeedsRequest;
};


export type QueryAppGroupsArgs = {
  request: AppGroupsRequest;
};


export type QueryAppServerApiKeyArgs = {
  request: AppServerApiKeyRequest;
};


export type QueryAppSignersArgs = {
  request: AppSignersRequest;
};


export type QueryAppUsersArgs = {
  request: AppUsersRequest;
};


export type QueryAppsArgs = {
  request: AppsRequest;
};


export type QueryAuthenticatedSessionsArgs = {
  request: AuthenticatedSessionsRequest;
};


export type QueryCanCreateUsernameArgs = {
  request: UsernameInput;
};


export type QueryCreateFrameTypedDataArgs = {
  request: FrameEip712Request;
};


export type QueryDebugMetadataArgs = {
  debugMetadataRequest: DebugPostMetadataRequest;
};


export type QueryFeedArgs = {
  request: FeedRequest;
};


export type QueryFeedsArgs = {
  request: FeedsRequest;
};


export type QueryFollowStatusArgs = {
  request: FollowStatusRequest;
};


export type QueryFollowersArgs = {
  request: FollowersRequest;
};


export type QueryFollowersYouKnowArgs = {
  request: FollowersYouKnowRequest;
};


export type QueryFollowingArgs = {
  request: FollowingRequest;
};


export type QueryGetSnsSubscriptionsArgs = {
  request: GetSnsSubscriptionsRequest;
};


export type QueryGraphArgs = {
  request: GraphRequest;
};


export type QueryGraphsArgs = {
  request: GraphsRequest;
};


export type QueryGroupArgs = {
  request: GroupRequest;
};


export type QueryGroupBannedAccountsArgs = {
  request: GroupBannedAccountsRequest;
};


export type QueryGroupMembersArgs = {
  request: GroupMembersRequest;
};


export type QueryGroupMembershipRequestsArgs = {
  request: GroupMembershipRequestsRequest;
};


export type QueryGroupStatsArgs = {
  request: GroupStatsRequest;
};


export type QueryGroupsArgs = {
  request: GroupsRequest;
};


export type QueryLastLoggedInAccountArgs = {
  request: LastLoggedInAccountRequest;
};


export type QueryMlAccountRecommendationsArgs = {
  request: AccountRecommendationsRequest;
};


export type QueryMlPostsExploreArgs = {
  request: PostsExploreRequest;
};


export type QueryMlPostsForYouArgs = {
  request: PostsForYouRequest;
};


export type QueryNamespaceArgs = {
  request: NamespaceRequest;
};


export type QueryNamespaceReservedUsernamesArgs = {
  request: NamespaceReservedUsernamesRequest;
};


export type QueryNamespacesArgs = {
  request: NamespacesRequest;
};


export type QueryNotificationsArgs = {
  request: NotificationRequest;
};


export type QueryPostArgs = {
  request: PostRequest;
};


export type QueryPostActionContractsArgs = {
  request: PostActionContractsRequest;
};


export type QueryPostBookmarksArgs = {
  request: PostBookmarksRequest;
};


export type QueryPostEditsArgs = {
  request: PostEditsRequest;
};


export type QueryPostReactionStatusArgs = {
  request: PostReactionStatusRequest;
};


export type QueryPostReactionsArgs = {
  request: PostReactionsRequest;
};


export type QueryPostReferencesArgs = {
  request: PostReferencesRequest;
};


export type QueryPostTagsArgs = {
  request: PostTagsRequest;
};


export type QueryPostsArgs = {
  request: PostsRequest;
};


export type QueryRefreshMetadataStatusArgs = {
  request: RefreshMetadataStatusRequest;
};


export type QuerySponsorshipArgs = {
  request: SponsorshipRequest;
};


export type QuerySponsorshipGrantsArgs = {
  request: SponsorshipGrantsRequest;
};


export type QuerySponsorshipLimitsExclusionsArgs = {
  request: SponsorshipLimitExclusionsRequest;
};


export type QuerySponsorshipSignersArgs = {
  request: SponsorshipSignersRequest;
};


export type QuerySponsorshipsArgs = {
  request: SponsorshipsRequest;
};


export type QueryTimelineArgs = {
  request: TimelineRequest;
};


export type QueryTimelineHighlightsArgs = {
  request: TimelineHighlightsRequest;
};


export type QueryTransactionStatusArgs = {
  request: TransactionStatusRequest;
};


export type QueryUsernameArgs = {
  request: UsernameRequest;
};


export type QueryUsernamesArgs = {
  request: UsernamesRequest;
};


export type QueryVerifyFrameSignatureArgs = {
  request: FrameVerifySignature;
};


export type QueryWhoExecutedActionOnAccountArgs = {
  request: WhoExecutedActionOnAccountRequest;
};


export type QueryWhoExecutedActionOnPostArgs = {
  request: WhoExecutedActionOnPostRequest;
};


export type QueryWhoReferencedPostArgs = {
  request: WhoReferencedPostRequest;
};

export type QuoteNotification = {
  __typename?: 'QuoteNotification';
  id: Scalars['GeneratedNotificationId']['output'];
  quote: Post;
};

export type RawKeyValue = {
  __typename?: 'RawKeyValue';
  data: Scalars['BlockchainData']['output'];
  key: Scalars['BlockchainData']['output'];
};

export type RawKeyValueInput = {
  data: Scalars['BlockchainData']['input'];
  key: Scalars['BlockchainData']['input'];
};

export type ReactionNotification = {
  __typename?: 'ReactionNotification';
  id: Scalars['GeneratedNotificationId']['output'];
  post: Post;
  reactions: Array<NotificationAccountPostReaction>;
};

export type RecipientPercent = {
  __typename?: 'RecipientPercent';
  address: Scalars['EvmAddress']['output'];
  percent: Scalars['Float']['output'];
};

export type RecipientPercentInput = {
  address: Scalars['EvmAddress']['input'];
  percent: Scalars['Float']['input'];
};

export type RecommendAccount = {
  account: Scalars['EvmAddress']['input'];
};

export enum ReferenceRelevancyFilter {
  All = 'ALL',
  NotRelevant = 'NOT_RELEVANT',
  Relevant = 'RELEVANT'
}

export type ReferencingPostInput = {
  post: Scalars['PostId']['input'];
  postRulesProcessingParams?: InputMaybe<Array<PostRulesProcessingParams>>;
};

export type ReferralCut = {
  address: Scalars['EvmAddress']['input'];
  percent: Scalars['Float']['input'];
};

export type RefreshMetadataRequest = {
  app?: InputMaybe<Scalars['EvmAddress']['input']>;
  entity: EntityId;
};

export type RefreshMetadataResult = {
  __typename?: 'RefreshMetadataResult';
  id: Scalars['UUID']['output'];
};

export type RefreshMetadataStatusRequest = {
  id: Scalars['UUID']['input'];
};

export type RefreshMetadataStatusResult = {
  __typename?: 'RefreshMetadataStatusResult';
  id: Scalars['UUID']['output'];
  reason?: Maybe<Scalars['String']['output']>;
  status: IndexingStatus;
  updatedAt: Scalars['DateTime']['output'];
};

export type RefreshRequest = {
  refreshToken: Scalars['RefreshToken']['input'];
};

export type RefreshResult = AuthenticationTokens | ForbiddenError;

export type RejectGroupMembershipRequest = {
  accounts: Array<Scalars['EvmAddress']['input']>;
  group: Scalars['EvmAddress']['input'];
};

export type RejectGroupMembershipRequestsResponse = {
  __typename?: 'RejectGroupMembershipRequestsResponse';
  hash: Scalars['TxHash']['output'];
};

export type RejectGroupMembershipResult = RejectGroupMembershipRequestsResponse | SelfFundedTransactionRequest | SponsoredTransactionRequest | TransactionWillFail;

export type RemoveAccountManagerRequest = {
  manager: Scalars['EvmAddress']['input'];
};

export type RemoveAccountManagerResult = SelfFundedTransactionRequest | SponsoredTransactionRequest | TransactionWillFail;

export type RemoveAdminsRequest = {
  address: Scalars['EvmAddress']['input'];
  admins: Array<Scalars['EvmAddress']['input']>;
};

export type RemoveAdminsResult = SelfFundedTransactionRequest | SponsoredTransactionRequest | TransactionWillFail;

export type RemoveAppAuthorizationEndpointRequest = {
  app: Scalars['EvmAddress']['input'];
};

export type RemoveAppFeedsRequest = {
  app: Scalars['EvmAddress']['input'];
  feeds: Array<Scalars['EvmAddress']['input']>;
};

export type RemoveAppFeedsResult = SelfFundedTransactionRequest | SponsoredTransactionRequest | TransactionWillFail;

export type RemoveAppGroupsRequest = {
  app: Scalars['EvmAddress']['input'];
  groups: Array<Scalars['EvmAddress']['input']>;
};

export type RemoveAppGroupsResult = SelfFundedTransactionRequest | SponsoredTransactionRequest | TransactionWillFail;

export type RemoveAppSignersRequest = {
  app: Scalars['EvmAddress']['input'];
  signers: Array<Scalars['EvmAddress']['input']>;
};

export type RemoveAppSignersResult = SelfFundedTransactionRequest | SponsoredTransactionRequest | TransactionWillFail;

export type RemoveGroupMembersRequest = {
  accounts: Array<Scalars['EvmAddress']['input']>;
  ban?: Scalars['Boolean']['input'];
  group: Scalars['EvmAddress']['input'];
  rulesProcessingParams?: InputMaybe<Array<GroupRulesProcessingParams>>;
};

export type RemoveGroupMembersResponse = {
  __typename?: 'RemoveGroupMembersResponse';
  hash: Scalars['TxHash']['output'];
};

export type RemoveGroupMembersResult = GroupOperationValidationFailed | RemoveGroupMembersResponse | SelfFundedTransactionRequest | SponsoredTransactionRequest | TransactionWillFail;

export type RemoveSignlessResult = SelfFundedTransactionRequest | SponsoredTransactionRequest | TransactionWillFail;

export type ReportAccountRequest = {
  account: Scalars['EvmAddress']['input'];
  additionalComment?: InputMaybe<Scalars['String']['input']>;
  reason: AccountReportReason;
  referencePosts?: InputMaybe<Array<Scalars['PostId']['input']>>;
};

export type ReportPostRequest = {
  additionalComment?: InputMaybe<Scalars['String']['input']>;
  post: Scalars['PostId']['input'];
  reason: PostReportReason;
};

export type Repost = {
  __typename?: 'Repost';
  app?: Maybe<App>;
  author: Account;
  id: Scalars['PostId']['output'];
  isDeleted: Scalars['Boolean']['output'];
  repostOf: Post;
  slug: Scalars['PostId']['output'];
  timestamp: Scalars['DateTime']['output'];
};

export type RepostNotification = {
  __typename?: 'RepostNotification';
  id: Scalars['GeneratedNotificationId']['output'];
  post: Post;
  reposts: Array<NotificationAccountRepost>;
};

export type RequestGroupMembershipRequest = {
  group: Scalars['EvmAddress']['input'];
};

export type RequestGroupMembershipResponse = {
  __typename?: 'RequestGroupMembershipResponse';
  hash: Scalars['TxHash']['output'];
};

export type RequestGroupMembershipResult = RequestGroupMembershipResponse | SelfFundedTransactionRequest | SponsoredTransactionRequest | TransactionWillFail;

export type RevokeAuthenticationRequest = {
  authenticationId: Scalars['UUID']['input'];
};

export type RolloverRefreshRequest = {
  app: Scalars['EvmAddress']['input'];
  refreshToken: Scalars['LegacyRefreshToken']['input'];
};

export enum SelfFundedFallbackReason {
  CannotSponsor = 'CANNOT_SPONSOR',
  NotSponsored = 'NOT_SPONSORED'
}

export type SelfFundedTransactionRequest = {
  __typename?: 'SelfFundedTransactionRequest';
  raw: Eip1559TransactionRequest;
  reason: Scalars['String']['output'];
  selfFundedReason?: Maybe<SelfFundedFallbackReason>;
};

export type SetAccountMetadataRequest = {
  metadataUri: Scalars['URI']['input'];
};

export type SetAccountMetadataResponse = {
  __typename?: 'SetAccountMetadataResponse';
  hash: Scalars['TxHash']['output'];
};

export type SetAccountMetadataResult = SelfFundedTransactionRequest | SetAccountMetadataResponse | SponsoredTransactionRequest | TransactionWillFail;

export type SetAppGraphRequest = {
  app: Scalars['EvmAddress']['input'];
  graph: GraphChoiceOneOf;
};

export type SetAppGraphResult = SelfFundedTransactionRequest | SponsoredTransactionRequest | TransactionWillFail;

export type SetAppMetadataRequest = {
  app: Scalars['EvmAddress']['input'];
  metadataUri: Scalars['String']['input'];
};

export type SetAppMetadataResult = SelfFundedTransactionRequest | SponsoredTransactionRequest | TransactionWillFail;

export type SetAppSponsorshipRequest = {
  app: Scalars['EvmAddress']['input'];
  sponsorship: Scalars['EvmAddress']['input'];
};

export type SetAppSponsorshipResult = SelfFundedTransactionRequest | SponsoredTransactionRequest | TransactionWillFail;

export type SetAppTreasuryRequest = {
  app: Scalars['EvmAddress']['input'];
  treasury: Scalars['EvmAddress']['input'];
};

export type SetAppTreasuryResult = SelfFundedTransactionRequest | SponsoredTransactionRequest | TransactionWillFail;

export type SetAppUsernameNamespaceRequest = {
  app: Scalars['EvmAddress']['input'];
  usernameNamespace: UsernameNamespaceChoiceOneOf;
};

export type SetAppUsernameNamespaceResult = SelfFundedTransactionRequest | SponsoredTransactionRequest | TransactionWillFail;

export type SetAppVerificationRequest = {
  app: Scalars['EvmAddress']['input'];
  enabled: Scalars['Boolean']['input'];
};

export type SetAppVerificationResult = SelfFundedTransactionRequest | SponsoredTransactionRequest | TransactionWillFail;

export type SetDefaultAppFeedRequest = {
  app: Scalars['EvmAddress']['input'];
  feed: FeedChoiceOneOf;
};

export type SetDefaultAppFeedResult = SelfFundedTransactionRequest | SponsoredTransactionRequest | TransactionWillFail;

export type SetFeedMetadataRequest = {
  feed: Scalars['EvmAddress']['input'];
  metadataUri: Scalars['String']['input'];
};

export type SetFeedMetadataResponse = {
  __typename?: 'SetFeedMetadataResponse';
  hash: Scalars['TxHash']['output'];
};

export type SetFeedMetadataResult = SelfFundedTransactionRequest | SetFeedMetadataResponse | SponsoredTransactionRequest | TransactionWillFail;

export type SetGraphMetadataRequest = {
  graph: Scalars['EvmAddress']['input'];
  metadataUri: Scalars['String']['input'];
};

export type SetGraphMetadataResult = SelfFundedTransactionRequest | SponsoredTransactionRequest | TransactionWillFail;

export type SetGroupMetadataRequest = {
  group: Scalars['EvmAddress']['input'];
  metadataUri: Scalars['String']['input'];
};

export type SetGroupMetadataResponse = {
  __typename?: 'SetGroupMetadataResponse';
  hash: Scalars['TxHash']['output'];
};

export type SetGroupMetadataResult = SelfFundedTransactionRequest | SetGroupMetadataResponse | SponsoredTransactionRequest | TransactionWillFail;

export type SetNamespaceMetadataRequest = {
  metadataUri: Scalars['String']['input'];
  namespace: Scalars['EvmAddress']['input'];
};

export type SetNamespaceMetadataResult = SelfFundedTransactionRequest | SponsoredTransactionRequest | TransactionWillFail;

export type SetSponsorshipMetadataRequest = {
  metadataUri: Scalars['URI']['input'];
  sponsorship: Scalars['EvmAddress']['input'];
};

export type SetSponsorshipMetadataResult = SelfFundedTransactionRequest | SponsoredTransactionRequest | TransactionWillFail;

export type SignedAuthChallenge = {
  id: Scalars['UUID']['input'];
  signature: Scalars['Signature']['input'];
};

export type SimpleCollectAction = {
  __typename?: 'SimpleCollectAction';
  address: Scalars['EvmAddress']['output'];
  collectLimit?: Maybe<Scalars['Int']['output']>;
  collectNftAddress: Scalars['EvmAddress']['output'];
  endsAt?: Maybe<Scalars['DateTime']['output']>;
  followerOnGraph?: Maybe<FollowerOn>;
  isImmutable: Scalars['Boolean']['output'];
  payToCollect?: Maybe<PayToCollectConfig>;
};

export type SimpleCollectActionConfigInput = {
  collectLimit?: InputMaybe<Scalars['Int']['input']>;
  endsAt?: InputMaybe<Scalars['DateTime']['input']>;
  followerOnGraph?: InputMaybe<FollowerOnInput>;
  isImmutable?: Scalars['Boolean']['input'];
  payToCollect?: InputMaybe<PayToCollectInput>;
};

export type SimpleCollectActionContract = {
  __typename?: 'SimpleCollectActionContract';
  address: Scalars['EvmAddress']['output'];
};

export type SimpleCollectExecuteInput = {
  referrals?: InputMaybe<Array<ReferralCut>>;
  selected: Scalars['AlwaysTrue']['input'];
};

export type SimpleCollectPostActionExecuted = {
  __typename?: 'SimpleCollectPostActionExecuted';
  action: SimpleCollectAction;
  executedAt: Scalars['DateTime']['output'];
  executedBy: Account;
};

export type SimpleCollectValidationFailed = {
  __typename?: 'SimpleCollectValidationFailed';
  reason: Scalars['String']['output'];
  reasonType: SimpleCollectValidationFailedReason;
};

export enum SimpleCollectValidationFailedReason {
  EndDateReached = 'END_DATE_REACHED',
  LimitReached = 'LIMIT_REACHED',
  NotAFollower = 'NOT_A_FOLLOWER',
  NotEnabled = 'NOT_ENABLED',
  NotEnoughBalance = 'NOT_ENOUGH_BALANCE',
  PostDeleted = 'POST_DELETED'
}

export type SimpleCollectValidationOutcome = SimpleCollectValidationFailed | SimpleCollectValidationPassed;

export type SimpleCollectValidationPassed = {
  __typename?: 'SimpleCollectValidationPassed';
  passed: Scalars['AlwaysTrue']['output'];
};

export type SimplePaymentFeedRuleConfig = {
  cost: AmountInput;
  recipient: Scalars['EvmAddress']['input'];
  referralShare?: Scalars['Float']['input'];
};

export type SimplePaymentFollowRuleConfig = {
  cost: AmountInput;
  recipient: Scalars['EvmAddress']['input'];
  referralShare?: Scalars['Float']['input'];
};

export type SimplePaymentGroupRuleConfig = {
  cost: AmountInput;
  recipient: Scalars['EvmAddress']['input'];
  referralShare?: Scalars['Float']['input'];
};

export type SimplePaymentRuleProcessingParamsInput = {
  referrals: Array<ReferralCut>;
};

export enum SnsNotificationType {
  AccountActionExecuted = 'ACCOUNT_ACTION_EXECUTED',
  AccountBlocked = 'ACCOUNT_BLOCKED',
  AccountContentConsumed = 'ACCOUNT_CONTENT_CONSUMED',
  AccountCreated = 'ACCOUNT_CREATED',
  AccountFollowed = 'ACCOUNT_FOLLOWED',
  AccountFollowRulesUpdated = 'ACCOUNT_FOLLOW_RULES_UPDATED',
  AccountManagerAdded = 'ACCOUNT_MANAGER_ADDED',
  AccountManagerRemoved = 'ACCOUNT_MANAGER_REMOVED',
  AccountManagerUpdated = 'ACCOUNT_MANAGER_UPDATED',
  AccountMentioned = 'ACCOUNT_MENTIONED',
  AccountMetadataUpdated = 'ACCOUNT_METADATA_UPDATED',
  AccountOwnershipTransferred = 'ACCOUNT_OWNERSHIP_TRANSFERRED',
  AccountReported = 'ACCOUNT_REPORTED',
  AccountUnblocked = 'ACCOUNT_UNBLOCKED',
  AccountUnfollowed = 'ACCOUNT_UNFOLLOWED',
  AccountUsernameAssigned = 'ACCOUNT_USERNAME_ASSIGNED',
  AccountUsernameCreated = 'ACCOUNT_USERNAME_CREATED',
  AccountUsernameUnassigned = 'ACCOUNT_USERNAME_UNASSIGNED',
  MediaSnapshotError = 'MEDIA_SNAPSHOT_ERROR',
  MediaSnapshotSuccess = 'MEDIA_SNAPSHOT_SUCCESS',
  MetadataSnapshotError = 'METADATA_SNAPSHOT_ERROR',
  MetadataSnapshotSuccess = 'METADATA_SNAPSHOT_SUCCESS',
  MlAccountSignal = 'ML_ACCOUNT_SIGNAL',
  MlRecommendedAccountDismissed = 'ML_RECOMMENDED_ACCOUNT_DISMISSED',
  PostActionExecuted = 'POST_ACTION_EXECUTED',
  PostCollected = 'POST_COLLECTED',
  PostCreated = 'POST_CREATED',
  PostDeleted = 'POST_DELETED',
  PostEdited = 'POST_EDITED',
  PostReactionAdded = 'POST_REACTION_ADDED',
  PostReactionRemoved = 'POST_REACTION_REMOVED',
  PostReported = 'POST_REPORTED',
  RefreshMetadataError = 'REFRESH_METADATA_ERROR',
  RefreshMetadataSuccess = 'REFRESH_METADATA_SUCCESS'
}

export type SnsSubscription = {
  __typename?: 'SnsSubscription';
  account: Scalars['EvmAddress']['output'];
  app?: Maybe<Scalars['EvmAddress']['output']>;
  filter: Scalars['JSON']['output'];
  id: Scalars['UUID']['output'];
  topic: SnsNotificationType;
  topicArn: Scalars['String']['output'];
  webhook: Scalars['URL']['output'];
};

export type SnsTopicInput = {
  accountActionExecuted?: InputMaybe<AccountActionExecutedNotificationFilter>;
  accountBlocked?: InputMaybe<AccountBlockedNotificationFilter>;
  accountCreated?: InputMaybe<AccountCreatedNotificationFilter>;
  accountFollowed?: InputMaybe<AccountFollowedNotificationFilter>;
  accountManagerAdded?: InputMaybe<AccountManagerAddedNotificationFilter>;
  accountManagerRemoved?: InputMaybe<AccountManagerRemovedNotificationFilter>;
  accountManagerUpdated?: InputMaybe<AccountManagerUpdatedNotificationFilter>;
  accountMentioned?: InputMaybe<AccountMentionedNotificationFilter>;
  accountOwnershipTransferred?: InputMaybe<AccountOwnershipTransferredNotificationFilter>;
  accountReported?: InputMaybe<AccountReportedNotificationFilter>;
  accountUnblocked?: InputMaybe<AccountUnblockedNotificationFilter>;
  accountUnfollowed?: InputMaybe<AccountUnfollowedNotificationFilter>;
  accountUsernameAssigned?: InputMaybe<AccountUsernameAssignedNotificationFilter>;
  accountUsernameCreated?: InputMaybe<AccountUsernameCreatedNotificationFilter>;
  accountUsernameUnassigned?: InputMaybe<AccountUsernameUnassignedNotificationFilter>;
  mediaSnapshotError?: InputMaybe<MediaSnapshotNotificationFilter>;
  mediaSnapshotSuccess?: InputMaybe<MediaSnapshotNotificationFilter>;
  metadataSnapshotError?: InputMaybe<MetadataSnapshotNotificationFilter>;
  metadataSnapshotSuccess?: InputMaybe<MetadataSnapshotNotificationFilter>;
  postActionExecuted?: InputMaybe<PostActionExecutedNotificationFilter>;
  postCollected?: InputMaybe<PostCollectedNotificationFilter>;
  postCreated?: InputMaybe<PostCreatedNotificationFilter>;
  postDeleted?: InputMaybe<PostDeletedNotificationFilter>;
  postEdited?: InputMaybe<PostEditedNotificationFilter>;
  postReactionAdded?: InputMaybe<PostReactionAddedNotificationFilter>;
  postReactionRemoved?: InputMaybe<PostReactionRemovedNotificationFilter>;
  postReported?: InputMaybe<PostReportedNotificationFilter>;
  refreshMetadataError?: InputMaybe<MetadataSnapshotNotificationFilter>;
  refreshMetadataSuccess?: InputMaybe<MetadataSnapshotNotificationFilter>;
};

export type SpaceMetadata = {
  __typename?: 'SpaceMetadata';
  attachments: Array<AnyMedia>;
  attributes: Array<MetadataAttribute>;
  content: Scalars['String']['output'];
  contentWarning?: Maybe<ContentWarning>;
  id: Scalars['MetadataId']['output'];
  link: Scalars['URI']['output'];
  locale: Scalars['Locale']['output'];
  mainContentFocus: MainContentFocus;
  startsAt: Scalars['DateTime']['output'];
  tags?: Maybe<Array<Scalars['Tag']['output']>>;
  title: Scalars['String']['output'];
};

export enum SponsoredFallbackReason {
  CannotDelegate = 'CANNOT_DELEGATE',
  RequiresSignature = 'REQUIRES_SIGNATURE',
  SignlessDisabled = 'SIGNLESS_DISABLED',
  SignlessFailed = 'SIGNLESS_FAILED'
}

export type SponsoredTransactionRequest = {
  __typename?: 'SponsoredTransactionRequest';
  raw: Eip712TransactionRequest;
  reason: Scalars['String']['output'];
  sponsoredReason?: Maybe<SponsoredFallbackReason>;
};

export type Sponsorship = {
  __typename?: 'Sponsorship';
  address: Scalars['EvmAddress']['output'];
  allowsLensAccess: Scalars['Boolean']['output'];
  balance: Scalars['BigDecimal']['output'];
  createdAt: Scalars['DateTime']['output'];
  isPaused: Scalars['Boolean']['output'];
  limits?: Maybe<SponsorshipLimits>;
  metadata?: Maybe<SponsorshipMetadata>;
  owner: Scalars['EvmAddress']['output'];
};

export type SponsorshipAllowance = {
  __typename?: 'SponsorshipAllowance';
  allowance: Scalars['Int']['output'];
  allowanceLeft: Scalars['Int']['output'];
  allowanceUsed: Scalars['Int']['output'];
  window: SponsorshipRateLimitWindow;
};

export type SponsorshipGrant = {
  __typename?: 'SponsorshipGrant';
  amount: NativeAmount;
  grantedAt: Scalars['DateTime']['output'];
  id: Scalars['GrantId']['output'];
};

export type SponsorshipGrantsFilter = {
  linkedToApp?: InputMaybe<Scalars['EvmAddress']['input']>;
  sponsorship?: InputMaybe<Scalars['EvmAddress']['input']>;
};

export type SponsorshipGrantsRequest = {
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
  filter: SponsorshipGrantsFilter;
  pageSize?: PageSize;
};

export type SponsorshipGrantsResult = {
  __typename?: 'SponsorshipGrantsResult';
  items: Array<SponsorshipGrant>;
  pageInfo: PaginatedResultInfo;
};

export type SponsorshipLimitExclusionsFilter = {
  sponsorship: Scalars['EvmAddress']['input'];
};

export enum SponsorshipLimitExclusionsOrderBy {
  Alphabetical = 'ALPHABETICAL',
  LatestFirst = 'LATEST_FIRST',
  OldestFirst = 'OLDEST_FIRST'
}

export type SponsorshipLimitExclusionsRequest = {
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
  filter: SponsorshipLimitExclusionsFilter;
  orderBy?: SponsorshipLimitExclusionsOrderBy;
  pageSize?: PageSize;
};

export type SponsorshipLimits = {
  __typename?: 'SponsorshipLimits';
  global?: Maybe<SponsorshipRateLimit>;
  user?: Maybe<SponsorshipRateLimit>;
};

export type SponsorshipLimitsExclusionsResult = {
  __typename?: 'SponsorshipLimitsExclusionsResult';
  items: Array<SponsorshipLimitsExempt>;
  pageInfo: PaginatedResultInfo;
};

export type SponsorshipLimitsExempt = {
  __typename?: 'SponsorshipLimitsExempt';
  address: Scalars['EvmAddress']['output'];
  createdAt: Scalars['DateTime']['output'];
  label: Scalars['String']['output'];
  sponsorship: Scalars['EvmAddress']['output'];
};

export type SponsorshipMetadata = {
  __typename?: 'SponsorshipMetadata';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type SponsorshipRateLimit = {
  __typename?: 'SponsorshipRateLimit';
  limit: Scalars['Int']['output'];
  window: SponsorshipRateLimitWindow;
};

export type SponsorshipRateLimitInput = {
  limit: Scalars['Int']['input'];
  window: SponsorshipRateLimitWindow;
};

export enum SponsorshipRateLimitWindow {
  Day = 'DAY',
  Hour = 'HOUR',
  Month = 'MONTH',
  Week = 'WEEK'
}

export type SponsorshipRateLimitsExempt = {
  address: Scalars['EvmAddress']['input'];
  label: Scalars['String']['input'];
};

export type SponsorshipRateLimitsInput = {
  global?: InputMaybe<SponsorshipRateLimitInput>;
  user?: InputMaybe<SponsorshipRateLimitInput>;
};

export type SponsorshipRequest = {
  address?: InputMaybe<Scalars['EvmAddress']['input']>;
  txHash?: InputMaybe<Scalars['TxHash']['input']>;
};

export type SponsorshipSigner = {
  __typename?: 'SponsorshipSigner';
  address: Scalars['EvmAddress']['output'];
  createdAt: Scalars['DateTime']['output'];
  label: Scalars['String']['output'];
  sponsorship: Scalars['EvmAddress']['output'];
};

export type SponsorshipSignerInput = {
  address: Scalars['EvmAddress']['input'];
  label: Scalars['String']['input'];
};

export type SponsorshipSignersFilter = {
  sponsorship: Scalars['EvmAddress']['input'];
};

export enum SponsorshipSignersOrderBy {
  Alphabetical = 'ALPHABETICAL',
  LatestFirst = 'LATEST_FIRST',
  OldestFirst = 'OLDEST_FIRST'
}

export type SponsorshipSignersRequest = {
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
  filter: SponsorshipSignersFilter;
  orderBy?: SponsorshipSignersOrderBy;
  pageSize?: PageSize;
};

export type SponsorshipSignersResult = {
  __typename?: 'SponsorshipSignersResult';
  items: Array<SponsorshipSigner>;
  pageInfo: PaginatedResultInfo;
};

export type SponsorshipsFilter = {
  managedBy: ManagedBy;
};

export enum SponsorshipsOrderBy {
  Alphabetical = 'ALPHABETICAL',
  LatestFirst = 'LATEST_FIRST',
  OldestFirst = 'OLDEST_FIRST'
}

export type SponsorshipsRequest = {
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
  filter: SponsorshipsFilter;
  orderBy?: SponsorshipsOrderBy;
  pageSize?: PageSize;
};

export type SponsorshipsResult = {
  __typename?: 'SponsorshipsResult';
  items: Array<Sponsorship>;
  pageInfo: PaginatedResultInfo;
};

export type StatsReactionRequest = {
  type: PostReactionType;
};

export type StoryMetadata = {
  __typename?: 'StoryMetadata';
  asset: AnyMedia;
  attributes: Array<MetadataAttribute>;
  content: Scalars['String']['output'];
  contentWarning?: Maybe<ContentWarning>;
  id: Scalars['MetadataId']['output'];
  locale: Scalars['Locale']['output'];
  mainContentFocus: MainContentFocus;
  tags?: Maybe<Array<Scalars['Tag']['output']>>;
};

export type StringKeyValue = {
  __typename?: 'StringKeyValue';
  key: Scalars['String']['output'];
  string: Scalars['String']['output'];
};

export type SubOperationStatus = {
  __typename?: 'SubOperationStatus';
  operation: TransactionOperation;
  status: IndexingStatus;
};

export type SwitchAccountRequest = {
  account: Scalars['EvmAddress']['input'];
};

export type SwitchAccountResult = AuthenticationTokens | ForbiddenError;

export type TextOnlyMetadata = {
  __typename?: 'TextOnlyMetadata';
  attributes: Array<MetadataAttribute>;
  content: Scalars['String']['output'];
  contentWarning?: Maybe<ContentWarning>;
  id: Scalars['MetadataId']['output'];
  locale: Scalars['Locale']['output'];
  mainContentFocus: MainContentFocus;
  tags?: Maybe<Array<Scalars['Tag']['output']>>;
};

export type ThreeDAsset = {
  __typename?: 'ThreeDAsset';
  format: ThreeDAssetFormat;
  license?: Maybe<MetadataLicenseType>;
  playerUrl: Scalars['URI']['output'];
  uri: Scalars['URI']['output'];
  zipPath?: Maybe<Scalars['String']['output']>;
};

export enum ThreeDAssetFormat {
  Fbx = 'FBX',
  GLtfGlb = 'G_LTF_GLB',
  Obj = 'OBJ',
  Vrm = 'VRM'
}

export type ThreeDMetadata = {
  __typename?: 'ThreeDMetadata';
  assets: Array<ThreeDAsset>;
  attachments: Array<AnyMedia>;
  attributes: Array<MetadataAttribute>;
  content: Scalars['String']['output'];
  contentWarning?: Maybe<ContentWarning>;
  id: Scalars['MetadataId']['output'];
  locale: Scalars['Locale']['output'];
  mainContentFocus: MainContentFocus;
  tags?: Maybe<Array<Scalars['Tag']['output']>>;
};

export enum TimelineEventItemType {
  Comment = 'COMMENT',
  Post = 'POST',
  Quote = 'QUOTE',
  Repost = 'REPOST'
}

export type TimelineFilter = {
  apps?: InputMaybe<Array<Scalars['EvmAddress']['input']>>;
  eventType?: InputMaybe<Array<TimelineEventItemType>>;
  feeds?: InputMaybe<Array<FeedOneOf>>;
  metadata?: InputMaybe<PostMetadataFilter>;
};

export type TimelineHighlightsFilter = {
  apps?: InputMaybe<Array<Scalars['EvmAddress']['input']>>;
  feeds?: InputMaybe<Array<FeedOneOf>>;
  metadata?: InputMaybe<PostMetadataFilter>;
};

export type TimelineHighlightsRequest = {
  account: Scalars['EvmAddress']['input'];
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<TimelineHighlightsFilter>;
  pageSize?: PageSize;
};

export type TimelineItem = {
  __typename?: 'TimelineItem';
  comments: Array<Post>;
  id: Scalars['UUID']['output'];
  primary: Post;
  reposts: Array<Repost>;
};

export type TimelineRequest = {
  account: Scalars['EvmAddress']['input'];
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<TimelineFilter>;
};

export enum TimezoneId {
  AfricaAbidjan = 'AFRICA_ABIDJAN',
  AfricaAccra = 'AFRICA_ACCRA',
  AfricaAddisAbaba = 'AFRICA_ADDIS_ABABA',
  AfricaAlgiers = 'AFRICA_ALGIERS',
  AfricaAsmera = 'AFRICA_ASMERA',
  AfricaBamako = 'AFRICA_BAMAKO',
  AfricaBangui = 'AFRICA_BANGUI',
  AfricaBanjul = 'AFRICA_BANJUL',
  AfricaBissau = 'AFRICA_BISSAU',
  AfricaBlantyre = 'AFRICA_BLANTYRE',
  AfricaBrazzaville = 'AFRICA_BRAZZAVILLE',
  AfricaBujumbura = 'AFRICA_BUJUMBURA',
  AfricaCairo = 'AFRICA_CAIRO',
  AfricaCasablanca = 'AFRICA_CASABLANCA',
  AfricaCeuta = 'AFRICA_CEUTA',
  AfricaConakry = 'AFRICA_CONAKRY',
  AfricaDakar = 'AFRICA_DAKAR',
  AfricaDarEsSalaam = 'AFRICA_DAR_ES_SALAAM',
  AfricaDjibouti = 'AFRICA_DJIBOUTI',
  AfricaDouala = 'AFRICA_DOUALA',
  AfricaElAaiun = 'AFRICA_EL_AAIUN',
  AfricaFreetown = 'AFRICA_FREETOWN',
  AfricaGaborone = 'AFRICA_GABORONE',
  AfricaHarare = 'AFRICA_HARARE',
  AfricaJohannesburg = 'AFRICA_JOHANNESBURG',
  AfricaJuba = 'AFRICA_JUBA',
  AfricaKampala = 'AFRICA_KAMPALA',
  AfricaKhartoum = 'AFRICA_KHARTOUM',
  AfricaKigali = 'AFRICA_KIGALI',
  AfricaKinshasa = 'AFRICA_KINSHASA',
  AfricaLagos = 'AFRICA_LAGOS',
  AfricaLibreville = 'AFRICA_LIBREVILLE',
  AfricaLome = 'AFRICA_LOME',
  AfricaLuanda = 'AFRICA_LUANDA',
  AfricaLubumbashi = 'AFRICA_LUBUMBASHI',
  AfricaLusaka = 'AFRICA_LUSAKA',
  AfricaMalabo = 'AFRICA_MALABO',
  AfricaMaputo = 'AFRICA_MAPUTO',
  AfricaMaseru = 'AFRICA_MASERU',
  AfricaMbabane = 'AFRICA_MBABANE',
  AfricaMogadishu = 'AFRICA_MOGADISHU',
  AfricaMonrovia = 'AFRICA_MONROVIA',
  AfricaNairobi = 'AFRICA_NAIROBI',
  AfricaNdjamena = 'AFRICA_NDJAMENA',
  AfricaNiamey = 'AFRICA_NIAMEY',
  AfricaNouakchott = 'AFRICA_NOUAKCHOTT',
  AfricaOuagadougou = 'AFRICA_OUAGADOUGOU',
  AfricaPortoNovo = 'AFRICA_PORTO_NOVO',
  AfricaSaoTome = 'AFRICA_SAO_TOME',
  AfricaTripoli = 'AFRICA_TRIPOLI',
  AfricaTunis = 'AFRICA_TUNIS',
  AfricaWindhoek = 'AFRICA_WINDHOEK',
  AmericaAdak = 'AMERICA_ADAK',
  AmericaAnchorage = 'AMERICA_ANCHORAGE',
  AmericaAnguilla = 'AMERICA_ANGUILLA',
  AmericaAntigua = 'AMERICA_ANTIGUA',
  AmericaAraguaina = 'AMERICA_ARAGUAINA',
  AmericaArgentinaLaRioja = 'AMERICA_ARGENTINA_LA_RIOJA',
  AmericaArgentinaRioGallegos = 'AMERICA_ARGENTINA_RIO_GALLEGOS',
  AmericaArgentinaSalta = 'AMERICA_ARGENTINA_SALTA',
  AmericaArgentinaSanJuan = 'AMERICA_ARGENTINA_SAN_JUAN',
  AmericaArgentinaSanLuis = 'AMERICA_ARGENTINA_SAN_LUIS',
  AmericaArgentinaTucuman = 'AMERICA_ARGENTINA_TUCUMAN',
  AmericaArgentinaUshuaia = 'AMERICA_ARGENTINA_USHUAIA',
  AmericaAruba = 'AMERICA_ARUBA',
  AmericaAsuncion = 'AMERICA_ASUNCION',
  AmericaBahia = 'AMERICA_BAHIA',
  AmericaBahiaBanderas = 'AMERICA_BAHIA_BANDERAS',
  AmericaBarbados = 'AMERICA_BARBADOS',
  AmericaBelem = 'AMERICA_BELEM',
  AmericaBelize = 'AMERICA_BELIZE',
  AmericaBlancSablon = 'AMERICA_BLANC_SABLON',
  AmericaBoaVista = 'AMERICA_BOA_VISTA',
  AmericaBogota = 'AMERICA_BOGOTA',
  AmericaBoise = 'AMERICA_BOISE',
  AmericaBuenosAires = 'AMERICA_BUENOS_AIRES',
  AmericaCambridgeBay = 'AMERICA_CAMBRIDGE_BAY',
  AmericaCampoGrande = 'AMERICA_CAMPO_GRANDE',
  AmericaCancun = 'AMERICA_CANCUN',
  AmericaCaracas = 'AMERICA_CARACAS',
  AmericaCatamarca = 'AMERICA_CATAMARCA',
  AmericaCayenne = 'AMERICA_CAYENNE',
  AmericaCayman = 'AMERICA_CAYMAN',
  AmericaChicago = 'AMERICA_CHICAGO',
  AmericaChihuahua = 'AMERICA_CHIHUAHUA',
  AmericaCiudadJuarez = 'AMERICA_CIUDAD_JUAREZ',
  AmericaCoralHarbour = 'AMERICA_CORAL_HARBOUR',
  AmericaCordoba = 'AMERICA_CORDOBA',
  AmericaCostaRica = 'AMERICA_COSTA_RICA',
  AmericaCreston = 'AMERICA_CRESTON',
  AmericaCuiaba = 'AMERICA_CUIABA',
  AmericaCuracao = 'AMERICA_CURACAO',
  AmericaDanmarkshavn = 'AMERICA_DANMARKSHAVN',
  AmericaDawson = 'AMERICA_DAWSON',
  AmericaDawsonCreek = 'AMERICA_DAWSON_CREEK',
  AmericaDenver = 'AMERICA_DENVER',
  AmericaDetroit = 'AMERICA_DETROIT',
  AmericaDominica = 'AMERICA_DOMINICA',
  AmericaEdmonton = 'AMERICA_EDMONTON',
  AmericaEirunepe = 'AMERICA_EIRUNEPE',
  AmericaElSalvador = 'AMERICA_EL_SALVADOR',
  AmericaFortaleza = 'AMERICA_FORTALEZA',
  AmericaFortNelson = 'AMERICA_FORT_NELSON',
  AmericaGlaceBay = 'AMERICA_GLACE_BAY',
  AmericaGodthab = 'AMERICA_GODTHAB',
  AmericaGooseBay = 'AMERICA_GOOSE_BAY',
  AmericaGrandTurk = 'AMERICA_GRAND_TURK',
  AmericaGrenada = 'AMERICA_GRENADA',
  AmericaGuadeloupe = 'AMERICA_GUADELOUPE',
  AmericaGuatemala = 'AMERICA_GUATEMALA',
  AmericaGuayaquil = 'AMERICA_GUAYAQUIL',
  AmericaGuyana = 'AMERICA_GUYANA',
  AmericaHalifax = 'AMERICA_HALIFAX',
  AmericaHavana = 'AMERICA_HAVANA',
  AmericaHermosillo = 'AMERICA_HERMOSILLO',
  AmericaIndianapolis = 'AMERICA_INDIANAPOLIS',
  AmericaIndianaKnox = 'AMERICA_INDIANA_KNOX',
  AmericaIndianaMarengo = 'AMERICA_INDIANA_MARENGO',
  AmericaIndianaPetersburg = 'AMERICA_INDIANA_PETERSBURG',
  AmericaIndianaTellCity = 'AMERICA_INDIANA_TELL_CITY',
  AmericaIndianaVevay = 'AMERICA_INDIANA_VEVAY',
  AmericaIndianaVincennes = 'AMERICA_INDIANA_VINCENNES',
  AmericaIndianaWinamac = 'AMERICA_INDIANA_WINAMAC',
  AmericaInuvik = 'AMERICA_INUVIK',
  AmericaIqaluit = 'AMERICA_IQALUIT',
  AmericaJamaica = 'AMERICA_JAMAICA',
  AmericaJujuy = 'AMERICA_JUJUY',
  AmericaJuneau = 'AMERICA_JUNEAU',
  AmericaKentuckyMonticello = 'AMERICA_KENTUCKY_MONTICELLO',
  AmericaKralendijk = 'AMERICA_KRALENDIJK',
  AmericaLaPaz = 'AMERICA_LA_PAZ',
  AmericaLima = 'AMERICA_LIMA',
  AmericaLosAngeles = 'AMERICA_LOS_ANGELES',
  AmericaLouisville = 'AMERICA_LOUISVILLE',
  AmericaLowerPrinces = 'AMERICA_LOWER_PRINCES',
  AmericaMaceio = 'AMERICA_MACEIO',
  AmericaManagua = 'AMERICA_MANAGUA',
  AmericaManaus = 'AMERICA_MANAUS',
  AmericaMarigot = 'AMERICA_MARIGOT',
  AmericaMartinique = 'AMERICA_MARTINIQUE',
  AmericaMatamoros = 'AMERICA_MATAMOROS',
  AmericaMazatlan = 'AMERICA_MAZATLAN',
  AmericaMendoza = 'AMERICA_MENDOZA',
  AmericaMenominee = 'AMERICA_MENOMINEE',
  AmericaMerida = 'AMERICA_MERIDA',
  AmericaMetlakatla = 'AMERICA_METLAKATLA',
  AmericaMexicoCity = 'AMERICA_MEXICO_CITY',
  AmericaMiquelon = 'AMERICA_MIQUELON',
  AmericaMoncton = 'AMERICA_MONCTON',
  AmericaMonterrey = 'AMERICA_MONTERREY',
  AmericaMontevideo = 'AMERICA_MONTEVIDEO',
  AmericaMontserrat = 'AMERICA_MONTSERRAT',
  AmericaNassau = 'AMERICA_NASSAU',
  AmericaNewYork = 'AMERICA_NEW_YORK',
  AmericaNipigon = 'AMERICA_NIPIGON',
  AmericaNome = 'AMERICA_NOME',
  AmericaNoronha = 'AMERICA_NORONHA',
  AmericaNorthDakotaBeulah = 'AMERICA_NORTH_DAKOTA_BEULAH',
  AmericaNorthDakotaCenter = 'AMERICA_NORTH_DAKOTA_CENTER',
  AmericaNorthDakotaNewSalem = 'AMERICA_NORTH_DAKOTA_NEW_SALEM',
  AmericaOjinaga = 'AMERICA_OJINAGA',
  AmericaPanama = 'AMERICA_PANAMA',
  AmericaPangnirtung = 'AMERICA_PANGNIRTUNG',
  AmericaParamaribo = 'AMERICA_PARAMARIBO',
  AmericaPhoenix = 'AMERICA_PHOENIX',
  AmericaPortoVelho = 'AMERICA_PORTO_VELHO',
  AmericaPortAuPrince = 'AMERICA_PORT_AU_PRINCE',
  AmericaPortOfSpain = 'AMERICA_PORT_OF_SPAIN',
  AmericaPuertoRico = 'AMERICA_PUERTO_RICO',
  AmericaPuntaArenas = 'AMERICA_PUNTA_ARENAS',
  AmericaRainyRiver = 'AMERICA_RAINY_RIVER',
  AmericaRankinInlet = 'AMERICA_RANKIN_INLET',
  AmericaRecife = 'AMERICA_RECIFE',
  AmericaRegina = 'AMERICA_REGINA',
  AmericaResolute = 'AMERICA_RESOLUTE',
  AmericaRioBranco = 'AMERICA_RIO_BRANCO',
  AmericaSantarem = 'AMERICA_SANTAREM',
  AmericaSantaIsabel = 'AMERICA_SANTA_ISABEL',
  AmericaSantiago = 'AMERICA_SANTIAGO',
  AmericaSantoDomingo = 'AMERICA_SANTO_DOMINGO',
  AmericaSaoPaulo = 'AMERICA_SAO_PAULO',
  AmericaScoresbysund = 'AMERICA_SCORESBYSUND',
  AmericaSitka = 'AMERICA_SITKA',
  AmericaStBarthelemy = 'AMERICA_ST_BARTHELEMY',
  AmericaStJohns = 'AMERICA_ST_JOHNS',
  AmericaStKitts = 'AMERICA_ST_KITTS',
  AmericaStLucia = 'AMERICA_ST_LUCIA',
  AmericaStThomas = 'AMERICA_ST_THOMAS',
  AmericaStVincent = 'AMERICA_ST_VINCENT',
  AmericaSwiftCurrent = 'AMERICA_SWIFT_CURRENT',
  AmericaTegucigalpa = 'AMERICA_TEGUCIGALPA',
  AmericaThule = 'AMERICA_THULE',
  AmericaThunderBay = 'AMERICA_THUNDER_BAY',
  AmericaTijuana = 'AMERICA_TIJUANA',
  AmericaToronto = 'AMERICA_TORONTO',
  AmericaTortola = 'AMERICA_TORTOLA',
  AmericaVancouver = 'AMERICA_VANCOUVER',
  AmericaWhitehorse = 'AMERICA_WHITEHORSE',
  AmericaWinnipeg = 'AMERICA_WINNIPEG',
  AmericaYakutat = 'AMERICA_YAKUTAT',
  AmericaYellowknife = 'AMERICA_YELLOWKNIFE',
  AntarcticaCasey = 'ANTARCTICA_CASEY',
  AntarcticaDavis = 'ANTARCTICA_DAVIS',
  AntarcticaDumontDUrville = 'ANTARCTICA_DUMONT_D_URVILLE',
  AntarcticaMacquarie = 'ANTARCTICA_MACQUARIE',
  AntarcticaMawson = 'ANTARCTICA_MAWSON',
  AntarcticaMcMurdo = 'ANTARCTICA_MC_MURDO',
  AntarcticaPalmer = 'ANTARCTICA_PALMER',
  AntarcticaRothera = 'ANTARCTICA_ROTHERA',
  AntarcticaSyowa = 'ANTARCTICA_SYOWA',
  AntarcticaTroll = 'ANTARCTICA_TROLL',
  AntarcticaVostok = 'ANTARCTICA_VOSTOK',
  ArcticLongyearbyen = 'ARCTIC_LONGYEARBYEN',
  AsiaAden = 'ASIA_ADEN',
  AsiaAlmaty = 'ASIA_ALMATY',
  AsiaAmman = 'ASIA_AMMAN',
  AsiaAnadyr = 'ASIA_ANADYR',
  AsiaAqtau = 'ASIA_AQTAU',
  AsiaAqtobe = 'ASIA_AQTOBE',
  AsiaAshgabat = 'ASIA_ASHGABAT',
  AsiaAtyrau = 'ASIA_ATYRAU',
  AsiaBaghdad = 'ASIA_BAGHDAD',
  AsiaBahrain = 'ASIA_BAHRAIN',
  AsiaBaku = 'ASIA_BAKU',
  AsiaBangkok = 'ASIA_BANGKOK',
  AsiaBarnaul = 'ASIA_BARNAUL',
  AsiaBeirut = 'ASIA_BEIRUT',
  AsiaBishkek = 'ASIA_BISHKEK',
  AsiaBrunei = 'ASIA_BRUNEI',
  AsiaCalcutta = 'ASIA_CALCUTTA',
  AsiaChita = 'ASIA_CHITA',
  AsiaChoibalsan = 'ASIA_CHOIBALSAN',
  AsiaColombo = 'ASIA_COLOMBO',
  AsiaDamascus = 'ASIA_DAMASCUS',
  AsiaDhaka = 'ASIA_DHAKA',
  AsiaDili = 'ASIA_DILI',
  AsiaDubai = 'ASIA_DUBAI',
  AsiaDushanbe = 'ASIA_DUSHANBE',
  AsiaFamagusta = 'ASIA_FAMAGUSTA',
  AsiaGaza = 'ASIA_GAZA',
  AsiaHebron = 'ASIA_HEBRON',
  AsiaHongKong = 'ASIA_HONG_KONG',
  AsiaHovd = 'ASIA_HOVD',
  AsiaIrkutsk = 'ASIA_IRKUTSK',
  AsiaJakarta = 'ASIA_JAKARTA',
  AsiaJayapura = 'ASIA_JAYAPURA',
  AsiaJerusalem = 'ASIA_JERUSALEM',
  AsiaKabul = 'ASIA_KABUL',
  AsiaKamchatka = 'ASIA_KAMCHATKA',
  AsiaKarachi = 'ASIA_KARACHI',
  AsiaKatmandu = 'ASIA_KATMANDU',
  AsiaKhandyga = 'ASIA_KHANDYGA',
  AsiaKrasnoyarsk = 'ASIA_KRASNOYARSK',
  AsiaKualaLumpur = 'ASIA_KUALA_LUMPUR',
  AsiaKuching = 'ASIA_KUCHING',
  AsiaKuwait = 'ASIA_KUWAIT',
  AsiaMacau = 'ASIA_MACAU',
  AsiaMagadan = 'ASIA_MAGADAN',
  AsiaMakassar = 'ASIA_MAKASSAR',
  AsiaManila = 'ASIA_MANILA',
  AsiaMuscat = 'ASIA_MUSCAT',
  AsiaNicosia = 'ASIA_NICOSIA',
  AsiaNovokuznetsk = 'ASIA_NOVOKUZNETSK',
  AsiaNovosibirsk = 'ASIA_NOVOSIBIRSK',
  AsiaOmsk = 'ASIA_OMSK',
  AsiaOral = 'ASIA_ORAL',
  AsiaPhnomPenh = 'ASIA_PHNOM_PENH',
  AsiaPontianak = 'ASIA_PONTIANAK',
  AsiaPyongyang = 'ASIA_PYONGYANG',
  AsiaQatar = 'ASIA_QATAR',
  AsiaQostanay = 'ASIA_QOSTANAY',
  AsiaQyzylorda = 'ASIA_QYZYLORDA',
  AsiaRangoon = 'ASIA_RANGOON',
  AsiaRiyadh = 'ASIA_RIYADH',
  AsiaSaigon = 'ASIA_SAIGON',
  AsiaSakhalin = 'ASIA_SAKHALIN',
  AsiaSamarkand = 'ASIA_SAMARKAND',
  AsiaSeoul = 'ASIA_SEOUL',
  AsiaShanghai = 'ASIA_SHANGHAI',
  AsiaSingapore = 'ASIA_SINGAPORE',
  AsiaSrednekolymsk = 'ASIA_SREDNEKOLYMSK',
  AsiaTaipei = 'ASIA_TAIPEI',
  AsiaTashkent = 'ASIA_TASHKENT',
  AsiaTbilisi = 'ASIA_TBILISI',
  AsiaTehran = 'ASIA_TEHRAN',
  AsiaThimphu = 'ASIA_THIMPHU',
  AsiaTokyo = 'ASIA_TOKYO',
  AsiaTomsk = 'ASIA_TOMSK',
  AsiaUlaanbaatar = 'ASIA_ULAANBAATAR',
  AsiaUrumqi = 'ASIA_URUMQI',
  AsiaUstNera = 'ASIA_UST_NERA',
  AsiaVientiane = 'ASIA_VIENTIANE',
  AsiaVladivostok = 'ASIA_VLADIVOSTOK',
  AsiaYakutsk = 'ASIA_YAKUTSK',
  AsiaYekaterinburg = 'ASIA_YEKATERINBURG',
  AsiaYerevan = 'ASIA_YEREVAN',
  AtlanticAzores = 'ATLANTIC_AZORES',
  AtlanticBermuda = 'ATLANTIC_BERMUDA',
  AtlanticCanary = 'ATLANTIC_CANARY',
  AtlanticCapeVerde = 'ATLANTIC_CAPE_VERDE',
  AtlanticFaeroe = 'ATLANTIC_FAEROE',
  AtlanticMadeira = 'ATLANTIC_MADEIRA',
  AtlanticReykjavik = 'ATLANTIC_REYKJAVIK',
  AtlanticSouthGeorgia = 'ATLANTIC_SOUTH_GEORGIA',
  AtlanticStanley = 'ATLANTIC_STANLEY',
  AtlanticStHelena = 'ATLANTIC_ST_HELENA',
  AustraliaAdelaide = 'AUSTRALIA_ADELAIDE',
  AustraliaBrisbane = 'AUSTRALIA_BRISBANE',
  AustraliaBrokenHill = 'AUSTRALIA_BROKEN_HILL',
  AustraliaCurrie = 'AUSTRALIA_CURRIE',
  AustraliaDarwin = 'AUSTRALIA_DARWIN',
  AustraliaEucla = 'AUSTRALIA_EUCLA',
  AustraliaHobart = 'AUSTRALIA_HOBART',
  AustraliaLindeman = 'AUSTRALIA_LINDEMAN',
  AustraliaLordHowe = 'AUSTRALIA_LORD_HOWE',
  AustraliaMelbourne = 'AUSTRALIA_MELBOURNE',
  AustraliaPerth = 'AUSTRALIA_PERTH',
  AustraliaSydney = 'AUSTRALIA_SYDNEY',
  EuropeAmsterdam = 'EUROPE_AMSTERDAM',
  EuropeAndorra = 'EUROPE_ANDORRA',
  EuropeAstrakhan = 'EUROPE_ASTRAKHAN',
  EuropeAthens = 'EUROPE_ATHENS',
  EuropeBelgrade = 'EUROPE_BELGRADE',
  EuropeBerlin = 'EUROPE_BERLIN',
  EuropeBratislava = 'EUROPE_BRATISLAVA',
  EuropeBrussels = 'EUROPE_BRUSSELS',
  EuropeBucharest = 'EUROPE_BUCHAREST',
  EuropeBudapest = 'EUROPE_BUDAPEST',
  EuropeBusingen = 'EUROPE_BUSINGEN',
  EuropeChisinau = 'EUROPE_CHISINAU',
  EuropeCopenhagen = 'EUROPE_COPENHAGEN',
  EuropeDublin = 'EUROPE_DUBLIN',
  EuropeGibraltar = 'EUROPE_GIBRALTAR',
  EuropeGuernsey = 'EUROPE_GUERNSEY',
  EuropeHelsinki = 'EUROPE_HELSINKI',
  EuropeIsleOfMan = 'EUROPE_ISLE_OF_MAN',
  EuropeIstanbul = 'EUROPE_ISTANBUL',
  EuropeJersey = 'EUROPE_JERSEY',
  EuropeKaliningrad = 'EUROPE_KALININGRAD',
  EuropeKiev = 'EUROPE_KIEV',
  EuropeKirov = 'EUROPE_KIROV',
  EuropeLisbon = 'EUROPE_LISBON',
  EuropeLjubljana = 'EUROPE_LJUBLJANA',
  EuropeLondon = 'EUROPE_LONDON',
  EuropeLuxembourg = 'EUROPE_LUXEMBOURG',
  EuropeMadrid = 'EUROPE_MADRID',
  EuropeMalta = 'EUROPE_MALTA',
  EuropeMariehamn = 'EUROPE_MARIEHAMN',
  EuropeMinsk = 'EUROPE_MINSK',
  EuropeMonaco = 'EUROPE_MONACO',
  EuropeMoscow = 'EUROPE_MOSCOW',
  EuropeOslo = 'EUROPE_OSLO',
  EuropeParis = 'EUROPE_PARIS',
  EuropePodgorica = 'EUROPE_PODGORICA',
  EuropePrague = 'EUROPE_PRAGUE',
  EuropeRiga = 'EUROPE_RIGA',
  EuropeRome = 'EUROPE_ROME',
  EuropeSamara = 'EUROPE_SAMARA',
  EuropeSanMarino = 'EUROPE_SAN_MARINO',
  EuropeSarajevo = 'EUROPE_SARAJEVO',
  EuropeSaratov = 'EUROPE_SARATOV',
  EuropeSimferopol = 'EUROPE_SIMFEROPOL',
  EuropeSkopje = 'EUROPE_SKOPJE',
  EuropeSofia = 'EUROPE_SOFIA',
  EuropeStockholm = 'EUROPE_STOCKHOLM',
  EuropeTallinn = 'EUROPE_TALLINN',
  EuropeTirane = 'EUROPE_TIRANE',
  EuropeUlyanovsk = 'EUROPE_ULYANOVSK',
  EuropeUzhgorod = 'EUROPE_UZHGOROD',
  EuropeVaduz = 'EUROPE_VADUZ',
  EuropeVatican = 'EUROPE_VATICAN',
  EuropeVienna = 'EUROPE_VIENNA',
  EuropeVilnius = 'EUROPE_VILNIUS',
  EuropeVolgograd = 'EUROPE_VOLGOGRAD',
  EuropeWarsaw = 'EUROPE_WARSAW',
  EuropeZagreb = 'EUROPE_ZAGREB',
  EuropeZaporozhye = 'EUROPE_ZAPOROZHYE',
  EuropeZurich = 'EUROPE_ZURICH',
  IndianAntananarivo = 'INDIAN_ANTANANARIVO',
  IndianChagos = 'INDIAN_CHAGOS',
  IndianChristmas = 'INDIAN_CHRISTMAS',
  IndianCocos = 'INDIAN_COCOS',
  IndianComoro = 'INDIAN_COMORO',
  IndianKerguelen = 'INDIAN_KERGUELEN',
  IndianMahe = 'INDIAN_MAHE',
  IndianMaldives = 'INDIAN_MALDIVES',
  IndianMauritius = 'INDIAN_MAURITIUS',
  IndianMayotte = 'INDIAN_MAYOTTE',
  IndianReunion = 'INDIAN_REUNION',
  PacificApia = 'PACIFIC_APIA',
  PacificAuckland = 'PACIFIC_AUCKLAND',
  PacificBougainville = 'PACIFIC_BOUGAINVILLE',
  PacificChatham = 'PACIFIC_CHATHAM',
  PacificEaster = 'PACIFIC_EASTER',
  PacificEfate = 'PACIFIC_EFATE',
  PacificEnderbury = 'PACIFIC_ENDERBURY',
  PacificFakaofo = 'PACIFIC_FAKAOFO',
  PacificFiji = 'PACIFIC_FIJI',
  PacificFunafuti = 'PACIFIC_FUNAFUTI',
  PacificGalapagos = 'PACIFIC_GALAPAGOS',
  PacificGambier = 'PACIFIC_GAMBIER',
  PacificGuadalcanal = 'PACIFIC_GUADALCANAL',
  PacificGuam = 'PACIFIC_GUAM',
  PacificHonolulu = 'PACIFIC_HONOLULU',
  PacificJohnston = 'PACIFIC_JOHNSTON',
  PacificKiritimati = 'PACIFIC_KIRITIMATI',
  PacificKosrae = 'PACIFIC_KOSRAE',
  PacificKwajalein = 'PACIFIC_KWAJALEIN',
  PacificMajuro = 'PACIFIC_MAJURO',
  PacificMarquesas = 'PACIFIC_MARQUESAS',
  PacificMidway = 'PACIFIC_MIDWAY',
  PacificNauru = 'PACIFIC_NAURU',
  PacificNiue = 'PACIFIC_NIUE',
  PacificNorfolk = 'PACIFIC_NORFOLK',
  PacificNoumea = 'PACIFIC_NOUMEA',
  PacificPagoPago = 'PACIFIC_PAGO_PAGO',
  PacificPalau = 'PACIFIC_PALAU',
  PacificPitcairn = 'PACIFIC_PITCAIRN',
  PacificPonape = 'PACIFIC_PONAPE',
  PacificPortMoresby = 'PACIFIC_PORT_MORESBY',
  PacificRarotonga = 'PACIFIC_RAROTONGA',
  PacificSaipan = 'PACIFIC_SAIPAN',
  PacificTahiti = 'PACIFIC_TAHITI',
  PacificTarawa = 'PACIFIC_TARAWA',
  PacificTongatapu = 'PACIFIC_TONGATAPU',
  PacificTruk = 'PACIFIC_TRUK',
  PacificWake = 'PACIFIC_WAKE',
  PacificWallis = 'PACIFIC_WALLIS'
}

export type TippingAccountAction = {
  __typename?: 'TippingAccountAction';
  address: Scalars['EvmAddress']['output'];
};

export type TippingAccountActionExecuted = {
  __typename?: 'TippingAccountActionExecuted';
  amount: Erc20Amount;
  executedAt: Scalars['DateTime']['output'];
  executedBy: Account;
};

export type TippingAmountInput = {
  currency: Scalars['EvmAddress']['input'];
  referrals?: InputMaybe<Array<ReferralCut>>;
  value: Scalars['BigDecimal']['input'];
};

export type TippingPostActionContract = {
  __typename?: 'TippingPostActionContract';
  address: Scalars['EvmAddress']['output'];
};

export type TippingPostActionExecuted = {
  __typename?: 'TippingPostActionExecuted';
  amount: Erc20Amount;
  executedAt: Scalars['DateTime']['output'];
  executedBy: Account;
};

export type TokenAmountInput = {
  currency: Scalars['EvmAddress']['input'];
  standard: TokenStandard;
  typeId?: InputMaybe<Scalars['BigInt']['input']>;
  value: Scalars['BigDecimal']['input'];
};

export type TokenGatedFeedRuleConfig = {
  token: TokenAmountInput;
};

export type TokenGatedFollowRuleConfig = {
  token: TokenAmountInput;
};

export type TokenGatedGraphRuleConfig = {
  token: TokenAmountInput;
};

export type TokenGatedGroupRuleConfig = {
  token: TokenAmountInput;
};

export type TokenGatedNamespaceRuleConfig = {
  token: TokenAmountInput;
};

export enum TokenStandard {
  Erc20 = 'ERC20',
  Erc721 = 'ERC721',
  Erc1155 = 'ERC1155'
}

export type TransactionMetadata = {
  __typename?: 'TransactionMetadata';
  attachments: Array<AnyMedia>;
  attributes: Array<MetadataAttribute>;
  chainId: Scalars['ChainId']['output'];
  content: Scalars['String']['output'];
  contentWarning?: Maybe<ContentWarning>;
  id: Scalars['MetadataId']['output'];
  locale: Scalars['Locale']['output'];
  mainContentFocus: MainContentFocus;
  tags?: Maybe<Array<Scalars['Tag']['output']>>;
  txHash: Scalars['String']['output'];
  type: TransactionType;
};

export enum TransactionOperation {
  AccessControlFactoryOwnerAdminDeployment = 'ACCESS_CONTROL_FACTORY_OWNER_ADMIN_DEPLOYMENT',
  AccessControlRoleGranted = 'ACCESS_CONTROL_ROLE_GRANTED',
  AccessControlRoleRevoked = 'ACCESS_CONTROL_ROLE_REVOKED',
  AccountActionConfigured = 'ACCOUNT_ACTION_CONFIGURED',
  AccountActionDisabled = 'ACCOUNT_ACTION_DISABLED',
  AccountActionEnabled = 'ACCOUNT_ACTION_ENABLED',
  AccountActionExecuted = 'ACCOUNT_ACTION_EXECUTED',
  AccountActionReconfigured = 'ACCOUNT_ACTION_RECONFIGURED',
  AccountBlocked = 'ACCOUNT_BLOCKED',
  AccountExtraDataAdded = 'ACCOUNT_EXTRA_DATA_ADDED',
  AccountExtraDataRemoved = 'ACCOUNT_EXTRA_DATA_REMOVED',
  AccountExtraDataUpdated = 'ACCOUNT_EXTRA_DATA_UPDATED',
  AccountFactoryDeployment = 'ACCOUNT_FACTORY_DEPLOYMENT',
  AccountManagerAdded = 'ACCOUNT_MANAGER_ADDED',
  AccountManagerRemoved = 'ACCOUNT_MANAGER_REMOVED',
  AccountManagerUpdated = 'ACCOUNT_MANAGER_UPDATED',
  AccountMetadataUriSet = 'ACCOUNT_METADATA_URI_SET',
  AccountOwnerTransferred = 'ACCOUNT_OWNER_TRANSFERRED',
  AccountUnblocked = 'ACCOUNT_UNBLOCKED',
  ActionMetadataUriSet = 'ACTION_METADATA_URI_SET',
  AppAccessControlAdded = 'APP_ACCESS_CONTROL_ADDED',
  AppAccessControlUpdated = 'APP_ACCESS_CONTROL_UPDATED',
  AppDefaultFeedSet = 'APP_DEFAULT_FEED_SET',
  AppExtraDataAdded = 'APP_EXTRA_DATA_ADDED',
  AppExtraDataRemoved = 'APP_EXTRA_DATA_REMOVED',
  AppExtraDataUpdated = 'APP_EXTRA_DATA_UPDATED',
  AppFactoryDeployment = 'APP_FACTORY_DEPLOYMENT',
  AppFeedAdded = 'APP_FEED_ADDED',
  AppFeedRemoved = 'APP_FEED_REMOVED',
  AppGraphAdded = 'APP_GRAPH_ADDED',
  AppGraphRemoved = 'APP_GRAPH_REMOVED',
  AppGroupAdded = 'APP_GROUP_ADDED',
  AppGroupRemoved = 'APP_GROUP_REMOVED',
  AppMetadataUriSet = 'APP_METADATA_URI_SET',
  AppNamespaceAdded = 'APP_NAMESPACE_ADDED',
  AppNamespaceRemoved = 'APP_NAMESPACE_REMOVED',
  AppPaymasterAdded = 'APP_PAYMASTER_ADDED',
  AppPaymasterRemoved = 'APP_PAYMASTER_REMOVED',
  AppSignerAdded = 'APP_SIGNER_ADDED',
  AppSignerRemoved = 'APP_SIGNER_REMOVED',
  AppSourceStampVerificationSet = 'APP_SOURCE_STAMP_VERIFICATION_SET',
  AppTreasurySet = 'APP_TREASURY_SET',
  FeedAccessControlAdded = 'FEED_ACCESS_CONTROL_ADDED',
  FeedAccessControlUpdated = 'FEED_ACCESS_CONTROL_UPDATED',
  FeedExtraDataAdded = 'FEED_EXTRA_DATA_ADDED',
  FeedExtraDataRemoved = 'FEED_EXTRA_DATA_REMOVED',
  FeedExtraDataUpdated = 'FEED_EXTRA_DATA_UPDATED',
  FeedFactoryDeployment = 'FEED_FACTORY_DEPLOYMENT',
  FeedMetadataUriSet = 'FEED_METADATA_URI_SET',
  FeedPostCreated = 'FEED_POST_CREATED',
  FeedPostDeleted = 'FEED_POST_DELETED',
  FeedPostEdited = 'FEED_POST_EDITED',
  FeedPostExtraDataAdded = 'FEED_POST_EXTRA_DATA_ADDED',
  FeedPostExtraDataRemoved = 'FEED_POST_EXTRA_DATA_REMOVED',
  FeedPostExtraDataUpdated = 'FEED_POST_EXTRA_DATA_UPDATED',
  FeedPostRuleConfigured = 'FEED_POST_RULE_CONFIGURED',
  FeedPostRuleReconfigured = 'FEED_POST_RULE_RECONFIGURED',
  FeedPostRuleSelectorDisabled = 'FEED_POST_RULE_SELECTOR_DISABLED',
  FeedPostRuleSelectorEnabled = 'FEED_POST_RULE_SELECTOR_ENABLED',
  FeedRuleConfigured = 'FEED_RULE_CONFIGURED',
  FeedRuleReconfigured = 'FEED_RULE_RECONFIGURED',
  FeedRuleSelectorDisabled = 'FEED_RULE_SELECTOR_DISABLED',
  FeedRuleSelectorEnabled = 'FEED_RULE_SELECTOR_ENABLED',
  GraphAccessControlAdded = 'GRAPH_ACCESS_CONTROL_ADDED',
  GraphAccessControlUpdated = 'GRAPH_ACCESS_CONTROL_UPDATED',
  GraphExtraDataAdded = 'GRAPH_EXTRA_DATA_ADDED',
  GraphExtraDataRemoved = 'GRAPH_EXTRA_DATA_REMOVED',
  GraphExtraDataUpdated = 'GRAPH_EXTRA_DATA_UPDATED',
  GraphFactoryDeployment = 'GRAPH_FACTORY_DEPLOYMENT',
  GraphFollowed = 'GRAPH_FOLLOWED',
  GraphFollowRuleConfigured = 'GRAPH_FOLLOW_RULE_CONFIGURED',
  GraphFollowRuleReconfigured = 'GRAPH_FOLLOW_RULE_RECONFIGURED',
  GraphFollowRuleSelectorDisabled = 'GRAPH_FOLLOW_RULE_SELECTOR_DISABLED',
  GraphFollowRuleSelectorEnabled = 'GRAPH_FOLLOW_RULE_SELECTOR_ENABLED',
  GraphMetadataUriSet = 'GRAPH_METADATA_URI_SET',
  GraphRuleConfigured = 'GRAPH_RULE_CONFIGURED',
  GraphRuleReconfigured = 'GRAPH_RULE_RECONFIGURED',
  GraphRuleSelectorDisabled = 'GRAPH_RULE_SELECTOR_DISABLED',
  GraphRuleSelectorEnabled = 'GRAPH_RULE_SELECTOR_ENABLED',
  GraphUnfollowed = 'GRAPH_UNFOLLOWED',
  GroupAccessControlAdded = 'GROUP_ACCESS_CONTROL_ADDED',
  GroupAccessControlUpdated = 'GROUP_ACCESS_CONTROL_UPDATED',
  GroupAccountBanned = 'GROUP_ACCOUNT_BANNED',
  GroupAccountUnbanned = 'GROUP_ACCOUNT_UNBANNED',
  GroupExtraDataAdded = 'GROUP_EXTRA_DATA_ADDED',
  GroupExtraDataRemoved = 'GROUP_EXTRA_DATA_REMOVED',
  GroupExtraDataUpdated = 'GROUP_EXTRA_DATA_UPDATED',
  GroupFactoryDeployment = 'GROUP_FACTORY_DEPLOYMENT',
  GroupMembershipApprovalApproved = 'GROUP_MEMBERSHIP_APPROVAL_APPROVED',
  GroupMembershipApprovalRejected = 'GROUP_MEMBERSHIP_APPROVAL_REJECTED',
  GroupMembershipApprovalRequested = 'GROUP_MEMBERSHIP_APPROVAL_REQUESTED',
  GroupMembershipApprovalRequestCancelled = 'GROUP_MEMBERSHIP_APPROVAL_REQUEST_CANCELLED',
  GroupMemberAdded = 'GROUP_MEMBER_ADDED',
  GroupMemberJoined = 'GROUP_MEMBER_JOINED',
  GroupMemberLeft = 'GROUP_MEMBER_LEFT',
  GroupMemberRemoved = 'GROUP_MEMBER_REMOVED',
  GroupMetadataUriSet = 'GROUP_METADATA_URI_SET',
  GroupRuleConfigured = 'GROUP_RULE_CONFIGURED',
  GroupRuleReconfigured = 'GROUP_RULE_RECONFIGURED',
  GroupRuleSelectorDisabled = 'GROUP_RULE_SELECTOR_DISABLED',
  GroupRuleSelectorEnabled = 'GROUP_RULE_SELECTOR_ENABLED',
  NamespaceExtraDataAdded = 'NAMESPACE_EXTRA_DATA_ADDED',
  NamespaceExtraDataRemoved = 'NAMESPACE_EXTRA_DATA_REMOVED',
  NamespaceExtraDataUpdated = 'NAMESPACE_EXTRA_DATA_UPDATED',
  NamespaceFactoryDeployment = 'NAMESPACE_FACTORY_DEPLOYMENT',
  NamespaceMetadataUriSet = 'NAMESPACE_METADATA_URI_SET',
  PostActionConfigured = 'POST_ACTION_CONFIGURED',
  PostActionDisabled = 'POST_ACTION_DISABLED',
  PostActionEnabled = 'POST_ACTION_ENABLED',
  PostActionExecuted = 'POST_ACTION_EXECUTED',
  PostActionReconfigured = 'POST_ACTION_RECONFIGURED',
  SponsorshipAccessControlAdded = 'SPONSORSHIP_ACCESS_CONTROL_ADDED',
  SponsorshipAccessControlUpdated = 'SPONSORSHIP_ACCESS_CONTROL_UPDATED',
  SponsorshipAddedToExclusionList = 'SPONSORSHIP_ADDED_TO_EXCLUSION_LIST',
  SponsorshipFactoryDeployment = 'SPONSORSHIP_FACTORY_DEPLOYMENT',
  SponsorshipFundsSpent = 'SPONSORSHIP_FUNDS_SPENT',
  SponsorshipGrantedFunds = 'SPONSORSHIP_GRANTED_FUNDS',
  SponsorshipGrantRevoked = 'SPONSORSHIP_GRANT_REVOKED',
  SponsorshipMetadataUriSet = 'SPONSORSHIP_METADATA_URI_SET',
  SponsorshipPaused = 'SPONSORSHIP_PAUSED',
  SponsorshipRateLimitsChanged = 'SPONSORSHIP_RATE_LIMITS_CHANGED',
  SponsorshipRemovedFromExclusionList = 'SPONSORSHIP_REMOVED_FROM_EXCLUSION_LIST',
  SponsorshipSignerAdded = 'SPONSORSHIP_SIGNER_ADDED',
  SponsorshipSignerRemoved = 'SPONSORSHIP_SIGNER_REMOVED',
  SponsorshipUnpaused = 'SPONSORSHIP_UNPAUSED',
  UsernameAccessControlAdded = 'USERNAME_ACCESS_CONTROL_ADDED',
  UsernameAccessControlUpdated = 'USERNAME_ACCESS_CONTROL_UPDATED',
  UsernameAssigned = 'USERNAME_ASSIGNED',
  UsernameCreated = 'USERNAME_CREATED',
  UsernameExtraDataAdded = 'USERNAME_EXTRA_DATA_ADDED',
  UsernameExtraDataRemoved = 'USERNAME_EXTRA_DATA_REMOVED',
  UsernameExtraDataUpdated = 'USERNAME_EXTRA_DATA_UPDATED',
  UsernameReleased = 'USERNAME_RELEASED',
  UsernameRemoved = 'USERNAME_REMOVED',
  UsernameReserved = 'USERNAME_RESERVED',
  UsernameReservedCreated = 'USERNAME_RESERVED_CREATED',
  UsernameRuleConfigured = 'USERNAME_RULE_CONFIGURED',
  UsernameRuleReconfigured = 'USERNAME_RULE_RECONFIGURED',
  UsernameRuleSelectorDisabled = 'USERNAME_RULE_SELECTOR_DISABLED',
  UsernameRuleSelectorEnabled = 'USERNAME_RULE_SELECTOR_ENABLED',
  UsernameTransfer = 'USERNAME_TRANSFER',
  UsernameUnassigned = 'USERNAME_UNASSIGNED'
}

export type TransactionStatusRequest = {
  txHash: Scalars['TxHash']['input'];
};

export type TransactionStatusResult = FailedTransactionStatus | FinishedTransactionStatus | NotIndexedYetStatus | PendingTransactionStatus;

export enum TransactionType {
  Erc_20 = 'ERC_20',
  Erc_721 = 'ERC_721',
  Other = 'OTHER'
}

export type TransactionWillFail = {
  __typename?: 'TransactionWillFail';
  reason: Scalars['String']['output'];
};

export type TransferPrimitiveOwnershipRequest = {
  address: Scalars['EvmAddress']['input'];
  newOwner: Scalars['EvmAddress']['input'];
};

export type TransferPrimitiveOwnershipResult = SelfFundedTransactionRequest | SponsoredTransactionRequest | TransactionWillFail;

export type UnassignUsernameFromAccountRequest = {
  namespace?: Scalars['EvmAddress']['input'];
  rulesProcessingParams?: InputMaybe<Array<NamespaceRulesProcessingParams>>;
};

export type UnassignUsernameResponse = {
  __typename?: 'UnassignUsernameResponse';
  hash: Scalars['TxHash']['output'];
};

export type UnassignUsernameToAccountResult = NamespaceOperationValidationFailed | SelfFundedTransactionRequest | SponsoredTransactionRequest | TransactionWillFail | UnassignUsernameResponse;

export type UnbanGroupAccountsRequest = {
  accounts: Array<Scalars['EvmAddress']['input']>;
  group: Scalars['EvmAddress']['input'];
};

export type UnbanGroupAccountsResponse = {
  __typename?: 'UnbanGroupAccountsResponse';
  hash: Scalars['TxHash']['output'];
};

export type UnbanGroupAccountsResult = SelfFundedTransactionRequest | SponsoredTransactionRequest | TransactionWillFail | UnbanGroupAccountsResponse;

export type UnblockRequest = {
  account: Scalars['EvmAddress']['input'];
};

export type UnblockResult = AccountUnblockedResponse | SelfFundedTransactionRequest | SponsoredTransactionRequest | TransactionWillFail;

export type UndoReactionFailure = {
  __typename?: 'UndoReactionFailure';
  reason: Scalars['String']['output'];
};

export type UndoReactionRequest = {
  post: Scalars['PostId']['input'];
  reaction: PostReactionType;
};

export type UndoReactionResponse = {
  __typename?: 'UndoReactionResponse';
  success: Scalars['Boolean']['output'];
};

export type UndoReactionResult = UndoReactionFailure | UndoReactionResponse;

export type UndoRecommendedAccount = {
  account: Scalars['EvmAddress']['input'];
};

export type UnfollowResponse = {
  __typename?: 'UnfollowResponse';
  hash: Scalars['TxHash']['output'];
};

export type UnfollowResult = AccountFollowOperationValidationFailed | SelfFundedTransactionRequest | SponsoredTransactionRequest | TransactionWillFail | UnfollowResponse;

export type UnhideManagedAccountRequest = {
  account: Scalars['EvmAddress']['input'];
};

export type UnhideReplyRequest = {
  post: Scalars['PostId']['input'];
};

export type UnknownAccountAction = {
  __typename?: 'UnknownAccountAction';
  address: Scalars['EvmAddress']['output'];
  config: Array<RawKeyValue>;
  metadata?: Maybe<ActionMetadata>;
};

export type UnknownAccountActionExecuted = {
  __typename?: 'UnknownAccountActionExecuted';
  action: UnknownAccountAction;
  executedAt: Scalars['DateTime']['output'];
  executedBy: Account;
  params: Array<RawKeyValue>;
};

export type UnknownAccountRuleConfig = {
  address: Scalars['EvmAddress']['input'];
  params?: InputMaybe<Array<AnyKeyValueInput>>;
};

export type UnknownActionConfigInput = {
  address: Scalars['EvmAddress']['input'];
  params?: Array<AnyKeyValueInput>;
};

export type UnknownActionExecuteInput = {
  address: Scalars['EvmAddress']['input'];
  params?: Array<RawKeyValueInput>;
};

export type UnknownFeedRuleConfig = {
  address: Scalars['EvmAddress']['input'];
  executeOn: Array<FeedRuleExecuteOn>;
  params?: InputMaybe<Array<AnyKeyValueInput>>;
};

export type UnknownGraphRuleConfig = {
  address: Scalars['EvmAddress']['input'];
  executeOn: Array<GraphRuleExecuteOn>;
  params?: InputMaybe<Array<AnyKeyValueInput>>;
};

export type UnknownGroupRuleConfig = {
  address: Scalars['EvmAddress']['input'];
  executeOn: Array<GroupRuleExecuteOn>;
  params?: InputMaybe<Array<AnyKeyValueInput>>;
};

export type UnknownNamespaceRuleConfig = {
  address: Scalars['EvmAddress']['input'];
  executeOn: Array<NamespaceRuleExecuteOn>;
  params?: InputMaybe<Array<AnyKeyValueInput>>;
};

export type UnknownPostAction = {
  __typename?: 'UnknownPostAction';
  address: Scalars['EvmAddress']['output'];
  config: Array<RawKeyValue>;
  metadata?: Maybe<ActionMetadata>;
};

export type UnknownPostActionContract = {
  __typename?: 'UnknownPostActionContract';
  address: Scalars['EvmAddress']['output'];
  metadata?: Maybe<ActionMetadata>;
};

export type UnknownPostActionExecuted = {
  __typename?: 'UnknownPostActionExecuted';
  action: UnknownPostAction;
  executedAt: Scalars['DateTime']['output'];
  executedBy: Account;
  params: Array<RawKeyValue>;
};

export type UnknownPostMetadata = {
  __typename?: 'UnknownPostMetadata';
  raw: Scalars['JsonString']['output'];
};

export type UnknownPostRuleConfig = {
  address: Scalars['EvmAddress']['input'];
  executeOn: Array<PostRuleExecuteOn>;
  params?: InputMaybe<Array<AnyKeyValueInput>>;
};

export type UnknownRuleProcessingParams = {
  id: Scalars['RuleId']['input'];
  params?: InputMaybe<Array<AnyKeyValueInput>>;
};

export type UnwrapTokensRequest = {
  amount: Scalars['BigDecimal']['input'];
};

export type UnwrapTokensResult = InsufficientFunds | SelfFundedTransactionRequest | SponsoredTransactionRequest | TransactionWillFail;

export type UpdateAccountFollowRulesRequest = {
  graph?: Scalars['EvmAddress']['input'];
  toAdd?: AccountRulesConfigInput;
  toRemove?: Array<Scalars['RuleId']['input']>;
};

export type UpdateAccountFollowRulesResponse = {
  __typename?: 'UpdateAccountFollowRulesResponse';
  hash: Scalars['TxHash']['output'];
};

export type UpdateAccountFollowRulesResult = SelfFundedTransactionRequest | SponsoredTransactionRequest | TransactionWillFail | UpdateAccountFollowRulesResponse;

export type UpdateAccountManagerRequest = {
  manager: Scalars['EvmAddress']['input'];
  permissions: AccountManagerPermissionsInput;
};

export type UpdateAccountManagerResult = SelfFundedTransactionRequest | SponsoredTransactionRequest | TransactionWillFail;

export type UpdateFeedRulesRequest = {
  feed: Scalars['EvmAddress']['input'];
  toAdd?: FeedRulesConfigInput;
  toRemove?: Array<Scalars['RuleId']['input']>;
};

export type UpdateFeedRulesResponse = {
  __typename?: 'UpdateFeedRulesResponse';
  hash: Scalars['TxHash']['output'];
};

export type UpdateFeedRulesResult = SelfFundedTransactionRequest | SponsoredTransactionRequest | TransactionWillFail | UpdateFeedRulesResponse;

export type UpdateGraphRulesRequest = {
  graph: Scalars['EvmAddress']['input'];
  toAdd?: GraphRulesConfigInput;
  toRemove?: Array<Scalars['RuleId']['input']>;
};

export type UpdateGraphRulesResult = SelfFundedTransactionRequest | SponsoredTransactionRequest | TransactionWillFail;

export type UpdateGroupRulesRequest = {
  group: Scalars['EvmAddress']['input'];
  toAdd?: GroupRulesConfigInput;
  toRemove?: Array<Scalars['RuleId']['input']>;
};

export type UpdateGroupRulesResponse = {
  __typename?: 'UpdateGroupRulesResponse';
  hash: Scalars['TxHash']['output'];
};

export type UpdateGroupRulesResult = SelfFundedTransactionRequest | SponsoredTransactionRequest | TransactionWillFail | UpdateGroupRulesResponse;

export type UpdateNamespaceRulesRequest = {
  namespace: Scalars['EvmAddress']['input'];
  toAdd?: NamespaceRulesConfigInput;
  toRemove?: Array<Scalars['RuleId']['input']>;
};

export type UpdateNamespaceRulesResult = SelfFundedTransactionRequest | SponsoredTransactionRequest | TransactionWillFail;

export type UpdatePostRulesRequest = {
  feedRulesProcessingParams?: Array<FeedRulesProcessingParams>;
  post: Scalars['PostId']['input'];
  toAdd?: PostRulesConfigInput;
  toRemove?: Array<Scalars['RuleId']['input']>;
};

export type UpdatePostRulesResponse = {
  __typename?: 'UpdatePostRulesResponse';
  hash: Scalars['TxHash']['output'];
};

export type UpdatePostRulesResult = SelfFundedTransactionRequest | SponsoredTransactionRequest | TransactionWillFail | UpdatePostRulesResponse;

export type UpdateReservedUsernamesRequest = {
  namespace: Scalars['EvmAddress']['input'];
  toRelease?: Array<Scalars['String']['input']>;
  toReserve?: Array<Scalars['String']['input']>;
};

export type UpdateReservedUsernamesResult = SelfFundedTransactionRequest | SponsoredTransactionRequest | TransactionWillFail;

export type UpdateSponsorshipExclusionListRequest = {
  sponsorship: Scalars['EvmAddress']['input'];
  toAdd?: Array<SponsorshipRateLimitsExempt>;
  toRemove?: Array<Scalars['EvmAddress']['input']>;
};

export type UpdateSponsorshipExclusionListResult = SelfFundedTransactionRequest | SponsoredTransactionRequest | TransactionWillFail;

export type UpdateSponsorshipLimitsRequest = {
  rateLimits?: InputMaybe<SponsorshipRateLimitsInput>;
  sponsorship: Scalars['EvmAddress']['input'];
};

export type UpdateSponsorshipLimitsResult = SelfFundedTransactionRequest | SponsoredTransactionRequest | TransactionWillFail;

export type UpdateSponsorshipSignersRequest = {
  allowLensAccess?: InputMaybe<Scalars['Boolean']['input']>;
  sponsorship: Scalars['EvmAddress']['input'];
  toAdd?: InputMaybe<Array<SponsorshipSignerInput>>;
  toRemove?: InputMaybe<Array<Scalars['EvmAddress']['input']>>;
};

export type UpdateSponsorshipSignersResult = SelfFundedTransactionRequest | SponsoredTransactionRequest | TransactionWillFail;

export type Username = {
  __typename?: 'Username';
  id: Scalars['ID']['output'];
  linkedTo?: Maybe<Scalars['EvmAddress']['output']>;
  localName: Scalars['String']['output'];
  namespace: Scalars['EvmAddress']['output'];
  operations?: Maybe<LoggedInUsernameOperations>;
  ownedBy: Scalars['EvmAddress']['output'];
  timestamp: Scalars['DateTime']['output'];
  value: Scalars['UsernameValue']['output'];
};

export type UsernameInput = {
  localName: Scalars['String']['input'];
  namespace?: Scalars['EvmAddress']['input'];
};

export type UsernameLengthNamespaceRuleConfig = {
  maxLength?: InputMaybe<Scalars['Int']['input']>;
  minLength?: InputMaybe<Scalars['Int']['input']>;
};

export type UsernameNamespace = {
  __typename?: 'UsernameNamespace';
  address: Scalars['EvmAddress']['output'];
  collectionMetadata?: Maybe<UsernameNamespaceMetadataStandard>;
  createdAt: Scalars['DateTime']['output'];
  metadata?: Maybe<UsernameNamespaceMetadata>;
  namespace: Scalars['String']['output'];
  operations?: Maybe<LoggedInUsernameNamespaceOperations>;
  owner: Scalars['EvmAddress']['output'];
  rules: NamespaceRules;
  stats: UsernameNamespaceStats;
};

export type UsernameNamespaceChoiceOneOf = {
  custom?: InputMaybe<Scalars['EvmAddress']['input']>;
  globalNamespace?: InputMaybe<Scalars['AlwaysTrue']['input']>;
  none?: InputMaybe<Scalars['AlwaysTrue']['input']>;
};

export type UsernameNamespaceMetadata = {
  __typename?: 'UsernameNamespaceMetadata';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
};

export type UsernameNamespaceMetadataStandard = {
  __typename?: 'UsernameNamespaceMetadataStandard';
  bannerImage?: Maybe<Scalars['URI']['output']>;
  collaborators: Array<Scalars['EvmAddress']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  externalLink?: Maybe<Scalars['URI']['output']>;
  featuredImage?: Maybe<Scalars['URI']['output']>;
  image?: Maybe<Scalars['URI']['output']>;
  name: Scalars['String']['output'];
  schema: PrimitiveMetadataSchema;
  symbol?: Maybe<Scalars['String']['output']>;
};

export type UsernameNamespaceStats = {
  __typename?: 'UsernameNamespaceStats';
  totalUsernames: Scalars['Int']['output'];
};

export type UsernamePricePerLengthNamespaceRuleConfig = {
  cost: AmountInput;
  costOverrides?: InputMaybe<Array<LengthAmountPair>>;
  recipient: Scalars['EvmAddress']['input'];
};

export type UsernameRequest = {
  id?: InputMaybe<Scalars['ID']['input']>;
  username?: InputMaybe<UsernameInput>;
};

export type UsernameReserved = {
  __typename?: 'UsernameReserved';
  localName: Scalars['String']['output'];
  namespace: Scalars['EvmAddress']['output'];
  ruleId: Scalars['RuleId']['output'];
};

export type UsernameSearchInput = {
  localNameQuery: Scalars['String']['input'];
  namespaces?: Array<Scalars['EvmAddress']['input']>;
};

export type UsernameTaken = {
  __typename?: 'UsernameTaken';
  ownedBy: Scalars['EvmAddress']['output'];
  reason: Scalars['String']['output'];
};

export type UsernamesFilter = {
  linkedTo?: InputMaybe<Scalars['EvmAddress']['input']>;
  localNameQuery?: InputMaybe<Scalars['String']['input']>;
  namespace?: InputMaybe<Scalars['EvmAddress']['input']>;
  owner?: InputMaybe<Scalars['EvmAddress']['input']>;
};

export enum UsernamesOrderBy {
  FirstMinted = 'FIRST_MINTED',
  LastMinted = 'LAST_MINTED'
}

export type UsernamesRequest = {
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<UsernamesFilter>;
  orderBy?: UsernamesOrderBy;
  pageSize?: PageSize;
};

export type VideoMetadata = {
  __typename?: 'VideoMetadata';
  attachments: Array<AnyMedia>;
  attributes: Array<MetadataAttribute>;
  content: Scalars['String']['output'];
  contentWarning?: Maybe<ContentWarning>;
  id: Scalars['MetadataId']['output'];
  locale: Scalars['Locale']['output'];
  mainContentFocus: MainContentFocus;
  tags?: Maybe<Array<Scalars['Tag']['output']>>;
  title?: Maybe<Scalars['String']['output']>;
  video: MediaVideo;
};

export type WhoExecutedActionOnAccountFilter = {
  anyOf: Array<AccountActionFilter>;
};

export enum WhoExecutedActionOnAccountOrderBy {
  AccountScore = 'ACCOUNT_SCORE',
  FirstActioned = 'FIRST_ACTIONED',
  LastActioned = 'LAST_ACTIONED'
}

export type WhoExecutedActionOnAccountRequest = {
  account: Scalars['EvmAddress']['input'];
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<WhoExecutedActionOnAccountFilter>;
  orderBy?: WhoExecutedActionOnAccountOrderBy;
  pageSize?: PageSize;
};

export type WhoExecutedActionOnPostFilter = {
  anyOf: Array<PostActionFilter>;
};

export enum WhoExecutedActionOnPostOrderBy {
  AccountScore = 'ACCOUNT_SCORE',
  FirstActioned = 'FIRST_ACTIONED',
  LastActioned = 'LAST_ACTIONED'
}

export type WhoExecutedActionOnPostRequest = {
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<WhoExecutedActionOnPostFilter>;
  orderBy?: WhoExecutedActionOnPostOrderBy;
  pageSize?: PageSize;
  post: Scalars['PostId']['input'];
};

export enum WhoReferencedPostOrderBy {
  AccountScore = 'ACCOUNT_SCORE',
  MostRecent = 'MOST_RECENT',
  Oldest = 'OLDEST'
}

export type WhoReferencedPostRequest = {
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
  orderBy?: WhoReferencedPostOrderBy;
  pageSize?: PageSize;
  post: Scalars['PostId']['input'];
  referenceTypes: Array<PostReferenceType>;
};

export type WidthBasedTransform = {
  width: Scalars['Int']['input'];
};

export type WithdrawRequest = {
  erc20?: InputMaybe<AmountInput>;
  native?: InputMaybe<Scalars['BigDecimal']['input']>;
};

export type WithdrawResult = InsufficientFunds | SelfFundedTransactionRequest | SponsoredTransactionRequest | TransactionWillFail;

export type WrapTokensRequest = {
  amount: Scalars['BigDecimal']['input'];
};

export type WrapTokensResult = InsufficientFunds | SelfFundedTransactionRequest | SponsoredTransactionRequest | TransactionWillFail;

export type WrongSignerError = {
  __typename?: 'WrongSignerError';
  reason: Scalars['String']['output'];
};

export type _Service = {
  __typename?: '_Service';
  sdl?: Maybe<Scalars['String']['output']>;
};

type AnyKeyValue_AddressKeyValue_Fragment = { __typename?: 'AddressKeyValue', key: string, address: any };

type AnyKeyValue_ArrayKeyValue_Fragment = { __typename?: 'ArrayKeyValue' };

type AnyKeyValue_BigDecimalKeyValue_Fragment = { __typename?: 'BigDecimalKeyValue', key: string, bigDecimal: any };

type AnyKeyValue_BooleanKeyValue_Fragment = { __typename?: 'BooleanKeyValue' };

type AnyKeyValue_DictionaryKeyValue_Fragment = { __typename?: 'DictionaryKeyValue' };

type AnyKeyValue_IntKeyValue_Fragment = { __typename?: 'IntKeyValue' };

type AnyKeyValue_IntNullableKeyValue_Fragment = { __typename?: 'IntNullableKeyValue' };

type AnyKeyValue_RawKeyValue_Fragment = { __typename?: 'RawKeyValue' };

type AnyKeyValue_StringKeyValue_Fragment = { __typename?: 'StringKeyValue', key: string, string: string };

export type AnyKeyValueFragment = AnyKeyValue_AddressKeyValue_Fragment | AnyKeyValue_ArrayKeyValue_Fragment | AnyKeyValue_BigDecimalKeyValue_Fragment | AnyKeyValue_BooleanKeyValue_Fragment | AnyKeyValue_DictionaryKeyValue_Fragment | AnyKeyValue_IntKeyValue_Fragment | AnyKeyValue_IntNullableKeyValue_Fragment | AnyKeyValue_RawKeyValue_Fragment | AnyKeyValue_StringKeyValue_Fragment;

export type Erc20Fragment = { __typename?: 'Erc20', decimals: number, name: string, symbol: string, contract: { __typename?: 'NetworkAddress', address: any } };

export type PaginatedResultInfoFragment = { __typename?: 'PaginatedResultInfo', prev?: any | null, next?: any | null };

export type AccountFragment = { __typename?: 'Account', owner: any, address: any, createdAt: any, rules: { __typename?: 'AccountFollowRules', anyOf: Array<(
      { __typename?: 'AccountFollowRule' }
      & AccountFollowRuleFragment
    )>, required: Array<(
      { __typename?: 'AccountFollowRule' }
      & AccountFollowRuleFragment
    )> }, operations?: (
    { __typename?: 'LoggedInAccountOperations' }
    & LoggedInAccountOperationsFragment
  ) | null, metadata?: (
    { __typename?: 'AccountMetadata' }
    & AccountMetadataFragment
  ) | null, username?: (
    { __typename?: 'Username' }
    & UsernameFragment
  ) | null };

export type AccountFollowRuleFragment = { __typename?: 'AccountFollowRule', id: any, type: AccountFollowRuleType, config: Array<(
    { __typename?: 'AddressKeyValue' }
    & AnyKeyValue_AddressKeyValue_Fragment
  ) | (
    { __typename?: 'ArrayKeyValue' }
    & AnyKeyValue_ArrayKeyValue_Fragment
  ) | (
    { __typename?: 'BigDecimalKeyValue' }
    & AnyKeyValue_BigDecimalKeyValue_Fragment
  ) | (
    { __typename?: 'BooleanKeyValue' }
    & AnyKeyValue_BooleanKeyValue_Fragment
  ) | (
    { __typename?: 'DictionaryKeyValue' }
    & AnyKeyValue_DictionaryKeyValue_Fragment
  ) | (
    { __typename?: 'IntKeyValue' }
    & AnyKeyValue_IntKeyValue_Fragment
  ) | (
    { __typename?: 'IntNullableKeyValue' }
    & AnyKeyValue_IntNullableKeyValue_Fragment
  ) | (
    { __typename?: 'RawKeyValue' }
    & AnyKeyValue_RawKeyValue_Fragment
  ) | (
    { __typename?: 'StringKeyValue' }
    & AnyKeyValue_StringKeyValue_Fragment
  )> };

export type AccountManagerFragment = { __typename?: 'AccountManager', manager: any, isLensManager: boolean, permissions: { __typename?: 'AccountManagerPermissions', canExecuteTransactions: boolean, canTransferNative: boolean, canTransferTokens: boolean } };

export type AccountMetadataFragment = { __typename?: 'AccountMetadata', id: string, name?: string | null, bio?: string | null, picture?: any | null, coverPicture?: any | null, attributes: Array<(
    { __typename?: 'MetadataAttribute' }
    & MetadataAttributeFragment
  )> };

export type AccountsAvailableQueryVariables = Exact<{
  accountsAvailableRequest: AccountsAvailableRequest;
  lastLoggedInAccountRequest: LastLoggedInAccountRequest;
}>;


export type AccountsAvailableQuery = { __typename?: 'Query', lastLoggedInAccount?: (
    { __typename?: 'Account' }
    & AccountFragment
  ) | null, accountsAvailable: { __typename?: 'PaginatedAccountsAvailableResult', items: Array<{ __typename?: 'AccountManaged', account: (
        { __typename?: 'Account' }
        & AccountFragment
      ) } | { __typename?: 'AccountOwned', account: (
        { __typename?: 'Account' }
        & AccountFragment
      ) }>, pageInfo: (
      { __typename?: 'PaginatedResultInfo' }
      & PaginatedResultInfoFragment
    ) } };

export type LoggedInAccountOperationsFragment = { __typename?: 'LoggedInAccountOperations', id: string, isFollowedByMe: boolean, isFollowingMe: boolean, isMutedByMe: boolean, isBlockedByMe: boolean, hasBlockedMe: boolean };

export type UsernameFragment = { __typename?: 'Username', namespace: any, localName: string, linkedTo?: any | null, value: any };

export type MetadataAttributeFragment = { __typename?: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string };

export const Erc20FragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Erc20"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Erc20"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contract"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}}]}},{"kind":"Field","name":{"kind":"Name","value":"decimals"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}}]}}]} as unknown as DocumentNode;
export const PaginatedResultInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PaginatedResultInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PaginatedResultInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"prev"}},{"kind":"Field","name":{"kind":"Name","value":"next"}}]}}]} as unknown as DocumentNode;
export const AnyKeyValueFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AnyKeyValue"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AnyKeyValue"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AddressKeyValue"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"address"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BigDecimalKeyValue"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"bigDecimal"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StringKeyValue"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"string"}}]}}]}}]} as unknown as DocumentNode;
export const AccountFollowRuleFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AccountFollowRule"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AccountFollowRule"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"config"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AnyKeyValue"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AnyKeyValue"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AnyKeyValue"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AddressKeyValue"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"address"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BigDecimalKeyValue"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"bigDecimal"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StringKeyValue"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"string"}}]}}]}}]} as unknown as DocumentNode;
export const LoggedInAccountOperationsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LoggedInAccountOperations"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LoggedInAccountOperations"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isFollowedByMe"}},{"kind":"Field","name":{"kind":"Name","value":"isFollowingMe"}},{"kind":"Field","name":{"kind":"Name","value":"isMutedByMe"}},{"kind":"Field","name":{"kind":"Name","value":"isBlockedByMe"}},{"kind":"Field","name":{"kind":"Name","value":"hasBlockedMe"}}]}}]} as unknown as DocumentNode;
export const MetadataAttributeFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MetadataAttribute"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MetadataAttribute"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]} as unknown as DocumentNode;
export const AccountMetadataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AccountMetadata"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AccountMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"picture"}},{"kind":"Field","name":{"kind":"Name","value":"coverPicture"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MetadataAttribute"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MetadataAttribute"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MetadataAttribute"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]} as unknown as DocumentNode;
export const UsernameFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Username"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Username"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"namespace"}},{"kind":"Field","name":{"kind":"Name","value":"localName"}},{"kind":"Field","name":{"kind":"Name","value":"linkedTo"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]} as unknown as DocumentNode;
export const AccountFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Account"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Account"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"owner"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"rules"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"anyOf"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AccountFollowRule"}}]}},{"kind":"Field","name":{"kind":"Name","value":"required"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AccountFollowRule"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"operations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LoggedInAccountOperations"}}]}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AccountMetadata"}}]}},{"kind":"Field","name":{"kind":"Name","value":"username"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"autoResolve"},"value":{"kind":"BooleanValue","value":true}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Username"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AnyKeyValue"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AnyKeyValue"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AddressKeyValue"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"address"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BigDecimalKeyValue"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"bigDecimal"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StringKeyValue"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"string"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AccountFollowRule"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AccountFollowRule"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"config"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AnyKeyValue"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AccountMetadata"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AccountMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"picture"}},{"kind":"Field","name":{"kind":"Name","value":"coverPicture"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MetadataAttribute"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LoggedInAccountOperations"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LoggedInAccountOperations"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isFollowedByMe"}},{"kind":"Field","name":{"kind":"Name","value":"isFollowingMe"}},{"kind":"Field","name":{"kind":"Name","value":"isMutedByMe"}},{"kind":"Field","name":{"kind":"Name","value":"isBlockedByMe"}},{"kind":"Field","name":{"kind":"Name","value":"hasBlockedMe"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Username"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Username"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"namespace"}},{"kind":"Field","name":{"kind":"Name","value":"localName"}},{"kind":"Field","name":{"kind":"Name","value":"linkedTo"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MetadataAttribute"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MetadataAttribute"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]} as unknown as DocumentNode;
export const AccountManagerFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AccountManager"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AccountManager"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"manager"}},{"kind":"Field","name":{"kind":"Name","value":"isLensManager"}},{"kind":"Field","name":{"kind":"Name","value":"permissions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"canExecuteTransactions"}},{"kind":"Field","name":{"kind":"Name","value":"canTransferNative"}},{"kind":"Field","name":{"kind":"Name","value":"canTransferTokens"}}]}}]}}]} as unknown as DocumentNode;
export const AccountsAvailableDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AccountsAvailable"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"accountsAvailableRequest"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AccountsAvailableRequest"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lastLoggedInAccountRequest"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LastLoggedInAccountRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lastLoggedInAccount"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lastLoggedInAccountRequest"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Account"}}]}},{"kind":"Field","name":{"kind":"Name","value":"accountsAvailable"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"accountsAvailableRequest"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AccountManaged"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"account"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Account"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AccountOwned"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"account"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Account"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PaginatedResultInfo"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AnyKeyValue"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AnyKeyValue"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AddressKeyValue"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"address"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BigDecimalKeyValue"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"bigDecimal"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StringKeyValue"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"string"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PaginatedResultInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PaginatedResultInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"prev"}},{"kind":"Field","name":{"kind":"Name","value":"next"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Account"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Account"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"owner"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"rules"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"anyOf"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AccountFollowRule"}}]}},{"kind":"Field","name":{"kind":"Name","value":"required"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AccountFollowRule"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"operations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LoggedInAccountOperations"}}]}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AccountMetadata"}}]}},{"kind":"Field","name":{"kind":"Name","value":"username"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"autoResolve"},"value":{"kind":"BooleanValue","value":true}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Username"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AccountFollowRule"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AccountFollowRule"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"config"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AnyKeyValue"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AccountMetadata"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AccountMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"picture"}},{"kind":"Field","name":{"kind":"Name","value":"coverPicture"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MetadataAttribute"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LoggedInAccountOperations"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LoggedInAccountOperations"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isFollowedByMe"}},{"kind":"Field","name":{"kind":"Name","value":"isFollowingMe"}},{"kind":"Field","name":{"kind":"Name","value":"isMutedByMe"}},{"kind":"Field","name":{"kind":"Name","value":"isBlockedByMe"}},{"kind":"Field","name":{"kind":"Name","value":"hasBlockedMe"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Username"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Username"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"namespace"}},{"kind":"Field","name":{"kind":"Name","value":"localName"}},{"kind":"Field","name":{"kind":"Name","value":"linkedTo"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MetadataAttribute"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MetadataAttribute"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]} as unknown as DocumentNode;
export function useAccountsAvailableQuery(baseOptions: Apollo.QueryHookOptions<AccountsAvailableQuery, AccountsAvailableQueryVariables> & ({ variables: AccountsAvailableQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AccountsAvailableQuery, AccountsAvailableQueryVariables>(AccountsAvailableDocument, options);
      }
export function useAccountsAvailableLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AccountsAvailableQuery, AccountsAvailableQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AccountsAvailableQuery, AccountsAvailableQueryVariables>(AccountsAvailableDocument, options);
        }
export function useAccountsAvailableSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<AccountsAvailableQuery, AccountsAvailableQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<AccountsAvailableQuery, AccountsAvailableQueryVariables>(AccountsAvailableDocument, options);
        }
export type AccountsAvailableQueryHookResult = ReturnType<typeof useAccountsAvailableQuery>;
export type AccountsAvailableLazyQueryHookResult = ReturnType<typeof useAccountsAvailableLazyQuery>;
export type AccountsAvailableSuspenseQueryHookResult = ReturnType<typeof useAccountsAvailableSuspenseQuery>;