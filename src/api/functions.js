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