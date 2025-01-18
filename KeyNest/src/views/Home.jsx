import { useEffect, useState } from 'react'
import BannerComp from '../components/BannerComp'
import CardComp from '../components/CardComp'
import data from '../../data/data.json'

function Home() {
    const [apartments, setApartments] = useState([])

    //using data.json file in data folder to get the data
    function fetchApartments() {
        setApartments(data)
    }

    useEffect(() => {
        fetchApartments()
    }, [])

    const CardMap =() => {
        return apartments.map((apartment) => (
            <CardComp 
            key={apartment.id}
             id={apartment.id}
              title={apartment.title} 
              cover={apartment.cover} />   
        ))
    }

  return (
    <main>
    <BannerComp imageUrl={"/assets/cabin.jpg"} title={"Your key to the perfect nest"} />
      <section className="cards-container">
        <CardMap />
      </section>
    </main>
  )
}

export default Home