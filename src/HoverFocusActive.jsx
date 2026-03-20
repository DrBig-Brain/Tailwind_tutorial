import "./styles.css"

export const HoverFocusActive = () => {
    return <div className="p-5">
        <button class="bg-violet-500 hover:bg-violet-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700 ...">
            Save changes
        </button>
    </div>
}