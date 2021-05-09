class API {
	BASE_URL = 'http://localhost:5000/api/v1';

	GET_FAKE_JOBS = 'http://localhost:5000/api/v1/get';
	POST_FAKE_JOBS = 'http://localhost:5000/api/v1/create';
	UPLOAD_BULK_FAKE_JOBS = 'http://localhost:5000/api/v1/uploadFile';
}

const api = new API();

export default api;
