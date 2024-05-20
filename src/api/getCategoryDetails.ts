import requestMaker from "./requestMaker"

const getCategoryDetails = async (id: string) => {
  return requestMaker(`/categories/${id}`)
}

export default getCategoryDetails
