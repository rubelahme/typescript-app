import React from 'react';
interface IProps {
    name: string;
    email?: string;
    img: string;
    amount: number;
}
const Project = ({ name, email, img, amount }: IProps) => {
    return (
        <div className="col-md-4 pt-4">
            <div className='project'>
                <img src={img} alt="" />
                <h2>{name}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere id modi excepturi assumenda dolorum quas at voluptas necessitatibus quibusdam ipsum? At dicta culpa eaque, voluptas ducimus rerum qui accusantium repellendus!</p>
                <div className='d-flex justify-content-between'>
                    <span> <b>Email:</b> {email}</span> <span> <b>${amount}</b> </span>
                </div>
                <button>Booking Now</button>
            </div>
        </div>
    );
};

export default Project;