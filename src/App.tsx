import Button from "./components/Button"
import Input from "./components/Input"

const App = () => {
    return (
        <div className="text-blue-500">
            <Input placeholder="Enter your name" hint="we wont share your email" />
            <Button>Button</Button>
        </div>
    )
}

export default App