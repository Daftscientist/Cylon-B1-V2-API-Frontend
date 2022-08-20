import ErrorToast from "../components/errorToast";

export function HandleAxiosError(err) {
    if (err.response) {
        const errorResponse = err.response.data;
        if ("error" in errorResponse) {
            let errors = [];
            for (let data of errorResponse.errors) {
                for (const [key, value] of Object.entries(data)) {
                    errors.push(key + " " + value)
                }
            }
            return JSON.stringify(errors)
        } else {
            return errorResponse.detail;
        }
    } else {
        return "An unknown error has occured, please try again."
    }
}
