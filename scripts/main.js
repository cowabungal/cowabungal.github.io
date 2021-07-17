const navigationUserName = document.querySelector('.navigation-user__name');
const navigationUserNameArrow = document.querySelector('.navigation-user__name__arrow');
const navigationUserNotifications = document.querySelector('.navigation-user__notifications');

const navigationUserSettings = document.querySelector('.navigation-user__settings');
const navigationNotifications = document.querySelector('.navigation-notifications');

let navigationUserSettingsFlag = 0;
let navigationNotificationsFlag = 0;

document.addEventListener('click', e => {
    if (e.target.parentNode === navigationUserName) {
        navigationUserSettings.classList.toggle('hidden');
        navigationUserSettingsFlag = 1;
    } else if (!e.target.closest('.navigation-user__settings') && navigationUserSettingsFlag) {
        navigationUserSettings.classList.add('hidden');
        navigationUserSettingsFlag = 0;
    }

    if (e.target === navigationUserNotifications) {
        navigationNotifications.classList.toggle('hidden');
        navigationNotificationsFlag = 1;
    } else if (!e.target.closest('.navigation-notifications') && navigationNotificationsFlag) {
        navigationNotifications.classList.add('hidden');
        navigationNotificationsFlag = 0;
    }
});

navigationUserSettings.style.right = window.innerWidth - navigationUserNameArrow.getBoundingClientRect().x + 'px';
navigationNotifications.style.right = window.innerWidth - navigationUserNotifications.getBoundingClientRect().x -
    navigationUserNotifications.getBoundingClientRect().width + 'px';

window.onresize = () => {
    navigationUserSettings.style.right = window.innerWidth - navigationUserNameArrow.getBoundingClientRect().x + 'px';
    navigationNotifications.style.right = window.innerWidth - navigationUserNotifications.getBoundingClientRect().x -
        navigationUserNotifications.getBoundingClientRect().width + 'px';
}


// Nazar Bogynia JS
const tabBtn = document.querySelectorAll('.tabs-list__item');
const tabContent = document.querySelectorAll('.settings-content');
for (const btn of tabBtn) {
	const btnIndex = btn.getAttribute('data-tabs-id');
	btn.addEventListener('click', (e) => {
		for (const btn2 of tabBtn) {
			btn2.classList.remove('active');
		}
		btn.classList.add('active');
		for (const content of tabContent) {
			const contentIndex = content.getAttribute('data-content-id');
			if (contentIndex == btnIndex) {
				content.classList.add('active');
			} else {
				content.classList.remove('active');
			}
		}
	})
}

const accordionSecurity = document.querySelectorAll('.security__accordion');
const accodionBtn = document.querySelectorAll('.security__btn-change');
for (const btn of accodionBtn) {
	btn.addEventListener('click', (e) => {
		const btnParent = e.target.parentNode.parentNode;
		if (btnParent.classList.contains('active')) {
			btn.classList.remove('active');
			btnParent.classList.remove('active');
		} else {
			for (const acc of accordionSecurity) {
				acc.classList.remove('active')
			}
			btn.classList.add('active');
			btnParent.classList.add('active');
		}
	});
}

if (document.body.classList.contains('coursesPage')) {
	const progressDropdownBtn = document.querySelector('.progress__arrow');
	const progressDropdown = document.querySelector('.courses-item__dropdown');
	progressDropdownBtn.addEventListener('click', () => {
		progressDropdown.classList.toggle('active');
		progressDropdownBtn.classList.toggle('active');
	});
	document.addEventListener('click', (e) => {
		if (e.target !== progressDropdownBtn && e.target.parentNode !== progressDropdownBtn) {
			progressDropdown.classList.remove('active');
			progressDropdownBtn.classList.remove('active');
		}
	});
}

if (document.body.classList.contains('coursePage') || document.body.classList.contains('course-owner-page')) {
	const accordionCoursePage = document.querySelectorAll('.lesson');
	const accordionCoursePageBtn = document.querySelectorAll('.lesson__open-accordion');
	const accordionCoursePageShowAll = document.querySelector('.course-page__show-btn');
	const accordionCoursePageHideAll = document.querySelector('.course-page__hide-btn');
	for (const btn of accordionCoursePageBtn) {
		btn.addEventListener('click', (e) => {
			const btnParent = e.target.parentNode.parentNode;
	
			if (btnParent.classList.contains('active')) {
				btn.classList.remove('active');
				btnParent.classList.remove('active');
			} else {
				for (const acc of accordionSecurity) {
					acc.classList.remove('active')
				}
				btn.classList.add('active');
				btnParent.classList.add('active');
			}
		});
	}
	accordionCoursePageShowAll.addEventListener('click', () => {
		for (const acc of accordionCoursePage) {
			acc.classList.add('active');
		}
		for (const btn of accordionCoursePageBtn) {
			btn.classList.add('active');
		}
	});
	accordionCoursePageHideAll.addEventListener('click', () => {
		for (const acc of accordionCoursePage) {
			acc.classList.remove('active');
		}
		for (const btn of accordionCoursePageBtn) {
			btn.classList.remove('active');
		}
	});
}

if (document.body.classList.contains('course-owner-page')) {
	const sidebarAcc = document.querySelectorAll('.sidebar-owner__accordion');
	const sidebarAccOpen = document.querySelectorAll('.sidebar-owner__title');

	for (const btn of sidebarAccOpen) {
		btn.addEventListener('click', (e) => {
			e.target.preventDefault;
			const accordionParent = e.target.parentNode;
			btn.classList.toggle('active');
			accordionParent.classList.toggle('active');
		});
	}
}

if (document.body.classList.contains('task-constructor')) {
	const inputDropdown = document.querySelector('.info__input_arrow_drop');
	inputDropdown.addEventListener('click', () => {
		inputDropdown.parentNode.classList.toggle('active');
	});
}

const settingsInput = document.querySelectorAll('.general__input_arrow');

for (const input of settingsInput) {
	input.addEventListener('click', () => {
		input.parentNode.classList.toggle('active');
	});
}