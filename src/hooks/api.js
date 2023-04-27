

/**
 *
 * @param {*} url
 * @param {*} options
 * @url https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
 * @description  Routes object, apiUrl and redirect url for other apps
 */
const loginUrl = import.meta.env.VITE_LOGIN_URL || 'http://localhost:3122';
const apiUrl = import.meta.env.VITE_API_URL || ' http://127.0.0.1:8080/api';
const domain = import.meta.env.VITE_DOMAIN || '';
const videoApiUrl = import.meta.env.VITE_VIDEO_API_URL || 'http://localhost:8082/api/video/token';
const pollingRate = import.meta.env.VITE_POLLING_RATE || 3000;
const Routes = {
	getPatientbyId: (patientId) => {
		return `/i/patients/patient_profile/${patientId}`;
	},
	updatePatient: (patientId) => {
		return `/i/patients/complete_profile/${patientId}`;
	},
	getChildren: (patientId) => {
		return `/i/children/${patientId}`;
	},
	updateChild: (childId) => {
		return `/i/children/${childId}`;
	},
	getChildbyID: (childId) => {
		return `i/children/${childId}`;
	},
	newChild: (patientId) => {
		return `/i/children/${patientId}/createchild`;
	},
	addPatientToHosptial: (patientId) => {
		return `/i/patienthospital/${patientId}/createpatient`;
	},
	getPatientHospital: (patientId) => {
		return `/i/patienthospital/${patientId}/patienthospital`;
	},
	getPatientsAtHospital: () => {
		return '/i/patienthospital/getallpatients';
	},
	getAllHospitals: () => {
		return '/i/patienthospital/getallhospitals';
	},
	newDependent: (patientId) => {
		return `/i/dependent/${patientId}/createdependent`;
	},
	getDependents: (patientId) => {
		return `/i/dependent/${patientId}`;
	},
	updateDependent: (dependentId) => {
		return `/i/dependent/${dependentId}`;
	},
	getPrescriptions: (userTypeId) => {
		return `/i/prescriptions/${userTypeId}/prescriptionsbydate`;
	},
	getConsultation: (id) => {
		return `/i/consultations/${id}`;
	},
	updateConsultationHistoryRead: (consultationId) => {
		return `/i/consultations/setconsultationasread/${consultationId}`;
	},
	getHistory: (patientId) => {
		return `/i/consultations/history/${patientId}`;
	},
	
	getConsultationBooked: () => {
		return "/i/consultations/booked;"
	},
	
	/**
	 * @dreprecated
	 */
	refer: {
		newReferral: (mobile) => {
			return `i/referral/${mobile}`;
		},
		getReferers: (userId) => {
			return `/i/referral/getreferredusers/${userId}`;
		},
		getReferral: () => {
			return 'i/referral/getreferraluser';
		},
		addtoReferral: () => {
			return '/i/referral/addreferreduser';
		},
		getRefersIds: (userId) => {
			return `i/referral/getreferredusers/${userId}`;
		}
	},
	actions: {
		newFeedback: (userId) => {
			return `i/i/feedback/${userId}/createfeedback`;
		}
	},
	/**
	 * @dreprecated
	 */
	messages: {
		updateMessageRead: (messageId) => {
			return `/i/message/setread/${messageId}`;
		},
		getMessages: (userId) => {
			return `/i/message/get/${userId}`;
		}
	},
	booking: {
		createBooking: `${consultationsUrl}/initialize_transaction`,
		finalizeBooking: `${consultationsUrl}/finalize_booking`
	},
	symptoms: {
		getAssociatedSymptom: `${symptomUrl}/associated_symptoms`,
		getSymptomMessage: `${symptomUrl}/message`,
		getRelatedSymptoms: `${symptomUrl}/related_symptoms`,
		getBodyAreas: `${symptomUrl}/body_areas`
	},
	payment: {
		getVerifyPayment: (reference) => {
			return `/i/payment/verify/?reference=${reference}`;
		}
	},
	referralFriend: {
		inviteFriend: () => '/invitefriend',
		getUserbyId: (patientId) => {
			return `/i/patients/user_profile/${patientId}`;
		},
	}

};

export { apiUrl, Routes, loginUrl, domain, videoApiUrl, pollingRate };
