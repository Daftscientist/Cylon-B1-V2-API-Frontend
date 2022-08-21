import ErrorToast from "../components/errorToast";

export default function HandleAxiosError(err) {
    try {
        const errorResponse = err.response.data;
        const toastHeader = errorResponse["detail"];
        console.log(errorResponse);

        if ("errors" in errorResponse) {
            errorResponse["errors"].forEach(
                (error) => {
                    ErrorToast(error);
                    console.log(error);
                }
            );
        }
        else {
            ErrorToast(toastHeader);
        }
    } catch {
        try {
            ErrorToast(err.response.data.details);
        } catch {
            ErrorToast("Something went wrong, please try again later.");
        }
    }
}
