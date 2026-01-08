
type Sprops = {
    session: any,
}
const UserAccount = ({ session }: Sprops) => {

    return (
        <div className="flex gap-3 items-center justify-center">
            <div className="avatar">
                <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
                    <img src={session?.user?.image} />
                </div>
            </div>
            <div className="flex flex-col items-start">
                <div>{session?.user?.name}</div>
                <div className="tracking-widest opacity-80">@rahscripts</div>
                </div>
        </div>
    )
}

export default UserAccount