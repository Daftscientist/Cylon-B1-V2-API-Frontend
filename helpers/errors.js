import ErrorToast from "../components/errorToast";

export function HandleAxiosError(err) {
    if (err.response) {
        const errorResponse = err.response.data;
        let errors = [];
        for (let data of errorResponse) {
            for (const [key, value] of Object.entries(data)) {
                errors.push(key + " " + value)
            }
        }
        ErrorToast(JSON.stringify(errors))
    } else {
        ErrorToast("An unknown error has occured, please try again.")
    }
}




