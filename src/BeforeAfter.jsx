import './styles.css'

export const BeforeAfter = () => {
    return (<>
        <h1 className="text-red-400">TEST</h1>
        <div className="before:content-['Hello'] before:text-red-500 after:content-['ThisIsAfter'] after:text-red-500">
            OWO
        </div>
    </>)
}