import { Size } from "@/types"

const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`

const getSizes = async (): Promise<Size[]> => {
	// const res = await fetch(URL, { next: { revalidate: 10 } })
	const res = await fetch(URL)
	return res.json()
}
 
export default getSizes