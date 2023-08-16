"use client"

import { FC } from "react";
import Image from "next/image"
import { Tab } from "@headlessui/react"

import { Image as ImageType } from "@/types"
import GalleryTab from "./gallery-tab"

interface Props {
	images: ImageType[]
}

const Gallery: FC<Props> = ({ images }) => {
	return (  
		<Tab.Group as="div" className="flex flex-col-reverse">
			<div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
				<Tab.List className="grid grid-cols-4 gap-6">
					{images.map((image) => (
						<GalleryTab key={image.id} image={image} />
					))}
				</Tab.List>
			</div>

			<Tab.Panels className="aspect-square start-full">
				{images.map((image) => (
					<Tab.Panel key={image.id}>
						<div className="relative aspect-square h-full w-full sm:rounded-lg overflow-hidden">
							<Image 
								className="object-cover object-center"
								fill
								sizes="20"
								src={image.url}
								alt="image.url"							
							/>
						</div>
					</Tab.Panel>
				))}
			</Tab.Panels>
		</Tab.Group>
	)
}
 
export default Gallery