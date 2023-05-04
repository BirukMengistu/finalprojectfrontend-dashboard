/* eslint-disable no-undef */
const now = new Date();

const getTime = () => {
	const day = `0${now.getDate()}`.slice(-2);
	const hour = `0${now.getHours()}`.slice(-2);
	const minute = `0${now.getMinutes()}`.slice(-2);
	const month = `0${now.getMonth() + 1}`.slice(-2);
	const date = `${now.getFullYear()}-${month}-${day}`;

	return { day, month, date, hour, minute };
};

const greetUser = () => {
	const currentTime = getTime().hour;

	if (currentTime >= 0 && currentTime <= 12) {
		return ' Morning';
	} else if (currentTime > 12 && currentTime <= 18) {
		return ' Afternoon';
	} else {
		return 'Evening';
	}
};

const unreadMessages = (messages) => {
	return Boolean(messages?.find((message) => message.hasBeenRead === false));
};

const dateFixed = now.toISOString().slice(0, 10);

export { greetUser, getTime, unreadMessages, dateFixed };
