import './App.css';
import './App.css'
import {useFetchAllUsersQuery} from "./services/UserService";
import {useEffect, useState} from "react";
import {Card, Container} from "react-bootstrap";
import {useInView} from "react-intersection-observer";
import {isAllOf} from "@reduxjs/toolkit";
import Cards from "./Components/Cards";
import LastCard from "./Components/LastCard";


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
        return <h1>... Loading</h1>
    }
    if (isError) {
        return <>Error</>
    }

    return (
        <div>
            <Container>
                {data?.map((item) => {
                    let lastElemId = data[data.length - 1]?.id
                    if (item.id === lastElemId) {
                        return (
                            <LastCard item={item} refProp={ref}/>
                        )
                    }
                    return (
                        <Cards key={item.id} item={item} lastElemId={lastElemId} /*refProp={ref}*//>
                    )
                })}
            </Container>
        </div>
    );
}

export default App;
