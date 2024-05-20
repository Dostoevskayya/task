import requestMaker from "./requestMaker"

const getProductById = async (id: string) => {
  return requestMaker(`/products/${id}`)
}

export default getProductById
