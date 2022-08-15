
export async function MakeFormRequest(url, body) {
    try {
        const res = await fetch(url, {
            method: 'POST',
            body: body,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        });
        const data = await res.json();
        return data;
    } catch (error) {
        return error;
    }
}