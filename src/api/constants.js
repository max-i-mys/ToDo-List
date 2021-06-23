export const BASE_URL = 'http://localhost:3004'
export const formatterDate = new Intl.DateTimeFormat("ru", {
	day: 'numeric',
	month: "2-digit",
	year: "numeric",
  hour: "numeric",
  minute: "numeric",
});