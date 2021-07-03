export function getNewStatus(status) {
	switch (status) {
		case "new":
			return "process"
		case "process":
			return "finished"
		default:
			return "finished"
	}
}
