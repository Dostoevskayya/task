import requestMaker from "./requestMaker"

const getProductById = async (id: number[]) => {
  return requestMaker(`/products?responseFields=&productId=${id}`)
}

export default getProductById
