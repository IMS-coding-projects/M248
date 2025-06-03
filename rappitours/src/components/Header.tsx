import {ModeToggle} from "@/components/ui/mode-toggle.tsx";
import {LoginDialog} from "@/components/dialogs/LoginDialog.tsx";
import logo from "/logo.svg";

export default function Header() {
    return (
        <>
            <header className={"flex items-center justify-between p-3 bg-secondary text-primary"}>
                <div className={"flex items-center gap-2"}>
                    <img src={logo} alt="Logo" style={{width: '55px', height: '55px'}}/>
                    <div className={"flex flex-col"}>
                        <span className={"text-3xl font-bold"}>RappiTours</span>
                        <span
                            className={"text-sm text-secondary-foreground"}>Create Trails and monitor their weather!</span>
                    </div>
                </div>
                <div className={"flex items-center gap-4 "}>
                    <ModeToggle/>
                    <LoginDialog/>
                </div>
            </header>
        </>
    );
}

