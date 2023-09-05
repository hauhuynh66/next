import { StatsRing, StatsRingProps } from "../components/Card";

export const metadata = {
    title : "Dashboard"
}

async function getData() : Promise<StatsRingProps[]> {
    return []
}

const Dashboard = async () => {
    const data = await getData();
    return ( 
        <div>
            {
                data.map((ring, index)=> {
                    return <StatsRing data={[]} key={index}/>
                })
            }
        </div> 
    );
}
 
export default Dashboard;