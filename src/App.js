import './App.css';
import './App.css'
import {useFetchAllUsersQuery} from "./services/PostsService";
import {useEffect, useState} from "react";
import { Container} from "react-bootstrap";
import {useInView} from "react-intersection-observer";
import Cards from "./Components/Cards";


function App() {
    const [skip, setSkip] = useState(0)
    const {data, isLoading, isError} = useFetchAllUsersQuery({
        end: skip + 10
    })

    const {ref, inView} = useInView({
        threshold: 1
    });


    useEffect(()=> {
        if (inView) {
            setSkip(skip+10)
        }
    },[inView])


    if (isLoading) {
        return <Container><h2>... Loading</h2></Container>
    }
    if (isError) {
        return <Container><h2>Error</h2></Container>
    }

    return (
        <div>
            <Container>
                {data?.map((item) => {
                    let lastElemId = data[data.length - 1]?.id
                    return (
                        <Cards key={item.id} item={item} lastElemId={lastElemId} refProp={ref}/>
                    )
                })}
            </Container>
        </div>
    );
}

export default App;
