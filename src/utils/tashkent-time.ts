export function getTashkentTime() {
	// 5 hours offset in milliseconds
	const date = new Date("UTC+5:00");
	const time = date.toLocaleString("uz-UZ", {
		hour: "2-digit",
		hour12: false,
		timeZone: "Asia/Tashkent",
	});

	// Format the time as HH:MM

	return time;
}
