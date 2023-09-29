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
    "query CategoriesGetByCategorySlug($slug: String!) {\n  categories(where: {slug: $slug}) {\n    id\n    name\n    slug\n  }\n}": types.CategoriesGetByCategorySlugDocument,
    "query CategoriesGetList {\n  categories {\n    id\n    name\n    slug\n  }\n}": types.CategoriesGetListDocument,
    "query CollectionsGetCollectionBySlug($slug: String!) {\n  collections(where: {slug: $slug}) {\n    id\n    name\n    slug\n  }\n}": types.CollectionsGetCollectionBySlugDocument,
    "query CollectionsGetList {\n  collections {\n    id\n    name\n    slug\n  }\n}": types.CollectionsGetListDocument,
    "query ProductGetById($id: ID!) {\n  product(where: {id: $id}) {\n    ...ProductListItem\n  }\n}": types.ProductGetByIdDocument,
    "query ProductGetVariantsList($id: ID!) {\n  product(where: {id: $id}) {\n    variants {\n      ... on ProductColorVariant {\n        ...SingleProductColorVariant\n      }\n      ... on ProductSizeColorVariant {\n        ...SingleProductSizeColorVariant\n      }\n      ... on ProductSizeVariant {\n        ...SingleProductSizeVariant\n      }\n    }\n  }\n}": types.ProductGetVariantsListDocument,
    "fragment SingleProductItem on Product {\n  id\n  name\n  price\n  description\n  categories(first: 1) {\n    name\n  }\n  images(first: 1) {\n    url\n  }\n}\n\nfragment SingleProductSizeColorVariant on ProductSizeColorVariant {\n  id\n  name\n}\n\nfragment SingleProductColorVariant on ProductColorVariant {\n  id\n  name\n}\n\nfragment SingleProductSizeVariant on ProductSizeVariant {\n  id\n  name\n}": types.SingleProductItemFragmentDoc,
    "fragment ProductListItem on Product {\n  id\n  name\n  description\n  categories(first: 1) {\n    name\n  }\n  images(first: 1) {\n    url\n  }\n  price\n}": types.ProductListItemFragmentDoc,
    "query GetProductsCategoryByPage($slug: String!, $skip: Int!, $first: Int!) {\n  productsConnection(\n    where: {categories_some: {slug: $slug}}\n    skip: $skip\n    first: $first\n  ) {\n    edges {\n      node {\n        ...ProductListItem\n      }\n    }\n  }\n}": types.GetProductsCategoryByPageDocument,
    "query GetProductsCollectionByPage($slug: String!, $skip: Int!, $first: Int!) {\n  productsConnection(\n    where: {collections_some: {slug: $slug}}\n    skip: $skip\n    first: $first\n  ) {\n    edges {\n      node {\n        ...ProductListItem\n      }\n    }\n  }\n}": types.GetProductsCollectionByPageDocument,
    "query ProductsGetByCategorySlug($slug: String!) {\n  categories(where: {slug: $slug}) {\n    products {\n      ...ProductListItem\n    }\n  }\n}": types.ProductsGetByCategorySlugDocument,
    "query ProductsGetList {\n  products {\n    ...ProductListItem\n  }\n}": types.ProductsGetListDocument,
    "query ProductsGetListByCollectionSlug($slag: String!) {\n  products(where: {collections_some: {slug: $slag}}) {\n    ...ProductListItem\n  }\n}": types.ProductsGetListByCollectionSlugDocument,
    "query GetProductsByPage($skip: Int!, $first: Int!) {\n  products(skip: $skip, first: $first) {\n    ...ProductListItem\n  }\n}": types.GetProductsByPageDocument,
    "query ProductsGetSuggestedList($name: String!) {\n  products(where: {categories_some: {name: $name}}, first: 4) {\n    ...ProductListItem\n  }\n}": types.ProductsGetSuggestedListDocument,
};

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
export function graphql(source: "query CollectionsGetList {\n  collections {\n    id\n    name\n    slug\n  }\n}"): typeof import('./graphql').CollectionsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetById($id: ID!) {\n  product(where: {id: $id}) {\n    ...ProductListItem\n  }\n}"): typeof import('./graphql').ProductGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetVariantsList($id: ID!) {\n  product(where: {id: $id}) {\n    variants {\n      ... on ProductColorVariant {\n        ...SingleProductColorVariant\n      }\n      ... on ProductSizeColorVariant {\n        ...SingleProductSizeColorVariant\n      }\n      ... on ProductSizeVariant {\n        ...SingleProductSizeVariant\n      }\n    }\n  }\n}"): typeof import('./graphql').ProductGetVariantsListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment SingleProductItem on Product {\n  id\n  name\n  price\n  description\n  categories(first: 1) {\n    name\n  }\n  images(first: 1) {\n    url\n  }\n}\n\nfragment SingleProductSizeColorVariant on ProductSizeColorVariant {\n  id\n  name\n}\n\nfragment SingleProductColorVariant on ProductColorVariant {\n  id\n  name\n}\n\nfragment SingleProductSizeVariant on ProductSizeVariant {\n  id\n  name\n}"): typeof import('./graphql').SingleProductItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductListItem on Product {\n  id\n  name\n  description\n  categories(first: 1) {\n    name\n  }\n  images(first: 1) {\n    url\n  }\n  price\n}"): typeof import('./graphql').ProductListItemFragmentDoc;
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
export function graphql(source: "query GetProductsByPage($skip: Int!, $first: Int!) {\n  products(skip: $skip, first: $first) {\n    ...ProductListItem\n  }\n}"): typeof import('./graphql').GetProductsByPageDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetSuggestedList($name: String!) {\n  products(where: {categories_some: {name: $name}}, first: 4) {\n    ...ProductListItem\n  }\n}"): typeof import('./graphql').ProductsGetSuggestedListDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
