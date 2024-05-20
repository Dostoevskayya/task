import requestMaker from "./requestMaker"

const getCategories = async () => {
  return requestMaker("/categories")
}

export default getCategories
