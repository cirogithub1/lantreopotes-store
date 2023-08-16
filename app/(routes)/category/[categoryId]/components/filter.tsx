"use client"

import { useRouter, useSearchParams } from 'next/navigation';
import qs from 'query-string';
import { FC } from 'react';

import { Color, Size } from '@/types';
import Button from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface Props {
	valueKey: string
	name: string
	data: (Size | Color)[]
}

const Filter: FC<Props> = ({ valueKey, name, data }) => {
	const searchParams = useSearchParams()
	const router = useRouter()

	const selectedValue = searchParams.get(valueKey)

	const handelClick = (id: string) => {
		const current = qs.parse(searchParams.toString())
		const query = {
			...current,
			[valueKey]: id
		}

		if (current[valueKey] === id) {
			query[valueKey] = null
		}

		const url = qs.stringifyUrl(
			{
				url: window.location.href,
				query
			}, 
			{skipNull: true}
		)

		router.push(url)
	}

	return (  
		<div className="mb-8">
			<h3 className="text-lg font-semibold">
				{name}
			</h3>

			<hr className='my-4'/>

			<div className="flex flex-wrap gap-2">
				{data.map((filter) => (
					<div key={filter.id} className="flex items-center">
						<Button
							className={cn(
								'text-sm text-gray-800 bg-white rounded-md border border-gray-300',
								selectedValue === filter.id && "bg-black text-white"
							)}
							onClick={() => handelClick(filter.id)}
						>
							{filter.name}
						</Button>
					</div>
				))}
			</div>
		</div>

	);
}
 
export default Filter;