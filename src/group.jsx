import './styles.css'

export const Group = () => {
    return (<a href="#" className="group">
            <div>
                <svg className="stroke-sky-500 group-hover:stroke-white" fill="none" viewBox="0 0 24 24">
                </svg>
                <h3 className="text-gray-900 group-hover:text-white">New project</h3>
            </div>
            <p className="text-gray-500 group-hover:text-white">Create a new project from a variety of starting templates.</p>
            </a>
    )
}