import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
type Inputs = {
    example: string,
    exampleRequired: string,
    examples: string,
    examplea: string,
    examplqe: string
};
export default function Contact() {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => console.log(data);
    return (
        <div className='Contact'>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center ">
                        <h2>Contact From</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2">
                    </div>
                    <div className="col-md-8">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="row">
                                <div className="col-md-6 pt-3">
                                    <label className="form-label">First Name</label>
                                    <input className='form-control' {...register("example")} />
                                </div>
                                <div className="col-md-6 pt-3">
                                    <label className="form-label">Last Name</label>
                                    <input className='form-control' {...register("exampleRequired", { required: true })} />
                                    {errors.exampleRequired && <span>This field is required</span>}
                                </div>
                                <div className="col-md-6 pt-3">
                                    <label className="form-label">Email Address</label>
                                    <input className='form-control'  {...register("examples")} />
                                </div>
                                <div className="col-md-6 pt-3">
                                    <label className="form-label">Phone Number</label>
                                    <input className='form-control'{...register("examplea")} />
                                </div>
                                <div className="col-md-12 pt-3">
                                    <label className='mb-2'>Details</label>
                                    <textarea className="form-control pb-5" placeholder="Details here..." id="floatingTextarea2"  {...register("examplqe")}></textarea>
                                </div>
                            </div>
                            <div className="col mt-4 mb-4">
                                <input className='Submit' type="submit" />
                            </div>
                        </form>
                    </div>
                    <div className="col-md-2">
                    </div>
                </div>
            </div>
        </div>







        // <form onSubmit={handleSubmit(onSubmit)}>
        //     <input defaultValue="test" {...register("example")} />
        //     <input {...register("exampleRequired", { required: true })} />
        //     {errors.exampleRequired && <span>This field is required</span>}
        //     <input type="submit" />
        // </form>
    );
}