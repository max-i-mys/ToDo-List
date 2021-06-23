
export function determineStatus(status) {
	switch (status) {
		case 'new':
		return "new"
		case 'process':
			return "process"
		case 'finished':
			return "finished"
		default:
			throw new Error(`Status is'n correct "${status}"`)
		}
}

export function changeStatus(status){
		switch (status) {
			case 'new':
				return 'process'
			case 'process':
				return 'finished'
			default:
				return 'finished' 
		}
}