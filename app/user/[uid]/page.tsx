export default async function Page({
    params,
  }: {
    params: Promise<{ uid: number }>
  }) {
    const uid = (await params).uid
    return <div>My Post: {uid}</div>
  }