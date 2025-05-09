interface duck {
    id: string
}

export function Duk({ id }: duck) {
    return (
        <div className="dusk" id={id}></div>
    )
}