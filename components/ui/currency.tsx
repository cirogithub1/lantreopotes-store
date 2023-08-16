// "use client"

import { FC } from "react"

const formatter = new Intl.NumberFormat("EUR", {
	style: 'currency',
	currency: 'EUR'
})

interface Props {
	value?: string | number
}

const Currency: FC<Props> = ({ value }) => {
	// Start Block for preventing the error:
	// const [isMounted, setIsMounted] = useState(false)
	// useEffect(() => {
	// 	setIsMounted(true)
	// }, [])
	// if (!isMounted) return null
	// End block for preventing the error
	
	return (  
		<p className="font-semibold">
			{formatter.format(Number(value))}
		</p>
	)
}

export default Currency