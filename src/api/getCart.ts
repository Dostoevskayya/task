import requestMaker from "./requestMaker"

const getCart = async () => {
  return requestMaker("/carts")
}

export default getCart
