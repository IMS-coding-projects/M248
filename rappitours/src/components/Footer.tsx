import github from "/github-logo.svg";
import {toast} from "sonner";

export default function Footer() {
    return (
        <footer className="bg-secondary text-white py-3">
            <div className="container mx-auto text-center text-sm flex items-center justify-between px-3">
                <div/>
                <div>
                    <p>Rappitours all rights reserved {new Date().getFullYear()}</p>
                    <Link text="Support"/> - <Link text={"Open Source on GitHub"}
                                                   url={"https://github.com/IMS-coding-projects/m248"}/>
                </div>
                <img
                    className="hover:cursor-pointer"
                    onClick={() => window.open('https://github.com/IMS-coding-projects/m248', '_blank')}
                    src={github}
                    alt="GitHub Repository"
                    style={{width: '25px', height: '25px'}}
                />
            </div>
        </footer>
    );
}

function Link({text, url = null}: { text: string; url?: string | null }) {
    return (
        (url) ? <a className={"underline hover:cursor-pointer"} href={url} target={"_blank"}
                   rel="noopener noreferrer">{text}</a>
            :
            <span className={"underline hover:cursor-pointer"}
                  onClick={() => toast("Uh oh!", {description: "This feature is not implemented yet :("})}>{text}</span>
    )
}
