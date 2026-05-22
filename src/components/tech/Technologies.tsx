import ReactLogo from "../../assets/react.svg"
import GithubLogo from "../../assets/github-svgrepo-com.svg"
import MongoLogo from "../../assets/mongodb-svgrepo-com.svg"
import NpmLogo from "../../assets/npm-svgrepo-com.svg"
import NodebLogo from "../../assets/node-16-svgrepo-com.svg"
import PrismaLogo from "../../assets/typescript-svgrepo-com.svg"
import ViteLogo from "../../assets/vite.svg"

export const Technologies = () => {
    return (
        <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold text-white text-center mb-10">Technologies i use</h1>
            <div className="grid grid-cols-4 gap-1 my-8 mx-auto justify-items-center">
                <img className="w-20 h-20" src={ReactLogo} alt="" />
                <img className="w-20 h-20" src={GithubLogo} alt="" />
                <img className="w-20 h-20" src={MongoLogo} alt="" />
                <img className="w-20 h-20" src={NpmLogo} alt="" />
                <img className="w-20 h-20" src={NodebLogo} alt="" />
                <img className="w-20 h-20" src={PrismaLogo} alt="" />
                <img className="w-20 h-20" src={ViteLogo} alt="" />

            </div>
        </div>
    )
}
