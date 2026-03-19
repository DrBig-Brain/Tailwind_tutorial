import './styles.css';
import logo from './assets/react.svg'

export const App = () => {
    return (
    <div className="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
        <img className="size-12 shrink-0" src={logo} alt="ChitChat Logo" />
        <div>
            <div className="text-xl font-medium text-black dark:text-white">ChitChat</div>
            <p className="text-gray-500 dark:text-gray-400">You have a new message!</p>
            <button class="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 ...">
            Message
            </button>
        </div>
    </div>);
}