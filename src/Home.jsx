import React from 'react';
import ItemsCard from "./ItemsCard";
import data from "./data";

function Home() {
    console.warn(data.productData)

    return (
        <div>
            <h1 className="text-center mt-3">All Items</h1>
            <section className="py-4 container">
                <div className="row justify-content-center">
                    {data.productData.map((item, index) => {
                        return (
                            <ItemsCard
                                img={item.img}
                                title={item.title}
                                desc={item.desc}
                                price={item.price}
                                item={item}
                                key={index}/>
                        )
                    })}
                </div>
            </section>
        </div>
    );
}

export default Home;