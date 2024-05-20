import requestMaker from "./requestMaker"

const getProducts = async (id?: string) => {
  if (id) {
    return requestMaker(
      "/products" +
        `?responseFields=&categories=${id}&includeProductsFromSubcategories=${true}`
    )
  }
  return requestMaker("/products")
}

export default getProducts
