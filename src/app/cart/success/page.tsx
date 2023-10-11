import {redirect} from "next/navigation";
import Stripe from "stripe";

export default async function CartSuccessPage({searchParams}: {searchParams:{session_id:string}}){

    if (!process.env.STRIPE_SECRET_KEY) {
        return null;
    }

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
        apiVersion: "2023-08-16",
        typescript: true,
    });

    const session = await stripe.checkout.sessions.retrieve(searchParams.session_id)


    return <div>{session.payment_status}</div>;
}


