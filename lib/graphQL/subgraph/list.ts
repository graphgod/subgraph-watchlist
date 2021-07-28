export const query =
  'query subgraphs($orderBy: Subgraph_orderBy, $orderDirection: OrderDirection, $first: Int, $skip: Int) {\n  subgraphs(orderBy: $orderBy, orderDirection: $orderDirection, first: $first, skip: $skip, where: {currentVersion_not: null, displayName_not: ""}) {\n    id\n    displayName\n    description\n    image\n    createdAt\n    updatedAt\n    signalledTokens\n unsignalledTokens\n    currentSignalledTokens\n    owner {\n      id\n      image\n      defaultName {\n        id\n        name\n        __typename\n      }\n      __typename\n    }\n    currentVersion {\n      id\n      subgraphDeployment {\n        id\n        stakedTokens\n        signalledTokens\n        queryFeesAmount\n        __typename\n      }\n      __typename\n    }\n    pastVersions {\n      id\n      createdAt\n      label\n      subgraphDeployment {\n        id\n        signalledTokens\n        __typename\n      }\n      __typename\n    }\n    versions {\n      id\n      __typename\n    }\n    __typename\n  }\n}\n'
