// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
export default function Page({params}: {
    params:{
        uid: number
    }
}) {
    return <>
    <h1>Hello, Dashboard Page!</h1>
    {params.uid}
    </>
}
