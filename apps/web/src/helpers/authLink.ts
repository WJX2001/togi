// import { hydrateAuthTokens, signOut } from "@/store/persisted/useAuthStore";
// import { ApolloLink, fromPromise } from "@apollo/client";
// import parseJwt from "@togi/helpers/parseJwt";
// const authLink = new ApolloLink((operation, forward) => {
//   const { accessToken, refreshToken } = hydrateAuthTokens();
//   if (!accessToken || !refreshToken) {
//     signOut();
//     return forward(operation);
//   }

//   const tokenData = parseJwt(accessToken);
//   const isExpiringSoon =
//     tokenData?.exp && Date.now() >= tokenData.exp * 1000 - 2 * 60 * 1000;
//   if (!isExpiringSoon) {
//     operation.setContext({
//       headers: { "X-Access-Token": accessToken }
//     });

//     return forward(operation);
//   }

//   return fromPromise(
//     // refreshTokens()
//   )
// });

// export default authLink;
