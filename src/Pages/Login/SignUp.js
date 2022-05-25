import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import Loading from '../Shared/Loading/Loading';
import { toast } from 'react-toastify';

const SignUp = () => {

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
    }

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (user || gUser) {
            navigate(from, { replace: true });
        }
    }, [user, gUser, from, navigate]);

    if (updateError) {
        toast.error('Profile updated failed')
    }

    if (loading || gLoading || updating) {
        return <Loading />
    }

    return (
        <div className='container mx-auto my-10 flex items-center justify-center'>
            <div className="card sm:w-96 max-w-lg bg-base-100 shadow-xl">
                <div className="px-6 py-12">
                    <h2 className="text-accent text-4xl mb-6 text-center">Sign Up</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-4">
                            <label htmlFor="" className="font-semibold text-lg">Name</label>
                            <input
                                type="text"
                                className="input input-bordered w-full"
                                {...register("name", {
                                    required: "Name is Required"
                                })}
                            />
                            {errors.name?.type === 'required' && <small className='text-red-500'>{errors.name.message}</small>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="" className="font-semibold text-lg">Email</label>
                            <input
                                type="email"
                                className="input input-bordered w-full"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /\S+@\S+\.\S+/,
                                        message: 'Provide a valid email'
                                    }
                                })}
                            />
                            {errors.email?.type === 'required' && <small className='text-red-500'>{errors.email.message}</small>}
                            {errors.email?.type === 'pattern' && <small className='text-red-500'>{errors.email.message}</small>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="" className="font-semibold text-lg">Password</label>
                            <input
                                type="password"
                                className="input input-bordered w-full"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Password is too short'
                                    }
                                })}
                            />
                            {errors.password?.type === 'required' && <small className='text-red-500'>{errors.password.message}</small>}
                            {errors.password?.type === 'minLength' && <small className='text-red-500'>{errors.password.message}</small>}
                        </div>
                        <input className='w-full btn btn-accent text-white mb-3' value="signup" type="submit" />
                    </form>
                    {error && <p className="text-red-500">{error.message}</p>}
                    <p className="text-center">Already have an account? <Link className='text-secondary' to="/login">Login</Link></p>
                    <div className="flex flex-col w-full border-opacity-50">
                        <div className="divider">OR</div>
                    </div>
                    <button onClick={() => signInWithGoogle()} className="btn btn-outline btn-accent w-full">Continue with Google</button>
                    {gError && <p className="text-red-500 mt-3">{gError.message}</p>}
                </div>
            </div>
        </div>
    );
};

export default SignUp;