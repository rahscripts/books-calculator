import Image from "next/image";
import { User } from "next-auth";

type Sprops = {
    session: { user?: User } | null,
}
const UserAccount = ({ session }: Sprops) => {

    return (
        <div className="flex gap-3 items-center justify-center">
            <div className="avatar">
                <div className="relative ring-primary ring-offset-base-100 w-10 h-10 rounded-full ring-2 ring-offset-2 overflow-hidden">
                    {session?.user?.image ? (
                        <Image src={session.user.image} alt={session.user.name || "User avatar"} fill className="object-cover" />
                    ) : (
                        <div className="w-full h-full bg-slate-200"></div>
                    )}
                </div>
            </div>
            <div className="flex flex-col items-start">
                <div>{session?.user?.name}</div>
                <div className="tracking-widest opacity-80">@rahscripts</div>
            </div>
        </div>
    )
}

export default UserAccount;