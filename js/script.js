// Navigation Modal
function openNavigation() {
	const navModal = document.getElementById('nav__menu--popup');

	if (navModal.style.display === 'none') {
		navModal.style.display = 'block';
	} else {
		navModal.style.display = 'none';
	}
}

// Crowdfund Modal Start Bamboo Stand
function openBackThisProject() {
	const startCrowdfundModal = document.getElementById(
		'backThisProject__popup-modal'
	);

	if (startCrowdfundModal.style.display === 'none') {
		startCrowdfundModal.style.display = 'block';
	} else {
		startCrowdfundModal.style.display = 'none';
	}
}

function closeBackThisProject() {
	const startCrowdfundModal = document.getElementById(
		'backThisProject__popup-modal'
	);

	if (startCrowdfundModal.style.display === 'block') {
		startCrowdfundModal.style.display = 'none';
	} else {
		startCrowdfundModal.style.display = 'none';
	}
}

// Thank you modal popup
function thankYouBanner() {
	const thankModal = document.getElementById('thankYouModalPopup');

	if (thankModal.style.display === 'none') {
		thankModal.style.display = 'block';
	} else {
		thankModal.style.display = 'none';
	}
}

// Close Thank You Modal
function closeThankYouModal() {
	const close = document.getElementById('thankYouModalPopup');

	if (close.style.display === 'block') {
		close.style.display = 'none';
	} else {
		close.style.display = 'none';
	}
}
