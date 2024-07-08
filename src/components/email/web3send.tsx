"use server";

export default async function sendEmail({
    email,
    name,
    text,
}: {
    email: string;
    name: string;
    text: string;
}) {
    const data = {
        email: email,
        name: name,
        text: text,
        access_key: process.env.WEB3_ACCESS_KEY,
    };
    console.log(data);
    const json = JSON.stringify(data);
    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: json,
    });
    const result = await response.json();
    console.log(result)
    if (result.success) {
        console.log(result);
    }
}
