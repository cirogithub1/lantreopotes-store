"use client"

import { FC, useState } from "react"
import { Plus, X } from "lucide-react"
import { Dialog } from "@headlessui/react"

import { Color, Size } from "@/types"
import Button from "@/components/ui/button"
import IconButton from "@/components/ui/icon-button"
import Filter from "./filter"

interface Props {
	sizes: Size[]
	colors: Color[]
}

const MovileFilters: FC<Props> = ({ sizes, colors }) => {
	const [open, setOpen] = useState(false)

	const onOpen = () => setOpen(true)
	const onClose = () => setOpen(false)

	return (  
		<>
			<Button
				className="flex items-center gap-x-2 lg:hidden"
				onClick={onOpen}
			>
				Filters

				<Plus size={20} />
			</Button>

			<Dialog 
				open={open}
				className="relative z-40 lg:hidden"
				onClose={onClose}
			>
				<div className="BackgroundWindow fixed inset-0 bg-black bg-opacity-60" />

				<div className="DialogPosition fixed flex inset-0 z-40">
					<Dialog.Panel
						className="relative flex flex-col ml-auto h-full w-full max-w-xs overflow-y-auto bg-white py-4 pb-6 shadow-xl "
					>
						<div className="CloseButton file:flex items-center justify-end px-4">
							<IconButton 
								icon={<X size={15} />} 
								onClick={onClose} 
							/>
						</div>

						<div className="p-4">
							<Filter 
									valueKey= "sizeId"
									name="Sizes"
									data={sizes}
								/>
								
								<Filter 
									valueKey= "colorId"
									name="Colors"
									data={colors}
								/>
						</div>
					</Dialog.Panel>
				</div>
			</Dialog>
		</>
	)
}
 
export default MovileFilters