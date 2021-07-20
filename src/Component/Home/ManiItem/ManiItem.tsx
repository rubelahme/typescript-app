import imgOne from '../../../img/bernard-hermant-6ftZuO_-b64-unsplash 1.png';

const ManiItem = () => {
    return (
        <div className='ManiItem'>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className='pt-5'>
                            <h1>Website design services for your businesses.</h1>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium dicta et dolores dolorum maiores magnam vitae eaque repellendus? Dolore aliquam minima autem fugiat laudantium rem suscipit distinctio cupiditate accusantium ex.</p>
                            <button>Details</button>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className='pt-5'>
                            <img className='imgOne' src={imgOne} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManiItem;