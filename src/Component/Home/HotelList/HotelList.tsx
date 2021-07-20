import { useState } from 'react';
import imgOne from '../../../img/MaskGroup.png';
import imgTwo from '../../../img/MaskGroup-1.png';
import imgThree from '../../../img/pierre-chatel-innocenti-AlSlE8IAjZo-unsplash 1.png';
import Project from '../Project/Project';

interface IUser {
    id: number;
    name: string;
    email: string;
    img: string;
    amount: number
}

const HotelList = () => {
    const [users, setUsers] = useState<IUser[]>([
        {
            id: 1,
            name: 'Gabriel Rufino',
            email: 'contato@gabrielrufino.com',
            img: imgOne,
            amount: 250
        },
        {
            id: 1,
            name: 'Darth Vader',
            email: 'darthvader@starwars.com',
            img: imgTwo,
            amount: 300
        },
        {
            id: 1,
            name: 'Luke Skywalker',
            email: 'lukeskywalker@starwars.com',
            img: imgThree,
            amount: 350
        }
    ])
    console.log(setUsers);
    return (
        <div className='HotelList'>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className='provides pt-3'>
                            <h3>Project List</h3>
                            <h2>A hotel is an establishment that provides paid lodging on a short-term basis.</h2>
                        </div>
                    </div>
                    {users?.map((user: IUser) => (
                        <Project key={user.name} name={user.name} email={user.email} amount={user.amount} img={user.img}></Project>
                    ))
                    }
                </div>
            </div>
        </div >
    );
};

export default HotelList;



