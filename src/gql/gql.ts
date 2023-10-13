/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "mutation CartAddProduct($orderId: ID!, $total: Int!, $productId: ID!) {\n  createOrderItem(\n    data: {quantity: 1, total: $total, product: {connect: {id: $productId}}, order: {connect: {id: $orderId}}}\n  ) {\n    id\n  }\n}": types.CartAddProductDocument,
    "mutation CartCreate {\n  createOrder(data: {total: 0}) {\n    ...Cart\n  }\n}": types.CartCreateDocument,
    "query CartGetById($id: ID!) {\n  order(where: {id: $id}, stage: DRAFT) {\n    ...Cart\n  }\n}": types.CartGetByIdDocument,
    "fragment Cart on Order {\n  id\n  orderItems {\n    id\n    quantity\n    total\n    product {\n      id\n      name\n      price\n      images(first: 1) {\n        url\n      }\n    }\n  }\n}": types.CartFragmentDoc,
    "mutation CartRemoveProduct($itemId: ID!) {\n  deleteOrderItem(where: {id: $itemId}) {\n    id\n  }\n}": types.CartRemoveProductDocument,
    "mutation CartSetProductQuantity($productId: ID!, $quantity: Int!, $hash: String!) {\n  updateOrderItem(\n    where: {id: $productId}\n    data: {quantity: $quantity, hash: $hash}\n  ) {\n    id\n  }\n}": types.CartSetProductQuantityDocument,
    "mutation CartUpsertProduct($orderItemId: ID, $cartId: ID!, $productId: ID!, $total: Int!, $quantity: Int!) {\n  upsertOrderItem(\n    upsert: {create: {quantity: 1, total: $total, order: {connect: {id: $cartId}}, product: {connect: {id: $productId}}}, update: {quantity: $quantity, total: $total}}\n    where: {id: $orderItemId}\n  ) {\n    id\n  }\n}": types.CartUpsertProductDocument,
    "query CategoriesGetByCategorySlug($slug: String!) {\n  categories(where: {slug: $slug}) {\n    id\n    name\n    slug\n  }\n}": types.CategoriesGetByCategorySlugDocument,
    "query CategoriesGetList {\n  categories {\n    id\n    name\n    slug\n  }\n}": types.CategoriesGetListDocument,
    "query CollectionsGetCollectionBySlug($slug: String!) {\n  collections(where: {slug: $slug}) {\n    id\n    name\n    slug\n  }\n}": types.CollectionsGetCollectionBySlugDocument,
    "query CollectionsGetList {\n  collections {\n    id\n    name\n    slug\n    image {\n      url\n      fileName\n    }\n  }\n}": types.CollectionsGetListDocument,
    "query ProductGetById($id: ID!) {\n  product(where: {id: $id}) {\n    ...ProductListItem\n  }\n}": types.ProductGetByIdDocument,
    "query ProductGetReviewsRating($id: ID!) {\n  reviewsConnection(where: {product: {id: $id}}) {\n    edges {\n      node {\n        rating\n      }\n    }\n    aggregate {\n      count\n    }\n  }\n}": types.ProductGetReviewsRatingDocument,
    "query ProductGetVariantsList($id: ID!) {\n  product(where: {id: $id}) {\n    variants {\n      ... on ProductColorVariant {\n        ...SingleProductColorVariant\n      }\n      ... on ProductSizeColorVariant {\n        ...SingleProductSizeColorVariant\n      }\n      ... on ProductSizeVariant {\n        ...SingleProductSizeVariant\n      }\n    }\n  }\n}": types.ProductGetVariantsListDocument,
    "fragment SingleProductItem on Product {\n  id\n  name\n  description\n  categories(first: 1) {\n    name\n  }\n  images(first: 1) {\n    url\n  }\n  price\n  averageRating\n}\n\nfragment SingleProductSizeColorVariant on ProductSizeColorVariant {\n  id\n  name\n}\n\nfragment SingleProductColorVariant on ProductColorVariant {\n  id\n  name\n}\n\nfragment SingleProductSizeVariant on ProductSizeVariant {\n  id\n  name\n}": types.SingleProductItemFragmentDoc,
    "fragment ProductListItem on Product {\n  id\n  name\n  price\n  description\n  categories(first: 1) {\n    name\n  }\n  images(first: 1) {\n    url\n  }\n  averageRating\n}": types.ProductListItemFragmentDoc,
    "mutation ProductUpdateAverageRating($averageRating: Int!, $id: ID!, $hash: String!) {\n  updateProduct(\n    data: {averageRating: $averageRating, hash: $hash}\n    where: {id: $id}\n  ) {\n    id\n    averageRating\n    hash\n  }\n  publishProduct(to: PUBLISHED, where: {id: $id}) {\n    id\n  }\n}": types.ProductUpdateAverageRatingDocument,
    "query GetProductsCategoryByPage($slug: String!, $skip: Int!, $first: Int!) {\n  productsConnection(\n    where: {categories_some: {slug: $slug}}\n    skip: $skip\n    first: $first\n  ) {\n    edges {\n      node {\n        ...ProductListItem\n      }\n    }\n  }\n}": types.GetProductsCategoryByPageDocument,
    "query GetProductsCollectionByPage($slug: String!, $skip: Int!, $first: Int!) {\n  productsConnection(\n    where: {collections_some: {slug: $slug}}\n    skip: $skip\n    first: $first\n  ) {\n    edges {\n      node {\n        ...ProductListItem\n      }\n    }\n  }\n}": types.GetProductsCollectionByPageDocument,
    "query ProductsGetByCategorySlug($slug: String!) {\n  categories(where: {slug: $slug}) {\n    products {\n      ...ProductListItem\n    }\n  }\n}": types.ProductsGetByCategorySlugDocument,
    "query ProductsGetList {\n  products {\n    ...ProductListItem\n  }\n}": types.ProductsGetListDocument,
    "query ProductsGetListByCollectionSlug($slag: String!) {\n  products(where: {collections_some: {slug: $slag}}) {\n    ...ProductListItem\n  }\n}": types.ProductsGetListByCollectionSlugDocument,
    "query ProductsGetListOrderBy($orderBy: ProductOrderByInput) {\n  products(orderBy: $orderBy) {\n    ...ProductListItem\n  }\n}": types.ProductsGetListOrderByDocument,
    "query GetProductsByPage($skip: Int!, $first: Int!) {\n  products(skip: $skip, first: $first) {\n    ...ProductListItem\n  }\n}": types.GetProductsByPageDocument,
    "query GetProductsByPageOrderBy($skip: Int!, $first: Int!, $orderBy: ProductOrderByInput) {\n  products(skip: $skip, first: $first, orderBy: $orderBy) {\n    ...ProductListItem\n  }\n}": types.GetProductsByPageOrderByDocument,
    "query ProductsGetListSearch($search: String!) {\n  products(where: {_search: $search}) {\n    ...ProductListItem\n  }\n}": types.ProductsGetListSearchDocument,
    "query ProductsGetSuggestedList($name: String!) {\n  products(where: {categories_some: {name: $name}}, first: 4) {\n    ...ProductListItem\n  }\n}": types.ProductsGetSuggestedListDocument,
    "mutation ReviewCreate($id: ID!, $headline: String!, $name: String!, $email: String!, $content: String!, $rating: Int!) {\n  createReview(\n    data: {headline: $headline, name: $name, email: $email, content: $content, rating: $rating, product: {connect: {id: $id}}}\n  ) {\n    id\n  }\n}": types.ReviewCreateDocument,
    "query ReviewGetByProductId($id: ID!) {\n  reviewsConnection(where: {product: {id: $id}}, orderBy: createdAt_ASC) {\n    edges {\n      node {\n        ...ReviewItem\n      }\n    }\n  }\n}": types.ReviewGetByProductIdDocument,
    "fragment ReviewItem on Review {\n  id\n  name\n  headline\n  email\n  content\n  rating\n}": types.ReviewItemFragmentDoc,
    "mutation ReviewPublish($id: ID!) {\n  publishReview(where: {id: $id}, to: PUBLISHED) {\n    ...ReviewItem\n  }\n}": types.ReviewPublishDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartAddProduct($orderId: ID!, $total: Int!, $productId: ID!) {\n  createOrderItem(\n    data: {quantity: 1, total: $total, product: {connect: {id: $productId}}, order: {connect: {id: $orderId}}}\n  ) {\n    id\n  }\n}"): typeof import('./graphql').CartAddProductDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartCreate {\n  createOrder(data: {total: 0}) {\n    ...Cart\n  }\n}"): typeof import('./graphql').CartCreateDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CartGetById($id: ID!) {\n  order(where: {id: $id}, stage: DRAFT) {\n    ...Cart\n  }\n}"): typeof import('./graphql').CartGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment Cart on Order {\n  id\n  orderItems {\n    id\n    quantity\n    total\n    product {\n      id\n      name\n      price\n      images(first: 1) {\n        url\n      }\n    }\n  }\n}"): typeof import('./graphql').CartFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartRemoveProduct($itemId: ID!) {\n  deleteOrderItem(where: {id: $itemId}) {\n    id\n  }\n}"): typeof import('./graphql').CartRemoveProductDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartSetProductQuantity($productId: ID!, $quantity: Int!, $hash: String!) {\n  updateOrderItem(\n    where: {id: $productId}\n    data: {quantity: $quantity, hash: $hash}\n  ) {\n    id\n  }\n}"): typeof import('./graphql').CartSetProductQuantityDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartUpsertProduct($orderItemId: ID, $cartId: ID!, $productId: ID!, $total: Int!, $quantity: Int!) {\n  upsertOrderItem(\n    upsert: {create: {quantity: 1, total: $total, order: {connect: {id: $cartId}}, product: {connect: {id: $productId}}}, update: {quantity: $quantity, total: $total}}\n    where: {id: $orderItemId}\n  ) {\n    id\n  }\n}"): typeof import('./graphql').CartUpsertProductDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CategoriesGetByCategorySlug($slug: String!) {\n  categories(where: {slug: $slug}) {\n    id\n    name\n    slug\n  }\n}"): typeof import('./graphql').CategoriesGetByCategorySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CategoriesGetList {\n  categories {\n    id\n    name\n    slug\n  }\n}"): typeof import('./graphql').CategoriesGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionsGetCollectionBySlug($slug: String!) {\n  collections(where: {slug: $slug}) {\n    id\n    name\n    slug\n  }\n}"): typeof import('./graphql').CollectionsGetCollectionBySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionsGetList {\n  collections {\n    id\n    name\n    slug\n    image {\n      url\n      fileName\n    }\n  }\n}"): typeof import('./graphql').CollectionsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetById($id: ID!) {\n  product(where: {id: $id}) {\n    ...ProductListItem\n  }\n}"): typeof import('./graphql').ProductGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetReviewsRating($id: ID!) {\n  reviewsConnection(where: {product: {id: $id}}) {\n    edges {\n      node {\n        rating\n      }\n    }\n    aggregate {\n      count\n    }\n  }\n}"): typeof import('./graphql').ProductGetReviewsRatingDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetVariantsList($id: ID!) {\n  product(where: {id: $id}) {\n    variants {\n      ... on ProductColorVariant {\n        ...SingleProductColorVariant\n      }\n      ... on ProductSizeColorVariant {\n        ...SingleProductSizeColorVariant\n      }\n      ... on ProductSizeVariant {\n        ...SingleProductSizeVariant\n      }\n    }\n  }\n}"): typeof import('./graphql').ProductGetVariantsListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment SingleProductItem on Product {\n  id\n  name\n  description\n  categories(first: 1) {\n    name\n  }\n  images(first: 1) {\n    url\n  }\n  price\n  averageRating\n}\n\nfragment SingleProductSizeColorVariant on ProductSizeColorVariant {\n  id\n  name\n}\n\nfragment SingleProductColorVariant on ProductColorVariant {\n  id\n  name\n}\n\nfragment SingleProductSizeVariant on ProductSizeVariant {\n  id\n  name\n}"): typeof import('./graphql').SingleProductItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductListItem on Product {\n  id\n  name\n  price\n  description\n  categories(first: 1) {\n    name\n  }\n  images(first: 1) {\n    url\n  }\n  averageRating\n}"): typeof import('./graphql').ProductListItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation ProductUpdateAverageRating($averageRating: Int!, $id: ID!, $hash: String!) {\n  updateProduct(\n    data: {averageRating: $averageRating, hash: $hash}\n    where: {id: $id}\n  ) {\n    id\n    averageRating\n    hash\n  }\n  publishProduct(to: PUBLISHED, where: {id: $id}) {\n    id\n  }\n}"): typeof import('./graphql').ProductUpdateAverageRatingDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetProductsCategoryByPage($slug: String!, $skip: Int!, $first: Int!) {\n  productsConnection(\n    where: {categories_some: {slug: $slug}}\n    skip: $skip\n    first: $first\n  ) {\n    edges {\n      node {\n        ...ProductListItem\n      }\n    }\n  }\n}"): typeof import('./graphql').GetProductsCategoryByPageDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetProductsCollectionByPage($slug: String!, $skip: Int!, $first: Int!) {\n  productsConnection(\n    where: {collections_some: {slug: $slug}}\n    skip: $skip\n    first: $first\n  ) {\n    edges {\n      node {\n        ...ProductListItem\n      }\n    }\n  }\n}"): typeof import('./graphql').GetProductsCollectionByPageDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetByCategorySlug($slug: String!) {\n  categories(where: {slug: $slug}) {\n    products {\n      ...ProductListItem\n    }\n  }\n}"): typeof import('./graphql').ProductsGetByCategorySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetList {\n  products {\n    ...ProductListItem\n  }\n}"): typeof import('./graphql').ProductsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetListByCollectionSlug($slag: String!) {\n  products(where: {collections_some: {slug: $slag}}) {\n    ...ProductListItem\n  }\n}"): typeof import('./graphql').ProductsGetListByCollectionSlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetListOrderBy($orderBy: ProductOrderByInput) {\n  products(orderBy: $orderBy) {\n    ...ProductListItem\n  }\n}"): typeof import('./graphql').ProductsGetListOrderByDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetProductsByPage($skip: Int!, $first: Int!) {\n  products(skip: $skip, first: $first) {\n    ...ProductListItem\n  }\n}"): typeof import('./graphql').GetProductsByPageDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetProductsByPageOrderBy($skip: Int!, $first: Int!, $orderBy: ProductOrderByInput) {\n  products(skip: $skip, first: $first, orderBy: $orderBy) {\n    ...ProductListItem\n  }\n}"): typeof import('./graphql').GetProductsByPageOrderByDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetListSearch($search: String!) {\n  products(where: {_search: $search}) {\n    ...ProductListItem\n  }\n}"): typeof import('./graphql').ProductsGetListSearchDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetSuggestedList($name: String!) {\n  products(where: {categories_some: {name: $name}}, first: 4) {\n    ...ProductListItem\n  }\n}"): typeof import('./graphql').ProductsGetSuggestedListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation ReviewCreate($id: ID!, $headline: String!, $name: String!, $email: String!, $content: String!, $rating: Int!) {\n  createReview(\n    data: {headline: $headline, name: $name, email: $email, content: $content, rating: $rating, product: {connect: {id: $id}}}\n  ) {\n    id\n  }\n}"): typeof import('./graphql').ReviewCreateDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ReviewGetByProductId($id: ID!) {\n  reviewsConnection(where: {product: {id: $id}}, orderBy: createdAt_ASC) {\n    edges {\n      node {\n        ...ReviewItem\n      }\n    }\n  }\n}"): typeof import('./graphql').ReviewGetByProductIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ReviewItem on Review {\n  id\n  name\n  headline\n  email\n  content\n  rating\n}"): typeof import('./graphql').ReviewItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation ReviewPublish($id: ID!) {\n  publishReview(where: {id: $id}, to: PUBLISHED) {\n    ...ReviewItem\n  }\n}"): typeof import('./graphql').ReviewPublishDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
