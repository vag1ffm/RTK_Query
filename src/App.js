import './App.css';
import './App.css'
import {useFetchAllUsersQuery} from "./services/UserService";


function App() {
    const {data, isLoading, isError} = useFetchAllUsersQuery()

    console.log(data)


    if (isLoading) {
        return <h1>... Loading</h1>
    }

    if (isError) {
        return <>Error</>
    }

    return (
        <div>
            {data?.map(item =>
                <div key={item.id} className={'item'}>
                    <h2 className={'name'}>{item.name}</h2>
                    <p className={'address'}>
                        {item.address.street}, {item.address.suite}, {item.address.city}, {item.address.zipcode}
                    </p>
                    <p className={'email'}>{item.email}</p>
                </div>
            )}
        </div>
    );
}

export default App;
