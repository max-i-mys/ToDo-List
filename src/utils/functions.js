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
export const formatterDate = new Intl.DateTimeFormat("ru", {
	day: "numeric",
	month: "2-digit",
	year: "2-digit",
	hour: "numeric",
	minute: "numeric",
})
