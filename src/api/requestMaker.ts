import { public_token } from "../../package.json"
import { store_id } from "../../package.json"

const BASE_URL = "https://app.ecwid.com/api/v3/" + store_id

const DEFAULT_OPTIONS = {
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${public_token}`,
  },
}

export default async function requestMaker (
  url: string,
  options?: typeof DEFAULT_OPTIONS
) {
  const response = await fetch(`${BASE_URL}${url}`, {
    ...DEFAULT_OPTIONS,
    ...options,
  })
  return await response.json()
}
