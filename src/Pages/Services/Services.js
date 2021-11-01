import spin from '../../images/9.gif';
import './Services.css';
import All from './AllCategory/All';
import useServices from '../../Hooks/useServices';

const Services = () => {
    const [services] = useServices([]);
    return (
        <div className="bg-blue-100 py-24">
            <div className="container mx-auto full-width-all">
                <h2 className="md:text-8xl text-5xl text-indigo-700 font-extrabold md:pb-10 text-center pb-5">
                    All Offer Packages
                </h2>
                {/* servies area main body  */}
                {services.length ? (
                    <All></All>
                ) : (
                    <div>
                        <img className="m-auto block" src={spin} alt="" />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Services;
