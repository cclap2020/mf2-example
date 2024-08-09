const Button = (props: { btnProps: string }) => {
    const { btnProps } = props
    return (<div>
        <h3>{btnProps}</h3>
        <button>App1 Button</button>
    </div>)
}

export default Button